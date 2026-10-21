# Hallmark Audit — Wildpath Adventures V3

**Audited:** `src/app/page.tsx`, `src/components/wildpath.tsx`, `src/app/journeys/[slug]/page.tsx`, `src/app/destinations/[slug]/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/brand/page.tsx`, `src/app/field-notes/page.tsx`, `src/app/faq/page.tsx`, `src/app/not-found.tsx`

**Method:** Read each file, score against the anti-pattern catalog in `skills/hallmark/references/anti-patterns.md`. Did not edit. Did not redesign.

**Genre context:** The site declares an editorial/atmospheric tone (Namibian travel, illustration-led, pen-and-ink). Hallmark's genre-aware audit applies — atmospheric allows gradient overlays on photography and dark surfaces where editorial would flag them.

---

## Critical findings

### `Universal scroll-triggered fade-up` — every page
**Where:** `src/components/wildpath.tsx:151-173` (`ScrollReveal` component), used 47 times across `page.tsx`, `journeys/[slug]`, `destinations/[slug]`, `about`, `contact`, `field-notes`, `faq`, `brand`.
**Why it's a tell:** Every section fades in on intersection (`whileInView` with `viewport={{ once: true }}`). The page never settles — every scroll triggers motion. This is the "Animate-on-scroll on everything" anti-pattern (gate 33). Even with `once: true`, the cumulative effect on a long page is that ~15 elements animate as the user scrolls, which reads as "trying to feel premium" rather than being premium.
**Severity:** critical — this is the single most-pervasive AI tell on the site.
**→ Fix:** Pick one orchestrated entrance on first load (the hero). After that, content is just there. Remove `ScrollReveal` from everything except the hero wordmark and the first section heading per page. For journey timeline stops, keep a single subtle entrance on the first stop only.

### `The AI nav` — `src/components/wildpath.tsx:233-286`
**Where:** `Nav` component — wordmark hard-left, 5 inline text links (`Journeys · Destinations · About · Field Notes · Brand`), CTA button hard-right, sticky on scroll, ivory background, hairline border-bottom.
**Why it's a tell:** This is the exact AI nav fingerprint from the catalog: "Wordmark hard-left, 4–5 inline text links, a CTA button hard-right, full viewport width, sticky on scroll, white background, 1 px hairline border-bottom." Every LLM emits this because every SaaS site shipped it. The shape is genre-blind — it lands the same on a wedding photographer's portfolio and a B2B SaaS.
**Severity:** critical — structural fingerprint of templating.
**→ Fix:** Pick from the N5–N9 routing table in `component-cookbook.md`. For an atmospheric/editorial travel brand, **N9 Edge-aligned minimal** (wordmark + CTA only, nav links in a sheet) or **N5 Floating pill** (centered floating chip that contracts on scroll) would break the AI-nav tell while fitting the genre. State the rationale in a one-line comment.

### `The AI footer` — `src/components/wildpath.tsx:355-432`
**Where:** `Footer` component — Wordmark+tagline header, then 4 columns (Description+socials · Explore · Contact · implicit Legal), copyright row, faint top-border, dark background.
**Why it's a tell:** Standard SaaS footer shape, identical across thousands of pages. The 4-column "Product · Company · Resources · Legal" structure is the catalog example. A travel company's footer should *close the page*, not catalogue its sitemap.
**Severity:** critical — structural fingerprint.
**→ Fix:** Pick from Ft1–Ft8. For this brand, **Ft5 Statement** (a single typographic statement that closes the page) or **Ft6 Letter close** (a short signed letter from the team) would feel like a travel publication's colophon rather than a SaaS footer. The contact details can move into the statement itself.

### `Full-viewport centred hero` — `src/app/page.tsx:40-102`
**Where:** Homepage hero — `pt-32 md:pt-40`, centered wordmark, centered illustration, centered tagline, centered copy, centered CTAs.
**Why it's a tell:** Not `min-h-screen` (good), but everything is centered — wordmark, illustration, tagline, copy, CTAs. The "Centred everything" anti-pattern. The page opens with a vertical stack of centered elements, which is the default LLM hero rhythm.
**Severity:** critical — structural.
**→ Fix:** Bias the layout. Move the wordmark+badge to the left, put the illustration full-bleed to the right, or vice versa. Put the tagline+copy+CTAs in a left-aligned column beside the illustration rather than stacked beneath it. One asymmetry breaks the template.

