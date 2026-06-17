/** Homepage hero slideshow — each slide used once on main nav pages */
export const HERO_SLIDES = [
  {
    id: 'tennis-jeugd',
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/RB_08021.jpeg',
    alt: 'Jeugd speelt padel op de club',
  },
  {
    id: 'padel-bord',
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Padel%20500.jpg',
    alt: 'Trainer en jeugd met het TOF padelbord op de baan',
  },
  {
    id: 'kraak-de-code',
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof%20sports%20500%20kb.jpg',
    alt: 'Kinderen spelen Kraak de Code met het TOF jeugdprogramma',
  },
  {
    id: 'padel-club-clash',
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Padel%20500kb.jpg',
    alt: 'Jeugd bij het Padel Clup Clash TOF scoresysteem',
  },
  {
    id: 'tennis-bord',
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof%20sports%20500kb.jpg',
    alt: 'Trainer en jeugd gebruiken het TOF bord op de tennisbaan',
  },
  {
    id: 'padel-jeugd',
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/RB_08252.jpeg',
    alt: 'Trainer en jeugd bij het TOF bord op de baan',
  },
];

export const HERO_TAGLINES = [
  'Zet jouw jeugdprogramma direct op scherp.',
  'Plezier in ontwikkelen',
];

export const HERO_WAVE_PATH = 'M0,58 Q250,12 500,58 T1000,58 L1000,100 L0,100 Z';

/** Extra images (not in homepage rotation) */
export const EXTRA_HERO_IMAGES = {
  herkenbaar: {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/herkenbaar.jpg',
    alt: 'Coach met jeugd en TOF bord op de club',
  },
  combiPakket: {
    src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Combi%20pakket.jpg',
    alt: 'TOF Tennis- en padelpakket',
  },
};

/**
 * Main nav — 6 homepage slides + extras.
 * Speluitleg → combi-pakket.jpg · Pakketten → trainer + padelbord (slide 1).
 */
export const PAGE_HERO_BY_ROUTE = {
  '/missie-visie': HERO_SLIDES[0],
  '/knltb': { tennis: HERO_SLIDES[4], padel: HERO_SLIDES[1] },
  '/tof-methode': HERO_SLIDES[3],
  '/tof-score': HERO_SLIDES[5],
  '/handboek': EXTRA_HERO_IMAGES.combiPakket,
  '/webshop': { tennis: EXTRA_HERO_IMAGES.herkenbaar, padel: HERO_SLIDES[1] },
  '/pakketten': HERO_SLIDES[1],
  '/over-tof': HERO_SLIDES[0],
  '/producten': EXTRA_HERO_IMAGES.combiPakket,
  '/contact': HERO_SLIDES[2],
  '/winkelmand': HERO_SLIDES[3],
  '/privacy': HERO_SLIDES[0],
  '/leraren-app': HERO_SLIDES[4],
  '/spelers-kaarten': HERO_SLIDES[0],
  '/magneetposters': HERO_SLIDES[3],
  '/spelen': HERO_SLIDES[0],
  '/leren': HERO_SLIDES[2],
  '/sparen': HERO_SLIDES[5],
  '/kennisbank': HERO_SLIDES[4],
  '/media': EXTRA_HERO_IMAGES.herkenbaar,
};

export function getPageHeroImage(route, category) {
  const entry = PAGE_HERO_BY_ROUTE[route];
  if (!entry) return HERO_SLIDES[0];
  if (entry.src) return entry;
  if (category && entry[category]) return entry[category];
  return entry.tennis ?? entry.padel ?? HERO_SLIDES[0];
}
