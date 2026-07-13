# Wildpath Adventures — Internal Audit & TODO Report

This document tracks every claim, configuration item, and content piece that
requires client confirmation before the site is fully production-ready. It is
internal-only — not linked from the public site.

## 1. Unsupported public claims — REMOVED

The following claims were present in V3 build 1 and have been removed or softened
in V3 build 2:

| Original claim | Status | Replacement language |
| --- | --- | --- |
| "Every guide is Namibian." | Removed | "Local destination knowledge and trusted partners across the region." |
| "A percentage of every journey funds Save the Rhino Trust." | Removed | "We aim to work with responsible local partners and support travel practices that respect Namibia’s wildlife, landscapes, and communities." |
| "A percentage funds the Namibian Desert Lion Project." | Removed | (consolidated into above) |
| "Carbon logged, not offset." | Removed | (no replacement — conservation ledger section rewritten) |
| "Our supply chain is 90% Namibian." | Removed | (no replacement) |
| "24-hour line." | Removed | "A direct line to your planning team throughout your journey." |
| "We move by Cessna." | Removed | "Self-drive, guided road travel, transfers, or regional connections arranged on request." |
| Named guide "Tjipuko" | Removed | (no named personnel anywhere) |
| "120,000 elephants at Chobe" | Softened | "A large and well-documented elephant population." |
| "Dune 7 reaches 383 metres" | Removed | (no specific dune measurements) |
| Deposit 20%, balance 60 days | Softened | "Exact deposit and balance schedule confirmed in your personalised proposal." |
| Cancellation percentage table | Removed | "Cancellation fees generally scale with how close to departure. Exact percentages confirmed per booking." |
| Fake NTB / company registration placeholder | Removed | "Registered in Windhoek, Namibia. Registration numbers available on request." |
| "Photography coming soon" badge | Replaced | "Editorial illustration" badge (intentional, elegant) |
| Fake social media links (IG/FB/YT to `#`) | Removed | Footer hides social icons entirely until configured |
| Invented testimonials / "Etosha · 04:12 AM" | Labelled | "Editorial — not a guest testimonial" |
| Field Notes presented as company history | Rewritten | "Destination inspiration" — clearly editorial |

## 2. Claims still awaiting client confirmation

| Claim | Where it lives | Action required |
| --- | --- | --- |
| "Namibian-owned" | Throughout site | Confirm ownership structure with Juliet |
| "Based in Windhoek" | Footer, Contact, About | Confirm office address (city is fine, no street published) |
| "+264 81 255 7741" | Throughout site | Confirmed by client |
| "journeys@wildpathnamibia.com" | Throughout site | Confirmed by client (domain email not yet operational) |
| "Travel the untamed beauty" | Tagline | Confirmed by client |
| Four flagship routes | `/journeys/*` | Confirmed by client (see journey-specific flags below) |
| "Personalised planning" | Throughout site | Implied by business model — confirm with client |
| "Self-drive and guided" | Throughout site | Confirm both options are offered |
| "Responsible tourism" language | About page | Soft — no specific partnerships claimed |
| Anton / Oswald / Archivo / Caveat typography | Brand page, layout | Confirmed by client (brand identity kit) |

## 3. Journey-specific flags requiring client confirmation

Each journey in `/src/lib/journeys.ts` has an `_internalFlags` array. Summary:

### Classic Namibia Route (~15 days)
- Confirm exact day count ("approximately 15 days")
- Confirm preferred order: Wild Horses before or after Kolmanskop

### Untamed Northern Caprivi Route (14 days)
- Confirm whether route ends in Windhoek or extends to Victoria Falls
- Confirm border-crossing logistics for Chobe (Botswana) — visa requirements vary by nationality

### Untamed Central Route (~11 days)
- **Client source document skips Day 7.** Day-by-day count not exposed publicly.
  Confirm with client whether a day is missing or simply unnumbered.
- Confirm exact duration ("approximately 11 days")

### Untamed Desert Route (13 days)
- Confirm "Okonjima" is the correct partner name and is approved by client

## 4. Domain configuration

| Item | Status |
| --- | --- |
| Canonical domain configured | `wildpathnamibia.com` (via `NEXT_PUBLIC_SITE_DOMAIN` env var) |
| Canonical URLs in metadata | Set on all routes via `alternates.canonical` |
| Open Graph URL | Set in root layout |
| Twitter card | Set in root layout |
| Sitemap | `/sitemap.ts` generates from `SITE_URL` |
| Robots | `/robots.ts` references `SITE_URL` |
| JSON-LD structured data | TravelAgency schema in root layout |
| DNS records for wildpathnamibia.com | **NOT YET CONFIGURED** — awaiting domain registration / DNS access |
| Vercel project domain alias for wildpathnamibia.com | **NOT YET ADDED** — awaiting DNS |
| `www.wildpathnamibia.com` redirect to root | **NOT YET CONFIGURED** — awaiting DNS |
| `wildpath.tangison.com` redirect to final domain | **NOT YET CONFIGURED** — awaiting client approval |
| HTTPS verification on final domain | **NOT YET VERIFIED** — awaiting DNS |

