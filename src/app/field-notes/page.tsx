import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, ContourLines, AcaciaMark, ScrollReveal } from '@/components/wildpath';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { PhotoImg } from '@/components/photo';
import { FIELD_NOTE_PHOTOS } from '@/lib/photo-groups';
import { NOTES } from './notes';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Destination inspiration and travel guidance for journeys through Namibia and Southern Africa. Editorial, not a brochure.',
  alternates: { canonical: '/field-notes' },
};

export default function FieldNotesPage() {
  const featured = NOTES[0];
  const rest = NOTES.slice(1);
  const featuredPhoto = FIELD_NOTE_PHOTOS[featured.slug];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Field Notes', url: '/field-notes' }]} />

      <main id="main-content" className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Field notes</p>
              <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
                Destination
                <br />
                <span className="text-[#9E4214]">inspiration.</span>
              </h1>
              <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                Short editorial guides for travelling well in Namibia and
                Southern Africa: when to go, what to pack, and what to expect.
                Written as destination inspiration, not as company history.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ FEATURED NOTE ═════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/field-notes/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-0 bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
            >
              <div className="relative aspect-[3/2] md:aspect-auto md:min-h-[400px] bg-[#1A1A1A] overflow-hidden">
                {featuredPhoto && (
                  <PhotoImg
                    id={featuredPhoto}
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="group-hover:brightness-110 transition-[filter] duration-[800ms] ease-out"
                  />
                )}
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold">
                  <span className="text-[#9E4214]">{featured.category}</span>
                </div>
                <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] mb-4 leading-[0.95] group-hover:text-[#9E4214] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-6 max-w-md">
                  {featured.excerpt}
                </p>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold flex items-center gap-2">
                  Read the note
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-[transform]" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ═════════════════════ GRID OF NOTES — 2-column varied ═════════════════════ */}
        <section className="pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="wp-display text-2xl md:text-4xl text-[#1A1A1A] leading-[0.9] mb-10">
              From the archive.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {rest.map((n) => {
                const photo = FIELD_NOTE_PHOTOS[n.slug];
                return (
                  <Link
                    key={n.slug}
                    href={`/field-notes/${n.slug}`}
                    className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[3/2] bg-[#1A1A1A] overflow-hidden">
                      {photo && (
                        <PhotoImg
                          id={photo}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="group-hover:brightness-110 transition-[filter] duration-[800ms] ease-out"
                        />
                      )}
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3 text-[0.6rem] tracking-[0.2em] uppercase font-bold">
                        <span className="text-[#9E4214]">{n.category}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#9E4214] transition-colors">
                        {n.title}
                      </h3>
                      <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                        {n.excerpt}
                      </p>
                      <p className="mt-4 text-[0.6rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold flex items-center gap-2">
                        Read the note
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-[transform]" />
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═════════════════════ EDITORIAL NOTE ═════════════════════ */}
        <section className="py-28 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-3xl mx-auto text-center">
            <AcaciaMark className="w-24 h-16 mx-auto text-[#9E4214]/40 mb-6" />
            <h2 className="wp-display text-2xl md:text-4xl text-[#1A1A1A] leading-[0.9] mb-4">
              Editorial, not a brochure.
            </h2>
            <p className="text-base text-[#1A1A1A]/75 leading-relaxed max-w-xl mx-auto mb-8">
              These field notes are written as destination inspiration — short,
              useful guides for travelling well in Namibia and Southern Africa.
              We publish when there is something worth publishing, not on a
              schedule. Have a question in the meantime?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors inline-flex items-center gap-3 justify-center"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors inline-flex items-center gap-3 justify-center"
              >
                Send an Enquiry
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-[transform]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
