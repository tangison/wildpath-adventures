import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, Wordmark, AcaciaMark, BirdFlock, ContourLines, ScrollReveal } from '@/components/wildpath';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Wildpath Adventures creates thoughtfully planned journeys across Namibia and Southern Africa. Tailored around the landscapes, wildlife and pace that make this part of Africa unforgettable.',
};

const VALUES = [
  { name: 'Namibian roots', desc: 'Every guide is Namibian. Every route is drawn here. We are not headquartered in London or New York.' },
  { name: 'Slow travel', desc: 'We do not do fourteen parks in seven days. We do one landscape deeply, then move. Pace is the point.' },
  { name: 'Tailored, not templated', desc: 'No two journeys are the same. Every itinerary is drafted around the people on it, the season, and the land.' },
  { name: 'Real conservation', desc: 'A percentage of every journey funds Save the Rhino Trust and the Namibian Desert Lion Project. Carbon logged, not offset.' },
  { name: 'Local communities', desc: 'We hire from Damaraland, from the Kunene, from Windhoek. Our supply chain is 90% Namibian.' },
  { name: '24-hour line', desc: 'When you travel with us, you have a direct line — to your guide, to our ops team, to the person who planned your route.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">About Wildpath</p>
              <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
                We locate
                <br />
                <span className="text-[#9E4214]">experiences.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                Wildpath Adventures creates thoughtfully planned journeys across
                Namibia and Southern Africa. Every itinerary is tailored around the
                landscapes, wildlife and pace that make this part of Africa
                unforgettable.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ ATMOSPHERE ═════════════════════ */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="relative w-full aspect-[16/7] md:aspect-[16/5] overflow-hidden">
                <Image
                  src="/images/illustrations/v2/08-manifesto-atmosphere.webp"
                  alt="Hand-drawn illustration of a lone acacia tree against the vast Namibian desert sky"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ PHILOSOPHY ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Our philosophy</p>
              <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.95] mb-10">
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
        </section>

        {/* ═════════════════════ CONTOUR DIVIDER ═════════════════════ */}
        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ VALUES ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-16">
              <p className="wp-script text-2xl text-[#9E4214] mb-3">What we stand on</p>
              <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
                Six things we
                <br />
                <span className="text-[#9E4214]">do not compromise.</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/12">
              {VALUES.map((v, i) => (
                <ScrollReveal key={v.name} delay={i * 0.05}>
                  <div className="bg-[#F2EDE3] p-8 md:p-10 h-full">
                    <span className="wp-display text-3xl text-[#9E4214]/30 block mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="wp-display text-xl md:text-2xl text-[#1A1A1A] mb-4 leading-tight">
                      {v.name}
                    </h3>
                    <p className="text-[#1A1A1A]/80 leading-relaxed text-sm">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ CONSERVATION LEDGER ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <BirdFlock className="w-32 h-8 text-[#E8854A]/50 mb-8" />
              <p className="wp-script text-2xl text-[#E8854A] mb-3">Conservation ledger</p>
              <h2 className="wp-display text-4xl md:text-6xl leading-[0.9] mb-10">
                Carbon logged,
                <br />
                <span className="text-[#E8854A]">not offset.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="space-y-6 text-base md:text-lg text-[#F2EDE3]/80 leading-relaxed max-w-3xl">
                <p>
                  Every Wildpath journey is logged against the land. We measure
                  fuel, distance, and footprint. We do not buy offsets. Instead, a
                  percentage of every journey goes directly to two organisations
                  that work where we work:
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="border-l-2 border-[#C5511A] pl-5">
                    <h3 className="wp-display text-lg text-[#F2EDE3] mb-2">Save the Rhino Trust</h3>
                    <p className="text-sm text-[#F2EDE3]/70 leading-relaxed">
                      Protecting the last free-ranging black rhino population on
                      earth, in the wilds of Damaraland.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#C5511A] pl-5">
                    <h3 className="wp-display text-lg text-[#F2EDE3] mb-2">Desert Lion Project</h3>
                    <p className="text-sm text-[#F2EDE3]/70 leading-relaxed">
                      Tracking and protecting the desert-adapted lions of the
                      Skeleton Coast and Kunene region.
                    </p>
                  </div>
                </div>
                <p className="pt-4 text-sm text-[#F2EDE3]/60">
                  A full carbon log — vehicle fuel, charter flight hours, lodge
                  energy — is published annually. We do not promise zero. We
                  promise transparency.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ ACACIA DIVIDER ═════════════════════ */}
        <div className="py-6 flex justify-center">
          <AcaciaMark className="w-28 h-18 text-[#1A1A1A]/30" />
        </div>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12">
          <ScrollReveal className="max-w-7xl mx-auto text-center">
            <div className="mb-10">
              <Wordmark size="lg" />
            </div>
            <p className="wp-script text-3xl text-[#9E4214] mb-4">Travel with us</p>
            <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9] mb-8">
              Every route starts
              <br />
              <span className="text-[#9E4214]">with a conversation.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/journeys"
                className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                See the Journeys
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
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