## 5. Contact & enquiry system

| Item | Status |
| --- | --- |
| Phone (+264 81 255 7741) | Configured, confirmed by client |
| WhatsApp deep link | Working (`https://wa.me/264812557741`) |
| `tel:` link | Working |
| `mailto:` link | Working (to `journeys@wildpathnamibia.com`) |
| Public enquiry email | `journeys@wildpathnamibia.com` (domain email not yet operational) |
| Internal enquiry recipient | `CONTACT_RECIPIENT` env var (defaults to same address) |
| Enquiry form fields | All required + optional fields per spec implemented |
| Consent checkbox | Required, validates server-side |
| Honeypot spam protection | Implemented (`website` field) |
| Server-side validation | Zod schema, all fields |
| Input sanitization | Trim + collapse whitespace |
| Rate limiting | 5 submissions per hour per IP (in-memory) |
| Success state | Shown to user |
| Error states | Shown to user |
| File-based enquiry storage | Implemented (writes to `ENQUIRY_STORE_PATH` when set) |
| SMTP email delivery | **NOT YET CONFIGURED** — needs `SMTP_URL` env var |
| Production enquiry logging | Disabled (no PII in logs) |

### Testing checklist (to be run after SMTP is configured)
- [ ] Submit enquiry → success state shown
- [ ] Email arrives at `CONTACT_RECIPIENT`
- [ ] Honeypot field rejects bots silently
- [ ] Rate limit kicks in after 5 submissions/hour
- [ ] Invalid email returns 400 with clear message
- [ ] Missing consent returns 400 with clear message
- [ ] Mobile input behaviour verified

## 6. Legal & trust content

| Item | Status |
| --- | --- |
| Privacy policy | Conservative draft, no invented details |
| Terms & Conditions | Conservative draft, deposit/balance "confirmed per booking" |
| Cancellation policy | Conservative draft, no invented percentage table |
| FAQ | 12 questions, no invented claims |
| NTB registration number | **NOT PUBLISHED** — awaiting client |
| Company registration number | **NOT PUBLISHED** — awaiting client |
| VAT number | **NOT PUBLISHED** — awaiting client |
| Insurance cover details | **NOT PUBLISHED** — awaiting client |
| Governing law clause | "Laws of the Republic of Namibia" — confirm with client |

## 7. Social media

| Item | Status |
| --- | --- |
| Instagram | **NOT CONFIGURED** — footer hides icon until `NEXT_PUBLIC_INSTAGRAM_URL` set |
| Facebook | **NOT CONFIGURED** — footer hides icon until `NEXT_PUBLIC_FACEBOOK_URL` set |
| YouTube | **NOT CONFIGURED** — footer hides icon until `NEXT_PUBLIC_YOUTUBE_URL` set |

No fake social links are present anywhere on the site.

## 8. Imagery

| Item | Status |
| --- | --- |
| Brand illustrations (10 files) | Original Wildpath assets, owned by client |
| Destination photography (5 files) | Web-sourced in V1 repo — **licence confirmation required** |
| Destinations using illustration placeholder | Skeleton Coast, Caprivi, Chobe, Victoria Falls |
| Asset manifest | `/ASSET_MANIFEST.md` tracks every image |
| "Photography coming soon" badges | Removed — replaced with "Editorial illustration" badge |

## 9. Client information still required

Before the site is fully production-ready, the following items need to be
supplied or confirmed by Juliet:

1. **Domain registration & DNS access** for `wildpathnamibia.com`
2. **SMTP credentials** for `journeys@wildpathnamibia.com` (or alternate mailbox)
3. **NTB registration number** (for Terms page)
4. **Company registration number** (for Terms page)
5. **VAT number** (if applicable — for Terms page)
6. **Insurance cover details** (for Terms page)
7. **Exact deposit / balance schedule** (to replace "confirmed per booking")
8. **Exact cancellation percentage table** (to replace "generally scale" language)
9. **Confirm Day 7 of Untamed Central Route** (client source skips it)
10. **Confirm whether Caprivi Route extends to Victoria Falls** or ends at Zambezi River
11. **Confirm Okonjima partnership** for Untamed Desert Route
12. **Official social media handles** (Instagram, Facebook, YouTube) — or confirm none
13. **Real photography** for Skeleton Coast, Caprivi, Chobe, Victoria Falls
14. **Licence confirmation** for the five existing destination photographs
15. **Real Field Notes articles** — or approval to keep current "destination inspiration" stubs
16. **Office address** (city is published; street address optional)
17. **Operating hours** for the Contact page (currently "Mon–Fri, 08:00–17:00 CAT" — confirm)
18. **Governing law confirmation** ("Laws of the Republic of Namibia")
