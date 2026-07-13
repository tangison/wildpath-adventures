import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Footprints, Compass, Sun, MapPin } from 'lucide-react';
import { Nav, Footer, Wordmark, AcaciaMark, BirdFlock, ContourLines, CompassMark } from '@/components/wildpath';

export const metadata: Metadata = {
  title: 'Brand Identity — Wildpath Adventures',
  description:
    'The Wildpath Adventures brand system: wordmark, illustration, palette, typography, voice, and tonality.',
};

const PALETTE = [
  { name: 'Warm Ivory', hex: '#F2EDE3', use: 'Primary background — pan clay', onLight: true },
  { name: 'Deep Charcoal', hex: '#1A1A1A', use: 'Primary text — basalt', onLight: false },
  { name: 'Burnt Orange', hex: '#C5511A', use: 'Accent — dune at 4 PM', onLight: true },
  { name: 'Dust Sand', hex: '#D2B48C', use: 'Secondary surface', onLight: true },
  { name: 'Muted Earth', hex: '#6B5E3D', use: 'Tertiary text — dry grass', onLight: true },
  { name: 'Warm Stone', hex: '#6D6D6D', use: 'Secondary text — granite', onLight: true },
];

const VOICE_PRINCIPLES = [
  { title: 'Locate, do not engineer', body: 'We do not manufacture experiences. We find them, then clear the path. The land is the author. We are the editors.' },
  { title: 'Sensory over superlative', body: 'Write what the boot feels, what the air smells like at dawn, what the silence sounds like. Avoid adjectives that could describe any hotel anywhere.' },
  { title: 'Temporary presence, permanent impact', body: 'Our guests leave. The lodges remain. The land remains. Every sentence should honour that asymmetry.' },
  { title: 'No slop', body: 'Forbidden words: revolutionize, unlock, seamless, next-generation, cutting-edge, boutique, curated, bespoke. If a travel brochure uses it, we do not.' },
];

const TONALITY = [
  { axis: 'Formal ↔ Direct', position: 'Direct', note: 'Short sentences. Active voice. The landscape does the work.' },
  { axis: 'Warm ↔ Austere', position: 'Austere with warmth', note: 'Fire in the evenings, but no pillow chocolates. Comfort without cosseting.' },
  { axis: 'Poetic ↔ Practical', position: 'Poetic precision', note: 'Metre matters, but every word must be literally true.' },
  { axis: 'Exclusive ↔ Accessible', position: 'Accessible seriousness', note: 'Serious about the land, not about ourselves. No velvet ropes.' },
];

const VALUES = [
  { name: 'Namibian Roots', desc: 'Every guide, every lodge, every route is Namibian. We are not headquartered in London or New York.' },
  { name: 'Authentic Expeditions', desc: 'We move on foot, by Cessna, and by Land Cruiser. Never by coach, never by script.' },
  { name: 'Responsible Tourism', desc: 'Our footprint is measured against the land, not against a balance sheet. Carbon logged, not offset.' },
  { name: 'Conservation', desc: 'A percentage of every journey funds the Save the Rhino Trust and the Namibian Desert Lion Project.' },
  { name: 'Local Communities', desc: 'We hire from Damaraland, from the Kunene, from Windhoek. Our supply chain is 90% Namibian.' },
  { name: 'Slow Travel', desc: 'We do not do 14 parks in 7 days. We do one landscape deeply, then move.' },
];

