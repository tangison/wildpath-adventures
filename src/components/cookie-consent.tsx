'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * CookieConsent — lightweight cookie consent banner for POPIA/GDPR compliance.
 *
 * Shows a minimal banner at the bottom of the viewport until the user accepts.
 * Stores consent status in localStorage (no cookies used for tracking).
 * This site uses only essential functionality — no third-party tracking cookies.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('wildpath-cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('wildpath-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('wildpath-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] text-[#F2EDE3] border-t border-[#F2EDE3]/10 shadow-[0_-8px_32px_rgba(0,0,0,0.35)]"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="true"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-[#F2EDE3]/80 leading-snug sm:leading-relaxed flex-1">
          This website uses only essential functionality and does not set tracking cookies.
          By continuing to use this site, you agree to our{' '}
          <Link
            href="/cookies"
            className="text-[#E8854A] hover:text-[#F2EDE3] underline underline-offset-2 transition-colors"
          >
            cookie policy
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy-policy"
            className="text-[#E8854A] hover:text-[#F2EDE3] underline underline-offset-2 transition-colors"
          >
            privacy policy
          </Link>.
        </p>
        <div className="flex gap-2 sm:gap-3 shrink-0 self-end sm:self-auto">
          <button
            onClick={decline}
            className="text-xs tracking-[0.03em] text-[#F2EDE3]/70 hover:text-[#F2EDE3] transition-colors px-3 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-[0.03em] bg-[#C5511A] text-[#F2EDE3] px-4 sm:px-5 py-2 hover:bg-[#E8854A] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
