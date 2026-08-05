import { NextResponse } from 'next/server';
import { MAINTENANCE_MODE } from '@/config/site';
import { stripLocale, toInternalPath, toPublicPath } from '@/i18n/config';

function withLocaleHeaders(response, locale) {
  response.headers.set('x-locale', locale);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });
  return response;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  if (MAINTENANCE_MODE) {
    if (pathname !== '/' && pathname !== '/en' && !pathname.startsWith('/en/')) {
      if (pathname.startsWith('/en')) {
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.rewrite(url);
      }
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  const isEnglish = pathname === '/en' || pathname.startsWith('/en/');
  const locale = isEnglish ? 'en' : 'nl';
  const barePath = stripLocale(pathname);
  const internalPath = toInternalPath(barePath);

  if (isEnglish) {
    // Canonicalize: /en/over-tof → /en/about-tof, /en/kennisbank/... → /en/knowledge-base/...
    const expectedPublic = toPublicPath(internalPath, 'en');
    if (barePath.replace(/\/+$/, '') !== expectedPublic.replace(/\/+$/, '')) {
      const url = request.nextUrl.clone();
      url.pathname = expectedPublic === '/' ? '/en' : `/en${expectedPublic}`;
      return NextResponse.redirect(url);
    }

    const url = request.nextUrl.clone();
    url.pathname = splitPathnameOnly(internalPath);
    return withLocaleHeaders(NextResponse.rewrite(url), locale);
  }

  // NL site: English public slugs → Dutch app paths
  const bareNormalized = barePath.replace(/\/+$/, '') || '/';
  const internalNormalized = internalPath.replace(/\/+$/, '') || '/';
  if (bareNormalized !== internalNormalized) {
    const url = request.nextUrl.clone();
    url.pathname = splitPathnameOnly(internalPath);
    return NextResponse.redirect(url);
  }

  return withLocaleHeaders(NextResponse.next(), locale);
}

function splitPathnameOnly(pathWithPossibleSuffix) {
  const q = pathWithPossibleSuffix.indexOf('?');
  const h = pathWithPossibleSuffix.indexOf('#');
  let end = pathWithPossibleSuffix.length;
  if (q >= 0) end = Math.min(end, q);
  if (h >= 0) end = Math.min(end, h);
  return pathWithPossibleSuffix.slice(0, end) || '/';
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
