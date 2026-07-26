import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, Wordmark, AcaciaMark, BirdFlock, ContourLines, ScrollReveal } from '@/components/wildpath';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Wildpath Adventures is a Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa.',
  alternates: { canonical: '/about' },
};

const STRENGTHS = [
  { name: 'Namibian ownership', desc: 'A Namibian-owned tour operator, based in Windhoek. We plan every journey from inside the country we travel in.' },
  { name: 'Tailor-made journeys', desc: 'Every itinerary is drafted around your dates, your pace, and the people travelling with you. No two journeys are the same.' },
  { name: 'Namibia and Southern Africa', desc: 'From the Namib desert to the Zambezi, from Etosha to Chobe and Victoria Falls — we plan across the region.' },
  { name: 'Self-drive and guided', desc: 'Choose self-drive with a thorough briefing, a guided vehicle, or a mix of both. We arrange what suits your route.' },
  { name: 'Personal planning', desc: 'We plan every itinerary personally — from the first enquiry to your return home. Accommodation arranged according to route and budget.' },
  { name: 'Responsible tourism', desc: 'We aim to work with responsible local partners and support travel practices that respect Namibia\'s wildlife, landscapes, and communities.' },
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
                Namibian-owned.
                <br />
                <span className="text-[#9E4214]">Personally planned.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                Wildpath Adventures is a Namibian-owned tour operator creating
                personalised travel experiences across Namibia and Southern
                Africa. Every itinerary is tailored around the landscapes,
                wildlife, and pace that make this part of Africa unforgettable.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ ATMOSPHERE ═════════════════════ */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full aspect-[16/7] md:aspect-[16/5] overflow-hidden">
              <Image
                src="/images/illustrations/v2/08-manifesto-atmosphere.webp"
                alt="Hand-drawn illustration of a lone acacia tree against the vast Namibian desert sky"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ═════════════════════ APPROACH ═════════════════════ */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.95] mb-10">
              Every route is
              <br />
              <span className="text-[#9E4214]">drafted around you.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-lg leading-relaxed text-[#1A1A1A]/80">
              <p>
                The four flagship routes on this site are starting points.
                Combine destinations, change the duration, add a guided section
                or a transfer. Depending on the journey, transport may include
                self-drive, guided road travel, transfers, or regional
                connections arranged on request.
              </p>
              <p>
                Accommodation is arranged according to route and budget, with
                full details confirmed in your personalised proposal. We
                support you from the first enquiry through to your return home
                — and we plan every itinerary personally.
              </p>
            </div>
          </div>
        </section>

        {/* ═════════════════════ CONTOUR DIVIDER ═════════════════════ */}
        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ STRENGTHS — editorial numbered list ═════════════════════ */}
        <section className="py-28 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-16">
              Six things we
              <br />
              <span className="text-[#9E4214]">do not compromise.</span>
            </h2>
            <div className="space-y-0">
              {STRENGTHS.map((v, i) => (
                <div
                  key={v.name}
                  className="grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr] gap-x-6 md:gap-x-10 py-8 md:py-10 border-b border-[#1A1A1A]/12 first:border-t"
                >
                  <span className="wp-display text-2xl md:text-3xl text-[#9E4214]/40 leading-none pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="wp-display text-xl md:text-2xl text-[#1A1A1A] mb-3 leading-tight">
                      {v.name}
                    </h3>
                    <p className="text-[#1A1A1A]/80 leading-relaxed text-sm md:text-base">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ RESPONSIBLE TOURISM ═════════════════════ */}
        <section className="py-36 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-5xl mx-auto">
            <BirdFlock className="w-32 h-8 text-[#E8854A]/50 mb-8" />
            <h2 className="wp-display text-4xl md:text-6xl leading-[0.9] mb-10">
              Respecting the
              <br />
              <span className="text-[#E8854A]">land we travel in.</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-[#F2EDE3]/80 leading-relaxed max-w-3xl">
              <p>
                We aim to work with responsible local partners and support
                travel practices that respect Namibia&apos;s wildlife, landscapes,
                and communities. Our journeys are shaped by local destination
                knowledge and trusted partners across the region.
              </p>
              <p>
                The way we plan routes, choose stops, and pace journeys is
                designed to leave room for the land — for the silence of the
                desert, the space of the pans, and the rhythms of the wildlife
                that live here year-round.
              </p>
              <p className="pt-4 text-sm text-[#F2EDE3]/60">
                Specific conservation partnerships, sustainability reporting,
                and certifications will be added here once confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* ═════════════════════ ACACIA DIVIDER ═════════════════════ */}
        <div className="py-6 flex justify-center">
          <AcaciaMark className="w-28 h-18 text-[#1A1A1A]/30" />
        </div>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-10">
              <Wordmark size="lg" />
            </div>
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
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-[transform]" />
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
      </main>

      <Footer />
    </div>
  );
}
