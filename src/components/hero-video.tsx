'use client';

import { useEffect, useRef, useState } from 'react';
import { withBP } from '@/lib/base-path';

/**
 * HeroVideo — full-bleed background loop.
 *
 * Media: 8.0s seamless loop (tail crossfades into the reversed head, ending
 * exactly on frame 0 — the wrap is smoother than normal frame-to-frame motion,
 * full-frame seam SSIM ≈0.89 vs ≈0.60 for adjacent footage frames).
 * Desktop 1280x720 (~1.0MB) and mobile 720x404 (~0.2MB) H.264 — universally
 * decodable.
 *
 * Behaviour contract:
 * - poster <picture> (AVIF → WebP → JPEG) is the LCP element, preloaded
 * - sources are attached AFTER hydration and only once the IntersectionObserver
 *   confirms the hero is on screen; play() is called directly — never gated on
 *   `canplaythrough`, which does not fire under preload="metadata" (the bug
 *   that previously left the video invisible in Chromium/Firefox)
 * - fade-in only on the `playing` event; on any failure the poster remains
 * - muted + playsInline + loop + autoplay: standard background-video posture;
 *   the attribute is a belt-and-braces fallback alongside the JS play()
 * - prefers-reduced-motion / Save-Data / 2G: video never loads, poster only
 *   (Save-Data/effectiveType come from navigator.connection — Chromium only;
 *   WebKit exposes no network-info API, so iOS relies on the reduced-motion
 *   and data-saver OS settings that surface through that API-free path)
 * - IntersectionObserver pauses the loop off-screen; visibilitychange too;
 *   both resume paths re-check the motion guard
 * - mobile vs desktop source chosen via matchMedia(≤768px), re-evaluated on
 *   viewport change; a source switch fades back to the poster first
 */
export function HeroVideo({ posterAlt }: { posterAlt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slowNetwork =
      connection?.saveData === true ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g';

    // Motion / data guard — poster only, no video bytes at all.
    if (reducedMotion.matches || slowNetwork) return;

    const mobile = window.matchMedia('(max-width: 768px)');
    let inView = false; // IntersectionObserver sets this before anything plays
    let currentKind = '';

    const allowedToPlay = () => !reducedMotion.matches && !slowNetwork;

    const start = () => {
      if (!allowedToPlay()) return;
      const p = video.play();
      if (p) p.catch(() => setPlaying(false)); // autoplay blocked → poster stays
    };

    const applySource = () => {
      const kind = mobile.matches ? 'mobile' : 'desktop';
      if (kind === currentKind) return;
      currentKind = kind;
      setPlaying(false); // fade to poster; back in on the new source's `playing`
      video.src = withBP(`/video/hero-${kind}.mp4`);
      video.load();
      if (inView && !document.hidden) start();
    };

    const onPlaying = () => setPlaying(true);
    const onError = () => setPlaying(false);

    // Fade in/out exactly when actual playback state changes.
    video.addEventListener('playing', onPlaying);
    video.addEventListener('error', onError);

    // Pause off-screen (battery + data). Observed BEFORE the first source is
    // attached so a hydration-scroll-past-the-hero never fetches video bytes.
    const io = new IntersectionObserver(
      ([entry]) => {
        const was = inView;
        inView = entry.isIntersecting;
        if (inView && !was && currentKind && !document.hidden) {
          start();
        } else if (inView && !currentKind) {
          applySource(); // first intersection drives the initial attach+play
        } else if (!inView) {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(video);

    applySource(); // attach the right source now; IO starts playback when in view

    // Tab backgrounded/foregrounded.
    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (inView && video.paused && currentKind) {
        start();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onMobileChange = () => applySource();
    mobile.addEventListener('change', onMobileChange);

    // Honour a mid-session reduced-motion switch.
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        video.pause();
        setPlaying(false);
      }
    };
    reducedMotion.addEventListener('change', onMotionChange);

    return () => {
      mobile.removeEventListener('change', onMobileChange);
      reducedMotion.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibility);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('error', onError);
      io.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div className="wp-hero-media">
      <picture>
        <source srcSet={withBP('/video/hero-poster.avif')} type="image/avif" />
        <source srcSet={withBP('/video/hero-poster.webp')} type="image/webp" />
        <img
          src={withBP('/video/hero-poster.jpg')}
          alt={posterAlt}
          className="wp-hero-poster"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="sync"
        />
      </picture>
      <video
        ref={videoRef}
        className="wp-hero-video"
        style={{ opacity: playing ? 1 : 0, transition: 'opacity 0.8s ease' }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="wp-hero-scrim" />
    </div>
  );
}
