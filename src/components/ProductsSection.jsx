'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'De Leraren App',
      description: 'Een complete digitale assistent voor tenniscoaches met lesplannen, oefeningen en voortgangsregistratie.',
      color: 'bg-sky-400', // More vibrant blue
    },
    {
      id: 2,
      title: 'Spelers Kaarten',
      description: 'Interactieve oefenkaarten die spelers uitdagen met verschillende technieken en vaardigheden.',
      color: 'bg-rose-400', // More vibrant red/pink
    },
    {
      id: 3,
      title: 'Handboek en Speluitleg',
      description: 'Het complete handboek vol met lesmaterialen, spelvormen en trainingstips volgens de KNLTB methode.',
      color: 'bg-lime-500', // Vibrant tennis green
    }
  ];

  return (
    <section id="part3" className="relative pb-40 overflow-visible">
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
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
         <div className="flex flex-col md:flex-row gap-12 relative">
            
            {/* LEFT SIDE - Sticky Title */}
            <div className="md:w-1/2">
               <div className="sticky top-32 pb-20">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                   className="text-left bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-100/50"
                 >
                   <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                      Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Producten</span>
                   </h2>
                   <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                      Ontdek onze professionele, speelse tools voor de moderne tennisles. Leren was nog nooit zo leuk!
                   </p>
                 </motion.div>
               </div>
            </div>

            {/* RIGHT SIDE - Stacking Cards */}
            <div className="md:w-1/2 flex flex-col gap-8 pb-20 min-h-[150vh]">
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

         </div>
      </div>
    </section>
  );
};

export default ProductsSection;