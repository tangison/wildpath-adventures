import type { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Nav, Footer } from '@/components/wildpath';
import { Photo } from '@/components/photo';
import { ContactForm } from '@/components/contact-form';
import { SITE, WHATSAPP_URL, TEL_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start your Namibian journey: tell us when you are coming, for how long, and what you want to feel. A person replies, usually the same day.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans overflow-x-hidden">
      <Nav />
      <main id="main-content" className="flex-1">
        {/* Photo header */}
        <section className="relative">
          <div className="wp-photo" style={{ aspectRatio: '21 / 9', minHeight: '300px' }}>
            <Photo
              base="sossusvlei-2"
              alt="A walker on a dune crest high above the Namib sand sea."
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
              <p className="wp-subhead text-[0.62rem] text-[#F2EDE3]/85 mb-4">Contact</p>
              <h1 className="wp-display text-4xl md:text-7xl text-[#F2EDE3] leading-[0.95] max-w-[16ch]">
                Every route starts with a conversation.
              </h1>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: the form */}
            <div className="lg:col-span-7 wp-reveal">
              <h2 className="wp-display text-2xl md:text-4xl leading-[0.98] mb-4">
                Tell us how you travel.
              </h2>
              <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-8">
                Dates, party size and the shape of trip you imagine are enough
                to start. The more you tell us, the sharper the first proposal.
              </p>
              <ContactForm />
            </div>

            {/* Right: direct channels */}
            <div className="lg:col-span-5 wp-reveal" data-reveal-delay="1">
              <h2 className="wp-display text-2xl md:text-4xl leading-[0.98] mb-4">
                Or reach us directly.
              </h2>
              <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-8">
                No ticket queues. No auto-repliers. The person who answers is
                the person who plans your journey.
              </p>

              <div className="space-y-px bg-[#1A1A1A]/12">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-[#F2EDE3] p-5 md:p-6 hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  <span className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 group-hover:border-[#F2EDE3]/30 transition-colors">
                    <MessageCircle size={17} className="text-[#9E4214] group-hover:text-[#E8854A] transition-colors" />
                  </span>
                  <span>
                    <span className="wp-subhead text-[0.55rem] text-[#9E4214] block mb-1">WhatsApp, fastest</span>
                    <span className="text-base md:text-lg text-[#1A1A1A] group-hover:text-[#F2EDE3] transition-colors">
                      {SITE.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 bg-[#F2EDE3] p-5 md:p-6 hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  <span className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 group-hover:border-[#F2EDE3]/30 transition-colors">
                    <Mail size={17} className="text-[#9E4214] group-hover:text-[#E8854A] transition-colors" />
                  </span>
                  <span className="min-w-0">
                    <span className="wp-subhead text-[0.55rem] text-[#9E4214] block mb-1">Email</span>
                    <span className="text-base md:text-lg text-[#1A1A1A] group-hover:text-[#F2EDE3] transition-colors break-all">
                      {SITE.email}
                    </span>
                  </span>
                </a>
                <a
                  href={TEL_URL}
                  className="group flex items-center gap-4 bg-[#F2EDE3] p-5 md:p-6 hover:bg-[#1A1A1A] transition-colors duration-300"
                >
                  <span className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 group-hover:border-[#F2EDE3]/30 transition-colors">
                    <Phone size={17} className="text-[#9E4214] group-hover:text-[#E8854A] transition-colors" />
                  </span>
                  <span>
                    <span className="wp-subhead text-[0.55rem] text-[#9E4214] block mb-1">Phone, office hours</span>
                    <span className="text-base md:text-lg text-[#1A1A1A] group-hover:text-[#F2EDE3] transition-colors">
                      {SITE.phone}
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-4 bg-[#F2EDE3] p-5 md:p-6">
                  <span className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-[#9E4214]" />
                  </span>
                  <span>
                    <span className="wp-subhead text-[0.55rem] text-[#9E4214] block mb-1">Based in</span>
                    <span className="text-base md:text-lg text-[#1A1A1A]">
                      {SITE.location.city}, {SITE.location.region}, {SITE.location.country}
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-8 wp-photo wp-img-reveal" style={{ aspectRatio: '4 / 3' }}>
                <Photo
                  base="thatched-hillside"
                  alt="Thatched chalets on poles at the foot of a granite hill at dusk."
                  aspect="4 / 3"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  reveal={false}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
