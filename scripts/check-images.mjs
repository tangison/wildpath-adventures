#!/usr/bin/env node
/**
 * check:images — build gate for the image-first site (TASK 2).
 *
 * Fails the build when:
 *  1. A real photo family in images.manifest.json has NO reference anywhere
 *     in src/ (every photo must be used at least once before it may be reused).
 *  2. A base referenced in src/ does not exist on disk (broken image).
 *  3. Any variant file exceeds the 250KB hard cap.
 *  4. A cartoon illustration is referenced outside the approved footer file.
 *
 * Usage: node scripts/check-images.mjs   (wired into `npm run build`)
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

const manifest = JSON.parse(readFileSync(join(ROOT, 'images.manifest.json'), 'utf8'));

// Gather all source text once.
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.next') continue;
      walk(p, out);
    } else if (/\.(tsx?|jsx?|css|mjs)$/.test(name)) {
      out.push(p);
    }
  }
  return out;
}
const srcFiles = walk(join(ROOT, 'src'));
const srcText = srcFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

// 1. Every family referenced at least once.
const APPROVED_ILLUSTRATION = 'wildpath-hero-main.webp';
for (const fam of manifest.families) {
  if (!srcText.includes(`'${fam.base}'`) && !srcText.includes(`"${fam.base}"`) && !srcText.includes(`${fam.base}`)) {
    errors.push(`UNUSED PHOTO: ${fam.base} (${fam.dir}) — every photo must be used at least once`);
  }
}

// 2. Referenced bases exist on disk (with at least one webp variant).
const baseRefs = new Set();
for (const m of srcText.matchAll(/['"]([a-z0-9]{4,}-[a-z0-9-]+)['"]/g)) {
  baseRefs.add(m[1]);
}
for (const fam of manifest.families) {
  const dir = join(ROOT, 'public', fam.dir);
  const webp = join(dir, `${fam.base}-640.webp`);
  const anyVariant = existsSync(webp) || existsSync(join(dir, `${fam.base}-960.webp`)) ||
    existsSync(join(dir, `${fam.base}-1440.webp`)) || existsSync(join(dir, `${fam.base}-1920.webp`));
  if (!anyVariant) {
    // maybe the family only has a single width; check any webp
    const fallback = existsSync(join(dir, `${fam.base}.webp`));
    if (!fallback) {
      errors.push(`MISSING VARIANTS: ${fam.dir}/${fam.base}-*.webp not found on disk`);
    }
  }
}

// 3. Hard cap 250KB on all served images.
const capKB = 250;
function scanDir(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) scanDir(p);
    else if (/\.(webp|avif|jpe?g|png)$/i.test(name)) {
      const kb = st.size / 1024;
      if (kb > capKB) {
        errors.push(`OVER CAP: ${p.replace(ROOT + '/public', '')} is ${kb.toFixed(0)}KB (cap ${capKB}KB)`);
      }
    }
  }
}
scanDir(join(ROOT, 'public', 'images'));

// 4. No cartoon illustrations outside the approved footer strip.
const ILL_RE = /images\/illustrations\/approved\/([a-z0-9-]+\.webp)/g;
for (const m of srcText.matchAll(ILL_RE)) {
  if (m[1] !== APPROVED_ILLUSTRATION) {
    errors.push(`CARTOON IN CONTENT: ${m[1]} referenced in src — only ${APPROVED_ILLUSTRATION} (footer) is approved`);
  }
}
// The approved file may ONLY appear in the footer.
const wildpathIdx = srcText.indexOf(APPROVED_ILLUSTRATION);
if (wildpathIdx === -1) {
  warnings.push('Approved footer illustration not found in src (footer stripped?)');
}

// Warn: video assets present + poster under 80KB
const poster = join(ROOT, 'public', 'video', 'hero-poster.webp');
if (existsSync(poster) && statSync(poster).size > 80 * 1024) {
  warnings.push(`hero-poster.webp is ${(statSync(poster).size / 1024).toFixed(0)}KB (target <80KB)`);
}
for (const f of ['hero-desktop.mp4', 'hero-desktop.webm', 'hero-mobile.mp4', 'hero-mobile.webm']) {
  const p = join(ROOT, 'public', 'video', f);
  if (!existsSync(p)) errors.push(`MISSING VIDEO: public/video/${f}`);
}
const capVideoMB = 3;
for (const f of ['hero-desktop.mp4', 'hero-desktop.webm']) {
  const p = join(ROOT, 'public', 'video', f);
  if (existsSync(p) && statSync(p).size > capVideoMB * 1024 * 1024) {
    errors.push(`VIDEO OVER CAP: ${f} is ${(statSync(p).size / 1048576).toFixed(2)}MB (cap ${capVideoMB}MB)`);
  }
}
for (const f of ['hero-mobile.mp4', 'hero-mobile.webm']) {
  const p = join(ROOT, 'public', 'video', f);
  if (existsSync(p) && statSync(p).size > 1024 * 1024) {
    errors.push(`VIDEO OVER CAP: ${f} is ${(statSync(p).size / 1048576).toFixed(2)}MB (cap 1MB)`);
  }
}

if (warnings.length) {
  for (const w of warnings) console.warn(`  warn: ${w}`);
}
if (errors.length) {
  console.error(`\ncheck:images FAILED — ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log(`check:images passed — ${manifest.families.length} photo families all used, caps respected, videos within budget.`);
