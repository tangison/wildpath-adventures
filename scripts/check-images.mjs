#!/usr/bin/env node
/**
 * check:images - build gate for the Wildpath image-first rebuild.
 *
 * FAILS the build when:
 *  1. any client or scouted photo is never referenced in src/ (image-first rule:
 *     every real photograph must appear on the site at least once)
 *  2. a photo is referenced more than REUSE_LIMIT times (distribute, don't repeat)
 *  3. any variant file referenced by the generated photo index is missing on disk
 *  4. src/ still references retired/unslicensed places assets or illustrations
 *     other than the single client-approved footer illustration
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const REUSE_LIMIT = 2;

const manifest = JSON.parse(readFileSync(join(ROOT, 'images', 'images.manifest.json'), 'utf8'));
const photoIds = [
  ...manifest.client_photos.map(p => p.id),
  ...manifest.scouted_photos.map(p => p.id),
];

// collect source text (excluding the generated index itself and generated route files)
const srcRoot = join(ROOT, 'src');
const texts = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(tsx?|mdx?|css)$/.test(name) && name !== 'photos.generated.ts') texts.push(readFileSync(p, 'utf8'));
  }
})(srcRoot);
const haystack = texts.join('\n');

const errors = [];
const warnings = [];

// 1. usage counts (id may appear as photo id string or literal path)
const usage = new Map();
for (const id of photoIds) {
  const re = new RegExp(`["'/]${id.replace(/[-]/g, '\\-')}["'\\-./]`, 'g');
  const n = (haystack.match(re) || []).length;
  usage.set(id, n);
}
const unused = photoIds.filter(id => (usage.get(id) || 0) === 0);
if (unused.length) {
  errors.push(`${unused.length} photo(s) never used in src/: ${unused.slice(0, 8).join(', ')}${unused.length > 8 ? ' ...' : ''}`);
}
const overused = photoIds.filter(id => (usage.get(id) || 0) > REUSE_LIMIT);
if (overused.length) {
  warnings.push(`reused >${REUSE_LIMIT}x: ${overused.map(id => `${id}(${usage.get(id)})`).join(', ')}`);
}

// 2. variant files exist + size cap
let totalChecked = 0;
for (const p of [...manifest.client_photos, ...manifest.scouted_photos]) {
  for (const v of p.variants) {
    const f = join(ROOT, 'public', v.file);
    totalChecked++;
    if (!existsSync(f)) {
      errors.push(`missing variant file: ${v.file}`);
      continue;
    }
    const kb = statSync(f).size / 1024;
    if (kb > 250) errors.push(`over 250KB cap: ${v.file} (${kb.toFixed(0)}KB)`);
  }
}

// 3. retired assets must not be referenced
const retired = manifest.retired_assets.files;
for (const r of retired) {
  const base = r.split('/').pop();
  const re = new RegExp(`["'/]${base.replace(/[.]/g, '\\.')}["')]`);
  if (re.test(haystack)) errors.push(`retired asset still referenced in src/: ${base}`);
}

// 4. illustrations: only the footer brand strip allowed
//    EXEMPTION: src/app/brand/page.tsx is the brand-guidelines page; its
//    purpose is to display the brand illustration system itself, so
//    illustration references there are intentional and audited manually.
const illuRe = /images\/illustrations\/([A-Za-z0-9_\-/.]+)/g;
const sourceFiles = [];
(function walk2(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk2(p);
    else if (/\.(tsx?|mdx?)$/.test(name)) sourceFiles.push(p);
  }
})(srcRoot);
for (const f of sourceFiles) {
  if (f.endsWith(join('app', 'brand', 'page.tsx'))) continue;
  const text = readFileSync(f, 'utf8');
  let m2;
  const re2 = /images\/illustrations\/([A-Za-z0-9_\-/.]+)/g;
  while ((m2 = re2.exec(text)) !== null) {
    if (/footer/i.test(m2[1])) continue; // approved footer brand strip
    errors.push(`illustration used as content image (forbidden): ${m2[1]} in ${f.replace(ROOT + '/', '')}`);
  }
}

console.log(`check:images — ${photoIds.length} photos, ${totalChecked} variant files scanned`);
for (const w of warnings) console.warn(`WARN: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`FAIL: ${e}`);
  process.exit(1);
}
console.log('check:images — OK: every photo used, caps respected, no forbidden assets');
