import MissieVisiePage from '@/views/MissieVisiePage';

export const metadata = {
  title: 'Visie & Missie - TOF Sports',
  description: 'Onze visie en missie voor tennis- en padeljeugd. De 365-Mentaliteit en onze missie om jeugdspelers te activeren, ontwikkelen en verbinden.',
  openGraph: {
    title: 'Visie & Missie - TOF Sports',
    description: 'Onze visie en missie voor tennis- en padeljeugd. De 365-Mentaliteit en onze missie om jeugdspelers te activeren, ontwikkelen en verbinden.',
    url: 'https://www.toftennis.nl/missie-visie',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports Visie & Missie',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <MissieVisiePage />;
}
