import { Suspense } from 'react';
import { cookies, headers } from 'next/headers';
import WinkelmandPage from '@/views/WinkelmandPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const dict = getDictionary(locale);
  const title = `${translate(dict, 'cart.title')} - TOF Sports`;
  const description = translate(dict, 'cart.emptyBody');
  const path = localizePath('/winkelmand', locale);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: 'TOF Sports',
      locale: locale === 'en' ? 'en_GB' : 'nl_NL',
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath('/winkelmand', 'nl')}`,
        en: `${SITE_URL}${localizePath('/winkelmand', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/winkelmand', 'nl')}`,
      },
    },
  };
}

export default function Winkelmand() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    }>
      <WinkelmandPage />
    </Suspense>
  );
}
