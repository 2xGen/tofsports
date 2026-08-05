'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, PlayCircle, X } from 'lucide-react';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import MediaGalleryItem, { MediaSpinner } from '@/components/MediaGalleryItem';
import ProductVideo from '@/components/ProductVideo';
import WarmupLiedCard from '@/components/WarmupLiedCard';
import { getPageHeroImage } from '@/data/heroSlides';
import { mediaItems } from '@/data/media';
import { allProducts } from '@/data/products';
import { useLocale } from '@/i18n/LocaleProvider';

const productVideos = allProducts.filter((product) => product.videoUrl);

const MediaPage = () => {
  const { t } = useLocale();
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxReady, setLightboxReady] = useState(false);
  const [activeLoadIndex, setActiveLoadIndex] = useState(0);

  const handleLoadComplete = useCallback((index) => {
    setActiveLoadIndex((prev) => {
      if (index !== prev) return prev;
      return index + 1;
    });
  }, []);

  const openLightbox = (item) => {
    setLightboxReady(false);
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
    setLightboxReady(false);
  };

  const allLoaded = activeLoadIndex >= mediaItems.length;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/media')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{t('media.title')}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {t('media.subtitle')}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <motion.section
          id="tof-warmup-lied"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
            <WarmupLiedCard />
          </div>
        </motion.section>

        {productVideos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <PlayCircle className="h-7 w-7 shrink-0 text-orange-500" aria-hidden />
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{t('media.videosTitle')}</h2>
            </div>
            <p className="mb-6 max-w-2xl text-sm text-gray-600 md:text-base">
              {t('media.videosSubtitle')}
            </p>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productVideos.map((product) => (
                <li
                  key={`${product.category}-${product.id}`}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <ProductVideo videoUrl={product.videoUrl} title={product.name} />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-orange-600">
                      {product.category === 'padel' ? t('packages.padel') : t('packages.tennis')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <Images className="h-7 w-7 shrink-0 text-orange-500" aria-hidden />
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{t('media.photosTitle')}</h2>
          </div>
        </motion.section>

        {!allLoaded && (
          <p className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <MediaSpinner size="md" />
            <span>
              {t('media.loadingImages', {
                current: Math.min(activeLoadIndex + 1, mediaItems.length),
                total: mediaItems.length,
              })}
            </span>
          </p>
        )}

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index < activeLoadIndex ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <MediaGalleryItem
                item={item}
                index={index}
                activeLoadIndex={activeLoadIndex}
                onLoadComplete={handleLoadComplete}
                onOpen={openLightbox}
              />
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-24 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:top-8"
              aria-label={t('common.close')}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.figure
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/40">
                {!lightboxReady && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <MediaSpinner size="lg" />
                  </div>
                )}
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  fill
                  sizes="100vw"
                  className={`object-contain transition-opacity duration-300 ${
                    lightboxReady ? 'opacity-100' : 'opacity-0'
                  }`}
                  quality={90}
                  onLoad={() => setLightboxReady(true)}
                  onError={() => setLightboxReady(true)}
                />
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaPage;
