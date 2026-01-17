import SpelersKaartenPage from '@/views/SpelersKaartenPage';

export const metadata = {
  title: 'Spelerskaarten - TOF Sports',
  description: 'Ontdek de TOF spelerskaarten voor Tennis, Padel en Rolstoeltennis. Inzicht in de ontwikkeling van jeugdspelers.',
  openGraph: {
    title: 'Spelerskaarten - TOF Sports',
    description: 'Ontdek de TOF spelerskaarten voor Tennis, Padel en Rolstoeltennis. Inzicht in de ontwikkeling van jeugdspelers.',
    url: 'https://www.toftennis.nl/spelers-kaarten',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports Spelerskaarten',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <SpelersKaartenPage />;
}

