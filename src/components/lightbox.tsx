'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type LightboxImage = {
  base: string;
  dir?: string;      // images/places | images/photos
  width?: number;    // variant width to show (defaults 1920 or max available)
  alt: string;
  caption?: string;
};

/**
 * Lightbox — full-viewport image viewer.
 * - Opens from gallery buttons; shows image + caption
 * - Keyboard: Esc closes, ArrowLeft/ArrowRight navigate
 * - Focus is trapped inside the dialog; focus returns to the opener on close
 * - Background scroll locked while open
 * - Pinch-zoom enabled via CSS touch-action
 */
export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);
  const dir = (i: number) => images[i]?.dir ?? 'images/places';
  const current = images[index];

  const next = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate]);
  const prev = useCallback(() => onNavigate((index - 1 + images.length) % images.length), [index, images.length, onNavigate]);

  useEffect(() => {
    openerRef.current = document.activeElement;
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Tab') {
        // Simple focus trap: keep tabbing among the three controls.
        const focusables = [closeRef.current];
        if (!focusables[0]) return;
        if (!document.activeElement || !focusables.includes(document.activeElement as HTMLButtonElement)) {
          e.preventDefault();
          closeRef.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [onClose, next, prev]);

  if (!current) return null;

  const w = current.width ?? 1920;

  return (
    <div
      className="wp-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current.caption ?? current.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button ref={closeRef} className="wp-lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <X size={20} />
      </button>
      {images.length > 1 && (
        <>
          <button className="wp-lightbox-prev" onClick={prev} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <button className="wp-lightbox-next" onClick={next} aria-label="Next image">
            <ChevronRight size={24} />
          </button>
        </>
      )}
      <figure className="flex flex-col items-center max-w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/${dir(index)}/${current.base}-${w}.webp`}
          alt={current.alt}
          loading="eager"
        />
        {current.caption && (
          <figcaption className="wp-lightbox-caption">
            {current.caption}
            {images.length > 1 && (
              <span className="block text-[0.65rem] mt-1 text-[#F2EDE3]/50">
                {index + 1} / {images.length} · use arrow keys
              </span>
            )}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

/**
 * Gallery — image grid that opens the shared Lightbox.
 * Server-component friendly: pass plain objects; interactivity lives here.
 */
export function Gallery({
  images,
  cols = 'grid-cols-2 md:grid-cols-3',
  aspect = '4 / 5',
}: {
  images: (LightboxImage & { alt: string })[];
  cols?: string;
  aspect?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className={`grid ${cols} gap-3 md:gap-4`}>
        {images.map((img, i) => (
          <button
            key={img.base}
            onClick={() => setOpen(i)}
            className="wp-photo group relative block w-full text-left"
            style={{ aspectRatio: aspect }}
            aria-label={`Open image: ${img.caption ?? img.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/${img.dir ?? 'images/places'}/${img.base}-960.webp`}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span
              className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-[#F2EDE3]/40 transition-colors"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox
          images={images}
          index={open}
          onClose={() => setOpen(null)}
          onNavigate={setOpen}
        />
      )}
    </>
  );
}
