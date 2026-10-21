import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Plus } from 'lucide-react';
import { Nav, Footer } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { WHATSAPP_URL, SITE_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about travelling with Wildpath Adventures in Namibia.',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  {
    q: 'Is Namibia safe to travel in?',
    a: 'Yes. Namibia is one of the safest countries in Africa for travellers. Crime against tourists is rare. The usual big-city precautions apply in Windhoek. In the bush, the risks are environmental, such as sun, dust, and distance, and your guide manages those.',
  },
  {
    q: 'Do I need a visa?',
    a: 'Most nationalities, including EU, UK, US, Canada, Australia, and most of SADC, do not need a visa for stays up to 90 days. You will get a visa-on-arrival stamp at Hosea Kutako International Airport. We confirm current requirements for your nationality before you book.',
  },
  {
    q: 'Is it safe to self-drive?',
    a: 'Yes, with preparation. Roads are good in most places; distances are real. We provide a thorough handover briefing and a 4\u00d74 arranged for your route. We do not recommend self-drive for the Skeleton Coast or remote Damaraland; there, a guided vehicle is better.',
  },
  {
    q: 'What about malaria?',
    a: 'The northern parts of Namibia, Etosha, the Caprivi, and the river regions, are malaria-risk in the wet season (November to April). The desert, coast, and south are malaria-free. We advise on the current situation for your dates; you consult your doctor or travel clinic.',
  },
  {
    q: 'What is the best time to visit?',
    a: 'May to October is the dry season: cool days, cold nights, wildlife concentrated at waterholes. This is peak season. November to April is the wet season: greener landscapes, fewer visitors, baby animals, but hotter and harder game viewing. Each season has its own case.',
  },
  {
    q: 'How fit do I need to be?',
    a: 'Most journeys are not strenuous. Game drives, scenic flights, and lodge-based itineraries require no special fitness. Walking safaris, such as Damaraland, Erongo, and Okonjima, require moderate fitness. We rate each journey and can adjust pace to your party.',
  },
  {
    q: 'What should I pack?',
    a: 'We send a full packing list tailored to your journey. In general: neutral-coloured clothing (khaki, olive, sand, no brights), layers for cold mornings and hot middays, sturdy closed shoes, a wide-brimmed hat, sunscreen, and binoculars. Soft bags, not hard cases, for charter flights.',
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
    a: 'For peak season (July to October), book 6 to 12 months ahead; the best lodges fill a year out. For shoulder season (May, June, November), 3 to 6 months. For last-minute, we can often find something, but choice is limited.',
  },
  {
    q: 'Do you arrange international flights?',
    a: 'We do not book international flights directly, but we advise on routings and the best airlines into Windhoek (Hosea Kutako, WDH) and Victoria Falls (VFA). For internal charter flights within Namibia, we handle everything.',
  },
  {
    q: 'What if there is an emergency?',
    a: 'You have a direct line to your planning team throughout your journey, and we coordinate with local partners and medical evacuation services as needed. Travel insurance covering medical evacuation is mandatory for every booking.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '300px' }}>
            <Photo
              base="etosha-detail"
              alt="A breeding herd of elephants moving across red earth in Etosha."
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
              <p className="wp-subhead text-[0.62rem] text-[#F2EDE3]/85 mb-4">Questions</p>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95]">
                Asked often, answered straight.
              </h1>
            </div>
          </div>
        </section>

        {/* Accordion — native details/summary, keyboard accessible, no JS */}
        <section className="py-14 md:py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-[#1A1A1A]/15">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="wp-display text-lg md:text-xl leading-snug group-hover:text-[#9E4214] transition-colors">
                    {faq.q}
                  </span>
                  <Plus
                    size={18}
                    className="shrink-0 text-[#9E4214] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-6 pr-8 text-base text-[#1A1A1A]/80 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}

            <div className="mt-12 wp-reveal">
              <p className="text-base text-[#1A1A1A]/70 leading-relaxed">
                Not answered here? Write to{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-[#9E4214] hover:underline">
                  {SITE_EMAIL}
                </a>{' '}
                or send a WhatsApp. A person answers, usually the same day.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={15} />
                  WhatsApp us
                </a>
                <Link
                  href="/contact"
                  className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
                >
                  Contact page
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