### `The 3-column feature grid` — `src/app/page.tsx:194-216` (Why Wildpath), `src/app/about/page.tsx:117-138` (Strengths)
**Where:** "Why travel with Wildpath" section — 3 columns × 2 rows of equal cards, each with a heading and 3-line body. Same pattern repeats on About page ("Six things we do not compromise") with 3×2 grid.
**Why it's a tell:** "Three equal columns, each with a heading and body. Every LLM emits this." The 3×2 variant is the same tell scaled. The cards are visually identical — same padding, same type scale, same border treatment.
**Severity:** critical — appears twice on the site.
**→ Fix:** Break the grid. Vary column widths (one wide + two narrow, or a 2-1-2 rhythm). Mix card heights. Move the headings inline. Or drop the cards entirely and use typographic rhythm — a numbered list with hanging headings (S1 Left-margin numbered) reads as editorial, not templated.

### `Icon-tile feature card` variant — `src/app/journeys/[slug]/page.tsx:198-210` (Highlights grid)
**Where:** Highlights section — 3-column grid of equal cards, each with a faded number + heading.
**Why it's a tell:** Same shape as the 3-column feature grid, just with numbers instead of icons. Visually identical cards in a 3×N grid.
**Severity:** critical — same tell, different page.
**→ Fix:** Replace with an inline typographic list — `01 Kalahari · 02 Sossusvlei · 03 Swakopmund` — or a single-column numbered list with hanging headings (S1 pattern). Highlights don't need cards.

---

## Major findings

### `Universal hover:scale-105` — every image card
**Where:** 11 instances across `page.tsx`, `journeys/page.tsx`, `journeys/[slug]/page.tsx`, `destinations/page.tsx`, `destinations/[slug]/page.tsx`.
**Why it's a tell:** Every image card lifts on hover with `group-hover:scale-105 transition-transform duration-[800ms]`. No shadow change, no easing specified beyond `ease-out`, no purpose. The catalog: "Every card lifts on hover, with no shadow change, no easing specified, no purpose."
**Severity:** major — microinteraction tell.
**→ Fix:** Pick one signal per card. A subtle 1.02 scale, or a border-color shift, or an arrow translate — never the universal 5% zoom. For destination cards specifically, the gradient overlay already provides depth; the zoom is redundant.

### `transition-all` on arrows — multiple files
**Where:** `journeys/page.tsx:92`, `destinations/[slug]/page.tsx:192` — `group-hover:translate-x-1 group-hover:text-[#9E4214] transition-all`.
**Why it's a tell:** `transition-all` animates every property including ones that should be instant (visibility, focus rings).
**Severity:** major.
**→ Fix:** Specify properties: `transition-[transform,color]` or `transition: transform 200ms var(--ease-out), color 200ms var(--ease-out)`.

### `Eyebrow on every section` — every page
**Where:** 30+ instances of `wp-script text-2xl text-[#9E4214] mb-3` eyebrow text above section headings — "Choose your journey", "Four flagship journeys", "Why travel with Wildpath", "Tailor-made journeys", "Where we roam", "Field notes", "Journey Snapshot", "The route", "The shape of the journey", "Highlights", "Continue exploring", "About Wildpath", "Our approach", "What we stand on", "Responsible tourism", "Travel with us", "Plan your journey", "Destination inspiration", etc.
**Why it's a tell:** "Every section starts with an uppercase mono-cap eyebrow above its heading. The labels look like editorial chapters but read as a tic. The page becomes a list of labelled lists." This is the single most-repeated major tell on the site — every section has one.
**Severity:** major — pervasive.
**→ Fix:** Ship the page with **zero eyebrows** unless the section is genuinely numbered/chaptered. Cap at 1–2 per page. The headings are strong enough to stand alone; the eyebrows erase the hierarchy they were meant to create.

### `Every section padded the same` — every page
**Where:** Universal `py-20 md:py-32 px-6 md:px-12` on nearly every section across all pages.
**Why it's a tell:** "Top padding, bottom padding, horizontal padding — all equal across every section." The page becomes a metronome of identical vertical spacing.
**Severity:** major — layout tell.
**→ Fix:** Vary. Tighten one section to `py-12`, expand another to `py-40`. Let one section bleed full-width while others stay contained. The rhythm of varied spacing is what makes a page feel composed rather than stacked.

