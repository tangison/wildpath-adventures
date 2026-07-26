'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, MapPin, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import {
  SITE,
  SITE_EMAIL,
  WHATSAPP_URL,
  TEL_URL,
  configuredSocialLinks,
} from '@/lib/site';
import type { RouteStop } from '@/lib/journeys';

// ═══════════════════════════════════════════════════════════
// MOTION TOKENS — Premium archetype per motion-design skill
// Easing: cubic-bezier(0.4, 0, 0.2, 1) · Durations: 350-600ms
// ═══════════════════════════════════════════════════════════
const EASE_PREMIUM = [0.4, 0, 0.2, 1] as const;
const EASE_DECELERATE = [0.05, 0.7, 0.1, 1] as const;

// ═══════════════════════════════════════════════════════════
// WORDMARK — TEXT ONLY is the primary logo.
// WILDPATH: Anton, dominant, uppercase
// ADVENTURES: Oswald Bold, smaller, vertically centred on midline
//
// The Wildpath logo is not an icon, badge, shield, or emblem.
// It is a typographic wordmark — two words, one line.
// The circular mark (used in footer and as favicon) is a companion,
// never a replacement. The wordmark text remains primary and readable.
//
// Mark as favicon/browser icon: handled by src/app/icon.png
// (Next.js App Router convention, auto-served at /icon).
// The master 512x512 mark is at /favicon.png.
//
// REDUCED MOTION: When the user prefers reduced motion, the entrance
// animation is skipped — the wordmark renders at final state immediately.
// ═══════════════════════════════════════════════════════════

export function Wordmark({
  className = '',
  size = 'md',
  inverted = false,
  animate = false,
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
  animate?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const color = inverted ? 'text-[#F2EDE3]' : 'text-[#1A1A1A]';

  const sizes = {
    sm: { wildpath: 'text-xl', adventures: 'text-[0.5rem]', gap: 'gap-1.5', tracking: 'tracking-[0.1em]' },
    md: { wildpath: 'text-3xl', adventures: 'text-[0.7rem]', gap: 'gap-2.5', tracking: 'tracking-[0.15em]' },
    lg: { wildpath: 'text-5xl md:text-6xl', adventures: 'text-[0.85rem] md:text-sm', gap: 'gap-3 md:gap-4', tracking: 'tracking-[0.15em]' },
    xl: { wildpath: 'text-6xl md:text-8xl lg:text-9xl', adventures: 'text-sm md:text-lg', gap: 'gap-3 md:gap-6', tracking: 'tracking-[0.15em]' },
  };

  const s = sizes[size];

  const wordmarkText = (
    <span className={`inline-flex items-center ${s.gap} ${color}`}>
      <span
        className={`wp-display leading-none ${s.wildpath}`}
        style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-anton), sans-serif' }}
      >
        WILDPATH
      </span>
      <span
        className={`leading-none self-center ${s.adventures} ${s.tracking}`}
        style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 700 }}
      >
        ADVENTURES
      </span>
    </span>
  );

  const content = <span className={className}>{wordmarkText}</span>;

  if (!animate || prefersReducedMotion) return content;

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.1 }}
      className="inline-block"
    >
      {content}
    </motion.span>
  );
}

// ═══════════════════════════════════════════════════════════
// ILLUSTRATION DIVIDERS — hand-drawn motifs (one artistic universe)
// ═══════════════════════════════════════════════════════════

export function AcaciaMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="60" cy="28" rx="45" ry="6" />
      <ellipse cx="60" cy="24" rx="38" ry="5" />
      <ellipse cx="60" cy="20" rx="30" ry="4" />
      <path d="M 58 34 Q 57 50 56 64 L 60 64 Q 61 50 62 34 Z" />
      <path d="M 58 40 Q 40 36 25 30 L 26 33 Q 40 38 58 42 Z" />
      <path d="M 62 40 Q 80 36 95 30 L 94 33 Q 80 38 62 42 Z" />
      <line x1="0" y1="66" x2="120" y2="66" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

