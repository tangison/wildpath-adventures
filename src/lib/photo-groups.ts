/**
 * Photo allocation map - image-first rebuild.
 *
 * Maps every destination and journey stop to real photographs
 * (ids resolve through src/data/photos.generated.ts, sourced from
 * images/images.manifest.json).
 *
 * RULES
 *  - every photo in the manifest must appear here or in a page at least once
 *    (npm run check:images enforces this)
 *  - subject MUST match context: no photo is used outside its destination
 *  - the Classic Namibia route carries >= 3 images per route segment
 */

export type StopGallery = { stop: string; photos: string[] };

export const JOURNEY_STOP_GALLERIES: Record<string, StopGallery[]> = {
  'classic-namibia': [
    {
      stop: 'Windhoek',
      photos: ['wc-windhoek-christuskirche'],
    },
    {
      stop: 'Kalahari Desert',
      photos: ['oryx-dusk-golden-grass', 'game-drive-red-sand-track', 'kalahari-cabin-red-dune'],
    },
    {
      stop: 'Fish River Canyon',
      photos: ['wc-fish-river-canyon-dusk', 'wc-fish-river-canyon-view', 'wc-quiver-tree-forest', 'wc-quiver-tree-portrait'],
    },
    {
      stop: 'Wild Horses & Kolmanskop',
      photos: ['wc-wild-horses-garub', 'wc-kolmanskop-window', 'wc-kolmanskop-interior', 'wc-kolmanskop-buried-houses'],
    },
    {
      stop: 'Sossusvlei',
      photos: ['wc-sossusvlei-dune45-sunrise', 'wc-sossusvlei-bigdaddy-ridge', 'wc-deadvlei-aerial', 'deadvlei-trees-dune-shadow', 'wc-sesriem-canyon-floor'],
    },
    {
      stop: 'Swakopmund',
      photos: ['wc-swakopmund-woermannhaus', 'wc-swakopmund-jetty', 'wc-swakopmund-coast', 'wc-walvis-bay-flamingos'],
    },
    {
      stop: 'Damaraland',
      photos: ['wc-twyfelfontein-engravings', 'wc-organ-pipes-damaraland', 'damaraland-lodge-granite-hill'],
    },
    {
      stop: 'Etosha National Park',
      photos: ['wc-etosha-elephant-family-waterhole', 'wc-etosha-elephants-bathing', 'wc-etosha-lion-stretching', 'wc-etosha-lion-cub', 'wc-etosha-mountain-zebra', 'wc-etosha-pan-acacia', 'giraffes-walking-etosha', 'rhino-ostrich-etosha'],
    },
  ],
  'untamed-northern-caprivi': [
    { stop: 'Windhoek', photos: ['wc-windhoek-christuskirche'] },
    { stop: 'Etosha National Park', photos: ['wc-etosha-elephant-family-waterhole', 'wc-etosha-lion-stretching', 'giraffes-walking-etosha'] },
    { stop: 'Rundu & the Okavango River', photos: ['wc-okavango-fisherman'] },
    { stop: 'Kwando River', photos: ['wc-bwabwata-river-sunset'] },
    { stop: 'Bwabwata National Park', photos: ['wc-chobe-hippo-buffalo'] },
    { stop: 'Chobe River', photos: ['wc-chobe-elephant-swimming', 'wc-chobe-elephant-herd', 'wc-chobe-buffalo-herd'] },
    { stop: 'Zambezi River', photos: ['wc-zambezi-sunset-cruise', 'wc-zambezi-katima-rapids'] },
  ],
  'untamed-central': [
    { stop: 'Windhoek', photos: ['wc-windhoek-christuskirche'] },
    { stop: 'Etosha National Park', photos: ['wc-etosha-elephants-bathing', 'wc-etosha-mountain-zebra', 'wc-etosha-pan-acacia'] },
    { stop: 'Damaraland', photos: ['wc-twyfelfontein-engravings', 'wc-organ-pipes-damaraland', 'damaraland-lodge-granite-hill'] },
    { stop: 'Swakopmund', photos: ['wc-swakopmund-woermannhaus', 'wc-swakopmund-jetty', 'wc-walvis-bay-flamingos'] },
  ],
  'untamed-desert': [
    { stop: 'Windhoek', photos: ['wc-windhoek-christuskirche'] },
    { stop: 'Kalahari Desert', photos: ['kalahari-cabin-red-dune', 'oryx-dusk-golden-grass'] },
    { stop: 'Sossusvlei', photos: ['wc-sossusvlei-dune45-tree', 'wc-sossusvlei-dune45-sunrise', 'wc-deadvlei-aerial', 'deadvlei-white-pan-red-dunes'] },
    { stop: 'Swakopmund', photos: ['wc-swakopmund-coast', 'wc-swakopmund-jetty'] },
    { stop: 'Waterberg Plateau', photos: ['wc-waterberg-plateau-cliffs', 'wc-waterberg-plateau-panorama'] },
    { stop: 'Okonjima', photos: ['wc-etosha-lion-cub'] },
    { stop: 'Etosha National Park', photos: ['wc-etosha-elephant-family-waterhole', 'wc-etosha-camelthorn-zebra', 'rhino-ostrich-etosha'] },
  ],
};

/** Destination-page mosaics: destination slug -> photo ids shown alongside the hero. */
export const DESTINATION_MOSAICS: Record<string, string[]> = {
  namibia: ['wc-etosha-pan-acacia', 'wc-sossusvlei-bigdaddy-ridge', 'wc-skeleton-coast-shipwreck-bow', 'wc-chobe-elephant-herd'],
  sossusvlei: ['wc-deadvlei-aerial', 'wc-sesriem-canyon-floor', 'wc-sesriem-canyon-walls', 'deadvlei-trees-dune-shadow'],
  etosha: ['wc-etosha-elephants-bathing', 'wc-etosha-lion-cub', 'wc-etosha-mountain-zebra', 'wc-etosha-pan-acacia', 'giraffes-walking-etosha'],
  damaraland: ['wc-twyfelfontein-engravings', 'wc-organ-pipes-damaraland'],
  'skeleton-coast': ['wc-skeleton-coast-shipwreck-bow', 'wc-cape-cross-seal-colony', 'wc-cape-cross-seals-rocks'],
  kalahari: ['oryx-dusk-golden-grass', 'game-drive-red-sand-track'],
  caprivi: ['wc-okavango-fisherman', 'wc-chobe-hippo-buffalo', 'wc-zambezi-katima-rapids'],
  chobe: ['wc-chobe-elephant-herd', 'wc-chobe-sunset-elephant', 'wc-chobe-buffalo-herd'],
  'victoria-falls': ['wc-victoria-falls-leaping-water'],
};

/** Page header images for supporting pages (photo ids). */
export const PAGE_HEADERS = {
  about: 'oryx-dusk-golden-grass',
  faq: 'namib-red-dunes-green-plains',
  contact: 'game-drive-red-sand-track',
  'field-notes': 'wc-etosha-pan-acacia',
} as const;

/** Field Notes articles -> thumbnail photo. */
export const FIELD_NOTE_PHOTOS: Record<string, string> = {
  'when-to-visit-sossusvlei': 'wc-sossusvlei-dune45-sunrise',
  'etosha-dry-wet-seasons': 'wc-etosha-pan-acacia',
  'packing-for-namibia': 'wc-swakopmund-coast',
  'self-drive-namibia': 'game-drive-red-sand-track',
  'responsible-wildlife': 'wc-etosha-elephants-bathing',
  'zambezi-route': 'wc-zambezi-katima-rapids',
};
