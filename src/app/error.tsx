'use client';

import { Nav, Footer } from '@/components/wildpath';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/site';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EDE3] text-[#1A1A1A] font-sans selection:bg-[#C5511A] selection:text-[#F2EDE3] overflow-x-hidden">
      <Nav />

      <main className="flex-1 flex items-center justify-center px-6 md:px-12 py-16">
        <div className="max-w-lg w-full text-center">
          <p className="wp-subhead text-[0.65rem] tracking-[0.35em] text-[#9E4214] mb-4">
            The route hit a snag
          </p>

          <h1 className="wp-display text-5xl md:text-6xl text-[#1A1A1A] leading-[0.9] mb-6">
            Something went wrong.
          </h1>

          <p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-8">
            We could not load this page. You can try again below, or reach us
            directly on WhatsApp for immediate help.
          </p>

          {error.digest && (
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1A1A1A]/40 mb-8">
              Reference: {error.digest}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors inline-flex items-center gap-3 cursor-pointer"
            >
              Try again
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

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
      </main>

      <Footer />
    </div>
  );
}
