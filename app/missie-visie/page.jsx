import MissieVisiePage from '@/views/MissieVisiePage';

export const metadata = {
  title: 'Missie & Visie - TOF Sports',
  description: 'Onze missie en visie voor tennis en padel. De 365-Mentaliteit en onze missie om jeugdspelers te activeren, ontwikkelen en verbinden.',
  openGraph: {
    title: 'Missie & Visie - TOF Sports',
    description: 'Onze missie en visie voor tennis en padel. De 365-Mentaliteit en onze missie om jeugdspelers te activeren, ontwikkelen en verbinden.',
    url: 'https://www.toftennis.nl/missie-visie',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports Missie & Visie',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <MissieVisiePage />;
}
