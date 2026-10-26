'use client';

import React from 'react';
import Image from 'next/image';
import Link from '@/i18n/Link';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const AFTER_CTA_IMAGE = {
  src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof%20sports%20500%20kb.jpg',
  alt: 'Jeugd en trainer met TOF materialen op de baan',
};

const MissieVisieContent = ({ useAnchors = false }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.missieVisie;
  const methodeHref = useAnchors ? '#tof-methode' : '/tof-methode';
  const scoreHref = useAnchors ? '#tof-score' : '/tof-score';

  return (
    <div>
      <div className="max-w-5xl space-y-10 md:space-y-12">
        <div>
          <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
            {ot(locale, c.visionTitle)}
          </h3>
          <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
            {ot(locale, c.visionBody)}
          </p>
        </div>

        <div>
          <h3 className="mb-1 text-xl font-bold text-tof-indigo md:text-2xl">
            {ot(locale, c.missionTitle)}
          </h3>
          <p className="mb-6 text-lg font-bold text-tof-indigo md:text-xl">
            {ot(locale, c.pillars)}
          </p>
          <p className="mb-4 text-lg font-semibold text-tof-indigo md:text-xl">
            {ot(locale, c.missionLead)}
          </p>
          <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
            {ot(locale, c.missionBody)}
          </p>
        </div>
      </div>

      <div className="mt-14 border-y border-tof-indigo/50 py-10 text-center md:mt-16 md:py-12">
        <h4 className="text-xl font-bold text-tof-indigo md:text-2xl">
          {ot(locale, c.ctaTitle)}
        </h4>
        <p className="mx-auto mt-2 max-w-2xl text-base text-tof-indigo md:text-lg">
          {ot(locale, c.ctaBody)}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href={methodeHref}
            className="inline-flex items-center justify-center rounded-full bg-tof-indigo px-6 py-2.5 text-sm font-semibold text-tof-yellow transition-colors hover:bg-tof-indigo/90"
          >
            {ot(locale, c.ctaMethod)}
          </Link>
          <Link
            href={scoreHref}
            className="inline-flex items-center justify-center rounded-full bg-tof-indigo px-6 py-2.5 text-sm font-semibold text-tof-yellow transition-colors hover:bg-tof-indigo/90"
          >
            {ot(locale, c.ctaScore)}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-tof-yellow px-6 py-2.5 text-sm font-semibold text-tof-indigo transition-colors hover:bg-tof-yellow/90"
          >
            {ot(locale, c.ctaContact)}
          </Link>
        </div>
      </div>

      <div className="mt-10 overflow-hidden md:mt-14 md:mb-2">
        <div className="relative aspect-[16/7] w-full md:aspect-[21/8]">
          <Image
            src={AFTER_CTA_IMAGE.src}
            alt={AFTER_CTA_IMAGE.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            quality={80}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default MissieVisieContent;
