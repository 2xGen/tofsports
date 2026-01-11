import KnltbPage from '@/pages/KnltbPage';

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
  return <KnltbPage />;
}
