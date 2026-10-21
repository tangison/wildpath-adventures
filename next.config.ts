import type { NextConfig } from "next";

/**
 * Static site. Every route is prerendered (SSG); there is no database and
 * no API. Images are pre-optimised AVIF/WebP variant families served as
 * plain <picture> markup (see src/components/photo.tsx), so the Next image
 * optimizer is largely bypassed by design.
 *
 * Security headers + caching + redirects live in vercel.json (applied at
 * the Vercel edge). Staging hosts get noindex,nofollow from
 * src/middleware.ts — production stays indexable.
 */
const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
