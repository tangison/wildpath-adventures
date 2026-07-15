import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Wordmark, AcaciaMark } from '@/components/wildpath';
import { WHATSAPP_URL } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <header className="pt-10 px-6 md:px-12 border-b border-[#1A1A1A]/15">
        <div className="max-w-7xl mx-auto flex justify-between items-center pb-6">
          <Link href="/" aria-label="Home">
            <Wordmark size="sm" />
          </Link>
          <Link
            href="/"
            className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]/70 hover:text-[#9E4214] transition-colors flex items-center gap-2"
          >
            Back to Home <ArrowRight size={12} />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <AcaciaMark className="w-24 h-16 text-[#1A1A1A]/40" />
            <p className="wp-script text-2xl text-[#9E4214] mt-4">404</p>
          </div>
          <div className="md:col-span-8 md:pl-8 md:border-l md:border-[#1A1A1A]/20">
            <p className="wp-subhead text-[0.65rem] tracking-[0.35em] text-[#9E4214] mb-4">
              The route is not charted
            </p>
            <h1 className="wp-display text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-[0.9] mb-6">
              Off the map.
            </h1>
            <p className="text-lg text-[#1A1A1A]/70 max-w-lg leading-relaxed mb-8">
              The page you are looking for does not exist — or has moved. The map
              below will get you back on route.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors inline-flex items-center gap-3"
              >
                Back to Home
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors inline-flex items-center gap-3"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-6 text-center text-[0.6rem] tracking-[0.2em] uppercase text-[#1A1A1A]/45 border-t border-[#1A1A1A]/10">
        &copy; {new Date().getFullYear()} Wildpath Adventures · Windhoek, Namibia
      </footer>
    </div>
  );
}
