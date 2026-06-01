import React from 'react';
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import HorizontalProductsSection from '@/components/HorizontalProductsSection';
import ProductsSection from '@/components/ProductsSection';
import RecognitionPunchSection from '@/components/RecognitionPunchSection';
import ShopSection from '@/components/ShopSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <HorizontalProductsSection />
      <ProductsSection />
      <RecognitionPunchSection />
      <ShopSection />
    </main>
  );
};

export default HomePage;
