'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { HERO_SLIDES, HERO_WAVE_PATH } from '@/data/heroSlides';

const HERO_SLIDE_INTERVAL_MS = 5000;
const HERO_SLIDE_FADE_MS = 1000;

/** Shown immediately while slideshow images load (same as first slide) */
const HERO_PLACEHOLDER = HERO_SLIDES[0];

const HERO_LOGO_SRC =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20logo%20wit.svg';

const HeroBackgroundSlideshow = ({ scale }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set());

  const markSlideLoaded = (index) => {
    setLoadedSlides((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => setReduceMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener('change', syncMotionPreference);
    return () => mediaQuery.removeEventListener('change', syncMotionPreference);
  }, []);

  useEffect(() => {
    HERO_SLIDES.forEach((slide, index) => {
      if (index === 0) return;
      const img = new window.Image();
      img.src = slide.src;
      img.onload = () => markSlideLoaded(index);
    });
  }, []);

  useEffect(() => {
    if (reduceMotion || HERO_SLIDES.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const isSlideVisible = (index) =>
    index === activeIndex && loadedSlides.has(index);

  return (
    <motion.div className="absolute inset-0" style={{ scale }} aria-hidden>
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_PLACEHOLDER.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
          onLoad={() => markSlideLoaded(0)}
        />
      </div>

      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: isSlideVisible(index) ? 1 : 0,
            transitionDuration: `${HERO_SLIDE_FADE_MS}ms`,
            zIndex: isSlideVisible(index) ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={isSlideVisible(index) ? slide.alt : ''}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
            onLoad={() => markSlideLoaded(index)}
          />
        </div>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const heroInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.3], [1.05, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pb-8">
      <HeroBackgroundSlideshow scale={bgScale} />

      {/* Overlay — keeps title and description readable */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/45 to-black/65"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative z-30 -mt-16 md:-mt-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{
              duration: 1,
              type: 'spring',
              bounce: 0.6,
              delay: 0.2,
            }}
            className="relative mx-auto w-fit"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute bottom-full right-0 mb-1.5 translate-x-[20%] whitespace-nowrap text-[10px] font-medium tracking-wide text-white md:mb-2 md:translate-x-[28%] md:text-[11px]"
            >
              Powered by KNLTB
            </motion.span>
            <Link href="/" className="block">
              <Image
                src={HERO_LOGO_SRC}
                alt="TOF Sports"
                width={350}
                height={200}
                className="h-24 w-auto mx-auto md:h-44"
                priority
                quality={90}
              />
            </Link>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md relative z-30 -mt-1"
          >
            Sports
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-white/95 drop-shadow-sm relative z-30 max-w-3xl mx-auto leading-relaxed font-medium px-2"
          >
            Zet jouw jeugdprogramma direct op scherp.
          </motion.p>
        </div>
      </div>

      {/* Floating Tennis Ball - bounceInLeft with scroll motion */}
      <motion.div
        className="absolute bottom-14 left-10 md:bottom-16 md:left-20 z-20"
        initial={{ opacity: 0, x: -100 }}
        animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.5 }}
      >
        <TennisBallRoll scrollYProgress={heroScrollProgress} />
      </motion.div>

      {/* Curved shape divider — above overlay so it stays pure white */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-14 md:h-12">
          <path d={HERO_WAVE_PATH} fill="#ffffff" />
        </svg>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part2"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-40 text-white/90 hover:text-orange-300 transition-colors md:bottom-4"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

// Tennis Ball Roll Component - rolling in positive direction (right) all the way across
const TennisBallRoll = ({ scrollYProgress }) => {
  // Ball dimensions: mobile 96px (48px radius), desktop 128px (64px radius)
  // Average radius for calculation: ~56px
  const ballRadius = 56; // pixels
  // Max distance to roll all the way across screen (viewport width minus ball width and padding)
  // Using a large value that will work for most screens - will roll from left edge to right edge
  const maxDistance = 1200; // pixels to travel (adjust based on typical viewport width)
  
  // Calculate x position based on scroll - positive direction (right), all the way across
  const x = useTransform(scrollYProgress, [0, 1], [0, maxDistance]);
  
  // Calculate rotation based on distance traveled - positive direction
  // For a rolling ball: rotation (degrees) = (distance / radius) * (180 / π)
  const maxRotation = (maxDistance / ballRadius) * (180 / Math.PI);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, maxRotation]);

  return (
    <motion.div
      style={{ x, rotate }}
      className="relative w-32 h-32"
    >
      <Image 
        src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tennis%20bal.png" 
        alt="Tennis ball" 
        width={128}
        height={128}
        className="w-32 h-32 drop-shadow-lg"
        loading="lazy"
        quality={85}
      />
    </motion.div>
  );
};

export default HeroSection;