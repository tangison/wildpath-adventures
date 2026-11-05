import { IMAGE_VARIANTS } from '@/lib/image-variants';
import { withBP } from '@/lib/base-path';

/**
 * Registry-driven variant selection.
 *
 * Every hardcoded "-1440.webp" / "-1920.webp" reference is a latent 404 for
 * photo families that were re-encoded below those widths to respect the 250KB
 * per-image cap (e.g. kalahari tops out at 960). All image markup MUST go
 * through these helpers so a src can never name a width the family lacks.
 */

/** Largest available width for `base` that does not exceed `cap`. */
export function bestVariantWidth(base: string, cap = 1920): number {
  const fam = IMAGE_VARIANTS[base];
  if (!fam) return cap;
  const within = fam.widths.filter((w) => w <= cap);
  return within.length ? Math.max(...within) : Math.max(...fam.widths);
}

/** Directory for `base` per the registry (fallback: explicit `dirHint`). */
export function variantDir(base: string, dirHint?: string): string {
  return IMAGE_VARIANTS[base]?.dir ?? dirHint ?? 'images/places';
}

/**
 * Full responsive srcset pair for a family.
 * Returns null when the family is unknown (caller falls back to plain src).
 */
export function variantSrcSet(base: string): {
  dir: string;
  avif: string;
  webp: string;
  largest: number;
} | null {
  const fam = IMAGE_VARIANTS[base];
  if (!fam) return null;
  const avif = fam.widths.map((w) => `${withBP(`/${fam.dir}/${base}-${w}.avif`)} ${w}w`).join(', ');
  const webp = fam.widths.map((w) => `${withBP(`/${fam.dir}/${base}-${w}.webp`)} ${w}w`).join(', ');
  return { dir: fam.dir, avif, webp, largest: Math.max(...fam.widths) };
}
