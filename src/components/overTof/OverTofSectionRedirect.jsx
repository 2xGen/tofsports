'use client';

import { useEffect } from 'react';

const OverTofSectionRedirect = ({ sectionId }) => {
  useEffect(() => {
    window.location.replace(`/over-tof#${sectionId}`);
  }, [sectionId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 pt-20 text-gray-600">
      Doorverwijzen…
    </div>
  );
};

export default OverTofSectionRedirect;
