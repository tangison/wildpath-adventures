'use client';

import { useEffect, useRef, useState } from 'react';
import { withBP } from '@/lib/base-path';

/**
 * HeroVideo — full-bleed background loop, two scenes.
 *
 * Media: two 8.0s seamless palindrome loops that play as one continuous
 * playlist — scene 1 Sossusvlei dune drive, scene 2 Swakopmund beachfront
 * (client footage, Oct 2026 batch). Both files end exactly on their frame 0
 * (tail dissolves into the reversed head), so the wrap and the crossfade
 * between scenes land on calm frames.
 * Desktop 1280x720 (dunes ~1.0MB + coast ~0.76MB) and mobile 720x404
 * (dunes ~0.2MB + coast ~0.22MB) H.264 — universally decodable. The standby
 * element preloads the other scene only after the first scene is playing.
 *
 * Behaviour contract:
 * - poster <picture> (AVIF → WebP → JPEG) is the LCP element, preloaded
 * - sources are attached AFTER hydration and only once the IntersectionObserver
 *   confirms the hero is on screen; play() is called directly — never gated on
 *   `canplaythrough`, which does not fire under preload="metadata" (the bug
 *   that previously left the video invisible in Chromium/Firefox)
 * - two stacked <video> elements crossfade on scene change; the hidden one is
 *   always paused. If a scene file fails, it is dropped from rotation and the
 *   remaining scene loops alone — the hero never falls back to a blank
 * - fade-in only on the `playing` event; on total failure the poster remains
 * - muted + playsInline + autoplay attribute: standard background-video
 *   posture alongside the JS play()
 * - prefers-reduced-motion / Save-Data / 2G: video never loads, poster only
 *   (Save-Data/effectiveType come from navigator.connection — Chromium only;
 *   WebKit exposes no network-info API, so iOS relies on the reduced-motion
 *   and data-saver OS settings that surface through that API-free path)
 * - IntersectionObserver pauses off-screen; visibilitychange too; both resume
 *   paths re-check the motion guard
 * - mobile vs desktop sources chosen via matchMedia(≤768px), re-evaluated on
 *   viewport change; a source switch fades back to the poster first
 */

type Clip = { src: string };

const clipsFor = (kind: 'mobile' | 'desktop'): Clip[] => [
  { src: withBP(`/video/hero-${kind}.mp4`) },
  { src: withBP(`/video/hero-coast-${kind}.mp4`) },
];

