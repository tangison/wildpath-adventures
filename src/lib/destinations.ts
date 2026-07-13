/**
 * Wildpath Adventures — Destination library.
 *
 * Editorial cards. Image-led. Each destination has overview, highlights,
 * best time, wildlife, landscape, suggested journey.
 *
 * IMAGE POLICY (per V3 client-accuracy correction):
 *   - Real destinations use real photography where available.
 *   - Destinations without verified photography use a branded illustration
 *     placeholder (intentional, elegant — NOT a "coming soon" badge).
 *   - No image is presented as a real photograph unless its source is tracked
 *     in /home/z/my-project/ASSET_MANIFEST.md.
 *
 * CLAIM POLICY:
 *   - No invented wildlife-population numbers ("120,000 elephants" softened).
 *   - No named conservation organisations without confirmed partnerships.
 *   - Photography is reused from existing project assets only where it
 *     depicts the correct destination.
 */

export type Destination = {
  slug: string;
  name: string;
  country: string;
  shortLine: string;
  overview: string;
  highlights: string[];
  bestTime: string;
  wildlife: string[];
  landscape: string;
  suggestedJourney: string;
  /** Real destination photography (tracked in ASSET_MANIFEST.md) OR branded illustration placeholder. */
  image: string;
  /**
   * 'photo' = real destination photograph (source-tracked)
   * 'illustration' = intentional branded placeholder (no real photo available yet)
   */
  imageKind: 'photo' | 'illustration';
};

