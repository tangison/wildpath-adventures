import type { Metadata } from 'next';
import Image from 'next/image';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Nav, Footer, AcaciaMark, ContourLines, ScrollReveal } from '@/components/wildpath';
import { ContactForm } from '@/components/contact-form';
import { SITE, SITE_EMAIL, WHATSAPP_URL, TEL_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Plan your journey. WhatsApp, phone, or enquiry form — every Wildpath journey starts with a conversation.',
  alternates: { canonical: '/contact' },
};

const PROCESS_STEPS = [
  { n: '01', t: 'We reply', b: 'Within two days — usually faster on WhatsApp. We ask a few questions, you answer in your own words.' },
  { n: '02', t: 'First draft', b: 'A tailored itinerary sketch, drawn around your dates, your pace, and the people on the journey.' },
  { n: '03', t: 'We refine', b: 'Two or three rounds of edits. Then a final itinerary, with selected accommodation, logistics, and pricing.' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Plan your journey</p>
              <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
                Every route starts
                <br />
                <span className="text-[#9E4214]">with a conversation.</span>
              </h1>
              <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                Tell us where the silence calls you. We will draft a route, a
                season, and a pace. No brochures. No scripts.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ CONTACT GRID ═════════════════════ */}
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-12">
            {/* LEFT — direct contact + WhatsApp primary */}
            <div className="lg:col-span-5">
              <h2 className="wp-display text-3xl md:text-4xl text-[#1A1A1A] leading-[0.95] mb-8">
                We are here,
                <br />
                <span className="text-[#9E4214]">in Windhoek.</span>
              </h2>

              {/* WhatsApp — primary CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#1A1A1A] text-[#F2EDE3] p-6 md:p-8 mb-4 hover:bg-[#2A2A2A] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#C5511A] flex items-center justify-center">
                    <MessageCircle size={20} className="text-[#F2EDE3]" />
                  </div>
                  <div className="flex-1">
                    <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#E8854A] mb-1">
                      Primary — WhatsApp
                    </p>
                    <p className="wp-display text-xl md:text-2xl text-[#F2EDE3] mb-1">
                      {SITE.phone}
                    </p>
                    <p className="text-xs text-[#F2EDE3]/70 leading-relaxed">
                      Tap to start a chat. We answer WhatsApp fastest — usually
                      within hours during Namibian business hours.
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="group block bg-[#E8E3D5] p-6 md:p-8 mb-4 hover:bg-[#DDD7C8] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#F2EDE3] border border-[#1A1A1A]/15 flex items-center justify-center">
                    <Mail size={18} className="text-[#9E4214]" />
                  </div>
                  <div className="flex-1">
                    <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-1">
                      Email
                    </p>
                    <p className="wp-display text-base md:text-lg text-[#1A1A1A] mb-1 break-all">
                      {SITE_EMAIL}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                      For detailed itineraries, quotes, and multi-leg planning.
                      We answer within two days.
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={TEL_URL}
                className="group block bg-[#E8E3D5] p-6 md:p-8 mb-4 hover:bg-[#DDD7C8] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#F2EDE3] border border-[#1A1A1A]/15 flex items-center justify-center">
                    <Phone size={18} className="text-[#9E4214]" />
                  </div>
                  <div className="flex-1">
                    <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-1">
                      Phone
                    </p>
                    <p className="wp-display text-base md:text-lg text-[#1A1A1A] mb-1">
                      {SITE.phone}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                      Namibian business hours: Mon–Fri, 08:00–17:00 CAT.
                    </p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="bg-[#E8E3D5] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#F2EDE3] border border-[#1A1A1A]/15 flex items-center justify-center">
                    <MapPin size={18} className="text-[#9E4214]" />
                  </div>
                  <div className="flex-1">
                    <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-1">
                      Headquarters
                    </p>
                    <p className="wp-display text-base text-[#1A1A1A] mb-1">
                      {SITE.location.city}
                    </p>
                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                      {SITE.location.region}, {SITE.location.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Enquiry form */}
            <div className="lg:col-span-7">
              <div className="bg-[#E8E3D5] p-6 md:p-8 mb-6">
                <h3 className="wp-display text-2xl md:text-3xl text-[#1A1A1A] leading-tight">
                  Tell us about your journey.
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed mt-2 max-w-md">
                  The more you tell us, the better the first draft. We will
                  respond with a tailored itinerary sketch.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ═════════════════════ ATMOSPHERE / TRUST STRIP ═════════════════════ */}
        <section className="py-28 md:py-36 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-5xl mx-auto text-center">
            <AcaciaMark className="w-24 h-16 mx-auto text-[#E8854A]/50 mb-6" />
            <h2 className="wp-display text-3xl md:text-5xl leading-[0.9] mb-10">
              From enquiry
              <br />
              <span className="text-[#E8854A]">to the road.</span>
            </h2>

            {/* Process steps — editorial numbered list */}
            <div className="max-w-2xl mx-auto text-left space-y-0">
              {PROCESS_STEPS.map((s) => (
                <div
                  key={s.n}
                  className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr] gap-x-5 md:gap-x-8 py-8 border-b border-[#F2EDE3]/15 first:border-t"
                >
                  <span className="wp-display text-2xl md:text-3xl text-[#E8854A]/40 leading-none pt-0.5">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="wp-display text-lg md:text-xl text-[#F2EDE3] mb-2">{s.t}</h3>
                    <p className="text-sm text-[#F2EDE3]/70 leading-relaxed">{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
