'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, SectionHeading } from '@/components/wildpath';
import { HeroVideo } from '@/components/hero-video';
import { PhotoImg } from '@/components/photo';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';
import { FIELD_NOTE_PHOTOS } from '@/lib/photo-groups';
import { NOTES } from '@/app/field-notes/notes';
import { WHATSAPP_URL } from '@/lib/site';

const EASE_PREMIUM = [0.4, 0, 0.2, 1] as const;

// ═══════════════════════════════════════════════════════════
// WILDPATH ADVENTURES — HOME (image-first rebuild)
// Full-bleed video hero, image-led journey cards, destination
// mosaic, field-notes photo strip, full-width photo CTA.
// Brand tokens: ivory #F2EDE3, ink #1A1A1A, burnt orange #C5511A.
//
// Copy rules (Tangison house style): no em dashes, no exclamation
// points, no invented claims. All imagery is real photography
// resolved through src/data/photos.generated.ts.
// ═══════════════════════════════════════════════════════════

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const featuredDestinations = DESTINATIONS.slice(0, 5);
  const notes = NOTES.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main id="main-content" className="flex-1">
        {/* ═══════════════ FULL-BLEED VIDEO HERO ═══════════════ */}
        <section className="relative h-[86vh] min-h-[540px] md:h-[92vh] bg-[#1A1A1A] overflow-hidden">
          <HeroVideo poster="/video/poster.avif" className="absolute inset-0 h-full w-full" />
          {/* WCAG AA scrim: darker at the text zone, never fully black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/35 to-[#1A1A1A]/25" aria-hidden="true" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-14 md:pb-20">
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                className="wp-subhead text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-[#E8854A] mb-5"
              >
                Wildpath Adventures · Windhoek, Namibia
              </motion.p>
              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
                className="wp-display text-[clamp(2.8rem,8.5vw,8rem)] leading-[0.9] tracking-[-0.015em] text-[#F2EDE3] max-w-[14ch]"
              >
                Slow down. Breathe.{' '}
                <em className="font-serif italic font-light text-[#E8854A]">Discover Namibia.</em>
              </motion.h1>
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.25 }}
                className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
              >
                <p className="text-base md:text-lg text-[#F2EDE3]/90 leading-relaxed max-w-md">
                  Personalised journeys across Namibia and Southern Africa,
                  planned by a Namibian team that knows the land. Self-drive,
                  guided, or a mix of both.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group bg-[#C5511A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-[background-color] duration-300 inline-flex items-center gap-3 justify-center"
                  >
                    Start planning my journey
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/journeys"
                    className="group border border-[#F2EDE3]/50 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                  >
                    Explore journeys
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 flex justify-between px-6 md:px-12 pb-4 text-[0.6rem] md:text-[0.65rem] tracking-[0.22em] uppercase text-[#F2EDE3]/55">
            <span>4 journeys · 9 destinations · planned in Windhoek</span>
            <span className="hidden md:inline">Self-drive · Guided · Private</span>
          </div>
        </section>

        {/* ═══════════════ MANIFESTO BAND ═══════════════ */}
        <section className="border-b border-[#1A1A1A]/12 bg-[#E8E3D5] py-14 md:py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="wp-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1A1A1A]">
              Four journeys. Nine landscapes.
              <br />
              <span className="text-[#9E4214]">One region, planned from inside it.</span>
            </p>
          </div>
        </section>

        {/* ═══════════════ JOURNEYS — image-led cards ═══════════════ */}
        <section id="journeys" className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between border-b border-[#1A1A1A]/15 pb-4 mb-10">
              <p className="wp-subhead text-[0.65rem] tracking-[0.25em] uppercase text-[#1A1A1A]/60">
                01 · The Journeys
              </p>
              <Link
                href="/journeys"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors duration-200"
              >
                All journeys (4)
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {JOURNEYS.map((j, i) => (
                <motion.div
                  key={j.slug}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: (i % 2) * 0.08 }}
                >
                  <Link
                    href={`/journeys/${j.slug}`}
                    className={`group relative block overflow-hidden bg-[#1A1A1A] ${
                      i === 0 ? 'aspect-[16/10] md:col-span-2 md:aspect-[21/9]' : 'aspect-[4/5] md:aspect-[16/11]'
                    }`}
                  >
                    <PhotoImg
                      id={j.heroImage}
                      fill
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                      sizes={i === 0 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                      className="group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-[1200ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#F2EDE3] px-3 py-1.5">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.2em] text-[#9E4214]">{j.duration}</p>
                    </div>
                    <div className="absolute inset-0 p-6 md:p-9 flex flex-col justify-end text-[#F2EDE3]">
                      <h3 className={`wp-display leading-[0.92] mb-2 ${i === 0 ? 'text-3xl md:text-6xl' : 'text-2xl md:text-4xl'}`}>
                        {j.name}
                      </h3>
                      <p className={`text-[#F2EDE3]/85 leading-snug max-w-xl ${i === 0 ? 'text-sm md:text-lg' : 'text-sm'}`}>
                        {j.tagline}
                      </p>
                      <p className="mt-4 text-[0.6rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                        View the route
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ DESTINATION MOSAIC ═══════════════ */}
        <section id="destinations" className="py-20 md:py-28 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between border-b border-[#1A1A1A]/15 pb-4 mb-10">
              <p className="wp-subhead text-[0.65rem] tracking-[0.25em] uppercase text-[#1A1A1A]/60">
                02 · The Land
              </p>
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors duration-200"
              >
                All destinations (9)
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {featuredDestinations.map((d, i) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className={`group relative block overflow-hidden bg-[#1A1A1A] ${
                    i === 0
                      ? 'col-span-2 row-span-2 aspect-square md:aspect-[4/3.2]'
                      : 'aspect-square md:aspect-[4/3.2]'
                  }`}
                >
                  <PhotoImg
                    id={d.image}
                    fill
                    loading={i === 0 ? 'eager' : 'lazy'}
                    sizes={i === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                    className="group-hover:brightness-110 transition-[filter] duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-[#F2EDE3]">
                    <p className="wp-subhead text-[0.55rem] tracking-[0.22em] text-[#E8854A] mb-1">
                      {d.country}
                    </p>
                    <h3 className={`wp-display leading-[0.95] ${i === 0 ? 'text-2xl md:text-5xl' : 'text-base md:text-xl'}`}>
                      {d.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FIELD NOTES — photo strip ═══════════════ */}
        <section id="field-notes" className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between border-b border-[#1A1A1A]/15 pb-4 mb-10">
              <p className="wp-subhead text-[0.65rem] tracking-[0.25em] uppercase text-[#1A1A1A]/60">
                03 · Field Notes
              </p>
              <Link
                href="/field-notes"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors duration-200"
              >
                All field notes
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {notes.map((n) => {
                const photo = FIELD_NOTE_PHOTOS[n.slug];
                return (
                  <Link
                    key={n.slug}
                    href={`/field-notes/${n.slug}`}
                    className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[3/2] bg-[#1A1A1A] overflow-hidden">
                      {photo && (
                        <PhotoImg
                          id={photo}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="group-hover:brightness-110 transition-[filter] duration-[800ms] ease-out"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.22em] uppercase text-[#9E4214] mb-2">
                        {n.category}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] leading-tight group-hover:text-[#9E4214] transition-colors duration-300">
                        {n.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#1A1A1A]/70 leading-relaxed line-clamp-2">
                        {n.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════ FULL-WIDTH PHOTO CTA ═══════════════ */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-[#1A1A1A] overflow-hidden">
          <PhotoImg id="wc-etosha-camelthorn-zebra" fill loading="lazy" sizes="100vw" className="opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/85 via-[#1A1A1A]/45 to-transparent" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
            <SectionHeading
              eyebrow="What we stand on"
              title="Namibian-owned."
              highlight="Personally planned."
              intro="A small, dedicated team based in Windhoek. Every itinerary is shaped by local destination knowledge and trusted partners across the region."
              dark
            />
            <div className="mt-10 max-w-xl">
              <p className="font-serif italic text-xl md:text-2xl text-[#F2EDE3]/85 leading-relaxed mb-8">
                &ldquo;Where the salt pans meet the sky, and the lone acacia
                tree provides the only scale.&rdquo; — an impression of Etosha at dawn
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#C5511A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={16} />
                  WhatsApp us
                </a>
                <Link
                  href="/contact"
                  className="group border border-[#F2EDE3]/50 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Start planning my journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
