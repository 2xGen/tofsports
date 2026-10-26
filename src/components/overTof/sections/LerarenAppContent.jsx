'use client';

import React from 'react';
import { OVER_TOF, ot, otMap } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const LerarenAppContent = () => {
  const { locale } = useLocale();
  const features = otMap(locale, OVER_TOF.knltb.features);

  return (
    <div>
      <p className="max-w-5xl text-base leading-relaxed text-tof-indigo md:text-lg">
        {ot(locale, OVER_TOF.app.intro)}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-10 md:gap-5">
        {features.map((item) => (
          <div key={item.title} className="bg-[#F3F3F5] p-6 md:p-8">
            <h3 className="mb-3 text-lg font-bold text-tof-indigo md:text-xl">{item.title}</h3>
            <p className="text-sm leading-relaxed text-tof-indigo md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LerarenAppContent;