### `Pure black, pure white` — partial
**Where:** `#1A1A1A` charcoal and `#F2EDE3` ivory are correctly tinted (good). But `#000000`-adjacent values appear in: `bg-[#1A1A1A]` dark sections (fine, it's the brand charcoal), and the `prose-wildpath` class isn't defined in CSS (referenced in `privacy/page.tsx:34` but no matching CSS rule).
**Why it's a tell:** The charcoal/ivory palette is correct. The `prose-wildpath` class is a missing-token tell — it's referenced but undefined, so legal pages fall back to default styles.
**Severity:** major (the missing class) / not-a-tell (the palette).
**→ Fix:** Define `.prose-wildpath` in `globals.css` with proper typographic defaults for legal pages, or remove the class reference.

### `Animate-on-scroll on everything` (subset of critical #1)
**Where:** The `ScrollReveal` component is used on nearly every block-level element.
**Why it's a tell:** Listed separately because it compounds with the eyebrow tell — each section has eyebrow + heading + body all wrapped in their own `ScrollReveal` with staggered delays, so the user scrolls into a section and watches 3-4 things fade in sequentially. The page never settles.
**Severity:** major (counted under critical #1).
**→ Fix:** Same as critical #1 — one entrance per section, not per element.

---

## Minor findings

### `100vw widths` — `src/app/page.tsx` hero illustration
**Where:** `sizes="100vw"` on the hero illustration (`page.tsx:84`).
**Why it's a tell:** `100vw` on the `sizes` attribute is fine for responsive image loading, but if any element used `width: 100vw` it would break on scrollbar-visible desktops. This is `sizes` not `width`, so it's not actually a bug — but it's worth flagging.
**Severity:** minor / not-a-tell (sizes attribute is correct usage).
**→ Fix:** No action needed.

### `Straight quotes` in some copy
**Where:** A few instances of `'` and `"` in body copy (e.g. "the gates of hell" in `destinations.ts`, "the smoke that thunders" in `destinations.ts`).
**Why it's a tell:** Should be curly quotes.
**Severity:** minor.
**→ Fix:** Replace with `"` `"` `'` `'`. Most of the site already uses `&ldquo;` / `&rdquo;` correctly; a few strings in the data files don't.

### `z-index: 9999` adjacency
**Where:** `z-50` on the Nav (`wildpath.tsx:203`), `z-40` on mobile menu (`wildpath.tsx:247`), `z-10` on various absolutely-positioned elements. No `z-9999` instances (good).
**Why it's a tell:** Not a tell — the z-index scale is disciplined (10, 40, 50).
**Severity:** not-a-tell.
**→ Fix:** No action.

### `Placeholder names` in FAQ
**Where:** `faq/page.tsx` — no placeholder names used. Good.
**Severity:** not-a-tell.

### `Three periods instead of ellipsis`
**Where:** None found. Good.
**Severity:** not-a-tell.

---

## Structural fingerprint check

**Does the page use the AI template?** (centered hero → 3 equal feature cards → CTA → footer, with no asymmetry or surprise)

**Homepage (`page.tsx`):**
1. Hero — centered (asymmetric fail)
2. Featured Journeys — 2×2 card grid (variant of 3-column tell)
3. Why Wildpath — 3×2 card grid (the tell)
4. Tailor-made — 2-column text (okay, breaks the rhythm)
5. Destination preview — 2×2 image cards (okay)
6. Pull quote — centered single quote (okay, atmospheric)
7. Field Notes preview — 3 stacked rows (okay, list not grid)
8. CTA — centered (asymmetric fail)

**Verdict:** The homepage follows the AI template rhythm: centered hero → card grids → centered CTA → standard footer. The atmospheric illustration and the editorial copy lift it above generic SaaS, but the **structural skeleton is the AI template**. Two critical structural findings (centered hero + 3-column grids) + the AI nav + AI footer = the page reads as "AI-generated with good taste" rather than "designed."

**Stamp check:** No `/* Hallmark · macrostructure: ... */` stamp present (site was not built by a prior Hallmark run). N/A.

**Genre drift:** No `design.md` at project root. N/A.

---

## Summary

```
6 critical · 6 major · 4 minor (2 of which are not-a-tell)
```

**Verdict — reads as AI-generated.**

The site is tasteful, well-crafted, and the brand identity is strong. But a Hallmark audit is not about taste — it's about whether the structural fingerprint matches the AI template. It does. The universal ScrollReveal, the AI nav, the AI footer, the centered hero, and the repeated 3-column card grids are all catalog tells. A designer scanning the homepage for 5 seconds would pattern-match it as "AI-generated with a good brand kit applied."

The good news: every critical finding has a concrete, catalog-named fix. None require rebuilding from scratch — they're structural pattern swaps.

---

## Improvement plan (ranked by impact)

### Tier 1 — Critical structural fixes (do these first)

1. **Kill the universal ScrollReveal.** Remove `<ScrollReveal>` from everything except the hero wordmark entrance and the first section heading per page. For journey timeline stops, keep one subtle entrance on the first stop only; the rest just appear. This single change removes the biggest AI tell on the site.

2. **Replace the AI nav with N9 Edge-aligned minimal or N5 Floating pill.** Wordmark+badge left, "Plan Your Journey" CTA right, nav links in a slide-down sheet triggered by a small "Menu" affordance. Breaks the 5-inline-links-plus-CTA fingerprint while fitting the atmospheric genre.

3. **Replace the AI footer with Ft5 Statement or Ft6 Letter close.** A single typographic statement that closes the page — "Travel the untamed beauty. Windhoek, Namibia. journeys@wildpathnamibia.com. +264 81 255 7741." — with the Tangison credit as a small colophon beneath. Drop the 4-column sitemap structure entirely.

4. **Break the centered hero.** Move the wordmark+badge to the left, the illustration full-bleed to the right (or vice versa). Put tagline+copy+CTAs in a left-aligned column beside the illustration. One asymmetry breaks the template.

5. **Replace the 3-column feature grids.** On "Why Wildpath" (homepage) and "Strengths" (about): use a numbered left-margin list (S1 pattern) with hanging headings, or vary column widths into a 2-1-2 rhythm. On "Highlights" (journey pages): replace the card grid with an inline typographic list — `01 Kalahari · 02 Sossusvlei · 03 Swakopmund`.

### Tier 2 — Major microinteraction fixes

6. **Replace universal `hover:scale-105`** with one signal per card: a border-color shift, or a 1.02 scale, or an arrow translate — never the 5% zoom on every image.

7. **Replace `transition-all`** with specific property transitions on the 2 instances where it appears.

8. **Remove eyebrows from most sections.** Cap at 1–2 per page. The headings are strong enough to stand alone.

9. **Vary section padding.** Tighten one section to `py-12`, expand another to `py-40`. Break the `py-20 md:py-32` metronome.

10. **Define `.prose-wildpath`** in `globals.css` for the legal pages, or remove the class reference.

### Tier 3 — Minor polish

11. **Curly-quote audit** on data file strings (`journeys.ts`, `destinations.ts`) — replace straight quotes with curly.

12. **Add a Hallmark stamp** to each page once Tier 1-2 are applied: `/* Hallmark · macrostructure: <name> · genre: atmospheric · theme: wildpath-custom */` so future audits can verify the page matches its declared structure.

---

## What's already good (don't touch)

- **Color palette** — Warm Ivory `#F2EDE3`, Deep Charcoal `#1A1A1A`, Burnt Orange `#C5511A`. Correctly tinted, no pure black/white, anchored to a single hue. Passes the color gate.
- **Typography pairing** — Anton (display) + Oswald (secondary wordmark) + Archivo (subhead) + Caveat (script accent) + Geist Sans (body). Four distinct voices, no Inter-everywhere. Passes the type gate.
- **No purple gradients, no gradient headlines, no aurora blobs, no glassmorphism.** Clean.
- **No invented metrics.** The V3 build 2 correction pass already removed all fabricated stats, percentages, and testimonials. Passes gate 46.
- **No re-drawn UI chrome.** Screenshots are real, not wrapped in fake browser bars. Passes gate 47.
- **No emoji as feature icons.** Uses Lucide icons consistently. Passes gate 30.
- **No italic headers.** All headings are roman. Passes gate 38a.
- **Illustration system** — hand-drawn pen-and-ink, consistent across the site, one artistic universe. Passes the illustration gate.
- **Mobile responsiveness** — tested at 390/768/1440, no horizontal scroll, sticky footer works. Passes the responsive gates.
- **Token discipline** — colors reference the brand palette consistently, no mid-render hex improvisation (mostly). Passes gate 48.
- **JSON-LD structured data, canonical URLs, sitemap, robots** — all correct. Technical SEO is clean.

The site's *craft* is strong. The site's *structure* is the AI template. Fix the structure and this becomes a site that reads as designed, not generated.
