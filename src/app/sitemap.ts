import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/journeys',
    '/destinations',
    '/about',
    '/field-notes',
    '/contact',
    '/brand',
    '/faq',
    '/privacy',
    '/terms',
    '/cancellation',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const journeyEntries: MetadataRoute.Sitemap = JOURNEYS.map((j) => ({
    url: `${SITE_URL}/journeys/${j.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const destinationEntries: MetadataRoute.Sitemap = DESTINATIONS.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...journeyEntries, ...destinationEntries];
}
