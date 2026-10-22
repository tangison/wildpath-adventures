'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Scroll-to-top widget — appears after the first viewport, honours
 * prefers-reduced-motion (jumps instead of smooth-scrolls), and is
 * keyboard accessible.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      }}
      className="fixed bottom-5 right-5 z-40 w-11 h-11 bg-[#1A1A1A] text-[#F2EDE3] hover:bg-[#C5511A] transition-colors duration-300 flex items-center justify-center shadow-lg"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
