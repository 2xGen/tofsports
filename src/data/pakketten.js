import { getProductById } from '@/data/products';
import { getProductThumbnailSrc } from '@/lib/productImage';
import { ot } from '@/i18n/content/overTof';
import { localizePackage, localizeLevel } from '@/i18n/content/packages';
import { translateLabel } from '@/i18n/content/products.en';

/** Jeugdgroep voor button-schatting en posteradvies */
export const YOUTH_TIERS = [
  {
    id: 'youth-50',
    label: { nl: 'Tot 50 jeugdspelers', en: 'Up to 50 junior players' },
    shortLabel: '≤ 50',
    playerCount: 50,
  },
  {
    id: 'youth-100',
    label: { nl: 'Tot 100 jeugdspelers', en: 'Up to 100 junior players' },
    shortLabel: '≤ 100',
    playerCount: 100,
  },
  {
    id: 'youth-100plus',
    label: { nl: 'Meer dan 100 jeugdspelers', en: 'More than 100 junior players' },
    shortLabel: '100+',
    playerCount: 125,
  },
];

export function localizeYouthTier(tier, locale) {
  if (!tier) return tier;
  return { ...tier, label: ot(locale, tier.label) };
}

/** Postergrootte (spelers per magneetposter) */
export const POSTER_SIZE_TIERS = [
  { id: 'tier-21', label: { nl: 'Tot en met 21 spelers', en: 'Up to 21 players' }, maxPlayers: 21 },
  { id: 'tier-36', label: { nl: 'Tot en met 36 spelers', en: 'Up to 36 players' }, maxPlayers: 36 },
  { id: 'tier-55', label: { nl: 'Tot en met 55 spelers', en: 'Up to 55 players' }, maxPlayers: 55 },
];

export const PACKAGE_LEVELS = [
  { id: 'basis', label: 'Basis', description: 'TOF Score poster, Swirl en Piramide' },
  { id: 'plus', label: 'Plus', description: 'Basis + extra format + magneetbord 90×60 cm' },
  { id: 'compleet', label: 'Compleet', description: 'Plus + alle formats voor jouw sport' },
];

export const LEVEL_PRICES = {
  basis: 295,
  plus: 445,
  compleet: 595,
};

export const COMBI_DISCOUNT = 0.1;

export const BUTTON_PACK_SIZE = 10;
export const BUTTON_PRICE_PER_PACK = 15;

const PACKAGE_PRODUCTS = {
  tennis: {
    basis: ['scoreboard', 'swirl', 'piramide'],
    plus: ['scoreboard', 'swirl', 'piramide', '4opeenrij'],
    compleet: ['scoreboard', 'swirl', 'piramide', '4opeenrij', 'kraak-de-code', 'davis'],
  },
  padel: {
    basis: ['padel-scoreboard', 'padel-swirl', 'padel-piramide'],
    plus: ['padel-scoreboard', 'padel-swirl', 'padel-piramide', 'uno-dos-tres-cuatro'],
    compleet: [
      'padel-scoreboard',
      'padel-swirl',
      'padel-piramide',
      'uno-dos-tres-cuatro',
      'unlock-the-code',
      'padel-club-clash',
    ],
  },
};

const BUNDLE_ITEMS = {
  whiteboard: {
    name: { nl: 'Magneetbord 90×60 cm', en: 'Magnetic board 90×60 cm' },
    description: {
      nl: 'Met opklapbare poten — tijdelijke actie: gratis bij Plus en Compleet',
      en: 'With foldable legs — limited-time offer: free with Plus and Complete',
    },
  },
  kennisSessies: {
    name: { nl: '4 online kennissessies', en: '4 online knowledge sessions' },
    description: { nl: 'Begeleiding bij de start op jouw club', en: 'Guidance to get started at your club' },
  },
  tofScoreApp: {
    name: { nl: 'TOF Score app (1 jaar)', en: 'TOF Score app (1 year)' },
    description: {
      nl: 'Digitaal scoresysteem voor trainers en spelers',
      en: 'Digital scoring system for coaches and players',
    },
    footnote: true,
  },
  verzending: {
    name: { nl: 'Verzending', en: 'Shipping' },
    description: { nl: 'Inbegrepen bij elk pakket', en: 'Included with every package' },
  },
};

