import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { Nav, Footer } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { ARTICLES, FIELD_NOTES, getFieldNote } from '@/lib/field-notes';
import { WHATSAPP_URL } from '@/lib/site';

export function generateStaticParams() {
  return FIELD_NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) return { title: 'Article not found' };
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/field-notes/${slug}` },
  };
}

export default async function FieldNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getFieldNote(slug);
  if (!note) notFound();

  const others = FIELD_NOTES.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '300px' }}>
            <Photo
              base={note.image}
              alt={note.imageAlt}
              aspect="21 / 9"
              sizes="100vw"
              priority
              reveal={false}
              className="h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140C06]/75 via-[#140C06]/40 to-transparent" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl mx-auto px-6 md:px-12 pb-10 md:pb-14 w-full">
              <Link
                href="/field-notes"
                className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#F2EDE3]/80 hover:text-[#F2EDE3] transition-colors mb-5"
              >
                <ChevronLeft size={14} /> Field notes
              </Link>
              <p className="wp-subhead text-[0.58rem] text-[#E8854A] mb-3">
                {note.category} · {note.readingTime}
              </p>
              <h1 className="wp-display text-3xl md:text-6xl text-[#F2EDE3] leading-[0.98]">
                {note.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-14 md:py-20 px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            {note.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="wp-display text-2xl md:text-3xl text-[#1A1A1A] mt-12 mb-4 wp-reveal">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'photo') {
                return (
                  <figure key={i} className="my-10 wp-img-reveal">
                    <div className="wp-photo" style={{ aspectRatio: '3 / 2' }}>
                      <Photo
                        base={block.base}
                        alt={block.alt}
                        aspect="3 / 2"
                        sizes="(min-width: 42rem) 42rem, 100vw"
                        reveal={false}
                        className="h-full"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-3 text-xs text-[#1A1A1A]/60 leading-relaxed">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              return (
                <p key={i} className="wp-reveal text-base md:text-lg text-[#1A1A1A]/85 leading-[1.8] mb-6">
                  {block.text}
                </p>
              );
            })}

            {/* Article CTA */}
            <div className="mt-14 pt-10 border-t border-[#1A1A1A]/15 wp-reveal">
              <p className="wp-display text-2xl md:text-3xl leading-tight mb-4">
                Want this built into a route?
              </p>
              <p className="text-base text-[#1A1A1A]/70 leading-relaxed mb-6">
                Every journey we plan is shaped around the season, the pace and
                the places in these notes. Tell us your dates and we will do the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Plan your journey
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* More notes */}
        <section className="py-14 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <h2 className="wp-display text-2xl md:text-3xl mb-8">More field notes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((n) => (
                <Link key={n.slug} href={`/field-notes/${n.slug}`} className="group block">
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
                  <h3 className="wp-display text-lg mt-3 leading-tight group-hover:text-[#9E4214] transition-colors">
                    {n.title}
                  </h3>
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
