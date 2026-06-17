import WebshopRedirect from '@/components/producten/WebshopRedirect';

export const metadata = {
  title: 'Webshop - TOF Sports',
  description: 'Bestel losse tennis- en padelformats bij TOF Sports.',
  robots: { index: false, follow: true },
};

export default function Page() {
  return <WebshopRedirect />;
}
