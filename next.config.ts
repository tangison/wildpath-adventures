import type { NextConfig } from "next";

/**
 * Static site. Every route is prerendered (SSG); there is no database and
 * no API. Images are pre-optimised AVIF/WebP variant families served as
 * plain <picture> markup (see src/components/photo.tsx), so the Next image
 * optimizer is largely bypassed by design.
 *
 * Two build modes:
 * - default (Vercel): output "standalone"; security headers + caching +
 *   redirects live in vercel.json; src/proxy.ts adds staging noindex.
 * - mirror (GitHub Pages): NEXT_STATIC_EXPORT=1 +
 *   NEXT_PUBLIC_BASE_PATH=/wildpath-adventures -> output "export" with the
 *   base path baked into every asset URL (client + server identical, so
 *   hydration is consistent). See src/lib/base-path.ts for the rule.
 */
const isExport = process.env.NEXT_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    ...(isExport ? { unoptimized: true } : {}),
  },
  ...(isExport
    ? { output: "export" as const, trailingSlash: true }
    : { output: "standalone" as const }),
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
