import { NextResponse } from 'next/server';
import { z } from 'zod';

const EnquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  whatsapp: z.string().optional().default(''),
  journey: z.string().optional().default(''),
  travellers: z.string().optional().default(''),
  dates: z.string().optional().default(''),
  message: z.string().min(10, 'Please tell us a little more about your journey'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = EnquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Invalid enquiry' },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Log the enquiry — in production this would also email journeys@[domain]
    // and write to a Prisma Enquiry model. For now, structured log.
    console.log('[Wildpath Enquiry]', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // TODO: when SMTP is configured, send to SITE_EMAIL.
    // The single value to change is SITE.domain in /src/lib/site.ts.

    return NextResponse.json({
      ok: true,
      message: 'Enquiry received. We answer within two days.',
    });
  } catch (err) {
    console.error('[Wildpath Enquiry] Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try WhatsApp instead.' },
      { status: 500 }
    );
  }
}
