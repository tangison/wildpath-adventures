/**
 * Wildpath Adventures — Four flagship journeys.
 *
 * Routes are taken directly from Juliet's supplied itinerary documents.
 * Public pages show: route shape, duration, travel style, highlights, CTAs.
 * Detailed day-by-day, accommodation, and meal plans are NOT shown publicly —
 * they are available on request via the enquiry form.
 *
 * Copy uses short editorial descriptions of each destination,
 * not invented operational detail or named personnel.
 *
 * IMPORTANT — claims audit:
 *   - No named guides (Tjipuko removed)
 *   - No named conservation partners (Save the Rhino Trust, Desert Lion Project removed)
 *   - No "Cessna" — replaced with "self-drive, guided road travel, transfers or regional connections"
 *   - No "24-hour line" — softened to "direct line to your planning team"
 *   - No fixed response-time promises beyond "we aim to reply within two business days"
 *   - No "carbon logged, not offset" — replaced with "responsible travel approach"
 *   - No "90% Namibian supply chain" — removed
 *   - No "every guide is Namibian" — replaced with "local destination knowledge and trusted partners"
 */

export type RouteStop = {
  name: string;
  description: string;  // 1-2 short sentences about the destination itself
};

export type Journey = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  durationDays: number;
  travelStyle: string;        // "Self-drive" | "Guided" | "Private guided"
  startPoint: string;
  endPoint: string;
  bestFor: string;
  highlights: string[];
  overview: string;           // 2-3 sentences on the shape of the journey
  route: RouteStop[];         // the visual route sequence — destination by destination
  cardImage: string;          // illustration for the journey card (brand-section appropriate)
  heroImage: string;          // large hero image — real destination photography
  availability: string;
  mealsNote: string;
  /**
   * Flagged items requiring client confirmation.
   * Not shown publicly — internal use only.
   */
  _internalFlags?: string[];
};

