import OverTofSectionRedirect from '@/components/overTof/OverTofSectionRedirect';

export const metadata = {
  title: 'TOF Score - TOF Sports',
  robots: { index: false, follow: true },
};

export default function Page() {
  return <OverTofSectionRedirect sectionId="tof-score" />;
}
