# Wildpath Adventures

> Slow down. Breathe. Discover Namibia.

The marketing site for **Wildpath Adventures** — a Namibian-owned tour operator
creating personalised journeys across Namibia and Southern Africa (Sossusvlei,
Etosha, Damaraland, the Kalahari, the Caprivi Strip, Chobe, Victoria Falls).

**Fully static.** No database, no API routes, no backend services. Every route
is prerendered at build time.

## Stack

- **Next.js 16** (App Router) + **TypeScript 5**, `output: "standalone"`
- **Tailwind CSS 4**
- **Geist** (body/UI) + **Fraunces** (editorial serif accents), both
  self-hosted subsets via `next/font` — no external font requests
- Hero: 8-second compressed video loop (desktop + mobile H.264 MP4, AVIF/WebP
  poster chain) — see `src/components/hero-video.tsx`
- Photos: pre-optimised AVIF/WebP variant families served as plain
  `<picture>` markup through `src/components/photo.tsx`; registry in
  `src/lib/image-variants.ts`, contract in `images.manifest.json`
- Contact hand-off is direct: WhatsApp deep link, `mailto:`, `tel:` (the form
  composes the message client-side; a `<noscript>` block offers the direct
  channels)

## Structure

```
src/
├── app/                        # 31 prerendered routes (SSG)
│   ├── page.tsx                # Home — full-bleed hero video
│   ├── journeys/[slug]/        # 4 journeys (classic-namibia is flagship)
│   ├── destinations/[slug]/    # 9 destinations
│   ├── field-notes/[slug]/     # 6 articles
│   ├── about, brand, faq, contact, cancellation, cookies,
│   │   privacy-policy, terms
│   ├── sitemap.ts, robots.ts, sitemap-images.xml/route.ts
├── components/                 # photo, hero-video, lightbox, widgets, wildpath
├── lib/                        # journeys, destinations, field-notes, media maps,
│                               # image-variants registry, base-path, site config
scripts/
├── check-images.mjs            # build gate (see below)
├── build-mirror.sh             # GitHub Pages export build
public/
├── images/{places,photos,brand,illustrations/approved,social}
└── video/                      # hero loop + posters
```

## Image system (build gate)

`npm run build` runs `check:images`, which fails the build on:

- a photo family in `images.manifest.json` never referenced in `src/`
- a media-data `base` missing from the variant registry (silent-404 class)
- a registry width missing on disk, or any served image over 250KB
- a cartoon outside the single approved footer accent
- raw root-absolute image/video literals not wrapped in `withBP()`
  (breaks the GitHub Pages mirror)
- missing hero video/poster files or oversize hero media
  (desktop ≤1.2MB, mobile ≤300KB)

## Configuration

One environment variable matters:

- `NEXT_PUBLIC_SITE_URL` — canonical URL used by metadata, sitemaps, JSON-LD.
  Default: `https://wildpath.tangison.com` (`src/lib/site.ts`).

`src/proxy.ts` sends `X-Robots-Tag: noindex, nofollow` on every host except
the production domains (`wildpath.tangison.com`, `wildpathnamibia.com`) so
previews and mirrors stay out of search indexes.

## Build & run

```bash
bun install            # or npm install
npm run dev            # http://localhost:3000
npm run build          # standalone build + image gate + standalone copies
npm run start          # serve the standalone build
npm run build:mirror   # GitHub Pages export (basePath /wildpath-adventures)
```

Deploy: push to `main` → Vercel (project `wildpath-adventures`, domain
`wildpath.tangison.com`). The GitHub Pages mirror on the `gh-pages` branch is
a noindex bridge for outages only — canonicals and sitemaps always point at
the production domain.