export function HeroVideo({ posterAlt }: { posterAlt: string }) {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;
    const els: HTMLVideoElement[] = [a, b];

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
    let kind: 'mobile' | 'desktop' | '' = '';
    let clips: Clip[] = [];
    let activeIdx = 0; // index into clips
    let activeElIdx = 0; // which element (0=A, 1=B) holds the active clip
    const standbyElIdx = () => 1 - activeElIdx;
    const broken = new Set<string>();
    let switching = false; // ignore 'ended' during a crossfade

    const el = (i: number) => els[i] as HTMLVideoElement;
    const activeEl = () => el(activeElIdx);
    const allowedToPlay = () => !reducedMotion.matches && !slowNetwork;

    const workingClips = () => clips.filter((c) => !broken.has(c.src));

    const start = () => {
      if (!allowedToPlay()) return;
      const p = activeEl().play();
      if (p) p.catch(() => setPlaying(false)); // autoplay blocked → poster stays
    };

    /** Point an element at a clip. preload auto for the standby after first play. */
    const mount = (elIdx: number, clip: Clip, eager: boolean) => {
      const v = el(elIdx);
      if (v.getAttribute('src') !== clip.src) {
        v.preload = eager ? 'auto' : 'metadata';
        v.setAttribute('src', clip.src);
        v.load();
      }
    };

    /** Preload the next working clip on the standby element (no-op if mounted). */
    const preloadNext = () => {
      const pool = workingClips();
      if (pool.length < 2) return;
      const cur = clips[activeIdx];
      const curPos = pool.findIndex((c) => c.src === cur.src);
      const next = pool[(curPos + 1) % pool.length];
      mount(standbyElIdx(), next, true);
    };

    /** Crossfade to the standby element already mounted with the next clip. */
    const advance = () => {
      const pool = workingClips();
      if (pool.length === 0) {
        setPlaying(false);
        return;
      }
      if (pool.length === 1) {
        // Single survivor: loop it in place, no crossfade machinery.
        const v = activeEl();
        v.loop = true;
        v.currentTime = 0;
        start();
        return;
      }
      const cur = clips[activeIdx];
      const curPos = pool.findIndex((c) => c.src === cur.src);
      const next = pool[(curPos + 1) % pool.length];
      activeIdx = clips.findIndex((c) => c.src === next.src);
      const from = activeElIdx;
      const to = standbyElIdx();
      switching = true;
      mount(to, next, true);
      const standby = el(to);

      const onStandbyPlaying = () => {
        standby.removeEventListener('playing', onStandbyPlaying);
        activeElIdx = to;
        switching = false;
        setPlaying(true); // CSS crossfades; the old element pauses below
        const prev = el(from);
        prev.pause();
        try {
          prev.currentTime = 0;
        } catch {
          /* not seekable yet — harmless */
        }
        preloadNext();
      };
      standby.addEventListener('playing', onStandbyPlaying);
      // Failure path: if the standby never plays, stay on the frozen frame and
      // mark the clip broken so the next advance skips it.
      const onStandbyError = () => {
        standby.removeEventListener('error', onStandbyError);
        broken.add(next.src);
        switching = false;
        advance();
      };
      standby.addEventListener('error', onStandbyError);
      const p = standby.play();
      if (p)
        p.catch(() => {
          standby.removeEventListener('playing', onStandbyPlaying);
          standby.removeEventListener('error', onStandbyError);
          switching = false;
          setPlaying(false); // poster fades in; playback stalls honestly
        });
    };

    const applySource = () => {
      const nextKind = mobile.matches ? 'mobile' : 'desktop';
      if (nextKind === kind) return;
      kind = nextKind;
      clips = clipsFor(kind);
      activeIdx = 0;
      activeElIdx = 0;
      switching = false;
      setPlaying(false); // fade to poster; back in on the new source's `playing`
      els.forEach((v) => {
        v.removeAttribute('src');
        v.loop = false;
      });
      mount(0, clips[0], false);
      if (inView && !document.hidden) start();
    };

    // Per-element handlers: only the ACTIVE element drives playing/error/ended.
    // A standby error just marks its clip broken; advance() skips broken clips.
    const onPlaying = (elIdx: number) => () => {
      if (elIdx === activeElIdx) {
        setPlaying(true);
        // Scene 1 started: fetch scene 2 in the background so the first
        // crossfade never waits on the network.
        preloadNext();
      }
    };
    const onError = (elIdx: number) => () => {
      const v = el(elIdx);
      const src = v.getAttribute('src');
      if (elIdx !== activeElIdx) {
        if (src) broken.add(src); // standby failed to preload — advance() skips it
        return;
      }
      // Active scene failed before/at play: drop it and try the next.
      if (src) broken.add(src);
      if (workingClips().length === 0) {
        setPlaying(false);
        return;
      }
      advance();
    };
    const onEnded = (elIdx: number) => () => {
      if (elIdx === activeElIdx && !switching) advance();
    };

    els.forEach((v, i) => {
      v.addEventListener('playing', onPlaying(i));
      v.addEventListener('error', onError(i));
      v.addEventListener('ended', onEnded(i));
    });

    // Pause off-screen (battery + data). Observed BEFORE the first source is
    // attached so a hydration-scroll-past-the-hero never fetches video bytes.
    const io = new IntersectionObserver(
      ([entry]) => {
        const was = inView;
        inView = entry.isIntersecting;
        if (inView && !was && kind && !document.hidden) {
          start();
        } else if (inView && !kind) {
          applySource(); // first intersection drives the initial attach+play
        } else if (!inView) {
          els.forEach((v) => v.pause());
        }
      },
      { threshold: 0.15 }
    );
    io.observe(els[0]);

    applySource(); // attach the right source now; IO starts playback when in view

    // Tab backgrounded/foregrounded.
    const onVisibility = () => {
      if (document.hidden) {
        els.forEach((v) => v.pause());
      } else if (inView && activeEl().paused && kind) {
        start();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onMobileChange = () => applySource();
    mobile.addEventListener('change', onMobileChange);

    // Honour a mid-session reduced-motion switch.
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        els.forEach((v) => v.pause());
        setPlaying(false);
      }
    };
    reducedMotion.addEventListener('change', onMotionChange);

    return () => {
      mobile.removeEventListener('change', onMobileChange);
      reducedMotion.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibility);
      els.forEach((v, i) => {
        v.removeEventListener('playing', onPlaying(i));
        v.removeEventListener('error', onError(i));
        v.removeEventListener('ended', onEnded(i));
      });
      io.disconnect();
      els.forEach((v) => v.pause());
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
        ref={videoARef}
        className="wp-hero-video"
        style={{ opacity: playing ? 1 : 0, transition: 'opacity 0.6s ease' }}
        autoPlay
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        tabIndex={-1}
        aria-hidden="true"
      />
      <video
        ref={videoBRef}
        className="wp-hero-video"
        style={{ opacity: 0 }}
        muted
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