export default function BrandPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <p className="wp-script text-2xl text-[#9E4214] mb-6">Brand identity kit</p>
            <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
              The mark, the map,
              <br />
              <span className="text-[#9E4214]">the mandate.</span>
            </h1>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
              Everything Wildpath puts into the world — a wordmark, a
              photograph, a sentence, a lodge wall — answers to four words:
              travel the untamed beauty. This page is the system that holds
              those words accountable.
            </p>
          </div>
        </section>

        {/* ═════════════════════ 01 — PRIMARY WORDMARK ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-3">
                <p className="wp-subhead text-xs text-[#9E4214] mb-2">01</p>
                <h2 className="wp-display text-3xl md:text-4xl text-[#1A1A1A] leading-[0.95]">
                  Primary<br />Wordmark
                </h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-[#1A1A1A]/80 leading-relaxed max-w-xl mb-12">
                  The Wildpath logo is not an icon. It is not a badge, a
                  shield, or an emblem. It is a typographic wordmark — two
                  words, one line, generous breathing room. WILDPATH dominates;
                  ADVENTURES sits to its right, vertically centred, never
                  below, never stacked.
                </p>

                {/* The wordmark — large, breathing */}
                <div className="bg-[#F2EDE3] py-16 md:py-24 px-8 text-center">
                  <Wordmark size="xl" />
                </div>
                <p className="wp-script text-lg text-[#6B5E3D] text-center mt-4">
                  Travel the untamed beauty
                </p>
              </div>
            </div>

            {/* Clear space + scale rules */}
            <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]/12 mt-12">
              <div className="bg-[#E8E3D5] p-8 md:p-10">
                <p className="wp-subhead text-xs text-[#9E4214] mb-4">02 — Clear Space</p>
                <p className="text-[#1A1A1A]/80 text-sm leading-relaxed mb-6">
                  The wordmark requires whitespace equal to the height of the
                  letter W on all sides. Nothing may intrude on this margin —
                  not text, not images, not borders.
                </p>
                <div className="bg-[#F2EDE3] p-8 border border-[#1A1A1A]/15 relative">
                  <div className="border border-dashed border-[#C5511A]/40 p-8 md:p-12 text-center">
                    <Wordmark size="md" />
                  </div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#9E4214] text-center mt-3">
                    Minimum clear space = height of W
                  </p>
                </div>
              </div>
              <div className="bg-[#E8E3D5] p-8 md:p-10">
                <p className="wp-subhead text-xs text-[#9E4214] mb-4">03 — Minimum Scale</p>
                <p className="text-[#1A1A1A]/80 text-sm leading-relaxed mb-6">
                  The wordmark must never appear smaller than 24px on screen.
                  Below this threshold, ADVENTURES becomes illegible and the
                  hierarchy collapses.
                </p>
                <div className="bg-[#F2EDE3] p-8 border border-[#1A1A1A]/15 space-y-6">
                  <div><Wordmark size="sm" /></div>
                  <div className="pt-4 border-t border-[#1A1A1A]/10"><Wordmark size="md" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════ CONTOUR DIVIDER ═════════════════════ */}
        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ 04 — ILLUSTRATION ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <p className="wp-subhead text-xs text-[#9E4214] mb-2">04</p>
                <h2 className="wp-display text-3xl md:text-4xl text-[#1A1A1A] leading-[0.95] mb-6">
                  Illustration<br />System
                </h2>
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-6">
                  Hand-drawn. Pen and ink. Cross-hatched. The illustration is
                  the second identity element — a Namibian savannah scene with
                  a lone acacia, a gravel road receding to the horizon,
                  elephants, birds, and a low sun.
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  Never replace with stock illustration. Never flatten to
                  vector. Never recolour. The texture is the point.
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="relative w-full aspect-square bg-[#E8E3D5]">
                  <Image
                    src="/images/illustrations/v2/03-showcase.webp"
                    alt="Wildpath illustration — acacia tree, gravel road, elephants, birds, sunset"
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 65vw"
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </div>

            {/* Illustration motifs — the hand-drawn elements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A]/12 mt-12">
              {[
                { label: 'Acacia', comp: <AcaciaMark className="w-20 h-14 text-[#1A1A1A]" /> },
                { label: 'Bird Flock', comp: <BirdFlock className="w-24 h-8 text-[#1A1A1A]" /> },
                { label: 'Compass', comp: <CompassMark className="w-16 h-16 text-[#1A1A1A]" /> },
                { label: 'Contour Lines', comp: <ContourLines className="w-24 h-12 text-[#1A1A1A]" /> },
              ].map((m) => (
                <div key={m.label} className="bg-[#F2EDE3] p-8 flex flex-col items-center justify-center gap-4">
                  {m.comp}
                  <p className="wp-subhead text-[0.6rem] text-[#9E4214]">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ 05 — COLOUR ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-3">
                <p className="wp-subhead text-xs text-[#E8854A] mb-2">05</p>
                <h2 className="wp-display text-3xl md:text-4xl text-[#F2EDE3] leading-[0.95]">
                  Colour<br />System
                </h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-[#F2EDE3]/70 leading-relaxed max-w-xl">
                  Six tones pulled from the Namibian ground. Warm ivory is the
                  pan clay. Deep charcoal is the basalt. Burnt orange is the
                  dune at 4 PM. No colour appears that does not exist within a
                  day&rsquo;s drive of Windhoek.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#F2EDE3]/10">
              {PALETTE.map((c) => (
                <div key={c.name}>
                  <div
                    className="aspect-[4/5] flex items-end p-5"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span className={`wp-subhead text-xs ${c.onLight ? 'text-[#1A1A1A]' : 'text-[#F2EDE3]'}`}>
                      {c.hex}
                    </span>
                  </div>
                  <div className="p-4 bg-[#1A1A1A]">
                    <h3 className="wp-display text-sm mb-1 text-[#F2EDE3]">{c.name}</h3>
                    <p className="text-xs text-[#F2EDE3]/55 leading-relaxed">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ 06 — TYPOGRAPHY ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-3">
                <p className="wp-subhead text-xs text-[#9E4214] mb-2">06</p>
                <h2 className="wp-display text-3xl md:text-4xl text-[#1A1A1A] leading-[0.95]">
                  Typography<br />System
                </h2>
              </div>
              <div className="md:col-span-9">
                <p className="text-[#1A1A1A]/80 leading-relaxed max-w-xl">
                  Three voices. One register. Anton carries the wordmark and
                  headlines — ultra-condensed, bold, uppercase. Archivo handles
                  section titles and labels. Caveat appears only for the
                  tagline, quotes, and section introductions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-[#1A1A1A]/12">
              <div className="bg-[#F2EDE3] p-8 md:p-10">
                <p className="wp-subhead text-xs text-[#9E4214] mb-4">Primary — Anton</p>
                <p className="wp-display text-6xl md:text-7xl text-[#1A1A1A] leading-[0.85] mb-6">
                  Untamed
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed text-sm">
                  Heavy condensed display. Used for the wordmark, headlines,
                  and section titles. Always uppercase. Never italic.
                </p>
              </div>
              <div className="bg-[#F2EDE3] p-8 md:p-10">
                <p className="wp-subhead text-xs text-[#9E4214] mb-4">Secondary — Archivo</p>
                <p className="wp-subhead text-5xl md:text-6xl text-[#1A1A1A] leading-[0.85] mb-6">
                  The route.
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed text-sm">
                  Clean editorial sans-serif for labels, subheads, and
                  metadata. Uppercase for labels, sentence case for subheads.
                </p>
              </div>
              <div className="bg-[#F2EDE3] p-8 md:p-10">
                <p className="wp-subhead text-xs text-[#9E4214] mb-4">Accent — Caveat</p>
                <p className="wp-script text-6xl md:text-7xl text-[#9E4214] leading-[0.85] mb-6">
                  beauty
                </p>
                <p className="text-[#1A1A1A]/80 leading-relaxed text-sm">
                  Handwritten script for the tagline, quotes, and section
                  introductions only. Never for body copy. Never for
                  navigation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════ ACACIA DIVIDER ═════════════════════ */}
        <div className="py-6 flex justify-center">
          <AcaciaMark className="w-28 h-18 text-[#1A1A1A]/30" />
        </div>

        {/* ═════════════════════ 07 — VOICE ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <p className="wp-subhead text-xs text-[#9E4214] mb-2">07</p>
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Voice</p>
              <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
                Four rules the
                <br />
                <span className="text-[#9E4214]">copy obeys.</span>
              </h2>
            </div>
            <div className="border-t border-[#1A1A1A]/15">
              {VOICE_PRINCIPLES.map((v, i) => (
                <div key={v.title} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[#1A1A1A]/15 group">
                  <div className="md:col-span-1">
                    <span className="wp-display text-3xl text-[#1A1A1A]/25 group-hover:text-[#9E4214] transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="wp-display text-xl md:text-2xl leading-tight">{v.title}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-[#1A1A1A]/80 leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ 08 — TONALITY ═════════════════════ */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[#C5511A] text-[#1A1A1A]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <p className="wp-subhead text-xs mb-2">08</p>
              <p className="wp-script text-2xl mb-3">Tonality</p>
              <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
                Where we sit on
                <br />
                <span className="italic font-serif font-light">four axes.</span>
              </h2>
            </div>
            <div className="space-y-px bg-[#1A1A1A]/15">
              {TONALITY.map((t) => (
                <div key={t.axis} className="bg-[#C5511A] grid md:grid-cols-3 gap-6 p-6 md:p-8">
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-1">Axis</p>
                    <p className="wp-display text-lg">{t.axis}</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-1">Position</p>
                    <p className="wp-script text-2xl">{t.position}</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase font-bold mb-1">Note</p>
                    <p className="text-sm leading-relaxed">{t.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ 09 — VALUES ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <p className="wp-subhead text-xs text-[#9E4214] mb-2">09</p>
              <p className="wp-script text-2xl text-[#9E4214] mb-3">Brand values</p>
              <h2 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
                What we
                <br />
                <span className="text-[#9E4214]">stand on.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/12">
              {VALUES.map((v) => (
                <div key={v.name} className="bg-[#F2EDE3] p-8 md:p-10">
                  <h3 className="wp-display text-xl md:text-2xl text-[#1A1A1A] mb-4 leading-tight">
                    {v.name}
                  </h3>
                  <p className="text-[#1A1A1A]/80 leading-relaxed text-sm">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════ 10 — FORBIDDEN WORDS ═════════════════════ */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3] relative overflow-hidden">
          <BirdFlock className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-16 text-[#E8854A]/30" />
          <div className="relative max-w-5xl mx-auto text-center pt-8">
            <p className="wp-subhead text-xs text-[#E8854A] mb-2">10</p>
            <p className="wp-script text-xl text-[#E8854A] mb-4">The forbidden list</p>
            <h3 className="wp-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] mb-12">
              If a travel brochure uses it,
              <br />
              <span className="text-[#E8854A]">we do not.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                'revolutionize', 'unlock', 'seamless', 'next-generation', 'cutting-edge',
                'boutique', 'curated', 'bespoke', 'luxury', 'exclusive',
                'world-class', 'unforgettable', 'hidden gem', 'bucket list',
                'once-in-a-lifetime',
              ].map((word) => (
                <span
                  key={word}
                  className="px-4 py-2 border border-[#F2EDE3]/25 text-[#F2EDE3]/45 line-through decoration-[#C5511A] decoration-2 text-sm font-serif italic"
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="mt-12 text-[#F2EDE3]/55 text-sm max-w-xl mx-auto leading-relaxed">
              These words are stricken from every Wildpath sentence. We use
              specific nouns, active verbs, and the exact time of day.
            </p>
          </div>
        </section>

        {/* ═════════════════════ CTA ═════════════════════ */}
        <section className="py-24 md:py-36 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-10">
              <Wordmark size="lg" />
            </div>
            <p className="wp-script text-3xl text-[#9E4214] mb-4">The system is the standard</p>
            <h2 className="wp-display text-4xl md:text-6xl text-[#1A1A1A] leading-[0.9] mb-8">
              Every page answers
              <br />
              <span className="text-[#9E4214]">to the mandate.</span>
            </h2>
            <Link
              href="/"
              className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-all inline-flex items-center gap-3"
            >
              Return to the map
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
