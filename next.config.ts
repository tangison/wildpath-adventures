import type { NextConfig } from "next";

/**
 * Static site. `output: 'export'` produces a pure static build in ./out —
 * no server, no API routes, no middleware. All images are pre-optimised
 * WebP/AVIF with hand-tracked srcsets (see src/lib/photo-library.ts),
 * so the Next image optimizer is switched off.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
