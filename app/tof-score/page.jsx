import TofScorePage from '@/views/TofScorePage';

export const metadata = {
  title: 'TOF Score - TOF Sports',
  description: 'Elk speelmoment telt. De TOF 365-Score: meten wat écht belangrijk is.',
  openGraph: {
    title: 'TOF Score - TOF Sports',
    description: 'Elk speelmoment telt. De TOF 365-Score: meten wat écht belangrijk is.',
    url: 'https://www.toftennis.nl/tof-score',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports TOF Score',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <TofScorePage />;
}

