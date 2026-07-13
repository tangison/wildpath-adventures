import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Nav, Footer, ContourLines, AcaciaMark, ScrollReveal } from '@/components/wildpath';

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Dispatches from the field — tracking notes, geology essays, lodge architecture, and observations from across Namibia and Southern Africa.',
};

const NOTES = [
  {
    slug: 'geology-of-silence',
    title: 'On the geology of silence',
    excerpt:
      'Why the Namib sounds different from the Kalahari, and what that means for the way we route our expeditions.',
    date: 'March 2026',
    readTime: '6 min',
    category: 'Fieldcraft',
    featured: true,
    image: '/images/illustrations/v2/10-note-early-light.webp',
  },
  {
    slug: 'tracking-desert-elephants',
    title: 'Tracking the desert-adapted elephant',
    excerpt:
      'Three days following a breeding herd through the Huab riverbed. Notes from our lead guide.',
    date: 'February 2026',
    readTime: '9 min',
    category: 'Wildlife',
    featured: false,
    image: '/images/illustrations/v2/12-note-desert-elephants.webp',
  },
  {
    slug: 'building-with-what-the-land-gives',
    title: 'Building with what the land gives',
    excerpt:
      'How the Stone Escarpment Chalets were sited, oriented, and roofed using only materials quarried within four kilometres.',
    date: 'January 2026',
    readTime: '4 min',
    category: 'Architecture',
    featured: false,
    image: '/images/illustrations/v2/11-note-ancient-paths.webp',
  },
];

export default function FieldNotesPage() {
  const featured = NOTES.find((n) => n.featured) || NOTES[0];
  const rest = NOTES.filter((n) => !n.featured);

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
                Dispatches from
                <br />
                <span className="text-[#9E4214]">the field.</span>
              </h1>
              <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                Tracking notes. Geology essays. Lodge architecture. The journal of
                a travel company that takes the land seriously.
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
              <Link
                href="/field-notes"
                className="group grid md:grid-cols-2 gap-0 bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-[#1A1A1A] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 text-[0.65rem] tracking-[0.2em] uppercase font-bold">
                    <span className="text-[#9E4214]">{featured.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                    <span className="text-[#1A1A1A]/70">{featured.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                    <span className="text-[#1A1A1A]/70">{featured.readTime}</span>
                  </div>
                  <h2 className="wp-display text-3xl md:text-5xl text-[#1A1A1A] mb-4 leading-[0.95] group-hover:text-[#9E4214] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-6 max-w-md">
                    {featured.excerpt}
                  </p>
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#9E4214] font-bold flex items-center gap-2">
                    Read
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ GRID OF NOTES ═════════════════════ */}
        <section className="pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-10">
              <p className="wp-subhead text-xs text-[#9E4214] mb-2">More dispatches</p>
              <h2 className="wp-display text-2xl md:text-4xl text-[#1A1A1A] leading-[0.9]">
                From the archive.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {rest.map((n, i) => (
                <ScrollReveal key={n.slug} delay={i * 0.08}>
                  <Link
                    href="/field-notes"
                    className="group block bg-[#E8E3D5] hover:bg-[#DDD7C8] transition-colors duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] bg-[#1A1A1A] overflow-hidden">
                      <Image
                        src={n.image}
                        alt={n.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3 text-[0.6rem] tracking-[0.2em] uppercase font-bold">
                        <span className="text-[#9E4214]">{n.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                        <span className="text-[#1A1A1A]/70">{n.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/30" />
                        <span className="text-[#1A1A1A]/70">{n.readTime}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#9E4214] transition-colors">
                        {n.title}
                      </h3>
                      <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                        {n.excerpt}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ COMING-AS-IT-IS-BUILT NOTE ═════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <AcaciaMark className="w-24 h-16 mx-auto text-[#9E4214]/40 mb-6" />
              <p className="wp-script text-2xl text-[#9E4214] mb-3">The journal grows</p>
              <h2 className="wp-display text-2xl md:text-4xl text-[#1A1A1A] leading-[0.9] mb-4">
                A note from the editors.
              </h2>
              <p className="text-base text-[#1A1A1A]/75 leading-relaxed max-w-xl mx-auto">
                We publish when there is something worth publishing — not on a
                schedule. New dispatches arrive as the season turns. Sign up by
                email and we will send them to you.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