export const JOURNEYS: Journey[] = [
  // ═══════════════════════════════════════════════════════════
  // 1. CLASSIC NAMIBIA ROUTE — ~15 days
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'classic-namibia',
    name: 'Classic Namibia Route',
    tagline: 'The full loop — south to the canyon, north to the pan, and the cold coast between.',
    duration: 'Approximately 15 days',
    durationDays: 15,
    travelStyle: 'Self-drive or guided',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    bestFor: 'First-time visitors, photographers, and travellers who want the full country in one journey.',
    highlights: [
      'Kalahari Desert',
      'Fish River Canyon',
      'Wild Horses of the Namib',
      'Kolmanskop ghost town',
      'Sossusvlei',
      'Swakopmund',
      'Damaraland',
      'Etosha National Park',
    ],
    overview:
      'The complete Namibian arc — from the red south and the world’s second-largest canyon, through the ghost towns of the Sperrgebiet, up the cold Atlantic coast, into the rock-art country of Damaraland, and finishing on the great white pan of Etosha. A full loop that returns to Windhoek.',
    route: [
      { name: 'Windhoek', description: 'The starting point. A small capital in the highlands — German architecture, wide streets, the first of many long horizons.' },
      { name: 'Kalahari Desert', description: 'Red sand plains and camelthorn acacia. The San people have read this landscape by sound for thousands of years.' },
      { name: 'Fish River Canyon', description: 'The second-largest canyon in the world — 160 kilometres long, up to 27 kilometres wide, 550 metres deep. Best viewed at sunrise or sunset.' },
      { name: 'Wild Horses & Kolmanskop', description: 'The wild horses of the Namib, descended from abandoned farm stock a century ago. Kolmanskop — a diamond-mining town the desert swallowed.' },
      { name: 'Sossusvlei', description: 'Red dunes rising from a white clay pan. Dune 45, Deadvlei, and some of the most photographed desert landscape on earth.' },
      { name: 'Swakopmund', description: 'The cold Atlantic coast. German colonial architecture on African shores — fog, flamingos, and theWalvis Bay lagoon.' },
      { name: 'Damaraland', description: 'Granite inselbergs, 6,000-year-old rock engravings at Twyfelfontein, and desert-adapted wildlife in a wild landscape.' },
      { name: 'Etosha National Park', description: 'A salt flat the size of a small country. In the dry season, the waterholes become theatre — rhino, elephant, lion, all in a single evening.' },
      { name: 'Windhoek', description: 'The return. Airport transfer and onward travel.' },
    ],
    cardImage: '/images/illustrations/v2/05-card-expeditions.webp',
    heroImage: '/images/places/sossusvlei.webp',
    availability: 'Private departures arranged on request, year-round.',
    mealsNote: 'Meal inclusions vary by section of route. Exact inclusions are confirmed in your personalised proposal.',
    _internalFlags: [
      'Client source provided approximate duration ("approximately 15 days"). Confirm exact day count.',
      'Confirm preferred order: Wild Horses before or after Kolmanskop.',
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 2. UNTAMED NORTHERN CAPRIVI ROUTE — 14 days
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'untamed-northern-caprivi',
    name: 'Untamed Northern Caprivi Route',
    tagline: 'North into the rivers — Okavango, Kwando, Chobe, and the Zambezi. A different Namibia entirely.',
    duration: '14 days',
    durationDays: 14,
    travelStyle: 'Guided',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    bestFor: 'Returning visitors, river and bird enthusiasts, and travellers ready for the green north-east.',
    highlights: [
      'Etosha National Park',
      'Rundu and the Okavango River',
      'Kwando River',
      'Bwabwata National Park',
      'Chobe River',
      'Zambezi River',
    ],
    overview:
      'The forgotten north-east — a panhandle of rivers and floodplains between Angola, Botswana, Zambia, and Zimbabwe. Where most of Namibia is dry, the Caprivi is wet, green, and full of birds. The route continues into Botswana and the Chobe river before returning.',
    route: [
      { name: 'Windhoek', description: 'Starting point. Briefing on the route and the days ahead.' },
      { name: 'Etosha National Park', description: 'A first taste of wildlife on the great white pan — rhino, elephant, lion at the waterholes.' },
      { name: 'Rundu & the Okavango River', description: 'The border with Angola. The Okavango river runs wide and slow here, before it becomes the delta in Botswana.' },
      { name: 'Kwando River', description: 'A green ribbon of river and floodplain. Hippo, buffalo, elephant, and some of the best birding in southern Africa.' },
      { name: 'Bwabwata National Park', description: 'A park without fences — elephant, buffalo, wild dog, and the wattled crane. Few vehicles, fewer people.' },
      { name: 'Chobe River', description: 'Across the border into Botswana. Chobe has the densest elephant population in Africa — 120,000 at the last count.' },
      { name: 'Zambezi River', description: 'The Zambezi before the falls. Wide, slow, and loud with hippo and fish eagle.' },
      { name: 'Windhoek', description: 'The return. Transfer connections arranged on request.' },
    ],
    cardImage: '/images/illustrations/v2/06-card-charters.webp',
    heroImage: '/images/places/acacia-savanna.webp',
    availability: 'Best travelled May to October. Private departures arranged on request.',
    mealsNote: 'Meal inclusions vary by section of route. Exact inclusions are confirmed in your personalised proposal.',
    _internalFlags: [
      'Confirm whether route ends in Windhoek or extends to Victoria Falls (client source ends at Zambezi River).',
      'Confirm border-crossing logistics for Chobe (Botswana) — visa requirements vary by nationality.',
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 3. UNTAMED CENTRAL ROUTE — ~11 days
  // NOTE: client source skips Day 7. Public route presented without
  // day-by-day numbering to avoid exposing the inconsistency.
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'untamed-central',
    name: 'Untamed Central Route',
    tagline: 'The central corridor — Etosha, Damaraland, and the cold Atlantic coast.',
    duration: 'Approximately 11 days',
    durationDays: 11,
    travelStyle: 'Self-drive or guided',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    bestFor: 'Returning visitors, wildlife enthusiasts, and travellers with limited time who want the heart of the country.',
    highlights: [
      'Etosha National Park',
      'Damaraland',
      'Twyfelfontein rock engravings',
      'Swakopmund',
      'Walvis Bay lagoon',
    ],
    overview:
      'The central corridor — north to the pan, west into the rock-art country of Damaraland, and down to the cold Atlantic coast. A shorter loop for travellers who want the wildlife and the desert without the long southern drive.',
    route: [
      { name: 'Windhoek', description: 'Starting point. Briefing on the route ahead.' },
      { name: 'Etosha National Park', description: 'The great white pan and its waterholes. Rhino, elephant, lion, and the full complement of plains game.' },
      { name: 'Damaraland', description: 'Granite inselbergs, dry riverbeds, and 6,000-year-old rock engravings at Twyfelfontein. Desert-adapted wildlife in a wild landscape.' },
      { name: 'Swakopmund', description: 'The cold Atlantic coast. Fog, flamingos, and German colonial architecture on African shores.' },
      { name: 'Windhoek', description: 'The return. Airport transfer and onward travel.' },
    ],
    cardImage: '/images/illustrations/v2/08-manifesto-atmosphere.webp',
    heroImage: '/images/places/damaraland.webp',
    availability: 'Private departures arranged on request, year-round.',
    mealsNote: 'Meal inclusions vary by section of route. Exact inclusions are confirmed in your personalised proposal.',
    _internalFlags: [
      'Client source document skips Day 7. Day-by-day count not exposed publicly. Confirm with client whether a day is missing or simply unnumbered.',
      'Confirm exact duration ("approximately 11 days").',
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // 4. UNTAMED DESERT ROUTE — 13 days
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'untamed-desert',
    name: 'Untamed Desert Route',
    tagline: 'Red sand, the cold coast, the plateau, and the great white pan — the classic desert traverse.',
    duration: '13 days',
    durationDays: 13,
    travelStyle: 'Self-drive or guided',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    bestFor: 'First-time visitors, photographers, and self-drive explorers who want the desert and the wildlife in one route.',
    highlights: [
      'Kalahari Desert',
      'Sossusvlei',
      'Swakopmund',
      'Waterberg Plateau',
      'Okonjima Nature Reserve',
      'Etosha National Park',
    ],
    overview:
      'The classic desert traverse — south into the red dunes, west to the cold coast, north-east to the Waterberg plateau and Okonjima, and finally north to Etosha. The shape of Namibia in thirteen days.',
    route: [
      { name: 'Windhoek', description: 'Starting point. Briefing on the route, the vehicle, and the days ahead.' },
      { name: 'Kalahari Desert', description: 'Red sand plains and camelthorn acacia. A landscape the San have read by sound for thousands of years.' },
      { name: 'Sossusvlei', description: 'Red dunes rising from a white clay pan. Dune 45 at sunrise, Deadvlei, and the oldest desert on earth.' },
      { name: 'Swakopmund', description: 'The cold Atlantic coast. German colonial architecture, fog, flamingos, and the Walvis Bay lagoon.' },
      { name: 'Waterberg Plateau', description: 'A red sandstone plateau rising out of the plain. Kudu, black rhino, and a view that reaches in every direction.' },
      { name: 'Okonjima', description: 'A nature reserve known for its conservation work and the chance to track leopard on foot with experienced guides.' },
      { name: 'Etosha National Park', description: 'The great white pan. In the dry season, every animal in the park comes to the waterholes.' },
      { name: 'Windhoek', description: 'The return. Airport transfer and onward travel.' },
    ],
    cardImage: '/images/illustrations/v2/01-hero.webp',
    heroImage: '/images/places/etosha.webp',
    availability: 'Private departures arranged on request, year-round.',
    mealsNote: 'Meal inclusions vary by section of route. Exact inclusions are confirmed in your personalised proposal.',
    _internalFlags: [
      'Confirm Okonjima is the correct name (vs. Okonjima Nature Reserve) and that the partnership is approved by client.',
    ],
  },
];

export function getJourney(slug: string): Journey | undefined {
  return JOURNEYS.find((j) => j.slug === slug);
}
