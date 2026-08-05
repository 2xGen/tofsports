import { getAlternateGuideSlug, getGuideBySlug, getGuideSlug } from '@/data/kennisbankGuides';
import { EN_TO_NL_PATH, NL_TO_EN_PATH, splitPath } from '@/i18n/paths';

export const locales = ['nl', 'en'];
export const defaultLocale = 'nl';

export function isLocale(value) {
  return locales.includes(value);
}

/** Strip /en prefix → public pathname (may still be EN slug) */
export function stripLocale(pathname = '/') {
  if (!pathname) return '/';
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) {
    const stripped = pathname.slice(3);
    return stripped.startsWith('/') ? stripped : `/${stripped}`;
  }
  return pathname;
}

/**
 * Map a public path (NL or EN slug) to the Dutch app route used by `app/`.
 * Preserves ?query and #hash.
 */
export function toInternalPath(path = '/') {
  const { pathname: rawPath, suffix } = splitPath(path);
  const pathname = rawPath.replace(/\/+$/, '') || '/';

  if (pathname === '/knowledge-base' || pathname.startsWith('/knowledge-base/')) {
    const rest = pathname.slice('/knowledge-base'.length);
    if (!rest) return `/kennisbank${suffix}`;
    const slug = rest.replace(/^\//, '');
    const nlSlug = getAlternateGuideSlug(slug, 'nl') || slug;
    return `/kennisbank/${nlSlug}${suffix}`;
  }

  if (pathname.startsWith('/kennisbank/')) {
    const slug = pathname.slice('/kennisbank/'.length).split('/')[0];
    const nlSlug = getAlternateGuideSlug(slug, 'nl') || slug;
    if (nlSlug !== slug) return `/kennisbank/${nlSlug}${suffix}`;
  }

  const mapped = EN_TO_NL_PATH[pathname];
  if (mapped) return `${mapped}${suffix}`;

  return `${pathname === '/' ? '/' : pathname}${suffix}`;
}

/**
 * Map a Dutch app path to the public path for a locale (without /en prefix).
 * Preserves ?query and #hash.
 */
export function toPublicPath(path = '/', locale = defaultLocale) {
  const { pathname: rawPath, suffix } = splitPath(path);
  let pathname = rawPath.replace(/\/+$/, '') || '/';

  // Normalize EN public paths to internal first
  pathname = splitPath(toInternalPath(pathname)).pathname;

  if (locale !== 'en') {
    return `${pathname === '/' ? '/' : pathname}${suffix}`;
  }

  if (pathname === '/kennisbank' || pathname.startsWith('/kennisbank/')) {
    const rest = pathname.slice('/kennisbank'.length);
    if (!rest) return `/knowledge-base${suffix}`;
    const slug = rest.replace(/^\//, '');
    const guide = getGuideBySlug(slug);
    const enSlug = guide ? getGuideSlug(guide, 'en') : slug;
    return `/knowledge-base/${enSlug}${suffix}`;
  }

  const mapped = NL_TO_EN_PATH[pathname];
  if (mapped) return `${mapped}${suffix}`;

  return `${pathname === '/' ? '/' : pathname}${suffix}`;
}

/** Add /en prefix + English slugs when locale is English */
export function localizePath(path = '/', locale = defaultLocale) {
  const { pathname, suffix } = splitPath(path.startsWith('/') ? path : `/${path}`);
  const publicPath = toPublicPath(pathname, locale);
  if (locale === 'en') {
    if (publicPath === '/') return `/en${suffix}`;
    return `/en${publicPath}${suffix}`;
  }
  return `${publicPath}${suffix}`;
}

export function getLocaleFromPathname(pathname = '/') {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return 'nl';
}

/** Switch current path to the other locale (maps slugs + kennisbank guides) */
export function switchLocalePath(pathname = '/', nextLocale) {
  const bare = stripLocale(pathname);
  const internal = toInternalPath(bare);
  const { pathname: internalPath, suffix } = splitPath(internal);

  let nextInternal = internalPath;
  const kennisMatch = internalPath.match(/^\/kennisbank\/([^/]+)\/?$/);
  if (kennisMatch) {
    const alt = getAlternateGuideSlug(kennisMatch[1], nextLocale);
    if (alt) nextInternal = `/kennisbank/${alt}`;
  }

  return localizePath(`${nextInternal}${suffix}`, nextLocale);
}

/** Read locale from request headers/cookies (middleware sets both) */
export function resolveRequestLocale(headersList, cookieStore) {
  const fromHeader = headersList?.get?.('x-locale');
  if (fromHeader === 'en' || fromHeader === 'nl') return fromHeader;
  const fromCookie = cookieStore?.get?.('NEXT_LOCALE')?.value;
  if (fromCookie === 'en' || fromCookie === 'nl') return fromCookie;
  return defaultLocale;
}
