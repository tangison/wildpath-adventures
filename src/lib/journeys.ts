/**
 * Wildpath Adventures — Four flagship journeys.
 *
 * Copy is written like an experienced Namibian guide: short paragraphs,
 * observation over adjective, no brochure clichés.
 *
 * Itineraries use a visual timeline (Cluster-Leaf inspired) — never a table.
 * Accommodation is deliberately omitted from public view; "premium hand-selected"
 * is the only accommodation language. Detailed itineraries are available on request.
 */

export type JourneyDay = {
  day: string;          // "01"
  place: string;        // "Windhoek"
  title: string;        // "Arrival"
  moments: string[];    // ["Arrival", "Welcome dinner", "City orientation"]
  description: string;  // 1-3 short sentences, observation-led
  image?: string;       // destination photo or illustration
};

export type Journey = {
  slug: string;
  name: string;           // "Untamed Desert Route"
  tagline: string;        // one-line emotional hook
  duration: string;       // "13 Days"
  durationDays: number;
  regions: string[];      // ["Kalahari", "Namib Desert", ...]
  bestFor: string;        // "First-time visitors, photographers..."
  highlights: string[];   // top 5-7 places
  travelStyle: string;    // "Self-drive" | "Guided" | "Private guided"
  availability: string;   // "Private departures year-round"
  meals: string;          // "Breakfast included"
  startPoint: string;     // "Windhoek"
  endPoint: string;       // "Windhoek"
  overview: string;       // 2-3 sentences
  story: string[];        // longer narrative paragraphs
  days: JourneyDay[];
  cardImage: string;      // illustration for the journey card
  heroImage: string;      // large hero image
};