export function BirdFlock({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M 10 30 Q 15 25 20 30 Q 25 25 30 30" />
      <path d="M 45 20 Q 50 16 55 20 Q 60 16 65 20" />
      <path d="M 80 35 Q 84 31 88 35 Q 92 31 96 35" />
      <path d="M 115 15 Q 120 11 125 15 Q 130 11 135 15" />
      <path d="M 150 28 Q 154 24 158 28 Q 162 24 166 28" />
      <path d="M 180 38 Q 183 35 186 38 Q 189 35 192 38" />
    </svg>
  );
}

export function CompassMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="30" cy="30" r="28" />
      <circle cx="30" cy="30" r="20" opacity="0.4" />
      <path d="M 30 6 L 33 30 L 30 54 L 27 30 Z" fill="currentColor" />
      <text x="30" y="4" textAnchor="middle" fontSize="5" fill="currentColor" stroke="none" fontFamily="serif">N</text>
    </svg>
  );
}

export function ContourLines({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M 0 50 Q 50 40 100 50 Q 150 60 200 50" />
      <path d="M 0 45 Q 50 35 100 45 Q 150 55 200 45" opacity="0.6" />
      <path d="M 0 55 Q 50 45 100 55 Q 150 65 200 55" opacity="0.6" />
      <path d="M 0 40 Q 50 30 100 40 Q 150 50 200 40" opacity="0.3" />
      <path d="M 0 60 Q 50 50 100 60 Q 150 70 200 60" opacity="0.3" />
    </svg>
  );
}

export function FootprintsMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="22" cy="20" rx="6" ry="9" />
      <circle cx="14" cy="10" r="2.5" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="24" cy="5" r="2" />
      <circle cx="30" cy="9" r="2.5" />
      <ellipse cx="38" cy="55" rx="6" ry="9" />
      <circle cx="46" cy="45" r="2.5" />
      <circle cx="50" cy="41" r="2" />
      <circle cx="44" cy="40" r="2" />
      <circle cx="38" cy="44" r="2.5" />
      <ellipse cx="22" cy="90" rx="6" ry="9" />
      <circle cx="14" cy="80" r="2.5" />
      <circle cx="18" cy="76" r="2" />
      <circle cx="24" cy="75" r="2" />
      <circle cx="30" cy="79" r="2.5" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
