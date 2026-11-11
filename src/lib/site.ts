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
  /** Canonical domain — the client's own domain (Cloudflare DNS → Vercel).
   *  wildpath.tangison.com is retired; www redirects to the root at Vercel. */
  domain: 'wildpathnamibia.com',
  /** Canonical URL with protocol */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wildpathnamibia.com',
  name: 'Wildpath Adventures',
  tagline: 'Slow down. Breathe. Discover Namibia.',
  /** Public enquiry email — shown to users. Mirror of CONTACT_EMAIL for client-side use. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'journeys@wildpathnamibia.com',
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+264 81 270 4244',
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || '264812704244',
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
  /**
   * Namibia Tourism Board registration number.
   *
   * Confirmed by the client (NTB certificate): TFA01662. Shipped as the
   * default so every NTB badge renders it; NEXT_PUBLIC_NTB_REG_NUMBER still
   * overrides for build-env flexibility. Badges link to the NTB Business
   * Directory where the number can be verified.
   */
  ntbRegNumber: process.env.NEXT_PUBLIC_NTB_REG_NUMBER || 'TFA01662',
  /** Official NTB site + Business Directory (searchable by registration number). */
  ntbUrl: 'https://visitnamibia.com.na',
  ntbDirectoryUrl: 'https://visitnamibia.com.na/business-directory/',
} as const;

// Convenience aliases used throughout the app
export const SITE_EMAIL = SITE.email;
export const NTB_REG_NUMBER = SITE.ntbRegNumber;
export const NTB_DIRECTORY_URL = SITE.ntbDirectoryUrl;
export const SITE_URL = SITE.url;
/** WhatsApp deep link with a short prefilled greeting so the chat starts warm. */
export const WHATSAPP_URL = `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(
  'Hello Wildpath Adventures, I would like to plan a journey to Namibia.'
)}`;
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
