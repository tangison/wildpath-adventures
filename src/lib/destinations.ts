/**
 * Wildpath Adventures — Destination library.
 *
 * Editorial cards. Image-led. Each destination has overview, highlights,
 * best time, wildlife, landscape, suggested journey. Photography only;
 * illustrations are reserved for brand sections.
 *
 * Some destinations do not yet have dedicated photography in /public/images/.
 * Those use the brand illustration backdrop with a "Photography coming soon"
 * caption — and will be swapped for real destination photos as the library builds.
 */

export type Destination = {
  slug: string;
  name: string;
  country: string;
  shortLine: string;          // 1-line emotional hook for the card
  overview: string;
  highlights: string[];
  bestTime: string;
  wildlife: string[];
  landscape: string;
  suggestedJourney: string;   // slug of related journey
  image: string;              // destination photography
  imageStatus?: 'real' | 'placeholder';
};

export const DESTINATIONS: Destination[] = [
  {
    slug: 'namibia',
    name: 'Namibia',
    country: 'Namibia',
    shortLine: 'The country itself. The oldest desert. The emptiest coast.',
    overview:
      'A country the size of France with two million people. The Namib desert — oldest on earth — runs the entire length of the coast. Inland: red dunes, granite inselbergs, salt pans, and a wildlife population adapted to the dry.',
    highlights: ['Sossusvlei dunes', 'Etosha pan', 'Skeleton Coast', 'Damaraland'],
    bestTime: 'May to October — dry, cool, wildlife concentrated at waterholes.',
    wildlife: ['Desert-adapted elephant', 'Black rhino', 'Lion', 'Gemsbok', 'Springbok'],
    landscape: 'Red sand, white salt, granite, basalt. A land of geology.',
    suggestedJourney: 'untamed-desert',
    image: '/images/places/sossusvlei.webp',
  },
  {
    slug: 'sossusvlei',
    name: 'Sossusvlei',
    country: 'Namibia',
    shortLine: 'Red dunes rising from a white clay pan. The most photographed desert on earth.',
    overview:
      'A clay pan surrounded by some of the highest dunes in the world — Dune 7 reaches 383 metres. Deadvlei, with its 900-year-old dead camelthorn trees, is one of the most photographed landscapes on the continent. The light here changes every hour.',
    highlights: ['Dune 45', 'Deadvlei', 'Hiddenvlei', 'Sesriem Canyon', 'Big Daddy dune'],
    bestTime: 'May to September — cool mornings, clear light, no haze.',
    wildlife: ['Ostrich', 'Springbok', 'Gemsbok', 'Brown hyena (rare)', 'Sidewinder'],
    landscape: 'Red sand, white clay pan, dead trees. The purest desert image.',
    suggestedJourney: 'untamed-desert',
    image: '/images/places/sossusvlei.webp',
  },
  {
    slug: 'etosha',
    name: 'Etosha National Park',
    country: 'Namibia',
    shortLine: 'A salt flat the size of a small country. In the dry season, every animal in the park comes to you.',
    overview:
      '22,000 square kilometres of protected savannah and salt pan. The Etosha pan itself is 4,800 km² — a white void that shimmers with mirage. In the dry season, waterholes along the southern edge become theatre: rhino, elephant, lion, all in a single evening.',
    highlights: ['Okaukuejo waterhole', 'Halali waterhole', 'Floodlit night viewing', 'Western corridor (Galton Gate)'],
    bestTime: 'June to October — dry season, animals concentrate at waterholes.',
    wildlife: ['Black rhino', 'Elephant', 'Lion', 'Leopard', 'Cheetah', 'Gemsbok', 'Springbok', 'Blue wildebeest'],
    landscape: 'Salt pan, savannah, mopane woodland. Flat and open — perfect for game viewing.',
    suggestedJourney: 'untamed-desert',
    image: '/images/places/etosha.webp',
  },
  {
    slug: 'damaraland',
    name: 'Damaraland',
    country: 'Namibia',
    shortLine: 'Granite inselbergs, 6,000-year-old rock art, and desert elephants threading dry riverbeds.',
    overview:
      'The wild heart of north-west Namibia. Twyfelfontein — a UNESCO site — holds 6,000-year-old San rock engravings. The Huab riverbed is walked by desert-adapted elephants that travel 70km a day between waterholes. Black rhino roam free, un-fenced, in the largest population on earth.',
    highlights: ['Twyfelfontein rock art', 'Huab River tracking', 'Petrified Forest', 'Burnt Mountain', 'Organ Pipes'],
    bestTime: 'May to October — cooler, dry, easier tracking.',
    wildlife: ['Desert-adapted elephant', 'Free-ranging black rhino', 'Desert lion', 'Gemsbok', 'Springbok'],
    landscape: 'Granite inselbergs, gravel plains, dry riverbeds. Ancient geology.',
    suggestedJourney: 'untamed-central',
    image: '/images/places/damaraland.webp',
  },
  {
    slug: 'skeleton-coast',
    name: 'Skeleton Coast',
    country: 'Namibia',
    shortLine: 'Fog-bound shoreline. Shipwrecks half-swallowed by sand. Brown hyena tracks along the tide line.',
    overview:
      '500 kilometres of coast where the Namib desert meets the cold Atlantic. Portuguese sailors called it "the gates of hell" — fog, surf, and no shelter. Today the wrecks of whalers and fishing boats litter the sand, half-buried, slowly consumed. Brown hyena walk the tide line at dawn.',
    highlights: ['Shipwreck trail', 'Cape Cross seal colony', 'Himba villages (inland)', 'Scenic flight over the coast'],
    bestTime: 'Year-round — fog is constant. June to September for cooler temps.',
    wildlife: ['Brown hyena', 'Cape fur seal (100,000+ at Cape Cross)', 'Black-backed jackal', 'Desert lion (rare, coast-following)'],
    landscape: 'Fog, dunes dropping into the sea, basalt, shipwrecks. End-of-the-world coast.',
    suggestedJourney: 'untamed-central',
    image: '/images/places/dune-detail.webp',
    imageStatus: 'placeholder',
  },
  {
    slug: 'kalahari',
    name: 'Kalahari',
    country: 'Namibia / Botswana / South Africa',
    shortLine: 'Red sand plains. Acacia scrub. The silence here is geological, not atmospheric.',
    overview:
      'Not a desert by rainfall — it gets too much — but a deep sand sheet that covers much of southern Africa. In Namibia, the Kalahari runs along the eastern border: red dunes, camelthorn acacias, and the San people, the original inhabitants, who still read this landscape by sound.',
    highlights: ['San tracker walks', 'Sunset dune drives', 'Meerkat encounters (Botswana side)', 'Kgalagadi Transfrontier Park'],
    bestTime: 'May to September — cooler days, cold nights.',
    wildlife: ['Gemsbok', 'Springbok', 'Meerkat', 'Brown hyena', 'Lion (Kgalagadi)'],
    landscape: 'Red sand, camelthorn acacia, long horizons. Quiet.',
    suggestedJourney: 'untamed-desert',
    image: '/images/places/kalahari.webp',
  },
  {
    slug: 'caprivi',
    name: 'Caprivi Strip',
    country: 'Namibia',
    shortLine: 'The forgotten north-east. Where Namibia becomes river, forest, and 400 species of bird.',
    overview:
      'A narrow panhandle of land between Angola, Botswana, Zambia, and Zimbabwe. Four major rivers — Okavango, Kwando, Linyanti, Zambezi — converge here. The result is wet, green, and full of life in a way the rest of Namibia is not. Mudumu and Mamili are unfenced parks; you go in, you find your way.',
    highlights: ['Mudumu National Park', 'Mamili National Park', 'Okavango River', 'Zambezi cruises', 'Lozi village visits'],
    bestTime: 'May to October — dry season, access easier, animals concentrate.',
    wildlife: ['Hippo', 'Buffalo', 'Elephant', 'Wattled crane', 'African fish eagle', 'Sable antelope', 'Wild dog (rare)'],
    landscape: 'Rivers, floodplains, mopane woodland. Green Namibia.',
    suggestedJourney: 'untamed-northern-caprivi',
    image: '/images/places/acacia-savanna.webp',
    imageStatus: 'placeholder',
  },
  {
    slug: 'chobe',
    name: 'Chobe National Park',
    country: 'Botswana',
    shortLine: 'The densest elephant population in Africa. 120,000 of them, on a single river.',
    overview:
      'Just across the border from the Caprivi, in Botswana. Chobe river supports an elephant population of 120,000 — the densest on the continent. A river cruise at sunset puts you among them, on the water, in the herd. Lion, leopard, buffalo, and the full complement of antelope on the floodplains.',
    highlights: ['Chobe river cruise', 'Sunset game drive', 'Savuti marsh (lion)', 'Four of the Big Five'],
    bestTime: 'May to October — dry, animals concentrate along the river.',
    wildlife: ['Elephant (120,000)', 'Lion', 'Leopard', 'Buffalo', 'Puku', 'Hippos', 'Fish eagle'],
    landscape: 'River, floodplain, woodland. Botswana at its most accessible.',
    suggestedJourney: 'untamed-northern-caprivi',
    image: '/images/places/acacia-savanna.webp',
    imageStatus: 'placeholder',
  },
  {
    slug: 'victoria-falls',
    name: 'Victoria Falls',
    country: 'Zimbabwe / Zambia',
    shortLine: 'Mosi-oa-Tunya — the smoke that thunders. 1.7 kilometres wide. 108 metres tall.',
    overview:
      'The largest sheet of falling water in the world. The Kololo people called it Mosi-oa-Tunya — "the smoke that thunders" — and you can see the spray from 30 kilometres away. The falls mark the border between Zimbabwe and Zambia, and the natural endpoint of any southern African journey.',
    highlights: ['Falls walk — full length', 'Helicopter flight', 'Zambezi sunset cruise', 'Victoria Falls Bridge', 'Optional: white-water rafting'],
    bestTime: 'February to May — peak flow. September to October — low flow, less spray, better views.',
    wildlife: ['Elephant (town itself)', 'Hippo', 'Crocodile', 'Vervet monkey', '400+ bird species'],
    landscape: 'Basalt gorge, rainforest (from the spray), the Zambezi above and below.',
    suggestedJourney: 'untamed-northern-caprivi',
    image: '/images/places/dune-detail.webp',
    imageStatus: 'placeholder',
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
