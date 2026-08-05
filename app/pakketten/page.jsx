import { Suspense } from 'react';
import { cookies, headers } from 'next/headers';
import PakkettenPage from '@/views/PakkettenPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const dict = getDictionary(locale);
  const title = `${translate(dict, 'packages.heroTitle')} - TOF Sports`;
  const description = translate(dict, 'packages.heroSubtitle');
  const path = localizePath('/pakketten', locale);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
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
        nl: `${SITE_URL}${localizePath('/pakketten', 'nl')}`,
        en: `${SITE_URL}${localizePath('/pakketten', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/pakketten', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  const locale = resolveRequestLocale(headers(), cookies());
  const dict = getDictionary(locale);
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center pt-20">
          {translate(dict, 'common.loading')}
        </div>
      }
    >
      <PakkettenPage />
    </Suspense>
  );
}
