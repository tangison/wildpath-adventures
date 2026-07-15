import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import {
  Nav,
  Footer,
  ContourLines,
  AcaciaMark,
  ScrollReveal,
  JourneySnapshot,
  JourneyRouteTimeline,
} from '@/components/wildpath';
import { JOURNEYS, getJourney } from '@/lib/journeys';
import { WHATSAPP_URL } from '@/lib/site';

export async function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return { title: 'Journey Not Found' };
  return {
    title: journey.name,
    description: journey.tagline,
    alternates: { canonical: `/journeys/${journey.slug}` },
  };
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = getJourney(slug);

  if (!journey) notFound();

  const otherJourneys = JOURNEYS.filter((j) => j.slug !== journey.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HERO ═════════════════════ */}
        <section className="relative h-[50vh] md:h-[65vh] min-h-[400px] bg-[#1A1A1A] overflow-hidden">
          <Image
            src={journey.heroImage}
            alt={`${journey.name} — ${journey.regions?.join(', ') || journey.route.map(r => r.name).join(', ')}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-10 md:pb-16">
              <div className="max-w-3xl">
                <p className="wp-script text-2xl md:text-3xl text-[#E8854A] mb-3">
                  {journey.travelStyle} · {journey.duration}
                </p>
                <h1 className="wp-display text-5xl md:text-7xl lg:text-8xl text-[#F2EDE3] leading-[0.88] mb-4">
                  {journey.name}
                </h1>
                <p className="text-lg md:text-xl text-[#F2EDE3]/85 max-w-2xl leading-relaxed">
                  {journey.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════ JOURNEY SNAPSHOT ═════════════════════ */}
        <JourneySnapshot
          name={journey.name}
          tagline={journey.tagline}
          duration={journey.duration}
          bestFor={journey.bestFor}
          highlights={journey.highlights}
          travelStyle={journey.travelStyle}
          availability={journey.availability}
          mealsNote={journey.mealsNote}
          startPoint={journey.startPoint}
          endPoint={journey.endPoint}
        />

        {/* ═════════════════════ OVERVIEW ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">The shape of the journey</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.95] mb-8">
                {journey.overview}
              </h2>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ ROUTE MAP — text-based path of destinations ═════════════════════ */}
        <section className="py-12 md:py-16 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <p className="wp-script text-xl text-[#E8854A] mb-2">The route</p>
              <h3 className="wp-display text-2xl md:text-3xl">
                {journey.startPoint} → {journey.endPoint}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {journey.route.map((r, i) => (
                  <div key={`${r.name}-${i}`} className="flex items-center gap-3 md:gap-4">
                    <span className="wp-display text-sm md:text-lg text-[#F2EDE3] px-3 py-1.5 border border-[#F2EDE3]/30">
                      {r.name}
                    </span>
                    {i < journey.route.length - 1 && (
                      <span className="text-[#E8854A] text-xl">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ ROUTE TIMELINE — the centerpiece ═════════════════════ */}
        <JourneyRouteTimeline route={journey.route} />

        {/* ═════════════════════ ACACIA DIVIDER ═════════════════════ */}
        <div className="py-6 flex justify-center">
          <AcaciaMark className="w-28 h-18 text-[#1A1A1A]/30" />
        </div>

        {/* ═════════════════════ HIGHLIGHTS GRID ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Highlights</p>
              <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9] mb-12">
                What you will
                <br />
                <span className="text-[#9E4214]">remember.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/12">
                {journey.highlights.map((h, i) => (
                  <div key={h} className="bg-[#F2EDE3] p-6 md:p-8 group hover:bg-[#DDD7C8] transition-colors duration-300">
                    <span className="wp-display text-3xl text-[#9E4214]/30 mb-2 block">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="wp-display text-lg md:text-xl text-[#1A1A1A] leading-tight">
                      {h}
                    </h3>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <AcaciaMark className="w-24 h-16 mx-auto text-[#E8854A]/60 mb-6" />
              <p className="wp-script text-3xl text-[#E8854A] mb-4">This is your journey</p>
              <h2 className="wp-display text-4xl md:text-6xl leading-[0.9] mb-6">
                Request the full
                <br />
                <span className="text-[#E8854A]">day-by-day itinerary.</span>
              </h2>
              <p className="text-lg text-[#F2EDE3]/75 max-w-xl mx-auto leading-relaxed mb-10">
                We will send you the detailed route, selected accommodation, meal
                plans, and pricing — drafted around your dates and your party.
                Full itinerary and accommodation details available on request.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="group bg-[#C5511A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
                >
                  Request This Journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-[#F2EDE3]/40 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={15} />
                  Ask on WhatsApp
                </a>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center text-sm text-[#F2EDE3]/60">
                <Link
                  href="/contact"
                  className="hover:text-[#E8854A] transition-colors inline-flex items-center gap-2 justify-center"
                >
                  <MapPin size={13} /> Customise this journey
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ CONTINUE EXPLORING ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Continue exploring</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.9]">
                Other routes.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {otherJourneys.map((j, i) => (
                <ScrollReveal key={j.slug} delay={i * 0.08}>
                  <Link
                    href={`/journeys/${j.slug}`}
                    className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] bg-[#1A1A1A] overflow-hidden">
                      <Image
                        src={j.cardImage}
                        alt={j.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-[#F2EDE3] px-2.5 py-1">
                        <p className="wp-subhead text-[0.55rem] tracking-[0.2em] text-[#9E4214]">
                          {j.duration}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="wp-script text-base text-[#9E4214] mb-1">{j.travelStyle}</p>
                      <h3 className="wp-display text-xl text-[#1A1A1A] mb-2 leading-tight group-hover:text-[#9E4214] transition-colors">
                        {j.name}
                      </h3>
                      <p className="text-xs text-[#1A1A1A]/70 leading-relaxed line-clamp-2">
                        {j.tagline}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
