'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import {
  SITE,
  SITE_EMAIL,
  WHATSAPP_URL,
  TEL_URL,
  configuredSocialLinks,
} from '@/lib/site';
import type { RouteStop } from '@/lib/journeys';

// ═══════════════════════════════════════════════════════════
// WILDPATH SHARED COMPONENTS — rewritten as a static, CSS-first layer.
// No framer-motion: entrances use CSS transitions driven by the
// site-wide RevealScript (IntersectionObserver), which honours
// prefers-reduced-motion via the globals.css media query.
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// WORDMARK — TEXT ONLY is the primary logo.
// WILDPATH: Fraunces display, dominant. ADVENTURES: Geist, tracked,
// vertically centred. Two families, one line.
// ═══════════════════════════════════════════════════════════

export function Wordmark({
  className = '',
  size = 'md',
  inverted = false,
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}) {
  const color = inverted ? 'text-[#F2EDE3]' : 'text-[#1A1A1A]';

  const sizes = {
    sm: { wildpath: 'text-xl', adventures: 'text-[0.5rem]', gap: 'gap-1.5', tracking: 'tracking-[0.1em]' },
    md: { wildpath: 'text-3xl', adventures: 'text-[0.65rem]', gap: 'gap-2.5', tracking: 'tracking-[0.15em]' },
    lg: { wildpath: 'text-5xl md:text-6xl', adventures: 'text-[0.85rem] md:text-sm', gap: 'gap-3 md:gap-4', tracking: 'tracking-[0.15em]' },
    xl: { wildpath: 'text-6xl md:text-8xl lg:text-9xl', adventures: 'text-sm md:text-lg', gap: 'gap-3 md:gap-6', tracking: 'tracking-[0.15em]' },
  };

  const s = sizes[size];

  return (
    <span className={`inline-block ${className}`}>
      <span className={`inline-flex items-center ${s.gap} ${color}`}>
        <span className={`wp-display leading-none ${s.wildpath}`}>WILDPATH</span>
        <span className={`leading-none self-center wp-subhead ${s.adventures} ${s.tracking}`}>
          ADVENTURES
        </span>
      </span>
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// LINE-ART MOTIFS — hand-drawn SVG marks (one artistic universe)
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
// NAVIGATION — Floating, 2-line editorial pattern.
// Line 1: Wordmark left, WhatsApp + CTA right
// Line 2: Primary links with two dropdowns (Journeys, Destinations)
//         — every menu item is a REAL link to a real page.
// Mobile: full-screen overlay. Search: client-side index, Esc closes.
// ═══════════════════════════════════════════════════════════

const JOURNEY_LINKS = [
  { name: 'Classic Namibia Route', href: '/journeys/classic-namibia', desc: 'The full loop — canyon, coast, dunes, pan' },
  { name: 'Northern Caprivi Route', href: '/journeys/untamed-northern-caprivi', desc: 'North into the rivers — Kwando, Chobe, Zambezi' },
  { name: 'Central Namibia Route', href: '/journeys/untamed-central', desc: 'Etosha, Damaraland and the cold Atlantic' },
  { name: 'Desert & Coast Route', href: '/journeys/untamed-desert', desc: 'Red sand, the Skeleton Coast, the great pan' },
];

const DESTINATION_LINKS = [
  { name: 'Sossusvlei', href: '/destinations/sossusvlei', desc: 'Red dunes rising from a white clay pan' },
  { name: 'Etosha', href: '/destinations/etosha', desc: 'A salt flat the size of a small country' },
  { name: 'Damaraland', href: '/destinations/damaraland', desc: 'Granite inselbergs and ancient rock art' },
  { name: 'Skeleton Coast', href: '/destinations/skeleton-coast', desc: 'Fog, shipwrecks and the cold Atlantic' },
  { name: 'Kalahari', href: '/destinations/kalahari', desc: 'Red sand, camelthorn and big quiet skies' },
  { name: 'Caprivi & Zambezi', href: '/destinations/caprivi', desc: 'Rivers, floodplains and water country' },
  { name: 'Chobe', href: '/destinations/chobe', desc: 'Elephant country on the Chobe River' },
  { name: 'Victoria Falls', href: '/destinations/victoria-falls', desc: 'The smoke that thunders' },
  { name: 'Namibia', href: '/destinations/namibia', desc: 'The country as a whole — start here' },
];

const NAV_LINKS_PRIMARY = [
  { name: 'Journeys', href: '/journeys', dropdown: JOURNEY_LINKS },
  { name: 'Destinations', href: '/destinations', dropdown: DESTINATION_LINKS },
  { name: 'About', href: '/about' },
  { name: 'Field Notes', href: '/field-notes' },
  { name: 'FAQ', href: '/faq' },
] as const;

type NavItem = (typeof NAV_LINKS_PRIMARY)[number];

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const links = 'dropdown' in item ? item.dropdown : [];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (links.length === 0) {
    return (
      <Link
        href={item.href}
        className="text-[0.7rem] tracking-[0.14em] uppercase font-medium text-[#1A1A1A]/70 hover:text-[#9E4214] transition-colors duration-200 py-2"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="text-[0.7rem] tracking-[0.14em] uppercase font-medium text-[#1A1A1A]/70 hover:text-[#9E4214] transition-colors duration-200 py-2 inline-flex items-center gap-1"
      >
        {item.name}
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <div className="bg-[#F2EDE3] border border-[#1A1A1A]/15 shadow-[0_12px_40px_rgba(0,0,0,0.12)] min-w-[20rem]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex flex-col gap-0.5 px-5 py-3.5 border-b border-[#1A1A1A]/8 last:border-b-0 hover:bg-[#E8E3D5] transition-colors"
            >
              <span className="text-[0.8rem] font-semibold text-[#1A1A1A] group-hover:text-[#9E4214] transition-colors inline-flex items-center gap-2">
                {l.name}
                <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
              </span>
              <span className="text-[0.7rem] text-[#1A1A1A]/55 leading-snug">{l.desc}</span>
            </Link>
          ))}
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className="block px-5 py-3 text-[0.62rem] tracking-[0.18em] uppercase font-bold text-[#9E4214] hover:bg-[#E8E3D5] transition-colors border-t border-[#1A1A1A]/10"
          >
            View all {item.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open + Esc closes.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Floating nav bar ── */}
      <div
        className={`fixed top-4 left-4 right-4 md:left-6 md:right-6 z-50 rounded-xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2EDE3]/92 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
            : 'bg-[#F2EDE3]/65 backdrop-blur-sm shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
        }`}
      >
        {/* Line 1: Wordmark + CTA */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-4 pb-2 flex justify-between items-center">
          <Link href="/" className="group shrink-0" aria-label="Wildpath Adventures — home">
            <Wordmark size="sm" />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1A1A1A]/15 text-[#1A1A1A] px-4 py-2 text-[0.65rem] font-bold tracking-[0.15em] uppercase hover:bg-[#1A1A1A]/5 transition-colors duration-300 inline-flex items-center gap-2 rounded-lg"
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-[#1A1A1A] text-[#F2EDE3] px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-2 rounded-lg"
            >
              Plan Your Journey
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              className="w-9 h-9 rounded-lg border border-[#1A1A1A]/15 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Line 2: primary links + dropdowns */}
        <div className="hidden md:block max-w-7xl mx-auto px-5 md:px-10 pb-3 border-t border-[#1A1A1A]/8">
          <nav className="flex items-center gap-7 pt-2" aria-label="Primary">
            {NAV_LINKS_PRIMARY.map((link) => (
              <Dropdown key={link.name} item={link} />
            ))}
          </nav>
        </div>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F2EDE3] pt-24 px-6 pb-10 flex flex-col overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS_PRIMARY.map((link) => (
              <div key={link.name} className="border-b border-[#1A1A1A]/10">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl wp-display text-[#1A1A1A] hover:text-[#9E4214] transition-colors block py-3"
                >
                  {link.name}
                </Link>
                {'dropdown' in link && link.dropdown && (
                  <div className="pb-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[0.72rem] tracking-[0.08em] uppercase text-[#1A1A1A]/55 hover:text-[#9E4214] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#1A1A1A]/15 mt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#1A1A1A] text-[#F2EDE3] px-6 py-4 text-sm font-bold tracking-[0.15em] uppercase w-fit inline-block rounded-lg"
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
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// FOOTER — Statement colophon.
// The only cartoon illustration on the site lives here (the approved
// footer landscape strip). Everything else on the site is photography.
// ═══════════════════════════════════════════════════════════

export function Footer() {
  const socials = configuredSocialLinks();

  return (
    <footer className="bg-[#1A1A1A] text-[#F2EDE3] mt-auto">
      {/* Illustration strip — the single approved cartoon accent */}
      <div className="relative w-full h-24 md:h-32 overflow-hidden border-b border-[#F2EDE3]/10">
        <Image
          src="/images/illustrations/approved/wildpath-hero-main.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 object-center"
        />
      </div>

      <div className="pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Closing statement */}
          <p className="wp-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.95] text-[#F2EDE3] mb-14">
            Slow down. Breathe.{' '}
            <em className="font-serif italic font-light text-[#E8854A]">Discover</em>{' '}
            Namibia<span className="text-[#C5511A]">.</span>
          </p>

          {/* Wildpath approved logo mark — footer (dark variant, ivory artwork) */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/brand/wildpath-logo-dark-theme.webp"
              alt="Wildpath Adventures"
              width={1255}
              height={1415}
              sizes="(min-width: 768px) 224px, 160px"
              className="w-40 h-[11.3rem] md:w-56 md:h-[15.8rem] object-contain"
            />
          </div>

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

          {/* Legal links */}
          <div className="flex gap-6 justify-center flex-wrap text-[0.65rem] tracking-[0.18em] uppercase text-[#F2EDE3]/50 mb-8">
            <Link href="/terms" className="hover:text-[#F2EDE3] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#F2EDE3] transition-colors">Privacy</Link>
            <Link href="/cancellation" className="hover:text-[#F2EDE3] transition-colors">Cancellation</Link>
            <Link href="/faq" className="hover:text-[#F2EDE3] transition-colors">FAQ</Link>
          </div>

          {/* Copyright — current year + entity */}
          <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#F2EDE3]/35 mb-6">
            &copy; {new Date().getFullYear()} {SITE.name} · {SITE.location.city}, {SITE.location.country} · All routes reserved
          </p>

          {/* Tangison Studio credit — colophon */}
          <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#F2EDE3]/30">
            Site by{' '}
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
// Duration, travel style, start/end, best for, availability, highlights.
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
        <div className="wp-reveal">
          <p className="wp-subhead text-[0.62rem] text-[#9E4214] mb-4">Journey Snapshot</p>
          <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[0.95] mb-4">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl leading-relaxed mb-10">
            {tagline}
          </p>
        </div>

        <div className="wp-reveal" data-reveal-delay="1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A]/12 mb-10">
            {fields.map((f) => (
              <div key={f.label} className="bg-[#F2EDE3] p-6 md:p-7">
                <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-2">
                  {f.label}
                </p>
                <p className="text-sm text-[#1A1A1A] leading-snug">{f.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wp-reveal" data-reveal-delay="2">
          <div className="bg-[#F2EDE3] p-6 md:p-8 border-l-2 border-[#C5511A]">
            <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-4">Highlights</p>
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
        </div>

        <div className="wp-reveal mt-10 flex flex-col sm:flex-row gap-3" data-reveal-delay="3">
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
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// JOURNEY ROUTE TIMELINE — image-led day-by-day story.
// Each stop carries its own photograph, the stop name and a short
// editorial description. Day-by-day stays "available on request"
// for operational detail (accommodation, meal plans).
// ═══════════════════════════════════════════════════════════

export type TimelinePhoto = {
  base: string;
  alt: string;
};

export function JourneyRouteTimeline({
  route,
  photos,
}: {
  route: RouteStop[];
  photos: Record<string, TimelinePhoto[]>;
}) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="wp-reveal mb-14 md:mb-20">
          <p className="wp-subhead text-[0.62rem] text-[#9E4214] mb-3">The route</p>
          <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.95]">
            A story, not
            <br />
            <span className="text-[#9E4214]">a spreadsheet.</span>
          </h2>
          <p className="mt-6 text-base text-[#1A1A1A]/70 max-w-xl leading-relaxed">
            The journey, stop by stop, in pictures. The full day-by-day itinerary,
            with selected accommodation, meal plans and logistics, is available
            on request.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {route.map((stop, i) => {
            const stopPhotos = photos[stop.name] ?? [];
            const first = stopPhotos[0];
            const rest = stopPhotos.slice(1, 3);
            return (
              <article key={`${stop.name}-${i}`} className="wp-reveal">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="wp-display text-3xl md:text-4xl text-[#C5511A]/60 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.95]">
                    {stop.name}
                  </h3>
                </div>

                {/* Lead photo — 16/9 full width of the column */}
                {first && (
                  <Link
                    href={`/destinations/${slugFor(stop.name)}`}
                    className="wp-photo wp-img-reveal block group"
                    style={{ aspectRatio: '16 / 9' }}
                    aria-label={`${stop.name} — open destination guide`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/places/${first.base}-1440.webp`}
                      alt={first.alt}
                      width={1440}
                      height={810}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="transition-transform duration-700 group-hover:scale-[1.015]"
                    />
                  </Link>
                )}

                {rest.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {rest.map((p) => (
                      <div key={p.base} className="wp-photo wp-img-reveal" style={{ aspectRatio: '4 / 3' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/places/${p.base}-960.webp`}
                          alt={p.alt}
                          width={960}
                          height={720}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-5 text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
                  {stop.description}
                </p>
                <div className="mt-4 h-px w-16 bg-[#C5511A]/50" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        {/* Continue journey */}
        <div className="mt-20 flex flex-col items-center gap-4 text-center wp-reveal">
          <FootprintsMark className="w-6 h-12 text-[#9E4214]/40" />
          <p className="text-sm text-[#1A1A1A]/60 max-w-md leading-relaxed">
            The full day-by-day itinerary — with selected accommodation, logistics
            and inclusions — is available on request.
          </p>
          <Link
            href="/contact"
            className="mt-2 group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3"
          >
            Request the Full Itinerary
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Map route-stop names to destination slugs for cross-linking.
const STOP_SLUGS: Record<string, string> = {
  'Windhoek': 'namibia',
  'Kalahari Desert': 'kalahari',
  'Fish River Canyon': 'namibia',
  'Aus & the Wild Horses': 'namibia',
  'Kolmanskop & Lüderitz': 'skeleton-coast',
  'NamibRand': 'namibia',
  'Sossusvlei & Deadvlei': 'sossusvlei',
  'Swakopmund': 'skeleton-coast',
  'Walvis Bay': 'skeleton-coast',
  'Damaraland': 'damaraland',
  'Etosha National Park': 'etosha',
  'Etosha': 'etosha',
  'Waterberg': 'namibia',
  'Okavango Panhandle': 'caprivi',
  'Kwando & Linyanti': 'caprivi',
  'Chobe River': 'chobe',
  'Victoria Falls': 'victoria-falls',
  'Zambezi Region': 'caprivi',
  'Skeleton Coast': 'skeleton-coast',
  'Twyfelfontein': 'damaraland',
  'Spitzkoppe': 'damaraland',
  'Caprivi Strip': 'caprivi',
};

function slugFor(name: string): string {
  return STOP_SLUGS[name] ?? 'namibia';
}

// ═══════════════════════════════════════════════════════════
// WATERMARK — Decorative logo mark, very low opacity
// ═══════════════════════════════════════════════════════════

export function WildpathWatermark({
  className = '',
  variant = 'light',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const src = variant === 'dark'
    ? '/images/brand/wildpath-logo-dark-theme.webp'
    : '/images/brand/wildpath-logo-light-theme.webp';
  return (
    <Image
      src={src}
      alt=""
      width={1255}
      height={1415}
      className={`opacity-[0.06] ${className}`}
      aria-hidden="true"
    />
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION HEADING — consistent editorial heading pattern.
// Eyebrow at most 1-2 times per page (hallmark rule).
// ═══════════════════════════════════════════════════════════

export function SectionHeading({
  title,
  highlight,
  intro,
  align = 'left',
  dark = false,
}: {
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
    <div className={`mb-14 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.95]" style={{ color: textColor }}>
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
