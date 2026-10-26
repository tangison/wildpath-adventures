'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * HeroVideo — full-bleed background loop (TASK 1).
 *
 * Sources: desktop 960px + mobile 560px, each in H.264 MP4 (primary) and
 * WebM/VP9 (progressive). 6.5s seamless crossfade loop (tail dissolves back
 * into the head) — no visible cut at the loop point. Files live in /public/video.
 *
 * Behaviour contract:
 * - autoplay muted loop playsinline — standard background-video posture
 * - preload="metadata": the poster is the LCP element; video bytes stream after
 * - starts playback only when the browser signals it can play (never blocks first paint)
 * - IntersectionObserver pauses the loop off-screen (battery + data)
 * - prefers-reduced-motion: video never plays; poster shown instead
 * - Save-Data / 2G: video never plays; poster shown instead
 * - mobile source chosen via matchMedia(≤768px) at mount; re-evaluated on change
 * - on play failure (e.g. blocked), the poster remains — content is never lost
 */
export function HeroVideo({ posterAlt }: { posterAlt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
        .connection ?? undefined;
    const slowNetwork =
      saveData?.saveData === true ||
      saveData?.effectiveType === 'slow-2g' ||
      saveData?.effectiveType === '2g';

    // Data/motion guard — show poster only.
    if (reducedMotion.matches || slowNetwork) {
      return;
    }

    // Pick mobile vs desktop source.
    const mobile = window.matchMedia('(max-width: 768px)');
    const applySource = () => {
      const m = mobile.matches ? 'mobile' : 'desktop';
      const webm = `/video/hero-${m}.webm`;
      const mp4 = `/video/hero-${m}.mp4`;
      const current = video.currentSrc || video.src || '';
      if (current.includes(`hero-${m}`)) return;
      video.innerHTML =
        `<source src="${webm}" type="video/webm" />` +
        `<source src="${mp4}" type="video/mp4" />`;
      video.load();
    };
    applySource();

    const onMobileChange = () => applySource();
    mobile.addEventListener('change', onMobileChange);

    // Lazy start — wait until the browser can actually play through.
    const startPlaying = () => {
      video.play().then(
        () => setCanPlayVideo(true),
        () => setCanPlayVideo(false) // poster stays; nothing broken
      );
    };
    video.addEventListener('canplaythrough', startPlaying, { once: true });

    // Pause off-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.paused && video.readyState >= 3) startPlaying();
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(video);

    // If the reduced-motion preference flips while mounted, honour it.
    const onMotionChange = () => {
      if (reducedMotion.matches) video.pause();
    };
    reducedMotion.addEventListener('change', onMotionChange);

    return () => {
      mobile.removeEventListener('change', onMobileChange);
      reducedMotion.removeEventListener('change', onMotionChange);
      io.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div className="wp-hero-media">
      <img
        src="/video/hero-poster.avif"
        alt={posterAlt}
        className="wp-hero-poster"
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="sync"
      />
      <video
        ref={videoRef}
        className="wp-hero-video"
        style={{ opacity: canPlayVideo ? 1 : 0, transition: 'opacity 0.8s ease' }}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="wp-hero-scrim" />
    </div>
  );
}
