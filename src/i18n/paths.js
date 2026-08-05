/**
 * Dutch app routes (filesystem) ↔ English public URL segments.
 * Unlisted paths stay the same in both locales (contact, media, knltb, …).
 */
export const NL_TO_EN_PATH = {
  '/over-tof': '/about-tof',
  '/producten': '/products',
  '/pakketten': '/packages',
  '/kennisbank': '/knowledge-base',
  '/winkelmand': '/cart',
  '/tof-methode': '/tof-method',
  '/missie-visie': '/mission-vision',
  '/spelen': '/play',
  '/leren': '/learn',
  '/sparen': '/save',
  '/spelers-kaarten': '/player-cards',
  '/leraren-app': '/coach-app',
  '/magneetposters': '/magnetic-posters',
  '/handboek': '/handbook',
  '/webshop': '/shop',
};

export const EN_TO_NL_PATH = Object.fromEntries(
  Object.entries(NL_TO_EN_PATH).map(([nl, en]) => [en, nl])
);

/** Split pathname from ?query and #hash */
export function splitPath(path = '/') {
  const hashIndex = path.indexOf('#');
  const queryIndex = path.indexOf('?');
  let end = path.length;
  if (hashIndex >= 0) end = Math.min(end, hashIndex);
  if (queryIndex >= 0) end = Math.min(end, queryIndex);
  return {
    pathname: path.slice(0, end) || '/',
    suffix: path.slice(end),
  };
}
