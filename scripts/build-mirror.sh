#!/bin/bash
# build-mirror.sh — GitHub Pages mirror build (static export with baked basePath).
# Production builds are unaffected: without the env vars, next.config.ts keeps
# output=standalone, no basePath, next/image optimization.
set -euo pipefail
cd "$(dirname "$0")/.."

export NEXT_STATIC_EXPORT=1
export NEXT_PUBLIC_BASE_PATH=/wildpath-adventures

# proxy.ts is server-only (noindex for staging hosts); static export cannot
# include it. Park it for the duration of the build.
PROXY=src/proxy.ts
PARKED=.mirror-proxy-parked
if [ -f "$PROXY" ]; then mv "$PROXY" "$PARKED"; fi
trap '[ -f "$PARKED" ] && mv "$PARKED" "$PROXY"' EXIT

rm -rf out
# Direct calls: npm run build chains standalone cp steps that don't exist in export mode.
npx next build
npm run check:images

# Mirror must stay out of search engines (markup-level only — proven safe).
printf 'User-agent: *\nDisallow: /\n' > out/robots.txt
grep -rl "<head>" out --include="*.html" | while IFS= read -r f; do
  sed -i 's|<head>|<head><meta name="robots" content="noindex,nofollow">|' "$f"
done
: > out/.nojekyll

echo "=== mirror export ready in out/ ==="
find out -name "index.html" | wc -l
du -sh out
