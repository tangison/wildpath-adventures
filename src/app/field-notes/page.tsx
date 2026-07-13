import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, ContourLines, AcaciaMark, ScrollReveal } from '@/components/wildpath';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Destination inspiration and travel guidance for journeys through Namibia and Southern Africa. Editorial, not a brochure.',
  alternates: { canonical: '/field-notes' },
};

// Field Notes are clearly editorial destination guides.
// No invented staff experiences. No implied company history.
// No named personnel. No fictional journeys presented as fact.
const NOTES = [
  {
    slug: 'when-to-visit-sossusvlei',
    title: 'When to visit Sossusvlei',
    excerpt:
      'The dunes change character with the seasons. A short guide to light, temperature, and the best months for photography.',
    category: 'Destination guide',
    image: '/images/illustrations/v2/10-note-early-light.webp',
  },
  {
    slug: 'etosha-dry-and-wet-seasons',
    title: 'Etosha in the dry and wet seasons',
    excerpt:
      'How wildlife viewing shifts between the dry winter months and the greener, quieter summer — and what each season rewards.',
    category: 'Destination guide',
    image: '/images/illustrations/v2/12-note-desert-elephants.webp',
  },
  {
    slug: 'packing-for-namibia',
    title: 'Packing for Namibia',
    excerpt:
      'Neutral colours, layers for cold mornings and hot middays, soft bags for charter flights, and the small things that matter.',
    category: 'Travel preparation',
    image: '/images/illustrations/v2/11-note-ancient-paths.webp',
  },
  {
    slug: 'self-drive-namibia',
    title: 'What to expect on a Namibian self-drive journey',
    excerpt:
      'Distances, road conditions, and the rhythm of a self-drive route. A practical introduction for first-time visitors.',
    category: 'Travel preparation',
    image: '/images/illustrations/v2/08-manifesto-atmosphere.webp',
  },
  {
    slug: 'responsible-wildlife-viewing',
    title: 'Responsible wildlife viewing',
    excerpt:
      'How to watch wildlife well — distance, patience, and the habits that keep both animals and visitors safe.',
    category: 'Travel preparation',
    image: '/images/illustrations/v2/03-showcase.webp',
  },
  {
    slug: 'zambezi-region-route',
    title: 'Planning a route through the Zambezi Region',
    excerpt:
      'The Caprivi Strip rewoven — rivers, parks, and the practical logistics of travelling Namibia’s wet north-east.',
    category: 'Destination guide',
    image: '/images/illustrations/v2/06-card-charters.webp',
  },
];

export default function FieldNotesPage() {
  const featured = NOTES[0];
  const rest = NOTES.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
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
                Southern Africa — when to go, what to pack, and what to expect.
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
            <ScrollReveal>
              <div className="group grid md:grid-cols-2 gap-0 bg-[#E8E3D5] overflow-hidden">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-[#1A1A1A] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={`Illustration for: ${featured.title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold">
                    <span className="text-[#9E4214]">{featured.category}</span>
                  </div>
                  <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] mb-4 leading-[0.95]">
                    {featured.title}
                  </h2>
                  <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-6 max-w-md">
                    {featured.excerpt}
                  </p>
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold flex items-center gap-2">
                    Coming soon
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ GRID OF NOTES ═════════════════════ */}
        <section className="pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-10">
              <p className="wp-subhead text-xs text-[#9E4214] mb-2">More field notes</p>
              <h2 className="wp-display text-2xl md:text-4xl text-[#1A1A1A] leading-[0.9]">
                From the archive.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {rest.map((n, i) => (
                <ScrollReveal key={n.slug} delay={i * 0.06}>
                  <div className="group block bg-[#E8E3D5] overflow-hidden">
                    <div className="relative aspect-[16/10] bg-[#1A1A1A] overflow-hidden">
                      <Image
                        src={n.image}
                        alt={`Illustration for: ${n.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3 text-[0.6rem] tracking-[0.2em] uppercase font-bold">
                        <span className="text-[#9E4214]">{n.category}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight">
                        {n.title}
                      </h3>
                      <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                        {n.excerpt}
                      </p>
                      <p className="mt-4 text-[0.6rem] tracking-[0.18em] uppercase text-[#1A1A1A]/50 font-bold">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ EDITORIAL NOTE ═════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <AcaciaMark className="w-24 h-16 mx-auto text-[#9E4214]/40 mb-6" />
              <p className="wp-script text-2xl text-[#9E4214] mb-3">A note from the editors</p>
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
                  <ArrowRight size={15} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
