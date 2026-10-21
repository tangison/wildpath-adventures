import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Nav, Footer, SectionHeading } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { DESTINATIONS } from '@/lib/destinations';
import { DESTINATION_MEDIA } from '@/lib/journey-media';

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Nine landscapes across Namibia and Southern Africa: Sossusvlei, Etosha, Damaraland, the Skeleton Coast, the Kalahari, the Caprivi rivers, Chobe and Victoria Falls.',
  alternates: { canonical: '/destinations' },
};

export default function DestinationsIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '320px' }}>
            <Photo
              base="sossusvlei-2"
              alt="A walker on a dune crest high above the Namib sand sea."
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
              <p className="wp-subhead text-[0.62rem] text-[#F2EDE3]/85 mb-4">Destinations</p>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95] max-w-[16ch]">
                Nine landscapes, each its own country.
              </h1>
            </div>
          </div>
        </section>

        {/* Cards — large image led */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="See them first."
              intro="Every destination page is a photograph of the place itself, then the short version of why it matters."
            />
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {DESTINATIONS.map((d) => {
                const media = DESTINATION_MEDIA[d.slug];
                return (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className={`group relative block wp-photo wp-img-reveal ${d.slug === 'namibia' ? 'md:col-span-2' : ''}`}
                    style={{ aspectRatio: d.slug === 'namibia' ? '21 / 9' : '3 / 2' }}
                  >
                    <Photo
                      base={media?.hero ?? d.image}
                      alt={media?.mosaic[0]?.alt ?? `${d.name}: ${d.shortLine}`}
                      aspect={d.slug === 'namibia' ? '21 / 9' : '3 / 2'}
                      sizes={d.slug === 'namibia' ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
                      reveal={false}
                      imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
                      className="h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140C06]/80 via-[#140C06]/20 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                      <h2 className="wp-display text-2xl md:text-4xl text-[#F2EDE3] leading-none mb-2">
                        {d.name}
                      </h2>
                      <p className="text-sm md:text-base text-[#F2EDE3]/80 leading-snug max-w-md">
                        {d.shortLine}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#E8854A]">
                        Open the guide
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
