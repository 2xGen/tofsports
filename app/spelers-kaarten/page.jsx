import { cookies, headers } from 'next/headers';
import SpelersKaartenPage from '@/views/SpelersKaartenPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { ot } from '@/i18n/content/overTof';
import { SPELERS_KAARTEN } from '@/i18n/content/spelersKaarten';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const title = `${ot(locale, SPELERS_KAARTEN.hero.title)} - TOF Sports`;
  const description = ot(locale, SPELERS_KAARTEN.hero.subtitle);
  const path = localizePath('/spelers-kaarten', locale);
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
          alt: 'TOF Sports Spelerskaarten',
        },
      ],
      locale: locale === 'en' ? 'en_GB' : 'nl_NL',
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath('/spelers-kaarten', 'nl')}`,
        en: `${SITE_URL}${localizePath('/spelers-kaarten', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/spelers-kaarten', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <SpelersKaartenPage />;
}

