import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Nav, Footer, ContourLines, ScrollReveal } from '@/components/wildpath';
import { DESTINATIONS } from '@/lib/destinations';

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Nine landscapes across Namibia and Southern Africa — from the oldest desert on earth to the smoke that thunders. Image-led. Editorial. Real.',
};

export default function DestinationsPage() {
  // Group destinations: Namibia first, then neighbouring countries
  const namibia = DESTINATIONS.filter((d) => d.country === 'Namibia');
  const neighbours = DESTINATIONS.filter((d) => d.country !== 'Namibia');

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Where we roam</p>
              <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
                Nine landscapes.
                <br />
                <span className="text-[#9E4214]">One region.</span>
              </h1>
              <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                From the oldest desert on earth to the smoke that thunders.
                Each destination is a different way of being in southern Africa.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ NAMIBIA ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="wp-subhead text-xs text-[#9E4214] mb-2">Namibia</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.9]">
                The home country.
              </h2>
            </ScrollReveal>

            {/* Featured large card for Namibia itself */}
            <ScrollReveal delay={0.1} className="mb-8">
              <Link
                href={`/destinations/namibia`}
                className="group relative block aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#1A1A1A]"
              >
                <Image
                  src={namibia[0].image}
                  alt={`${namibia[0].name} — ${namibia[0].country}`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/30 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end text-[#F2EDE3]">
                  <p className="wp-subhead text-[0.65rem] tracking-[0.22em] text-[#E8854A] mb-3">
                    {namibia[0].country}
                  </p>
                  <h3 className="wp-display text-4xl md:text-7xl leading-[0.9] mb-4">
                    {namibia[0].name}
                  </h3>
                  <p className="text-base md:text-lg text-[#F2EDE3]/85 max-w-xl leading-relaxed">
                    {namibia[0].shortLine}
                  </p>
                  <p className="mt-6 text-[0.65rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                    Explore
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </Link>
            </ScrollReveal>

            {/* Grid of other Namibian destinations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {namibia.slice(1).map((d, i) => (
                <ScrollReveal key={d.slug} delay={i * 0.06}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="group relative block aspect-[4/5] overflow-hidden bg-[#1A1A1A]"
                  >
                    <Image
                      src={d.image}
                      alt={`${d.name} — ${d.country}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/15 to-transparent" />
                    <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end text-[#F2EDE3]">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#E8854A] mb-1.5">
                        {d.country}
                      </p>
                      <h3 className="wp-display text-2xl md:text-3xl leading-[0.95] mb-2">
                        {d.name}
                      </h3>
                      <p className="text-sm text-[#F2EDE3]/85 leading-relaxed line-clamp-2">
                        {d.shortLine}
                      </p>
                      <p className="mt-4 text-[0.6rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                        Explore
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ NEIGHBOURS ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="wp-subhead text-xs text-[#9E4214] mb-2">Beyond Namibia</p>
              <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] leading-[0.9]">
                Across the borders.
              </h2>
              <p className="mt-4 text-base text-[#1A1A1A]/70 max-w-xl leading-relaxed">
                The Caprivi route continues east — into Botswana, Zimbabwe, and
                Zambia. Different countries, the same river.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {neighbours.map((d, i) => (
                <ScrollReveal key={d.slug} delay={i * 0.06}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="group relative block aspect-[4/5] overflow-hidden bg-[#1A1A1A]"
                  >
                    <Image
                      src={d.image}
                      alt={`${d.name} — ${d.country}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/15 to-transparent" />
                    <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end text-[#F2EDE3]">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#E8854A] mb-1.5">
                        {d.country}
                      </p>
                      <h3 className="wp-display text-2xl md:text-3xl leading-[0.95] mb-2">
                        {d.name}
                      </h3>
                      <p className="text-sm text-[#F2EDE3]/85 leading-relaxed line-clamp-2">
                        {d.shortLine}
                      </p>
                      <p className="mt-4 text-[0.6rem] tracking-[0.22em] uppercase text-[#E8854A] flex items-center gap-2">
                        Explore
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
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
