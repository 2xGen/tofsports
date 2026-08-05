'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const MagneetpostersContent = () => {
  const { locale } = useLocale();
  const c = OVER_TOF.posters;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="space-y-4 p-6 text-gray-700 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{ot(locale, c.whyTitle)}</h3>
          <p className="text-lg">{ot(locale, c.whyBody)}</p>
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
            <p>
              <strong>{ot(locale, c.importantLabel)}</strong> {ot(locale, c.importantBody)}
            </p>
          </div>
          <div className="border-l-4 border-teal-500 bg-teal-50 p-4">
            <h4 className="mb-3 text-lg font-bold text-gray-900">{ot(locale, c.bestTitle)}</h4>
            <ul className="space-y-2">
              {c.bestItems.map((item) => {
                const text = ot(locale, item);
                return (
                  <li key={text} className="flex items-start gap-2">
                    <span className="font-bold text-teal-500">•</span>
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
            {ot(locale, c.foilTitle)}
          </h3>
          <p className="mb-6 text-gray-700">{ot(locale, c.foilBody)}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.foilFeatures.map(([title, text]) => (
              <div key={ot(locale, title)}>
                <h4 className="mb-2 font-bold text-gray-900">{ot(locale, title)}</h4>
                <p className="text-gray-700">{ot(locale, text)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-gray-900">{ot(locale, c.specsTitle)}</h3>
          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-lg border-collapse text-sm">
              <tbody>
                {c.specs.map(([label, value], i) => (
                  <tr key={ot(locale, label)} className={i % 2 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      {ot(locale, label)}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      {ot(locale, value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-gray-900">{ot(locale, c.boardTitle)}</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.boardFeatures.map(([title, text]) => (
              <div key={ot(locale, title)}>
                <h4 className="mb-2 font-bold text-gray-900">{ot(locale, title)}</h4>
                <p className="text-gray-700">{ot(locale, text)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <PakkettenCardsGrid
        title={ot(locale, c.nextTitle)}
        description={ot(locale, c.nextBody)}
        showPackageDetails={false}
        className="!mt-4"
      />
    </div>
  );
};

export default MagneetpostersContent;
