import type { Metadata } from 'next';
import { Nav, Footer, ContourLines } from '@/components/wildpath';
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
            <div className="wp-reveal">
              <p className="wp-subhead text-[0.62rem] text-[#9E4214] mb-6">Legal</p>
              <h1 className="wp-display text-4xl md:text-6xl lg:text-7xl leading-[0.9] mb-4">
                Cookie Policy
              </h1>
              <p className="text-sm text-[#1A1A1A]/60">Last updated: August 2026</p>
            </div>
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
                {SITE.name} sets no cookies on this site. There is no login, no
                shopping basket, and no advertising. We do not use third-party
                analytics cookies, advertising cookies, or tracking cookies
                from services such as Google Analytics, Facebook Pixel, or advertising networks.
              </p>
              <p className="mb-4 text-[#1A1A1A]/70">
                The traffic counter we use (Vercel Analytics) is cookieless: it
                counts page views without storing or reading anything on your
                device, and it does not build a profile of you.
              </p>
              <p className="mb-4">
                Because no cookies are set, there is no cookie table to list and
                no consent banner on this site.
              </p>
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
                a cookie is being set. Since this site sets none, blocking them will not change
                how the site works for you.
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
