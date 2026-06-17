'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HERO_SLIDES } from '@/data/heroSlides';

export const OVER_TOF_DIVIDER_IMAGES = [
  {
    src: HERO_SLIDES[0].src,
    alt: 'Jeugd speelt op de club — de 365-mentaliteit in actie',
  },
  {
    src: HERO_SLIDES[4].src,
    alt: 'Trainer en jeugd met het TOF bord — Powered by KNLTB',
  },
  {
    src: HERO_SLIDES[2].src,
    alt: 'Kinderen spelen een TOF format op de vereniging',
  },
  {
    src: HERO_SLIDES[5].src,
    alt: 'Jeugd bij het TOF scorebord op de baan',
  },
  {
    src: HERO_SLIDES[1].src,
    alt: 'Trainer en jeugd met het TOF padelbord op de baan',
  },
];

const OverTofDividerImage = ({ src, alt, contain = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5 }}
    className="my-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md md:my-14"
    aria-hidden={!alt}
  >
    <div
      className={`relative w-full ${
        contain ? 'aspect-[4/3] bg-gray-50' : 'aspect-[16/7] md:aspect-[21/8]'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={contain ? 'object-contain p-6 md:p-10' : 'object-cover'}
        sizes="(max-width: 1280px) 100vw, 1280px"
        quality={80}
        unoptimized={contain}
      />
      {!contain && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
          aria-hidden
        />
      )}
    </div>
  </motion.div>
);

export default OverTofDividerImage;
