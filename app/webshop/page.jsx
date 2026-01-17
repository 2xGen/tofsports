import { Suspense } from 'react';
import WebshopPage from '@/views/WebshopPage';

export const metadata = {
  title: 'Webshop - TOF Sports',
  description: 'Bekijk onze volledige collectie tennis en padel materialen. Alles voor jouw sportclub bij TOF Sports.',
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Laden...</div>}>
      <WebshopPage />
    </Suspense>
  );
}

