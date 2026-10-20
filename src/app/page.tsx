'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  Nav,
  Footer,
  BirdFlock,
  SectionHeading,
} from '@/components/wildpath';
import { WpPicture, HeroSlider } from '@/components/wildpath-widgets';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';
import { WHATSAPP_URL } from '@/lib/site';

const EASE_PREMIUM = [0.4, 0, 0.2, 1] as const;

// ═══════════════════════════════════════════════════════════
// WILDPATH ADVENTURES — HOME
// Layout direction: typographic statement-led editorial, inspired by
// wearecollins.com (giant statement hero, type-index rows with hover
// inversion, ruled hairlines, serif italic accents, minimal chrome).
// Mapped onto the Wildpath brand tokens: ivory #F2EDE3, ink #1A1A1A,
// burnt orange #C5511A, serif accents via Fraunces (--font-fraunces).
//
// Copy rules (Tangison house style):
//   No em dashes, no exclamation points, no invented claims.
//   CTAs follow [verb + what you get]. All copy below is audited
//   against the approved content in src/lib/journeys.ts, src/lib/destinations.ts,
//   and the client claims audit. Nothing fabricated.
//
// Motion: entrance only on the hero; hover states are CSS. Reduced
// motion disables the hero entrance.
// ═══════════════════════════════════════════════════════════

const FIELD_NOTES = [
  {
    title: 'When to visit Sossusvlei',
    excerpt:
      'The dunes change character with the seasons. A short guide to light, temperature, and the best months for photography.',
    category: 'Destination guide',
  },
  {
    title: 'Etosha in the dry and wet seasons',
    excerpt:
      'How wildlife viewing shifts between the dry winter months and the greener, quieter summer, and what each season rewards.',
    category: 'Destination guide',
  },
  {
    title: 'Packing for Namibia',
    excerpt:
      'Neutral colours, layers for cold mornings and hot middays, soft bags for charter flights, and the small things that matter.',
    category: 'Travel preparation',
  },
];