/** Voetnoot bij TOF Score app in pakketoverzichten */
export const TOF_SCORE_APP_FOOTNOTE = {
  nl: 'Voor de TOF Score app: je beschikt over een geldige tennis- of padeltrainerslicentie en werkt actief samen met een bij de KNLTB aangesloten club.',
  en: 'For the TOF Score app: you hold a valid tennis or padel coaching licence and work actively with a KNLTB-affiliated club.',
};

/** @deprecated — gebruik YOUTH_TIERS */
export const PLAYER_TIERS = YOUTH_TIERS;

export const MAIN_PACKAGES = [
  {
    id: 'tennis',
    title: 'Tennispakket',
    subtitle: 'Voor tennisverenigingen',
    description:
      'Kies Basis, Plus of Compleet. Inclusief TOF Score, formats op maat, 4 kennissessies en 1 jaar app-toegang. Verzending inbegrepen.',
    vanafPrice: LEVEL_PRICES.basis,
    color: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tennis%20pakket.jpg',
    sport: 'tennis',
  },
  {
    id: 'padel',
    title: 'Padelpakket',
    subtitle: 'Voor padelverenigingen',
    description:
      'Kies Basis, Plus of Compleet. Inclusief TOF Score, formats op maat, 4 kennissessies en 1 jaar app-toegang. Verzending inbegrepen.',
    vanafPrice: LEVEL_PRICES.basis,
    color: 'from-orange-500 to-amber-600',
    borderColor: 'border-orange-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Padel%20pakket.jpg',
    sport: 'padel',
  },
  {
    id: 'combi',
    title: 'Tennis- en padelpakket',
    subtitle: 'Voor clubs met tennis én padel',
    description:
      'Kies per sport Basis, Plus of Compleet. 10% voordeel op het gecombineerde totaal. Inclusief kennissessies, app en verzending.',
    vanafPrice: Math.round((LEVEL_PRICES.basis * 2) * (1 - COMBI_DISCOUNT)),
    badge: 'Meest compleet',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-600',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Combi%20pakket.jpg',
    sport: 'combi',
  },
];

export function getPackageProductIds(packageId, { tennisLevelId, padelLevelId } = {}) {
  if (packageId === 'combi') {
    const tennis = PACKAGE_PRODUCTS.tennis[tennisLevelId] ?? [];
    const padel = PACKAGE_PRODUCTS.padel[padelLevelId] ?? [];
    return [...tennis, ...padel];
  }
  const sport = packageId === 'padel' ? 'padel' : 'tennis';
  const levelId = sport === 'tennis' ? tennisLevelId : padelLevelId;
  return PACKAGE_PRODUCTS[sport][levelId] ?? [];
}

export function getCombiLevelPrice(tennisLevelId, padelLevelId) {
  const tennis = LEVEL_PRICES[tennisLevelId] ?? 0;
  const padel = LEVEL_PRICES[padelLevelId] ?? 0;
  return Math.round((tennis + padel) * (1 - COMBI_DISCOUNT));
}

export function getLevelPrice(packageId, levelId, { tennisLevelId, padelLevelId } = {}) {
  if (packageId === 'combi') {
    if (tennisLevelId && padelLevelId) {
      return getCombiLevelPrice(tennisLevelId, padelLevelId);
    }
    const base = LEVEL_PRICES[levelId] ?? LEVEL_PRICES.basis;
    return Math.round(base * 2 * (1 - COMBI_DISCOUNT));
  }
  const activeLevelId =
    levelId ?? (packageId === 'padel' ? padelLevelId : tennisLevelId);
  return LEVEL_PRICES[activeLevelId] ?? LEVEL_PRICES.basis;
}

export function getVanafPrice(packageId) {
  const config = MAIN_PACKAGES.find((p) => p.id === packageId);
  return config?.vanafPrice ?? LEVEL_PRICES.basis;
}

