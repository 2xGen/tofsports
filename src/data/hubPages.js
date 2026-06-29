export const OVER_TOF_ITEMS = [
  {
    href: '/missie-visie',
    label: 'Visie & Missie',
    description:
      'De 365-mentaliteit: waarom we jeugd het hele jaar betrokken willen houden op de club.',
    imageRoute: '/missie-visie',
  },
  {
    href: '/knltb',
    label: 'KNLTB',
    description:
      'Powered by KNLTB — Tenniskids TOF en TOF padel als basis van je jeugdprogramma.',
    imageRoute: '/knltb',
  },
  {
    href: '/tof-methode',
    label: 'TOF Methode',
    description: 'Spelen, leren en sparen: het Plug & Play systeem voor je vereniging.',
    imageRoute: '/tof-methode',
  },
  {
    href: '/tof-score',
    label: 'TOF Score',
    description: 'Meet betrokkenheid en motiveer jeugd met punten, status en speelmomenten.',
    imageRoute: '/tof-score',
  },
  {
    href: '/magneetposters',
    label: 'Magneetposters',
    description: 'Format-posters op magneet voor whiteboard — professioneel op de baan.',
    imageRoute: '/magneetposters',
  },
  {
    href: '/leraren-app',
    label: 'Leraren-app',
    description: 'Lesplannen, TOF Score en clubbeheer digitaal in de KNLTB leraren-app.',
    imageRoute: '/leraren-app',
  },
];

export const PRODUCTEN_ITEMS = [
  {
    href: '/pakketten',
    label: 'Clubpakketten',
    description:
      'Stel je clubpakket samen: tennispakket, padelpakket of tennis- en padelpakket op maat.',
    imageRoute: '/pakketten',
  },
  {
    href: '/handboek',
    label: 'Speluitleg',
    description: 'Het handboek met alle formats en uitleg om direct op de club te starten.',
    imageRoute: '/handboek',
  },
  {
    href: '/webshop',
    label: 'Losse formats',
    description: 'Bestel individuele tennis- en padelformats via de webshop.',
    imageRoute: '/webshop',
  },
];

export const OVER_TOF_PATHS = OVER_TOF_ITEMS.map((item) => item.href);
export const PRODUCTEN_PATHS = PRODUCTEN_ITEMS.map((item) => item.href);

export function isOverTofPath(pathname) {
  return pathname === '/over-tof' || OVER_TOF_PATHS.some(
    (href) => pathname === href || pathname.startsWith(`${href}/`)
  );
}

export function isProductenPath(pathname) {
  return (
    pathname === '/producten' ||
    pathname === '/webshop' ||
    PRODUCTEN_PATHS.some(
      (href) => pathname === href || pathname.startsWith(`${href}/`)
    )
  );
}