// SCROLL REVEAL — premium entrance for sections
//
// ⚠️ HALLMARK AUDIT NOTE:
// Only use for hero wordmark entrance and the first section heading
// per page. Not for every element. Overuse (47+ instances across
// pages) is the #1 "AI scroll-reveal" fingerprint. See HALLMARK_AUDIT.md.
//
// REDUCED MOTION: When the user prefers reduced motion, children
// are rendered directly without the motion.div animation wrapper.
// ═══════════════════════════════════════════════════════════
export function ScrollReveal({
  children,
  delay = 0,
  y = 30,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: EASE_DECELERATE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION — N9 Edge-aligned minimal pattern
// Desktop: wordmark left, "Plan Your Journey" CTA right,
// nav links accessed via a "Menu" affordance → slide-down sheet.
// Mobile: hamburger icon → full-screen overlay.
// No inline nav links visible on desktop at rest.
// REDUCED MOTION: Nav entrance animation skipped when preferred.
// ═══════════════════════════════════════════════════════════

const NAV_LINKS = [
  { name: 'Journeys', href: '/journeys' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About', href: '/about' },
  { name: 'Field Notes', href: '/field-notes' },
  { name: 'Brand', href: '/brand' },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopSheetOpen, setDesktopSheetOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop sheet on outside click
  useEffect(() => {
    if (!desktopSheetOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        setDesktopSheetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [desktopSheetOpen]);

  // Close desktop sheet on Escape
  useEffect(() => {
    if (!desktopSheetOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopSheetOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [desktopSheetOpen]);

  const navContent = (
    <nav
      className={`fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled
          ? 'bg-[#F2EDE3] py-3 shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
          : 'bg-transparent py-5 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left — wordmark */}
        <Link href="/" className="group" aria-label="Wildpath Adventures — home">
          <Wordmark size="sm" />
        </Link>

        {/* Right — CTA + Menu affordance (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#1A1A1A] text-[#F2EDE3] px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-2"
          >
            Plan Your Journey
          </Link>
          <button
            onClick={() => setDesktopSheetOpen(!desktopSheetOpen)}
            className="text-sm tracking-wide font-medium text-[#1A1A1A]/80 hover:text-[#9E4214] transition-colors duration-200 inline-flex items-center gap-1.5"
            aria-label="Toggle navigation menu"
            aria-expanded={desktopSheetOpen}
          >
            Menu
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${desktopSheetOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Mobile — hamburger */}
        <button
          className="md:hidden text-[#1A1A1A]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop slide-down sheet */}
      <AnimatePresence>
        {desktopSheetOpen && (
          <motion.div
            ref={sheetRef}
            initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="hidden md:block overflow-hidden bg-[#F2EDE3] border-b border-[#1A1A1A]/8"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setDesktopSheetOpen(false)}
                  className="text-sm tracking-wide font-medium text-[#1A1A1A]/80 hover:text-[#9E4214] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide font-medium text-[#1A1A1A]/60 hover:text-[#9E4214] transition-colors duration-200 inline-flex items-center gap-1.5"
                onClick={() => setDesktopSheetOpen(false)}
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  if (prefersReducedMotion) {
    return (
      <>
        {navContent}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-[#F2EDE3] pt-24 px-6 flex flex-col space-y-4 overflow-y-auto"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-6">
                <Wordmark size="md" />
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl wp-display text-[#1A1A1A] hover:text-[#9E4214] transition-colors block"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-[#1A1A1A]/15">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#1A1A1A] text-[#F2EDE3] px-6 py-4 text-sm font-bold tracking-[0.15em] uppercase w-fit inline-block"
                >
                  Plan Your Journey
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 text-lg text-[#1A1A1A]/80">
                  <MessageCircle size={16} /> WhatsApp · {SITE.phone}
                </a>
                <a href={`mailto:${SITE_EMAIL}`} className="block mt-1 text-lg text-[#1A1A1A]/80 break-all">
                  {SITE_EMAIL}
                </a>
              </div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        className={`fixed w-full z-50 transition-shadow duration-300 ${
          isScrolled
            ? 'bg-[#F2EDE3] py-3 shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
            : 'bg-transparent py-5 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Left — wordmark */}
          <Link href="/" className="group" aria-label="Wildpath Adventures — home">
            <Wordmark size="sm" />
          </Link>

          {/* Right — CTA + Menu affordance (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#1A1A1A] text-[#F2EDE3] px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-2"
            >
              Plan Your Journey
            </Link>
            <button
              onClick={() => setDesktopSheetOpen(!desktopSheetOpen)}
              className="text-sm tracking-wide font-medium text-[#1A1A1A]/80 hover:text-[#9E4214] transition-colors duration-200 inline-flex items-center gap-1.5"
              aria-label="Toggle navigation menu"
              aria-expanded={desktopSheetOpen}
            >
              Menu
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${desktopSheetOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Mobile — hamburger */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop slide-down sheet */}
        <AnimatePresence>
          {desktopSheetOpen && (
            <motion.div
              ref={sheetRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              className="hidden md:block overflow-hidden bg-[#F2EDE3] border-b border-[#1A1A1A]/8"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setDesktopSheetOpen(false)}
                    className="text-sm tracking-wide font-medium text-[#1A1A1A]/80 hover:text-[#9E4214] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide font-medium text-[#1A1A1A]/60 hover:text-[#9E4214] transition-colors duration-200 inline-flex items-center gap-1.5"
                  onClick={() => setDesktopSheetOpen(false)}
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="fixed inset-0 z-40 bg-[#F2EDE3] pt-24 px-6 flex flex-col space-y-4 overflow-y-auto"
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mb-6">
              <Wordmark size="md" />
            </Link>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE_DECELERATE, delay: 0.05 * i }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl wp-display text-[#1A1A1A] hover:text-[#9E4214] transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: EASE_DECELERATE, delay: 0.3 }}
              className="pt-6 border-t border-[#1A1A1A]/15"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#1A1A1A] text-[#F2EDE3] px-6 py-4 text-sm font-bold tracking-[0.15em] uppercase w-fit inline-block"
              >
                Plan Your Journey
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 text-lg text-[#1A1A1A]/80">
                <MessageCircle size={16} /> WhatsApp · {SITE.phone}
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="block mt-1 text-lg text-[#1A1A1A]/80 break-all">
                {SITE_EMAIL}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// FOOTER — Ft5 Statement pattern
// A single typographic closing statement that reads like a
// travel publication's colophon — not a SaaS footer.
// Contact details are embedded in the statement itself.
// Social icons render ONLY if official accounts are configured in .env.
// ═══════════════════════════════════════════════════════════

export function Footer() {
  const socials = configuredSocialLinks();

  return (
    <footer className="bg-[#1A1A1A] text-[#F2EDE3] mt-auto">
      {/* Illustration strip — footer landscape accent */}
      <div className="relative w-full h-24 md:h-32 overflow-hidden border-b border-[#F2EDE3]/10">
        <Image
          src="/images/illustrations/v2/02-banner-namibia.webp"
          alt="Namibian savannah horizon illustration"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
      </div>

      {/* Statement — single typographic closing */}
      <div className="pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Wildpath circular logo mark — footer variant */}
          <div className="flex justify-center mb-8">
            <svg viewBox="0 0 100 100" className="w-16 h-16" aria-hidden="true" fill="none">
              <circle cx="50" cy="50" r="46" stroke="#F2EDE3" strokeWidth="2" />
              <circle cx="50" cy="50" r="38" stroke="#F2EDE3" strokeWidth="0.5" opacity="0.4" />
              <text x="50" y="55" textAnchor="middle" fontSize="28" fill="#F2EDE3" fontFamily="serif" fontWeight="bold" stroke="none">W</text>
            </svg>
          </div>

          {/* Tagline — the publication's colophon line */}
          <p className="wp-script text-3xl md:text-4xl text-[#E8854A] mb-10" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
            Travel the untamed beauty.
          </p>

          {/* Contact details — embedded in the statement */}
          <p className="text-base md:text-lg text-[#F2EDE3]/80 leading-relaxed mb-6">
            <span className="text-[#F2EDE3]">{SITE.location.city}, {SITE.location.country}</span>
            <span className="text-[#F2EDE3]/40 mx-3">·</span>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-[#F2EDE3]/80 hover:text-[#E8854A] transition-colors break-all"
            >
              {SITE_EMAIL}
            </a>
            <span className="text-[#F2EDE3]/40 mx-3">·</span>
            <a
              href={TEL_URL}
              className="text-[#F2EDE3]/80 hover:text-[#E8854A] transition-colors"
            >
              {SITE.phone}
            </a>
            <span className="text-[#F2EDE3]/40 mx-3">·</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EDE3]/80 hover:text-[#E8854A] transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </p>

          {/* Social links — only rendered if officially configured */}
          {socials.length > 0 && (
            <div className="flex gap-3 justify-center mb-8">
              {socials.map((s) => (
                <a
                  key={s.short}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#F2EDE3]/25 flex items-center justify-center hover:bg-[#C5511A] hover:border-[#C5511A] transition-colors text-[0.6rem] font-bold tracking-wider"
                >
                  {s.short}
                </a>
              ))}
            </div>
          )}

          {/* Legal links — single subtle row */}
          <div className="flex gap-6 justify-center flex-wrap text-[0.65rem] tracking-[0.18em] uppercase text-[#F2EDE3]/50 mb-8">
            <Link href="/terms" className="hover:text-[#F2EDE3] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#F2EDE3] transition-colors">Privacy</Link>
            <Link href="/cancellation" className="hover:text-[#F2EDE3] transition-colors">Cancellation</Link>
            <Link href="/faq" className="hover:text-[#F2EDE3] transition-colors">FAQ</Link>
          </div>

          {/* Copyright */}
          <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#F2EDE3]/35 mb-6">
            &copy; {new Date().getFullYear()} {SITE.name} · All routes reserved
          </p>

          {/* Tangison Studio credit — colophon */}
          <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#F2EDE3]/30">
            Designed &amp; Built by{' '}
            <a
              href={SITE.studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2EDE3]/50 hover:text-[#E8854A] transition-colors"
            >
              {SITE.studio.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
// JOURNEY SNAPSHOT — 20-second overview at the top of every journey.
// Shows: duration, travel style, start/end, best for, availability, highlights.
// No accommodation column. No price cards. Dual CTA.
// ═══════════════════════════════════════════════════════════

type SnapshotField = { label: string; value: string };

export function JourneySnapshot({
  name,
  tagline,
  duration,
  bestFor,
  highlights,
  travelStyle,
  availability,
  mealsNote,
  startPoint,
  endPoint,
}: {
  name: string;
  tagline: string;
  duration: string;
  bestFor: string;
  highlights: string[];
  travelStyle: string;
  availability: string;
  mealsNote: string;
  startPoint: string;
  endPoint: string;
}) {
  const fields: SnapshotField[] = [
    { label: 'Duration', value: duration },
    { label: 'Travel Style', value: travelStyle },
    { label: 'Best For', value: bestFor },
    { label: 'Availability', value: availability },
    { label: 'Starting Point', value: startPoint },
    { label: 'Ending Point', value: endPoint },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-[#E8E3D5]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="wp-script text-2xl text-[#9E4214] mb-4">Journey Snapshot</p>
          <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[0.9] mb-4">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl leading-relaxed mb-10">
            {tagline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A]/12 mb-10">
            {fields.map((f) => (
              <div key={f.label} className="bg-[#F2EDE3] p-6 md:p-7">
                <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-2">
                  {f.label}
                </p>
                <p className="text-sm text-[#1A1A1A] leading-snug">{f.value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-[#F2EDE3] p-6 md:p-8 border-l-2 border-[#C5511A]">
            <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-4">Highlights</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {highlights.map((h) => (
                <span key={h} className="wp-display text-base md:text-lg text-[#1A1A1A] leading-tight">
                  {h}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-[#1A1A1A]/60 leading-relaxed max-w-2xl">
              {mealsNote}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
          >
            Request This Journey
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// JOURNEY ROUTE TIMELINE — visual route sequence (Cluster-Leaf inspired).
// Each stop is a story: name, short editorial description, arrow onward.
// NO day-by-day numbering (avoids exposing source inconsistencies).
// NO accommodation column. NO operational detail.
// Full itinerary is "available on request".
// ═══════════════════════════════════════════════════════════

export function JourneyRouteTimeline({ route }: { route: RouteStop[] }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="mb-16">
          <p className="wp-script text-2xl text-[#9E4214] mb-3">The route</p>
          <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9]">
            A story, not
            <br />
            <span className="text-[#9E4214]">a spreadsheet.</span>
          </h2>
          <p className="mt-6 text-base text-[#1A1A1A]/70 max-w-xl leading-relaxed">
            Below is the public arc of the journey — the destinations in sequence.
            The full day-by-day itinerary, with selected accommodation, meal plans,
            and logistics, is available on request.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line — the path */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]/15 md:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-8 md:space-y-12">
            {route.map((stop, i) => (
              <ScrollReveal key={`${stop.name}-${i}`} delay={i * 0.04}>
                <div
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                    i % 2 === 1 ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  {/* Stop marker — the footprint on the path */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F2EDE3] border-2 border-[#C5511A] flex items-center justify-center shadow-[0_0_0_6px_#F2EDE3]">
                      <span className="wp-display text-base md:text-lg text-[#9E4214]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Stop content — single column, alternating sides on desktop */}
                  <div className={`pl-20 md:pl-0 [direction:ltr] ${i % 2 === 1 ? 'md:order-2' : 'md:order-1'} ${i % 2 === 1 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <p className="wp-subhead text-[0.6rem] tracking-[0.25em] text-[#9E4214] mb-2">
                      Stop {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="wp-display text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight">
                      {stop.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed max-w-md md:inline-block">
                      {stop.description}
                    </p>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block [direction:ltr]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Continue journey — final marker */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <FootprintsMark className="w-6 h-12 text-[#9E4214]/40" />
          <p className="wp-script text-xl text-[#9E4214]">Continue the journey</p>
          <p className="text-sm text-[#1A1A1A]/60 max-w-md text-center leading-relaxed">
            The full day-by-day itinerary — with selected accommodation, logistics,
            and inclusions — is available on request.
          </p>
          <Link
            href="/contact"
            className="mt-4 group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3"
          >
            Request the Full Itinerary
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// COMING SOON — editorial locked screen (preserved for future use)
// REDUCED MOTION: Entrance animations skipped when preferred.
// ═══════════════════════════════════════════════════════════

export function ComingSoon({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/illustrations/v2/09-coming-soon.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2EDE3]/60 via-[#F2EDE3]/80 to-[#F2EDE3]" />
      </div>

      <div className="relative z-10 pt-10 px-6 md:px-12 border-b border-[#1A1A1A]/15">
        <div className="max-w-7xl mx-auto flex justify-between items-center pb-6">
          <Link href="/" aria-label="Home">
            <Wordmark size="sm" />
          </Link>
          <Link
            href="/"
            className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]/70 hover:text-[#9E4214] transition-colors flex items-center gap-2"
          >
            Back to Home <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <main className="relative z-10 flex-1 flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
          {prefersReducedMotion ? (
            <>
              <div className="md:col-span-4">
                <p className="wp-script text-2xl text-[#9E4214] mb-2">Coming soon</p>
                <AcaciaMark className="w-24 h-16 text-[#1A1A1A]/40" />
              </div>
              <div className="md:col-span-8 md:pl-8 md:border-l md:border-[#1A1A1A]/20">
                <p className="wp-subhead text-[0.65rem] tracking-[0.35em] text-[#9E4214] mb-4">
                  The route is being charted
                </p>
                <h1 className="wp-display text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-[0.9] mb-6">
                  {title}
                </h1>
                <p className="text-lg text-[#1A1A1A]/70 max-w-lg leading-relaxed mb-8">
                  {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors inline-flex items-center gap-3 justify-center"
                  >
                    Plan Your Journey
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors inline-flex items-center gap-3 justify-center"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE_DECELERATE, delay: 0.2 }}
                className="md:col-span-4"
              >
                <p className="wp-script text-2xl text-[#9E4214] mb-2">Coming soon</p>
                <AcaciaMark className="w-24 h-16 text-[#1A1A1A]/40" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE_DECELERATE, delay: 0.35 }}
                className="md:col-span-8 md:pl-8 md:border-l md:border-[#1A1A1A]/20"
              >
                <p className="wp-subhead text-[0.65rem] tracking-[0.35em] text-[#9E4214] mb-4">
                  The route is being charted
                </p>
                <h1 className="wp-display text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-[0.9] mb-6">
                  {title}
                </h1>
                <p className="text-lg text-[#1A1A1A]/70 max-w-lg leading-relaxed mb-8">
                  {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors inline-flex items-center gap-3 justify-center"
                  >
                    Plan Your Journey
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors inline-flex items-center gap-3 justify-center"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </main>

      <div className="relative z-10 py-6 px-6 text-center text-[0.6rem] tracking-[0.2em] uppercase text-[#1A1A1A]/45 border-t border-[#1A1A1A]/10">
        &copy; {new Date().getFullYear()} {SITE.name} · {SITE.location.city}, {SITE.location.country}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WATERMARK — Decorative circular logo mark, very low opacity
// Placeholder inline SVG — will be replaced with the actual
// wildpath-circle-dark.svg when the asset kit arrives.
// ═══════════════════════════════════════════════════════════

export function WildpathWatermark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`opacity-[0.06] ${className}`} aria-hidden="true" fill="none">
      <circle cx="50" cy="50" r="46" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="50" cy="50" r="38" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.4" />
      <text x="50" y="55" textAnchor="middle" fontSize="28" fill="#1A1A1A" fontFamily="serif" fontWeight="bold" stroke="none">W</text>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION HEADING — consistent editorial heading pattern
//
// ⚠️ HALLMARK AUDIT NOTE:
// Eyebrow should be used at most 1-2 times per page. Most sections
// should let headings stand alone without an eyebrow. Overuse (30+
// instances) is the #2 "AI eyebrow" fingerprint.
// ═══════════════════════════════════════════════════════════

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  intro?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  const accent = dark ? '#E8854A' : '#9E4214';
  const textColor = dark ? '#F2EDE3' : '#1A1A1A';
  const introColor = dark ? 'text-[#F2EDE3]/70' : 'text-[#1A1A1A]/70';

  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="wp-script text-2xl mb-3" style={{ color: accent }}>
          {eyebrow}
        </p>
      )}
      <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9]" style={{ color: textColor }}>
        {title}
        {highlight && (
          <>
            <br />
            <span style={{ color: accent }}>{highlight}</span>
          </>
        )}
      </h2>
      {intro && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-xl ${introColor} ${align === 'center' ? 'mx-auto' : ''}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
