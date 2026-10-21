import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MessageCircle, ChevronLeft } from 'lucide-react';
import { Nav, Footer, SectionHeading } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { Gallery } from '@/components/lightbox';
import { DESTINATIONS, getDestination } from '@/lib/destinations';
import { DESTINATION_MEDIA } from '@/lib/journey-media';
import { SITE_URL, WHATSAPP_URL } from '@/lib/site';

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return { title: 'Destination not found' };
  return {
    title: dest.name,
    description: dest.overview.slice(0, 155),
    alternates: { canonical: `/destinations/${slug}` },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const media = DESTINATION_MEDIA[dest.slug];
  const hero = media?.hero ?? dest.image;
  const mosaic = media?.mosaic ?? [];
  const suggested = DESTINATIONS.find((d) => d.slug === dest.suggestedJourney);

  // ImageObject JSON-LD — tells search engines what the hero photo depicts.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}/images/places/${hero}-1920.webp`,
    name: dest.name,
    description: dest.overview.slice(0, 200),
    representativeOfPage: true,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <main id="main-content" className="flex-1">
        {/* Full-bleed hero */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '16 / 9', minHeight: '400px' }}>
            <Photo
              base={hero}
              alt={`${dest.name}, ${dest.country}. ${dest.shortLine}`}
              aspect="16 / 9"
              sizes="100vw"
              priority
              reveal={false}
              className="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140C06]/80 via-[#140C06]/25 to-[#140C06]/35" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-14 w-full">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#F2EDE3]/80 hover:text-[#F2EDE3] transition-colors mb-5"
              >
                <ChevronLeft size={14} /> All destinations
              </Link>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95] drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)]">
                {dest.name}
              </h1>
              <p className="mt-3 text-base md:text-xl text-[#F2EDE3]/90 max-w-2xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
                {dest.shortLine}
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-14 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto wp-reveal">
            <p className="wp-display text-2xl md:text-3xl leading-[1.25] text-[#1A1A1A]">
              {dest.overview}
            </p>
          </div>
        </section>

        {/* Mosaic gallery */}
        {mosaic.length > 0 && (
          <section className="pb-14 md:pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <Gallery images={mosaic.map((m) => ({ base: m.base, alt: m.alt, caption: m.alt }))} aspect="4 / 3" />
            </div>
          </section>
        )}

        {/* Details grid: best time, wildlife, landscape */}
        <section className="py-14 md:py-20 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-px bg-[#1A1A1A]/12">
            <div className="bg-[#F2EDE3] p-6 md:p-8 wp-reveal">
              <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-3">Best time</p>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{dest.bestTime}</p>
            </div>
            <div className="bg-[#F2EDE3] p-6 md:p-8 wp-reveal" data-reveal-delay="1">
              <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-3">Wildlife</p>
              <ul className="space-y-1.5">
                {dest.wildlife.map((w) => (
                  <li key={w} className="text-sm text-[#1A1A1A]/80">{w}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F2EDE3] p-6 md:p-8 wp-reveal" data-reveal-delay="2">
              <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-3">The land itself</p>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{dest.landscape}</p>
            </div>
          </div>

          {suggested && (
            <div className="max-w-7xl mx-auto mt-10 wp-reveal">
              <Link
                href={`/journeys/${suggested.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F2EDE3] border-l-2 border-[#C5511A] p-6 md:p-8 hover:bg-[#1A1A1A] transition-colors duration-300 wp-border"
              >
                <div>
                  <p className="wp-subhead text-[0.58rem] text-[#9E4214] mb-2 group-hover:text-[#E8854A] transition-colors">
                    Journey that goes here
                  </p>
                  <p className="wp-display text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#F2EDE3] transition-colors leading-none">
                    {suggested.name}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#9E4214] group-hover:text-[#E8854A] transition-colors shrink-0">
                  Open
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          )}
        </section>

        {/* Highlights + CTA */}
        <section className="py-16 md:py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto wp-reveal">
            <SectionHeading title="Why it stays with you." />
            <ul className="space-y-3 mb-10">
              {dest.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-base md:text-lg text-[#1A1A1A]/85 leading-relaxed">
                  <span className="text-[#C5511A] shrink-0 mt-0.5" aria-hidden="true">—</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                <MessageCircle size={15} />
                Ask about {dest.name}
              </a>
              <Link
                href="/contact"
                className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                Plan your journey
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
