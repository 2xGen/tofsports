import SpelenPage from '@/views/SpelenPage';

export const metadata = {
  title: 'Spelen - TOF Sports',
  description: 'Magneetposters met spelvormen in bewaarkoker, magneetbuttons, whiteboard stiften en markers, en removal alcohol.',
  openGraph: {
    title: 'Spelen - TOF Sports',
    description: 'Magneetposters met spelvormen in bewaarkoker, magneetbuttons, whiteboard stiften en markers, en removal alcohol.',
    url: 'https://www.toftennis.nl/spelen',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports Spelen',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <SpelenPage />;
}
