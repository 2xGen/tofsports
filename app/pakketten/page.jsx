import { Suspense } from 'react';
import PakkettenPage from '@/views/PakkettenPage';

export const metadata = {
  title: 'Pakketten - TOF Sports',
  description:
    'Stel het TOF jeugdpakket samen voor jouw tennis- of padelclub. Tennispakket, padelpakket of tennis- en padelpakket — prijs op maat naar aantal jeugdspelers.',
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center pt-20">Laden...</div>
      }
    >
      <PakkettenPage />
    </Suspense>
  );
}
