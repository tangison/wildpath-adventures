# Wildpath Adventures Existing-Site Integration Prompt

Use Webman from `https://github.com/tangison/webman` and operate in ultra-think mode. This is an autonomous production integration for the existing site at `https://wildpath.tangison.com`. It is not a new build and not a demo.

## Operating mandate

Inspect first, use real tools, make complete changes, verify every action, fix root causes, and continue until the requested integration is finished or a decision genuinely requires client authority.

Detect the current harness and map its skills, plugins, connectors, MCP servers, browser, shell, filesystem, image, document, GitHub, Vercel, DNS, deployment and audit capabilities by purpose.

Bootstrap verified capabilities from primary sources. Install missing project-scoped skills automatically when safe and reversible. Ask only when installation is global or privileged, a licence or source is uncertain, the harness explicitly requires approval, or the action is destructive. Never guess a package or silently substitute another tool.

Required stack:

- Webman: `tangison-web-loop`, `tangison-web-plan`, `tangison-web-content`, `tangison-web-create`, `tangison-web-audit`, `tangison-web-deploy`, `tangison-documents`, and `tangison-magazine` from `https://github.com/tangison/webman`
- Superpowers, including brainstorming when genuinely needed, TDD, systematic debugging, code review, and verification before completion from `https://github.com/obra/superpowers`
- Ponytail and `ponytail-audit` from `https://github.com/dietrichgebert/ponytail`
- Impeccable from `https://github.com/pbakaus/impeccable`
- Hallmark, install name `hallmark`, from `https://github.com/nutlope/hallmark`
- Taste Skill, install name `design-taste-frontend`, and `full-output-enforcement` from `https://github.com/leonxlnx/taste-skill`
- Anime.js skill, install name `animejs`, and GSAP ScrollTrigger skill, install name `gsap-scrolltrigger`, from `https://github.com/freshtechbro/claudedesignskills`
- Emil Kowalski motion skill: `npx skills add emilkowalski/skill`
- Relevant marketing skills from `https://github.com/coreyhaines31/marketingskills`
- Relevant audit skills from `https://github.com/squirrelscan/skills` and `https://github.com/calm-north/seojuice-skills`

Do not enter a long planning phase. Treat this package, the existing repository and live site as the brief. Use `tangison-web-plan` only if implementation cannot safely proceed without a material decision.

## Active phase and ownership

- Active Webman phase: `tangison-web-content`, followed by `tangison-web-create`, `tangison-web-audit`, and `tangison-web-deploy` only when deployment is authorised.
- Build mode: full production integration.
- Art-direction owner: Impeccable.
- Structural anti-slop gate: Hallmark.
- Layout variance, motion intensity and density: Taste.
- Engineering discipline: Superpowers.
- Dependency restraint: Ponytail.
- Motion design authority: Emil Kowalski.

State installed and missing verified skills and the first bounded action before implementation. Do not request plan approval.

## Existing-site constraint

Do not scaffold a replacement application. Inspect the existing framework, routes, components, asset paths, metadata system, responsive behaviour and deployment configuration. Preserve correct content, working integrations, legal routes and verified behaviour. Replace only outdated, repeated, generic or wrong media and the components required to integrate the new identity correctly.

Maintain these public routes and any existing child routes:

- `/`
- `/journeys`
- individual journey routes
- `/destinations`
- individual destination routes
- `/about`
- `/field-notes`
- `/contact`
- `/faq`
- `/brand`
- legal pages
- human-readable `/sitemap`
- `sitemap.xml`
- `robots.txt`
- custom `404` and `500` experiences

## Asset integration

Read `assets-manifest.json` and `docs/ASSET_USAGE.md` before changing media.

1. Copy `assets/illustrations/*` into the repository's production media directory without renaming unless the current architecture requires a central mapping module.
2. Preserve the existing horizontal `WILDPATH ADVENTURES` wordmark in the header.
3. Use `assets/logos/wildpath-circle-dark.svg` as the main logo in the dark footer.
4. Use `assets/logos/wildpath-circle-light.svg` on light sections.
5. Use either circular SVG as a decorative watermark only at `0.04` to `0.08` opacity. Mark decorative instances `aria-hidden="true"`.
6. Never rasterise the SVG logos.
7. Replace current repeated or mismatched `/images/illustrations/v2/*` placeholders with the exact packaged asset assigned to each route or section.
8. Do not place text inside the raster illustrations. Overlay copy, wordmarks and CTAs in accessible HTML/CSS.
9. Preserve aspect ratios, intentional negative space and image focal points.

Homepage:

- Hero: `wildpath-hero-main.webp`
- Journey cards: the four `journey-*.webp` files
- About or tailor-made section: `page-about.webp`
- Field Notes previews: matching `field-note-*.webp`
- Default OG background: `og-master.webp`

Journey pages:

- Classic Namibia: `journey-classic-namibia.webp`
- Northern Caprivi: `journey-northern-caprivi.webp`
- Central: `journey-central.webp`
- Desert: `journey-desert.webp`

