// One-off script: generate favicon variants from the approved logo mark.
// Source: wildpath-logo-dark-theme.png (transparent PNG fallback from the approved asset kit).
// This replaces the previous wildpath-circle-dark.png source (now wildpath-logo-dark-theme.png).
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const SRC = path.resolve('public/images/brand/wildpath-logo-dark-theme.png');
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

  // 180x180 for apple-touch-icon
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

  // 512x512 master favicon (transparent)
  await sharp(SRC)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(OUT_DIR, 'favicon.png'));

  // src/app/icon.png (Next.js App Router convention)
  await fs.mkdir(path.resolve('src/app'), { recursive: true });
  await sharp(SRC)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve('src/app/icon.png'));

  // src/app/apple-icon.png (Next.js App Router convention)
  await sharp(SRC)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.resolve('src/app/apple-icon.png'));

  console.log('Favicon variants generated from approved circular logo:');
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
