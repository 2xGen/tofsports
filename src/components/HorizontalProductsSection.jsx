'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { KENNISBANK_PILLAR_CARDS } from '@/data/kennisbankGuides';

const MOBILE_STICKY_TOPS = ['top-28', 'top-36', 'top-44'];

const HorizontalProductsSection = () => {
  return (
    <section id="part-waarom" className="relative overflow-visible pb-20 md:pb-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-sky-50 via-indigo-50 to-purple-50" />

      <div className="container relative z-10 mx-auto px-4 pt-12 md:pt-14">
        <div className="relative flex flex-col gap-12 md:flex-row">
          <div className="md:w-1/2">
            <div className="sticky top-28 pb-20 md:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2.5rem] border border-indigo-100/50 bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl md:p-10"
              >
                <h2 className="mb-5 text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">
                  Hoe{' '}
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    TOF Sports
                  </span>{' '}
                  verenigingen helpt groeien
                </h2>
                <p className="text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
                  Met TOF Sports helpen we tennis- en padelverenigingen om het jeugdprogramma op
                  scherp te zetten, spelers meer betrokken te houden bij de vereniging en met plezier te
                  blijven ontwikkelen. Trainers ondersteunen we met praktische, direct inzetbare tools en
                  spelvormen.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-16 pb-32 md:w-1/2 md:gap-0 md:pb-0">
            {KENNISBANK_PILLAR_CARDS.map((product, index) => (
              <div
                key={product.id}
                className={`sticky ${MOBILE_STICKY_TOPS[index]} md:static ${index < KENNISBANK_PILLAR_CARDS.length - 1 ? 'pb-8 md:pb-0' : ''} md:min-h-[calc(100dvh-3rem)]`}
                style={{ zIndex: index + 1 }}
              >
                <div className="md:sticky md:top-32 md:h-[calc(100dvh-9rem)]">
                  <ProductCard product={{ ...product, fullHeight: true }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProductsSection;
