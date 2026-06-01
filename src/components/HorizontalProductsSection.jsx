'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const pillarCards = [
  {
    id: 'speelmomenten',
    title: 'Meer speelmomenten',
    description:
      'Kinderen ontwikkelen zich sneller wanneer ze vaker spelen dan alleen tijdens de les. De TOF Methode stimuleert jeugdspelers om vaker de baan op te gaan en actief deel te nemen aan clubactiviteiten.',
    color: 'bg-sky-500',
    borderColor: 'border-sky-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/waarom%20tof%20500.jpg',
    imageAlt: 'Jeugd speelt en traint op de club',
  },
  {
    id: 'betrokkenheid',
    title: 'Meer betrokkenheid',
    description:
      'Door spelvormen, uitdagingen en TOF Score worden jeugdspelers actiever betrokken bij de vereniging en ontstaat er meer verbinding tussen spelers, trainers en de club.',
    color: 'bg-violet-500',
    borderColor: 'border-violet-500',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/waarom%20tof%20500kb.jpg',
    imageAlt: 'Kinderen zijn actief betrokken bij de club',
  },
  {
    id: 'voorbereiding',
    title: 'Minder voorbereiding',
    description:
      'Met direct inzetbare formats, materialen en tools beschikken trainers altijd over voldoende inspiratie en structuur voor aantrekkelijke trainingen en activiteiten.',
    color: 'bg-teal-400',
    borderColor: 'border-teal-400',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Waarom%20TOF.jpg',
    imageAlt: 'Trainers gebruiken TOF formats op de vereniging',
  },
];

const HorizontalProductsSection = () => {
  return (
    <section id="part-waarom" className="relative overflow-visible pb-40">
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-sky-50 via-indigo-50 to-purple-50" />

      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="relative flex flex-col gap-12 md:flex-row">
          {/* Left on desktop — Waarom TOF Methode (sticky intro) */}
          <div className="md:w-1/2">
            <div className="sticky top-28 pb-20 md:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2.5rem] border border-indigo-100/50 bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl md:p-10"
              >
                <h2 className="mb-5 text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">
                  Waarom werkt de{' '}
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    TOF Methode?
                  </span>
                </h2>
                <p className="text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
                  De TOF Methode helpt verenigingen om jeugdspelers vaker te laten spelen, deel te
                  nemen aan trainingen, wedstrijden en clubactiviteiten, en trainers te
                  ondersteunen met praktische, direct inzetbare oplossingen.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right on desktop — 3 pillar cards */}
          <div className="flex flex-col gap-16 pb-32 md:w-1/2 md:gap-24 md:pb-40">
            {pillarCards.map((product, index) => {
              const topOffset =
                index === 0 ? 'top-28' : index === 1 ? 'top-36' : 'top-44';
              return (
                <div
                  key={product.id}
                  className={`sticky ${topOffset} ${index < pillarCards.length - 1 ? 'pb-8 md:pb-12' : ''}`}
                  style={{ zIndex: index + 1 }}
                >
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProductsSection;
