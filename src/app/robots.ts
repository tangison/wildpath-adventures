import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Static export: this route is pre-rendered at build time.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