export const WHITEBOARD_IMAGE =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/tof%20webshop/magneet%20bord%2090x60.jpg';

export const WHITEBOARD_PREMIUM_IMAGE =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/tof%20webshop/magneet%20bord%20120%20x90.jpg';

export const WHITEBOARD_COMPACT_PRICE = 50;
export const WHITEBOARD_PREMIUM_PRICE = 150;

/** none | included | decline | compact | premium */
export function packageIncludesFreeWhiteboard(packageId, { tennisLevelId, padelLevelId } = {}) {
  const isPlusOrCompleet = (levelId) => levelId === 'plus' || levelId === 'compleet';
  if (packageId === 'combi') {
    return isPlusOrCompleet(tennisLevelId) || isPlusOrCompleet(padelLevelId);
  }
  const levelId = packageId === 'padel' ? padelLevelId : tennisLevelId;
  return isPlusOrCompleet(levelId);
}

export function getDefaultWhiteboardChoice(packageId, levelIds) {
  return packageIncludesFreeWhiteboard(packageId, levelIds) ? 'included' : 'none';
}

export function getWhiteboardExBtw(whiteboardChoice) {
  if (whiteboardChoice === 'compact') return WHITEBOARD_COMPACT_PRICE;
  if (whiteboardChoice === 'premium') return WHITEBOARD_PREMIUM_PRICE;
  return 0;
}

export function buildWhiteboardLine(whiteboardChoice, locale) {
  if (!whiteboardChoice || whiteboardChoice === 'none' || whiteboardChoice === 'decline') {
    return null;
  }
  if (whiteboardChoice === 'included') {
    return {
      id: 'whiteboard-included',
      name: ot(locale, BUNDLE_ITEMS.whiteboard.name),
      description: ot(locale, BUNDLE_ITEMS.whiteboard.description),
      image: WHITEBOARD_IMAGE,
      price: 0,
    };
  }
  if (whiteboardChoice === 'compact') {
    return {
      id: 'whiteboard-compact',
      name: ot(locale, { nl: 'Magneetbord 90×60 cm', en: 'Magnetic board 90×60 cm' }),
      description: ot(locale, { nl: 'Met opklapbare poten', en: 'With foldable legs' }),
      image: WHITEBOARD_IMAGE,
      price: WHITEBOARD_COMPACT_PRICE,
    };
  }
  if (whiteboardChoice === 'premium') {
    return {
      id: 'whiteboard-premium',
      name: ot(locale, { nl: 'Magneetbord 120×90 cm met wielen', en: 'Magnetic board 120×90 cm with wheels' }),
      description: ot(locale, {
        nl: 'Verrijdbaar — ons aanbevolen model voor op de baan',
        en: 'On wheels — our recommended model for on court',
      }),
      image: WHITEBOARD_PREMIUM_IMAGE,
      price: WHITEBOARD_PREMIUM_PRICE,
    };
  }
  return null;
}

export function getPackageFormatLines(sport, levelId) {
  const productIds = PACKAGE_PRODUCTS[sport]?.[levelId] ?? [];
  return productIds.map((productId) => {
    const product = getProductById(productId);
    const format = product?.formats?.[0];
    return {
      id: productId,
      name: product?.name ?? productId,
      videoUrl: product?.videoUrl ?? null,
      image: format?.image ?? product?.image ?? null,
      thumbnail: getProductThumbnailSrc(format?.image ?? product?.image ?? null),
    };
  });
}

