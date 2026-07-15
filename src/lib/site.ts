/**
 * Wildpath Adventures — Single source of truth for site-wide config.
 *
 * All values derive from environment variables with safe production defaults.
 * To migrate domains or change recipients, edit .env — never edit components.
 *
 * Required env vars (see .env.example):
 *   NEXT_PUBLIC_SITE_DOMAIN      — canonical domain (no protocol)
 *   NEXT_PUBLIC_SITE_URL         — canonical URL (with protocol)
 *   CONTACT_EMAIL                — public enquiry address (server + client safe via NEXT_PUBLIC_ prefix mirror)
 *   CONTACT_RECIPIENT            — internal mailbox that receives form submissions (server only)
 *   PHONE_DISPLAY                — human-readable phone
 *   PHONE_E164                   — E.164 for tel: and wa.me links
 *
 * Optional:
 *   SMTP_URL                     — if set, enquiry form sends real email (server only)
 *   ENQUIRY_STORE_PATH           — if set, enquiries are appended to this JSON file (server only)
 */

function required(name: string, fallback: string): string {
  const val = process.env[name];
  if (!val) {
    // In production builds we want this to be explicit; in dev we fall back.
    if (process.env.NODE_ENV === 'production') {
      // We still allow fallback for first-deploy safety, but log a warning.
      console.warn(`[site] Env var ${name} not set — using fallback ${fallback}`);
    }
    return fallback;
  }
  return val;
}

export const SITE = {
  /** Canonical domain — change via NEXT_PUBLIC_SITE_DOMAIN in .env */
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'wildpathnamibia.com',
  /** Canonical URL with protocol */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wildpathnamibia.com',
  name: 'Wildpath Adventures',
  tagline: 'Travel the untamed beauty',
  /** Public enquiry email — shown to users. Mirror of CONTACT_EMAIL for client-side use. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'journeys@wildpathnamibia.com',
  /** Internal mailbox that actually receives form submissions (server only). */
  enquiryRecipient: process.env.CONTACT_RECIPIENT || 'journeys@wildpathnamibia.com',
  /** SMTP connection URL — if set, the enquiry API sends real email. */
  smtpUrl: process.env.SMTP_URL || '',
  /** Path to append JSON enquiry log to (server only, optional). */
  enquiryStorePath: process.env.ENQUIRY_STORE_PATH || '',
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+264 81 255 7741',
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || '264812557741',
  location: {
    city: 'Windhoek',
    region: 'Khomas Region',
    country: 'Namibia',
  },
  /**
   * Social accounts — only populated when Juliet supplies official handles.
   * Until then, the footer omits social icons entirely (no fake links).
   * To enable: set NEXT_PUBLIC_INSTAGRAM_URL etc in .env
   */
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
  },
  studio: {
    name: 'Tangison Studio',
    url: 'https://studio.tangison.com',
  },
} as const;

// Convenience aliases used throughout the app
export const SITE_EMAIL = SITE.email;
export const SITE_URL = SITE.url;
export const WHATSAPP_URL = `https://wa.me/${SITE.phoneE164}`;
export const TEL_URL = `tel:+${SITE.phoneE164}`;

/**
 * Returns the list of social links that are actually configured.
 * Used by the footer to render only real, configured accounts.
 */
export function configuredSocialLinks(): { label: string; url: string; short: string }[] {
  const links: { label: string; url: string; short: string }[] = [];
  if (SITE.social.instagram) links.push({ label: 'Instagram', url: SITE.social.instagram, short: 'IG' });
  if (SITE.social.facebook) links.push({ label: 'Facebook', url: SITE.social.facebook, short: 'FB' });
  if (SITE.social.youtube) links.push({ label: 'YouTube', url: SITE.social.youtube, short: 'YT' });
  return links;
}