export const DESTINATIONS: Destination[] = [
  {
    slug: 'namibia',
    name: 'Namibia',
    country: 'Namibia',
    shortLine: 'The country itself — the oldest desert on earth, the emptiest coast, and the great white pan.',
    overview:
      'A country the size of France with roughly two and a half million people. The Namib desert — oldest on earth — runs the entire length of the coast. Inland: red dunes, granite inselbergs, salt pans, and wildlife adapted to the dry.',
    highlights: ['Sossusvlei dunes', 'Etosha pan', 'Skeleton Coast', 'Damaraland', 'Fish River Canyon'],
    bestTime: 'May to October — dry, cool, wildlife concentrated at waterholes.',
    wildlife: ['Desert-adapted elephant', 'Black rhino', 'Lion', 'Gemsbok', 'Springbok'],
    landscape: 'Red sand, white salt, granite, basalt. A land of geology.',
    suggestedJourney: 'classic-namibia',
    image: '/images/places/sossusvlei.webp',
    imageKind: 'photo',
  },
  {
    slug: 'sossusvlei',
    name: 'Sossusvlei',
    country: 'Namibia',
    shortLine: 'Red dunes rising from a white clay pan. The most photographed desert on earth.',
    overview:
      'A clay pan surrounded by some of the highest dunes in the world. Deadvlei, with its 900-year-old dead camelthorn trees, is one of the most photographed landscapes on the continent. The light here changes every hour.',
    highlights: ['Dune 45', 'Deadvlei', 'Hiddenvlei', 'Sesriem Canyon'],
    bestTime: 'May to September — cool mornings, clear light.',
    wildlife: ['Ostrich', 'Springbok', 'Gemsbok', 'Brown hyena (rare)'],
    landscape: 'Red sand, white clay pan, dead trees. The purest desert image.',
    suggestedJourney: 'untamed-desert',
    image: '/images/places/sossusvlei.webp',
    imageKind: 'photo',
  },
  {
    slug: 'etosha',
    name: 'Etosha National Park',
    country: 'Namibia',
    shortLine: 'A salt flat the size of a small country. In the dry season, every animal in the park comes to you.',
    overview:
      'A vast protected area of savannah and salt pan in northern Namibia. The Etosha pan itself is a white void that shimmers with mirage. In the dry season, waterholes along the southern edge become theatre — rhino, elephant, lion, all in a single evening.',
    highlights: ['Okaukuejo waterhole', 'Halali waterhole', 'Floodlit night viewing', 'Western corridor'],
    bestTime: 'June to October — dry season, animals concentrate at waterholes.',
    wildlife: ['Black rhino', 'Elephant', 'Lion', 'Leopard', 'Gemsbok', 'Springbok'],
    landscape: 'Salt pan, savannah, mopane woodland. Flat and open — perfect for game viewing.',
    suggestedJourney: 'untamed-desert',
    image: '/images/places/etosha.webp',
    imageKind: 'photo',
  },
  {
    slug: 'damaraland',
    name: 'Damaraland',
    country: 'Namibia',
    shortLine: 'Granite inselbergs, 6,000-year-old rock art, and dry riverbeds walked by desert-adapted elephants.',
    overview:
      'The wild heart of north-west Namibia. Twyfelfontein — a UNESCO site — holds ancient San rock engravings. The dry riverbeds are walked by desert-adapted elephants that travel long distances between water sources.',
    highlights: ['Twyfelfontein rock art', 'Huab River', 'Petrified Forest', 'Burnt Mountain', 'Organ Pipes'],
    bestTime: 'May to October — cooler, dry, easier travelling.',
    wildlife: ['Desert-adapted elephant', 'Black rhino', 'Desert lion (rare)', 'Gemsbok', 'Springbok'],
    landscape: 'Granite inselbergs, gravel plains, dry riverbeds. Ancient geology.',
    suggestedJourney: 'untamed-central',
    image: '/images/places/damaraland.webp',
    imageKind: 'photo',
  },
  {
    slug: 'skeleton-coast',
    name: 'Skeleton Coast',
    country: 'Namibia',
    shortLine: 'Fog-bound shoreline. Shipwrecks half-swallowed by sand. The end-of-the-world coast.',
    overview:
      'A long stretch of coast where the Namib desert meets the cold Atlantic. Portuguese sailors called it "the gates of hell" — fog, surf, and no shelter. Today the wrecks of whalers and fishing boats litter the sand, slowly consumed by the dunes.',
    highlights: ['Shipwreck trail', 'Cape Cross seal colony', 'Scenic flights over the coast'],
    bestTime: 'Year-round — fog is constant. June to September for cooler temperatures.',
    wildlife: ['Brown hyena', 'Cape fur seal', 'Black-backed jackal'],
    landscape: 'Fog, dunes dropping into the sea, basalt, shipwrecks.',
    suggestedJourney: 'classic-namibia',
    // No verified real photograph in current assets — use branded illustration placeholder.
    image: '/images/illustrations/v2/08-manifesto-atmosphere.webp',
    imageKind: 'illustration',
  },
  {
    slug: 'kalahari',
    name: 'Kalahari',
    country: 'Namibia / Botswana / South Africa',
    shortLine: 'Red sand plains. Acacia scrub. A silence that is geological, not atmospheric.',
    overview:
      'Not a desert by rainfall — it receives too much — but a deep sand sheet that covers much of southern Africa. In Namibia, the Kalahari runs along the eastern border: red dunes, camelthorn acacias, and the San people, the original inhabitants of the region.',
    highlights: ['San tracker walks', 'Sunset dune drives', 'Kgalagadi Transfrontier Park (Botswana side)'],
    bestTime: 'May to September — cooler days, cold nights.',
    wildlife: ['Gemsbok', 'Springbok', 'Meerkat', 'Brown hyena'],
    landscape: 'Red sand, camelthorn acacia, long horizons.',
    suggestedJourney: 'classic-namibia',
    image: '/images/places/kalahari.webp',
    imageKind: 'photo',
  },
  {
    slug: 'caprivi',
    name: 'Caprivi Strip',
    country: 'Namibia',
    shortLine: 'The forgotten north-east. Where Namibia becomes river, forest, and hundreds of bird species.',
    overview:
      'A narrow panhandle of land between Angola, Botswana, Zambia, and Zimbabwe. Several major rivers — including the Okavango, Kwando, Linyanti, and Zambezi — converge here. The result is wet, green, and full of life in a way the rest of Namibia is not.',
    highlights: ['Bwabwata National Park', 'Okavango River', 'Kwando River', 'Zambezi cruises'],
    bestTime: 'May to October — dry season, access easier.',
    wildlife: ['Hippo', 'Buffalo', 'Elephant', 'Wattled crane', 'African fish eagle', 'Sable antelope'],
    landscape: 'Rivers, floodplains, mopane woodland. Green Namibia.',
    suggestedJourney: 'untamed-northern-caprivi',
    image: '/images/illustrations/v2/06-card-charters.webp',
    imageKind: 'illustration',
  },
  {
    slug: 'chobe',
    name: 'Chobe River',
    country: 'Botswana',
    shortLine: 'A river with one of the densest elephant populations in Africa.',
    overview:
      'Just across the border from the Caprivi, in Botswana. The Chobe river supports a large and well-documented elephant population. A river cruise at sunset puts you among them, on the water, in the herd.',
    highlights: ['Chobe river cruise', 'Sunset game drive', 'Savuti marsh'],
    bestTime: 'May to October — dry, animals concentrate along the river.',
    wildlife: ['Elephant', 'Lion', 'Leopard', 'Buffalo', 'Puku', 'Hippo'],
    landscape: 'River, floodplain, woodland. Botswana at its most accessible.',
    suggestedJourney: 'untamed-northern-caprivi',
    image: '/images/illustrations/v2/06-card-charters.webp',
    imageKind: 'illustration',
  },
  {
    slug: 'victoria-falls',
    name: 'Victoria Falls',
    country: 'Zimbabwe / Zambia',
    shortLine: 'Mosi-oa-Tunya — the smoke that thunders. One of the largest sheets of falling water in the world.',
    overview:
      'The Kololo people called it Mosi-oa-Tunya — "the smoke that thunders" — and the spray is visible from a great distance. The falls mark the border between Zimbabwe and Zambia, and a natural endpoint or extension to any southern African journey.',
    highlights: ['Falls walk — full length', 'Helicopter flight', 'Zambezi sunset cruise', 'Victoria Falls Bridge'],
    bestTime: 'February to May — peak flow. September to October — low flow, less spray, clearer views.',
    wildlife: ['Elephant (in town itself)', 'Hippo', 'Crocodile', 'Birdlife'],
    landscape: 'Basalt gorge, rainforest from the spray, the Zambezi above and below.',
    suggestedJourney: 'untamed-northern-caprivi',
    image: '/images/illustrations/v2/08-manifesto-atmosphere.webp',
    imageKind: 'illustration',
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
