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
  minHeight = '60vh',
  className = '',
  children,
}) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  const minHeightClass =
    minHeight === '45vh'
      ? 'min-h-[45vh]'
      : minHeight === '50vh'
        ? 'min-h-[50vh]'
        : minHeight === '40vh'
          ? 'min-h-[40vh]'
          : 'min-h-[60vh]';

  return (
    <section
      ref={heroRef}
      className={`relative isolate flex items-center justify-center overflow-hidden ${minHeightClass} ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
          aria-hidden
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/45 to-black/65"
        aria-hidden
      />
      <div className="container relative z-10 mx-auto px-4 py-16 pb-20 text-center md:pb-24">
        {typeof children === 'function' ? children(heroInView) : children}
      </div>
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
    </section>
  );
};

export const PageHeroTitle = ({ heroInView, children, className = '' }) => (
  <motion.h1
    initial={{ opacity: 0, x: 100, scale: 0.5 }}
    animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
    transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
    className={`font-poppins text-4xl font-bold text-white drop-shadow-md md:text-6xl lg:text-7xl ${className}`}
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
