'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OVER_TOF, ot, otMap } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const LerarenAppContent = () => {
  const { locale } = useLocale();
  const features = otMap(locale, OVER_TOF.knltb.features);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
    >
      <div className="space-y-6 p-6 text-gray-700 md:p-8">
        <p className="text-lg leading-relaxed">{ot(locale, OVER_TOF.app.intro)}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div key={item.title} className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LerarenAppContent;
