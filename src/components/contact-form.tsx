'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Check, Loader2 } from 'lucide-react';
import { AcaciaMark } from '@/components/wildpath';
import { WHATSAPP_URL } from '@/lib/site';
import { JOURNEYS } from '@/lib/journeys';

const EASE_PREMIUM = [0.4, 0, 0.2, 1] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  journey: string;
  travelMonth: string;
  travellers: string;
  message: string;
  travelStyle: string;
  duration: string;
  interests: string;
  consent: boolean;
  // Honeypot — bots fill this, humans don't
  website: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  country: '',
  journey: '',
  travelMonth: '',
  travellers: '2',
  message: '',
  travelStyle: '',
  duration: '',
  interests: '',
  consent: false,
  website: '',
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

    // Client-side guard: consent required
    if (!form.consent) {
      setError('Please agree to the privacy policy so we can respond to your enquiry.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
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
          We aim to reply within two business days. For an immediate response,
          message us on WhatsApp.
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
      {/* Required fields */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full name *</label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
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
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone or WhatsApp *</label>
          <input
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+country code and number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>Country of residence *</label>
          <input
            id="country"
            type="text"
            required
            autoComplete="country-name"
            value={form.country}
            onChange={(e) => update('country', e.target.value)}
            placeholder="e.g. Germany, South Africa, USA"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="journey" className={labelClass}>Journey of interest *</label>
          <select
            id="journey"
            required
            value={form.journey}
            onChange={(e) => update('journey', e.target.value)}
            className={inputClass}
          >
            <option value="">Select a journey</option>
            {JOURNEYS.map((j) => (
              <option key={j.slug} value={j.slug}>
                {j.name} ({j.duration})
              </option>
            ))}
            <option value="custom">A custom journey</option>
            <option value="not-sure">Not sure yet — help me choose</option>
          </select>
        </div>
        <div>
          <label htmlFor="travelMonth" className={labelClass}>Estimated travel month *</label>
          <input
            id="travelMonth"
            type="text"
            required
            value={form.travelMonth}
            onChange={(e) => update('travelMonth', e.target.value)}
            placeholder="e.g. July 2026, or flexible"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="travellers" className={labelClass}>Number of travellers *</label>
        <select
          id="travellers"
          required
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

      {/* Optional fields */}
      <div className="pt-2 border-t border-[#1A1A1A]/10">
        <p className="wp-subhead text-[0.6rem] tracking-[0.22em] text-[#9E4214] mb-4 pt-2">Optional — help us plan better</p>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="travelStyle" className={labelClass}>Preferred travel style</label>
            <select
              id="travelStyle"
              value={form.travelStyle}
              onChange={(e) => update('travelStyle', e.target.value)}
              className={inputClass}
            >
              <option value="">No preference</option>
              <option value="self-drive">Self-drive</option>
              <option value="guided">Guided</option>
              <option value="mixed">A mix of both</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration" className={labelClass}>Approximate duration</label>
            <input
              id="duration"
              type="text"
              value={form.duration}
              onChange={(e) => update('duration', e.target.value)}
              placeholder="e.g. 10–14 days"
              className={inputClass}
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="interests" className={labelClass}>Special interests</label>
          <input
            id="interests"
            type="text"
            value={form.interests}
            onChange={(e) => update('interests', e.target.value)}
            placeholder="e.g. photography, birding, hiking, cultural experiences"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Your message *</label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us about the journey you have in mind — what you want to see, what pace suits you, any must-haves or must-avoids. The more you share, the better the first draft."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Consent checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#C5511A]"
          required
        />
        <label htmlFor="consent" className="text-xs text-[#1A1A1A]/75 leading-relaxed">
          I agree to the{' '}
          <a href="/privacy" className="text-[#9E4214] hover:underline">privacy policy</a>{' '}
          and consent to Wildpath Adventures responding to my enquiry.
        </label>
      </div>

      {/* Honeypot — visually hidden, bots fill it */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="website">Website (leave empty)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update('website', e.target.value)}
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
              Request This Journey
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
        We aim to reply within two business days. Your details are only used to
        plan your journey — see our{' '}
        <a href="/privacy" className="underline hover:text-[#9E4214]">privacy policy</a>.
      </p>
    </form>
  );
}
