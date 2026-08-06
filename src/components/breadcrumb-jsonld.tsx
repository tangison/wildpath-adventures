/**
 * BreadcrumbList structured data (JSON-LD) for search engine breadcrumb display.
 *
 * Usage: <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Journeys', url: '/journeys' }]} />
 *
 * Place inside the page component's JSX — it renders a <script> tag only.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wildpathnamibia.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