export default function Home() {
  const featuredDestinations = DESTINATIONS.slice(0, 4);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main id="main-content" className="flex-1">
        {/* ═════════════════════ HERO, one statement, type-first ═════════════════════ */}
        <section className="pt-24 md:pt-32 pb-14 md:pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              className="wp-subhead text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-[#9E4214] mb-6 md:mb-8"
            >
              Wildpath Adventures · Windhoek, Namibia
            </motion.p>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
              className="wp-display text-[clamp(3rem,10.5vw,10rem)] leading-[0.88] tracking-[-0.015em] text-[#1A1A1A] max-w-[12ch]"
            >
              Slow down. Breathe.{' '}
              <em className="font-serif italic font-light text-[#9E4214]">Discover</em>{' '}
              Namibia<span className="text-[#C5511A]">.</span>
            </motion.h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 md:gap-8 items-end">
              <p className="md:col-span-5 text-base md:text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md">
                Personalised journeys across Namibia and Southern Africa, planned
                by a Namibian team that knows the land. Self-drive, guided, or a
                mix of both.
              </p>
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-[background-color] duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Start Planning My Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-[transform] duration-200" />
                </Link>
                <Link
                  href="/journeys"
                  className="group border border-[#1A1A1A]/25 text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Explore Journeys
                </Link>
              </div>
              <p className="md:col-span-3 md:text-right text-[0.65rem] tracking-[0.22em] uppercase text-[#1A1A1A]/50">
                4 journeys · 9 destinations · planned in Windhoek
              </p>
            </div>

            {/* Hero, full-bleed background slideshow of client photographs.
                Crossfade + slow Ken Burns, compositor-only; reduced motion
                renders a single static frame. */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.25 }}
              className="mt-12 md:mt-16 relative aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-[#1A1A1A]"
            >
              <HeroSlider />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex justify-between text-[0.6rem] md:text-[0.65rem] tracking-[0.22em] uppercase text-[#F2EDE3]">
                <span>Wildpath Adventures</span>
                <span>Namibia, Southern Africa</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═════════════════════ MANIFESTO, secondary statement band ═════════════════════ */}
        <section className="border-y border-[#1A1A1A]/12 bg-[#E8E3D5] py-14 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="wp-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1A1A1A]">
              Four journeys. Nine landscapes.
              <br />
              <span className="text-[#9E4214]">One region, planned from inside it.</span>
            </p>
          </div>
        </section>

        {/* ═════════════════════ JOURNEYS, type index with hover inversion ═════════════════════ */}
        <section id="journeys" className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between border-b border-[#1A1A1A]/15 pb-4 mb-4">
              <p className="wp-subhead text-[0.65rem] tracking-[0.25em] uppercase text-[#1A1A1A]/60">
                01 · The Journeys
              </p>
              <Link
                href="/journeys"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors duration-200"
              >
                All Journeys (4)
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div>
              {JOURNEYS.map((j, i) => (
                <Link
                  key={j.slug}
                  href={`/journeys/${j.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[5rem_1fr_13rem_2rem] items-center gap-4 md:gap-8 py-7 md:py-10 px-2 md:px-4 -mx-2 md:-mx-4 border-b border-[#1A1A1A]/15 last:border-b-0 hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  <span className="wp-display text-lg md:text-3xl text-[#1A1A1A]/40 group-hover:text-[#E8854A]/80 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="wp-display text-3xl md:text-6xl leading-[0.9] text-[#1A1A1A] group-hover:text-[#F2EDE3] transition-colors duration-300">
                      {j.name}
                    </h3>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-[#1A1A1A]/65 group-hover:text-[#F2EDE3]/75 leading-snug max-w-xl transition-colors duration-300">
                      {j.tagline}
                    </p>
                  </div>
                  <div className="hidden md:block text-right text-[0.65rem] tracking-[0.2em] uppercase text-[#1A1A1A]/55 group-hover:text-[#F2EDE3]/60 transition-colors duration-300">
                    <p>{j.duration}</p>
                    <p className="mt-1">{j.travelStyle}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-[#1A1A1A] group-hover:text-[#C5511A] group-hover:translate-x-1.5 transition-all duration-200"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ WHY WILDPATH, numbered list, dark band ═════════════════════ */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              eyebrow="What we stand on"
              title="Namibian-owned."
              highlight="Personally planned."
              intro="A small, dedicated team based in Windhoek. Every itinerary is shaped by local destination knowledge and trusted partners across the region."
              dark
            />

            <div className="space-y-0">
              {[
                { num: '01', title: 'Namibian ownership', body: 'A Namibian-owned tour operator based in Windhoek. We plan every journey from inside the country we travel in.' },
                { num: '02', title: 'Personalised planning', body: 'Every itinerary is drafted around your dates, your pace, and the people travelling with you. No two journeys are the same.' },
                { num: '03', title: 'Self-drive & guided', body: 'Choose self-drive with a thorough briefing, a guided vehicle, or a mix of both. We arrange what suits your route.' },
                { num: '04', title: 'Local destination knowledge', body: 'Our journeys are shaped by local destination knowledge and trusted partners across Namibia and Southern Africa.' },
                { num: '05', title: 'Flexible routes', body: 'Combine destinations. Add a transfer. Walk further. Stay longer. Every published route is a starting point, not a fixed script.' },
                { num: '06', title: 'Responsible travel', body: 'We aim to work with responsible local partners and support travel practices that respect Namibia\u2019s wildlife, landscapes, and communities.' },
              ].map((v) => (
                <div
                  key={v.num}
                  className="grid grid-cols-[3rem_1fr] gap-x-6 py-6 border-b border-[#F2EDE3]/10 last:border-b-0"
                >
                  <span className="wp-display text-2xl md:text-3xl text-[#E8854A]/60 leading-none pt-1">
                    {v.num}
                  </span>
                  <div>
                    <h3 className="wp-display text-xl md:text-2xl text-[#F2EDE3] mb-2 leading-tight">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#F2EDE3]/75 leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ THE LAND, destinations, ruled editorial grid ═════════════════════ */}
        <section id="destinations" className="py-20 md:py-28 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between border-b border-[#1A1A1A]/15 pb-4 mb-8">
              <p className="wp-subhead text-[0.65rem] tracking-[0.25em] uppercase text-[#1A1A1A]/60">
                02 · The Land
              </p>
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors duration-200"
              >
                All Destinations (9)
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {featuredDestinations.length > 0 && (
              <Link
                href={`/destinations/${featuredDestinations[0].slug}`}
                className="group relative block aspect-[16/9] md:aspect-[21/8] overflow-hidden bg-[#1A1A1A] mb-6"
              >
                <WpPicture
                  photo={featuredDestinations[0].image}
                  sizes="100vw"
                  priority
                  imgClassName="absolute inset-0 h-full w-full object-cover object-center group-hover:brightness-110 transition-[filter] duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/15 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-[#F2EDE3]">
                  <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#E8854A] mb-2">
                    {featuredDestinations[0].country}
                  </p>
                  <h3 className="wp-display text-3xl md:text-6xl leading-[0.9] mb-2">
                    {featuredDestinations[0].name}
                  </h3>
                  <p className="text-sm md:text-base text-[#F2EDE3]/85 max-w-xl leading-relaxed">
                    {featuredDestinations[0].shortLine}
                  </p>
                  <p className="mt-4 text-[0.6rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                    Explore
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </p>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredDestinations.slice(1).map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-[#1A1A1A]"
                >
                  <WpPicture
                    photo={d.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    imgClassName="absolute inset-0 h-full w-full object-cover object-center group-hover:brightness-110 transition-[filter] duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/15 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#F2EDE3]">
                    <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#E8854A] mb-2">
                      {d.country}
                    </p>
                    <h3 className="wp-display text-2xl md:text-3xl leading-[0.95] mb-2">
                      {d.name}
                    </h3>
                    <p className="text-sm text-[#F2EDE3]/85 leading-relaxed">
                      {d.shortLine}
                    </p>
                    <p className="mt-3 text-[0.6rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                      Explore
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ FIELD NOTES, text row list ═════════════════════ */}
        <section id="field-notes" className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between border-b border-[#1A1A1A]/15 pb-4 mb-2">
              <p className="wp-subhead text-[0.65rem] tracking-[0.25em] uppercase text-[#1A1A1A]/60">
                03 · Field Notes
              </p>
              <Link
                href="/field-notes"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors duration-200"
              >
                All Field Notes
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div>
              {FIELD_NOTES.map((n) => (
                <Link
                  key={n.title}
                  href="/field-notes"
                  className="group grid md:grid-cols-[11rem_1fr_auto] gap-2 md:gap-8 items-baseline py-7 md:py-9 px-2 md:px-4 -mx-2 md:-mx-4 border-b border-[#1A1A1A]/15 last:border-b-0 hover:bg-[#E8E3D5] transition-colors duration-300"
                >
                  <p className="wp-subhead text-[0.6rem] tracking-[0.22em] uppercase text-[#9E4214]">
                    {n.category}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl md:text-4xl text-[#1A1A1A] leading-tight group-hover:text-[#9E4214] transition-colors duration-300">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#1A1A1A]/70 leading-relaxed max-w-2xl">
                      {n.excerpt}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]/70 group-hover:text-[#9E4214] transition-colors duration-300">
                    Read
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ PULL QUOTE, editorial, not a testimonial ═════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3] relative overflow-hidden">
          <motion.div
            animate={prefersReducedMotion ? { x: 0 } : { x: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 left-1/2 -translate-x-1/2"
          >
            <BirdFlock className="w-48 h-12 text-[#E8854A]/40" />
          </motion.div>
          <div className="relative max-w-4xl mx-auto text-center pt-8">
            <svg className="w-10 h-10 mx-auto mb-8 text-[#E8854A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M 12 2 L 14.5 12 L 12 22 L 9.5 12 Z" fill="currentColor" />
              <text x="12" y="2" textAnchor="middle" fontSize="3" fill="currentColor" stroke="none" fontFamily="serif">N</text>
            </svg>
            <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 italic font-light">
              &ldquo;Where the salt pans meet the sky, and the lone acacia tree
              provides the only scale.&rdquo;
            </blockquote>
            <p className="wp-subhead text-sm tracking-[0.2em] text-[#E8854A]">
              An impression of Etosha at dawn
            </p>
            <p className="wp-script text-lg mt-2 text-[#F2EDE3]/80">
              Editorial, not a guest testimonial
            </p>
          </div>
        </section>

        {/* ═════════════════════ FINAL CTA, closing statement ═════════════════════ */}
        <section className="py-28 md:py-40 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="wp-display text-4xl md:text-7xl text-[#1A1A1A] leading-[0.92] mb-6">
              Tell us where the{' '}
              <span className="font-serif italic font-light text-[#9E4214]">silence</span>{' '}
              calls you.
            </h2>
            <p className="text-base md:text-lg text-[#1A1A1A]/75 max-w-lg mx-auto leading-relaxed mb-10">
              We will draft a route, a season, and a pace. No brochures, no scripts.
              Write to us by WhatsApp or email, or send an enquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-[background-color] duration-300 inline-flex items-center gap-3 justify-center"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="group border border-[#1A1A1A]/25 text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                Start Planning My Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
