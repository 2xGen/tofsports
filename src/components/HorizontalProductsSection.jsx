'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const HorizontalProductsSection = () => {
  const products = [
    {
      id: 'h-1',
      title: 'TOF Score',
      description: 'Houd scores en progressie digitaal bij. Een onmisbare tool voor het organiseren van interne competities en toernooien.',
      color: 'bg-violet-500', // Vibrant purple
    },
    {
      id: 'h-2',
      title: 'TOF Producten',
      description: 'Van vier op een rij tot kraak de code, alles om je trainingen leuker en effectiever te maken.',
      color: 'bg-amber-400', // Warm yellow/orange
    },
    {
      id: 'h-3',
      title: 'TOF Magneetposters',
      description: 'Grootformaat magneetposters (60x90 cm) voor tennis- en padel-formats. Snel wisselbaar op een (rijdend) whiteboard voor professionele toernooi-organisatie.',
      color: 'bg-teal-400', // Fresh teal
    }
  ];

  return (
    <section className="relative pb-40 overflow-visible">
      {/* Playful Gradient Background - Reversed flow from previous section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-sky-50 via-indigo-50 to-purple-50"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
         <div className="flex flex-col md:flex-row gap-12 relative">
            
            {/* LEFT SIDE - Stacking Cards (Desktop) / BOTTOM (Mobile) */}
            <div className="md:w-1/2 flex flex-col gap-8 pb-20 min-h-[150vh] order-2 md:order-1">
              {products.map((product, index) => {
                // Add spacing between stacked cards - each card sticks slightly lower
                const topOffset = index === 0 ? 'top-32' : index === 1 ? 'top-40' : 'top-48';
                return (
                  <div 
                    key={product.id} 
                    className={`sticky ${topOffset}`}
                    style={{
                      zIndex: index + 1
                    }}
                  >
                    <ProductCard product={product} index={index} />
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE - Sticky Title (Desktop) / TOP (Mobile) */}
            <div className="md:w-1/2 order-1 md:order-2">
               <div className="sticky top-32 pb-20">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                   className="text-left bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-indigo-100/50"
                 >
                   <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                      TOF Tennis <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">next level</span>
                   </h2>
                   <p className="text-lg text-gray-600 leading-relaxed font-medium">
                      Staat jouw basis en wil je met jouw tennisorganisatie of vereniging naar een next level? Kijk dan verder met welke producten we jou kunnen ondersteunen en onderscheid je hiermee ten opzichte van andere verenigingen. Maak jouw jeugdprogramma nog leuker, leerzamer en zichtbaarder voor iedereen.
                   </p>
                 </motion.div>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
};

export default HorizontalProductsSection;