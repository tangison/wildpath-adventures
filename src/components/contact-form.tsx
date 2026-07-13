'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, ArrowRight, Check, Loader2 } from 'lucide-react';
import { AcaciaMark } from '@/components/wildpath';
import { SITE, SITE_EMAIL, WHATSAPP_URL, TEL_URL } from '@/lib/site';
import { JOURNEYS } from '@/lib/journeys';

const EASE_PREMIUM = [0.4, 0, 0.2, 1] as const;

type FormState = {
  name: string;
  email: string;
  whatsapp?: string;
  journey: string;
  travellers: string;
  dates: string;
  message: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  whatsapp: '',
  journey: '',
  travellers: '2',
  dates: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try WhatsApp instead.');
      }
      setStatus('success');
      setForm(INITIAL);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  // ═══ SUCCESS STATE ═══
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
        className="bg-[#E8E3D5] p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C5511A] flex items-center justify-center">
          <Check size={28} className="text-[#F2EDE3]" strokeWidth={2.5} />
        </div>
        <p className="wp-script text-2xl text-[#9E4214] mb-3">Thank you</p>
        <h3 className="wp-display text-3xl md:text-4xl text-[#1A1A1A] mb-4 leading-tight">
          Your enquiry is on its way.
        </h3>
        <p className="text-base text-[#1A1A1A]/75 leading-relaxed max-w-md mx-auto mb-8">
          We answer every enquiry within two days — usually faster. For an immediate
          response, message us on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] text-[#F2EDE3] px-6 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors inline-flex items-center gap-3 justify-center"
          >
            <MessageCircle size={15} />
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="border border-[#1A1A1A] text-[#1A1A1A] px-6 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors"
          >
            Send another enquiry
          </button>
        </div>
      </motion.div>
    );
  }

  // ═══ FORM ═══
  const inputClass =
    'w-full bg-[#F2EDE3] border border-[#1A1A1A]/15 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#C5511A] focus:ring-1 focus:ring-[#C5511A] transition-colors';
  const labelClass = 'wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-2 block';

  return (
    <form onSubmit={handleSubmit} className="bg-[#F2EDE3] p-6 md:p-10 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="whatsapp" className={labelClass}>WhatsApp / Phone</label>
          <input
            id="whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
            placeholder="+country code and number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="travellers" className={labelClass}>Travellers</label>
          <select
            id="travellers"
            value={form.travellers}
            onChange={(e) => update('travellers', e.target.value)}
            className={inputClass}
          >
            <option value="1">1 traveller</option>
            <option value="2">2 travellers</option>
            <option value="3-4">3–4 travellers</option>
            <option value="5-6">5–6 travellers</option>
            <option value="7+">7+ travellers (group)</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="journey" className={labelClass}>Journey of interest</label>
          <select
            id="journey"
            value={form.journey}
            onChange={(e) => update('journey', e.target.value)}
            className={inputClass}
          >
            <option value="">Not sure yet — help me choose</option>
            {JOURNEYS.map((j) => (
              <option key={j.slug} value={j.slug}>
                {j.name} ({j.duration})
              </option>
            ))}
            <option value="custom">A custom journey</option>
          </select>
        </div>
        <div>
          <label htmlFor="dates" className={labelClass}>Approx. dates</label>
          <input
            id="dates"
            type="text"
            value={form.dates}
            onChange={(e) => update('dates', e.target.value)}
            placeholder="e.g. July 2026, or flexible"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your journey *</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="What do you want to see? What pace? Any must-haves or must-avoids? The more you tell us, the better the first draft."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <div className="bg-[#C5511A]/10 border border-[#C5511A]/30 px-4 py-3 text-sm text-[#9E4214]">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Request This Safari
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
        >
          <MessageCircle size={15} />
          Or WhatsApp Us
        </a>
      </div>
      <p className="text-xs text-[#1A1A1A]/55 pt-2">
        We answer every enquiry within two days. Your details are only used to plan
        your journey — see our <a href="/privacy" className="underline hover:text-[#9E4214]">privacy policy</a>.
      </p>
    </form>
  );
}
