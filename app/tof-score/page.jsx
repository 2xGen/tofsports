import TofScorePage from '@/views/TofScorePage';

export const metadata = {
  title: 'TOF Score - TOF Sports',
  description: 'Houd scores en progressie digitaal bij. Een onmisbare tool voor het organiseren van interne competities en toernooien.',
  openGraph: {
    title: 'TOF Score - TOF Sports',
    description: 'Houd scores en progressie digitaal bij. Een onmisbare tool voor het organiseren van interne competities en toernooien.',
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

