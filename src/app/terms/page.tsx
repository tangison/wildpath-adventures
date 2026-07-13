import type { Metadata } from 'next';
import { Nav, Footer, ContourLines, ScrollReveal } from '@/components/wildpath';
import { SITE, SITE_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms under which Wildpath Adventures provides journeys and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />
      <main className="flex-1 pt-32">
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Legal</p>
              <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-4">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm text-[#1A1A1A]/60">Last updated: July 2026</p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="space-y-8 text-base leading-relaxed text-[#1A1A1A]/80">
                <p>
                  These terms govern the relationship between {SITE.name}
                  (&ldquo;we&rdquo;, &ldquo;us&rdquo;) and you, our guest. By enquiring
                  or booking with us, you accept these terms.
                </p>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">1. Bookings</h2>
                  <p>
                    Every journey is tailored. A booking is confirmed only when we
                    have received your deposit. Until then, dates and availability
                    may change. We will always confirm in writing.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">2. Payment</h2>
                  <p className="mb-3">
                    A deposit confirms your booking. The balance is due before
                    departure, on a schedule confirmed in your personalised
                    proposal. Bookings made close to departure may require full
                    payment at confirmation.
                  </p>
                  <p>
                    Exact deposit percentages, balance due dates, accepted
                    currencies, and payment methods are confirmed per booking —
                    they vary with the partners and services involved.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">3. What is included</h2>
                  <p className="mb-3">Each itinerary lists inclusions explicitly. Typically:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Accommodation as specified in the itinerary</li>
                    <li>Meals as specified (B = breakfast, L = lunch, D = dinner)</li>
                    <li>Ground transport and charter flights as specified</li>
                    <li>Park and conservation fees</li>
                    <li>Professional guide services</li>
                  </ul>
                  <p className="mt-3">
                    International flights, visas, travel insurance, drinks, laundry,
                    and items of a personal nature are not included unless stated.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">4. Passports, visas, insurance</h2>
                  <p>
                    You must hold a passport valid for at least six months beyond
                    your return date, with at least two blank pages. Visa
                    requirements vary by nationality — we advise, you confirm.
                    Travel insurance covering medical evacuation is mandatory.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">5. Health</h2>
                  <p>
                    Some regions of Namibia and neighbouring countries are
                    malaria-risk. We advise on the current situation; you consult
                    your doctor. Vaccination requirements may apply.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">6. Changes to your journey</h2>
                  <p>
                    We may need to change an itinerary — weather, road conditions,
                    lodge availability, wildlife movements. We will always tell you
                    as early as possible and offer a comparable alternative. Any
                    major change before departure gives you the option to accept
                    or receive a full refund.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">7. Your responsibilities</h2>
                  <p>
                    You must follow the instructions of your guide at all times —
                    particularly around wildlife. We reserve the right to terminate
                    a journey, without refund, for behaviour that endangers
                    yourself, others, or the wildlife.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">8. Force majeure</h2>
                  <p>
                    We are not liable for failure to perform due to events beyond
                    our control — natural disasters, political instability,
                    pandemics, airline failures. We will work with you to rearrange
                    or refund fairly.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">9. Governing law</h2>
                  <p>
                    These terms are governed by the laws of the Republic of Namibia.
                    Disputes will be resolved in Namibian courts unless we agree
                    otherwise in writing.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">10. Contact</h2>
                  <p>
                    Questions about these terms? Write to{' '}
                    <a href={`mailto:${SITE_EMAIL}`} className="text-[#9E4214] hover:underline">
                      {SITE_EMAIL}
                    </a>
                    .
                  </p>
                </div>

                <div className="bg-[#E8E3D5] p-5 border-l-2 border-[#C5511A] mt-10">
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    Wildpath Adventures is a Namibian-owned tour operator
                    registered in Windhoek, Namibia. Registration numbers and
                    further statutory details are available on request.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
