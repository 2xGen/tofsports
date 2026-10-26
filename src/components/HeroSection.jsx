'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from '@/i18n/Link';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronDown, Play, X } from 'lucide-react';

import { useLocale } from '@/i18n/LocaleProvider';

const HERO_VIDEO_ID = 'i0TLJmyMUeM';

/** Pre-masked pie piece with yellow border (public/hero-pie.png) */
const HERO_PIE_SRC = '/hero-pie.png';

const HeroSection = () => {
  const { locale, t } = useLocale();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef(null);
  const heroInView = useInView(sectionRef, { once: false, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const pieY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const titleLines = t('home.heroTitle').split('\n');

  useEffect(() => {
    if (!isVideoOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isVideoOpen]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden bg-white pb-16 pt-20 md:pb-20"
    >
      {/* Phone / iPad: pie in normal flow so copy sits cleanly below */}
      <div className="relative z-10 w-[min(92vw,440px)] -translate-x-[8%] -translate-y-[18%] sm:w-[min(85vw,520px)] md:w-[min(72vw,580px)] lg:hidden">
        <Image
          src={HERO_PIE_SRC}
          alt="Jeugd bij het Padel Club Clash TOF scoresysteem"
          width={1024}
          height={1024}
          priority
          className="h-auto w-full select-none"
          sizes="(max-width: 1023px) 90vw, 1px"
        />
      </div>

      {/* Laptop / desktop: absolute pie in the top-left corner */}
      <motion.div
        style={{ y: pieY }}
        className="pointer-events-none absolute left-0 top-20 z-10 hidden w-[min(54vw,840px)] lg:block xl:w-[min(52vw,960px)] 2xl:w-[min(48vw,1080px)]"
      >
        <div className="-translate-x-[9%] -translate-y-[26%]">
          <Image
            src={HERO_PIE_SRC}
            alt=""
            width={1024}
            height={1024}
            priority
            className="h-auto w-full select-none"
            sizes="(min-width: 1024px) 50vw, 1px"
            aria-hidden
          />
        </div>
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:min-h-[calc(100svh-5rem)] lg:flex-row lg:items-center lg:px-8 xl:max-w-[90rem] 2xl:max-w-[100rem]">
        <motion.div
          style={{ y: copyY }}
          className="w-full max-w-xl pt-2 sm:pt-4 md:max-w-lg md:pt-6 lg:ml-auto lg:max-w-lg lg:pt-0 lg:pr-4 xl:max-w-xl 2xl:max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 font-heading text-[2.15rem] font-semibold leading-none tracking-tight text-tof-indigo sm:gap-4 sm:text-4xl md:gap-5 md:text-[2.75rem] lg:gap-6 lg:text-[3.15rem] xl:text-[3.4rem] 2xl:gap-7 2xl:text-[3.75rem]"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-tof-yellow px-5 py-3 text-base font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 sm:mt-8 md:mt-10 xl:mt-12 xl:gap-4 xl:px-7 xl:py-3.5 xl:text-lg 2xl:px-8 2xl:py-4 2xl:text-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tof-indigo text-tof-yellow transition-transform duration-300 group-hover:scale-105 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12">
              <Play className="ml-0.5 h-4 w-4 fill-tof-yellow xl:h-5 xl:w-5" />
            </span>
            {t('home.watchVideo')}
          </motion.button>
        </motion.div>
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
              className="absolute right-4 top-4 z-10 rounded-full bg-tof-surface/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label={t('common.close')}
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
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-tof-yellow px-7 py-3 font-semibold text-tof-indigo shadow-lg transition hover:bg-tof-yellow/90"
              >
                {locale === 'en' ? 'View our products' : 'Bekijk onze producten'}
                <ChevronDown className="h-5 w-5 -rotate-90 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="#part2"
        className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-tof-indigo/70 transition-colors hover:text-tof-indigo md:bottom-6"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label={locale === 'en' ? 'Scroll to packages' : 'Naar pakketten'}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
