import { cookies, headers } from 'next/headers';
import SpelenPage from '@/views/SpelenPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { ot } from '@/i18n/content/overTof';
import { SPELEN_CONTENT } from '@/i18n/content/methodPages';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const title = `${ot(locale, SPELEN_CONTENT.hero.title)} - TOF Sports`;
  const description = ot(locale, SPELEN_CONTENT.hero.subtitle);
  const path = localizePath('/spelen', locale);
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
          alt: 'TOF Sports Spelen',
        },
      ],
      locale: locale === 'en' ? 'en_GB' : 'nl_NL',
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath('/spelen', 'nl')}`,
        en: `${SITE_URL}${localizePath('/spelen', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/spelen', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <SpelenPage />;
}
