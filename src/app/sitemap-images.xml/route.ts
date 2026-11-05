import { JOURNEY_MEDIA, DESTINATION_MEDIA, HOME_MOSAIC, HOME_GALLERY } from '@/lib/journey-media';
import { JOURNEYS } from '@/lib/journeys';
import { DESTINATIONS } from '@/lib/destinations';
import { IMAGE_VARIANTS } from '@/lib/image-variants';
import { SITE_URL } from '@/lib/site';

// Generated image sitemap — built from the SAME media maps the pages render,
// so it can never drift from the site (the hand-maintained file it replaces
// pointed at a different host and went stale).
export const dynamic = 'force-static';

// alt lookup assembled from the same PhotoRef objects the pages use
const ALT_LOOKUP = new Map<string, string>();
for (const jm of Object.values(JOURNEY_MEDIA)) {
  for (const refs of Object.values(jm.timeline)) for (const r of refs) ALT_LOOKUP.set(r.base, r.alt);
  for (const r of jm.gallery) ALT_LOOKUP.set(r.base, r.alt);
}
for (const dm of Object.values(DESTINATION_MEDIA)) for (const r of dm.mosaic) ALT_LOOKUP.set(r.base, r.alt);
for (const r of HOME_MOSAIC) ALT_LOOKUP.set(r.base, r.alt);
for (const r of HOME_GALLERY) ALT_LOOKUP.set(r.base, r.alt);

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function imageXml(bases: string[]): string {
  const seen = new Set<string>();
  let xml = '';
  for (const base of bases) {
    if (seen.has(base)) continue;
    seen.add(base);
    const fam = IMAGE_VARIANTS[base];
    if (!fam) continue;
    const largest = Math.max(...fam.widths);
    const alt = ALT_LOOKUP.get(base) ?? base;
    xml += `    <image:image>\n      <image:loc>${SITE_URL}/${fam.dir}/${base}-${largest}.webp</image:loc>\n      <image:title>Wildpath Adventures</image:title>\n      <image:caption>${escapeXml(alt)}</image:caption>\n    </image:image>\n`;
  }
  return xml;
}

export async function GET() {
  const pages: { path: string; bases: string[] }[] = [];

  pages.push({
    path: '',
    bases: [...HOME_MOSAIC.map((r) => r.base), ...HOME_GALLERY.map((r) => r.base)],
  });

  for (const j of JOURNEYS) {
    const jm = JOURNEY_MEDIA[j.slug];
    if (!jm) continue;
    pages.push({
      path: `/journeys/${j.slug}`,
      bases: [
        jm.card,
        jm.hero,
        ...Object.values(jm.timeline).flatMap((refs) => refs.map((r) => r.base)),
        ...jm.gallery.map((r) => r.base),
      ],
    });
  }

  for (const d of DESTINATIONS) {
    const dm = DESTINATION_MEDIA[d.slug];
    if (!dm) continue;
    pages.push({ path: `/destinations/${d.slug}`, bases: [dm.hero, ...dm.mosaic.map((r) => r.base)] });
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(({ path, bases }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n${imageXml(bases)}  </url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
