import React from 'react';
import HeroSection from '@/components/HeroSection';
import PakkettenSection from '@/components/PakkettenSection';
import HorizontalProductsSection from '@/components/HorizontalProductsSection';
import RecognitionPunchSection from '@/components/RecognitionPunchSection';
import ShopSection from '@/components/ShopSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PakkettenSection />
      <HorizontalProductsSection />
      <RecognitionPunchSection />
      <ShopSection />
    </main>
  );
};

export default HomePage;
