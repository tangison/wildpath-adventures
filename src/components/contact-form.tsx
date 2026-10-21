'use client';

import { useState } from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { JOURNEYS } from '@/lib/journeys';
import { SITE, SITE_EMAIL, WHATSAPP_URL } from '@/lib/site';

/**
 * ContactForm — static-site enquiry form.
 * There is no backend: the form composes a structured enquiry and hands it
 * to WhatsApp (primary, the channel the client answers fastest) with a
 * mailto fallback. Every field is validated natively before hand-off.
 */
type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  journey: string;
  travelMonth: string;
  travellers: string;
  travelStyle: string;
  duration: string;
  interests: string;
  message: string;
  consent: boolean;
  // honeypot — bots fill it, humans never see it
  website: string;
};

const EMPTY: FormState = {
  name: '', email: '', phone: '', country: '', journey: '', travelMonth: '',
  travellers: '2', travelStyle: '', duration: '', interests: '', message: '',
  consent: false, website: '',
};

const inputClass =
  'w-full bg-[#F2EDE3] border border-[#1A1A1A]/15 px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#C5511A] focus:ring-1 focus:ring-[#C5511A] transition-colors';
const labelClass = 'wp-subhead text-[0.58rem] text-[#9E4214] mb-2 block';

/**
 * Builds a mailto: draft with the full enquiry. Static site: no server.
 * The submit button hands the visitor to their own mail app with
 * everything prefilled, addressed to the Wildpath enquiry inbox.
 */