export function getPackageBundleLines(levelId, locale) {
  const lines = [];
  if (levelId === 'plus' || levelId === 'compleet') {
    lines.push({
      id: 'whiteboard',
      name: ot(locale, BUNDLE_ITEMS.whiteboard.name),
      description: ot(locale, BUNDLE_ITEMS.whiteboard.description),
      image: WHITEBOARD_IMAGE,
    });
  }
  lines.push(
    {
      id: 'kennis',
      ...BUNDLE_ITEMS.kennisSessies,
      name: ot(locale, BUNDLE_ITEMS.kennisSessies.name),
      description: ot(locale, BUNDLE_ITEMS.kennisSessies.description),
    },
    {
      id: 'app',
      ...BUNDLE_ITEMS.tofScoreApp,
      name: ot(locale, BUNDLE_ITEMS.tofScoreApp.name),
      description: ot(locale, BUNDLE_ITEMS.tofScoreApp.description),
    },
    {
      id: 'verzending',
      ...BUNDLE_ITEMS.verzending,
      name: ot(locale, BUNDLE_ITEMS.verzending.name),
      description: ot(locale, BUNDLE_ITEMS.verzending.description),
    },
  );
  return lines;
}

/** @deprecated */
export function getPackageTotalExBtw(packageId, tierId, levelId = 'compleet') {
  return getLevelPrice(packageId, levelId);
}

export function calculateSuggestedButtons(playerCount) {
  const needed = Math.ceil(playerCount * 1.25);
  return Math.ceil(needed / BUTTON_PACK_SIZE) * BUTTON_PACK_SIZE;
}

export function suggestPosterTierId(youthTierId) {
  const youth = YOUTH_TIERS.find((t) => t.id === youthTierId);
  const count = youth?.playerCount ?? 50;
  if (count <= 21) return 'tier-21';
  if (count <= 36) return 'tier-36';
  return 'tier-55';
}

export function productNeedsPosterSize(productId) {
  const product = getProductById(productId);
  if (!product?.pricing) return false;
  return product.pricing.type === 'poster-wizard';
}

export function getPosterSizeOptions(productId, locale) {
  const product = getProductById(productId);
  if (!product) return [];

  const fallbackImage =
    product.galleryImages?.[product.galleryImages.length - 1]?.url ??
    product.formats?.[0]?.image ??
    product.image;

  if (product.pricing?.type === 'poster-wizard' && product.pricing.tiers) {
    return product.pricing.tiers.map((tier, index) => {
      const galleryItem = product.galleryImages?.[index];
      return {
        id: tier.id,
        label: translateLabel(tier.label, locale),
        image: galleryItem?.url ?? fallbackImage,
      };
    });
  }

  if (product.galleryImages?.length) {
    return product.galleryImages.map((galleryItem, index) => {
      const tier = POSTER_SIZE_TIERS[index];
      return {
        id: tier?.id ?? `gallery-${index}`,
        label: galleryItem.label
          ? translateLabel(galleryItem.label, locale)
          : ot(locale, tier?.label) || translateLabel('Magneetposter', locale),
        image: galleryItem.url,
      };
    });
  }

  return [];
}

export function getProductsNeedingPosterSize(packageId, levels) {
  return getPackageProductIds(packageId, levels).filter(productNeedsPosterSize);
}

export function suggestPosterTierIdForProduct(productId, youthTierId) {
  const suggested = suggestPosterTierId(youthTierId);
  const options = getPosterSizeOptions(productId);
  if (!options.length) return suggested;

  const exact = options.find((option) => option.id === suggested);
  if (exact) return exact.id;

  const tierOrder = ['tier-21', 'tier-36', 'tier-55'];
  const suggestedIndex = tierOrder.indexOf(suggested);
  for (let index = suggestedIndex; index >= 0; index -= 1) {
    const match = options.find((option) => option.id === tierOrder[index]);
    if (match) return match.id;
  }

  return options[options.length - 1].id;
}

export function calculateButtonCost(buttonCount) {
  const packs = buttonCount / BUTTON_PACK_SIZE;
  return Math.round(packs * BUTTON_PRICE_PER_PACK * 100) / 100;
}

