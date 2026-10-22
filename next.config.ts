import type { NextConfig } from "next";

/**
 * Fully static export.
 * No server, no database, no runtime image optimisation — images ship as
 * pre-encoded AVIF/WebP variants served through <picture> (src/components/photo.tsx).
 * Security headers that previously lived in middleware now live in vercel.json
 * (Vercel) and the Caddyfile (staging origin).
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },
};

export default nextConfig;
