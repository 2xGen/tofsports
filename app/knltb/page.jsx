import { Suspense } from 'react';
import KnltbPage from '@/views/KnltbPage';

export const metadata = {
  title: 'KNLTB - TOF Sports',
  description: 'Official KNLTB Tenniskids partner. Ontdek de Spelerskaarten en de Leraren App voor tenniscoaches.',
  openGraph: {
    title: 'KNLTB - TOF Sports',
    description: 'Official KNLTB Tenniskids partner. Ontdek de Spelerskaarten en de Leraren App voor tenniscoaches.',
    url: 'https://www.toftennis.nl/knltb',
    siteName: 'TOF Sports',
    images: [
      {
        url: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        width: 800,
        height: 600,
        alt: 'TOF Sports KNLTB',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Laden...</p>
      </div>
    </div>}>
      <KnltbPage />
    </Suspense>
  );
}
