import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Nav, Footer, SectionHeading } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { FIELD_NOTES } from '@/lib/field-notes';

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Short, honest guides from the Namibian road: seasons, light, packing, self-drive realities and responsible wildlife viewing.',
  alternates: { canonical: '/field-notes' },
};

export default function FieldNotesIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '320px' }}>
            <Photo
              base="deadvlei-trees-dune-shadow"
              alt="Deadvlei in soft light: bare trees on white clay beneath a red dune in shadow."
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
              <p className="wp-subhead text-[0.62rem] text-[#F2EDE3]/85 mb-4">Field notes</p>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95] max-w-[16ch]">
                What we have learned out there.
              </h1>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Guides, not brochures."
              intro="Seasonal advice, packing honesty and how the routes actually flow. Written by the people who plan the journeys."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {FIELD_NOTES.map((n) => (
                <Link key={n.slug} href={`/field-notes/${n.slug}`} className="group block">
                  <div className="wp-photo wp-img-reveal" style={{ aspectRatio: '4 / 3' }}>
                    <Photo
                      base={n.image}
                      alt={n.imageAlt}
                      aspect="4 / 3"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      reveal={false}
                      imgClassName="transition-transform duration-700 group-hover:scale-[1.02]"
                      className="h-full"
                    />
                  </div>
                  <p className="wp-subhead text-[0.55rem] text-[#9E4214] mt-4 mb-2">{n.category}</p>
                  <h2 className="wp-display text-xl md:text-2xl leading-tight group-hover:text-[#9E4214] transition-colors">
                    {n.title}
                  </h2>
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-2">{n.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#9E4214]">
                    Read the note
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
