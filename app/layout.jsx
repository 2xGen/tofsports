import { Analytics } from '@vercel/analytics/next';
import { Poppins } from 'next/font/google';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import { MAINTENANCE_MODE } from '@/config/site';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = MAINTENANCE_MODE
  ? {
      title: 'TOF Sports - Binnenkort online',
      description:
        'We werken aan een nieuwe en verbeterde website die je nog beter helpt plezier in ontwikkelen te creëren.',
      icons: {
        icon: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        shortcut: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        apple: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
      },
      openGraph: {
        title: 'TOF Sports - Binnenkort online',
        description:
          'We werken aan een nieuwe en verbeterde website die je nog beter helpt plezier in ontwikkelen te creëren.',
        type: 'website',
        locale: 'nl_NL',
      },
    }
  : {
      title: 'TOF Sports - Zet je jeugdprogramma op scherp',
      description:
        'Powered by KNLTB. Ontdek onze professionele, speelse tools voor de moderne tennis- en padelles.',
      icons: {
        icon: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        shortcut: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
        apple: 'https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg',
      },
      openGraph: {
        title: 'TOF Sports - Zet je jeugdprogramma op scherp',
        description:
          'Powered by KNLTB. Ontdek onze professionele, speelse tools voor de moderne tennis- en padelles.',
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
      <body className="min-h-screen bg-white font-poppins flex flex-col">
        <Providers>
          {!MAINTENANCE_MODE && <ConditionalNavbar />}
          <main className="flex-grow">{children}</main>
          {!MAINTENANCE_MODE && <Footer />}
          {!MAINTENANCE_MODE && <CookieConsent />}
          {!MAINTENANCE_MODE && <Toaster />}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

