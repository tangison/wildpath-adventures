# Wildpath Adventures

> Travel the Untamed Beauty.

The marketing site for **Wildpath Adventures** — a Namibian expedition brand operating across Sossusvlei, Damaraland, Etosha, the Kalahari, the Caprivi Strip, Chobe, and Victoria Falls.

## Stack

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- **Anton** (display) + **Oswald** (secondary wordmark) + **Archivo** (subhead) + **Caveat** (script accent) + **Geist Sans** (body)
- **Framer Motion** for premium motion
- Static image assets in `public/images/`

## Structure

```
src/
├── app/
│   ├── page.tsx                    # Home
│   ├── journeys/
│   │   ├── page.tsx                # Journeys index
│   │   └── [slug]/page.tsx         # Individual journey (visual timeline)
│   ├── destinations/
│   │   ├── page.tsx                # Destinations index
│   │   └── [slug]/page.tsx         # Individual destination
│   ├── about/page.tsx              # About / Ethos
│   ├── contact/page.tsx            # Contact + enquiry form
│   ├── field-notes/page.tsx        # Journal archive
│   ├── brand/page.tsx              # Brand identity kit
│   ├── faq/page.tsx                # FAQ
│   ├── privacy/page.tsx            # Privacy policy
│   ├── terms/page.tsx              # Terms & conditions
│   ├── cancellation/page.tsx       # Cancellation policy
│   ├── api/enquiry/route.ts        # Enquiry form endpoint
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx               # Custom 404
├── components/
│   ├── wildpath.tsx                # Nav, Footer, Wordmark, JourneySnapshot, JourneyTimeline, etc.
│   ├── contact-form.tsx            # Enquiry form with validation + success state
│   └── ui/                         # shadcn/ui components
└── lib/
    ├── site.ts                     # Single source of truth (domain, email, phone)
    ├── journeys.ts                 # 4 flagship journeys data
    └── destinations.ts             # 9 destinations data
```

## Brand System

| Token           | Hex       | Use                              |
| --------------- | --------- | -------------------------------- |
| Warm Ivory      | `#F2EDE3` | Primary background — pan clay    |
| Deep Charcoal   | `#1A1A1A` | Primary text — basalt            |
| Burnt Orange    | `#C5511A` | Accent — dune at 4 PM            |
| Dust Sand       | `#D2B48C` | Secondary surface                |
| Muted Earth     | `#6B5E3D` | Tertiary text — dry grass        |
| Warm Stone      | `#6D6D6D` | Secondary text — granite         |

## Configuration

All site-wide config lives in `src/lib/site.ts`. To migrate to the final domain, change **one value**:

```ts
export const SITE = {
  domain: 'wildpathnamibia.com',  // ← change this single value
  // ...
}
```

Email, metadataBase, sitemap, and robots all derive from it.

## Development

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint     # ESLint
bun run build    # Production build
```

## Deployment

This repo is configured for **Vercel**. Connect the repository and deploy — no environment variables are required for the current build (SQLite is used for local dev; the enquiry API logs to console until SMTP is configured).

---

© Wildpath Adventures · Windhoek, Khomas Region, Namibia

Designed & Built by [Tangison Studio](https://studio.tangison.com)
