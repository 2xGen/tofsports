'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, BookOpen, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductRulesModal from './ProductRulesModal';
import ProductConfigureModal from './ProductConfigureModal';
import ProductVideo from './ProductVideo';
import { getProductImageGallery } from '@/data/products';

const formatEuro = (amount) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(amount);

const getDisplayPrice = (product) => {
  const pricing = product.pricing;
  if (!pricing) return null;
  if (pricing.type === 'fixed-bundle') return formatEuro(pricing.price);
  if (pricing.type === 'poster-buttons-optional') {
    return formatEuro(pricing.posterPrice);
  }
  if (pricing.type === 'poster-wizard') {
    return formatEuro(pricing.posterPrice);
  }
  return null;
};

const getPricingSubtitle = (pricing) => {
  if (!pricing) return '';
  if (pricing.type === 'poster-buttons-optional') {
    return pricing.subtitle || 'Kies of je magneetbuttons wilt bijbestellen';
  }
  if (pricing.type === 'poster-wizard') {
    return 'Stel je poster samen: kies spelersaantal en buttons';
  }
  if (pricing.type === 'fixed-bundle') {
    if (pricing.extras?.length) return pricing.label;
    return pricing.subtitle || 'Inclusief poster en magneetbuttons';
  }
  return '';
};

