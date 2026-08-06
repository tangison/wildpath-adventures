import type { Metadata } from 'next';
import { Nav, Footer, ContourLines, ScrollReveal } from '@/components/wildpath';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Wildpath Adventures uses cookies and similar technologies on this website.',
  alternates: { canonical: '/cookies' },
};

export default function CookiePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1 pt-32">
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Legal</p>
              <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-4">
                Cookie Policy
              </h1>
              <p className="text-sm text-[#1A1A1A]/60">Last updated: August 2026</p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        <section className="px-6 md:px-12 py-16">
          <div className="max-w-4xl mx-auto space-y-10 text-[#1A1A1A]/80 leading-relaxed">
            <div>
              <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">What are cookies?</h2>
              <p className="mb-4">
                Cookies are small text files stored on your device when you visit a website.
                They help the website remember your preferences and improve your experience.
                Similar technologies include localStorage and sessionStorage, which store
                data directly in your browser.
              </p>
            </div>

            <div>
              <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">Cookies we use</h2>
              <p className="mb-4">
                {SITE.name} uses only essential technical functionality. We do not use
                third-party analytics cookies, advertising cookies, or tracking cookies
                from services such as Google Analytics, Facebook Pixel, or advertising networks.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-t border-[#1A1A1A]/15">
                  <thead>
                    <tr className="border-b border-[#1A1A1A]/15">
                      <th className="text-left py-3 pr-4 text-[#1A1A1A]">Cookie / Storage</th>
                      <th className="text-left py-3 pr-4 text-[#1A1A1A]">Purpose</th>
                      <th className="text-left py-3 pr-4 text-[#1A1A1A]">Duration</th>
                      <th className="text-left py-3 text-[#1A1A1A]">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1A1A1A]/10">
                      <td className="py-3 pr-4 font-mono text-xs">wildpath-cookie-consent</td>
                      <td className="py-3 pr-4">Records your cookie consent choice</td>
                      <td className="py-3 pr-4">Persistent (localStorage)</td>
                      <td className="py-3">Essential</td>
                    </tr>
                    <tr className="border-b border-[#1A1A1A]/10">
                      <td className="py-3 pr-4 font-mono text-xs">Next.js session cookies</td>
                      <td className="py-3 pr-4">Server-side session management</td>
                      <td className="py-3 pr-4">Session</td>
                      <td className="py-3">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">Third-party services</h2>
              <p className="mb-4">
                Our website may contain links to third-party services such as WhatsApp.
                These services may set their own cookies when you click through to them.
                We do not control and are not responsible for the cookies set by third-party
                websites. We encourage you to review the privacy policies of any third-party
                services you visit.
              </p>
            </div>

            <div>
              <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">Your choices</h2>
              <p className="mb-4">
                You can manage or delete cookies through your browser settings. Most browsers
                allow you to block cookies entirely, delete existing cookies, or alert you when
                a cookie is being set. Please note that blocking all cookies may affect the
                functionality of this and other websites you visit.
              </p>
              <p className="mb-4">
                On this website, you can decline non-essential cookies using the consent banner
                that appears on your first visit. Because we do not use tracking cookies,
                declining will not significantly affect your experience.
              </p>
            </div>

            <div>
              <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">Changes to this policy</h2>
              <p className="mb-4">
                We may update this cookie policy from time to time to reflect changes in
                technology or legal requirements. Any changes will be posted on this page
                with an updated revision date. If we introduce new categories of cookies,
                we will seek your consent again through the banner.
              </p>
            </div>

            <div>
              <h2 className="wp-display text-2xl text-[#1A1A1A] mb-4">Contact</h2>
              <p className="mb-4">
                If you have questions about this cookie policy or our use of cookies, please
                contact us at{' '}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#9E4214] hover:text-[#C5511A] underline underline-offset-2 transition-colors"
                >
                  {SITE.email}
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
