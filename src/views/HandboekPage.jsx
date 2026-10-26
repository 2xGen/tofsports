'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { allProducts } from '@/data/products';
import { localizeProduct } from '@/data/products.en';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import ProductRulesModal from '@/components/ProductRulesModal';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';

const HandboekPage = () => {
  const { locale, t } = useLocale();
  const [openModal, setOpenModal] = useState(null);

  // Filter products that have detailedRules
  const productsWithRules = allProducts
    .filter((product) => product.detailedRules)
    .map((product) => localizeProduct(product, locale));

  // Get the product for the modal
  const modalProduct = productsWithRules.find(p => p.id === openModal);

  return (
    <div className="min-h-screen bg-tof-indigo pt-20">
      <PageHero image={getPageHeroImage('/handboek')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{t('handboek.heroTitle')}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {t('handboek.heroSubtitle')}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsWithRules.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-tof-surface rounded-2xl shadow-lg border border-white/10 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-white/70 font-medium mb-3">{product.ageGroup}</p>
                <p className="text-white/60 text-sm mb-6">{product.description}</p>
                
                <Button
                  onClick={() => setOpenModal(product.id)}
                  className="w-full bg-tof-yellow hover:bg-tof-yellow/90 text-tof-indigo font-bold flex items-center justify-center gap-2"
                  size="lg"
                >
                  <BookOpen className="h-4 w-4" />
                  {t('webshop.officialRules')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProduct && (
        <ProductRulesModal
          isOpen={!!openModal}
          onClose={() => setOpenModal(null)}
          productName={modalProduct.name}
          rules={modalProduct.detailedRules}
        />
      )}
    </div>
  );
};

export default HandboekPage;
