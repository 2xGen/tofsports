'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/i18n/LocaleProvider';

const MOBILE_STICKY_TOPS = ['top-28', 'top-36', 'top-44'];

const ProductsSection = () => {
  const { t } = useLocale();

  const products = [
    {
      id: 'tennis',
      title: t('home.productsSection.tennisPackage'),
      color: 'bg-tof-blue',
      borderColor: 'border-tof-blue',
      image:
        'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tennis%20pakket.jpg',
      imageAlt: 'TOF Tennispakket op de tennisclub',
      imageObjectPosition: 'center 40%',
      imagePositionClass: 'scale-[1.2] -translate-y-[12%]',
      imageLayout: 'split',
      linkUrl: '/pakketten',
      ctaText: t('home.productsSection.viewPackages'),
    },
    {
      id: 'padel',
      title: t('home.productsSection.padelPackage'),
      color: 'bg-tof-orange',
      borderColor: 'border-tof-orange',
      image:
        'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Padel%20pakket.jpg',
      imageAlt: 'TOF Padelpakket op de padelclub',
      imageLayout: 'split',
      linkUrl: '/pakketten',
      ctaText: t('home.productsSection.viewPackages'),
    },
    {
      id: 'combi',
      title: t('home.productsSection.combiPackage'),
      color: 'bg-tof-green',
      borderColor: 'border-tof-green',
      image:
        'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Combi%20pakket.jpg',
      imageAlt: 'TOF Tennis- en padelpakket',
      imageLayout: 'split',
      linkUrl: '/pakketten',
      ctaText: t('home.productsSection.viewPackages'),
    },
  ];

  return (
    <section id="part3" className="relative overflow-visible pb-20 md:pb-32">
      {/* Vibrant Friendly Background */}
      <div className="absolute inset-0 z-0 bg-tof-orange/5" />
      
      <div className="container relative z-10 mx-auto px-4 pt-12 md:pt-14">
         <div className="relative flex flex-col gap-12 md:flex-row">
            
            {/* RIGHT on desktop — Sticky intro (first on mobile) */}
            <div className="order-1 md:order-2 md:w-1/2">
               <div className="sticky top-28 pb-20 md:top-32">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                   className="text-left bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-tof-orange/20"
                 >
                   <h2 className="text-3xl md:text-4xl font-black text-tof-indigo mb-5 leading-tight tracking-tight">
                      {t('home.productsSection.titlePrefix')}{' '}
                      <span className="text-tof-orange">
                        {t('home.productsSection.titleHighlight')}
                      </span>
                   </h2>
                   <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-4">
                      {t('home.productsSection.body1')}
                   </p>
                   <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                      {t('home.productsSection.body2')}
                   </p>
                   <p className="text-lg md:text-xl font-bold text-tof-indigo mb-6">
                      {t('home.productsSection.question')}
                   </p>
                   <Button
                     asChild
                     className="bg-tof-indigo text-white font-bold text-base md:text-lg py-6 px-8 rounded-2xl shadow-lg hover:bg-tof-indigo/90 w-full md:w-auto"
                   >
                     <Link href="/pakketten">{t('home.productsSection.viewPackages')}</Link>
                   </Button>
                 </motion.div>
               </div>
            </div>

            {/* LEFT — mobile sticky stack / desktop full-height sticky cards */}
            <div className="order-2 flex flex-col gap-16 pb-32 md:order-1 md:w-1/2 md:gap-0 md:pb-0">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`sticky ${MOBILE_STICKY_TOPS[index]} md:static ${index < products.length - 1 ? 'pb-8 md:pb-0' : ''} md:min-h-[calc(100dvh-3rem)]`}
                  style={{ zIndex: index + 1 }}
                >
                  <div className="md:sticky md:top-32 md:h-[calc(100dvh-9rem)]">
                    <ProductCard product={{ ...product, fullHeight: true, hideDescription: true }} />
                  </div>
                </div>
              ))}
            </div>

         </div>
      </div>
    </section>
  );
};

export default ProductsSection;