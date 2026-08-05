import { cookies, headers } from 'next/headers';
import PrivacyPage from '@/views/PrivacyPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { ot } from '@/i18n/content/overTof';
import { PRIVACY } from '@/i18n/content/privacy';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const title = `${ot(locale, PRIVACY.heroTitle)} - TOF Sports`;
  const description = ot(locale, PRIVACY.intro);
  const path = localizePath('/privacy', locale);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath('/privacy', 'nl')}`,
        en: `${SITE_URL}${localizePath('/privacy', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/privacy', 'nl')}`,
      },
    },
  };
}

export default function Privacy() {
  return <PrivacyPage />;
}
