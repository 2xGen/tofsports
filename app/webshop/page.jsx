import { cookies, headers } from 'next/headers';
import WebshopRedirect from '@/components/producten/WebshopRedirect';
import { resolveRequestLocale } from '@/i18n/config';

export function generateMetadata() {
  const locale = resolveRequestLocale(headers(), cookies());
  const title = 'Webshop - TOF Sports';
  const description =
    locale === 'en'
      ? 'Order individual tennis and padel formats from TOF Sports.'
      : 'Bestel losse tennis- en padelformats bij TOF Sports.';

  return {
    title,
    description,
    robots: { index: false, follow: true },
  };
}

export default function Page() {
  return <WebshopRedirect />;
}
