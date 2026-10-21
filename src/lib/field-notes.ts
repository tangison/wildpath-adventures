/**
 * FIELD NOTES — editorial index + article bodies.
 * Six short guides. Every card links to its own article page
 * (/field-notes/[slug]) — never back to the index.
 * Copy rules: no em dashes, no exclamation points, no invented facts.
 * Seasonal guidance follows general Namibian climate patterns.
 */

export type FieldNoteBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'photo'; base: string; alt: string; caption?: string };

export type FieldNote = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;      // photo base
  imageAlt: string;
  readingTime: string;
  body: FieldNoteBlock[];
};

export const FIELD_NOTES: Pick<
  FieldNote, 'slug' | 'title' | 'excerpt' | 'category' | 'image' | 'imageAlt'
>[] = [
  {
    slug: 'when-to-visit-sossusvlei',
    title: 'When to visit Sossusvlei',
    excerpt:
      'The dunes change character with the seasons. A short guide to light, temperature, and the best months for photography.',
    category: 'Destination guide',
    image: 'sossusvlei-1',
    imageAlt: 'Hikers on the knife-edge ridge of a Sossusvlei dune at sunrise.',
  },
  {
    slug: 'etosha-dry-and-wet-seasons',
    title: 'Etosha in the dry and wet seasons',
    excerpt:
      'How wildlife viewing shifts between the dry winter months and the greener, quieter summer, and what each season rewards.',
    category: 'Destination guide',
    image: 'giraffes-walking-etosha',
    imageAlt: 'Three giraffes walking through green Etosha scrubland.',
  },
  {
    slug: 'packing-for-namibia',
    title: 'Packing for Namibia',
    excerpt:
      'Neutral colours, layers for cold mornings and hot middays, soft bags for light aircraft, and the small things that matter.',
    category: 'Travel preparation',
    image: 'game-drive-red-sand-track',
    imageAlt: 'A game-drive vehicle parked on a red sand track.',
  },
  {
    slug: 'self-drive-in-namibia',
    title: 'Self-drive in Namibia, honestly explained',
    excerpt:
      'Gravel road realities, distances that surprise people, fuel planning, and when a guided route is simply the better call.',
    category: 'Travel preparation',
    image: 'kalahari',
    imageAlt: 'A deep orange sunset over Kalahari thornveld and a winding road.',
  },
  {
    slug: 'responsible-wildlife-viewing',
    title: 'Watching wildlife responsibly',
    excerpt:
      'Waterhole etiquette, vehicle distances, and why the best sightings are the ones the animals never notice.',
    category: 'Responsible travel',
    image: 'etosha-2',
    imageAlt: 'Lions drinking at an Etosha waterhole, mirrored in still water.',
  },
  {
    slug: 'the-zambezi-route',
    title: 'The Zambezi route, explained',
    excerpt:
      'What the Caprivi actually is, why the rivers feel like a different country, and how the border days flow in practice.',
    category: 'Destination guide',
    image: 'zambezi-junction',
    imageAlt: 'The Zambezi River where Namibia, Zambia, Zimbabwe and Botswana meet.',
  },
];

