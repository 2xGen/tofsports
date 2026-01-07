'use client';
// Current localhost state - ensure 100% match with deployment - 2026-01-06

import React, { useState, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { getProductsByCategory } from '@/data/products';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WebshopPage = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState({});
  const heroRef = useRef(null);
  
  // Get category from URL, default to 'tennis'
  const selectedCategory = searchParams.get('category') || 'tennis';
  const filteredProducts = getProductsByCategory(selectedCategory);

  // Scroll animations
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    router.push(`/webshop?category=${category}`);
  };

  const handleAddToCart = (product, format, packageType, extra = null) => {
    const productName = `${product.name} - ${format.name} - ${format.packages[packageType].label}${extra ? ` + ${extra.name}` : ''}`;
    const price = format.packages[packageType].price + (extra ? extra.price : 0);
    
    toast({
      title: "Toegevoegd aan winkelwagen",
      description: `${productName} (€${price.toFixed(2)}) zit nu in je mandje!`,
      duration: 3000,
    });
  };

  // Hero title based on category
  const heroTitle = selectedCategory === 'padel' 
    ? 'TOF Webshop Padel'
    : 'TOF Webshop Tennis';

  // Hero description based on category
  const heroDescription = selectedCategory === 'padel' 
    ? 'Alles wat je nodig hebt voor de perfecte padelles, van materialen tot methodes.'
    : 'Alles wat je nodig hebt voor de perfecte tennisles, van materialen tot methodes.';

  // Hero background gradient based on category
  const heroBackground = selectedCategory === 'padel'
    ? 'linear-gradient(to bottom right, rgba(180, 255, 200, 0.4), rgba(197, 223, 223, 0.5), rgba(62, 200, 188, 0.3))'
    : 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))';

  return (
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section - Matching Homepage Style */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Gradient Background - Static */}
          <div 
            className="absolute inset-0"
            style={{
              background: heroBackground,
            }}
          />

          <div className="container mx-auto px-4 relative z-30 py-16">
            <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
              {/* Main Heading - zoomInRight animation */}
              <motion.h1
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="text-5xl md:text-7xl font-bold text-gray-800 relative z-30"
              >
                {heroTitle}
              </motion.h1>

              {/* Subtitle - fadeIn animation */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
              >
                {heroDescription}
              </motion.p>
            </div>
          </div>

          {/* Curved Shape Divider - negative */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
              <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
            </svg>
                  </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Category Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => handleCategoryChange('tennis')}
              variant={selectedCategory === 'tennis' ? 'default' : 'outline'}
              size="lg"
              className={`px-8 py-3 text-lg font-bold ${
                selectedCategory === 'tennis'
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300'
              }`}
            >
              Tennis
            </Button>
                    <Button 
              onClick={() => handleCategoryChange('padel')}
              variant={selectedCategory === 'padel' ? 'default' : 'outline'}
              size="lg"
              className={`px-8 py-3 text-lg font-bold ${
                selectedCategory === 'padel'
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300'
              }`}
            >
              Padel
                    </Button>
          </div>

          <ProductList
            products={filteredProducts}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
  );
};

export default WebshopPage;
