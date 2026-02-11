import ContactPage from '@/views/ContactPage';

export const metadata = {
  title: 'Contact - TOF Sports',
  description: 'Neem contact op met TOF Sports. Adres: M. van Nispenstraat 16, 3201KC Spijkenisse.',
  openGraph: {
    title: 'Contact - TOF Sports',
    description: 'Neem contact op met TOF Sports. Adres: M. van Nispenstraat 16, 3201KC Spijkenisse.',
    url: 'https://www.toftennis.nl/contact',
    siteName: 'TOF Sports',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function Page() {
  return <ContactPage />;
}
