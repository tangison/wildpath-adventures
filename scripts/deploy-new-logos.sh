#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────
# deploy-new-logos.sh
# Extracts wildpath-logo-svg-pack.zip and deploys the SVG assets
# to the Wildpath Adventures Next.js project.
#
# Usage:  bash deploy-new-logos.sh /path/to/wildpath-logo-svg-pack.zip
# ──────────────────────────────────────────────────────────────
set -euo pipefail

ZIP="${1:?Usage: deploy-new-logos.sh /path/to/wildpath-logo-svg-pack.zip}"
PROJECT="$(cd "$(dirname "$0")/.." && pwd)"
BRAND_DIR="$PROJECT/public/images/brand"

if [ ! -f "$ZIP" ]; then
  echo "❌ Zip not found: $ZIP"
  exit 1
fi

echo "📦 Extracting $ZIP ..."
TMP=$(mktemp -d)
unzip -o "$ZIP" -d "$TMP"

# Locate the two SVGs — search recursively regardless of folder structure
DARK=$(find "$TMP" -name "wildpath-logo-dark-theme.svg" -type f | head -1)
LIGHT=$(find "$TMP" -name "wildpath-logo-light-theme.svg" -type f | head -1)

# Fallback: look for any dark/light pair if exact names not found
if [ -z "$DARK" ]; then
  DARK=$(find "$TMP" -name "*dark*" -name "*.svg" -type f | head -1)
fi
if [ -z "$LIGHT" ]; then
  LIGHT=$(find "$TMP" -name "*light*" -name "*.svg" -type f | head -1)
fi

if [ -z "$DARK" ] || [ -z "$LIGHT" ]; then
  echo "❌ Could not find both SVG variants in the zip."
  echo "   Dark: ${DARK:-NOT FOUND}"
  echo "   Light: ${LIGHT:-NOT FOUND}"
  echo ""
  echo "   Contents of zip:"
  find "$TMP" -name "*.svg" -type f
  exit 1
fi

echo "✅ Found dark SVG:  $DARK"
echo "✅ Found light SVG: $LIGHT"

# Deploy SVGs (overwrite existing)
cp "$DARK" "$BRAND_DIR/wildpath-logo-dark-theme.svg"
cp "$LIGHT" "$BRAND_DIR/wildpath-logo-light-theme.svg"
echo "📋 SVGs deployed to $BRAND_DIR"

# Generate PNG fallbacks using sharp (via Node)
echo "🖼️  Generating PNG fallbacks..."
npx tsx -e "
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const dir = '$BRAND_DIR';
async function convert(input, output) {
  const buf = await sharp(input, { density: 300 })
    .resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(output, buf);
  console.log('  ' + path.basename(output) + ' (' + buf.length + ' bytes)');
}
Promise.all([
  convert(path.join(dir, 'wildpath-logo-dark-theme.svg'), path.join(dir, 'wildpath-logo-dark-theme.png')),
  convert(path.join(dir, 'wildpath-logo-light-theme.svg'), path.join(dir, 'wildpath-logo-light-theme.png')),
]).then(() => console.log('✅ PNG fallbacks generated'));
"

# Regenerate all favicon variants
echo "🔧 Regenerating favicons..."
npx tsx "$PROJECT/scripts/generate-favicons.ts"

# Verify SVG sizes
echo ""
echo "📊 Deployed logo file sizes:"
ls -lh "$BRAND_DIR"/wildpath-logo-*-theme.{svg,png}

# Clean up
rm -rf "$TMP"

echo ""
echo "✅ Done. Run these commands to deploy:"
echo "   cd $PROJECT"
echo "   git add -A && git commit -m 'Deploy new logo SVGs from uploaded pack'"
echo "   git push origin main"
