import type { Metadata } from 'next';
import { Nav, Footer, ContourLines, ScrollReveal } from '@/components/wildpath';
import { SITE, SITE_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cancellation Policy',
  description: 'Wildpath Adventures cancellation and refund policy.',
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
                  <div className="bg-[#E8E3D5] overflow-hidden">
                    <div className="grid grid-cols-2 px-5 py-3 bg-[#1A1A1A] text-[#F2EDE3]">
                      <p className="wp-subhead text-[0.6rem] tracking-[0.18em]">Days before departure</p>
                      <p className="wp-subhead text-[0.6rem] tracking-[0.18em] text-right">Cancellation fee</p>
                    </div>
                    {[
                      { days: 'More than 90 days', fee: 'Deposit only (20%)' },
                      { days: '60–90 days', fee: '30% of journey cost' },
                      { days: '30–59 days', fee: '60% of journey cost' },
                      { days: 'Less than 30 days', fee: '100% of journey cost' },
                    ].map((row, i) => (
                      <div
                        key={row.days}
                        className={`grid grid-cols-2 px-5 py-3.5 ${i % 2 === 1 ? 'bg-[#F2EDE3]' : 'bg-[#E8E3D5]'}`}
                      >
                        <p className="text-sm text-[#1A1A1A]">{row.days}</p>
                        <p className="text-sm text-[#1A1A1A] text-right font-medium">{row.fee}</p>
                      </div>
                    ))}
                  </div>
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
                    <strong className="text-[#9E4214]">Note:</strong> Some lodges and
                    charter operators apply their own cancellation terms during
                    peak season (July–October). We will flag these in your
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