export const ARTICLES: Record<string, FieldNote> = {
  'when-to-visit-sossusvlei': {
    slug: 'when-to-visit-sossusvlei',
    title: 'When to visit Sossusvlei',
    excerpt:
      'The dunes change character with the seasons. A short guide to light, temperature, and the best months for photography.',
    category: 'Destination guide',
    image: 'sossusvlei-1',
    imageAlt: 'Hikers on the knife-edge ridge of a Sossusvlei dune at sunrise.',
    readingTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Sossusvlei has two characters, and the month you choose decides which one you meet. From May to August the air is dry and cool at dawn, sometimes close to freezing on the pan, and the light stays low and honeyed for hours. From December to March the mornings come hot and fast, but summer rain can turn the plains green and fill the usually dry vleis with water, which is when the desert surprises people who only ever saw it in photographs.',
      },
      {
        type: 'h2',
        text: 'Light first, everything else second',
      },
      {
        type: 'p',
        text: 'Photographers should chase the shoulder months: April, May and September. Sunrise and sunset arrive at reasonable hours, the dunes carry deep shadow on one face and burn orange on the other, and Deadvlei keeps shade on the pan until mid-morning. By ten in the morning the shadows collapse, and by noon the ground shimmers. Plan a dawn gate opening, a slow breakfast back at camp, and a second outing late afternoon rather than fighting the midday heat.',
      },
      { type: 'photo', base: 'sossusvlei', alt: 'Red Sossusvlei dunes rising behind acacia trees on the gravel plain.' },
      {
        type: 'h2',
        text: 'The summer trade',
      },
      {
        type: 'p',
        text: 'January to March is quieter and greener. You share the dunes with fewer vehicles, the Camelthorn acacias carry new leaf, and afternoon thunderheads build over the dune sea in ways that make landscape photographers forget their schedule. It is hotter, and the last stretch of road to the vlei can close briefly after heavy rain. When it opens again, the light on wet red sand is worth the wait.',
      },
      {
        type: 'p',
        text: 'Whenever you go, give Sossusvlei two nights at least. One dawn is luck; two dawns is a plan. If you want the exact timing built around your travel dates, ask us and we will shape the route around the light.',
      },
    ],
  },

  'etosha-dry-and-wet-seasons': {
    slug: 'etosha-dry-and-wet-seasons',
    title: 'Etosha in the dry and wet seasons',
    excerpt:
      'How wildlife viewing shifts between the dry winter months and the greener, quieter summer, and what each season rewards.',
    category: 'Destination guide',
    image: 'giraffes-walking-etosha',
    imageAlt: 'Three giraffes walking through green Etosha scrubland.',
    readingTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Etosha rewards patience, and the season decides what you are patient for. In the dry winter months from May to October the bush thins, the pan turns bone-white, and every animal in the park eventually walks to a waterhole. Sit at a good waterhole in September and the wildlife comes to you: breeding herds of elephant, lines of springbok and zebra, giraffe navigating crooked legs, and predators on their own schedule.',
      },
      {
        type: 'h2',
        text: 'The dry season',
      },
      {
        type: 'p',
        text: 'June to September is the classic window. Days are mild, nights are cold, and the lack of water concentrates game in ways no guide could choreograph. The trade is simple: other vehicles know it too, so popular waterholes get busy in the middle of the day. Our routes plan waterhole time early and late, when the light is kind and the camps are quieter.',
      },
      { type: 'photo', base: 'etosha-2', alt: 'Lions drinking at an Etosha waterhole, mirrored in still water.' },
      {
        type: 'h2',
        text: 'The wet season',
      },
      {
        type: 'p',
        text: 'From November to March the summer rains scatter the animals away from the waterholes and into the green interior. Sightings take more work, but the park transforms: newborn springbok and wildebeest, migrant birds everywhere, dramatic skies over the pan, and far fewer vehicles on the loops. Photographers who accept slower mornings often come home with their favourite frames from this season.',
      },
      {
        type: 'p',
        text: 'There is no wrong answer, only different trips. Tell us what you want to see and how you like to travel, and we will put your days on the right side of the season.',
      },
    ],
  },

  'packing-for-namibia': {
    slug: 'packing-for-namibia',
    title: 'Packing for Namibia',
    excerpt:
      'Neutral colours, layers for cold mornings and hot middays, soft bags for light aircraft, and the small things that matter.',
    category: 'Travel preparation',
    image: 'game-drive-red-sand-track',
    imageAlt: 'A game-drive vehicle parked on a red sand track.',
    readingTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Namibia packs a wide temperature range into a single day. A June morning on the Sossusvlei pan can sit near freezing while the afternoon pushes past twenty-five degrees. The answer is layers you can peel in one movement: a warm fleece or down jacket over neutral-coloured shirts and trousers, plus a wide-brimmed hat and high-SPF sunscreen that survive all twelve months of the year here.',
      },
      {
        type: 'h2',
        text: 'The vehicle reality',
      },
      {
        type: 'p',
        text: 'If your journey includes light aircraft transfers, soft duffel bags are not a preference, they are a requirement. Hard cases physically do not fit the baggage pods. On self-drive routes, keep a day pack with water, sunscreen, camera and documents in the cabin rather than the load bin, because the load bin is for luggage, not for things you need at the next waterhole.',
      },
      { type: 'photo', base: 'kalahari-cabin-red-dune', alt: 'A stilted cabin with a green roof on a red Kalahari dune.' },
      {
        type: 'h2',
        text: 'Small things that earn their space',
      },
      {
        type: 'p',
        text: 'A headlamp for camp mornings, a buff or beanie for open-vehicle dawn drives, binoculars per traveller rather than per group, and a spare camera battery, because cold mornings drain them faster than you expect. Adapters are type M here, the large round-pin kind. Bring any personal medication in original packaging, and keep a paper copy of your bookings where the phone cannot die.',
      },
      {
        type: 'p',
        text: 'We send every traveller a route-specific packing list with their proposal, matched to the season and the lodges on their itinerary. If you are already booked, ask us for it.',
      },
    ],
  },

  'self-drive-in-namibia': {
    slug: 'self-drive-in-namibia',
    title: 'Self-drive in Namibia, honestly explained',
    excerpt:
      'Gravel road realities, distances that surprise people, fuel planning, and when a guided route is simply the better call.',
    category: 'Travel preparation',
    image: 'kalahari',
    imageAlt: 'A deep orange sunset over Kalahari thornveld and a winding road.',
    readingTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Namibia is one of the great self-drive countries on earth: low traffic, vast distances, and a road network that ranges from excellent tar to corrugated gravel. The honest version is that distances on the map lie. A stretch that looks like two hours can be four, because you will stop for giraffe crossing, a quiver tree forest, or simply the view. Plan days that are generous, not optimistic.',
      },
      {
        type: 'h2',
        text: 'Gravel roads are a skill, not a scare',
      },
      {
        type: 'p',
        text: 'Most routes north and south of the tar highways run on gravel. Corrugations are the reality; the technique is steady moderate speed, both hands on the wheel, and tyre pressures set for the surface. Stick to daylight driving. Wildlife and livestock are most active at dawn and dusk, which is exactly when you should be already at your lodge with a drink in hand.',
      },
      { type: 'photo', base: 'windhoek-christ-church', alt: 'Christuskirche and central Windhoek from above.' },
      {
        type: 'h2',
        text: 'Fuel, water and when to hand over the wheel',
      },
      {
        type: 'p',
        text: 'Fill up at every sensible opportunity, carry the two spare tyres your rental includes, and download offline maps before you leave Windhoek. Mobile coverage thins quickly outside towns. If any of that sounds like a chore rather than an adventure, that is what guided routes are for: same camps, same views, and someone else thinking about the road while you look at the country going past.',
      },
      {
        type: 'p',
        text: 'We build self-drive routes with realistic distances, vetted lodges and a check-in rhythm, and we also build guided and mixed routes. Tell us how you want to travel and we will be straight with you about which one fits.',
      },
    ],
  },

  'responsible-wildlife-viewing': {
    slug: 'responsible-wildlife-viewing',
    title: 'Watching wildlife responsibly',
    excerpt:
      'Waterhole etiquette, vehicle distances, and why the best sightings are the ones the animals never notice.',
    category: 'Responsible travel',
    image: 'etosha-2',
    imageAlt: 'Lions drinking at an Etosha waterhole, mirrored in still water.',
    readingTime: '3 min read',
    body: [
      {
        type: 'p',
        text: 'The best wildlife sighting you will ever have is one where the animals behave as if you were not there. That is not luck. It is the result of distance, patience and quiet. In Etosha and the parks we travel, the rules are simple: stay in your vehicle except where marked, keep your voice down at waterholes, and never position yourself between animals and water.',
      },
      {
        type: 'h2',
        text: 'Waterhole etiquette',
      },
      {
        type: 'p',
        text: 'Arrive early, park in line, and give the waterhole its silence. If a sighting gets crowded, wait your turn rather than edging closer, and give predators noticeably more room than you think they need. At night, use red light where camps provide it, and never spotlight animals yourself. Flash photography at night waterholes is a hard no everywhere we travel.',
      },
      { type: 'photo', base: 'rhino-ostrich-etosha', alt: 'A rhino grazing beside an ostrich in green bush.' },
      {
        type: 'h2',
        text: 'Why this matters here',
      },
      {
        type: 'p',
        text: 'Namibia\u2019s conservation model works because wildlife pays its way: tourism funds protection, and communities around the parks earn real income from animals being worth more alive. Every traveller who watches properly, tips guides fairly and buys local crafts strengthens that loop. Every traveller who feeds a jackal or crowds a rhino weakens it.',
      },
      {
        type: 'p',
        text: 'We brief every journey on the do\u2019s and don\u2019ts of the specific parks on the route. If you travel with us, the briefing is part of the plan, not a leaflet at the gate.',
      },
    ],
  },

  'the-zambezi-route': {
    slug: 'the-zambezi-route',
    title: 'The Zambezi route, explained',
    excerpt:
      'What the Caprivi actually is, why the rivers feel like a different country, and how the border days flow in practice.',
    category: 'Destination guide',
    image: 'zambezi-junction',
    imageAlt: 'The Zambezi River where Namibia, Zambia, Zimbabwe and Botswana meet.',
    readingTime: '4 min read',
    body: [
      {
        type: 'p',
        text: 'Look at a map of Namibia and you will find a narrow strip of land in the north-east that touches four countries. That is the Zambezi Region, historically the Caprivi Strip, and it is unlike anywhere else in the country. Instead of desert you find perennial rivers: the Okavango, the Kwando, the Chobe and the Zambezi, each with its own floodplain, its own birdlife and its own rhythm.',
      },
      {
        type: 'h2',
        text: 'Why travellers come back for it',
      },
      {
        type: 'p',
        text: 'People who have done the classic desert loop come north for water. Boat crossings at dusk with hippo surfacing alongside, fishing communities living on the floodplain, wattled cranes and carmine bee-eaters in season, and elephants that cross between parks without ever having seen a fence. The region links naturally to Botswana\u2019s Chobe River and on to Victoria Falls, which is why our northern route finishes where it does.',
      },
      { type: 'photo', base: 'chobe-river-kasane', alt: 'The Chobe River winding through green floodplains near Kasane.' },
      {
        type: 'h2',
        text: 'The border days, in practice',
      },
      {
        type: 'p',
        text: 'Crossing into Botswana at Ngoma or Kazungula is a straightforward process with a passport, vehicle papers where relevant, and patience for a queue in the shade. Visa rules vary by nationality, so we confirm your specific requirements before departure rather than guessing. Days are planned so that a border crossing is a morning event, followed by an afternoon on the water.',
      },
      {
        type: 'p',
        text: 'If the idea of green country after red dunes appeals, tell us. The northern route pairs beautifully with a first week in Etosha or a shorter desert start.',
      },
    ],
  },
};

export function getFieldNote(slug: string): FieldNote | undefined {
  return ARTICLES[slug];
}
