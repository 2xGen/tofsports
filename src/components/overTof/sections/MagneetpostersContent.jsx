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
        className="overflow-hidden border border-tof-indigo/10 bg-white shadow-lg"
      >
        <div className="space-y-4 p-6 text-tof-indigo/75 md:p-8">
          <h3 className="text-xl font-bold text-tof-indigo md:text-2xl">{ot(locale, c.whyTitle)}</h3>
          <p className="text-lg">{ot(locale, c.whyBody)}</p>
          <div className="border-l-4 border-tof-yellow bg-tof-yellow/15 p-4">
            <p>
              <strong>{ot(locale, c.importantLabel)}</strong> {ot(locale, c.importantBody)}
            </p>
          </div>
          <div className="border-l-4 border-tof-indigo bg-tof-indigo/[0.04] p-4">
            <h4 className="mb-3 text-lg font-bold text-tof-indigo">{ot(locale, c.bestTitle)}</h4>
            <ul className="space-y-2">
              {c.bestItems.map((item) => {
                const text = ot(locale, item);
                return (
                  <li key={text} className="flex items-start gap-2">
                    <span className="font-bold text-tof-yellow">•</span>
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
        className="overflow-hidden border border-tof-indigo/10 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-tof-indigo md:text-2xl">
            {ot(locale, c.foilTitle)}
          </h3>
          <p className="mb-6 text-tof-indigo/75">{ot(locale, c.foilBody)}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.foilFeatures.map(([title, text]) => (
              <div key={ot(locale, title)}>
                <h4 className="mb-2 font-bold text-tof-indigo">{ot(locale, title)}</h4>
                <p className="text-tof-indigo/75">{ot(locale, text)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden border border-tof-indigo/10 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-tof-indigo">{ot(locale, c.specsTitle)}</h3>
          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-lg border-collapse text-sm">
              <tbody>
                {c.specs.map(([label, value], i) => (
                  <tr key={ot(locale, label)} className={i % 2 ? 'bg-white' : 'bg-tof-indigo/[0.03]'}>
                    <td className="border border-tof-indigo/15 px-4 py-3 font-medium text-tof-indigo/75">
                      {ot(locale, label)}
                    </td>
                    <td className="border border-tof-indigo/15 px-4 py-3 text-tof-indigo/75">
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
        className="overflow-hidden border border-tof-indigo/10 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-tof-indigo">{ot(locale, c.boardTitle)}</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.boardFeatures.map(([title, text]) => (
              <div key={ot(locale, title)}>
                <h4 className="mb-2 font-bold text-tof-indigo">{ot(locale, title)}</h4>
                <p className="text-tof-indigo/75">{ot(locale, text)}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <PakkettenCardsGrid
        title={ot(locale, c.nextTitle)}
        description={ot(locale, c.nextBody)}
        showPackageDetails={false}
        light
        overlayStyle
        square
        className="!mt-4"
      />
    </div>
  );
};

export default MagneetpostersContent;
