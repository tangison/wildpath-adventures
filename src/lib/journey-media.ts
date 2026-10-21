/**
 * JOURNEY + DESTINATION MEDIA — theme-mapped photo assignments.
 *
 * Rules baked into this file (image-first rebuild, TASK 2):
 * - Every mapping is context-correct: a photo only appears where it
 *   depicts the destination being described. No stock filler.
 * - Every real photo on the site must appear in at least one of these
 *   maps (or in field-notes/page articles) before it may be reused.
 *   `scripts/check-images.mjs` enforces "used at least once" at build.
 * - Photos with ambiguous subject location go to the home gallery
 *   (general gallery), which is flagged in the build report.
 *
 * `base` values refer to IMAGE_VARIANTS families (src/lib/image-variants.ts).
 */

export type PhotoRef = { base: string; alt: string };

// ── JOURNEYS ──────────────────────────────────────────────────

export const JOURNEY_MEDIA: Record<
  string,
  {
    card: string;        // card base (journeys index)
    hero: string;        // page hero base
    timeline: Record<string, PhotoRef[]>;   // route stop name -> photos
    gallery: PhotoRef[]; // closing lightbox gallery
  }
> = {
  'classic-namibia': {
    card: 'deadvlei-white-pan-red-dunes',
    hero: 'sossusvlei',
    timeline: {
      'Windhoek': [
        { base: 'windhoek-christ-church', alt: 'Christuskirche and central Windhoek from above.' },
      ],
      'Kalahari Desert': [
        { base: 'kalahari', alt: 'A deep orange sunset over Kalahari thornveld and a winding road.' },
        { base: 'kalahari-cabin-red-dune', alt: 'A stilted cabin with a green roof on a red Kalahari dune.' },
        { base: 'kalahari-2', alt: 'Hoodia plants on a red Kalahari dune slipface.' },
      ],
      'Fish River Canyon': [
        { base: 'fish-river-canyon', alt: 'Fish River Canyon from the main viewpoint, layered rock walls and a dry riverbed below.' },
        { base: 'quiver-tree', alt: 'A quiver tree in rocky ground under a blue sky, southern Namibia.' },
      ],
      'Wild Horses & Kolmanskop': [
        { base: 'kolmanskop-ghost-town', alt: 'The sand-buried houses of Kolmanskop ghost town near Luederitz.' },
        { base: 'namib-texture', alt: 'Gravel plain scattered with stones, dunes on the far horizon, near Aus.' },
      ],
      'Sossusvlei': [
        { base: 'sossusvlei', alt: 'Red Sossusvlei dunes rising behind acacia trees on the gravel plain.' },
        { base: 'deadvlei-white-pan-red-dunes', alt: 'Dead camelthorn trees on the white clay pan of Deadvlei, backed by red dunes.' },
        { base: 'deadvlei-trees-dune-shadow', alt: 'Deadvlei in soft light: bare trees on white clay beneath a red dune in shadow.' },
        { base: 'sossusvlei-1', alt: 'Hikers on the knife-edge ridge of a Sossusvlei dune at sunrise.' },
        { base: 'sossusvlei-2', alt: 'A walker descending a dune crest towards Deadvlei\u2019s white pan.' },
        { base: 'namib-red-dunes-green-plains', alt: 'Red dunes meeting green plains after the rains.' },
      ],
      'Swakopmund': [
        { base: 'swakopmund-jetty', alt: 'Swakopmund\u2019s beachfront and jetty from the air, the old lighthouse at centre.' },
      ],
      'Damaraland': [
        { base: 'damaraland', alt: 'A granite koppie glowing red above dry Damaraland grassland.' },
        { base: 'damaraland-1', alt: 'Boulder-strewn Damaraland hills with a lone shepherd\u2019s tree.' },
        { base: 'thatched-hillside', alt: 'Thatched chalets on poles at the foot of a granite hill.' },
      ],
      'Etosha National Park': [
        { base: 'giraffes-walking-etosha', alt: 'Three giraffes walking through green Etosha scrubland.' },
        { base: 'etosha-2', alt: 'Lions drinking at an Etosha waterhole, mirrored in still water.' },
        { base: 'etosha-detail', alt: 'A breeding herd of elephants moving across red earth.' },
        { base: 'game-drive-red-sand-track', alt: 'A game-drive vehicle on a red sand track.' },
        { base: 'etosha-1', alt: 'Two cheetahs resting beside a termite mound in Etosha.' },
        { base: 'rhino-ostrich-etosha', alt: 'A rhino grazing beside an ostrich in green bush.' },
      ],
    },
    gallery: [
      { base: 'dune-detail', alt: 'Ridges of red dune sea rolling to the horizon.' },
      { base: 'oryx-dusk-golden-grass', alt: 'A gemsbok oryx standing in golden grass at dusk.' },
      { base: 'etosha', alt: 'A close view of an elephant feeding on pale Etosha grass.' },
      { base: 'sossusvlei-2', alt: 'A walker descending a dune crest towards Deadvlei\u2019s white pan.' },
      { base: 'kalahari-2', alt: 'Hoodia plants on a red Kalahari dune slipface.' },
      { base: 'deadvlei-trees-dune-shadow', alt: 'Deadvlei in soft light: bare trees on white clay beneath a red dune in shadow.' },
    ],
  },

  'untamed-northern-caprivi': {
    card: 'chobe-river-kasane',
    hero: 'zambezi-junction',
    timeline: {
      'Windhoek': [
        { base: 'windhoek-christ-church', alt: 'Christuskirche and central Windhoek from above.' },
      ],
      'Etosha National Park': [
        { base: 'etosha-1', alt: 'Two cheetahs resting beside a termite mound in Etosha.' },
        { base: 'giraffes-walking-etosha', alt: 'Three giraffes walking through green Etosha scrubland.' },
      ],
      'Rundu & the Okavango River': [
        { base: 'okavango-river', alt: 'The Okavango River running wide and green under a blue sky.' },
      ],
      'Kwando River': [],
      'Bwabwata National Park': [
        { base: 'bwabwata-elephant', alt: 'A breeding herd of elephants crossing golden grass in Bwabwata National Park.' },
      ],
      'Chobe River': [
        { base: 'chobe-river-kasane', alt: 'The Chobe River winding through green floodplains near Kasane.' },
      ],
      'Zambezi River': [
        { base: 'zambezi-junction', alt: 'The Zambezi River where Namibia, Zambia, Zimbabwe and Botswana meet.' },
        { base: 'victoria-falls', alt: 'Victoria Falls from the air, spray rising above the basalt gorge.' },
      ],
    },
    gallery: [
      { base: 'victoria-falls', alt: 'Victoria Falls from the air, spray rising above the basalt gorge.' },
      { base: 'chobe-river-kasane', alt: 'The Chobe River winding through green floodplains near Kasane.' },
      { base: 'bwabwata-elephant', alt: 'A breeding herd of elephants crossing golden grass in Bwabwata National Park.' },
      { base: 'okavango-river', alt: 'The Okavango River running wide and green under a blue sky.' },
      { base: 'etosha', alt: 'A close view of an elephant feeding on pale Etosha grass.' },
    ],
  },

  'untamed-central': {
    card: 'etosha',
    hero: 'damaraland',
    timeline: {
      'Windhoek': [
        { base: 'windhoek-christ-church', alt: 'Christuskirche and central Windhoek from above.' },
      ],
      'Etosha National Park': [
        { base: 'etosha', alt: 'A close view of an elephant feeding on pale Etosha grass.' },
        { base: 'rhino-ostrich-etosha', alt: 'A rhino grazing beside an ostrich in green bush.' },
        { base: 'game-drive-red-sand-track', alt: 'A game-drive vehicle on a red sand track.' },
      ],
      'Damaraland': [
        { base: 'damaraland', alt: 'A granite koppie glowing red above dry Damaraland grassland.' },
        { base: 'damaraland-lodge-granite-hill', alt: 'A lodge of stone and thatch built into a granite hillside in Damaraland.' },
        { base: 'damaraland-1', alt: 'Boulder-strewn Damaraland hills with a lone shepherd\u2019s tree.' },
      ],
      'Swakopmund': [
        { base: 'swakopmund-jetty', alt: 'Swakopmund\u2019s beachfront and jetty from the air, the old lighthouse at centre.' },
      ],
    },
    gallery: [
      { base: 'etosha-detail', alt: 'A breeding herd of elephants moving across red earth.' },
      { base: 'thatched-hillside', alt: 'Thatched chalets on poles at the foot of a granite hill.' },
      { base: 'giraffes-walking-etosha', alt: 'Three giraffes walking through green Etosha scrubland.' },
      { base: 'damaraland-1', alt: 'Boulder-strewn Damaraland hills with a lone shepherd\u2019s tree.' },
    ],
  },

  'untamed-desert': {
    card: 'kalahari-cabin-red-dune',
    hero: 'sossusvlei',
    timeline: {
      'Windhoek': [
        { base: 'windhoek-christ-church', alt: 'Christuskirche and central Windhoek from above.' },
      ],
      'Kalahari Desert': [
        { base: 'kalahari-2', alt: 'Hoodia plants on a red Kalahari dune slipface.' },
        { base: 'kalahari-cabin-red-dune', alt: 'A stilted cabin with a green roof on a red Kalahari dune.' },
      ],
      'Sossusvlei': [
        { base: 'sossusvlei', alt: 'Red Sossusvlei dunes rising behind acacia trees on the gravel plain.' },
        { base: 'deadvlei-trees-dune-shadow', alt: 'Deadvlei in soft light: bare trees on white clay beneath a red dune in shadow.' },
        { base: 'sossusvlei-1', alt: 'Hikers on the knife-edge ridge of a Sossusvlei dune at sunrise.' },
        { base: 'namib-red-dunes-green-plains', alt: 'Red dunes meeting green plains after the rains.' },
      ],
      'Swakopmund': [
        { base: 'swakopmund-jetty', alt: 'Swakopmund\u2019s beachfront and jetty from the air, the old lighthouse at centre.' },
      ],
      'Waterberg Plateau': [
        { base: 'waterberg-plateau', alt: 'The red sandstone cliffs of the Waterberg plateau rising over green bush.' },
      ],
      'Okonjima': [],
      'Etosha National Park': [
        { base: 'etosha-2', alt: 'Lions drinking at an Etosha waterhole, mirrored in still water.' },
        { base: 'giraffes-walking-etosha', alt: 'Three giraffes walking through green Etosha scrubland.' },
        { base: 'etosha-1', alt: 'Two cheetahs resting beside a termite mound in Etosha.' },
      ],
    },
    gallery: [
      { base: 'dune-detail', alt: 'Ridges of red dune sea rolling to the horizon.' },
      { base: 'deadvlei-white-pan-red-dunes', alt: 'Dead camelthorn trees on the white clay pan of Deadvlei, backed by red dunes.' },
      { base: 'kalahari', alt: 'A deep orange sunset over Kalahari thornveld and a winding road.' },
      { base: 'etosha', alt: 'A close view of an elephant feeding on pale Etosha grass.' },
    ],
  },
};

