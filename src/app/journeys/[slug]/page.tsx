import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle, ChevronLeft } from 'lucide-react';
import {
  Nav,
  Footer,
  JourneySnapshot,
  JourneyRouteTimeline,
} from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { Gallery } from '@/components/lightbox';
import { getJourney, JOURNEYS } from '@/lib/journeys';
import { JOURNEY_MEDIA } from '@/lib/journey-media';
import { SITE, SITE_URL, WHATSAPP_URL } from '@/lib/site';

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return { title: 'Journey not found' };
  return {
    title: journey.name,
    description: journey.overview.slice(0, 155),
    alternates: { canonical: `/journeys/${journey.slug}` },
    openGraph: {
      title: `${journey.name} · ${SITE.name}`,
      description: journey.tagline,
      images: [{ url: `/images/social/og-master.webp`, width: 1200, height: 630 }],
    },
  };
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  const media = JOURNEY_MEDIA[journey.slug];
  const timeline = media?.timeline ?? {};
  const gallery = media?.gallery ?? [];

  // TouristTrip JSON-LD — structured data for the journey as a tourist trip.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: journey.name,
    description: journey.overview,
    url: `${SITE_URL}/journeys/${journey.slug}`,
    touristType: journey.bestFor,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: journey.route.length,
      itemListElement: journey.route.map((stop, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'TouristAttraction',
          name: stop.name,
          description: stop.description,
        },
      })),
    },
    provider: {
      '@type': 'TravelAgency',
      name: SITE.name,
      url: SITE_URL,
      email: SITE.email,
      telephone: SITE.phone,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <main id="main-content" className="flex-1">
        {/* Full-bleed photo hero */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '16 / 9', minHeight: '380px' }}>
            <Photo
              base={media?.hero ?? journey.heroImage}
              alt={`${journey.name} journeys through ${journey.route[1]?.name ?? 'Namibia'}. ${journey.tagline}`}
              aspect="16 / 9"
              sizes="100vw"
              priority
              reveal={false}
              className="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140C06]/75 via-[#140C06]/20 to-[#140C06]/40" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-14 w-full">
              <Link
                href="/journeys"
                className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#F2EDE3]/80 hover:text-[#F2EDE3] transition-colors mb-5"
              >
                <ChevronLeft size={14} /> All journeys
              </Link>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95] max-w-[18ch] drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)]">
                {journey.name}
              </h1>
              <p className="mt-4 text-base md:text-lg text-[#F2EDE3]/90 max-w-2xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
                {journey.tagline}
              </p>
            </div>
          </div>
        </section>

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

        {/* Overview — editorial beat */}
        <section className="py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto wp-reveal">
            <p className="wp-subhead text-[0.62rem] text-[#9E4214] mb-4">In brief</p>
            <p className="wp-display text-2xl md:text-3xl leading-[1.2] text-[#1A1A1A]">
              {journey.overview}
            </p>
          </div>
        </section>

        {/* Image-led route timeline */}
        <div className="bg-[#E8E3D5]">
          <JourneyRouteTimeline route={journey.route} photos={timeline} />
        </div>

        {/* Closing gallery */}
        {gallery.length > 0 && (
          <section className="py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="wp-display text-3xl md:text-5xl leading-[0.95] mb-8 wp-reveal">
                Scenes from <span className="text-[#9E4214]">this route.</span>
              </h2>
              <Gallery
                images={gallery.map((g) => ({ base: g.base, alt: g.alt, caption: g.alt }))}
                aspect="4 / 5"
              />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto text-center wp-reveal">
            <h2 className="wp-display text-3xl md:text-5xl text-[#F2EDE3] leading-[0.95]">
              Travel this route <em className="font-serif italic font-light text-[#E8854A]">your</em> way.
            </h2>
            <p className="mt-4 text-base text-[#F2EDE3]/75 max-w-xl mx-auto leading-relaxed">
              {journey.availability} The exact nights, lodges and pacing are
              shaped around you in the proposal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group bg-[#F2EDE3] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                Request this journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2EDE3]/50 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                <MessageCircle size={15} />
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
