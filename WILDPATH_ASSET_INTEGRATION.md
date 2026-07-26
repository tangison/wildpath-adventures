# Wildpath Approved Asset Integration

The complete approved asset kit is committed in:

- `asset-kit/wildpath-web-asset-kit/`
- `asset-kit/wildpath-web-asset-kit-2026-07-25.zip`

Use the extracted directory directly. The ZIP is retained as the portable original.

Before implementation, read:

1. `asset-kit/wildpath-web-asset-kit/assets-manifest.json`
2. `asset-kit/wildpath-web-asset-kit/docs/ASSET_USAGE.md`
3. `asset-kit/wildpath-web-asset-kit/docs/QUICKSTART_PROMPT.md`
4. `asset-kit/wildpath-web-asset-kit/docs/IMPLEMENTATION_PROMPT.md`

## Non-negotiable identity rules

- Remove every placeholder circular mark and every remaining rejected shield or badge asset.
- The header uses only the horizontal typographic `WILDPATH ADVENTURES` wordmark.
- The dark footer uses `wildpath-circle-dark.svg`.
- Light sections use `wildpath-circle-light.svg` when a circular mark is appropriate.
- Only the supplied circular SVG may be used as a decorative watermark.
- Never substitute another logo or illustration.
- Never rasterise the supplied SVG logos for normal website use.

## Required illustration replacements

- Homepage hero: `wildpath-hero-main.webp`
- Classic Namibia: `journey-classic-namibia.webp`
- Northern Caprivi: `journey-northern-caprivi.webp`
- Central Route: `journey-central.webp`
- Desert Route: `journey-desert.webp`
- About: `page-about.webp`
- Contact: `page-contact.webp`
- Default social image background: `og-master.webp`
- Field Notes: use each matching `field-note-*.webp` file

Preserve verified real destination photography. Packaged destination illustrations are editorial fallbacks, not replacements for accurate photography.

## Completion evidence

Do not report completion until:

- Browser network requests prove the approved asset paths are loading.
- The rejected badge and placeholder circular mark have zero production references.
- Mobile and desktop screenshots show the approved hero, header wordmark and footer SVG.
- Type-check, lint and production build pass.
- The exact audited commit is deployed and the live URL is visually verified.