// ── DESTINATIONS ──────────────────────────────────────────────

export const DESTINATION_MEDIA: Record<
  string,
  { hero: string; mosaic: PhotoRef[] }
> = {
  'namibia': {
    hero: 'dune-detail',
    mosaic: [
      { base: 'sossusvlei', alt: 'Red Sossusvlei dunes rising behind acacia trees.' },
      { base: 'etosha', alt: 'An elephant feeding on pale Etosha grass.' },
      { base: 'damaraland', alt: 'A granite koppie above Damaraland grassland.' },
      { base: 'swakopmund-jetty', alt: 'Swakopmund\u2019s beachfront and jetty from the air.' },
      { base: 'kalahari', alt: 'Sunset over Kalahari thornveld.' },
      { base: 'fish-river-canyon', alt: 'Fish River Canyon from the main viewpoint.' },
    ],
  },
  'sossusvlei': {
    hero: 'deadvlei-white-pan-red-dunes',
    mosaic: [
      { base: 'sossusvlei', alt: 'Red dunes rising behind acacia trees on the gravel plain.' },
      { base: 'sossusvlei-1', alt: 'Hikers on the knife-edge ridge of a Sossusvlei dune at sunrise.' },
      { base: 'sossusvlei-2', alt: 'A walker descending a dune crest towards the white pan.' },
      { base: 'deadvlei-trees-dune-shadow', alt: 'Bare trees on white clay beneath a red dune in shadow.' },
      { base: 'namib-red-dunes-green-plains', alt: 'Red dunes meeting green plains after the rains.' },
      { base: 'dune-detail', alt: 'Ridges of red dune sea rolling to the horizon.' },
    ],
  },
  'etosha': {
    hero: 'etosha',
    mosaic: [
      { base: 'giraffes-walking-etosha', alt: 'Three giraffes walking through green Etosha scrubland.' },
      { base: 'etosha-2', alt: 'Lions drinking at a waterhole, mirrored in still water.' },
      { base: 'etosha-1', alt: 'Two cheetahs resting beside a termite mound.' },
      { base: 'etosha-detail', alt: 'A breeding herd of elephants moving across red earth.' },
      { base: 'rhino-ostrich-etosha', alt: 'A rhino grazing beside an ostrich in green bush.' },
      { base: 'game-drive-red-sand-track', alt: 'A game-drive vehicle on a red sand track.' },
    ],
  },
  'damaraland': {
    hero: 'damaraland',
    mosaic: [
      { base: 'damaraland-1', alt: 'Boulder-strewn hills with a lone shepherd\u2019s tree.' },
      { base: 'damaraland-lodge-granite-hill', alt: 'A lodge of stone and thatch built into a granite hillside.' },
      { base: 'thatched-hillside', alt: 'Thatched chalets on poles at the foot of a granite hill.' },
    ],
  },
  'skeleton-coast': {
    hero: 'skeleton-coast-wreck',
    mosaic: [
      { base: 'cape-cross-seals', alt: 'Cape fur seals crowded on the rocks at Cape Cross.' },
      { base: 'swakopmund-jetty', alt: 'Swakopmund\u2019s beachfront and jetty from the air.' },
    ],
  },
  'kalahari': {
    hero: 'kalahari',
    mosaic: [
      { base: 'kalahari-2', alt: 'Hoodia plants on a red dune slipface.' },
      { base: 'kalahari-cabin-red-dune', alt: 'A stilted cabin with a green roof on a red dune.' },
      { base: 'oryx-dusk-golden-grass', alt: 'A gemsbok oryx standing in golden grass at dusk.' },
      { base: 'dune-lodge', alt: 'A cabin on a red Kalahari dune above green savanna.' },
    ],
  },
  'caprivi': {
    hero: 'zambezi-junction',
    mosaic: [
      { base: 'okavango-river', alt: 'The Okavango River running wide and green.' },
      { base: 'bwabwata-elephant', alt: 'Elephants crossing golden grass in Bwabwata National Park.' },
    ],
  },
  'chobe': {
    hero: 'chobe-river-kasane',
    mosaic: [],
  },
  'victoria-falls': {
    hero: 'victoria-falls',
    mosaic: [
      { base: 'zambezi-junction', alt: 'The Zambezi above the falls, wide and slow.' },
    ],
  },
};

