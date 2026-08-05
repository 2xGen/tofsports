'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { OVER_TOF, ot, otMap } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const KnltbContent = ({ category: categoryProp, onCategoryChange }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.knltb;
  const [internalCategory, setInternalCategory] = useState('tennis');
  const category = categoryProp ?? internalCategory;
  const setCategory = onCategoryChange ?? setInternalCategory;
  const features = otMap(locale, c.features);

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          onClick={() => setCategory('tennis')}
          size="lg"
          className={`min-w-[120px] font-bold ${
            category === 'tennis'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Tennis
        </Button>
        <Button
          type="button"
          onClick={() => setCategory('padel')}
          size="lg"
          className={`min-w-[120px] font-bold ${
            category === 'padel'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Padel
        </Button>
      </div>

      {category === 'tennis' && (
        <motion.div
          key="tennis"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
        >
          <div className="space-y-6 p-6 text-gray-700 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {ot(locale, c.tennisTitle)}
            </h3>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                {ot(locale, c.childFirst)}
              </h4>
              <p className="text-lg leading-relaxed">{ot(locale, c.tennisIntro)}</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">{ot(locale, c.playerCard)}</h4>
              <p className="text-lg leading-relaxed">{ot(locale, c.tennisCard)}</p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">{ot(locale, c.levelTitle)}</h4>
              <p className="mb-4 text-lg leading-relaxed">{ot(locale, c.levelP1)}</p>
              <p className="text-lg leading-relaxed">{ot(locale, c.levelP2)}</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">{ot(locale, c.saveTitle)}</h4>
              <p className="text-lg leading-relaxed">{ot(locale, c.saveBody)}</p>
            </div>
          </div>
        </motion.div>
      )}

      {category === 'padel' && (
        <motion.div
          key="padel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
        >
          <div className="space-y-6 p-6 text-gray-700 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {ot(locale, c.padelTitle)}
            </h3>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                {ot(locale, c.childFirst)}
              </h4>
              <p className="text-lg leading-relaxed">{ot(locale, c.padelIntro)}</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">{ot(locale, c.playerCard)}</h4>
              <p className="text-lg leading-relaxed">{ot(locale, c.padelCard)}</p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">{ot(locale, c.matrixTitle)}</h4>
              <p className="text-lg leading-relaxed">{ot(locale, c.matrixBody)}</p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            {ot(locale, c.appTitle)}
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-gray-700">{ot(locale, c.appIntro)}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((item) => (
              <div key={item.title} className="rounded-xl bg-gray-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h4>
                <p className="leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8"
      >
        <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">TOF - Powered by KNLTB</h3>
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
          <iframe
            title="TOF - Powered by KNLTB"
            src="https://player.vimeo.com/video/792932911?h=ad7b439e93"
            width="640"
            height="360"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default KnltbContent;
