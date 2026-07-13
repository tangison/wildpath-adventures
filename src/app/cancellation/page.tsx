import type { Metadata } from 'next';
import { Nav, Footer, ContourLines, ScrollReveal } from '@/components/wildpath';
import { SITE, SITE_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'Wildpath Adventures cancellation and refund policy.',
  alternates: { canonical: '/cancellation' },
};

export default function CancellationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />
      <main className="flex-1 pt-32">
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Legal</p>
              <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-4">
                Cancellation Policy
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
                  We understand plans change. This policy explains the refund you
                  receive if you cancel your journey. We strongly recommend travel
                  insurance that covers cancellation.
                </p>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">Cancellation fees</h2>
                  <p className="mb-4">
                    Cancellation fees generally scale with how close the
                    cancellation is to your departure date. The earlier you cancel,
                    the smaller the fee. Exact percentages and deposit amounts are
                    confirmed in your personalised proposal and booking
                    confirmation — they vary with the partners, lodges, and charter
                    operators involved in your specific route.
                  </p>
                  <p className="mb-4">
                    As a general principle:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Cancellations well in advance typically forfeit only the deposit.</li>
                    <li>Cancellations closer to departure typically incur a larger percentage of the journey cost.</li>
                    <li>Cancellations within the final weeks before departure typically forfeit the full journey cost.</li>
                  </ul>
                  <p className="mt-4">
                    We strongly recommend travel insurance that covers
                    cancellation, and we will support your insurance claim with
                    documentation.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">How to cancel</h2>
                  <p>
                    Cancellations must be in writing — email{' '}
                    <a href={`mailto:${SITE_EMAIL}`} className="text-[#9E4214] hover:underline">
                      {SITE_EMAIL}
                    </a>{' '}
                    or WhatsApp. The date we receive your cancellation is the date
                    used to calculate the refund.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">If we cancel</h2>
                  <p>
                    If we cancel your journey (other than for force majeure or your
                    breach of these terms), you receive a full refund. We are not
                    liable for any other costs — flights, visas, insurance — but
                    will support your insurance claim with documentation.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">No-shows</h2>
                  <p>
                    If you do not arrive for your journey, or arrive late and
                    cannot complete it, no refund is due.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">Changes by you</h2>
                  <p>
                    Changes to a confirmed booking (dates, party size, itinerary)
                    may incur fees from our partners. We will always tell you the
                    cost before making any change.
                  </p>
                </div>

                <div className="bg-[#E8E3D5] p-5 border-l-2 border-[#C5511A] mt-10">
                  <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    Some accommodation partners and charter operators apply their
                    own cancellation terms, particularly during peak season
                    (July–October). We will always flag these in your
                    confirmation, before any deposit is taken.
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
