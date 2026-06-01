'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, X } from 'lucide-react';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import MediaGalleryItem, { MediaSpinner } from '@/components/MediaGalleryItem';
import { getPageHeroImage } from '@/data/heroSlides';
import { mediaItems } from '@/data/media';

const MediaPage = () => {
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
            <PageHeroTitle heroInView={heroInView}>Media</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Foto&apos;s en beelden van TOF op de club.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
            <div className="flex items-start gap-4">
              <Images className="mt-0.5 h-8 w-8 shrink-0 text-orange-500" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">TOF in beeld</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Een selectie van sfeerbeelden van jeugdprogramma&apos;s, formats en materialen op
                  verenigingen. De galerij wordt aangevuld met nieuwe foto&apos;s.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {!allLoaded && (
          <p className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <MediaSpinner size="md" />
            <span>
              Afbeeldingen laden ({Math.min(activeLoadIndex + 1, mediaItems.length)} van{' '}
              {mediaItems.length})…
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
              aria-label="Sluiten"
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
