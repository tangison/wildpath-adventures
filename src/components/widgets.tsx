'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp, MessageCircle } from 'lucide-react';

/**
 * RevealScript — drives .wp-reveal / .wp-img-reveal entrances site-wide.
 * One IntersectionObserver, re-armed on route change. Server pages stay
 * server components; this client shim only toggles classes.
 */
export function RevealScript() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.wp-reveal, .wp-img-reveal')) as HTMLElement[];
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    els.forEach((el) => {
      if (!el.classList.contains('is-visible')) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

/**
 * ParallaxScript — gentle drift for .wp-parallax elements.
 * Sets --wp-parallax-y from element position (0.08 factor). Disabled under
 * prefers-reduced-motion and on touch-only devices (no hover => no parallax).
 */
export function ParallaxScript() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (reduce.matches || !finePointer.matches) return;

    const els = Array.from(document.querySelectorAll('.wp-parallax')) as HTMLElement[];
    if (els.length === 0) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const progress = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5-ish
        el.style.setProperty('--wp-parallax-y', `${(progress * -6).toFixed(2)}%`);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}

/**
 * ScrollTop — appears after 600px, scrolls back smoothly.
 * Minimal: one button, one aria-label, hidden under reduced motion? No —
 * scrolling to top is navigation, not decoration; it stays functional but
 * jumps instantly under reduced motion.
 */
export function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      }}
      aria-label="Scroll back to top"
      className={`fixed bottom-5 right-5 z-50 w-11 h-11 hidden md:flex items-center justify-center bg-[#1A1A1A] text-[#F2EDE3] border border-[#F2EDE3]/20 hover:bg-[#C5511A] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

/**
 * StickyCta — mobile-only sticky enquiry bar. Appears after the hero
 * (600px) so it never covers the first screen. Links to WhatsApp, the
 * channel the client actually answers.
 */
export function StickyCta({ whatsappUrl }: { whatsappUrl: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`wp-sticky-cta md:hidden ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#F2EDE3] px-6 py-4 text-xs font-bold tracking-[0.18em] uppercase shadow-lg"
        tabIndex={visible ? 0 : -1}
      >
        <MessageCircle size={16} />
        Plan your journey on WhatsApp
      </a>
    </div>
  );
}
