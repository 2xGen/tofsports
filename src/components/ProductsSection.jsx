'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'tennis',
    title: 'Tennispakket',
    color: 'bg-sky-500',
    borderColor: 'border-sky-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tennis%20pakket.jpg',
    imageAlt: 'TOF Tennispakket op de tennisclub',
    imageObjectPosition: 'center 40%',
    imagePositionClass: 'scale-[1.2] -translate-y-[12%]',
    imageLayout: 'split',
    linkUrl: '/pakketten',
    ctaText: 'Bekijk de pakketten',
  },
  {
    id: 'padel',
    title: 'Padelpakket',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Padel%20pakket.jpg',
    imageAlt: 'TOF Padelpakket op de padelclub',
    imageLayout: 'split',
    linkUrl: '/pakketten',
    ctaText: 'Bekijk de pakketten',
  },
  {
    id: 'combi',
    title: 'Tennis- en padelpakket',
    color: 'bg-emerald-600',
    borderColor: 'border-emerald-600',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20Combi%20pakket.jpg',
    imageAlt: 'TOF Tennis- en padelpakket',
    imageLayout: 'split',
    linkUrl: '/pakketten',
    ctaText: 'Bekijk de pakketten',
  },
];

const MOBILE_STICKY_TOPS = ['top-28', 'top-36', 'top-44'];

const ProductsSection = () => {

  return (
    <section id="part3" className="relative overflow-visible pb-20 md:pb-32">
      {/* Vibrant Friendly Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50"
           style={{ 
             backgroundImage: `
                radial-gradient(circle at 10% 20%, rgba(255, 165, 0, 0.05) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 20%),
                linear-gradient(to bottom right, #FFFBEB, #FFF7ED)
             `
           }}>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pt-12 md:pt-14">
         <div className="relative flex flex-col gap-12 md:flex-row">
            
            {/* RIGHT on desktop — Sticky intro (first on mobile) */}
            <div className="order-1 md:order-2 md:w-1/2">
               <div className="sticky top-28 pb-20 md:top-32">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                   className="text-left bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-100/50"
                 >
                   <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight tracking-tight">
                      Maak je jeugdprogramma{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                        sterker.
                      </span>
                   </h2>
                   <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-4">
                      Onze Plug &amp; Play-pakketten helpen je om het jeugdprogramma te versterken en meer structuur, speelmomenten en betrokkenheid te creëren.
                   </p>
                   <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                      Met TOF Sports voeg je spelvormen, scores en praktische tools toe die direct inzetbaar zijn op de club.
                   </p>
                   <p className="text-lg md:text-xl font-bold text-gray-900 mb-6">
                      Welke oplossing past bij jou?
                   </p>
                   <Button
                     asChild
                     className="bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] text-white font-bold text-base md:text-lg py-6 px-8 rounded-2xl shadow-lg hover:from-[#2A1F5C] hover:to-[#4A3F8A] w-full md:w-auto"
                   >
                     <Link href="/pakketten">Bekijk de pakketten</Link>
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