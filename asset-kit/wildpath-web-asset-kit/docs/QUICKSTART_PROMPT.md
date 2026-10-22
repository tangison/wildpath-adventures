# Quick integration prompt

Unzip `wildpath-web-asset-kit.zip` inside the existing Wildpath Adventures repository. Do not rebuild the site from scratch.

Inspect the repository and live site first. Read `docs/IMPLEMENTATION_PROMPT.md`, `docs/ASSET_USAGE.md` and `assets-manifest.json`, then integrate every asset according to the manifest.

Keep the existing horizontal wordmark in the header. Use `assets/logos/wildpath-logo-dark-theme.svg` as the main footer logo and `wildpath-logo-light-theme.svg` on light backgrounds or as a subtle watermark. Replace the current generic or repeated illustration placeholders with the matching packaged WebP files.

For the Destinations section only, use Tavily to find real, geographically accurate, legally reusable photographs. Record sources and licences. Use packaged destination illustrations only for loading, empty, error, OG or temporary unapproved states.

Run the complete Webman inspect, implement, verify and audit loop. Fix root causes, test desktop and mobile, update `PROOF.md`, and do not deploy until the exact audited commit is authorised.
