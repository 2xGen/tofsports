import MediaPage from '@/views/MediaPage';

export const metadata = {
  title: 'Media - TOF Sports',
  description:
    'Foto\'s en beelden van TOF Sports: jeugdprogramma\'s, formats en sfeer op tennis- en padelverenigingen.',
  openGraph: {
    title: 'Media - TOF Sports',
    description: 'Foto\'s en beelden van TOF op de club.',
    url: 'https://www.toftennis.nl/media',
    siteName: 'TOF Sports',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <MediaPage />;
}
