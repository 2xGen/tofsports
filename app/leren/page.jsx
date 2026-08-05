import { cookies, headers } from 'next/headers';
import LerenPage from '@/views/LerenPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { ot } from '@/i18n/content/overTof';
import { LEREN_CONTENT } from '@/i18n/content/methodPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const title = `${ot(locale, LEREN_CONTENT.hero.title)} - TOF Sports`;
  const description = ot(locale, LEREN_CONTENT.hero.subtitle);
  const path = localizePath('/leren', locale);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'TOF Sports',
      images: [
        {
          url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
          width: 800,
          height: 600,
          alt: 'TOF Sports Leren',
        },
      ],
      locale: locale === 'en' ? 'en_GB' : 'nl_NL',
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath('/leren', 'nl')}`,
        en: `${SITE_URL}${localizePath('/leren', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/leren', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <LerenPage />;
}
