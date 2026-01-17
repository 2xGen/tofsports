'use client';
// Current localhost state - ensure 100% match with deployment - 2026-01-06

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

const WebshopPage = () => {
  const { toast } = useToast();
  const { addToCart, getCartCount, getSubtotal, getBTW, getTotal, isLoaded } = useCart();
  const cartCount = isLoaded ? getCartCount() : 0;
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
    const price = format.packages[packageType].price + (extra ? extra.price : 0);
    
    // Add to cart context
    addToCart({
      productId: product.id,
      productName: product.name,
      formatId: format.id,
      formatName: format.name,
      packageType: packageType,
      packageLabel: format.packages[packageType].label,
      extraName: extra ? extra.name : null,
      extraPrice: extra ? extra.price : 0,
      price: price
    });
    
    toast({
      title: "Toegevoegd aan winkelwagen",
      description: `${product.name} - ${format.name} (€${price.toFixed(2)}) zit nu in je mandje!`,
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
          <div className="flex justify-center gap-3 md:gap-4 mb-8 flex-wrap">
            <Button
              onClick={() => handleCategoryChange('tennis')}
              variant={selectedCategory === 'tennis' ? 'default' : 'outline'}
              size="lg"
              className={`px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-bold flex-1 md:flex-none min-w-[120px] ${
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
              className={`px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-bold flex-1 md:flex-none min-w-[120px] ${
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

        {/* Sticky Cart Banner */}
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-orange-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
            >
              <div className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex items-center justify-between gap-4">
                  {/* Cart Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <ShoppingCart className="w-6 h-6 text-orange-500" />
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-600">
                        {cartCount} {cartCount === 1 ? 'product' : 'producten'} in je mandje
                      </p>
                      <p className="text-xs text-gray-500">
                        Subtotaal: €{getSubtotal().toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Price & Checkout Button */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 hidden sm:block">Totaal incl. BTW</p>
                      <p className="text-xl md:text-2xl font-bold text-gray-900">
                        €{getTotal().toFixed(2)}
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 md:px-8 shadow-lg"
                    >
                      <Link href="/winkelmand" className="flex items-center gap-2">
                        <span className="hidden sm:inline">Afrekenen</span>
                        <span className="sm:hidden">Checkout</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

export default WebshopPage;
