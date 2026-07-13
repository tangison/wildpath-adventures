/**
 * Wildpath Adventures — Single source of truth for site-wide config.
 *
 * To migrate to the final domain later, change ONE value:
 *   SITE.domain
 * Everything else (email, metadataBase, sitemap) derives from it.
 */

export const SITE = {
  /** Production domain — change this single value when the final domain is configured. */
  domain: 'wildpathnamibia.com',
  name: 'Wildpath Adventures',
  tagline: 'Travel the Untamed Beauty',
  /** Primary enquiry email. journeys@ fits the brand voice better than sales@ or bookings@. */
  emailLocalPart: 'journeys',
  phone: '+264 81 255 7741',
  /** Phone in E.164 format for tel: and wa.me links. */
  phoneE164: '264812557741',
  whatsappDisplay: '+264 81 255 7741',
  location: {
    city: 'Windhoek',
    region: 'Khomas Region',
    country: 'Namibia',
  },
  social: {
    instagram: 'https://instagram.com/wildpathadventures',
    facebook: 'https://facebook.com/wildpathadventures',
    youtube: 'https://youtube.com/@wildpathadventures',
  },
  studio: {
    name: 'Tangison Studio',
    url: 'https://studio.tangison.com',
  },
} as const;

export const SITE_EMAIL = `${SITE.emailLocalPart}@${SITE.domain}`;
export const WHATSAPP_URL = `https://wa.me/${SITE.phoneE164}`;
export const TEL_URL = `tel:+${SITE.phoneE164}`;
export const SITE_URL = `https://${SITE.domain}`;
