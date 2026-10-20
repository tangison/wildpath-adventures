'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { getPhoto } from '@/lib/photo-library';

// ═══════════════════════════════════════════════════════════
// WP PICTURE — responsive <picture> from the photo library.
// Builds AVIF + WebP srcsets from manifest-tracked widths only,
// so no srcset URL can 404. Width/height attributes are always
// set from the recorded intrinsic ratio → CLS stays 0.
// ═══════════════════════════════════════════════════════════

export function WpPicture({
  photo,
  sizes = '100vw',
  className = '',
  imgClassName = '',
  priority = false,
  alt,
  objectPosition,
}: {
  photo: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  alt?: string;
  objectPosition?: string;
}) {
  const rec = getPhoto(photo);
  if (!rec) return null;
  const widths = rec.widths.length ? rec.widths : [960];
  const largest = Math.max(...widths);
  const avif = widths.map((w) => `${rec.dir}/${rec.id}-${w}.avif ${w}w`).join(', ');
  const webp = widths.map((w) => `${rec.dir}/${rec.id}-${w}.webp ${w}w`).join(', ');
  const fallback = `${rec.dir}/${rec.id}-${largest}.webp`;

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={fallback}
        alt={alt !== undefined ? alt : rec.alt}
        sizes={sizes}
        width={rec.w}
        height={rec.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        draggable={false}
        className={imgClassName}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </picture>
  );
}

// ═══════════════════════════════════════════════════════════
// HERO SLIDER — background slideshow of client photographs.
// Crossfade (opacity) + slow Ken Burns push (transform scale).
// Both are compositor-only. Reduced motion renders a single
// static frame. Hidden from assistive tech: the section's real
// text carries the meaning, images are decorative.
// ═══════════════════════════════════════════════════════════

const HERO_SLIDES = [
  'landcruiser-dune-crest',
  'deadvlei-white-pan-red-dunes',
  'giraffes-walking-etosha',
  'rhino-ostrich-etosha',
  'deadvlei-trees-dune-shadow',
];

const SLIDE_INTERVAL_MS = 6000;

export function HeroSlider({ className = '' }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    timer.current = setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#1A1A1A] ${className}`}
      aria-hidden="true"
    >
      {HERO_SLIDES.map((id, i) => {
        const active = i === index;
        return (
          <div
            key={id}
            className={`absolute inset-0 transition-opacity ease-linear ${
              active ? 'opacity-100 duration-[1200ms]' : 'opacity-0 duration-[1200ms]'
            }`}
          >
            <WpPicture
              photo={id}
              sizes="100vw"
              alt=""
              priority={i === 0}
              imgClassName={`h-full w-full object-cover wp-kenburns ${
                active && !prefersReducedMotion ? 'wp-kenburns-run' : ''
              }`}
            />
          </div>
        );
      })}
      {/* Ink scrim only where the caption sits, full-frame dark overlay avoided */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A1A1A]/35 to-transparent" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCROLL TO TOP — appears after the first viewport. Solid ink
// button, transform/opacity transition only, keyboard focusable.
// ═══════════════════════════════════════════════════════════

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 z-40 w-11 h-11 bg-[#1A1A1A] text-[#F2EDE3] border border-[#1A1A1A] flex items-center justify-center hover:bg-[#C5511A] hover:border-[#C5511A] transition-[background-color,border-color] duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      } transition-[opacity,transform] duration-300`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