About:

- `page-about.webp`

Contact:

- `page-contact.webp`

Field Notes:

- Match each title to its corresponding `field-note-*.webp` file.

## Destination photography exception

Only the Destinations section and individual destination pages should search for external real photography.

Use Tavily to locate high-resolution photographs for each exact place. Prioritise client-supplied, official tourism, public-domain or clearly licensed reusable sources. Verify:

- the photograph accurately represents the named place
- no visible watermark or embedded logo
- no misleading wildlife or geography
- sufficient resolution for desktop and mobile crops
- reuse rights and attribution requirements
- stable source URL

Create or update an internal destination image source manifest with:

- destination
- local filename
- source page
- direct asset source if permitted
- creator
- licence
- date accessed
- intended crop
- alt text
- approval status

Do not use Tavily imagery outside the Destinations section unless the client explicitly expands the rule.

The packaged destination illustrations are not the default final destination imagery. They may be used only for loading, empty, error, OG or temporary unapproved states.

## Brand and design rules

Preserve the Wildpath palette:

- Deep charcoal `#1A1A1A`
- Warm ivory `#F2EDE3`
- Burnt orange `#D45914`
- Bright orange `#E8792A`
- Dust sand `#D2B48C`
- Muted earth `#6B5E3D`

The site must feel editorial, quiet, grounded, Namibian and image-led. Reject generic AI design, repeated card grids, excessive pills, glass panels, random blobs, purple gradients, fake metrics, staged stock imagery, generic fonts and interchangeable page rhythms.

Use exact approved content. Never invent metrics, testimonials, partners, prices, addresses, credentials, legal claims or results. Avoid em dashes and generic AI language.

Maintain `BRAND.md` and the public `/brand` page. Document the new circular logo as the footer mark and watermark while retaining the horizontal header wordmark.

Retain the restrained linked credit `Made by Tangison Studio` on every public page, linking the complete text to `https://studio.tangison.com`, unless the client explicitly changes the wording.

## Motion

Motion is part of the system, not decoration.

Install and use `emilkowalski/skill` as required. Define motion purpose, hierarchy, duration, easing, scroll behaviour, reduced-motion fallback, cleanup and performance budget in `BRAND.md`.

Use one primary motion engine. Prefer CSS and native browser APIs for simple transitions. Use Anime.js for deliberate timeline, stagger, SVG and interaction choreography. Use GSAP ScrollTrigger only when advanced scroll storytelling is measured and justified. Ponytail must reject unnecessary parallel motion libraries.

Requirements:

- no LCP fade-in from opacity zero
- no animation that blocks navigation or reading
- no scroll hijacking
- no continuous decorative movement
- complete `prefers-reduced-motion` fallback
- clean animation teardown on route changes
- mobile-safe motion

## Media engineering

- Preserve source references.
- Serve optimized WebP or AVIF with safe fallbacks where required.
- Generate responsive sizes.
- Declare intrinsic width and height.
- Lazy-load below-fold media.
- Preload only the genuine homepage LCP asset.
- Use meaningful alt text for content images and empty alt for decorative imagery.
- Verify crops at 320, 375, 414, 768, 1024, 1280 and 1440 pixels.
- Do not convert SVG logos to raster.

## Required documentation

Create or update without delaying implementation:

- `PRODUCT.md`
- `BRAND.md`
- `BUILD_PLAN.md`
- `CONTENT_PLAN.md`
- `PROOF.md`

Record every material action in `PROOF.md`:

`Phase | Action | Target | Command or method | Result | Evidence path or URL | Timestamp | Status`

## Autonomous loop

Inspect, choose the next bounded outcome, implement the smallest complete slice, verify deterministically, inspect desktop and mobile renders, run Hallmark and Impeccable critique, debug root causes, fix, rerun, record proof and continue.

Superpowers systematic debugging is mandatory for every bug, failed test, broken build, performance regression or unexpected result:

1. Reproduce.
2. Gather evidence.
3. Identify the root cause.
4. Apply the smallest complete fix.
5. Rerun the exact failing check.
6. Run verification before completion.

Stop only after three cycles without measurable improvement, ten cycles in one phase, or a decision requiring client authority.

## Verification gate

Before release require:

- type-check
- lint
- production build
- applicable tests
- route and state checks
- critical journey tests
- browser console inspection
- responsive checks at all required widths
- reduced-motion checks
- accessibility checks
- content comparison
- media inspection
- security scanning
- SEO validation
- Hallmark audit
- Impeccable critique
- Ponytail audit
- Lighthouse
- axe-core
- Pa11y
- Squirrelscan when available

Keep measured technical results separate from subjective design critique.

## Deployment

Use GitHub and Vercel only when deployment is requested or already authorised. Deploy the exact audited commit. Preserve unrelated DNS records. Verify TLS, redirects, indexing, forms, integrations, rollback and the live URL. Run a final live audit and record the evidence in `PROOF.md`.

No TODOs, placeholder comments, dead controls, omitted routes or statements that the rest follows the same pattern.
