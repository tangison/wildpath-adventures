/**
 * Static-mirror base path support.
 *
 * Production (Vercel) builds with NEXT_PUBLIC_BASE_PATH unset -> '' and every
 * helper below is an identity function. The GitHub Pages mirror build sets
 * NEXT_PUBLIC_BASE_PATH=/wildpath-adventures so the SAME code emits correctly
 * prefixed URLs on both server and client render (hydration-consistent by
 * construction — one helper, one inlined constant, no string surgery).
 *
 * Rule: any root-absolute asset URL built by hand (template literals for
 * images/video, <link preload>, JS-assigned media src) MUST go through
 * withBP(). next/image and next/link apply basePath automatically and must
 * NOT be double-prefixed.
 */
export const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a root-absolute path with the build's base path (identity when ''). */
export function withBP(path: string): string {
  if (!BP) return path;
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${BP}${path}`;
}
