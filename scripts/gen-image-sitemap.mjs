#!/usr/bin/env node
/**
 * Generates public/image-sitemap.xml (Google image sitemap extension)
 * from images/images.manifest.json. Runs at build time via "prebuild".
 */
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(join(ROOT, 'images', 'images.manifest.json'), 'utf8'));
const SITE = 'https://wildpathnamibia.com';

// page -> photo ids map (kept in sync with src/lib/photo-groups.ts by hand;
// the sitemap lists every photo under its most relevant page)
const PAGE_MAP = JSON.parse(readFileSync(join(ROOT, 'scripts', 'image-sitemap-map.json'), 'utf8'));

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const entries = [];
for (const [page, ids] of Object.entries(PAGE_MAP)) {
  for (const id of ids) {
    const photo =
      manifest.client_photos.find((p) => p.id === id) ||
      manifest.scouted_photos.find((p) => p.id === id);
    if (!photo) continue;
    // pick the 1440 webp variant (or largest available)
    const variants = photo.variants.filter((v) => v.file.endsWith('.webp'));
    const v = variants.find((x) => x.width === 1440) || variants[variants.length - 1];
    if (!v) continue;
    const abs = SITE + v.file;
    const licence = photo.licence.includes("Client's own")
      ? 'Client photograph, used with permission'
      : 'Creative Commons via Wikimedia Commons (see /credits)';
    entries.push(
      `  <url>\n    <loc>${SITE}${page}</loc>\n` +
      `    <image:image>\n      <image:loc>${abs}</image:loc>\n` +
      `      <image:title>${esc(photo.alt)}</image:title>\n` +
      `      <image:caption>${esc(photo.alt)}</image:caption>\n` +
      `      <image:license>${esc(licence)}</image:license>\n` +
      `    </image:image>\n  </url>`
    );
  }
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  entries.join('\n') +
  `\n</urlset>\n`;

writeFileSync(join(ROOT, 'public', 'image-sitemap.xml'), xml);
console.log(`image sitemap: ${entries.length} images`);
