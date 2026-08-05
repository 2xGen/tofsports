import { stripLocale, toInternalPath } from '@/i18n/config';

export const OVER_TOF_ITEMS = [
  {
    href: '/missie-visie',
    label: 'Visie & Missie',
    description: {
      nl: 'De 365-mentaliteit: waarom we jeugd het hele jaar betrokken willen houden op de club.',
      en: 'The 365 mindset: why we keep juniors engaged at the club all year round.',
    },
    imageRoute: '/missie-visie',
  },
  {
    href: '/knltb',
    label: 'KNLTB',
    description: {
      nl: 'Powered by KNLTB — Tenniskids TOF en TOF padel als basis van je jeugdprogramma.',
      en: 'Powered by KNLTB — Tenniskids TOF and TOF padel as the foundation of your youth programme.',
    },
    imageRoute: '/knltb',
  },
  {
    href: '/tof-methode',
    label: 'TOF Methode',
    description: {
      nl: 'Spelen, leren en sparen: het Plug & Play systeem voor je vereniging.',
      en: 'Play, learn and save: the Plug & Play system for your club.',
    },
    imageRoute: '/tof-methode',
  },
  {
    href: '/tof-score',
    label: 'TOF Score',
    description: {
      nl: 'Meet betrokkenheid en motiveer jeugd met punten, status en speelmomenten.',
      en: 'Measure engagement and motivate juniors with points, status and play moments.',
    },
    imageRoute: '/tof-score',
  },
  {
    href: '/magneetposters',
    label: 'Magneetposters',
    description: {
      nl: 'Format-posters op magneet voor whiteboard — professioneel op de baan.',
      en: 'Format posters on magnets for whiteboards — professional on court.',
    },
    imageRoute: '/magneetposters',
  },
  {
    href: '/leraren-app',
    label: 'Leraren-app',
    description: {
      nl: 'Lesplannen, TOF Score en clubbeheer digitaal in de KNLTB leraren-app.',
      en: 'Lesson plans, TOF Score and club management, all digital in the KNLTB coach app.',
    },
    imageRoute: '/leraren-app',
  },
];

export const PRODUCTEN_ITEMS = [
  {
    href: '/pakketten',
    label: 'Clubpakketten',
    description: {
      nl: 'Stel je clubpakket samen: tennispakket, padelpakket of tennis- en padelpakket op maat.',
      en: 'Build your club package: a tailored tennis, padel or combined tennis and padel package.',
    },
    imageRoute: '/pakketten',
  },
  {
    href: '/handboek',
    label: 'Speluitleg',
    description: {
      nl: 'Het handboek met alle formats en uitleg om direct op de club te starten.',
      en: 'The handbook with all formats and instructions to get started at the club right away.',
    },
    imageRoute: '/handboek',
  },
  {
    href: '/webshop',
    label: 'Losse formats',
    description: {
      nl: 'Bestel individuele tennis- en padelformats via de webshop.',
      en: 'Order individual tennis and padel formats through the webshop.',
    },
    imageRoute: '/webshop',
  },
];

export const OVER_TOF_PATHS = OVER_TOF_ITEMS.map((item) => item.href);
export const PRODUCTEN_PATHS = PRODUCTEN_ITEMS.map((item) => item.href);

export function isOverTofPath(pathname) {
  const path = toInternalPath(stripLocale(pathname));
  return path === '/over-tof' || OVER_TOF_PATHS.some(
    (href) => path === href || path.startsWith(`${href}/`)
  );
}

export function isProductenPath(pathname) {
  const path = toInternalPath(stripLocale(pathname));
  return (
    path === '/producten' ||
    path === '/webshop' ||
    PRODUCTEN_PATHS.some(
      (href) => path === href || path.startsWith(`${href}/`)
    )
  );
}