const ProductList = ({ products, onAddConfiguredItem }) => {
  const [openModal, setOpenModal] = useState(null);
  const [configureProduct, setConfigureProduct] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [imageIndexByProduct, setImageIndexByProduct] = useState({});
  const [fullscreenGallery, setFullscreenGallery] = useState(null);
  useEffect(() => {
    if (!fullscreenGallery) return undefined;

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setFullscreenGallery(null);
        return;
      }
      if (fullscreenGallery.images.length <= 1) return;
      if (e.key === 'ArrowRight') {
        setFullscreenGallery((prev) => ({
          ...prev,
          index: (prev.index + 1) % prev.images.length,
        }));
      }
      if (e.key === 'ArrowLeft') {
        setFullscreenGallery((prev) => ({
          ...prev,
          index: (prev.index - 1 + prev.images.length) % prev.images.length,
        }));
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [fullscreenGallery]);
  
  const toggleDescription = (productId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const shiftProductImage = (productId, delta, galleryLength) => {
    setImageIndexByProduct((prev) => {
      const current = prev[productId] ?? 0;
      const next = (current + delta + galleryLength) % galleryLength;
      return { ...prev, [productId]: next };
    });
  };

  const openFullscreenGallery = (product, startIndex = 0) => {
    const images = getProductImageGallery(product);
    if (!images.length) return;
    setFullscreenGallery({
      productName: product.name,
      images,
      index: startIndex,
    });
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
      {products.map((product, productIndex) => {
        const gallery = getProductImageGallery(product);
        const imageIndex = imageIndexByProduct[product.id] ?? 0;
        const currentImage = gallery[imageIndex] ?? gallery[0];
        const productImage = currentImage?.url;
        const displayPrice = getDisplayPrice(product);
        const pricingSubtitle = getPricingSubtitle(product.pricing);
        const hasMultipleImages = gallery.length > 1;
        const isHeroSlide = currentImage?.variant === 'hero';

        return (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: productIndex * 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col p-6 md:p-8">
            <div className="order-1 mb-4 flex flex-col gap-4 md:mb-6 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{product.name}</h2>
                <p className="mt-1 text-base font-medium text-gray-600 md:text-lg">{product.ageGroup}</p>
              </div>
              {product.detailedRules && (
                <Button
                  onClick={() => setOpenModal(product.id)}
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2 text-sm md:w-auto md:whitespace-nowrap md:text-base md:px-6 md:py-3"
                >
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span className="text-center">Officiële Spelregels & Handleiding</span>
                </Button>
              )}
            </div>

            <div className="order-2 mb-6 md:order-4">
              <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line md:text-lg">
                {product.description}
              </p>

              {product.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {product.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-gray-700 md:text-lg">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {product.descriptionLong && (
                <>
                  <AnimatePresence initial={false}>
                    {expandedDescriptions[product.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-base leading-relaxed text-gray-700 whitespace-pre-line md:text-lg">
                          {product.descriptionLong}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    onClick={() => toggleDescription(product.id)}
                    className="mt-3 inline-flex items-center gap-1 text-base font-semibold text-orange-600 hover:text-orange-700"
                  >
                    {expandedDescriptions[product.id] ? 'Lees minder' : 'Lees meer'}
                    {expandedDescriptions[product.id] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </>
              )}
            </div>

            {(productImage || product.videoUrl) && (
              <div
                className={`order-3 mb-6 grid items-stretch gap-4 md:order-2 md:gap-6 ${
                  productImage && product.videoUrl ? 'md:grid-cols-2' : ''
                }`}
              >
                {productImage && (
                  <div className="group relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                    <button
                      type="button"
                      className="relative block w-full cursor-pointer"
                      onClick={() => openFullscreenGallery(product, imageIndex)}
                    >
                      <div className="relative aspect-video w-full">
                        <Image
                          src={productImage}
                          alt={currentImage?.label ? `${product.name} — ${currentImage.label}` : product.name}
                          fill
                          className={
                            isHeroSlide
                              ? 'object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                              : 'object-contain p-4 transition-transform duration-300 group-hover:scale-[1.01]'
                          }
                          priority={productIndex === 0 && imageIndex === 0}
                          loading={productIndex === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
                          sizes="(max-width: 768px) 90vw, 640px"
                          quality={90}
                          unoptimized
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                        <div className="rounded bg-black/50 px-3 py-1 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                          Klik om te vergroten
                        </div>
                      </div>
                    </button>

                    {hasMultipleImages && (
                      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/55 px-2 py-1 text-white backdrop-blur-sm">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            shiftProductImage(product.id, -1, gallery.length);
                          }}
                          className="rounded-full p-1 hover:bg-white/20"
                          aria-label="Vorige afbeelding"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="min-w-[3rem] text-center text-xs font-medium">
                          {imageIndex + 1} / {gallery.length}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            shiftProductImage(product.id, 1, gallery.length);
                          }}
                          className="rounded-full p-1 hover:bg-white/20"
                          aria-label="Volgende afbeelding"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}

                    {currentImage?.label && imageIndex > 0 && (
                      <div className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {currentImage.label}
                      </div>
                    )}
                  </div>
                )}

                {product.videoUrl && (
                  <ProductVideo videoUrl={product.videoUrl} title={product.name} />
                )}
              </div>
            )}

            {product.pricing && (
              <div className="order-4 flex flex-col gap-4 rounded-xl border border-gray-200 bg-gradient-to-r from-orange-50 to-amber-50 p-5 md:order-3 md:flex-row md:items-center md:justify-between md:p-6">
                <div className="text-left">
                  {displayPrice && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-gray-900 md:text-4xl">{displayPrice}</span>
                      <span className="text-sm font-medium text-gray-500">incl. btw</span>
                    </div>
                  )}
                  {pricingSubtitle && (
                    <p className="mt-1 max-w-md text-sm text-gray-600 md:text-base">{pricingSubtitle}</p>
                  )}
                </div>
                <Button
                  onClick={() => setConfigureProduct(product)}
                  className="w-full shrink-0 bg-orange-500 font-bold text-white shadow-sm hover:bg-orange-600 md:w-auto md:px-8"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Samenstellen & bestellen
                </Button>
              </div>
            )}
          </div>
        </motion.div>
        );
      })}

      <ProductConfigureModal
        product={configureProduct}
        isOpen={Boolean(configureProduct)}
        onClose={() => setConfigureProduct(null)}
        onAddToCart={onAddConfiguredItem}
      />

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

      {/* Fullscreen Image Gallery */}
      <AnimatePresence>
        {fullscreenGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setFullscreenGallery(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenGallery(null);
              }}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Sluiten"
            >
              <X className="h-6 w-6" />
            </button>

            {fullscreenGallery.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenGallery((prev) => ({
                      ...prev,
                      index: (prev.index - 1 + prev.images.length) % prev.images.length,
                    }));
                  }}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
                  aria-label="Vorige afbeelding"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenGallery((prev) => ({
                      ...prev,
                      index: (prev.index + 1) % prev.images.length,
                    }));
                  }}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
                  aria-label="Volgende afbeelding"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              key={fullscreenGallery.images[fullscreenGallery.index]?.url}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-full w-full max-h-[90vh] max-w-7xl flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative h-full w-full ${
                  fullscreenGallery.images[fullscreenGallery.index]?.variant === 'poster'
                    ? 'max-w-md md:max-w-lg'
                    : 'max-w-7xl'
                }`}
              >
                <Image
                  src={fullscreenGallery.images[fullscreenGallery.index].url}
                  alt={fullscreenGallery.productName}
                  fill
                  className="object-contain"
                  quality={100}
                  unoptimized
                  priority
                />
              </div>
              <div className="mt-4 text-center text-white">
                {fullscreenGallery.images[fullscreenGallery.index]?.label && (
                  <p className="text-sm text-white/80">
                    {fullscreenGallery.images[fullscreenGallery.index].label}
                  </p>
                )}
                {fullscreenGallery.images.length > 1 && (
                  <p className="mt-1 text-xs text-white/60">
                    {fullscreenGallery.index + 1} / {fullscreenGallery.images.length}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductList;
