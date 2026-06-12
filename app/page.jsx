import dynamic from 'next/dynamic';
import MaintenancePage from '@/views/MaintenancePage';
import { MAINTENANCE_MODE } from '@/config/site';

const HomePage = MAINTENANCE_MODE
  ? null
  : dynamic(() => import('@/views/HomePage'));

export const metadata = MAINTENANCE_MODE
  ? {
      title: 'TOF Sports - Binnenkort online',
      description:
        'We werken aan een nieuwe en verbeterde website die je nog beter helpt plezier in ontwikkelen te creëren.',
    }
  : {
      title: 'TOF Sports - Zet je jeugdprogramma op scherp',
      description:
        'Powered by KNLTB. Ontdek onze professionele, speelse tools voor de moderne tennis- en padelles.',
    };

export default function Page() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <HomePage />;
}
