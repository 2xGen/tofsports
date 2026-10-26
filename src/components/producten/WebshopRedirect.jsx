'use client';

import { useEffect } from 'react';

const WebshopRedirect = () => {
  useEffect(() => {
    window.location.replace('/producten#losse-formats');
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-tof-indigo pt-20 text-white/70">
      Doorverwijzen…
    </div>
  );
};

export default WebshopRedirect;
