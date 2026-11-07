'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMAGE_VARIANTS } from '@/lib/image-variants';
import { withBP } from '@/lib/base-path';

/**
 * HeroSlider — full-opacity photo carousel, Nov 2026 client review.
 *
 * Replaces the old full-frame-scrim video hero: four high-fidelity client
 * photographs crossfade in place, each slide linking to the journey it
 * belongs to (the "trip highlights" the review asked for). The photograph
 * renders at full strength; only the lower third carries a legibility
 * gradient (.wp-hero-scrim) for the headline block.
 *
 * Behaviour contract:
 * - auto-advance every 6s, paused while the tab is hidden, and never
 *   started under prefers-reduced-motion (dots remain fully usable)
 * - slide 1 is eager + fetchpriority high (the LCP element); slides 2-4
 *   lazy-load and only decode when shown
 * - inactive slides are aria-hidden with tabIndex -1; one tab stop only
 * - dots give direct control; interval keeps running (6s is slow enough
 *   that manual selection never fights the timer in practice)
 */

type Slide = { base: string; alt: string; href: string; label: string };

const SLIDES: Slide[] = [
  {
    base: 'deadvlei-white-pan-red-dunes',
    alt: 'Dead camelthorn trees on the white clay pan of Deadvlei, backed by red dunes.',
    href: '/journeys/classic-namibia',
    label: 'Classic Namibia Route',
  },
  {
    base: 'etosha-detail',
    alt: 'A breeding herd of elephants moving across red earth.',
    href: '/journeys/untamed-central',
    label: 'Untamed Central Route',
  },
  {
    base: 'caprivi-mokoro-golden-reeds',
    alt: 'A mokoro gliding through golden reeds on a Caprivi river channel.',
    href: '/journeys/untamed-northern-caprivi',
    label: 'Northern Caprivi Route',
  },
  {
    base: 'landcruiser-dune-crest',
    alt: 'A land cruiser parked on a dune crest above the sand sea.',
    href: '/journeys/untamed-desert',
    label: 'Desert & Coast Route',
  },
];

const INTERVAL_MS = 6000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [motionOK, setMotionOK] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotionOK(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!motionOK) return;
    const id = setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [motionOK]);

  return (
    <div
      className="wp-hero-media"
      role="group"
      aria-roledescription="carousel"
      aria-label="Trip highlights"
    >
      {SLIDES.map((s, i) => {
        const fam = IMAGE_VARIANTS[s.base];
        const dir = fam?.dir ?? 'images/places';
        const widths = fam?.widths ?? [1920];
        const largest = Math.max(...widths);
        const srcW = Math.min(largest, 1920);
        const avif = widths
          .map((w) => `${withBP(`/${dir}/${s.base}-${w}.avif`)} ${w}w`)
          .join(', ');
        const webp = widths
          .map((w) => `${withBP(`/${dir}/${s.base}-${w}.webp`)} ${w}w`)
          .join(', ');
        const isActive = i === active;
        return (
          <Link
            key={s.base}
            href={s.href}
            className={`wp-hero-slide ${isActive ? 'is-active' : ''}`}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            aria-label={`${s.label}, view the journey`}
          >
            <picture>
              <source type="image/avif" srcSet={avif} sizes="100vw" />
              <source type="image/webp" srcSet={webp} sizes="100vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBP(`/${dir}/${s.base}-${srcW}.webp`)}
                srcSet={webp}
                sizes="100vw"
                alt={s.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : undefined}
                decoding={i === 0 ? 'sync' : 'async'}
              />
            </picture>
          </Link>
        );
      })}

      <div className="wp-hero-scrim" aria-hidden="true" />

      {/* Slide indicator + label, clear of the floating nav below it */}
      <div className="absolute top-32 md:top-44 right-6 md:right-12 z-10 flex flex-col items-end gap-3">
        <p className="wp-subhead text-[0.6rem] md:text-[0.65rem] text-[#F2EDE3] bg-[#140C06]/55 backdrop-blur-sm px-3.5 py-2 max-w-[16rem] text-right leading-snug">
          {SLIDES[active].label}
        </p>
        <div className="flex gap-2 bg-[#140C06]/55 backdrop-blur-sm rounded-full px-3 py-2.5" role="tablist" aria-label="Choose slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.base}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}: ${s.label}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-7 bg-[#F2EDE3]'
                  : 'w-3 bg-[#F2EDE3]/45 hover:bg-[#F2EDE3]/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