function buildMailtoUrl(f: FormState): string {
  const journeyName =
    (JOURNEYS.find((j) => j.slug === f.journey)?.name ?? f.journey) || 'Not selected';
  const lines = [
    `New enquiry from ${f.name || '—'} (${f.country || '—'})`,
    `Email: ${f.email || '—'} · Phone/WhatsApp: ${f.phone || '—'}`,
    `Journey: ${journeyName} · Travel: ${f.travelMonth || '—'} · Travellers: ${f.travellers}`,
  ];
  if (f.travelStyle) lines.push(`Style: ${f.travelStyle}`);
  if (f.duration) lines.push(`Duration: ${f.duration}`);
  if (f.interests) lines.push(`Interests: ${f.interests}`);
  lines.push('', f.message || '—');
  const subject = `Journey enquiry, ${f.name || 'via wildpathnamibia.com'}`;
  return `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [handedOff, setHandedOff] = useState<'whatsapp' | 'email' | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const buildSummary = (f: FormState) => {
    const lines = [
      `New journey enquiry from the website`,
      ``,
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      `Phone/WhatsApp: ${f.phone}`,
      `Country: ${f.country}`,
      `Journey of interest: ${f.journey}`,
      `Travel month: ${f.travelMonth}`,
      `Travellers: ${f.travellers}`,
      f.travelStyle ? `Travel style: ${f.travelStyle}` : '',
      f.duration ? `Duration: ${f.duration}` : '',
      f.interests ? `Special interests: ${f.interests}` : '',
      ``,
      `Message:`,
      f.message,
    ].filter((l) => l !== '');
    return lines.join('\n');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot: pretend success for bots.
    if (form.website) {
      setHandedOff('whatsapp');
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.country.trim()) {
      setError('Please fill in your name, email, phone and country of residence.');
      return;
    }
    if (!form.journey || !form.travelMonth || !form.travellers) {
      setError('Please choose a journey, a travel month and the number of travellers.');
      return;
    }
    if (!form.message.trim()) {
      setError('Please add a short message about your trip.');
      return;
    }
    if (!form.consent) {
      setError('Please accept the privacy notice so we may reply to you.');
      return;
    }

    const summary = buildSummary(form);
    const wa = `${WHATSAPP_URL}?text=${encodeURIComponent(summary)}`;
    window.open(wa, '_blank', 'noopener,noreferrer');
    setHandedOff('whatsapp');
  };

  const emailFallback = () => {
    const subject = `Journey enquiry: ${form.journey || 'Namibia'} \u2014 ${form.name || 'website'}`;
    const body = buildSummary(form);
    window.location.href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setHandedOff('email');
  };

  if (handedOff) {
    return (
      <div className="bg-[#F2EDE3] border border-[#1A1A1A]/15 p-8 md:p-10">
        <p className="wp-subhead text-[0.6rem] text-[#9E4214] mb-3">
          {handedOff === 'whatsapp' ? 'WhatsApp opened' : 'Email draft opened'}
        </p>
        <h3 className="wp-display text-2xl md:text-3xl mb-4">Your enquiry is ready to send.</h3>
        <p className="text-base text-[#1A1A1A]/75 leading-relaxed mb-6">
          {handedOff === 'whatsapp'
            ? 'Press send in WhatsApp and it lands with us instantly. A person replies, usually the same day.'
            : 'Press send in your mail app and we will reply within two business days.'}
        </p>
        <button
          onClick={() => { setForm(EMPTY); setHandedOff(null); }}
          className="text-xs font-bold tracking-[0.18em] uppercase text-[#9E4214] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-2"
        >
          Write another enquiry <ArrowRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="relative bg-[#F2EDE3] border border-[#1A1A1A]/15 p-6 md:p-10">
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off"
          value={form.website} onChange={(e) => set('website', e.target.value)} />
      </div>

      <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full name *</label>
          <input id="name" type="text" required autoComplete="name" className={inputClass}
            placeholder="Your full name" value={form.name} onChange={(e) => set('name', e.target.value)} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" type="email" required autoComplete="email" className={inputClass}
            placeholder="you@example.com" value={form.email} onChange={(e) => set('email', e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone or WhatsApp *</label>
          <input id="phone" type="tel" required autoComplete="tel" className={inputClass}
            placeholder="+ country code and number" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>Country of residence *</label>
          <input id="country" type="text" required autoComplete="country-name" className={inputClass}
            placeholder="e.g. Germany, South Africa, USA" value={form.country} onChange={(e) => set('country', e.target.value)} />
        </div>
        <div>
          <label htmlFor="journey" className={labelClass}>Journey of interest *</label>
          <select id="journey" required className={inputClass} value={form.journey}
            onChange={(e) => set('journey', e.target.value)}>
            <option value="">Choose one</option>
            {JOURNEYS.map((j) => (
              <option key={j.slug} value={j.name}>{j.name}</option>
            ))}
            <option value="Custom journey">A custom journey</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="travelMonth" className={labelClass}>Estimated travel month *</label>
          <input id="travelMonth" type="text" required className={inputClass}
            placeholder="e.g. July 2026, or flexible" value={form.travelMonth}
            onChange={(e) => set('travelMonth', e.target.value)} />
        </div>
        <div>
          <label htmlFor="travellers" className={labelClass}>Number of travellers *</label>
          <input id="travellers" type="number" min={1} max={12} required className={inputClass}
            value={form.travellers} onChange={(e) => set('travellers', e.target.value)} />
        </div>
        <div>
          <label htmlFor="travelStyle" className={labelClass}>Preferred travel style</label>
          <select id="travelStyle" className={inputClass} value={form.travelStyle}
            onChange={(e) => set('travelStyle', e.target.value)}>
            <option value="">No preference</option>
            <option value="Self-drive">Self-drive</option>
            <option value="Guided">Guided</option>
            <option value="Mix of both">A mix of both</option>
          </select>
        </div>
        <div>
          <label htmlFor="duration" className={labelClass}>Approximate duration</label>
          <input id="duration" type="text" className={inputClass}
            placeholder="e.g. 10 to 14 days" value={form.duration} onChange={(e) => set('duration', e.target.value)} />
        </div>
        <div>
          <label htmlFor="interests" className={labelClass}>Special interests</label>
          <input id="interests" type="text" className={inputClass}
            placeholder="e.g. photography, birding, hiking, culture" value={form.interests}
            onChange={(e) => set('interests', e.target.value)} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>Your message *</label>
        <textarea id="message" required rows={5} className={inputClass}
          placeholder="Tell us about the trip you have in mind: pace, must-see places, celebrations, anything that matters."
          value={form.message} onChange={(e) => set('message', e.target.value)} />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input id="consent" type="checkbox" required checked={form.consent}
          onChange={(e) => set('consent', e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#C5511A]" />
        <label htmlFor="consent" className="text-xs text-[#1A1A1A]/70 leading-relaxed">
          I agree that Wildpath Adventures may use these details to reply to my
          enquiry, as described in the privacy notice. *
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-[#9E4214] bg-[#9E4214]/10 border border-[#9E4214]/25 px-4 py-3">
          {error}
        </p>
      )}

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="group bg-[#1A1A1A] text-[#F2EDE3] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#C5511A] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
        >
          <MessageCircle size={15} />
          Send enquiry on WhatsApp
        </button>
        <button
          type="button"
          onClick={emailFallback}
          className="border border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#1A1A1A] hover:text-[#F2EDE3] transition-colors duration-300 inline-flex items-center gap-3 justify-center"
        >
          <Mail size={15} />
          Send by email instead
        </button>
      </div>

      <p className="mt-4 text-xs text-[#1A1A1A]/55 leading-relaxed">
        WhatsApp opens with your enquiry pre-filled. Nothing is sent until you
        press send there. Prefer email? Use the second button, or write directly
        to {SITE.email}. We aim to reply within two business days.
      </p>
    </form>
  );
}
