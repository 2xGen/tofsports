'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';
import { useLocale } from '@/i18n/LocaleProvider';

const PakkettenSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { locale, t } = useLocale();

  return (
    <section
      ref={sectionRef}
      id="part2"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto max-w-6xl px-4"
      >
        <div className="mb-6 text-center md:mb-8">
          <p className="text-base font-semibold text-tof-indigo md:text-lg">
            {t('home.packagesEyebrow')}
          </p>
        </div>
        <PakkettenCardsGrid
          showPackageDetails={false}
          showSubtitle={false}
          light
          overlayStyle
          title={t('home.packagesTitle')}
          ctaLabel={t('home.packagesCta')}
          description={
            locale === 'en'
              ? 'Choose Basic, Plus or Complete — tennis, padel or combi. Includes knowledge sessions, TOF Score app and shipping.'
              : 'Kies Basis, Plus of Compleet — tennis, padel of combi. Inclusief kennissessies, TOF Score app en verzending.'
          }
        />
      </motion.div>
    </section>
  );
};

export default PakkettenSection;
