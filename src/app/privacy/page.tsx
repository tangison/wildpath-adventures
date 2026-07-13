import type { Metadata } from 'next';
import { Nav, Footer, ContourLines, ScrollReveal } from '@/components/wildpath';
import { SITE, SITE_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Wildpath Adventures collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />
      <main className="flex-1 pt-32">
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Legal</p>
              <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-[#1A1A1A]/60">Last updated: July 2026</p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto prose-wildpath">
            <ScrollReveal>
              <div className="space-y-8 text-base leading-relaxed text-[#1A1A1A]/80">
                <p>
                  {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a travel company
                  based in {SITE.location.city}, {SITE.location.country}. This policy
                  explains what information we collect when you contact us or travel
                  with us, how we use it, and the choices you have.
                </p>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">What we collect</h2>
                  <p className="mb-3">When you enquire or book a journey, we collect:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Your name, email, and phone/WhatsApp number</li>
                    <li>The details you give us about your journey — dates, party size, interests, dietary needs</li>
                    <li>Passport details, when required for bookings and permits</li>
                    <li>Payment information, processed through our payment provider — we do not store card numbers</li>
                    <li>Communications between us — emails, WhatsApp messages, call notes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">How we use it</h2>
                  <p className="mb-3">We use your information to:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Draft, refine, and book your itinerary</li>
                    <li>Communicate with you before, during, and after your journey</li>
                    <li>Coordinate with our partners — lodges, charter operators, guides</li>
                    <li>Meet legal requirements in Namibia and the countries you visit</li>
                    <li>Improve our journeys — never sold, never shared for marketing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">Who we share with</h2>
                  <p>
                    We share only the information each partner needs to deliver your
                    journey — lodges need names and dietary needs; charter operators
                    need weights; park authorities need passport details. Every
                    partner is bound by confidentiality. We never sell your data.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">How long we keep it</h2>
                  <p>
                    Booking records are kept for seven years for legal and
                    accounting reasons. Enquiry records that do not lead to a
                    booking are deleted after two years. You can request deletion
                    sooner — write to {SITE_EMAIL}.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">Your rights</h2>
                  <p>
                    You can ask to see, correct, or delete the information we hold
                    about you at any time. Write to {SITE_EMAIL}. We respond within
                    30 days.
                  </p>
                </div>

                <div>
                  <h2 className="wp-display text-2xl text-[#1A1A1A] mb-3">Contact</h2>
                  <p>
                    Questions about this policy or your data? Write to{' '}
                    <a href={`mailto:${SITE_EMAIL}`} className="text-[#9E4214] hover:underline">
                      {SITE_EMAIL}
                    </a>
                    .
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
