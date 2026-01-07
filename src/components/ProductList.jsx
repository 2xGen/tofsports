'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductRulesModal from './ProductRulesModal';

const ProductList = ({ products, selectedOptions, setSelectedOptions, handleAddToCart }) => {
  const [openModal, setOpenModal] = useState(null);

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
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 font-medium mb-1">{product.ageGroup}</p>
                <p className="text-gray-500 text-sm">{product.description}</p>
              </div>
              {product.detailedRules && (
                <Button
                  onClick={() => setOpenModal(product.id)}
                  variant="outline"
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <BookOpen className="h-4 w-4" />
                  Officiële Spelregels & Handleiding
                </Button>
              )}
            </div>
          </div>

          {/* Product Content */}
          <div className="border-t border-gray-200 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.formats.map((format, formatIndex) => (
                <div
                  key={format.id}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  {/* Format Image */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-white">
                    <Image
                      src={format.image}
                      alt={`${product.name} - ${format.name}`}
                      fill
                      className="object-contain"
                      loading={productIndex === 0 && formatIndex === 0 ? 'eager' : 'lazy'}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
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
