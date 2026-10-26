'use client';

import React, { useState } from 'react';
import Link from '@/i18n/Link';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import { localizeProducts } from '@/data/products.en';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import { useLocale } from '@/i18n/LocaleProvider';

const WebshopContent = ({ light = false }) => {
  const { locale, t } = useLocale();
  const { toast } = useToast();
  const { addToCart, getCartCount, getSubtotal, getTotal, isLoaded } = useCart();
  const cartCount = isLoaded ? getCartCount() : 0;
  const [selectedCategory, setSelectedCategory] = useState('tennis');

  const filteredProducts = localizeProducts(getProductsByCategory(selectedCategory), locale);

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

  const inactiveBtn = light
    ? 'bg-tof-indigo text-tof-yellow hover:bg-tof-indigo/90'
    : 'border-2 border-white/20 bg-tof-surface text-white/80 hover:bg-tof-indigo';

  const categoryBtn = (active) =>
    light
      ? 'min-w-[140px] rounded-full bg-tof-indigo px-10 py-6 text-base font-bold text-tof-yellow hover:bg-tof-indigo/90'
      : `min-w-[120px] flex-1 rounded-md font-bold md:flex-none ${
          active
            ? 'bg-tof-yellow text-tof-indigo hover:bg-tof-yellow/90'
            : inactiveBtn
        }`;

  return (
    <>
      <div className={`flex flex-wrap gap-3 ${light ? 'justify-center gap-4' : ''}`}>
        <Button
          type="button"
          onClick={() => setSelectedCategory('tennis')}
          variant={selectedCategory === 'tennis' ? 'default' : 'outline'}
          size="lg"
          className={categoryBtn(selectedCategory === 'tennis')}
        >
          {t('webshop.tennis')}
        </Button>
        <Button
          type="button"
          onClick={() => setSelectedCategory('padel')}
          variant={selectedCategory === 'padel' ? 'default' : 'outline'}
          size="lg"
          className={categoryBtn(selectedCategory === 'padel')}
        >
          {t('webshop.padel')}
        </Button>
      </div>

      <div className={light ? 'mt-14 md:mt-16' : 'mt-8'}>
        <ProductList
          products={filteredProducts}
          onAddConfiguredItem={handleAddConfiguredItem}
          light={light}
        />
      </div>

      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] ${
              light
                ? 'border-t border-tof-indigo/10 bg-white'
                : 'border-t-2 border-orange-200 bg-tof-surface'
            }`}
          >
            <div className="container mx-auto px-4 py-3 md:py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <ShoppingCart
                      className={`h-6 w-6 ${light ? 'text-tof-indigo' : 'text-tof-yellow'}`}
                    />
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-tof-yellow text-xs font-bold text-tof-indigo">
                      {cartCount}
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <p className={`text-sm ${light ? 'text-tof-indigo/70' : 'text-white/70'}`}>
                      {t(cartCount === 1 ? 'webshop.itemsInCartOne' : 'webshop.itemsInCartOther', {
                        count: cartCount,
                      })}
                    </p>
                    <p className={`text-xs ${light ? 'text-tof-indigo/60' : 'text-white/60'}`}>
                      {t('webshop.subtotal')}: €{getSubtotal().toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p
                      className={`hidden text-xs sm:block ${
                        light ? 'text-tof-indigo/60' : 'text-white/60'
                      }`}
                    >
                      {t('webshop.totalInclVat')}
                    </p>
                    <p
                      className={`text-xl font-bold md:text-2xl ${
                        light ? 'text-tof-indigo' : 'text-white'
                      }`}
                    >
                      €{getTotal().toFixed(2)}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="rounded-md bg-tof-yellow px-6 font-semibold text-tof-indigo shadow-lg hover:bg-tof-yellow/90 md:px-8"
                  >
                    <Link href="/winkelmand" className="flex items-center gap-2">
                      <span>{t('webshop.checkout')}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebshopContent;
