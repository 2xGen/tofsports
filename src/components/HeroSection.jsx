'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from '@/i18n/Link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Play, X } from 'lucide-react';

import { HERO_SLIDES, HERO_TAGLINES, HERO_TAGLINES_EN, HERO_WAVE_PATH } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';

const HERO_SLIDE_INTERVAL_MS = 5000;
const HERO_SLIDE_FADE_MS = 1000;
const HERO_VIDEO_ID = 'i0TLJmyMUeM';

/** Shown immediately while slideshow images load (same as first slide) */
const HERO_PLACEHOLDER = HERO_SLIDES[0];

const HERO_LOGO_SRC =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20logo%20wit.svg';

const HeroBackgroundSlideshow = ({ scale, activeIndex, onActiveIndexChange }) => {
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
      onActiveIndexChange((current) => (current + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion, onActiveIndexChange]);

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
  const { locale } = useLocale();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef(null);
  const taglines = locale === 'en' ? HERO_TAGLINES_EN : HERO_TAGLINES;

  useEffect(() => {
    if (!isVideoOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isVideoOpen]);
  const heroInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.3], [1.05, 1]);
  const activeTaglineIndex = activeSlideIndex % taglines.length;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pb-8">
      <HeroBackgroundSlideshow
        scale={bgScale}
        activeIndex={activeSlideIndex}
        onActiveIndexChange={setActiveSlideIndex}
      />

      {/* Overlay — keeps title and description readable */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/45 to-black/65"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative z-30 -mt-14 md:-mt-6">
        <div className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
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

          <div
            className="relative z-30 mx-auto w-full max-w-3xl px-2 min-h-[3.75rem] md:min-h-[4.25rem]"
            aria-live="polite"
          >
            {taglines.map((tagline, index) => (
              <p
                key={tagline}
                className="absolute inset-x-2 top-0 text-lg md:text-2xl text-white/95 drop-shadow-sm leading-relaxed font-medium transition-opacity ease-in-out"
                style={{
                  opacity: index === activeTaglineIndex ? 1 : 0,
                  transitionDuration: `${HERO_SLIDE_FADE_MS}ms`,
                }}
              >
                {tagline}
              </p>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative z-30 inline-flex items-center gap-3 rounded-full bg-white/95 px-6 py-3 font-bold text-gray-900 shadow-lg backdrop-blur transition hover:bg-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-4 w-4 fill-white" />
            </span>
            Bekijk video
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoOpen(false);
              }}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Sluiten"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full rounded-xl"
                  src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="TOF Sports video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <Link
                href="/producten"
                onClick={() => setIsVideoOpen(false)}
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-orange-600"
              >
                {locale === 'en' ? 'View our products' : 'Bekijk onze producten'}
                <ChevronDown className="h-5 w-5 -rotate-90 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default HeroSection;