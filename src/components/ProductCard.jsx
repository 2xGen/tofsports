'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductCard = ({ product, index }) => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      title: "🚧 Deze functie is nog niet beschikbaar",
      description: "Vraag het in je volgende prompt aan! 🚀",
      duration: 3000,
    });
  };

  // Check if this is the "Spelen", "Leren", "Sparen", "TOF Score", "TOF Producten", or "TOF Magneetposters" product
  const isLeren = product.title === 'Leren' || product.id === 2;
  const isTofScore = product.title === 'TOF Score' || product.id === 'h-1';
  const isTofProducten = product.title === 'TOF Producten' || product.id === 'h-2';
  const isSparen = product.title === 'Sparen' || product.id === 3;
  const isSpelen = product.title === 'Spelen' || product.id === 1;
  const isMagneetposters = product.title === 'TOF Magneetposters' || product.id === 'h-3';

  // Determine the link URL
  let linkUrl = null;
  if (isLeren) {
    linkUrl = '/leren';
  } else if (isTofScore) {
    linkUrl = '/tof-score';
  } else if (isTofProducten) {
    linkUrl = '/webshop';
  } else if (isSparen) {
    linkUrl = '/sparen';
  } else if (isSpelen) {
    linkUrl = '/spelen';
  } else if (isMagneetposters) {
    linkUrl = '/magneetposters';
  }

  // Simplified Card - logic for sticking is now handled by parent wrapper in ProductsSection
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-5%" }}
      className="w-full"
    >
      <div className={`${product.color} rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col transform transition-transform duration-300 hover:scale-[1.01] border-4 border-white/20`}>
        <div>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {product.title}
          </h3>
          <div className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-6">
            {product.description.split('\n').map((line, idx) => (
              <div key={idx} className="mb-2">
                {line}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          {linkUrl ? (
            <Button
              asChild
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-2xl shadow-lg border-none w-full md:w-auto"
            >
              <Link href={linkUrl}>
                Meer informatie
              </Link>
            </Button>
          ) : (
            <Button
              onClick={handleLearnMore}
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-2xl shadow-lg border-none w-full md:w-auto"
            >
              Meer informatie
            </Button>
          )}
          <Button
            asChild
            variant="secondary"
            className="bg-orange-500 text-white hover:bg-orange-600 font-bold text-lg py-6 px-8 rounded-2xl shadow-lg border-none w-full md:w-auto"
          >
            <Link href="/webshop">
              Bekijk webshop
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;