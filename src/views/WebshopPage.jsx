'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { useSearchParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import { localizeProducts } from '@/data/products.en';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';

const WebshopPage = () => {
  const { locale, t } = useLocale();
  const { toast } = useToast();
  const { addToCart, getCartCount, getSubtotal, getBTW, getTotal, isLoaded } = useCart();
  const cartCount = isLoaded ? getCartCount() : 0;
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const selectedCategory = searchParams.get('category') || 'tennis';
  const filteredProducts = localizeProducts(getProductsByCategory(selectedCategory), locale);
  const heroImage = getPageHeroImage('/webshop', selectedCategory);

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    router.push(`/webshop?category=${category}`);
  };

  const formatEuro = (amount) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(amount);

  const handleAddConfiguredItem = (item) => {
    addToCart(item);

    toast({
      title: t('webshop.addedToCart'),
      description: t('webshop.addedToCartDesc', {
        product: item.productName,
        label: item.packageLabel,
        price: formatEuro(item.price),
      }),
      duration: 3000,
    });
  };

  // Hero title/description based on category
  const heroTitle = selectedCategory === 'padel'
    ? (locale === 'en' ? 'TOF Webshop Padel' : 'TOF Webshop Padel')
    : (locale === 'en' ? 'TOF Webshop Tennis' : 'TOF Webshop Tennis');

  const heroDescription =
    locale === 'en'
      ? 'Everything you need for a complete youth programme.'
      : 'Alles wat je nodig hebt voor een compleet jeugdprogramma.';

  return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <PageHero image={heroImage}>
          {(heroInView) => (
            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              <PageHeroTitle heroInView={heroInView}>{heroTitle}</PageHeroTitle>
              <PageHeroSubtitle heroInView={heroInView}>{heroDescription}</PageHeroSubtitle>
            </div>
          )}
        </PageHero>

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
              {t('webshop.tennis')}
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
              {t('webshop.padel')}
            </Button>
          </div>

          <ProductList
            products={filteredProducts}
            onAddConfiguredItem={handleAddConfiguredItem}
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
                        {t(cartCount === 1 ? 'webshop.itemsInCartOne' : 'webshop.itemsInCartOther', { count: cartCount })}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t('webshop.subtotal')}: €{getSubtotal().toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Price & Checkout Button */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 hidden sm:block">{t('webshop.totalInclVat')}</p>
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
                        <span>{t('webshop.checkout')}</span>
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
