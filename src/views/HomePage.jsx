import React from 'react';
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import ProductsSection from '@/components/ProductsSection';
import ShopSection from '@/components/ShopSection';
import HorizontalProductsSection from '@/components/HorizontalProductsSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <ProductsSection />
      {/* Reordered: HorizontalProductsSection (formerly s5) moved before ShopSection */}
      <HorizontalProductsSection />
      <ShopSection />
    </main>
  );
};

export default HomePage;