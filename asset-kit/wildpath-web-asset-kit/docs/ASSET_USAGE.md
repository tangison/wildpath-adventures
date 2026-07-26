# Wildpath Adventures Web Asset Kit

This package is for the existing site at `wildpath.tangison.com`. It is not a new-site starter.

## Identity rules

- Keep the existing horizontal `WILDPATH ADVENTURES` wordmark in the header.
- Use `wildpath-circle-dark.svg` in the main dark footer.
- Use `wildpath-circle-light.svg` on warm ivory or other light backgrounds.
- Matching transparent PNG fallbacks are included for systems that cannot ingest SVG.
- The circular mark may appear as a watermark at `0.04` to `0.08` opacity. Mark decorative watermark instances `aria-hidden="true"`.
- Never rasterise the SVG logos for ordinary website use.
- Preserve the transparent SVG canvas.

## Production placements

| Asset | Primary placement | Notes |
| --- | --- | --- |
| `wildpath-hero-main.webp` | Homepage hero | Critical LCP image. Preload only this asset when it is above the fold. |
| `journey-classic-namibia.webp` | Classic Namibia journey card and page hero | Keep a wide crop. |
| `journey-northern-caprivi.webp` | Northern Caprivi journey card and page hero | Preserve the river and elephant crossing. |
| `journey-central.webp` | Central route card and page hero | Preserve the granite massif. |
| `journey-desert.webp` | Desert route card and page hero | Preserve the diagonal dune composition. |
| `page-about.webp` | About page manifesto section | Copy should sit in the open right-side sky. |
| `page-contact.webp` | Contact page hero or enquiry section | Copy should sit in the open left-side sky. |
| `og-master.webp` | Default OG background | Overlay the wordmark and page title in code. Do not bake text into the image. |
| `field-note-sossusvlei.webp` | Sossusvlei Field Note | Article card and article hero. |
| `field-note-etosha-seasons.webp` | Etosha seasons Field Note | Article card and article hero. |
| `field-note-packing.webp` | Packing Field Note | Place copy in the open left side. |
| `field-note-self-drive.webp` | Self-drive Field Note | Preserve the central road axis. |
| `field-note-responsible-wildlife.webp` | Responsible wildlife Field Note | Do not crop away the viewing distance. |
| `field-note-zambezi-route.webp` | Zambezi planning Field Note | Place copy in the open left side. |

## Destination photography rule

The live Destinations section and individual destination pages must use real, geographically accurate photography found through Tavily or supplied by the client. Verify the exact location, source, reuse rights, watermarks and image quality. Record every approved photograph in a source manifest.

The four packaged destination illustrations are fallback editorial assets for loading, empty, error, OG or temporary states:

- `destination-skeleton-coast.webp`
- `destination-caprivi.webp`
- `destination-chobe.webp`
- `destination-victoria-falls.webp`

Do not silently use them as final geographic evidence when approved real photography is available.

## Media engineering

- Serve the packaged WebP files with declared width and height.
- Generate responsive derivatives where the framework requires them.
- Preserve aspect ratio and use intentional `object-position`.
- Lazy-load below-fold images.
- Do not lazy-load the homepage LCP image.
- Provide descriptive alt text for meaningful images and empty alt text for decorative images.
- Respect `prefers-reduced-motion`.
- Do not animate the LCP image from opacity zero.

## Included source references

- `source-references/hero-original.png`
- `source-references/circular-logo-reference.png`

These files document the approved source direction. Use the optimized WebP and SVG files in production.
