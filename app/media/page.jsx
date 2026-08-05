import { cookies, headers } from 'next/headers';
import MediaPage from '@/views/MediaPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const dict = getDictionary(locale);
  const title = `${translate(dict, 'media.title')} - TOF Sports`;
  const description =
    locale === 'en'
      ? "Photos and footage of TOF Sports: youth programmes, formats and atmosphere at tennis and padel clubs."
      : "Foto's en beelden van TOF Sports: jeugdprogramma's, formats en sfeer op tennis- en padelverenigingen.";
  const path = localizePath('/media', locale);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description: translate(dict, 'media.subtitle'),
      url,
      siteName: 'TOF Sports',
      locale: locale === 'en' ? 'en_GB' : 'nl_NL',
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath('/media', 'nl')}`,
        en: `${SITE_URL}${localizePath('/media', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/media', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <MediaPage />;
}
