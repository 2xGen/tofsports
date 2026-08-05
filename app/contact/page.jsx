import { cookies, headers } from 'next/headers';
import ContactPage from '@/views/ContactPage';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const dict = getDictionary(locale);
  const title = `${translate(dict, 'contact.title')} - TOF Sports`;
  const description =
    locale === 'en'
      ? 'Get in touch with TOF Sports. Address: M. van Nispenstraat 16, 3201KC Spijkenisse.'
      : 'Neem contact op met TOF Sports. Adres: M. van Nispenstraat 16, 3201KC Spijkenisse.';
  const path = localizePath('/contact', locale);
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
        nl: `${SITE_URL}${localizePath('/contact', 'nl')}`,
        en: `${SITE_URL}${localizePath('/contact', 'en')}`,
        'x-default': `${SITE_URL}${localizePath('/contact', 'nl')}`,
      },
    },
  };
}

export default function Page() {
  return <ContactPage />;
}
