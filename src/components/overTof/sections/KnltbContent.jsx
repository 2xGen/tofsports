'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OVER_TOF, ot, otMap } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const KnltbContent = ({ category: categoryProp, onCategoryChange }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.knltb;
  const [internalCategory, setInternalCategory] = useState('tennis');
  const category = categoryProp ?? internalCategory;
  const setCategory = onCategoryChange ?? setInternalCategory;
  const features = otMap(locale, c.features);

  const tabClass = (active) =>
    `rounded-full px-10 py-3.5 text-base font-semibold transition-colors md:px-12 md:py-4 md:text-lg ${
      active
        ? 'bg-tof-indigo text-tof-yellow'
        : 'bg-tof-indigo text-tof-yellow hover:bg-tof-indigo/90'
    }`;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 pb-10 md:pb-12">
        <button type="button" onClick={() => setCategory('tennis')} className={tabClass(category === 'tennis')}>
          Tennis
        </button>
        <button type="button" onClick={() => setCategory('padel')} className={tabClass(category === 'padel')}>
          Padel
        </button>
      </div>

      <div className="border-t border-tof-indigo/50 pt-10 md:pt-12">
        <AnimatePresence mode="wait">
          {category === 'tennis' ? (
            <motion.div
              key="tennis"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl space-y-8 md:space-y-10"
            >
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.tennisTitle)} {ot(locale, c.childFirst)}
                </h3>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.tennisIntro)}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.playerCard)}
                </h3>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.tennisCard)}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.levelTitle)}
                </h3>
                <p className="mb-4 text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.levelP1)}
                </p>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.levelP2)}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.saveTitle)}
                </h3>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.saveBody)}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="padel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl space-y-8 md:space-y-10"
            >
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.padelTitle)} {ot(locale, c.childFirst)}
                </h3>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.padelIntro)}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.playerCard)}
                </h3>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.padelCard)}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
                  {ot(locale, c.matrixTitle)}
                </h3>
                <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
                  {ot(locale, c.matrixBody)}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 max-w-5xl md:mt-10">
          <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
            {ot(locale, c.appTitle)}
          </h3>
          <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
            {ot(locale, c.appIntro)}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-10 md:gap-5">
          {features.map((item) => (
            <div key={item.title} className="bg-[#F3F3F5] p-6 md:p-7">
              <h4 className="mb-2 text-lg font-bold text-tof-indigo">{item.title}</h4>
              <p className="text-sm leading-relaxed text-tof-indigo md:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-tof-indigo/50 pt-10 md:mt-14 md:pt-12">
          <h3 className="mb-4 text-xl font-bold text-tof-indigo md:text-2xl">
            TOF - Powered by KNLTB
          </h3>
          <div className="relative aspect-video w-full max-w-5xl overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default KnltbContent;