export function buildPackageQuote({
  packageId,
  tennisLevelId,
  padelLevelId,
  youthTierId,
  orderButtons = false,
  buttonCount = 0,
  posterSizes = {},
  whiteboardChoice = 'none',
  locale = 'nl',
}) {
  const rawConfig = MAIN_PACKAGES.find((p) => p.id === packageId);
  const config = rawConfig ? localizePackage(rawConfig, locale) : null;
  const rawYouth = YOUTH_TIERS.find((t) => t.id === youthTierId);
  const youth = rawYouth ? localizeYouthTier(rawYouth, locale) : null;
  if (!config || !youth) return null;

  const isCombi = packageId === 'combi';
  const activeTennisLevel = packageId === 'padel' ? null : tennisLevelId;
  const activePadelLevel = packageId === 'tennis' ? null : padelLevelId;

  if (isCombi) {
    if (!activeTennisLevel || !activePadelLevel) return null;
  } else if (packageId === 'tennis' && !activeTennisLevel) {
    return null;
  } else if (packageId === 'padel' && !activePadelLevel) {
    return null;
  }

  const levelIds = { tennisLevelId: activeTennisLevel, padelLevelId: activePadelLevel };
  const rawTennisLevel = PACKAGE_LEVELS.find((l) => l.id === activeTennisLevel);
  const rawPadelLevel = PACKAGE_LEVELS.find((l) => l.id === activePadelLevel);
  const tennisLevel = rawTennisLevel ? localizeLevel(rawTennisLevel, locale) : null;
  const padelLevel = rawPadelLevel ? localizeLevel(rawPadelLevel, locale) : null;
  const rawLevel = isCombi
    ? null
    : PACKAGE_LEVELS.find(
        (l) => l.id === (packageId === 'padel' ? activePadelLevel : activeTennisLevel),
      );
  const level = rawLevel ? localizeLevel(rawLevel, locale) : null;

  const productIds = getPackageProductIds(packageId, levelIds);
  const formatLines = productIds.map((productId) => {
    const product = getProductById(productId);
    if (!product) return null;

    const posterTierId =
      posterSizes[productId] ?? suggestPosterTierIdForProduct(productId, youthTierId);
    const posterTier = POSTER_SIZE_TIERS.find((t) => t.id === posterTierId);
    const format = product.formats?.[0];

    let sizeNote = '';
    let posterImage = format?.image ?? product.image;
    if (productNeedsPosterSize(productId)) {
      const option = getPosterSizeOptions(productId, locale).find((o) => o.id === posterTierId);
      sizeNote = option?.label ?? ot(locale, posterTier?.label) ?? '';
      if (option?.image) posterImage = option.image;
    }

    return {
      productId,
      name: product.name,
      formatName: translateLabel(format?.name, locale) || translateLabel('Magneetposter', locale),
      players: sizeNote,
      image: posterImage,
      thumbnail: getProductThumbnailSrc(posterImage),
      posterTierId,
    };
  }).filter(Boolean);

  const packageExBtw = getLevelPrice(packageId, null, levelIds);
  const buttonsExBtw = orderButtons ? calculateButtonCost(buttonCount) : 0;
  const whiteboardExBtw = getWhiteboardExBtw(whiteboardChoice);
  const totalExBtw = Math.round((packageExBtw + buttonsExBtw + whiteboardExBtw) * 100) / 100;
  const btw = Math.round(totalExBtw * 0.21 * 100) / 100;
  const totalIncBtw = Math.round((totalExBtw + btw) * 100) / 100;

  const bundleLines = getPackageBundleLines(null, locale).filter((line) => line.id !== 'whiteboard');

  const whiteboardLine = buildWhiteboardLine(whiteboardChoice, locale);
  if (whiteboardLine) {
    bundleLines.unshift(whiteboardLine);
  }

  const levelLabel = isCombi
    ? `Tennis ${tennisLevel.label} · Padel ${padelLevel.label}`
    : level.label;

  return {
    package: config,
    level,
    levels: isCombi ? { tennis: tennisLevel, padel: padelLevel } : null,
    levelLabel,
    youth,
    formatLines,
    bundleLines,
    whiteboardChoice,
    whiteboardLine,
    packageExBtw,
    buttonsExBtw,
    whiteboardExBtw,
    buttonCount: orderButtons ? buttonCount : 0,
    totalExBtw,
    btw,
    totalIncBtw,
    posterSizes,
    tennisLevelId: activeTennisLevel,
    padelLevelId: activePadelLevel,
  };
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(amount);
}
