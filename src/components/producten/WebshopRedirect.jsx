'use client';

import { useEffect } from 'react';

const WebshopRedirect = () => {
  useEffect(() => {
    window.location.replace('/producten#losse-formats');
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 pt-20 text-gray-600">
      Doorverwijzen…
    </div>
  );
};

export default WebshopRedirect;
