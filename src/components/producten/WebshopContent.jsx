'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

const WebshopContent = () => {
  const { toast } = useToast();
  const { addToCart, getCartCount, getSubtotal, getTotal, isLoaded } = useCart();
  const cartCount = isLoaded ? getCartCount() : 0;
  const [selectedCategory, setSelectedCategory] = useState('tennis');

  const filteredProducts = getProductsByCategory(selectedCategory);

  const handleAddConfiguredItem = (item) => {
    addToCart(item);

    toast({
      title: 'Toegevoegd aan winkelwagen',
      description: `${item.productName} — ${item.packageLabel} (${formatEuro(item.price)}) zit nu in je mandje!`,
      duration: 3000,
    });
  };

  const formatEuro = (amount) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(amount);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          onClick={() => setSelectedCategory('tennis')}
          variant={selectedCategory === 'tennis' ? 'default' : 'outline'}
          size="lg"
          className={`min-w-[120px] flex-1 font-bold md:flex-none ${
            selectedCategory === 'tennis'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Tennis
        </Button>
        <Button
          type="button"
          onClick={() => setSelectedCategory('padel')}
          variant={selectedCategory === 'padel' ? 'default' : 'outline'}
          size="lg"
          className={`min-w-[120px] flex-1 font-bold md:flex-none ${
            selectedCategory === 'padel'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Padel
        </Button>
      </div>

      <div className="mt-8">
        <ProductList
          products={filteredProducts}
          onAddConfiguredItem={handleAddConfiguredItem}
        />
      </div>

      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-orange-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
          >
            <div className="container mx-auto px-4 py-3 md:py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6 text-orange-500" />
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {cartCount}
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-600">
                      {cartCount} {cartCount === 1 ? 'product' : 'producten'} in je mandje
                    </p>
                    <p className="text-xs text-gray-500">Subtotaal: €{getSubtotal().toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="hidden text-xs text-gray-500 sm:block">Totaal incl. BTW</p>
                    <p className="text-xl font-bold text-gray-900 md:text-2xl">
                      €{getTotal().toFixed(2)}
                    </p>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-500 px-6 font-bold text-white shadow-lg hover:bg-orange-600 md:px-8"
                  >
                    <Link href="/winkelmand" className="flex items-center gap-2">
                      <span className="hidden sm:inline">Afrekenen</span>
                      <span className="sm:hidden">Checkout</span>
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
