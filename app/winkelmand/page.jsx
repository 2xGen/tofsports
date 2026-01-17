'use client';

import { Suspense } from 'react';
import WinkelmandPage from '@/views/WinkelmandPage';

export default function Winkelmand() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    }>
      <WinkelmandPage />
    </Suspense>
  );
}
