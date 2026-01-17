'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import ProductRulesModal from '@/components/ProductRulesModal';

const HandboekPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const [openModal, setOpenModal] = useState(null);

  // Filter products that have detailedRules
  const productsWithRules = allProducts.filter(product => product.detailedRules);

  // Get the product for the modal
  const modalProduct = productsWithRules.find(p => p.id === openModal);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Matching Webshop Style */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background - Static */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))',
          }}
        />

        <div className="container mx-auto px-4 relative z-30 py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            {/* Main Heading - zoomInRight animation */}
            <motion.h1
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-5xl md:text-7xl font-bold text-gray-800 relative z-30"
            >
              Speluitleg
            </motion.h1>

            {/* Subtitle - fadeIn animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Officiële spelregels en handleidingen voor alle TOF producten
            </motion.p>
          </div>
        </div>

        {/* Curved Shape Divider - negative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

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
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 font-medium mb-3">{product.ageGroup}</p>
                <p className="text-gray-500 text-sm mb-6">{product.description}</p>
                
                <Button
                  onClick={() => setOpenModal(product.id)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center justify-center gap-2"
                  size="lg"
                >
                  <BookOpen className="h-4 w-4" />
                  Officiële Spelregels & Handleiding
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