export const JOURNEYS: Journey[] = [
  {
    slug: 'untamed-desert',
    name: 'Untamed Desert Route',
    tagline: 'Red sand, ancient rock, and the silence of the oldest desert on earth.',
    duration: '13 Days',
    durationDays: 13,
    regions: ['Kalahari', 'Namib Desert', 'Swakopmund', 'Waterberg', 'Okonjima', 'Etosha'],
    bestFor: 'First-time visitors, photographers, couples, and self-drive explorers.',
    highlights: [
      'Kalahari Desert',
      'Sossusvlei',
      'Swakopmund',
      'Waterberg Plateau',
      'Okonjima Nature Reserve',
      'Etosha National Park',
    ],
    travelStyle: 'Self-drive',
    availability: 'Private departures year-round',
    meals: 'Breakfast included',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    overview:
      'A complete loop from Windhoek through the red south, the cold Atlantic coast, and north into Etosha. The classic Namibian traverse — but paced for those who want to stop, look, and listen.',
    story: [
      'The south is colour. Kalahari sand in the morning, Sossusvlei dunes at noon, Deadvlei cracked white under a sun that does not forgive. You climb Dune 45 before light. The pan is silent.',
      'The coast is weather. Swakopmund arrives in fog — German architecture, salt pans, flamingos. Walvis Bay lagoon at low tide is pink with thousands of birds.',
      'The north is wildlife. Waterberg rises red out of plain. Okonjima tracks leopards on foot. Etosha is a salt flat the size of a small country, and in the dry season, every animal in the park comes to you — at the Okaukuejo waterhole, after dark, rhino first, then elephant, then lion.',
    ],
    cardImage: '/images/illustrations/v2/05-card-expeditions.webp',
    heroImage: '/images/places/sossusvlei.webp',
    days: [
      { day: '01', place: 'Windhoek', title: 'Arrival', moments: ['Arrival', 'Welcome dinner', 'City orientation'], description: 'Land at Hosea Kutako. The light here is already different — thinner, dryer, the kind that flattens hills into silhouettes by 4 PM. We meet you at the airport and bring you into the city.' },
      { day: '02', place: 'Kalahari', title: 'South into the red sand', moments: ['Drive south', 'Sunset walk', 'Bushman story fireside'], description: 'The road south drops in elevation and rises in temperature. By late afternoon you are in the Kalahari — red sand plains, acacia scrub, and a silence that is geological, not atmospheric.' },
      { day: '03', place: 'Kalahari', title: 'A slower day', moments: ['Morning walk with San trackers', 'Afternoon at leisure', 'Night drive'], description: 'The San know this landscape by sound. A morning walk with them is not a tour; it is a different way of being in a place. Afternoon is yours. Brown hyena move at dusk.' },
      { day: '04', place: 'Namib Desert', title: 'Crossing the Naukluft', moments: ['Long drive west', 'Sesriem Canyon', 'First dunes at sunset'], description: 'You cross the Naukluft mountains into the Namib-Naukluft Park. The land gets drier, the sky gets bigger. By evening you are at the edge of the dune sea.' },
      { day: '05', place: 'Sossusvlei', title: 'Dune 45 before light', moments: ['Pre-dawn climb', 'Deadvlei walk', 'Sesriem Canyon afternoon'], description: 'You leave camp in the dark. Dune 45 by sunrise casts a shadow across 300 metres of cracked pan. Deadvlei — dead camelthorn trees, white clay, orange dune wall — is one of the most photographed places on the continent, and it is still hard to believe.' },
      { day: '06', place: 'Swakopmund', title: 'Through the Kuiseb to the coast', moments: ['Cross Kuiseb Pass', 'Walvis Bay lagoon', 'Arrive Swakopmund'], description: 'You cross the Kuiseb — a river that flows once a decade — and the desert gives way to fog. Walvis Bay lagoon at low tide is pink with flamingos. Swakopmund is German architecture on African coast, which is stranger than it sounds.' },
      { day: '07', place: 'Swakopmund', title: 'A day on the coast', moments: ['Sandwich Harbour', 'Or marine cruise', 'Or just walk the beach'], description: 'A day to choose: Sandwich Harbour where dunes drop into the sea; a marine cruise with dolphins and seals; or simply walk the beach and eat fish in the evening. The fog clears by 11.' },
      { day: '08', place: 'Waterberg', title: 'North through Damaraland', moments: ['Spitzkoppe detour', 'Long drive north', 'Arrive Waterberg sunset'], description: 'You turn north. Spitzkoppe — a granite inselberg rising 700 metres out of the plain — is worth the detour. By evening you reach Waterberg, a red sandstone plateau that catches the last light.' },
      { day: '09', place: 'Waterberg', title: 'On the plateau', moments: ['Plateau hike', 'Vulture colony', 'History walk'], description: 'A morning hike onto the plateau. The view from the top is the kind you remember — plain in every direction, kudu moving through the undergrowth. Black rhino were reintroduced here. So were the Herero, after 1904.' },
      { day: '10', place: 'Okonjima', title: 'On the trail of the leopard', moments: ['Drive to Okonjima', 'Afternoon tracking', 'Night hide'], description: 'Okonjima is the home of the AfriCat Foundation. The afternoon is spent tracking collared leopards on foot with a guide. You will probably see one. You will certainly hear one, at night, from the hide.' },
      { day: '11', place: 'Etosha', title: 'Into the great white pan', moments: ['Enter Etosha', 'Drive to Okaukuejo', 'Waterhole at night'], description: 'You enter Etosha through Anderson Gate. The pan — 4,800 square kilometres of white salt — opens in front of you. Okaukuejo waterhole at night is theatre. Rhino first, then elephant, then lion. Sit. Watch.' },
      { day: '12', place: 'Etosha', title: 'A full day on the pan', moments: ['Sunrise game drive', 'Halali midday', 'Floodlit waterhole evening'], description: 'A full day to drive the pan. Springbok, gemsbok, ostrich, jackal. The big herds in the dry season; the predators that follow them. Halali camp at midday for shade and a swim. Another waterhole after dark.' },
      { day: '13', place: 'Windhoek', title: 'Return', moments: ['Morning drive', 'Craft market stop', 'Airport transfer'], description: 'One last morning drive. The drive back to Windhoek is six hours on good road. Craft market at Okahandja if there is time. Airport transfer in the evening.' },
    ],
  },
  {
    slug: 'untamed-central',
    name: 'Untamed Central Route',
    tagline: 'Rock art, desert elephants, and the riverbeds of Damaraland.',
    duration: '10 Days',
    durationDays: 10,
    regions: ['Windhoek', 'Damaraland', 'Twyfelfontein', 'Huab River', 'Etosha'],
    bestFor: 'Returning visitors, wildlife enthusiasts, and travellers who prefer to walk.',
    highlights: [
      'Erongo Mountains',
      'Twyfelfontein rock engravings',
      'Desert-adapted elephants',
      'Huab River walk',
      'Petrified Forest',
      'Etosha western corridor',
    ],
    travelStyle: 'Guided 4×4',
    availability: 'Private departures year-round',
    meals: 'Breakfast and dinner included',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    overview:
      'The central corridor — Erongo granite, Damara rock art, the dry Huab riverbed, and the less-visited western gate of Etosha. For travellers who want to get out of the vehicle and onto the ground.',
    story: [
      'Damaraland is the heart of the country. Granite inselbergs rise out of gravel plains. The Huab riverbed — dry for most of the year — is a green thread that desert-adapted elephants walk between waterholes.',
      'Twyfelfontein has 6,000-year-old rock engravings: giraffe, rhino, the strange lion-with-five-toes. The petroglyphs are not art for art’s sake; they are maps, stories, and teaching.',
      'The western gate of Etosha is different from the east — fewer vehicles, more rhino, longer grass. You enter through Galton Gate and exit through Okaukuejo, having seen both halves of the pan.',
    ],
    cardImage: '/images/illustrations/v2/08-manifesto-atmosphere.webp',
    heroImage: '/images/places/damaraland.webp',
    days: [
      { day: '01', place: 'Windhoek', title: 'Arrival', moments: ['Airport meet', 'City briefing', 'Welcome dinner'], description: 'Land at Hosea Kutako. A short briefing — the route, the vehicle, the days ahead — and dinner in Windhoek. Early night; tomorrow you head north.' },
      { day: '02', place: 'Erongo Mountains', title: 'North to the granite', moments: ['Drive north', 'Erongo arrival', 'Sunset over the boulders'], description: 'You leave the highland and drop into the desert. The Erongo mountains are ancient granite — 130 million years old, weathered into shapes that hold the last light.' },
      { day: '03', place: 'Erongo Mountains', title: 'On foot among the boulders', moments: ['Morning walk', 'San rock paintings', 'Birdwatching afternoon'], description: 'A morning walk into the boulders. San rock paintings in overhangs — some 2,000 years old, some older. The afternoon is birds: Hartlaub’s francolin, Rüppell’s parrot, the rosy-faced lovebird.' },
      { day: '04', place: 'Damaraland', title: 'Into the Huab', moments: ['Drive to Damaraland', 'Afternoon riverbed walk', 'Bush dinner'], description: 'You drive north into Damaraland. The afternoon is spent walking the dry Huab riverbed with a Damara tracker — reading tracks, finding elephant spoor, learning the plants.' },
      { day: '05', place: 'Damaraland', title: 'Tracking desert elephants', moments: ['Morning tracking', 'Twyfelfontein engravings', 'Petrified Forest'], description: 'A morning spent tracking desert-adapted elephants — they cover 70km a day between waterholes. Afternoon to Twyfelfontein: 6,000-year-old engravings of giraffe, rhino, the strange lion-with-five-toes. Then the Petrified Forest — 280-million-year-old tree trunks, turned to stone.' },
      { day: '06', place: 'Damaraland', title: 'A morning with rhino', moments: ['Save the Rhino Trust drive', 'Optional scenic flight', 'Stargazing'], description: 'You join the Save the Rhino Trust for a morning tracking the last free-ranging black rhino in the world. This is conservation as it actually happens — not as a brochure describes it. Afternoon optional scenic flight over the Skeleton Coast.' },
      { day: '07', place: 'Etosha — Galton Gate', title: 'Into the western pan', moments: ['Drive to Galton Gate', 'Afternoon game drive', 'Dolomite camp'], description: 'You enter Etosha through the western gate — Galton — which most visitors never see. Longer grass, fewer vehicles, more rhino. Dolomite camp sits on a hill; the waterhole below is floodlit.' },
      { day: '08', place: 'Etosha — Okaukuejo', title: 'Drive east across the pan', moments: ['Morning drive', 'Halali midday', 'Okaukuejo waterhole night'], description: 'A long drive east across the pan. The landscape changes — salt, then grass, then mopane. Stop at Halali for shade. Arrive Okaukuejo by evening. The waterhole here is the best in the park. Sit until midnight.' },
      { day: '09', place: 'Etosha — Okaukuejo', title: 'A second day on the pan', moments: ['Sunrise drive', 'Photographic hides', 'Farewell dinner'], description: 'A second day to slow down. Sunrise drive to the eastern edge of the pan. Afternoon in the photographic hides. Farewell dinner under the stars.' },
      { day: '10', place: 'Windhoek', title: 'Return', moments: ['Morning drive south', 'Craft stop', 'Airport transfer'], description: 'The drive back south is five hours. Craft stop at Okahandja. Airport transfer in the evening.' },
    ],
  },
  {
    slug: 'untamed-northern-caprivi',
    name: 'Untamed Northern Caprivi Route',
    tagline: 'Where Namibia becomes river, forest, and the great falling water of Victoria Falls.',
    duration: '14 Days',
    durationDays: 14,
    regions: ['Windhoek', 'Caprivi Strip', 'Chobe', 'Victoria Falls', 'Okavango'],
    bestFor: 'Travellers who have already done the desert. River people. Birders.',
    highlights: [
      'Caprivi Strip wetlands',
      'Mudumu National Park',
      'Chobe river cruise',
      'Victoria Falls',
      'Okavango Delta',
      'Mamili National Park',
    ],
    travelStyle: 'Guided + charter flights',
    availability: 'Private departures May — October',
    meals: 'Breakfast, lunch and dinner included',
    startPoint: 'Windhoek',
    endPoint: 'Victoria Falls',
    overview:
      'The forgotten north-east — the Caprivi Strip, a panhandle of rivers and floodplains between Angola, Botswana, and Zambia. Then east to Chobe, and the smoke that thunders. A different Namibia entirely.',
    story: [
      'Most of Namibia is dry. The Caprivi is not. Four rivers — the Okavango, the Kwando, the Linyanti, the Zambezi — meet here, and the land is green, flat, and full of birds. Hippo, buffalo, elephant, and the wattled crane.',
      'Mudumu and Mamili are parks without fences. You drive in, you find your way. The guides here are Lozi and Subia; they grew up on these rivers.',
      'Then east, into Botswana: Chobe, which has the densest elephant population in Africa. And finally Victoria Falls — Mosi-oa-Tunya, "the smoke that thunders" — visible from 30 kilometres away.',
    ],
    cardImage: '/images/illustrations/v2/06-card-charters.webp',
    heroImage: '/images/places/acacia-savanna.webp',
    days: [
      { day: '01', place: 'Windhoek', title: 'Arrival', moments: ['Airport meet', 'Charter briefing', 'Welcome dinner'], description: 'Land at Hosea Kutako. Briefing on the route — we will be flying tomorrow. Dinner in Windhoek.' },
      { day: '02', place: 'Caprivi Strip', title: 'Charter to the east', moments: ['Charter flight to Katima Mulilo', 'River lodge arrival', 'Sunset cruise'], description: 'A charter flight across the entire country — Kalahari below, then bush, then the green ribbon of the Caprivi. The change is sudden. You land at Katima Mulilo and the air is wet.' },
      { day: '03', place: 'Caprivi Strip', title: 'On the Zambezi', moments: ['Morning river cruise', 'Village visit', 'Night drive'], description: 'The Zambezi before the falls is a wide, slow river. Hippos, fish eagles, the wattled crane. A village visit — Lozi people, fishing, the old ways. Night drive for sable and roan.' },
      { day: '04', place: 'Mudumu National Park', title: 'Into the park', moments: ['Drive to Mudumu', 'Game drive', 'Bush camp'], description: 'Mudumu is a park without fences — elephant, buffalo, lion, wild dog. A mobile camp set up ahead of you. The night is loud with hyena and lion.' },
      { day: '05', place: 'Mamili National Park', title: 'The wildest corner', moments: ['4×4 into Mamili', 'Walking safari', 'Island camp'], description: 'Mamili is the wildest corner of Namibia — a delta of reedbeds and islands, very few roads, very few people. You go in by 4×4, then on foot. Camp on an island.' },
      { day: '06', place: 'Okavango River', title: 'West to the Okavango', moments: ['Drive west', 'River lodge arrival', 'Sunset on the river'], description: 'You drive west across the Caprivi to the Okavango river — the same river that becomes the delta in Botswana. The lodge is on the bank. Sunset is on the water.' },
      { day: '07', place: 'Okavango River', title: 'A river day', moments: ['Mokoro trip', 'Birdwatching', 'Fishing optional'], description: 'A day on the river. Mokoro — the traditional dugout canoe — through the papyrus. The bird list here is over 400 species. Tiger fishing if you want; catch and release.' },
      { day: '08', place: 'Chobe — Botswana', title: 'Across the border', moments: ['Border crossing', 'Chobe river lodge', 'Sunset cruise'], description: 'A border crossing into Botswana. Chobe has more elephants than anywhere — 120,000 at the last count. A sunset river cruise puts you among them, on the water, in the herd.' },
      { day: '09', place: 'Chobe', title: 'A full day in Chobe', moments: ['Morning game drive', 'River lunch', 'Evening drive'], description: 'A full day in the park. Morning drive — lion, leopard, the big herds. Lunch on the river. Evening drive again. The light here is famous; photographers come from everywhere.' },
      { day: '10', place: 'Victoria Falls — Zimbabwe', title: 'East to the smoke', moments: ['Transfer to Victoria Falls', 'Afternoon at the falls', 'Sunset cruise on the Zambezi'], description: 'A transfer east. By mid-afternoon you are at Victoria Falls — Mosi-oa-Tunya, "the smoke that thunders". The falls are 1.7 kilometres wide and 108 metres tall. You will get wet.' },
      { day: '11', place: 'Victoria Falls', title: 'A day at the falls', moments: ['Falls walk — full length', 'Helicopter optional', 'Local market'], description: 'A morning walk the full length of the falls, on the Zimbabwe side. A helicopter flight is optional — the only way to see the scale. Afternoon at the local market.' },
      { day: '12', place: 'Victoria Falls', title: 'A free day', moments: ['Optional activities', 'Or simply rest'], description: 'A day to choose: white-water rafting, microlight flight, elephant encounter — or simply rest. The verandah of the Victoria Falls Hotel is a place to write postcards.' },
      { day: '13', place: 'Victoria Falls', title: 'The last evening', moments: ['Boma dinner', 'Tribal dancing', 'Farewell'], description: 'The last evening. The Boma dinner — traditional Zimbabwean food, tribal dancing, storytelling. A farewell from your guide.' },
      { day: '14', place: 'Departure', title: 'Departure', moments: ['Transfer to airport', 'Or extend to the Okavango Delta'], description: 'Transfer to Victoria Falls airport. Or extend — the Okavango Delta is two hours south by charter, and worth another three days.' },
    ],
  },
  {
    slug: 'classic-namibia',
    name: 'Classic Namibia',
    tagline: 'The essential loop. The red dune, the coast, the pan — in a single, well-paced week.',
    duration: '7 Days',
    durationDays: 7,
    regions: ['Windhoek', 'Sossusvlei', 'Swakopmund', 'Etosha'],
    bestFor: 'First-time visitors on a tighter schedule. Honeymooners. Photographers.',
    highlights: [
      'Sossusvlei dunes',
      'Deadvlei',
      'Swakopmund',
      'Walvis Bay lagoon',
      'Etosha National Park',
      'Okaukuejo waterhole',
    ],
    travelStyle: 'Self-drive',
    availability: 'Private departures year-round',
    meals: 'Breakfast included',
    startPoint: 'Windhoek',
    endPoint: 'Windhoek',
    overview:
      'The essential Namibian loop, in a single well-paced week. Sossusvlei, Swakopmund, Etosha — the three icons. For travellers who do not have two weeks but want the heart of the country.',
    story: [
      'This is the route most first-time visitors take. It is popular for a reason. Three landscapes, three climates, three different kinds of silence — the dunes, the coast, the pan.',
      'The distances are real but the roads are good. You can do this self-drive, with a handover briefing and a 4×4 at the airport. We provide the route, the lodges, the bookings, and a 24-hour line.',
      'If you have ten days instead of seven, add Damaraland. If you have two weeks, take the Untamed Desert Route.',
    ],
    cardImage: '/images/illustrations/v2/01-hero.webp',
    heroImage: '/images/places/etosha.webp',
    days: [
      { day: '01', place: 'Windhoek', title: 'Arrival', moments: ['Airport meet', 'Vehicle handover', 'Briefing'], description: 'Land at Hosea Kutako. Vehicle handover, route briefing, and a short drive into Windhoek for the night. The first Namibian sunset from the guesthouse verandah.' },
      { day: '02', place: 'Sossusvlei', title: 'South into the dunes', moments: ['Drive south', 'Sesriem Canyon', 'Sunset dune'], description: 'A long drive south through the Khomas Hochland. The land drops, the air dries, and by afternoon you are at the edge of the dune sea. Sesriem Canyon at sunset — a slot carved by an occasional river.' },
      { day: '03', place: 'Sossusvlei', title: 'Deadvlei before light', moments: ['Pre-dawn Dune 45', 'Deadvlei walk', 'Afternoon at leisure'], description: 'You leave camp in the dark. Dune 45 by sunrise. Deadvlei — dead camelthorn trees, white clay pan, orange dune wall. The afternoon is yours; the lodge pool is cold and the bar is open.' },
      { day: '04', place: 'Swakopmund', title: 'Through the Kuiseb to the coast', moments: ['Kuiseb Pass', 'Walvis Bay flamingos', 'Arrive Swakopmund'], description: 'You cross the Kuiseb Pass — a river that flows once a decade — and the desert gives way to fog. Walvis Bay lagoon at low tide: pink with flamingos. Swakopmund by evening: German architecture, seafood, the cold Atlantic.' },
      { day: '05', place: 'Swakopmund', title: 'A day on the coast', moments: ['Sandwich Harbour or marine cruise', 'Town afternoon', 'Dinner on the mole'], description: 'A day to choose: Sandwich Harbour where dunes drop into the sea; a marine cruise with dolphins and seals; a living desert tour for the small things — geckos, chameleons, sidewinders. Dinner on the mole.' },
      { day: '06', place: 'Etosha', title: 'North to the great white pan', moments: ['Long drive north', 'Enter Etosha', 'Okaukuejo waterhole'], description: 'The drive north is long but the road is good. You enter Etosha through Anderson Gate by mid-afternoon. The pan opens in front of you — white, flat, the size of a small country. Okaukuejo waterhole at night: rhino, elephant, lion, in that order.' },
      { day: '07', place: 'Windhoek', title: 'Return', moments: ['Morning game drive', 'Drive south', 'Airport transfer'], description: 'One last sunrise drive. Then south — five hours on good road. Craft market at Okahandja if there is time. Airport transfer in the evening.' },
    ],
  },
];

export function getJourney(slug: string): Journey | undefined {
  return JOURNEYS.find((j) => j.slug === slug);
}
