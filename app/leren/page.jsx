import LerenPage from '@/views/LerenPage';

export const metadata = {
  title: 'Leren - TOF Sports',
  description: 'Kennis producten voor interactief leren en ontwikkelen: Ja-Nee kaarten en Zoek de schat.',
  openGraph: {
    title: 'Leren - TOF Sports',
    description: 'Kennis producten voor interactief leren en ontwikkelen: Ja-Nee kaarten en Zoek de schat.',
    url: 'https://www.toftennis.nl/leren',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports Leren',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <LerenPage />;
}
