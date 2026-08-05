'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero, { PageHeroTitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';
import { ot } from '@/i18n/content/overTof';
import { PRIVACY } from '@/i18n/content/privacy';

const PrivacyPage = () => {
  const { locale } = useLocale();
  const t = (node) => ot(locale, node);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/privacy')} minHeight="40vh">
        {(heroInView) => (
          <PageHeroTitle heroInView={heroInView} className="text-4xl md:text-6xl">
            {t(PRIVACY.heroTitle)}
          </PageHeroTitle>
        )}
      </PageHero>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10"
        >
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">{t(PRIVACY.intro)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {t(PRIVACY.weProcessTitle)}
            </h2>

            <div className="space-y-6">
              {PRIVACY.cards.map((card) => (
                <div key={t(card.title)} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t(card.title)}</h3>
                  <p className="text-gray-600">{t(card.body)}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(PRIVACY.purposeTitle)}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {PRIVACY.purposeItems.map((item) => (
                <li key={t(item)}>{t(item)}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(PRIVACY.thirdPartiesTitle)}
            </h2>
            <p className="text-gray-600">{t(PRIVACY.thirdPartiesBody)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(PRIVACY.retentionTitle)}
            </h2>
            <p className="text-gray-600">{t(PRIVACY.retentionBody)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(PRIVACY.securityTitle)}
            </h2>
            <p className="text-gray-600">{t(PRIVACY.securityBody)}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              {t(PRIVACY.rightsTitle)}
            </h2>
            <p className="text-gray-600">
              {t(PRIVACY.rightsBodyBefore)}{' '}
              <a href="mailto:info@tofsports.nl" className="text-orange-500 hover:text-orange-600 font-medium">
                info@tofsports.nl
              </a>
              {t(PRIVACY.rightsBodyAfter)}
            </p>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © TOF Sports 2018-{new Date().getFullYear()}. {t(PRIVACY.copyright)} ® TOF Sports™
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
