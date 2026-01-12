'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import ProductRulesModal from '@/components/ProductRulesModal';

const ProductList = ({ products, selectedOptions, setSelectedOptions, handleAddToCart }) => {
  const [expandedProducts, setExpandedProducts] = useState({});

  const toggleProduct = (productId) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleOptionChange = (productId, formatId, optionType, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [formatId]: {
          ...prev[productId]?.[formatId],
          [optionType]: value
        }
      }
    }));
  };

  const getSelectedPackage = (product, format) => {
    const productOptions = selectedOptions[product.id]?.[format.id];
    const packageType = productOptions?.packageType || Object.keys(format.packages)[0];
    return format.packages[packageType];
  };

  const getSelectedExtra = (product, format) => {
    const productOptions = selectedOptions[product.id]?.[format.id];
    return productOptions?.extra || null;
  };

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Geen producten gevonden in deze categorie.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {products.map((product, productIndex) => {
        const isExpanded = expandedProducts[product.id];
        
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: productIndex * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Product Header */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  {product.ageGroup && (
                    <p className="text-sm md:text-base text-gray-500 mb-3">
                      {product.ageGroup}
                    </p>
                  )}
                  {product.description && (
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  {product.detailedRules && (
                    <ProductRulesModal product={product} />
                  )}
                  <Button
                    onClick={() => toggleProduct(product.id)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    {isExpanded ? (
                      <>
                        Verberg formaten <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Bekijk formaten <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Formats */}
            {isExpanded && product.formats && (
              <div className="border-t border-gray-200 bg-gray-50">
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.formats.map((format) => {
                      const selectedPackage = getSelectedPackage(product, format);
                      const selectedExtra = getSelectedExtra(product, format);
                      const totalPrice = selectedPackage.price + (selectedExtra ? selectedExtra.price : 0);

                      return (
                        <div
                          key={format.id}
                          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          {/* Format Image */}
                          {format.image && (
                            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
                              <Image
                                src={format.image}
                                alt={format.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </div>
                          )}

                          {/* Format Info */}
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            {format.name}
                          </h4>
                          {format.players && (
                            <p className="text-sm text-gray-500 mb-4">
                              {format.players}
                            </p>
                          )}

                          {/* Package Selection */}
                          {format.packages && Object.keys(format.packages).length > 1 && (
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Pakket:
                              </label>
                              <select
                                value={selectedOptions[product.id]?.[format.id]?.packageType || Object.keys(format.packages)[0]}
                                onChange={(e) => handleOptionChange(product.id, format.id, 'packageType', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              >
                                {Object.entries(format.packages).map(([key, pkg]) => (
                                  <option key={key} value={key}>
                                    {pkg.label} - €{pkg.price.toFixed(2)}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {/* Extra Options */}
                          {format.extras && format.extras.length > 0 && (
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Extra's:
                              </label>
                              <select
                                value={selectedOptions[product.id]?.[format.id]?.extra?.name || ''}
                                onChange={(e) => {
                                  const extra = format.extras.find(ex => ex.name === e.target.value);
                                  handleOptionChange(product.id, format.id, 'extra', extra || null);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              >
                                <option value="">Geen extra</option>
                                {format.extras.map((extra, idx) => (
                                  <option key={idx} value={extra.name}>
                                    {extra.name} - €{extra.price.toFixed(2)}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {/* Price and Add to Cart */}
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-2xl font-bold text-orange-600">
                                €{totalPrice.toFixed(2)}
                              </span>
                            </div>
                            <Button
                              onClick={() => {
                                const packageType = selectedOptions[product.id]?.[format.id]?.packageType || Object.keys(format.packages)[0];
                                handleAddToCart(product, format, packageType, selectedExtra);
                              }}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                            >
                              <ShoppingBag className="h-4 w-4 mr-2" />
                              In winkelwagen
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductList;
