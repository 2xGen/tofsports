import { cookies, headers } from 'next/headers';
import OverTofPage from '@/views/OverTofPage';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { localizePath, resolveRequestLocale } from '@/i18n/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const title = `${ot(locale, OVER_TOF.page.title)} - TOF Sports`;
  const description = ot(locale, OVER_TOF.page.subtitle);
  const path = localizePath('/over-tof', locale);
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
        nl: `${SITE_URL}${localizePath('/over-tof', 'nl')}`,
        en: `${SITE_URL}${localizePath('/over-tof', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/over-tof', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <OverTofPage />;
}
