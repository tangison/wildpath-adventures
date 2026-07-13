import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, AcaciaMark, ScrollReveal } from '@/components/wildpath';
import { DESTINATIONS, getDestination } from '@/lib/destinations';
import { getJourney } from '@/lib/journeys';
import { WHATSAPP_URL } from '@/lib/site';

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return { title: 'Destination Not Found' };
  return {
    title: dest.name,
    description: dest.overview,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = getDestination(slug);

  if (!dest) notFound();

  const journey = getJourney(dest.suggestedJourney);
  const otherDestinations = DESTINATIONS.filter((d) => d.slug !== dest.slug).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HERO PHOTOGRAPHY ═════════════════════ */}
        <section className="relative h-[55vh] md:h-[70vh] min-h-[450px] bg-[#1A1A1A] overflow-hidden">
          <Image
            src={dest.image}
            alt={`${dest.name} — ${dest.country}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-10 md:pb-16">
              <div className="max-w-3xl">
                <p className="wp-subhead text-[0.65rem] tracking-[0.25em] text-[#E8854A] mb-3">
                  {dest.country}
                </p>
                <h1 className="wp-display text-5xl md:text-7xl lg:text-8xl text-[#F2EDE3] leading-[0.88] mb-4">
                  {dest.name}
                </h1>
                <p className="text-lg md:text-xl text-[#F2EDE3]/85 max-w-2xl leading-relaxed">
                  {dest.shortLine}
                </p>
              </div>
            </div>
          </div>
          {dest.imageKind === 'illustration' && (
            <div className="absolute top-24 right-6 md:right-12 bg-[#F2EDE3]/90 px-3 py-1.5">
              <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold">
                Editorial illustration
              </p>
            </div>
          )}
        </section>

        {/* ═════════════════════ OVERVIEW ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Overview</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.95] mb-8">
                {dest.overview}
              </h2>
            </ScrollReveal>

            {/* Key facts grid */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/12 mt-12">
                <div className="bg-[#F2EDE3] p-6 md:p-8">
                  <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-3">
                    Best Time To Visit
                  </p>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed">{dest.bestTime}</p>
                </div>
                <div className="bg-[#F2EDE3] p-6 md:p-8">
                  <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-3">
                    Landscape
                  </p>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed">{dest.landscape}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ HIGHLIGHTS ═════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Highlights</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.9] mb-10">
                What you will see.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {dest.highlights.map((h) => (
                  <span
                    key={h}
                    className="bg-[#F2EDE3] border border-[#1A1A1A]/15 px-5 py-3 wp-display text-base md:text-lg text-[#1A1A1A] leading-tight"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ WILDLIFE ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Wildlife</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.9]">
                What moves here.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#1A1A1A]/12">
                {dest.wildlife.map((w, i) => (
                  <div key={w} className="bg-[#F2EDE3] p-5 md:p-6 text-center">
                    <span className="wp-display text-2xl text-[#9E4214]/25 block mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm md:text-base text-[#1A1A1A] leading-tight">{w}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ SUGGESTED JOURNEY ═════════════════════ */}
        {journey && (
          <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal>
                <p className="wp-script text-2xl text-[#E8854A] mb-3">Suggested journey</p>
                <h2 className="wp-display text-3xl md:text-5xl text-[#F2EDE3] leading-[0.9] mb-10">
                  See this on a journey.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Link
                  href={`/journeys/${journey.slug}`}
                  className="group grid md:grid-cols-12 gap-0 bg-[#2A2A2A] hover:bg-[#333] transition-colors duration-300 overflow-hidden"
                >
                  <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[340px] overflow-hidden">
                    <Image
                      src={journey.cardImage}
                      alt={journey.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#F2EDE3] px-3 py-1.5">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.2em] text-[#9E4214]">
                        {journey.duration}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <p className="wp-script text-lg text-[#E8854A] mb-2">{journey.travelStyle}</p>
                    <h3 className="wp-display text-3xl md:text-4xl text-[#F2EDE3] mb-4 leading-tight group-hover:text-[#E8854A] transition-colors">
                      {journey.name}
                    </h3>
                    <p className="text-[#F2EDE3]/75 leading-relaxed mb-6 max-w-md text-sm md:text-base">
                      {journey.tagline}
                    </p>
                    <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-[#F2EDE3]/70 font-mono">
                      <span>View journey</span>
                      <span className="flex-1 h-px bg-[#F2EDE3]/15" />
                      <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:text-[#E8854A] transition-all" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`/journeys/${journey.slug}`}
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
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ═════════════════════ OTHER DESTINATIONS ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Continue exploring</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.9]">
                Other destinations.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {otherDestinations.map((d, i) => (
                <ScrollReveal key={d.slug} delay={i * 0.06}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="group relative block aspect-[3/4] overflow-hidden bg-[#1A1A1A]"
                  >
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/15 to-transparent" />
                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-[#F2EDE3]">
                      <p className="wp-subhead text-[0.55rem] tracking-[0.22em] text-[#E8854A] mb-1">
                        {d.country}
                      </p>
                      <h3 className="wp-display text-base md:text-xl leading-[0.95] group-hover:text-[#E8854A] transition-colors">
                        {d.name}
                      </h3>
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
