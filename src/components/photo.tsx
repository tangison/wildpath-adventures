import { getPhoto } from '@/data/photos.generated';

type PhotoImgProps = {
  /** Photo id from images/images.manifest.json (e.g. "wc-chobe-elephant-swimming"). */
  id: string;
  /** sizes attribute — drives srcset selection. */
  sizes?: string;
  className?: string;
  /** Largest width to serve, capped by available variants. */
  maxWidth?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Fill the nearest positioned parent (absolute, object-cover). */
  fill?: boolean;
  /** object-fit when fill is used. */
  objectPosition?: string;
  /** alt can be overridden for context-specific descriptions. */
  alt?: string;
};

const ORDER = [640, 960, 1440, 1920];

/**
 * Static-first photograph renderer.
 * Serves pre-encoded AVIF/WebP variants from /public/images/photos (no runtime
 * image optimisation server needed) with explicit dimensions to prevent CLS.
 */
export function PhotoImg({
  id,
  sizes = '100vw',
  className = '',
  maxWidth,
  loading = 'lazy',
  fetchPriority = 'auto',
  fill = false,
  objectPosition = 'center',
  alt,
}: PhotoImgProps) {
  const photo = getPhoto(id);
  if (!photo) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`PhotoImg: unknown photo id "${id}"`);
    }
    return null;
  }
  const cap = maxWidth ?? Infinity;
  const widths = ORDER.filter((w) => photo.webp.some((v) => v.width === w) && w <= cap);
  const top = widths[widths.length - 1] ?? photo.webp[photo.webp.length - 1].width;
  const src = (photo.webp.find((v) => v.width === top) ?? photo.webp[0]).file;
  const srcSetWebp = widths
    .map((w) => `${photo.webp.find((v) => v.width === w)!.file} ${w}w`)
    .join(', ');
  const srcSetAvif = widths
    .map((w) => `${photo.avif.find((v) => v.width === w)!.file} ${w}w`)
    .join(', ');
  // intrinsic ratio preserved at any width; height follows the served width
  const ratio = photo.height / photo.width;
  const imgClass = fill
    ? `absolute inset-0 h-full w-full object-cover ${className}`
    : className;
  return (
    <picture style={fill ? { position: 'absolute', inset: 0 } : undefined} className={fill ? 'absolute inset-0' : undefined}>
      {srcSetAvif && <source type="image/avif" srcSet={srcSetAvif} sizes={sizes} />}
      <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? photo.alt}
        width={fill ? undefined : top}
        height={fill ? undefined : Math.round(top * ratio)}
        sizes={sizes}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={loading === 'eager' ? 'sync' : 'async'}
        className={imgClass}
        style={fill ? { objectPosition } : undefined}
        draggable={false}
      />
    </picture>
  );
}
