import { Poppins } from 'next/font/google';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'TOF Tennis – KNLTB Official Tenniskids partner',
  description: 'Official KNLTB Tenniskids partner. Ontdek onze professionele, speelse tools voor de moderne tennisles.',
  openGraph: {
    title: 'TOF Tennis – KNLTB Official Tenniskids partner',
    description: 'Official KNLTB Tenniskids partner. Ontdek onze professionele, speelse tools voor de moderne tennisles.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl-NL" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white font-poppins">
        <ConditionalNavbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

