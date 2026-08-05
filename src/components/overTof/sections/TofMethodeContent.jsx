'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { OVER_TOF, ot, otMap } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const TofMethodeContent = ({ useAnchors = false }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.methode;
  const scoreHref = useAnchors ? '#tof-score' : '/tof-score';
  const pillars = otMap(locale, c.pillars);

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900">{ot(locale, c.title)}</h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">{ot(locale, c.intro)}</p>
          <div className="rounded-xl border-l-4 border-orange-500 bg-gray-50 p-6">
            <p className="text-lg leading-relaxed text-gray-700">{ot(locale, c.highlight)}</p>
          </div>
        </div>
      </motion.div>

      <div>
        <h3 className="mb-8 text-xl font-bold text-gray-900 md:text-2xl">
          {ot(locale, c.pillarsTitle)}
        </h3>
        <div className="space-y-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.n}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
            >
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    {pillar.n}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 md:text-xl">{pillar.title}</h4>
                </div>
                {pillar.intro && (
                  <p className="mb-4 leading-relaxed text-gray-600">{pillar.intro}</p>
                )}
                <ul className="mb-4 space-y-2 text-gray-700">
                  {(pillar.items || []).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-orange-500">•</span> {item}
                    </li>
                  ))}
                </ul>
                {pillar.footer && (
                  <p className="italic leading-relaxed text-gray-600">{pillar.footer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
            {ot(locale, c.mindsetTitle)}
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">{ot(locale, c.mindsetBody)}</p>
          <Link
            href={scoreHref}
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-md transition-colors hover:bg-orange-600"
          >
            <ArrowRight className="h-5 w-5 shrink-0" />
            {ot(locale, c.scoreCta)}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TofMethodeContent;
