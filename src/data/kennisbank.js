/**
 * Kennisbank-artikelen — voeg hier guides en tips toe.
 * Later uitbreidbaar met detailpagina's per slug.
 */
const MEDIA_BASE =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports';

export const kennisbankArticles = [
  {
    id: 'start-jeugdprogramma',
    title: 'Zo start je met een sterk jeugdprogramma op de club',
    excerpt:
      'Praktische stappen om speelmomenten, structuur en betrokkenheid te vergroten — ook zonder extra trainers.',
    category: 'Gids',
    date: '2026-05-01',
    image: `${MEDIA_BASE}/media%2011.jpg`,
    imageAlt: 'TOF Piramide Tennis scorebord op de tennisclub',
  },
  {
    id: 'speelmomenten-tips',
    title: '5 tips voor meer speelmomenten buiten de les',
    excerpt:
      'Hoe je met kleine aanpassingen kinderen vaker op de baan krijgt en het clubgevoel versterkt.',
    category: 'Tips',
    date: '2026-04-15',
    image: `${MEDIA_BASE}/media%209.jpg`,
    imageAlt: 'Jeugdspelers voor het Piramide Tennis bord op de club',
  },
  {
    id: 'tof-score-uitleg',
    title: 'TOF Score inzetten zonder prestatiedruk',
    excerpt:
      'Motivatie en herkenning voor jeugdspelers, met punten die plezier en deelname belonen.',
    category: 'TOF Score',
    date: '2026-03-20',
    image: `${MEDIA_BASE}/media%2010.jpg`,
    imageAlt: 'Meisjes bij het Padel Club Clash scorebord op de padelclub',
  },
];

export const kennisbankCategories = ['Alle', 'Gids', 'Tips', 'TOF Score'];