// ── HOME ──────────────────────────────────────────────────────

export const HOME_MOSAIC: PhotoRef[] = [
  { base: 'sossusvlei', alt: 'Red Sossusvlei dunes rising behind acacia trees.' },
  { base: 'etosha', alt: 'An elephant feeding on pale Etosha grass.' },
  { base: 'damaraland', alt: 'A granite koppie above Damaraland grassland.' },
  { base: 'skeleton-coast-wreck', alt: 'The wreck of the Eduard Bohlen stranded in Skeleton Coast sand.' },
  { base: 'kalahari', alt: 'Sunset over Kalahari thornveld.' },
  { base: 'zambezi-junction', alt: 'The Zambezi River at the four-nations corner, Caprivi.' },
  { base: 'chobe-river-kasane', alt: 'The Chobe River winding through green floodplains.' },
  { base: 'victoria-falls', alt: 'Victoria Falls from the air, spray rising above the gorge.' },
];

/** General gallery — includes the flagged-ambiguous shot (see build report). */
export const HOME_GALLERY: PhotoRef[] = [
  { base: 'oryx-dusk-golden-grass', alt: 'A gemsbok oryx standing in golden grass at dusk.' },
  { base: 'dune-detail', alt: 'Ridges of red dune sea rolling to the horizon.' },
  { base: 'game-drive-red-sand-track', alt: 'A game-drive vehicle on a red sand track.' },
  { base: 'giraffes-walking-etosha', alt: 'Three giraffes walking through green Etosha scrubland.' },
  { base: 'sossusvlei-2', alt: 'A walker descending a dune crest towards the white pan.' },
  { base: 'thatched-hillside', alt: 'Thatched chalets on poles at the foot of a granite hill.' },
];

export const CTA_PHOTO = {
  base: 'sossusvlei-2',
  alt: 'A walker on a dune crest high above the Namib, country for miles.',
};
