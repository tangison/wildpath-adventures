'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, MessageCircle } from 'lucide-react';
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
// Editorial safari journal. Illustration-led. Wordmark primary.
// Sells emotion. Not tours.
// ═══════════════════════════════════════════════════════════

export default function Home() {
  // Featured journeys — all four are featured on home
  const featuredJourneys = JOURNEYS;

  // Top 4 destinations to feature on home
  const featuredDestinations = DESTINATIONS.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1">
        {/* ═════════════════════ HERO ═════════════════════ */}
        <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.15 }}
              className="text-center mb-8 md:mb-12"
            >
              <Wordmark size="xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0 }}
              className="relative w-full aspect-[16/7] md:aspect-[16/6] mb-6 md:mb-8 overflow-hidden"
            >
              <Image
                src="/images/illustrations/v2/01-hero.webp"
                alt="Hand-drawn vintage screen-print illustration of the Namibian savannah — acacia tree, gravel road, elephants, birds, and sunset"
                fill
                priority
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.7 }}
              className="text-center"
            >
              <p className="wp-script text-2xl md:text-3xl text-[#6B5E3D] mb-4">
                Travel the untamed beauty
              </p>
              <p className="text-lg md:text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto leading-relaxed">
                Thoughtfully planned journeys through Namibia and Southern Africa.
                Tailored around the landscapes, wildlife and pace that make this
                part of Africa unforgettable.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/journeys"
                  className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Choose Your Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={15} />
                  Plan Your Safari
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═════════════════════ CONTOUR DIVIDER ═════════════════════ */}
        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ FEATURED JOURNEYS ═════════════════════ */}
        <section id="journeys" className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Choose your journey"
                title="Four routes. One"
                highlight="country, and beyond."
                intro="Each journey is a complete arc — drawn by geology, paced by the land, and tailored to the people on it. No scripts. No coaches."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredJourneys.map((j, i) => (
                <ScrollReveal key={j.slug} delay={i * 0.08}>
                  <Link
                    href={`/journeys/${j.slug}`}
                    className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] bg-[#1A1A1A] overflow-hidden">
                      <Image
                        src={j.cardImage}
                        alt={`${j.name} — illustration`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-[#F2EDE3] px-3 py-1.5">
                        <p className="wp-subhead text-[0.6rem] tracking-[0.2em] text-[#9E4214]">
                          {j.duration}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="wp-script text-lg text-[#9E4214] mb-1">{j.travelStyle}</p>
                      <h3 className="wp-display text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#9E4214] transition-colors">
                        {j.name}
                      </h3>
                      <p className="text-sm text-[#1A1A1A]/75 leading-relaxed mb-4">
                        {j.tagline}
                      </p>
                      <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-[#1A1A1A]/70">
                        <span>{j.startPoint} → {j.endPoint}</span>
                        <span className="flex-1 h-px bg-[#1A1A1A]/15" />
                        <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:text-[#9E4214] transition-all" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/journeys"
                className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors border-b border-[#1A1A1A] pb-1"
              >
                See all journeys
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════ WHY WILDPATH ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Why travel with us"
                title="We locate"
                highlight="experiences."
                intro="We do not engineer them. The land is the author. We are the editors."
                dark
              />
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-px bg-[#F2EDE3]/10">
              {[
                { title: 'Namibian roots', body: 'Every guide is Namibian. Every route is drawn here. We are not headquartered in London or New York.' },
                { title: 'Slow travel', body: 'We do not do fourteen parks in seven days. We do one landscape deeply, then move. Pace is the point.' },
                { title: 'Tailored, not templated', body: 'No two journeys are the same. Every itinerary is drafted around the people on it, the season, and the land.' },
                { title: 'Real conservation', body: 'A percentage of every journey funds Save the Rhino Trust and the Namibian Desert Lion Project. Carbon logged, not offset.' },
                { title: 'Local communities', body: 'We hire from Damaraland, from the Kunene, from Windhoek. Our supply chain is 90% Namibian.' },
                { title: '24-hour line', body: 'When you travel with us, you have a direct line — to your guide, to our ops team, to the person who planned your route.' },
              ].map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.05}>
                  <div className="bg-[#1A1A1A] p-8 md:p-10 h-full">
                    <h3 className="wp-display text-xl md:text-2xl text-[#F2EDE3] mb-4 leading-tight">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#F2EDE3]/75 leading-relaxed">{v.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ ACACIA DIVIDER ═════════════════════ */}
        <div className="py-6 flex justify-center">
          <AcaciaMark className="w-28 h-18 text-[#1A1A1A]/30" />
        </div>

        {/* ═════════════════════ JOURNEY PHILOSOPHY ═════════════════════ */}
        <section id="philosophy" className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Our philosophy</p>
              <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[0.95] mb-10">
                We do not engineer experiences.
                <br />
                <span className="text-[#9E4214]">We locate them.</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-lg leading-relaxed text-[#1A1A1A]/80">
              <ScrollReveal delay={0.15}>
                <p>
                  From the arid plains where acacia trees anchor the earth, to the
                  shifting dunes of the Kalahari, our presence is temporary, but
                  the impact is permanent. We move on foot, by Cessna, and by
                  Land Cruiser — never by coach, never by script.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p>
                  Expect dust on your boots, fire in the evenings, and the kind of
                  silence you cannot find elsewhere. Every route is drawn by
                  geology, not by tourism. Every silence is real.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.2} className="max-w-7xl mx-auto mt-16">
            <div className="relative w-full aspect-[16/6] md:aspect-[16/5] overflow-hidden">
              <Image
                src="/images/illustrations/v2/08-manifesto-atmosphere.webp"
                alt="Hand-drawn illustration of a lone acacia tree against the vast Namibian desert sky"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ═════════════════════ DESTINATION HIGHLIGHTS ═════════════════════ */}
        <section id="destinations" className="py-20 md:py-32 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Where we roam"
                title="Nine landscapes."
                highlight="One region."
                intro="From the oldest desert on earth to the smoke that thunders. Image-led. Editorial. Real."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredDestinations.map((d, i) => (
                <ScrollReveal key={d.slug} delay={i * 0.08}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[#1A1A1A]"
                  >
                    <Image
                      src={d.image}
                      alt={`${d.name} — ${d.country}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
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
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#9E4214] transition-colors border-b border-[#1A1A1A] pb-1"
              >
                See all destinations
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════ PULL QUOTE ═════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3] relative overflow-hidden">
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 left-1/2 -translate-x-1/2"
          >
            <BirdFlock className="w-48 h-12 text-[#E8854A]/40" />
          </motion.div>
          <div className="relative max-w-4xl mx-auto text-center pt-8">
            <ScrollReveal>
              <Compass className="w-10 h-10 mx-auto mb-8 text-[#E8854A]" strokeWidth={1.5} />
              <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 italic font-light">
                &ldquo;Where the salt pans meet the sky, and the lone acacia tree
                provides the only scale.&rdquo;
              </blockquote>
              <p className="wp-subhead text-sm tracking-[0.2em] text-[#E8854A]">
                Etosha · 04:12 AM · Dry Season
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ FIELD NOTES PREVIEW ═════════════════════ */}
        <section id="field-notes" className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="wp-script text-2xl text-[#9E4214] mb-3">Field notes</p>
                <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9]">
                  Dispatches from
                  <br />
                  <span className="text-[#9E4214]">the field.</span>
                </h2>
              </div>
              <Link
                href="/field-notes"
                className="text-[#1A1A1A]/80 hover:text-[#9E4214] transition-colors duration-300 text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-2 border-b border-[#1A1A1A]/40 pb-1"
              >
                All dispatches <ArrowRight size={14} />
              </Link>
            </ScrollReveal>

            <div className="space-y-px bg-[#1A1A1A]/12">
              {[
                {
                  title: 'On the geology of silence',
                  excerpt:
                    'Why the Namib sounds different from the Kalahari, and what that means for the way we route our expeditions.',
                  date: 'March 2026',
                  readTime: '6 min',
                  category: 'Fieldcraft',
                  featured: true,
                  image: '/images/illustrations/v2/10-note-early-light.webp',
                },
                {
                  title: 'Tracking the desert-adapted elephant',
                  excerpt:
                    'Three days following a breeding herd through the Huab riverbed. Notes from our lead guide.',
                  date: 'February 2026',
                  readTime: '9 min',
                  category: 'Wildlife',
                  featured: false,
                  image: '/images/illustrations/v2/12-note-desert-elephants.webp',
                },
                {
                  title: 'Building with what the land gives',
                  excerpt:
                    'How the Stone Escarpment Chalets were sited, oriented, and roofed using only materials quarried within four kilometres.',
                  date: 'January 2026',
                  readTime: '4 min',
                  category: 'Architecture',
                  featured: false,
                  image: '/images/illustrations/v2/11-note-ancient-paths.webp',
                },
              ].map((n, i) => (
                <ScrollReveal key={n.title} delay={i * 0.1}>
                  <Link
                    href="/field-notes"
                    className={`block bg-[#F2EDE3] group hover:bg-[#E8E3D5] transition-colors duration-300 ${
                      n.featured ? 'p-8 md:p-12' : 'p-6 md:p-8'
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]/5">
                        <Image
                          src={n.image}
                          alt={`Illustration for: ${n.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold">
                          <span className="text-[#9E4214]">{n.category}</span>
                          <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                          <span className="text-[#1A1A1A]/70">{n.date}</span>
                          <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                          <span className="text-[#1A1A1A]/70">{n.readTime}</span>
                        </div>
                        <h3 className={`font-serif ${n.featured ? 'text-3xl md:text-4xl' : 'text-2xl'} text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#9E4214] transition-colors duration-300`}>
                          {n.title}
                        </h3>
                        <p className="text-[#1A1A1A]/75 leading-relaxed max-w-2xl text-sm md:text-base">
                          {n.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[0.65rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold">
                          Read
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12 bg-[#E8E3D5]">
          <ScrollReveal className="max-w-7xl mx-auto text-center">
            <div className="mb-10">
              <Wordmark size="lg" />
            </div>
            <p className="wp-script text-3xl text-[#9E4214] mb-4">The map is waiting</p>
            <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9] mb-6">
              Tell us where the
              <br />
              <span className="text-[#9E4214]">silence calls you.</span>
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-lg mx-auto leading-relaxed mb-10">
              We will draft a route, a season, and a pace. No brochures, no scripts.
              Write to us directly — by WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                Plan Your Safari
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
