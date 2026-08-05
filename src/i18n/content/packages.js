/** English overlays for package configurator display data */
export const PACKAGE_COPY_EN = {
  tennis: {
    title: 'Tennis package',
    subtitle: 'For tennis clubs',
    description:
      'Choose Basic, Plus or Complete. Includes TOF Score, tailored formats, 4 knowledge sessions and 1 year of app access. Shipping included.',
  },
  padel: {
    title: 'Padel package',
    subtitle: 'For padel clubs',
    description:
      'Choose Basic, Plus or Complete. Includes TOF Score, tailored formats, 4 knowledge sessions and 1 year of app access. Shipping included.',
  },
  combi: {
    title: 'Tennis and padel package',
    subtitle: 'For clubs with tennis and padel',
    description:
      'Choose Basic, Plus or Complete per sport. 10% off the combined total. Includes knowledge sessions, app and shipping.',
    badge: 'Most complete',
  },
};

export const LEVEL_COPY_EN = {
  basis: {
    label: 'Basic',
    description: 'TOF Score poster, Swirl and Pyramid',
  },
  plus: {
    label: 'Plus',
    description: 'Basic + extra format + magnetic board 90×60 cm',
  },
  compleet: {
    label: 'Complete',
    description: 'Plus + all formats for your sport',
  },
};

export function localizePackage(pkg, locale) {
  if (locale !== 'en') return pkg;
  const copy = PACKAGE_COPY_EN[pkg.id];
  if (!copy) return pkg;
  return { ...pkg, ...copy };
}

export function localizeLevel(level, locale) {
  if (locale !== 'en') return level;
  const copy = LEVEL_COPY_EN[level.id];
  if (!copy) return level;
  return { ...level, ...copy };
}
