// One-off script: generate legacy favicon.ico (32x32) and a small 16x16 PNG
// from the master 512x512 badge.
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const SRC = path.resolve('public/images/brand/wildpath-badge.png');
const OUT_DIR = path.resolve('public');

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  // 32x32 PNG (modern favicon)
  await sharp(SRC)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT_DIR, 'favicon-32.png'));

  // 16x16 PNG (legacy)
  await sharp(SRC)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT_DIR, 'favicon-16.png'));

  // 180x180 for apple-touch-icon (already have src/app/apple-icon.png,
  // but this is the public fallback)
  await sharp(SRC)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT_DIR, 'apple-touch-icon.png'));

  // 192x192 for Android/PWA
  await sharp(SRC)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT_DIR, 'android-chrome-192.png'));

  // 512x512 for PWA manifest
  await sharp(SRC)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT_DIR, 'android-chrome-512.png'));

  console.log('Favicon variants generated:');
  const files = await fs.readdir(OUT_DIR);
  for (const f of files) {
    if (f.match(/favicon|apple-touch|android-chrome/)) {
      const stat = await fs.stat(path.join(OUT_DIR, f));
      console.log(`  ${f} (${stat.size} bytes)`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
