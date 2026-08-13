# Wildpath Adventures — Image Asset Manifest

Every image used on the public site is tracked here. No image is presented as a
real destination photograph unless its source is recorded below.

## Photography policy

- Real destinations use real photography where available.
- Destinations without verified photography use a branded illustration placeholder
  (intentional, elegant — never a "coming soon" badge).
- No image is downloaded merely because it appears in search results.
- All photography must be legally reusable: licensed, public-domain, client-provided,
  or properly attributed.

## Brand illustrations (original Wildpath assets)

These are the approved pen-and-ink illustrations, used in hero, About, philosophy,
section transitions, CTA banners, footer, and as intentional placeholders where
destination photography is not yet available.

| File | Used on | Type |
| --- | --- | --- |
| `/public/images/illustrations/v2/01-hero.webp` | Home hero, Untamed Desert card | Brand illustration |
| `/public/images/illustrations/v2/02-banner-namibia.webp` | Footer landscape strip | Brand illustration |
| `/public/images/illustrations/v2/03-showcase.webp` | Brand page, Field Notes preview | Brand illustration |
| `/public/images/illustrations/v2/05-card-expeditions.webp` | Classic Namibia card | Brand illustration |
| `/public/images/illustrations/v2/06-card-charters.webp` | Untamed Northern Caprivi card, Caprivi/Chobe placeholder | Brand illustration |
| `/public/images/illustrations/v2/08-manifesto-atmosphere.webp` | About/Philosophy atmosphere, Untamed Central card, Skeleton Coast/Victoria Falls placeholder | Brand illustration |
| `/public/images/illustrations/v2/09-coming-soon.webp` | ComingSoon component background | Brand illustration |
| `/public/images/illustrations/v2/10-note-early-light.webp` | Field Notes — "When to visit Sossusvlei" | Brand illustration |
| `/public/images/illustrations/v2/11-note-ancient-paths.webp` | Field Notes — "Packing for Namibia" | Brand illustration |
| `/public/images/illustrations/v2/12-note-desert-elephants.webp` | Field Notes — "Etosha in the dry and wet seasons" | Brand illustration |

**Source:** Original Wildpath Adventures assets, supplied by client.
**Licence:** Owned by Wildpath Adventures. All rights reserved.
**Download date:** Cloned from github.com/tangison/wildpath-adventures on 2026-07-13.

## Brand logos & favicons (deployed set — 2026-08-13)

Official logo pack (`wildpath-logo-svg-pack.zip` from client, verified checksum-identical to `asset-kit/`). All source files remain byte-exact; the site serves them via `next/image` for runtime WebP/AVIF optimisation.

| File | Used on | Notes |
| --- | --- | --- |
| `/public/images/brand/wildpath-logo-dark-theme.png` | Footer logo, dark-background watermark (via `next/image`) | Ivory artwork for dark backgrounds |
| `/public/images/brand/wildpath-logo-light-theme.png` | Light-background watermark (via `next/image`) | Dark-ink artwork for light backgrounds |
| `/public/images/brand/wildpath-logo-*-theme.svg` + `-editable-vector.svg` | Master copies (not served) | Delivered pack — full-res + traced vector |
| `/public/favicon.png`, `/favicon-32.png`, `/favicon-16.png` | Browser favicons | Generated from light-theme artwork (dark ink on transparent) |
| `/public/apple-touch-icon.png`, `/src/app/apple-icon.png` | iOS / Apple devices | Light-theme artwork on ivory `#F2EDE3` background |
| `/public/android-chrome-192.png`, `/android-chrome-512.png`, `/src/app/icon.png` | PWA icons + Next.js icon convention | Light-theme artwork on transparent |

**Favicon composition:** artwork fitted to 92% of canvas height, centred, LANCZOS-resampled from the 1255×1415 master.

## Destination photography

| File | Destination | Used on | Source | Licence | Status |
| --- | --- | --- | --- | --- | --- |
| `/public/images/places/sossusvlei.webp` | Sossusvlei, Namibia | Home, Sossusvlei page, Namibia page, Untamed Desert hero | Web-sourced (original repo) | To be confirmed | Real photo — licence confirmation required |
| `/public/images/places/etosha.webp` | Etosha National Park, Namibia | Etosha page, Classic Namibia hero | Web-sourced (original repo) | To be confirmed | Real photo — licence confirmation required |
| `/public/images/places/damaraland.webp` | Damaraland, Namibia | Damaraland page, Untamed Central hero | Web-sourced (original repo) | To be confirmed | Real photo — licence confirmation required |
| `/public/images/places/kalahari.webp` | Kalahari, Namibia | Kalahari page | Web-sourced (original repo) | To be confirmed | Real photo — licence confirmation required |
| `/public/images/places/acacia-savanna.webp` | Acacia savanna (generic) | Home destination preview | Web-sourced (original repo) | To be confirmed | Real photo — licence confirmation required |

## Destinations using illustration placeholders (no real photo yet)

These destinations use the branded illustration system as an intentional
placeholder. They are flagged on-page with an "Editorial illustration" badge.

| Destination | Placeholder used | Action required |
| --- | --- | --- |
| Skeleton Coast | `08-manifesto-atmosphere.webp` | Supply real Skeleton Coast photography |
| Caprivi Strip | `06-card-charters.webp` | Supply real Caprivi/Zambezi photography |
| Chobe River | `06-card-charters.webp` | Supply real Chobe photography |
| Victoria Falls | `08-manifesto-atmosphere.webp` | Supply real Victoria Falls photography |

## Internal TODO

- [ ] Confirm licence/source for the five existing destination photographs (originally web-sourced in the V1 repo).
- [ ] Source real photography for Skeleton Coast, Caprivi, Chobe, Victoria Falls.
- [ ] Replace placeholder images once real photography is supplied.
- [ ] Update this manifest each time an image is added, replaced, or removed.
