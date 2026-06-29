import React from 'react';
import HeroSection from '@/components/HeroSection';
import PakkettenSection from '@/components/PakkettenSection';
import InfoSection from '@/components/InfoSection';
import HorizontalProductsSection from '@/components/HorizontalProductsSection';
import ProductsSection from '@/components/ProductsSection';
import RecognitionPunchSection from '@/components/RecognitionPunchSection';
import ShopSection from '@/components/ShopSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PakkettenSection />
      <HorizontalProductsSection />
      <ProductsSection />
      <RecognitionPunchSection />
      <ShopSection />
      <InfoSection />
    </main>
  );
};

export default HomePage;
