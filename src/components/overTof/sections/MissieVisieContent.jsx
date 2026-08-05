'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const MissieVisieContent = ({ useAnchors = false }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.missieVisie;
  const methodeHref = useAnchors ? '#tof-methode' : '/tof-methode';
  const scoreHref = useAnchors ? '#tof-score' : '/tof-score';

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
            {ot(locale, c.visionTitle)}
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">{ot(locale, c.visionBody)}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-1 text-xl font-bold text-gray-900 md:text-2xl">
            {ot(locale, c.missionTitle)}
          </h3>
          <p className="mb-8 text-xl font-bold text-orange-500">{ot(locale, c.pillars)}</p>
          <p className="mb-6 text-xl font-semibold text-gray-900">{ot(locale, c.missionLead)}</p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">{ot(locale, c.missionBody)}</p>
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8">
            <h4 className="mb-2 text-xl font-bold text-gray-900">{ot(locale, c.ctaTitle)}</h4>
            <p className="mb-6 text-gray-600">{ot(locale, c.ctaBody)}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={methodeHref}
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                {ot(locale, c.ctaMethod)}
              </Link>
              <Link
                href={scoreHref}
                className="inline-flex items-center justify-center rounded-xl border-2 border-orange-500 bg-white px-5 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                {ot(locale, c.ctaScore)}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                {ot(locale, c.ctaContact)}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissieVisieContent;
