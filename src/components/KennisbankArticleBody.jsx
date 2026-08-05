'use client';

import React from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

const KennisbankArticleBody = ({ sections }) => {
  const { locale } = useLocale();
  const fromLabel = locale === 'en' ? 'From:' : 'Van:';
  const toLabel = locale === 'en' ? 'To:' : 'Naar:';

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-poppins prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
      {sections.map((section, index) => {
        if (section.type === 'heading') {
          return (
            <h2 key={index} className="mt-10 text-2xl first:mt-0 md:text-3xl">
              {section.text}
            </h2>
          );
        }

        if (section.type === 'paragraph') {
          return (
            <p key={index} className="mt-4 text-lg leading-relaxed text-gray-600">
              {section.text}
            </p>
          );
        }

        if (section.type === 'list') {
          return (
            <ul key={index} className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-600">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (section.type === 'shift') {
          return (
            <div
              key={index}
              className="mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-sky-50 p-6 md:p-8"
            >
              <p className="text-lg font-semibold text-gray-500 line-through decoration-gray-400">
                {fromLabel} {section.from}
              </p>
              <p className="mt-3 text-xl font-bold text-[#1B144C] md:text-2xl">
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
