'use client';

import { useEffect, useRef } from 'react';

type HeroVideoProps = {
  /** Poster shown before playback and as the full fallback (LCP element). */
  poster: string;
  className?: string;
};

const DESKTOP_MP4 = '/video/desktop.mp4';
const DESKTOP_WEBM = '/video/desktop.webm';
const MOBILE_MP4 = '/video/mobile.mp4';
const MOBILE_WEBM = '/video/mobile.webm';

/**
 * Full-bleed hero video loop.
 *
 * Behaviour contract:
 *  - never blocks first paint: sources are attached only after window load
 *    (or idle), so the poster is the LCP element;
 *  - respects prefers-reduced-motion and Save-Data / 2g connections by
 *    staying on the poster permanently;
 *  - pauses when scrolled out of view (IntersectionObserver) and resumes
 *    when it returns;
 *  - mobile devices (<=767px) receive the 720p encodes, desktop the 1280p
 *    ones, via media queries on the <source> elements;
 *  - WebM is preferred, MP4 is the universal fallback.
 */
export function HeroVideo({ poster, className = '' }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const dataSaver = Boolean(conn?.saveData) || conn?.effectiveType === '2g';
    const skipVideo = reducedMotion.matches || dataSaver;

    let started = false;
    let observer: IntersectionObserver | null = null;
    let onLoad: (() => void) | null = null;

    const startPlayback = () => {
      if (started) return;
      started = true;
      // attach sources at start time; sources with media queries pick the file
      video.innerHTML =
        `<source src="${DESKTOP_WEBM}" type="video/webm" media="(min-width: 768px)">` +
        `<source src="${DESKTOP_MP4}" type="video/mp4" media="(min-width: 768px)">` +
        `<source src="${MOBILE_WEBM}" type="video/webm" media="(max-width: 767px)">` +
        `<source src="${MOBILE_MP4}" type="video/mp4" media="(max-width: 767px)">`;
      video.load();
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {/* autoplay refused: poster stays */});
    };

    if (skipVideo) {
      // poster-only mode: strip sources forever
      return () => {
        observer?.disconnect();
      };
    }

    const idle = (cb: () => void) => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
      if (typeof w.requestIdleCallback === 'function') {
        w.requestIdleCallback(cb, { timeout: 3000 });
      } else {
        window.setTimeout(cb, 400);
      }
    };

    const beginWhenReady = () => {
      if (document.readyState === 'complete') {
        idle(startPlayback);
      } else {
        onLoad = () => idle(startPlayback);
        window.addEventListener('load', onLoad, { once: true });
        // hard fallback: never later than 4s after mount
        window.setTimeout(() => {
          if (!started && !document.hidden) startPlayback();
        }, 4000);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!started) continue;
          if (entry.isIntersecting) {
            if (video.paused) video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(wrap);
    beginWhenReady();

    const onVisibility = () => {
      if (document.hidden) video.pause();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      if (onLoad) window.removeEventListener('load', onLoad);
      video.pause();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover"
        tabIndex={-1}
      />
    </div>
  );
}
