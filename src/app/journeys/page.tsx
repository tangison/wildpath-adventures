import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, ContourLines, AcaciaMark, ScrollReveal } from '@/components/wildpath';
import { JOURNEYS } from '@/lib/journeys';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Journeys',
  description:
    'Four flagship expeditions through Namibia and Southern Africa. Self-drive, guided, and private departures. Tailored around the land, not the brochure.',
};

export default function JourneysPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Choose your journey</p>
              <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
                Routes drawn by geology,
                <br />
                <span className="text-[#9E4214]">not by tourism.</span>
              </h1>
              <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                Four flagship expeditions. Each one a complete arc — the red south,
                the central corridor, the rivers of the Caprivi, or the classic loop.
                Every itinerary is drafted around the people on it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ ALL JOURNEYS ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12 md:space-y-20">
              {JOURNEYS.map((j, i) => (
                <ScrollReveal key={j.slug} delay={i * 0.05}>
                  <Link
                    href={`/journeys/${j.slug}`}
                    className={`group grid md:grid-cols-12 gap-0 bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 ${
                      i % 2 === 1 ? 'md:[direction:rtl]' : ''
                    }`}
                  >
                    <div className="relative md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[420px] bg-[#1A1A1A] overflow-hidden [direction:ltr]">
                      <Image
                        src={j.heroImage}
                        alt={`${j.name} — ${j.route.map(r => r.name).join(', ')}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-[#F2EDE3] px-3 py-1.5">
                        <p className="wp-subhead text-[0.6rem] tracking-[0.2em] text-[#9E4214]">
                          {j.duration}
                        </p>
                      </div>
                    </div>
                    <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center [direction:ltr]">
                      <p className="wp-script text-xl text-[#9E4214] mb-2">{j.travelStyle}</p>
                      <h2 className="wp-display text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 leading-[0.95] group-hover:text-[#9E4214] transition-colors">
                        {j.name}
                      </h2>
                      <p className="text-[#1A1A1A]/80 leading-relaxed mb-6 max-w-md text-sm md:text-base">
                        {j.tagline}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                        {j.highlights.slice(0, 4).map((h) => (
                          <span
                            key={h}
                            className="text-[0.65rem] tracking-[0.12em] uppercase text-[#1A1A1A]/65 font-bold flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C5511A]" />
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase text-[#1A1A1A]/70 font-mono">
                        <span>{j.startPoint} → {j.endPoint}</span>
                        <span className="flex-1 h-px bg-[#1A1A1A]/15" />
                        <ArrowRight size={14} className="group-hover:translate-x-1 group-hover:text-[#9E4214] transition-all" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Custom journey CTA */}
            <ScrollReveal delay={0.2} className="mt-20 md:mt-32">
              <div className="bg-[#1A1A1A] text-[#F2EDE3] p-10 md:p-16 text-center">
                <AcaciaMark className="w-20 h-14 mx-auto text-[#E8854A]/60 mb-6" />
                <p className="wp-script text-2xl text-[#E8854A] mb-4">Don&apos;t see your route?</p>
                <h2 className="wp-display text-3xl md:text-5xl leading-[0.95] mb-6">
                  We tailor every journey.
                </h2>
                <p className="text-base md:text-lg text-[#F2EDE3]/75 max-w-xl mx-auto leading-relaxed mb-8">
                  Combine destinations. Add a charter. Walk further. Stay longer.
                  Every itinerary above is a starting point — not a fixed route.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="group bg-[#C5511A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
                  >
                    Request a Custom Journey
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
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
