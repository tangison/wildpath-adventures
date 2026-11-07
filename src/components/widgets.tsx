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
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-50 w-11 h-11 hidden md:flex items-center justify-center bg-[#1A1A1A] text-[#F2EDE3] border border-[#F2EDE3]/20 hover:bg-[#C5511A] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

/**
 * WhatsAppFab — floating WhatsApp widget, Nov 2026 client review.
 * Desktop+tablet only (mobile has the sticky enquiry bar). Sits bottom-left
 * so it never collides with the scroll-to-top button (bottom-right) or the
 * cookie banner (full width, higher z-index, disappears after a choice).
 * The brand-green disc is the one recognised pattern; keep it small, quiet
 * and always reachable.
 */
export function WhatsAppFab({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Wildpath Adventures on WhatsApp"
      className="hidden md:flex fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full items-center justify-center bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-[#1DA851] hover:scale-105 transition-all duration-300"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    </a>
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
        className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#F2EDE3] px-6 py-4 text-xs font-bold tracking-[0.04em] shadow-lg"
        tabIndex={visible ? 0 : -1}
      >
        <MessageCircle size={16} />
        Plan your journey on WhatsApp
      </a>
    </div>
  );
}
