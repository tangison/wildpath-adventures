import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, AcaciaMark, ScrollReveal } from '@/components/wildpath';
import { BreadcrumbJsonLd } from '@/components/breadcrumb-jsonld';
import { PhotoImg } from '@/components/photo';
import { FIELD_NOTE_PHOTOS } from '@/lib/photo-groups';
import { NOTES } from '../notes';
import { WHATSAPP_URL } from '@/lib/site';

export function generateStaticParams() {
  return NOTES.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = NOTES.find((n) => n.slug === slug);
  if (!note) return { title: 'Field Note Not Found' };
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/field-notes/${note.slug}` },
  };
}

export default async function FieldNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = NOTES.find((n) => n.slug === slug);
  if (!note) notFound();

  const others = NOTES.filter((n) => n.slug !== note.slug).slice(0, 3);
  const heroPhoto = FIELD_NOTE_PHOTOS[note.slug];

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Field Notes', url: '/field-notes' },
          { name: note.title, url: `/field-notes/${note.slug}` },
        ]}
      />

      <main id="main-content" className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-10 md:pb-14">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Link
                href="/field-notes"
                className="text-[0.65rem] tracking-[0.22em] uppercase text-[#9E4214] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-2 mb-8"
              >
                <ArrowRight size={12} className="rotate-180" /> All field notes
              </Link>
              <p className="wp-script text-xl text-[#9E4214] mb-4">{note.category}</p>
              <h1 className="wp-display text-4xl md:text-6xl leading-[0.92] mb-6">{note.title}</h1>
              <p className="text-lg text-[#1A1A1A]/75 leading-relaxed max-w-2xl">{note.excerpt}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ HERO PHOTO ═════════════════════ */}
        {heroPhoto && (
          <section className="px-6 md:px-12 pb-16 md:pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[3/2] md:aspect-[16/8] overflow-hidden bg-[#1A1A1A]">
                <PhotoImg id={heroPhoto} fill loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 1152px" />
              </div>
            </div>
          </section>
        )}

        {/* ═════════════════════ BODY ═════════════════════ */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-3xl mx-auto space-y-10">
            {note.body.map((section, i) => (
              <ScrollReveal key={i}>
                <article>
                  {section.h && (
                    <h2 className="wp-display text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-4">
                      {section.h}
                    </h2>
                  )}
                  {section.p.map((para, j) => (
                    <p key={j} className="text-base md:text-[1.05rem] text-[#1A1A1A]/80 leading-[1.75] mb-4">
                      {para}
                    </p>
                  ))}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-20 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-3xl mx-auto text-center">
            <AcaciaMark className="w-20 h-14 mx-auto text-[#E8854A]/60 mb-6" />
            <h2 className="wp-display text-3xl md:text-4xl leading-[0.95] mb-5">
              Planning this in real life?
            </h2>
            <p className="text-[#F2EDE3]/75 leading-relaxed mb-8 max-w-xl mx-auto">
              We build journeys around your dates, your pace, and the
              seasons described here. Tell us where you want to be and when.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group bg-[#C5511A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
              >
                Start planning
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-[transform]" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#F2EDE3]/40 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
              >
                <MessageCircle size={15} />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ═════════════════════ MORE NOTES ═════════════════════ */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="wp-display text-3xl md:text-4xl leading-[0.9] mb-10">Keep reading.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((other) => {
                const otherPhoto = FIELD_NOTE_PHOTOS[other.slug];
                return (
                  <Link
                    key={other.slug}
                    href={`/field-notes/${other.slug}`}
                    className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
                  >
                    {otherPhoto && (
                      <div className="relative aspect-[3/2] bg-[#1A1A1A] overflow-hidden">
                        <PhotoImg
                          id={otherPhoto}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="group-hover:brightness-110 transition-[filter] duration-[800ms] ease-out"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.2em] text-[#9E4214] mb-2">
                        {other.category}
                      </p>
                      <h3 className="wp-display text-lg leading-tight group-hover:text-[#9E4214] transition-colors">
                        {other.title}
                      </h3>
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
