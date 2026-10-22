/**
 * Field Notes editorial library.
 *
 * All content is general destination guidance, accurate to Namibia's
 * seasons and conditions. No invented staff experiences, no company
 * history, no named personnel.
 */

export type NoteSection = {
  h?: string;
  p: string[];
};

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  body: NoteSection[];
};

export const NOTES: Note[] = [
  {
    slug: 'when-to-visit-sossusvlei',
    title: 'When to visit Sossusvlei',
    excerpt:
      'The dunes change character with the seasons. A short guide to light, temperature, and the best months for photography.',
    category: 'Destination guide',
    body: [
      {
        p: [
          'Sossusvlei does not really have a bad month. It has months that reward different plans. What changes through the year is not the desert itself but the light, the temperature, and the length of the working window between sunrise and the midday heat.',
          'The park gate at Sesriem opens before dawn, and the first hour inside is the reason photographers put alarms on for 04:30. Low sun throws the eastern faces of the dunes into deep shadow and sets the sand burning red. By mid-morning the shadows are gone and the shapes flatten. The classic images of Deadvlei, Dune 45, and Big Daddy are all early-morning images for this reason.',
        ],
      },
      {
        h: 'May to August: the cool, dry core',
        p: [
          'These are the winter months and the driest of the year. Daytime temperatures around the vlei are comfortable, usually somewhere in the low-to-mid twenties Celsius, but mornings are genuinely cold, often close to freezing before sunrise. Bring a proper layer; the first hour in the park is spent in near-winter conditions before the day warms up fast.',
          'The air is at its clearest, skies are deep blue, and rain is rare. This is the most reliable period for the sharp, high-contrast light that Sossusvlei is known for. It is also peak season, so rooms around Sesriem book out well in advance.',
        ],
      },
      {
        h: 'September to October: warm light, fewer crowds',
        p: [
          'Spring is the shoulder season and, for many guides, the sweet spot. Mornings are milder, the light stays warm, and visitor numbers ease off after the winter peak. The grass from the last rains has usually dried to gold, which softens the frame around the dunes.',
          'October afternoons can push past thirty-five degrees. Plan a dawn entry, a long midday break, and a second short outing late in the day if you want more than one shooting session.',
        ],
      },
      {
        h: 'November to April: the green surprise',
        p: [
          'Summer is the wet season, though in the Namib "wet" is a relative term. When rain does come it often falls as brief afternoon storms, and the desert responds within weeks: grass on the dune crests, ephemeral pools, and a colour palette that surprises people who have only seen the dry postcards.',
          'Cloud build-up in the afternoons makes for dramatic skies, and the air after a storm can be astonishingly clear. Temperatures are high, frequently above forty degrees at the peak of the day. If you come in this window, treat dawn as the main event and keep the middle of the day for shade.',
        ],
      },
      {
        p: [
          'Whichever month you choose, the rhythm stays the same: be at the gate when it opens, be at Deadvlei or the top of a dune while the shadows are long, and be back at the lodge when the heat takes over. Ask us which sections of a route pair best with the month you have in mind.',
        ],
      },
    ],
  },
  {
    slug: 'etosha-dry-and-wet-seasons',
    title: 'Etosha in the dry and wet seasons',
    excerpt:
      'How wildlife viewing shifts between the dry winter months and the greener, quieter summer, and what each season rewards.',
    category: 'Destination guide',
    body: [
      {
        p: [
          'Etosha is two different parks depending on when you arrive. The 22,000-plus square kilometre area stays the same; what changes is where the animals are, how easy they are to find, and how the whole pan feels under your tyres.',
          'The single most useful fact for planning is this: in the dry season, water is scarce and the park\'s waterholes work like theatres. In the wet season, water is everywhere and the animals scatter. Neither season is better. They reward different travellers.',
        ],
      },
      {
        h: 'The dry season: the waterhole months',
        p: [
          'From roughly May to October, the grass is short and pale, the bush thins out, and every game-viewing decision gets simpler. Drive to a waterhole in the late afternoon, sit still, and wait. Elephant herds come in family groups, giraffe approach carefully, springbok and gemsbok file in and out, and predators use the cover of last light.',
          'The camps\' own waterholes, including the famous floodlit one at Okaukuejo, turn this into an evening routine rather than an excursion. You can sit after dinner and watch rhino arrive. Visibility is excellent because the dust and short vegetation open long sightlines across the pan\'s edge.',
          'July and August are the coldest nights and the busiest roads. September and October build to extreme heat, and game viewing is at its most concentrated. Book early for any of these months.',
        ],
      },
      {
        h: 'The wet season: green, quiet, and full of young',
        p: [
          'From November to April the rains arrive. The pan edge turns green, temporary pools form far from the permanent waterholes, and herds disperse into the mopane. Game viewing takes more patience and more driving, but the park looks completely different, with storm light, black-and-white skies, and open grassland.',
          'This is the season of newborns: springbok lambs, zebra foals, wildebeest calves. Birdlife peaks too, with migrants and the pan\'s flamingo story depending on water levels. Photographers who like atmosphere rather than density often prefer this Etosha.',
          'One practical note: some eastern sections and certain roads can close temporarily after heavy rain. Build flexibility into any wet-season route and check park notices before long internal drives.',
        ],
      },
      {
        p: [
          'Our routes time Etosha for the dry months where the itinerary allows, because the waterhole system rewards travellers on a fixed schedule. If your dates fall in the green season, we will say so plainly and plan around what it does well.',
        ],
      },
    ],
  },
  {
    slug: 'packing-for-namibia',
    title: 'Packing for Namibia',
    excerpt:
      'Neutral colours, layers for cold mornings and hot middays, soft bags for charter flights, and the small things that matter.',
    category: 'Travel preparation',
    body: [
      {
        p: [
          'Namibia punishes bad packing more through discomfort than drama. The daily temperature swings are large, distances are long, and a forgotten item in Windhoek might be three hundred kilometres away from where you need it. This list is what matters, in the order it usually matters.',
        ],
      },
      {
        h: 'Layers before anything else',
        p: [
          'A winter morning in Sossusvlei or on the Etosha pan can start near zero degrees and end the day in the high twenties. In summer the swing is smaller but still real. Pack a warm midlayer and a windproof outer, not one thick jacket. The person who dressed in two thin layers is always more comfortable than the person in one heavy one.',
          'Long sleeves and long trousers in neutral, muted colours do triple duty: sun protection during the day, warmth in the evening, and the sort of camouflage that keeps you welcome on game drives. Bright colours carry far on the plain.',
        ],
      },
      {
        h: 'Bags, vehicles, and small aircraft',
        p: [
          'If any leg of your journey uses a light aircraft transfer, soft-sided duffel bags are not a preference, they are a requirement. Hard cases physically do not fit the baggage compartments of small charter aircraft. The usual limit is around 20 kilograms per person in soft bags, and we confirm exact limits for your specific routing before departure.',
          'On self-drive routes, keep a day pack with sun protection, water, and a wind layer in the cabin with you. The main luggage rides in the back, and you will not want to unpack at the roadside viewpoint.',
        ],
      },
      {
        h: 'The small things that get forgotten',
        p: [
          'Sun protection is a full system here: high-factor sunscreen, a wide-brimmed hat, and sunglasses with real UV filtering. The southern African sun through a dry winter sky is stronger than most visitors expect. Lip balm and a good moisturiser earn their place by day two; the air is dry enough to notice.',
          'Bring binoculars if you own a pair. Every guide will tell you the same thing: a pair of binoculars per person, not per vehicle, changes what a waterhole hour feels like. A headlamp for camp, spare batteries, a power bank, and any personal medication round out the list. Adapters are type M, the large round-pin South African pattern.',
        ],
      },
      {
        p: [
          'Pack light enough that closing your bag is a ten-second job. Between the dust, the vehicle loading, and the early starts, the easiest bag to travel with is always the smaller one.',
        ],
      },
    ],
  },
  {
    slug: 'self-drive-namibia',
    title: 'What to expect on a Namibian self-drive journey',
    excerpt:
      'Distances, road conditions, and the rhythm of a self-drive route. A practical introduction for first-time visitors.',
    category: 'Travel preparation',
    body: [
      {
        p: [
          'A self-drive journey gives you Namibia at its own scale. This is a country the size of France with around three million people, and the driving reflects that: long, straight stretches, occasional other cars, and landscapes that change slowly enough to notice. It is one of the best self-drive destinations on the continent, partly because it is one of the few places where it works this smoothly.',
        ],
      },
      {
        h: 'Distances and the daily rhythm',
        p: [
          'Plan driving days around three to five hours of seat time, not around kilometres. A 300-kilometre day on gravel can take as long as a 450-kilometre day on tar. The routes we build place a long drive every second or third day, with short hops or no-drive days in between, because the point of the journey is never the windscreen.',
          'Leave early. Mornings deliver the best light, the coolest air, and wildlife on the move. Arrive at camp by mid-afternoon, in daylight, every day. Driving Namibian gravel after dark is the single thing we ask travellers never to do, for the simple reason that animals and deep washaways do not reflect headlights until it is too late.',
        ],
      },
      {
        h: 'Roads: tar, gravel, and sand',
        p: [
          'The B-routes are tar and behave like anywhere else. The C and D gravel roads are graded and generally well-maintained, but they corrugate, and the corrugations are what newcomers feel in their arms by day three. The honest speed for comfort and safety on good gravel is eighty kilometres per hour or less, regardless of what the rental company says the vehicle can do.',
          'Tyre pressure matters more than tyre brand. Lower pressures for corrugations and sand, restore them for tar, and check them every morning. punctures are the most common self-drive incident in the country, and they are almost always speed-related. A 4x4 with two spare wheels is the standard setup for routes that include Damaraland, the far north, or any dune access.',
        ],
      },
      {
        h: 'Fuel, water, and the practical map',
        p: [
          'Fuel up at every reasonable opportunity, not when the gauge suggests it. In the south and the far north-west, stations can be hundreds of kilometres apart, some are card-only, and some keep rural hours. Carry water in the vehicle at all times, more than you think you need, and a paper map or offline navigation as the backup to your backup.',
          'Mobile signal exists in towns and along main routes, and disappears everywhere else. Tell someone your route each morning. This is not drama; it is how a sensible country with empty spaces runs.',
        ],
      },
      {
        p: [
          'Done right, a self-drive route is the version of Namibia people come home describing. We supply the vehicle, the routing, the booked camps, and the notes that keep all of it boring in exactly the right ways.',
        ],
      },
    ],
  },
  {
    slug: 'responsible-wildlife-viewing',
    title: 'Responsible wildlife viewing',
    excerpt:
      'How to watch wildlife well: distance, patience, and the habits that keep both animals and visitors safe.',
    category: 'Travel preparation',
    body: [
      {
        p: [
          'Good wildlife viewing is a skill, and like most skills it is mostly restraint. The best sightings on any journey are the ones where nothing happens quickly: a herd that stops being afraid, a predator that ignores the vehicle, a waterhole that fills up one species at a time. Here is how we keep it that way.',
        ],
      },
      {
        h: 'Distance is the whole rule',
        p: [
          'Keep your distance and let the animal decide everything else. In Etosha and the other parks, stay on designated roads and inside your vehicle except where clearly marked viewing areas exist. A vehicle is the safest hide you will ever have; the moment a person steps out of one, the story changes for everyone nearby.',
          'Never feed any animal, anywhere. Fed baboons become aggressive baboons, fed jackals become problem jackals, and the animal always pays the price for a visitor\'s ten seconds of fun. The same logic covers calling, whistling, or revving an engine to make something look up. If a sighting needs you to interfere, it is not a sighting worth having.',
        ],
      },
      {
        h: 'Patience beats pursuit',
        p: [
          'Chasing a leopard across three side roads gets you three glimpses and a stressed cat. Sitting quietly at the spot where it was heading gets you the full walk. Guides learn this by watching what patience returns; self-drivers learn it by copying guides.',
          'Give predators extra room, give breeding herds a wide berth, and if an animal changes its behaviour because of you, you are too close. Back off. The photographs people love most come from animals that forgot the vehicle was there.',
        ],
      },
      {
        h: 'Nights, noise, and the small stuff',
        p: [
          'At floodlit waterholes, keep voices low, lights off, and stay behind the barrier. The animals using that waterhole are doing so because the camp has kept it predictable and safe. One flashlight sweep can end a rhino\'s drink and every other guest\'s evening.',
          'Stay on tracks. Driving off-road crushes the cryptobiotic crusts and slow-growing plants that hold this thin desert country together, and the tracks last for years. Take your rubbish with you all the way to the next bin. These habits are not decoration; they are why the parks still look like this.',
        ],
      },
      {
        p: [
          'None of this is complicated. It is distance, patience, and leaving things as you found them. Travellers who arrive with those three habits tend to have the best trips of anyone we host.',
        ],
      },
    ],
  },
  {
    slug: 'zambezi-region-route',
    title: 'Planning a route through the Zambezi Region',
    excerpt:
      'The Caprivi Strip rewoven: rivers, parks, and the practical logistics of travelling Namibia\'s wet north-east.',
    category: 'Destination guide',
    body: [
      {
        p: [
          'The Zambezi Region, known for most of its history as the Caprivi Strip, is the part of Namibia that surprises people. A panhandle of land wedged between Angola, Botswana, Zambia, and Zimbabwe, it trades the country\'s sand for rivers: the Okavango, the Kwando, and the Zambezi all work through or along it. Planning a route here is about water, borders, and seasons.',
        ],
      },
      {
        h: 'The river corridor and its parks',
        p: [
          'The classic routing runs east from Rundu on the Okavango, through the riverine belt of Bwabwata National Park, to the Kwando River, and onward to Katima Mulilo on the Zambezi. Bwabwata is unusual: people live inside the park, and the road itself is the game-viewing route, with elephant and buffalo crossing between the river and the mopane interior.',
          'Birdlife is the region\'s quiet headline. Slenders and Malachite kingfishers, African skimmers on sandbars, fish eagles everywhere, and wetland specials that have no stage anywhere else in Namibia. Bring the longest lens or the best binoculars you own; this is the birding payoff of the whole country.',
        ],
      },
      {
        h: 'Chobe and Victoria Falls as extensions',
        p: [
          'The strip ends a short drive from the Chobe riverfront in Botswana and not much farther from Victoria Falls. A river cruise on the Chobe at sunset, with elephant swimming across the current around the boat, is one of southern Africa\'s great closing scenes, and it slots naturally onto a Zambezi route.',
          'Both extensions cross international borders, which means passports, possible visas depending on your nationality, and vehicle paperwork if you are self-driving. We confirm current requirements for your nationality as part of planning, because these change and they matter.',
        ],
      },
      {
        h: 'Seasons and practical notes',
        p: [
          'May to October is the working window: dry, cooler, roads reliable, and wildlife drawn to the rivers as the bush dries. The wet summer turns the region properly tropical, with afternoon storms, big mosquitoes, and sections of track that get difficult. Malaria is present in the region year-round; take the standard medical advice seriously and ask your travel clinic about prophylaxis before you travel.',
          'Fuel and supplies concentrate in Rundu, Katima Mulilo, and the bigger lodges. Fill up when you can, and keep border hours in mind on days that end in a crossing. The distances are shorter here than in the rest of Namibia, and the pace slows to match the rivers. Let it.',
        ],
      },
      {
        p: [
          'The northern route is our answer to travellers who have already seen the desert and want the other Namibia. It pairs naturally with Etosha on the way north, and it ends, if you let it, standing in the spray at Mosi-oa-Tunya.',
        ],
      },
    ],
  },
];
