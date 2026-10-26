'use client';

import React from 'react';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const TofScoreContent = () => {
  const { locale } = useLocale();
  const c = OVER_TOF.score;
  const packages = OVER_TOF.posters;

  return (
    <div>
      <div className="max-w-5xl">
        <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
          {ot(locale, c.title)}
        </h3>
        <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
          {ot(locale, c.intro)}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-tof-indigo px-6 py-3 text-sm font-semibold text-tof-yellow md:px-8 md:py-3.5 md:text-base">
          <span>{ot(locale, c.goalLabel)}</span>
          <span>{ot(locale, c.goalValue)}</span>
        </div>
      </div>

      <div className="mt-12 border-t border-tof-indigo/50 pt-10 md:mt-14 md:pt-12">
        <PakkettenCardsGrid
          title={ot(locale, packages.nextTitle)}
          description={ot(locale, packages.nextBody)}
          showPackageDetails={false}
          showSubtitle={false}
          light
          overlayStyle
          square
        />
      </div>
    </div>
  );
};

export default TofScoreContent;
