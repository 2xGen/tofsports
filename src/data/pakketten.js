import { getProductById } from '@/data/products';
import { getProductThumbnailSrc } from '@/lib/productImage';

export const PLAYER_TIERS = [
  {
    id: 'tier-20',
    label: 'Tot 20 jeugdspelers',
    shortLabel: '≤ 20',
    min: 1,
    max: 20,
  },
  {
    id: 'tier-30',
    label: '21–30 jeugdspelers',
    shortLabel: '21–30',
    min: 21,
    max: 30,
  },
  {
    id: 'tier-40',
    label: '31–40 jeugdspelers',
    shortLabel: '31–40',
    min: 31,
    max: 40,
  },
  {
    id: 'tier-55',
    label: '41–55 jeugdspelers',
    shortLabel: '41–55',
    min: 41,
    max: 55,
  },
];

const TIER_ORDER = PLAYER_TIERS.map((t) => t.id);

/** Plus-prijs per format (stift + stiftremover inbegrepen waar van toepassing) */
export function getFormatUnitPrice(format) {
  const { packages } = format;
  if (packages.plus) return packages.plus.price;
  if (packages.standard) return packages.standard.price;
  if (packages.basis) return packages.basis.price;
  return 0;
}

export function getFormatIndexForTier(product, tierId) {
  const { formats } = product;
  const tierIdx = TIER_ORDER.indexOf(tierId);
  if (formats.length === 1) return 0;
  if (formats.length === 2) return tierIdx >= 1 ? 1 : 0;
  if (tierIdx <= 0) return 0;
  if (tierIdx === 1) return 1;
  return 2;
}

export function getFormatForTier(productId, tierId) {
  const product = getProductById(productId);
  if (!product?.formats?.length) return null;
  const index = getFormatIndexForTier(product, tierId);
  const format = product.formats[Math.min(index, product.formats.length - 1)];
  return {
    product,
    format,
    price: getFormatUnitPrice(format),
    packageLabel:
      format.packages.plus?.label ||
      format.packages.standard?.label ||
      format.packages.basis?.label,
  };
}

const BUNDLE_ITEMS = {
  matrix: {
    name: 'Ontwikkelingsmatrix',
    description: 'Matrix voor jeugdstructuur en niveau-indeling',
  },
  tofScorePoster: {
    name: 'TOF Score poster',
    description: 'Zichtbaar scoresysteem voor op de club',
  },
  whiteboard: {
    name: 'Whiteboard',
    description: 'Rijdbaar whiteboard voor formats op de baan',
    includedValue: 150,
  },
  whiteboardShared: {
    name: 'Gedeeld whiteboard',
    description: 'Eén whiteboard voor tennis én padel op de club',
    includedValue: 150,
  },
  app: {
    name: 'Leraren-app (1 jaar)',
    description: 'Digitale ondersteuning voor trainers',
  },
};

