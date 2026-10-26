'use client';

import React from 'react';
import Image from 'next/image';
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
    src: HERO_SLIDES[1].src,
    alt: 'Trainer en jeugd met het TOF padelbord op de baan',
  },
];

const OverTofDividerImage = ({ src, alt, contain = false }) => (
  <div className="my-10 overflow-hidden md:my-14" aria-hidden={!alt}>
    <div
      className={`relative w-full ${
        contain ? 'aspect-[4/3] bg-[#F3F3F5]' : 'aspect-[16/7] md:aspect-[21/8]'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={contain ? 'object-contain p-4 md:p-8' : 'object-cover'}
        sizes="(max-width: 1280px) 100vw, 1280px"
        quality={75}
        unoptimized
      />
    </div>
  </div>
);

export default OverTofDividerImage;
