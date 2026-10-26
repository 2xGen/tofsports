'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { HERO_WAVE_PATH } from '@/data/heroSlides';

/**
 * Subpage hero: photo + homepage overlay + white wave on top.
 * Pass `children` as render prop: (heroInView) => ReactNode
 */
const PageHero = ({
  image,
  waveFill = '#F9FAFB',
  showWave = true,
  /** Photo only — no dim overlay, no title stack */
  imageOnly = false,
  /** Tailwind object-position class, e.g. object-top */
  objectPosition = 'object-center',
  /** cover | contain — contain zooms out to show more of the photo */
  objectFit = 'cover',
  minHeight = '60vh',
  className = '',
  children,
}) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const hasCopy = !imageOnly && children != null;

  const minHeightClass =
    minHeight === '32vh'
      ? 'min-h-[32vh] max-h-[280px] md:max-h-[320px]'
      : minHeight === '36vh'
        ? 'min-h-[36vh] max-h-[300px] md:max-h-[360px]'
        : minHeight === '40vh'
          ? 'min-h-[40vh] max-h-[340px] md:max-h-[400px]'
          : minHeight === '45vh'
            ? 'min-h-[45vh]'
            : minHeight === '50vh'
              ? 'min-h-[50vh]'
              : 'min-h-[60vh]';

  return (
    <section
      ref={heroRef}
      className={`relative isolate overflow-hidden ${minHeightClass} ${
        objectFit === 'contain' ? 'bg-white' : ''
      } ${hasCopy ? 'flex items-center justify-center' : ''} ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${objectPosition}`}
          quality={90}
          aria-hidden
        />
      </div>
      {!imageOnly && (
        <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden />
      )}
      {hasCopy && (
        <div
          className={`container relative z-10 mx-auto px-4 py-16 text-center ${
            showWave ? 'pb-20 md:pb-24' : 'pb-16 md:pb-20'
          }`}
        >
          {typeof children === 'function' ? children(heroInView) : children}
        </div>
      )}
      {showWave && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="h-14 w-full md:h-12"
          >
            <path d={HERO_WAVE_PATH} fill={waveFill} />
          </svg>
        </div>
      )}
    </section>
  );
};

export const PageHeroTitle = ({ heroInView, children, className = '' }) => (
  <motion.h1
    initial={{ opacity: 0, x: 100, scale: 0.5 }}
    animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
    transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
    className={`font-heading text-4xl font-bold text-white drop-shadow-md md:text-6xl lg:text-7xl ${className}`}
  >
    {children}
  </motion.h1>
);

export const PageHeroSubtitle = ({ heroInView, children, className = '' }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className={`mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-xl ${className}`}
  >
    {children}
  </motion.p>
);

export const PageHeroEyebrow = ({ heroInView, children }) => (
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80"
  >
    {children}
  </motion.p>
);

export default PageHero;
