'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductRulesModal from './ProductRulesModal';

const ProductList = ({ products, selectedOptions, setSelectedOptions, handleAddToCart }) => {
  const [openModal, setOpenModal] = useState(null);
  const [expandedProducts, setExpandedProducts] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  
  // Initialize expanded state for desktop (always expanded), collapsed on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, expand all products by default
      // On mobile, keep them collapsed (don't set, so they're undefined/false)
      if (!mobile) {
        const allExpanded = {};
        products.forEach(product => {
          allExpanded[product.id] = true;
        });
        setExpandedProducts(allExpanded);
      } else {
        // On mobile, ensure all are collapsed (set to false or clear)
        setExpandedProducts({});
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [products]);
  
  const toggleProduct = (productId) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleSelectOption = (productId, formatId, packageType, extra = null) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: { formatId, packageType, extra }
    }));
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Geen producten gevonden.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {products.map((product, productIndex) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: productIndex * 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* Product Header */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                {/* Clickable header on mobile for expand/collapse */}
                <button
                  onClick={() => toggleProduct(product.id)}
                  className="md:pointer-events-none w-full text-left flex items-start justify-between gap-2 md:block"
                >
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 font-medium mb-1">{product.ageGroup}</p>
                    <p className="text-gray-500 text-sm">{product.description}</p>
                  </div>
                  {/* Chevron icon for mobile */}
                  <div className="md:hidden flex-shrink-0 mt-1">
                    {expandedProducts[product.id] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-auto">
                {product.detailedRules && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenModal(product.id);
                    }}
                    variant="outline"
                    className="flex items-center justify-center gap-2 w-full md:w-auto md:whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                  >
                    <BookOpen className="h-4 w-4 flex-shrink-0" />
                    <span className="text-center">Officiële Spelregels & Handleiding</span>
                  </Button>
                )}
                {/* Count button - shows number of formats */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProduct(product.id);
                  }}
                  variant="default"
                  className="flex items-center justify-center gap-2 w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
                >
                  <span>Bekijk producten</span>
                  <span className="bg-white text-blue-600 rounded-full px-2 py-0.5 text-xs font-bold min-w-[24px]">
                    {product.formats.length}
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Content - Collapsible on mobile, always visible on desktop */}
          <AnimatePresence>
            {(isMobile ? expandedProducts[product.id] === true : true) && (
              <motion.div
                initial={isMobile ? { height: 0, opacity: 0 } : false}
                animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                exit={isMobile ? { height: 0, opacity: 0 } : false}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 overflow-hidden md:!block"
              >
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.formats.map((format, formatIndex) => (
                <div
                  key={format.id}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  {/* Format Image */}
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gray-100" style={{ minHeight: '200px' }}>
                    {format.image ? (
                      <>
                        <Image
                          src={format.image}
                          alt={`${product.name} - ${format.name}`}
                          fill
                          className="object-contain p-2"
                          priority={productIndex === 0 && formatIndex === 0}
                          loading={productIndex === 0 && formatIndex === 0 ? 'eager' : 'lazy'}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={85}
                          unoptimized={true}
                          style={{ objectFit: 'contain' }}
                        />
                        {/* Loading placeholder */}
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{ display: 'none' }} id={`loading-${product.id}-${format.id}`} />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>Geen afbeelding</span>
                      </div>
                    )}
                  </div>

                  {/* Format Info */}
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {format.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{format.players}</p>

                  {/* Package Options */}
                  <div className="space-y-3 mb-4">
                    {Object.entries(format.packages).map(([packageType, packageInfo]) => (
                      <div key={packageType} className="space-y-2">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`${product.id}-${format.id}`}
                            checked={selectedOptions[product.id]?.formatId === format.id && 
                                    selectedOptions[product.id]?.packageType === packageType}
                            onChange={() => handleSelectOption(product.id, format.id, packageType)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              {packageInfo.label}
                            </div>
                            <div className="text-lg font-bold text-blue-600">
                              €{packageInfo.price.toFixed(2)}
                            </div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Extra Options (if available) */}
                  {format.extras && format.extras.length > 0 && (
                    <div className="space-y-2 mb-4 pt-4 border-t border-gray-300">
                      <p className="text-sm font-medium text-gray-700 mb-2">Extra opties:</p>
                      {format.extras.map((extra, extraIndex) => (
                        <label key={extraIndex} className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedOptions[product.id]?.formatId === format.id && 
                                      selectedOptions[product.id]?.extra?.name === extra.name}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  handleSelectOption(product.id, format.id, Object.keys(format.packages)[0], extra);
                                } else {
                                  handleSelectOption(product.id, format.id, Object.keys(format.packages)[0], null);
                                }
                              }}
                            />
                            <span className="text-sm text-gray-700">{extra.name}</span>
                          </div>
                          <span className="font-bold text-gray-900">€{extra.price.toFixed(2)}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <Button
                    onClick={() => {
                      const selected = selectedOptions[product.id];
                      if (selected && selected.formatId === format.id) {
                        handleAddToCart(product, format, selected.packageType, selected.extra);
                      } else {
                        // Default to first package if nothing selected
                        const defaultPackage = Object.keys(format.packages)[0];
                        handleAddToCart(product, format, defaultPackage, null);
                      }
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    size="lg"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    In winkelwagen
                  </Button>
                </div>
              ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Modals for each product with detailed rules */}
      {products.map((product) => {
        if (!product.detailedRules) return null;
        return (
          <ProductRulesModal
            key={`modal-${product.id}`}
            isOpen={openModal === product.id}
            onClose={() => setOpenModal(null)}
            productName={product.name}
            rules={product.detailedRules}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
