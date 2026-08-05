'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const TofScoreContent = ({ useAnchors = false }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.score;
  const methodeHref = useAnchors ? '#tof-methode' : '/tof-methode';

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">{ot(locale, c.title)}</h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">{ot(locale, c.intro)}</p>
          <div className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-lg font-bold text-white">
            <span>{ot(locale, c.goalLabel)}</span>
            <span>{ot(locale, c.goalValue)}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            {ot(locale, c.earnEyebrow)}
          </span>
          <h3 className="mt-1 mb-4 text-xl font-bold text-gray-900">{ot(locale, c.howTitle)}</h3>
          <p className="mb-6 leading-relaxed text-gray-600">{ot(locale, c.howIntro)}</p>
          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {c.earnItems.map((item, i) => {
              const text = ot(locale, item);
              return (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{ot(locale, c.pressureTitle)}</h3>
          <p className="mb-6 leading-relaxed text-gray-600">{ot(locale, c.pressureBody)}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {c.benefits.map((item) => {
              const text = ot(locale, item);
              return (
                <div
                  key={text}
                  className="flex gap-3 rounded-xl border border-orange-100 bg-orange-50/50 p-4"
                >
                  <span className="text-xl text-orange-500">→</span>
                  <span className="text-gray-700">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
          <h3 className="mb-3 text-lg font-bold text-gray-900">{ot(locale, c.gameTitle)}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{ot(locale, c.gameBody)}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
          <h3 className="mb-3 text-lg font-bold text-gray-900">{ot(locale, c.digitalTitle)}</h3>
          <p className="text-sm leading-relaxed text-gray-600">{ot(locale, c.digitalBody)}</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8"
      >
        <h4 className="mb-2 text-xl font-bold text-gray-900">{ot(locale, c.ctaTitle)}</h4>
        <p className="mb-6 text-sm text-gray-600">{ot(locale, c.ctaBody)}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={methodeHref}
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            {ot(locale, c.ctaMethod)}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-orange-500 bg-white px-5 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
          >
            {ot(locale, c.ctaContact)}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TofScoreContent;
