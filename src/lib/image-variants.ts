// Registry of responsive variant families: base name -> dir + available widths.
// WebP and AVIF variants exist for every listed width. Maintained by hand
// alongside images.manifest.json; scripts/check-images.mjs verifies both
// against the files actually on disk at build time.
export type VariantFamily = { dir: string; widths: number[]; max: number };

export const IMAGE_VARIANTS: Record<string, VariantFamily> = {

  "caprivi-mokoro-golden-reeds": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [640, 960, 1440, 1920]
  },
  "chobe-elephants-riverbank": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [640, 960, 1440, 1920]
  },
  "landcruiser-dune-crest": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [640, 960, 1440, 1920]
  },
  "skeleton-coast-shipwreck": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [640, 960, 1440, 1920]
  },
  "victoria-falls-rainbow": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [640, 960, 1440, 1920]
  },
  "bwabwata-elephant": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "chobe-river-elephants-dusk": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [640, 960, 1440, 1920]
  },
  "cape-cross-seals": {
    "dir": "images/places",
    "max": 640,
    "widths": [
      640
    ]
  },
  "chobe-river-kasane": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "damaraland": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "damaraland-mesa": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "damaraland-road": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "twyfelfontein-organ-pipes": {
    "dir": "images/places",
    "max": 1440,
    "widths": [
      640,
      960,
      1440
    ]
  },
  "twyfelfontein-engravings": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "desert-elephants-damaraland": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "himba-kunene": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "damaraland-1": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "deadvlei-trees-dune-shadow": {
    "dir": "images/photos",
    "max": 2560,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "deadvlei-white-pan-red-dunes": {
    "dir": "images/photos",
    "max": 2560,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "dune-detail": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "dune-lodge": {
    "dir": "images/places",
    "max": 1600,
    "widths": [
      640,
      960,
      1440
    ]
  },
  "etosha": {
    "dir": "images/places",
    "max": 1333,
    "widths": [
      640,
      960
    ]
  },
  "etosha-1": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "etosha-2": {
    "dir": "images/places",
    "max": 1732,
    "widths": [
      640,
      960,
      1440
    ]
  },
  "etosha-detail": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "fish-river-canyon": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "game-drive-red-sand-track": {
    "dir": "images/photos",
    "max": 1280,
    "widths": [
      640,
      960
    ]
  },
  "giraffes-walking-etosha": {
    "dir": "images/photos",
    "max": 2560,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "kalahari": {
    "dir": "images/places",
    "max": 1333,
    "widths": [
      640,
      960
    ]
  },
  "kalahari-2": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "kalahari-cabin-red-dune": {
    "dir": "images/photos",
    "max": 1280,
    "widths": [
      640,
      960
    ]
  },
  "kolmanskop-ghost-town": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "namib-red-dunes-green-plains": {
    "dir": "images/photos",
    "max": 1280,
    "widths": [
      640,
      960
    ]
  },
  "namib-texture": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "okavango-river": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "oryx-dusk-golden-grass": {
    "dir": "images/photos",
    "max": 1280,
    "widths": [
      640,
      960
    ]
  },
  "quiver-tree": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "rhino-ostrich-etosha": {
    "dir": "images/photos",
    "max": 2560,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "safari-vehicle-red-dune": {
    "dir": "images/photos",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "skeleton-coast-wreck": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "sossusvlei": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "sossusvlei-1": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "sossusvlei-2": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "swakopmund-jetty": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "thatched-hillside": {
    "dir": "images/places",
    "max": 1600,
    "widths": [
      640,
      960,
      1440
    ]
  },
  "victoria-falls": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "waterberg-plateau": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "windhoek-christ-church": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  },
  "zambezi-junction": {
    "dir": "images/places",
    "max": 1920,
    "widths": [
      640,
      960,
      1440,
      1920
    ]
  }
};
