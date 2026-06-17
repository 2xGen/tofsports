import { getProductById } from '@/data/products';
import { getProductThumbnailSrc } from '@/lib/productImage';

/** Jeugdgroep voor button-schatting en posteradvies */
export const YOUTH_TIERS = [
  {
    id: 'youth-50',
    label: 'Tot 50 jeugdspelers',
    shortLabel: '≤ 50',
    playerCount: 50,
  },
  {
    id: 'youth-100',
    label: 'Tot 100 jeugdspelers',
    shortLabel: '≤ 100',
    playerCount: 100,
  },
  {
    id: 'youth-100plus',
    label: 'Meer dan 100 jeugdspelers',
    shortLabel: '100+',
    playerCount: 125,
  },
];

/** Postergrootte (spelers per magneetposter) */
export const POSTER_SIZE_TIERS = [
  { id: 'tier-21', label: 'Tot en met 21 spelers', maxPlayers: 21 },
  { id: 'tier-36', label: 'Tot en met 36 spelers', maxPlayers: 36 },
  { id: 'tier-55', label: 'Tot en met 55 spelers', maxPlayers: 55 },
];

export const PACKAGE_LEVELS = [
  { id: 'basis', label: 'Basis', description: 'TOF Score poster, Swirl en Piramide' },
  { id: 'plus', label: 'Plus', description: 'Basis + extra format + magneetbord 60×90 cm' },
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
    name: 'Magneetbord 60×90 cm',
    description: 'Met opklapbare poten',
  },
  kennisSessies: {
    name: '4 online kennissessies',
    description: 'Begeleiding bij de start op jouw club',
  },
  tofScoreApp: {
    name: 'TOF Score app (1 jaar)',
    description: 'Digitaal scoresysteem voor trainers en spelers',
  },
  verzending: {
    name: 'Verzending',
    description: 'Inbegrepen bij elk pakket',
  },
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
  return LEVEL_PRICES[levelId] ?? LEVEL_PRICES.basis;
}

export function getVanafPrice(packageId) {
  const config = MAIN_PACKAGES.find((p) => p.id === packageId);
  return config?.vanafPrice ?? LEVEL_PRICES.basis;
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

export function getPosterSizeOptions(productId) {
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
        label: tier.label,
        image: galleryItem?.url ?? fallbackImage,
      };
    });
  }

  if (product.galleryImages?.length) {
    return product.galleryImages.map((galleryItem, index) => {
      const tier = POSTER_SIZE_TIERS[index];
      return {
        id: tier?.id ?? `gallery-${index}`,
        label: galleryItem.label ?? tier?.label ?? 'Magneetposter',
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
}) {
  const config = MAIN_PACKAGES.find((p) => p.id === packageId);
  const youth = YOUTH_TIERS.find((t) => t.id === youthTierId);
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
  const tennisLevel = PACKAGE_LEVELS.find((l) => l.id === activeTennisLevel);
  const padelLevel = PACKAGE_LEVELS.find((l) => l.id === activePadelLevel);
  const level = isCombi ? null : tennisLevel ?? padelLevel;

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
      const option = getPosterSizeOptions(productId).find((o) => o.id === posterTierId);
      sizeNote = option?.label ?? posterTier?.label ?? '';
      if (option?.image) posterImage = option.image;
    }

    return {
      productId,
      name: product.name,
      formatName: format?.name ?? 'Magneetposter',
      players: sizeNote,
      image: posterImage,
      thumbnail: getProductThumbnailSrc(posterImage),
      posterTierId,
    };
  }).filter(Boolean);

  const packageExBtw = getLevelPrice(packageId, null, levelIds);
  const buttonsExBtw = orderButtons ? calculateButtonCost(buttonCount) : 0;
  const totalExBtw = Math.round((packageExBtw + buttonsExBtw) * 100) / 100;
  const btw = Math.round(totalExBtw * 0.21 * 100) / 100;
  const totalIncBtw = Math.round((totalExBtw + btw) * 100) / 100;

  const bundleLines = [
    BUNDLE_ITEMS.kennisSessies,
    BUNDLE_ITEMS.tofScoreApp,
    BUNDLE_ITEMS.verzending,
  ];

  const includesWhiteboard =
    activeTennisLevel === 'plus' ||
    activeTennisLevel === 'compleet' ||
    activePadelLevel === 'plus' ||
    activePadelLevel === 'compleet';

  if (includesWhiteboard) {
    bundleLines.unshift(BUNDLE_ITEMS.whiteboard);
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
    packageExBtw,
    buttonsExBtw,
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
