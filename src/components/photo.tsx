import { IMAGE_VARIANTS } from '@/lib/image-variants';

/**
 * Photo — responsive <picture> for every real photograph on the site.
 *
 * Serves AVIF first, then WebP, with a JPG-free fallback chain (both formats
 * are universally supported by target browsers; the fallback src is WebP).
 * Emits explicit width/height to keep CLS at zero and a subtle paper-tone
 * background while the image loads (perceived blur-up without base64 blobs).
 *
 * `base` is the family name from IMAGE_VARIANTS (generated from the image
 * manifests). If a family is missing the component falls back to the plain
 * base file path so builds never hard-fail on a rename.
 */
export function Photo({
  base,
  alt,
  aspect = '3 / 2',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  className = '',
  imgClassName = '',
  reveal = true,
  caption,
}: {
  base: string;
  alt: string;
  /** CSS aspect-ratio for the frame, e.g. '16 / 9', '4 / 5', '3 / 2' */
  aspect?: string;
  sizes?: string;
  /** Above-the-fold images: eager + fetchpriority high, no reveal animation */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Blur-up entrance (below the fold). Off when priority is set. */
  reveal?: boolean;
  caption?: string;
}) {
  const fam = IMAGE_VARIANTS[base];
  const dir = fam?.dir ?? 'images/places';

  if (!fam) {
    // Unknown family: render a safe single-source img so builds never break.
    return (
      <figure className={`wp-photo ${className}`} style={{ aspectRatio: aspect }}>
        <img src={`/${dir}/${base}.webp`} alt={alt} loading={priority ? 'eager' : 'lazy'} className={imgClassName} />
        {caption ? <figcaption className="sr-only">{caption}</figcaption> : null}
      </figure>
    );
  }

  const widths = fam.widths;
  const avifSrcset = widths.map((w) => `/${dir}/${base}-${w}.avif ${w}w`).join(', ');
  const webpSrcset = widths.map((w) => `/${dir}/${base}-${w}.webp ${w}w`).join(', ');
  const largest = Math.max(...widths);
  const src = `/${dir}/${base}-${largest}.webp`;

  // Intrinsic dimensions: derive height from the aspect ratio so the browser
  // reserves exact space (zero CLS) before the file downloads.
  const [aw, bh] = aspect.split('/').map((s) => parseFloat(s.trim()));
  const ratio = aw / bh;
  const width = Math.min(largest, 1920);
  const height = Math.round(width / ratio);

  const frameClass = `wp-photo ${reveal && !priority ? 'wp-img-reveal' : ''} ${className}`;

  return (
    <figure className={frameClass} style={{ aspectRatio: aspect }}>
      <picture>
        <source type="image/avif" srcSet={avifSrcset} sizes={sizes} />
        <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          srcSet={webpSrcset}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding={priority ? 'sync' : 'async'}
          className={imgClassName}
        />
      </picture>
      {caption ? (
        <figcaption className="mt-3 text-xs text-[#1A1A1A]/60 leading-relaxed">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
