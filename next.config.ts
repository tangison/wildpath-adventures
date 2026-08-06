import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* ── Build quality ──────────────────────────────────────
   * reactStrictMode: detects unsafe lifecycle methods & legacy context API
   * ignoreBuildErrors: MUST be false in production — type errors are bugs
   * ─────────────────────────────────────────────────────── */
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  /* ── Image optimisation ────────────────────────────────
   * remotePatterns: allow externally-hosted images if needed
   * formats: prefer AVIF then WebP for best compression
   * ─────────────────────────────────────────────────────── */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  /* ── Security headers ──────────────────────────────────
   * Additional headers applied to every response.
   * Primary security headers are set in src/middleware.ts.
   * ─────────────────────────────────────────────────────── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all', // explicitly allow indexing (override per-route if needed)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