export const MAIN_PACKAGES = [
  {
    id: 'tennis',
    title: 'Tennispakket',
    subtitle: 'Voor tennisverenigingen',
    description:
      '4 tennisformats, matrix, TOF Score poster, whiteboard en 1 jaar leraren-app. Plug & Play voor je hele tennisjeugd.',
    vanafPrice: 545,
    color: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tennis%20pakket.jpg',
    formatProductIds: ['piramide', 'davis', '4opeenrij', 'kraak-de-code'],
    bundleItemKeys: ['matrix', 'tofScorePoster', 'whiteboard', 'app'],
    tierPrices: {
      'tier-20': 545,
      'tier-30': 585,
      'tier-40': 615,
      'tier-55': 615,
    },
  },
  {
    id: 'padel',
    title: 'Padelpakket',
    subtitle: 'Voor padelverenigingen',
    description:
      '4 padelformats, matrix, TOF Score poster, whiteboard en 1 jaar leraren-app. Direct inzetbaar op je padelclub.',
    vanafPrice: 545,
    color: 'from-orange-500 to-amber-600',
    borderColor: 'border-orange-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Padel%20pakket.jpg',
    formatProductIds: ['padel-piramide', 'padel-club-clash', 'uno-dos-tres-cuatro', 'unlock-the-code'],
    bundleItemKeys: ['matrix', 'tofScorePoster', 'whiteboard', 'app'],
    tierPrices: {
      'tier-20': 545,
      'tier-30': 585,
      'tier-40': 615,
      'tier-55': 615,
    },
  },
  {
    id: 'combi',
    title: 'Combi-pakket',
    subtitle: 'Superdeal voor combinatieclubs',
    description:
      'Alle 8 formats, matrix, TOF Score poster, één gedeeld whiteboard en 1 jaar leraren-app. De complete cluboplossing.',
    vanafPrice: 695,
    badge: 'Meest compleet',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-600',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Combi%20pakket.jpg',
    formatProductIds: [
      'piramide',
      'davis',
      '4opeenrij',
      'kraak-de-code',
      'padel-piramide',
      'padel-club-clash',
      'uno-dos-tres-cuatro',
      'unlock-the-code',
    ],
    bundleItemKeys: ['matrix', 'tofScorePoster', 'whiteboardShared', 'app'],
    /** Combi: 8 formats + clubpakket — vanaf €695; meerprijs bij grotere jeugdgroepen */
    tierPrices: {
      'tier-20': 695,
      'tier-30': 735,
      'tier-40': 765,
      'tier-55': 765,
    },
    /** Vaste waarde clubpakket in prijsopbouw (o.a. whiteboard-bonus) */
    bundleExtrasPrice: 150,
  },
];

function sumFormatPrices(packageConfig, tierId) {
  return packageConfig.formatProductIds.reduce((sum, productId) => {
    const row = getFormatForTier(productId, tierId);
    return sum + (row?.price ?? 0);
  }, 0);
}

/** Vaste pakketprijs per jeugdgroep (ex. btw) */
export function getPackageTotalExBtw(packageId, tierId) {
  const config = MAIN_PACKAGES.find((p) => p.id === packageId);
  if (!config) return 0;
  return config.tierPrices?.[tierId] ?? config.vanafPrice;
}

/** Clubpakket-deel voor weergave in samenvatting (matrix, poster, whiteboard, app) */
function getBundleExtrasPrice(packageConfig) {
  if (packageConfig.bundleExtrasPrice != null) {
    return packageConfig.bundleExtrasPrice;
  }
  const formatTotalAtBase = sumFormatPrices(packageConfig, 'tier-20');
  const derived = packageConfig.vanafPrice - formatTotalAtBase;
  return Math.max(0, Math.round(derived * 100) / 100);
}

export function buildPackageQuote(packageId, tierId) {
  const config = MAIN_PACKAGES.find((p) => p.id === packageId);
  const tier = PLAYER_TIERS.find((t) => t.id === tierId);
  if (!config || !tier) return null;

  const formatLines = config.formatProductIds.map((productId) => {
    const row = getFormatForTier(productId, tierId);
    if (!row) return null;
    return {
      productId,
      name: row.product.name,
      formatName: row.format.name,
      players: row.format.players,
      image: row.format.image,
      thumbnail: getProductThumbnailSrc(row.format.image),
      price: row.price,
      packageLabel: row.packageLabel,
    };
  }).filter(Boolean);

  const totalExBtw = getPackageTotalExBtw(packageId, tierId);
  const bundleExtras = getBundleExtrasPrice(config);
  const bundleLines = config.bundleItemKeys.map((key) => ({
    ...BUNDLE_ITEMS[key],
    price: null,
  }));

  const catalogFormatsSubtotal = formatLines.reduce((s, l) => s + l.price, 0);
  const formatsSubtotal = Math.round((totalExBtw - bundleExtras) * 100) / 100;
  const btw = Math.round(totalExBtw * 0.21 * 100) / 100;
  const totalIncBtw = Math.round((totalExBtw + btw) * 100) / 100;

  return {
    package: config,
    tier,
    formatLines,
    bundleLines,
    bundleExtras,
    formatsSubtotal,
    catalogFormatsSubtotal,
    totalExBtw,
    btw,
    totalIncBtw,
  };
}

export function getVanafPrice(packageId) {
  const config = MAIN_PACKAGES.find((p) => p.id === packageId);
  return config?.vanafPrice ?? 0;
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(amount);
}
