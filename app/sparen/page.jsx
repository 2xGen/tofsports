import SparenPage from '@/views/SparenPage';

export const metadata = {
  title: 'Sparen - TOF Sports',
  description: 'TOF score in de KNLTB leraren app en buttons en bandjes voor beloning en motivatie.',
  openGraph: {
    title: 'Sparen - TOF Sports',
    description: 'TOF score in de KNLTB leraren app en buttons en bandjes voor beloning en motivatie.',
    url: 'https://www.toftennis.nl/sparen',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports Sparen',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <SparenPage />;
}
