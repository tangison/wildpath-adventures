import { NextResponse } from 'next/server';
import { z } from 'zod';
import { promises as fs } from 'fs';
import path from 'path';
import { SITE } from '@/lib/site';

// ═══════════════════════════════════════════════════════════
// Enquiry API — production-grade
//
// Validation:     Zod schema, server-side
// Sanitization:   All string inputs trimmed and length-capped
// Spam protection: Honeypot field ("website") — bots fill it, we reject
// Rate limiting:  In-memory per-IP, 5 submissions per hour
// Storage:        Optional JSON file append (ENQUIRY_STORE_PATH env)
// Email:          Optional SMTP send (SMTP_URL env) — not yet implemented
//                  (placeholder documented in TODO below)
// Privacy:        Enquiry data is never logged to console in production
// ═══════════════════════════════════════════════════════════

const EnquirySchema = z.object({
  name: z.string().min(2, 'Name is required').max(120),
  email: z.string().email('Valid email is required').max(200),
  phone: z.string().min(4, 'Phone or WhatsApp is required').max(60),
  country: z.string().min(2, 'Country is required').max(100),
  journey: z.string().min(1, 'Please select a journey').max(60),
  travelMonth: z.string().min(2, 'Estimated travel month is required').max(60),
  travellers: z.string().min(1).max(20),
  message: z.string().min(10, 'Please tell us a little more about your journey').max(5000),
  travelStyle: z.string().max(60).optional().default(''),
  duration: z.string().max(60).optional().default(''),
  interests: z.string().max(300).optional().default(''),
  consent: z.boolean().refine((v) => v === true, 'Please agree to the privacy policy'),
  // Honeypot — must be empty
  website: z.string().max(0, 'Spam detected').optional().default(''),
});

// In-memory rate limiter (per server instance; resets on cold start)
// For production at scale, replace with Vercel KV or Upstash Redis.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; firstAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (now - entry.firstAt > RATE_LIMIT_WINDOW_MS) {
    // Window expired, reset
    rateLimitMap.set(ip, { count: 1, firstAt: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitize(s: string): string {
  return s.trim().replace(/\s+/g, ' ');
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  return 'unknown';
}

async function appendEnquiryToStore(data: Record<string, unknown>) {
  const storePath = SITE.enquiryStorePath;
  if (!storePath) return false;

  try {
    const dir = path.dirname(storePath);
    await fs.mkdir(dir, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(storePath, 'utf-8');
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist yet — start fresh
    }

    existing.push({
      id: `enq_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      receivedAt: new Date().toISOString(),
      ip: 'redacted', // Never persist IP
      ...data,
    });

    await fs.writeFile(storePath, JSON.stringify(existing, null, 2), 'utf-8');
    return true;
  } catch (err) {
    // Don't leak file errors to client
    if (process.env.NODE_ENV !== 'production') {
      console.error('[enquiry] Failed to write to store:', err);
    }
    return false;
  }
}

// TODO (SMTP): When SMTP_URL is configured, import nodemailer and send mail:
//
//   if (SITE.smtpUrl) {
//     const transporter = nodemailer.createTransport(SITE.smtpUrl);
//     await transporter.sendMail({
//       from: SITE.email,
//       to: SITE.enquiryRecipient,
//       subject: `New enquiry: ${data.name} — ${data.journey}`,
//       text: JSON.stringify(data, null, 2),
//     });
//   }
//
// Until then, the enquiry is persisted to ENQUIRY_STORE_PATH (if set)
// and the ops team retrieves it from there.

export async function POST(request: Request) {
  try {
    // Rate limit check
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many enquiries from your address. Please try again later or use WhatsApp.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot — check BEFORE Zod validation so bots get a silent success
    // regardless of how they filled the other fields.
    if (body && typeof body === 'object' && 'website' in body && typeof body.website === 'string' && body.website.length > 0) {
      // Pretend success so bots don't retry
      return NextResponse.json({ ok: true, message: 'Enquiry received.' });
    }

    const parsed = EnquirySchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || 'Invalid enquiry';
      return NextResponse.json(
        { error: firstError },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Sanitize all string fields
    const sanitized = {
      name: sanitize(data.name),
      email: sanitize(data.email),
      phone: sanitize(data.phone),
      country: sanitize(data.country),
      journey: sanitize(data.journey),
      travelMonth: sanitize(data.travelMonth),
      travellers: sanitize(data.travellers),
      message: sanitize(data.message),
      travelStyle: sanitize(data.travelStyle || ''),
      duration: sanitize(data.duration || ''),
      interests: sanitize(data.interests || ''),
      consent: data.consent,
    };

    // Persist to file store (if configured)
    const stored = await appendEnquiryToStore(sanitized);

    // In production, never log enquiry contents — only an opaque receipt
    if (process.env.NODE_ENV !== 'production') {
      console.log('[enquiry] Received enquiry from', sanitized.email, '— stored:', stored);
    }

    return NextResponse.json({
      ok: true,
      message: 'Enquiry received. We aim to reply within two business days.',
    });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[enquiry] Error:', err);
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try WhatsApp instead.' },
      { status: 500 }
    );
  }
}

// GET — simple health check (used by ops, not exposed in UI)
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'wildpath-enquiry',
    storage: SITE.enquiryStorePath ? 'file' : 'none',
    smtp: SITE.smtpUrl ? 'configured' : 'not-configured',
  });
}
