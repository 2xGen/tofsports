'use client';

import { useEffect } from 'react';

const OverTofSectionRedirect = ({ sectionId }) => {
  useEffect(() => {
    window.location.replace(`/over-tof#${sectionId}`);
  }, [sectionId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-tof-indigo pt-20 text-white/70">
      Doorverwijzen…
    </div>
  );
};

export default OverTofSectionRedirect;
