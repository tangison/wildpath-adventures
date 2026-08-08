'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  Nav,
  Footer,
  Wordmark,
  AcaciaMark,
  BirdFlock,
  ContourLines,
  ScrollReveal,
  SectionHeading,
} from '@/components/wildpath';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';
import { WHATSAPP_URL } from '@/lib/site';

const EASE_PREMIUM = [0.4, 0, 0.2, 1] as const;

// ═══════════════════════════════════════════════════════════
// WILDPATH ADVENTURES — HOME
// Hallmark · macrostructure: asymmetric-hero-editorial · genre: atmospheric · theme: wildpath-custom
//
// Critical structural fixes applied:
//   1. Hero: asymmetric (wordmark+copy left, illustration right) — breaks centered template
//   2. "Why Wildpath": numbered left-margin list (S1) — breaks 3-column card grid
//   3. ScrollReveal: only on hero wordmark entrance + first section heading per page
//   4. Eyebrows: max 1 per page
//   5. Section padding: varied rhythm (py-16, py-28, py-36) — breaks metronome
//   6. Hover signals: one per card type (no universal scale-105)
//
// All public claims audited against client profile.
// No invented conservation partnerships, percentages, or staff.
// ═══════════════════════════════════════════════════════════

export default function Home() {
  const featuredJourneys = JOURNEYS;
  const featuredDestinations = DESTINATIONS.filter((d) => d.imageKind === 'photo').slice(0, 4);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main id="main-content" className="flex-1">
        {/* ═════════════════════ HERO — Asymmetric: copy left, illustration right ═════════════════════ */}
        <section className="pt-24 md:pt-36 pb-12 md:pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-6 md:gap-12 items-center">
            {/* Left column — wordmark, tagline, copy, CTAs */}
            <div className="md:col-span-5 md:order-1">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.15 }}
              >
                {/* Accessible h1 for SEO and screen readers — visually hidden, Wordmark renders visually */}
                <h1 className="sr-only">Wildpath Adventures — Travel the untamed beauty</h1>
                {/* Hero wordmark: lg on mobile (no duplicate feel with nav sm), xl on desktop */}
                <Wordmark size="lg" className="md:hidden" />
                <Wordmark size="xl" className="hidden md:inline-flex" />
              </motion.div>

              <p className="wp-script text-xl md:text-3xl text-[#6B5E3D] mt-4 md:mt-6 mb-3 md:mb-4">
                Travel the untamed beauty
              </p>
              <p className="text-base md:text-xl text-[#1A1A1A]/70 max-w-lg leading-relaxed mb-6 md:mb-8">
                A Namibian-owned tour operator creating personalised journeys
                across Namibia and Southern Africa. Every itinerary is tailored
                around the landscapes, wildlife, and pace that make this part of
                Africa unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/journeys"
                  className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-[background-color] duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Choose Your Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-[transform] duration-200" />
                </Link>
                <Link
                  href="/contact"
                  className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-[background-color,color] duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Plan Your Journey
                </Link>
              </div>
            </div>

            {/* Right column — hero illustration, full-bleed feel */}
            <div className="md:col-span-7 md:order-2 relative aspect-[3/2] md:aspect-[16/9] overflow-hidden bg-[#E8E3D5]">
              <Image
                src="/images/illustrations/approved/wildpath-hero-main.webp"
                alt="Hand-drawn vintage screen-print illustration of the Namibian savannah — acacia tree, gravel road, elephants, birds, and sunset"
                fill
                priority
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </section>

        {/* ═════════════════════ CONTOUR DIVIDER ═════════════════════ */}
        <div className="py-3">
          <ContourLines className="w-full h-10 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ FEATURED JOURNEYS ═════════════════════ */}
        <section id="journeys" className="py-28 md:py-36 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                title="Routes drawn by geology,"
                highlight="not by tourism."
                intro="Each journey is a complete arc — tailored around the people on it, the season, and the land. Self-drive, guided, or a mix of both."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredJourneys.map((j) => (
                <Link
                  key={j.slug}
                  href={`/journeys/${j.slug}`}
                  className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-[background-color] duration-300 overflow-hidden"
                >
                  <div className="relative aspect-[3/2] bg-[#1A1A1A] overflow-hidden">
                    <Image
                      src={j.cardImage}
                      alt={`${j.name} — illustration`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain group-hover:opacity-90 transition-[opacity] duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#F2EDE3] px-3 py-1.5">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.2em] text-[#9E4214]">
                        {j.duration}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="wp-script text-lg text-[#9E4214] mb-1">{j.travelStyle}</p>
                    <h3 className="wp-display text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#9E4214] transition-[color] duration-200">
                      {j.name}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/75 leading-relaxed mb-4">
                      {j.tagline}
                    </p>
                    <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-[#1A1A1A]/70">
                      <span>{j.startPoint} → {j.endPoint}</span>
                      <span className="flex-1 h-px bg-[#1A1A1A]/15" />
                      <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:text-[#9E4214] transition-[transform,color] duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/journeys"
                className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-[color] duration-200 border-b border-[#1A1A1A] pb-1"
              >
                See all journeys
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-[transform] duration-200" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════ WHY WILDPATH — S1 numbered left-margin list (breaks 3-column grid) ═════════════════════ */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              eyebrow="What we stand on"
              title="Namibian-owned."
              highlight="Personally planned."
              intro="A small, dedicated team based in Windhoek. Every itinerary is shaped by local destination knowledge and trusted partners across the region."
              dark
            />

            {/* S1 pattern: numbered left-margin list with hanging headings */}
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

        {/* ═════════════════════ ACACIA DIVIDER ═════════════════════ */}
        <div className="py-4 flex justify-center">
          <AcaciaMark className="w-28 h-18 text-[#1A1A1A]/30" />
        </div>

        {/* ═════════════════════ TAILOR-MADE EXPLANATION ═════════════════════ */}
        <section id="philosophy" className="py-36 md:py-44 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[0.95] mb-10">
              Every route is
              <br />
              <span className="text-[#9E4214]">drafted around you.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-lg leading-relaxed text-[#1A1A1A]/80">
              <p>
                The four flagship routes above are starting points. Combine
                destinations, change the duration, add a transfer or a guided
                section. Depending on the journey, transport may include
                self-drive, guided road travel, transfers, or regional
                connections arranged on request.
              </p>
              <p>
                We plan every itinerary personally — from the first enquiry to
                your return home. Accommodation is arranged according to route
                and budget, with full details confirmed in your personalised
                proposal. No scripts, no coaches, no fixed departures.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-16">
            <div className="relative w-full aspect-[16/8] md:aspect-[16/6] overflow-hidden bg-[#E8E3D5]">
              <Image
                src="/images/illustrations/approved/page-about.webp"
                alt="Hand-drawn illustration of a lone acacia tree against the vast Namibian desert sky"
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </section>

        {/* ═════════════════════ DESTINATION PREVIEW ═════════════════════ */}
        <section id="destinations" className="py-20 md:py-28 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Nine landscapes."
              highlight="One region."
              intro="From the oldest desert on earth to the rivers of the Caprivi. Image-led. Editorial. Real."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredDestinations.map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#1A1A1A]"
                >
                  <Image
                    src={d.image}
                    alt={`${d.name} — ${d.country}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`${d.imageKind === 'illustration' ? 'object-contain' : 'object-cover object-center'} group-hover:brightness-110 transition-[filter] duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-[#F2EDE3]">
                    <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#E8854A] mb-2">
                      {d.country}
                    </p>
                    <h3 className="wp-display text-2xl md:text-4xl leading-[0.95] mb-2">
                      {d.name}
                    </h3>
                    <p className="text-sm text-[#F2EDE3]/85 max-w-md leading-relaxed">
                      {d.shortLine}
                    </p>
                    <p className="mt-4 text-[0.6rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                      Explore
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-[transform] duration-200" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-[color] duration-200 border-b border-[#1A1A1A] pb-1"
              >
                See all destinations
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-[transform] duration-200" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════ PULL QUOTE — editorial, not testimonial ═════════════════════ */}
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
              Editorial — not a guest testimonial
            </p>
          </div>
        </section>

        {/* ═════════════════════ FIELD NOTES PREVIEW ═════════════════════ */}
        <section id="field-notes" className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9]">
                  Destination
                  <br />
                  <span className="text-[#9E4214]">inspiration.</span>
                </h2>
              </div>
              <Link
                href="/field-notes"
                className="text-[#1A1A1A]/80 hover:text-[#9E4214] transition-[color] duration-300 text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-2 border-b border-[#1A1A1A]/40 pb-1"
              >
                All field notes <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-px bg-[#1A1A1A]/12">
              {[
                {
                  title: 'When to visit Sossusvlei',
                  excerpt:
                    'The dunes change character with the seasons. A short guide to light, temperature, and the best months for photography.',
                  category: 'Destination guide',
                  image: '/images/illustrations/approved/field-note-sossusvlei.webp',
                },
                {
                  title: 'Etosha in the dry and wet seasons',
                  excerpt:
                    'How wildlife viewing shifts between the dry winter months and the greener, quieter summer — and what each season rewards.',
                  category: 'Destination guide',
                  image: '/images/illustrations/approved/field-note-etosha-seasons.webp',
                },
                {
                  title: 'Packing for Namibia',
                  excerpt:
                    'Neutral colours, layers for cold mornings and hot middays, soft bags for charter flights, and the small things that matter.',
                  category: 'Travel preparation',
                  image: '/images/illustrations/approved/field-note-packing.webp',
                },
              ].map((n) => (
                <Link
                  key={n.title}
                  href="/field-notes"
                  className="block bg-[#F2EDE3] group hover:bg-[#E8E3D5] transition-[background-color] duration-300 p-6 md:p-8"
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="relative aspect-[3/2] overflow-hidden bg-[#E8E3D5]">
                      <Image
                        src={n.image}
                        alt={`Illustration for: ${n.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain opacity-90 group-hover:opacity-100 transition-[opacity] duration-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold">
                        <span className="text-[#9E4214]">{n.category}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#9E4214] transition-[color] duration-300">
                        {n.title}
                      </h3>
                      <p className="text-[#1A1A1A]/75 leading-relaxed max-w-2xl text-sm md:text-base">
                        {n.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[0.65rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold">
                        Read
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-[transform] duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-36 md:py-48 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-10">
              <Wordmark size="lg" />
            </div>
            <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9] mb-6">
              Tell us where the
              <br />
              <span className="text-[#9E4214]">silence calls you.</span>
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-lg mx-auto leading-relaxed mb-10">
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
                className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-[background-color,color] duration-300 inline-flex items-center gap-3 justify-center"
              >
                Plan Your Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-[transform] duration-200" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
