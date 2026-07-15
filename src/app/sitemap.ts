import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', priority: 1 },
    { path: '/journeys', priority: 0.9 },
    { path: '/destinations', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/field-notes', priority: 0.6 },
    { path: '/contact', priority: 0.8 },
    { path: '/brand', priority: 0.4 },
    { path: '/faq', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
    { path: '/cancellation', priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p.priority,
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
