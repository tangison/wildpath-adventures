/**
 * Wildpath Adventures — Single source of truth for site-wide config.
 *
 * Static site: no server-side env lookups remain. Client-safe values only.
 * To migrate domains or change recipients, edit this file — components read
 * from here, never hardcode.
 *
 *   NEXT_PUBLIC_SITE_URL         — canonical URL (with protocol)
 *   NEXT_PUBLIC_CONTACT_EMAIL    — public enquiry address
 *   NEXT_PUBLIC_PHONE_DISPLAY    — human-readable phone
 *   NEXT_PUBLIC_PHONE_E164       — E.164 for tel: and wa.me links
 */

export const SITE = {
  /** Canonical domain — change via NEXT_PUBLIC_SITE_URL in build env */
  domain: 'wildpathnamibia.com',
  /** Canonical URL with protocol */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wildpathnamibia.com',
  name: 'Wildpath Adventures',
  tagline: 'Slow down. Breathe. Discover Namibia.',
  /** Public enquiry email — shown to users. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'journeys@wildpathnamibia.com',
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
