import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Nav, Footer, BirdFlock } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Wildpath Adventures is a Namibian-owned tour operator creating personalised journeys across Namibia and Southern Africa.',
  alternates: { canonical: '/about' },
};

const STRENGTHS = [
  { name: 'Namibian ownership', desc: 'A Namibian-owned tour operator, based in Windhoek. We plan every journey from inside the country we travel in.' },
  { name: 'Tailor-made journeys', desc: 'Every itinerary is drafted around your dates, your pace, and the people travelling with you. No two journeys are the same.' },
  { name: 'Namibia and Southern Africa', desc: 'From the Namib desert to the Zambezi, from Etosha to Chobe and Victoria Falls. We plan across the region.' },
  { name: 'Self-drive and guided', desc: 'Choose self-drive with a thorough briefing, a guided vehicle, or a mix of both. We arrange what suits your route.' },
  { name: 'Personal planning', desc: 'We plan every itinerary personally, from the first enquiry to your return home. Accommodation arranged according to route and budget.' },
  { name: 'Responsible tourism', desc: 'We aim to work with responsible local partners and support travel practices that respect Namibia\u2019s wildlife, landscapes, and communities.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '320px' }}>
            <Photo
              base="safari-vehicle-red-dune"
              alt="An open safari vehicle crossing a red Kalahari dune, acacia scrub behind."
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
              <p className="wp-subhead text-[0.62rem] text-[#F2EDE3]/85 mb-4">About Wildpath</p>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95]">
                Namibian-owned.
                <br />
                <span className="text-[#E8854A]">Personally planned.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto wp-reveal">
            <p className="wp-display text-2xl md:text-3xl leading-[1.25] text-[#1A1A1A]">
              Wildpath Adventures is a Namibian-owned tour operator creating
              personalised travel experiences across Namibia and Southern
              Africa. Every itinerary is tailored around the landscapes,
              wildlife, and pace that make this part of Africa unforgettable.
            </p>
            <p className="mt-8 text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed max-w-2xl">
              We are based in Windhoek, and we plan the way we travel: slowly,
              with room for the country to surprise you. That means fewer
              places on each route, real time at each one, and honest advice
              about distances, seasons and what a day on the road actually
              feels like. When you write to us, you write to the person who
              will build your journey.
            </p>
            <BirdFlock className="w-40 h-12 text-[#9E4214]/40 mt-10" />
          </div>
        </section>

        {/* How we work — image + text split */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-[#E8E3D5]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="wp-photo wp-img-reveal order-2 md:order-1" style={{ aspectRatio: '4 / 3' }}>
              <Photo
                base="damaraland-lodge-granite-hill"
                alt="A lodge of stone and thatch built into a granite hillside in Damaraland."
                aspect="4 / 3"
                sizes="(min-width: 768px) 50vw, 100vw"
                reveal={false}
                className="h-full"
              />
            </div>
            <div className="order-1 md:order-2 wp-reveal">
              <h2 className="wp-display text-3xl md:text-5xl leading-[0.98] mb-6">
                Slow travel,
                <br />
                <span className="text-[#9E4214]">done properly.</span>
              </h2>
              <p className="text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed mb-4">
                We would rather show you one canyon properly than five canyons
                through a window. Our routes build in long stays, dawn and dusk
                outings when the light and the wildlife are at their best, and
                quiet evenings where the biggest event is the stars coming out.
              </p>
              <p className="text-base text-[#1A1A1A]/75 leading-relaxed">
                Accommodation is chosen per route and budget, from intimate
                desert lodges to bush camps inside the parks. We work with
                partners we know, and we tell you exactly who you will be
                staying with before you commit.
              </p>
            </div>
          </div>
        </section>

        {/* Strengths grid */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="wp-display text-3xl md:text-5xl leading-[0.98] mb-10 wp-reveal">
              What you can expect <span className="text-[#9E4214]">from us.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/12">
              {STRENGTHS.map((s) => (
                <div key={s.name} className="bg-[#F2EDE3] p-6 md:p-8 wp-reveal">
                  <h3 className="wp-display text-xl mb-3">{s.name}</h3>
                  <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-6 md:px-12 bg-[#1A1A1A]">
          <div className="max-w-3xl mx-auto text-center wp-reveal">
            <h2 className="wp-display text-3xl md:text-5xl text-[#F2EDE3] leading-[0.98]">
              The first conversation costs nothing.
            </h2>
            <p className="mt-4 text-base text-[#F2EDE3]/75 leading-relaxed">
              Tell us when you are coming, for how long, and what you want to
              feel. We will answer with a plan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group bg-[#F2EDE3] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
              >
                Plan your journey
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
