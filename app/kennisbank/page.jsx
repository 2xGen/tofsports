import { cookies, headers } from 'next/headers';
import KennisbankPage from '@/views/KennisbankPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const dict = getDictionary(locale);
  const title = `${translate(dict, 'knowledge.title')} - TOF Sports`;
  const description = translate(dict, 'knowledge.subtitle');
  const path = localizePath('/kennisbank', locale);
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
        nl: `${SITE_URL}${localizePath('/kennisbank', 'nl')}`,
        en: `${SITE_URL}${localizePath('/kennisbank', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/kennisbank', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <KennisbankPage />;
}
