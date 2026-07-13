import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  Nav,
  Footer,
  AcaciaMark,
  ContourLines,
  ScrollReveal,
} from '@/components/wildpath';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WHATSAPP_URL, SITE_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about travelling with Wildpath Adventures in Namibia.',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  {
    q: 'Is Namibia safe to travel in?',
    a: 'Yes. Namibia is one of the safest countries in Africa for travellers. Crime against tourists is rare. The usual big-city precautions apply in Windhoek. In the bush, the risks are environmental — sun, dust, distance — and your guide manages those.',
  },
  {
    q: 'Do I need a visa?',
    a: 'Most nationalities — including EU, UK, US, Canada, Australia, and most of SADC — do not need a visa for stays up to 90 days. You will get a visa-on-arrival stamp at Hosea Kutako International Airport. We confirm current requirements for your nationality before you book.',
  },
  {
    q: 'Is it safe to self-drive?',
    a: 'Yes, with preparation. Roads are good in most places; distances are real. We provide a thorough handover briefing and a 4×4 arranged for your route. We do not recommend self-drive for the Skeleton Coast or remote Damaraland — there, a guided vehicle is better.',
  },
  {
    q: 'What about malaria?',
    a: 'The northern parts of Namibia — Etosha, the Caprivi, and the river regions — are malaria-risk in the wet season (November–April). The desert, coast, and south are malaria-free. We advise on the current situation for your dates; you consult your doctor or travel clinic.',
  },
  {
    q: 'What is the best time to visit?',
    a: 'May to October is the dry season — cool days, cold nights, wildlife concentrated at waterholes. This is peak season. November to April is the wet season — greener landscapes, fewer visitors, baby animals, but hotter and harder game viewing. Each season has its own case.',
  },
  {
    q: 'How fit do I need to be?',
    a: 'Most journeys are not strenuous. Game drives, scenic flights, and lodge-based itineraries require no special fitness. Walking safaris — Damaraland, Erongo, Okonjima — require moderate fitness. We rate each journey and can adjust pace to your party.',
  },
  {
    q: 'What should I pack?',
    a: 'We send a full packing list tailored to your journey. In general: neutral-coloured clothing (khaki, olive, sand — no brights), layers for cold mornings and hot middays, sturdy closed shoes, a wide-brimmed hat, sunscreen, and binoculars. Soft bags, not hard cases, for charter flights.',
  },
  {
    q: 'Can you accommodate dietary needs?',
    a: 'Yes. Vegetarian, vegan, halal, kosher, gluten-free, and most allergies are accommodated by our lodges and camps. Tell us in advance; the further out, the better we can plan.',
  },
  {
    q: 'What currency should I bring?',
    a: 'The Namibian Dollar (NAD) is pegged 1:1 to the South African Rand (ZAR); both are accepted everywhere. USD is widely accepted in lodges. Cards work in towns and lodges; cash for fuel in remote areas and tips. We advise per journey.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For peak season (July–October), book 6–12 months ahead — the best lodges fill a year out. For shoulder season (May, June, November), 3–6 months. For last-minute, we can often find something — but choice is limited.',
  },
  {
    q: 'Do you arrange international flights?',
    a: 'We do not book international flights directly, but we advise on routings and the best airlines into Windhoek (Hosea Kutako — WDH) and Victoria Falls (VFA). For internal charter flights within Namibia, we handle everything.',
  },
  {
    q: 'What if there is an emergency?',
    a: 'You have a direct line to your planning team throughout your journey, and we coordinate with local partners and medical evacuation services as needed. Travel insurance covering medical evacuation is mandatory for every booking.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 pt-32">
        {/* ═════════════════════ HEADER ═════════════════════ */}
        <section className="px-6 md:px-12 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <p className="wp-script text-2xl text-[#9E4214] mb-6">Questions</p>
              <h1 className="wp-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.88] mb-6">
                Before you
                <br />
                <span className="text-[#9E4214]">set off.</span>
              </h1>
              <p className="text-lg text-[#1A1A1A]/80 max-w-2xl leading-relaxed">
                The questions we hear most. If yours is not here, write to us —
                we answer everything.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="py-4">
          <ContourLines className="w-full h-12 text-[#1A1A1A]/15" />
        </div>

        {/* ═════════════════════ FAQ LIST ═════════════════════ */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Accordion type="single" collapsible className="border-t border-[#1A1A1A]/15">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-[#1A1A1A]/15"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 group">
                      <span className="flex gap-4 items-start">
                        <span className="wp-display text-base text-[#9E4214]/50 group-hover:text-[#9E4214] transition-colors mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="wp-display text-lg md:text-xl text-[#1A1A1A] leading-tight">
                          {faq.q}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-[#1A1A1A]/75 leading-relaxed pb-6 pl-10">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* ═════════════════════ STILL HAVE QUESTIONS ═════════════════════ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#F2EDE3]">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <AcaciaMark className="w-24 h-16 mx-auto text-[#E8854A]/50 mb-6" />
              <p className="wp-script text-2xl text-[#E8854A] mb-3">Still have questions?</p>
              <h2 className="wp-display text-3xl md:text-5xl leading-[0.9] mb-8">
                We answer
                <br />
                <span className="text-[#E8854A]">everything.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#C5511A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={15} />
                  Ask on WhatsApp
                </a>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="group border border-[#F2EDE3]/40 text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F2EDE3] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-3 justify-center"
                >
                  Email Us
                  <ArrowRight size={15} />
                </a>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-sm text-[#F2EDE3]/70 hover:text-[#E8854A] transition-colors underline underline-offset-4"
                >
                  Or fill in the enquiry form
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
