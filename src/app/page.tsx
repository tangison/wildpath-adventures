import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  Nav,
  Footer,
  BirdFlock,
  SectionHeading,
} from '@/components/wildpath';
import { HeroVideo } from '@/components/hero-video';
import { Gallery } from '@/components/lightbox';
import { Photo } from '@/components/photo';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';
import { HOME_MOSAIC, HOME_GALLERY, CTA_PHOTO } from '@/lib/journey-media';
import { SITE, WHATSAPP_URL } from '@/lib/site';
import { FIELD_NOTES } from '@/lib/field-notes';

// ═══════════════════════════════════════════════════════════
// WILDPATH ADVENTURES — HOME (image-first rebuild)
// Full-bleed video hero, photo-led journey cards, destination
// mosaic, field-notes strip, lightbox gallery, photo CTA.
//
// Copy rules (Tangison house style): no em dashes, no exclamation
// points, no invented claims. Every claim traceable to
// src/lib/journeys.ts, src/lib/destinations.ts or the client brief.
// ═══════════════════════════════════════════════════════════

export default function Home() {
  const featured = DESTINATIONS.filter((d) => d.slug !== 'namibia').slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main id="main-content" className="flex-1">
        {/* ═══════════ HERO — full-bleed video loop ═══════════ */}
        <section className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
          <HeroVideo posterAlt="A sandy four-by-four track winding through red Sossusvlei dunes and camelthorn trees." />

          <div className="relative z-10 px-6 md:px-12 pb-14 md:pb-20 pt-40">
            <div className="max-w-7xl mx-auto">
              <p className="wp-subhead text-[0.62rem] md:text-xs text-[#F2EDE3]/90 mb-6">
                Wildpath Adventures · Windhoek, Namibia
              </p>

              <h1 className="wp-display text-[clamp(2.6rem,8.5vw,8.5rem)] leading-[0.92] text-[#F2EDE3] max-w-[14ch] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
                Slow down. Breathe.{' '}
                <em className="font-serif italic font-light text-[#E8854A]">Discover</em>{' '}
                Namibia<span className="text-[#E8854A]">.</span>
              </h1>

              <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-6 items-end">
                <p className="md:col-span-5 text-base md:text-lg text-[#F2EDE3]/90 leading-relaxed max-w-md drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                  Personalised journeys across Namibia and Southern Africa,
                  planned by a Namibian team that knows the land. Self-drive,
                  guided, or a mix of both.
                </p>
                <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
                  <Link
                    href="/journeys"
                    className="group bg-[#F2EDE3] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                  >
                    Explore the journeys
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-[#F2EDE3]/60 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                  >
                    <MessageCircle size={15} />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ INTRO — one short editorial beat ═══════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto wp-reveal">
            <p className="wp-display text-2xl md:text-4xl leading-[1.15] text-[#1A1A1A]">
              Namibia is a country of long distances and bigger silences.
              We plan journeys that give it room to speak: red dunes at
              sunrise, cold Atlantic fog, a waterhole at dusk with your
              breath held. <span className="text-[#9E4214]">Slow travel,
              done properly.</span>
            </p>
            <BirdFlock className="w-40 h-12 text-[#9E4214]/40 mt-8" />
          </div>
        </section>

        {/* ═══════════ JOURNEYS — image-led cards ═══════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Four journeys,"
              highlight="one country deep."
              intro="Each route is built around real nights in real places. Pick the shape of trip that fits, then we tailor it around you."
            />

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {JOURNEYS.map((j, i) => (
                <Link
                  key={j.slug}
                  href={`/journeys/${j.slug}`}
                  className="group relative block wp-photo wp-img-reveal"
                  style={{ aspectRatio: i === 0 ? '16 / 10' : '16 / 10' }}
                >
                  <Photo
                    base={j.cardImage}
                    alt={`${j.name}: ${j.tagline}`}
                    aspect="16 / 10"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i === 0}
                    reveal={false}
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
                    className="h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140C06]/85 via-[#140C06]/25 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="wp-subhead text-[0.58rem] text-[#E8854A] mb-2">
                      {j.duration} · {j.travelStyle}
                    </p>
                    <h3 className="wp-display text-2xl md:text-4xl text-[#F2EDE3] leading-[0.95] mb-2">
                      {j.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#F2EDE3]/80 leading-relaxed max-w-md hidden md:block">
                      {j.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#F2EDE3]">
                      View the route
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ DESTINATION MOSAIC ═══════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="The places themselves."
              intro="Dunes, pans, rivers, wrecks and falls. Every destination page is built from photographs of the place itself."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {featured.map((d, i) => {
                const mosaic = HOME_MOSAIC[i];
                return (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className={`group relative block wp-photo wp-img-reveal ${
                      i === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                    style={{ aspectRatio: i === 0 ? '1 / 1' : '2 / 3' }}
                  >
                    {mosaic && (
                      <Photo
                        base={mosaic.base}
                        alt={mosaic.alt}
                        aspect={i === 0 ? '1 / 1' : '2 / 3'}
                        sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                        reveal={false}
                        imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
                        className="h-full"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140C06]/80 via-transparent to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <h3 className="wp-display text-lg md:text-2xl text-[#F2EDE3] leading-none">
                        {d.name}
                      </h3>
                      <p className="text-[0.7rem] text-[#F2EDE3]/70 mt-1 hidden md:block leading-snug">
                        {d.shortLine}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8">
              <Link
                href="/destinations"
                className="group inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase text-[#9E4214] hover:text-[#1A1A1A] transition-colors"
              >
                All destinations
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ FIELD NOTES — photo strip ═══════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Field notes."
              intro="Short, honest guides from the road: seasons, light, packing, and what to expect."
            />
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {FIELD_NOTES.map((n, i) => (
                <Link
                  key={n.slug}
                  href={`/field-notes/${n.slug}`}
                  className="group block"
                >
                  <div className="wp-photo wp-img-reveal" style={{ aspectRatio: '4 / 3' }}>
                    <Photo
                      base={n.image}
                      alt={n.imageAlt}
                      aspect="4 / 3"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      reveal={false}
                      imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
                      className="h-full"
                    />
                  </div>
                  <p className="wp-subhead text-[0.55rem] text-[#9E4214] mt-4 mb-2">
                    {n.category}
                  </p>
                  <h3 className="wp-display text-xl md:text-2xl text-[#1A1A1A] leading-tight group-hover:text-[#9E4214] transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-2">
                    {n.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ GALLERY — lightbox strip ═══════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Postcards,"
              highlight="uncaptioned."
              intro="Tap any frame to open it full-size. Then imagine the smell of the rain on the red sand."
            />
            <Gallery
              images={HOME_GALLERY.map((g) => ({
                base: g.base,
                alt: g.alt,
                caption: g.alt,
              }))}
              aspect="4 / 5"
            />
          </div>
        </section>

        {/* ═══════════ CTA — full-width photo ═══════════ */}
        <section className="relative overflow-hidden">
          <div className="wp-photo wp-parallax" style={{ aspectRatio: '21 / 9' }}>
            <Photo
              base={CTA_PHOTO.base}
              alt={CTA_PHOTO.alt}
              aspect="21 / 9"
              sizes="100vw"
              reveal={false}
              className="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140C06]/75 via-[#140C06]/45 to-[#140C06]/20" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-xl wp-reveal">
                <h2 className="wp-display text-3xl md:text-6xl text-[#F2EDE3] leading-[0.95]">
                  Your route starts with a conversation.
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#F2EDE3]/85 leading-relaxed">
                  Tell us how you travel. We answer with a plan, honestly priced,
                  and built for the season you are going.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group bg-[#F2EDE3] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                  >
                    Plan your journey
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="border border-[#F2EDE3]/60 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
