'use client';

import { useEffect, useRef, useState } from 'react';
import { withBP } from '@/lib/base-path';

/**
 * LoopVideo — uniform front-page film frame (Nov 2026 client review:
 * "fix all non-working video embeds on the front page and standardise
 * their aspect ratios/containers so they are uniform").
 *
 * Every clip sits in the same 16/9 .wp-photo frame with a real poster
 * (first frame exported from the clip itself), so the band looks identical
 * before, during and after playback, and never shows a blank box.
 *
 * Playback contract (same posture the hero used, now with an extra
 * user-gesture retry so iOS Low Power Mode and strict autoplay settings
 * still end up playing):
 * - source attached only when the frame scrolls into view (Intersection-
   Observer); nothing loads below the fold
 * - play() called directly on view; if the promise rejects (autoplay
 *   blocked), one pointer/key gesture retries before giving up to poster
 * - paused off-screen and on tab hide; resumed only when guards re-pass
 * - prefers-reduced-motion / Save-Data / 2G: poster only, zero video bytes
 * - clip error: video hides, poster stays — the frame never breaks
 * - mobile picks the 720px file, desktop the 1280px file (matchMedia)
 */

const FILES = {
  dunes: {
    mobile: '/video/hero-mobile.mp4',
    desktop: '/video/hero-desktop.mp4',
    poster: '/video/film-dunes-poster.jpg',
  },
  coast: {
    mobile: '/video/hero-coast-mobile.mp4',
    desktop: '/video/hero-coast-desktop.mp4',
    poster: '/video/film-coast-poster.jpg',
  },
} as const;

export function LoopVideo({
  kind,
  label,
  alt,
}: {
  kind: keyof typeof FILES;
  label: string;
  alt: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slowNetwork =
      conn?.saveData === true ||
      conn?.effectiveType === 'slow-2g' ||
      conn?.effectiveType === '2g';
    if (reduced.matches || slowNetwork) return; // poster only, no bytes

    const mq = window.matchMedia('(max-width: 768px)');
    let attached = false;
    let inView = false;

    const attach = () => {
      const src = withBP(mq.matches ? FILES[kind].mobile : FILES[kind].desktop);
      if (v.getAttribute('src') !== src) {
        v.preload = 'auto';
        v.setAttribute('src', src);
        v.load();
      }
      attached = true;
    };

    /** One user gesture retries a blocked autoplay once, then we stop trying. */
    const armGestureRetry = () => {
      const retry = () => {
        window.removeEventListener('pointerdown', retry);
        window.removeEventListener('keydown', retry);
        if (!inView || document.hidden) return;
        v.muted = true;
        const p = v.play();
        if (p) p.catch(() => setFailed(true));
      };
      window.addEventListener('pointerdown', retry, { once: true });
      window.addEventListener('keydown', retry, { once: true });
    };

    const play = () => {
      if (!attached) attach();
      const p = v.play();
      if (p) p.catch(armGestureRetry);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !document.hidden) play();
        else if (!inView) v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(wrap);

    const onVisibility = () => {
      if (document.hidden) v.pause();
      else if (inView) play();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onError = () => setFailed(true);
    v.addEventListener('error', onError);
    const onPlaying = () => setPlaying(true);
    v.addEventListener('playing', onPlaying);

    const onMqChange = () => {
      if (!attached) return;
      v.pause();
      attached = false;
      if (inView && !document.hidden) play();
    };
    mq.addEventListener('change', onMqChange);

    return () => {
      io.disconnect();
      mq.removeEventListener('change', onMqChange);
      document.removeEventListener('visibilitychange', onVisibility);
      v.removeEventListener('error', onError);
      v.removeEventListener('playing', onPlaying);
      v.pause();
    };
  }, [kind]);

  return (
    <figure className="m-0">
      <div
        ref={wrapRef}
        className="wp-photo wp-img-reveal relative"
        style={{ aspectRatio: '16 / 9' }}
      >
        {/* Poster: first frame of the clip — the frame is never blank */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBP(FILES[kind].poster)}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: failed ? 0 : playing ? 1 : 0, transition: 'opacity 0.6s ease' }}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
      <figcaption className="wp-subhead text-[0.6rem] text-[#9E4214] mt-3">
        {label}
      </figcaption>
    </figure>
  );
}
