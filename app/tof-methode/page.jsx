import TofMethodePage from '@/views/TofMethodePage';

export const metadata = {
  title: 'TOF Methode - TOF Sports',
  description: 'Spelen. Ontwikkelen. Verbinden. 365 dagen per jaar. De TOF-methode: van lesklant naar actieve clubspeler.',
  openGraph: {
    title: 'TOF Methode - TOF Sports',
    description: 'Spelen. Ontwikkelen. Verbinden. 365 dagen per jaar. De TOF-methode: van lesklant naar actieve clubspeler.',
    url: 'https://www.toftennis.nl/tof-methode',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports TOF Methode',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <TofMethodePage />;
}
