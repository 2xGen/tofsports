'use client';

import React from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

const KennisbankArticleBody = ({ sections }) => {
  const { locale } = useLocale();
  const fromLabel = locale === 'en' ? 'From:' : 'Van:';
  const toLabel = locale === 'en' ? 'To:' : 'Naar:';

  return (
    <div className="max-w-none text-tof-indigo [&_h1]:!text-tof-indigo [&_h2]:!text-tof-indigo [&_h3]:!text-tof-indigo [&_h4]:!text-tof-indigo">
      {sections.map((section, index) => {
        if (section.type === 'heading') {
          return (
            <h2
              key={index}
              className="mt-10 font-heading text-2xl font-bold text-tof-indigo first:mt-0 md:text-3xl"
            >
              {section.text}
            </h2>
          );
        }

        if (section.type === 'paragraph') {
          return (
            <p key={index} className="mt-4 text-lg leading-relaxed text-tof-indigo/80">
              {section.text}
            </p>
          );
        }

        if (section.type === 'list') {
          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-6 text-lg text-tof-indigo/80 marker:text-tof-indigo">
              {section.items.map((item) => (
                <li key={item} className="text-tof-indigo/80">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        if (section.type === 'shift') {
          return (
            <div
              key={index}
              className="mt-6 border border-tof-indigo/15 bg-white p-6 md:p-8"
            >
              <p className="text-lg font-semibold text-tof-indigo/50 line-through decoration-tof-indigo/40">
                {fromLabel} {section.from}
              </p>
              <p className="mt-3 text-xl font-semibold !text-tof-indigo md:text-2xl">
                {toLabel} {section.to}
              </p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default KennisbankArticleBody;
