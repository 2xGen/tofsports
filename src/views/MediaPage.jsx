'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import MediaGalleryItem, { MediaSpinner } from '@/components/MediaGalleryItem';
import ProductVideo from '@/components/ProductVideo';
import WarmupLiedCard from '@/components/WarmupLiedCard';
import { getPageHeroImage } from '@/data/heroSlides';
import { mediaItems } from '@/data/media';
import { allProducts } from '@/data/products';
import { useLocale } from '@/i18n/LocaleProvider';
import { ot } from '@/i18n/content/overTof';

const productVideos = allProducts.filter((product) => product.videoUrl);

const MediaPage = () => {
  const { t, locale } = useLocale();
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
    <div className="min-h-screen bg-white pt-20">
      <PageHero
        image={getPageHeroImage('/media')}
        minHeight="40vh"
        showWave={false}
        imageOnly
        objectPosition="object-[center_28%]"
      />

      <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        <motion.section
          id="tof-warmup-lied"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16"
        >
          <WarmupLiedCard
            titleClassName="font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl"
            subtitleClassName="mt-4 max-w-2xl text-base leading-relaxed text-tof-indigo md:text-lg"
          />
        </motion.section>

        {productVideos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 border-t border-tof-indigo/50 pt-14 md:mb-16 md:pt-16"
          >
            <div className="mb-8 text-center md:mb-10">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl">
                {t('media.videosTitle')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-tof-indigo md:text-lg">
                {t('media.videosSubtitle')}
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productVideos.map((product) => (
                <li key={`${product.category}-${product.id}`} className="overflow-hidden bg-[#F3F3F5]">
                  <ProductVideo videoUrl={product.videoUrl} title={product.name} light />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-tof-indigo">{product.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-tof-indigo/70">
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
          className="mb-8 border-t border-tof-indigo/50 pt-14 md:mb-10 md:pt-16"
        >
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl">
            {t('media.photosTitle')}
          </h2>
        </motion.section>

        {!allLoaded && (
          <p className="mb-4 flex items-center gap-2 text-sm text-tof-indigo/60">
            <MediaSpinner size="md" light />
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
                alt={ot(locale, item.alt)}
                spinnerLabel={t('common.loading')}
                index={index}
                activeLoadIndex={activeLoadIndex}
                onLoadComplete={handleLoadComplete}
                onOpen={openLightbox}
                light
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
            aria-label={ot(locale, lightboxItem.alt)}
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
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                {!lightboxReady && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <MediaSpinner size="lg" />
                  </div>
                )}
                <Image
                  src={lightboxItem.src}
                  alt={ot(locale, lightboxItem.alt)}
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
