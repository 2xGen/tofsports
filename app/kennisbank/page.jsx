import KennisbankPage from '@/views/KennisbankPage';

export const metadata = {
  title: 'Kennisbank - TOF Sports',
    description:
      'Gidsen en praktische kennis voor jeugdprogramma\'s, speelmomenten en betrokkenheid op tennis- en padelverenigingen.',
  openGraph: {
    title: 'Kennisbank - TOF Sports',
    description:
      'Gidsen, tips en praktische kennis over de TOF Methode en jeugdprogramma\'s op de club.',
    url: 'https://www.toftennis.nl/kennisbank',
    siteName: 'TOF Sports',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <KennisbankPage />;
}
