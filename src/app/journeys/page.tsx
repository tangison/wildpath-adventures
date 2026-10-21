import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Nav, Footer, SectionHeading } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { JOURNEYS } from '@/lib/journeys';
import { JOURNEY_MEDIA } from '@/lib/journey-media';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Journeys',
  description:
    'Four flagship Namibian journeys: the full Classic Route, the river country of the Caprivi, the Central Corridor and the Desert Traverse. Slow travel, personally planned.',
  alternates: { canonical: '/journeys' },
};

export default function JourneysIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '320px' }}>
            <Photo
              base="dune-detail"
              alt="Ridges of red dune sea rolling to the horizon in the Namib."
              aspect="21 / 9"
              sizes="100vw"
              priority
              reveal={false}
              className="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140C06]/70 via-[#140C06]/35 to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-16 w-full">
              <p className="wp-subhead text-[0.62rem] text-[#F2EDE3]/85 mb-4">The journeys</p>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95] max-w-[16ch]">
                Four ways across the country.
              </h1>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Pick a shape."
              intro="Every route below is a starting point. Nights, lodges and pacing get tailored in the proposal."
            />
            <div className="space-y-6 md:space-y-10">
              {JOURNEYS.map((j) => {
                const media = JOURNEY_MEDIA[j.slug];
                return (
                  <Link
                    key={j.slug}
                    href={`/journeys/${j.slug}`}
                    className="group grid md:grid-cols-12 gap-5 md:gap-8 items-center border-b border-[#1A1A1A]/10 pb-8 md:pb-10"
                  >
                    <div className={`md:col-span-7 wp-photo wp-img-reveal ${j === JOURNEYS[1] ? 'md:order-2' : ''}`} style={{ aspectRatio: '16 / 9' }}>
                      <Photo
                        base={media?.card ?? j.cardImage}
                        alt={`${j.name}: ${j.tagline}`}
                        aspect="16 / 9"
                        sizes="(min-width: 768px) 58vw, 100vw"
                        reveal={false}
                        imgClassName="transition-transform duration-700 group-hover:scale-[1.015]"
                        className="h-full"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-3">
                        {j.duration} · {j.travelStyle} · {j.startPoint} to {j.endPoint}
                      </p>
                      <h2 className="wp-display text-3xl md:text-4xl leading-[0.95] mb-3 group-hover:text-[#9E4214] transition-colors">
                        {j.name}
                      </h2>
                      <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-4">
                        {j.tagline}
                      </p>
                      <p className="text-sm text-[#1A1A1A]/60 leading-relaxed mb-5">
                        Best for {j.bestFor.charAt(0).toLowerCase() + j.bestFor.slice(1)}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#9E4214]">
                        Open the journey
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 wp-reveal">
              <p className="text-base text-[#1A1A1A]/70 max-w-xl leading-relaxed">
                None of these fit? That is how most Wildpath journeys start.
                Bring us the shape of trip you have in mind and we will build
                it with you.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3"
              >
                Start the conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
