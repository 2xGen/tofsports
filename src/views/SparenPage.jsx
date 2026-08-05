'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone, Medal, ClipboardList, Lightbulb, Flame, Eye, House, Target } from 'lucide-react';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';
import { ot } from '@/i18n/content/overTof';
import { SPAREN } from '@/i18n/content/bodyPages';

const cardIcons = [Smartphone, Medal, ClipboardList, Lightbulb];
const whyIcons = [Flame, Eye, House];

const SparenPage = () => {
  const { locale } = useLocale();
  const t = (node) => ot(locale, node);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/sparen')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{t(SPAREN.hero.title)}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>{t(SPAREN.hero.subtitle)}</PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t(SPAREN.introTitle)}</h2>

            <p className="text-lg leading-relaxed">{t(SPAREN.introBody)}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {SPAREN.cards.map((card, i) => {
                const Icon = cardIcons[i];
                return (
                  <div key={i} className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                    <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t(card.title)}</h3>
                    <p className="text-gray-600">{t(card.body)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* How it works Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t(SPAREN.how.title)}</h2>

            <div className="space-y-6">
              {SPAREN.how.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-lime-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t(step.title)}</h4>
                    <p className="text-gray-600">{t(step.body)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-lime-600" />
                {t(SPAREN.how.goalTitle)}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t(SPAREN.how.goalBody)}</p>
            </div>
          </div>
        </motion.section>

        {/* Why Sparen Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t(SPAREN.why.title)}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPAREN.why.items.map((item, i) => {
                const Icon = whyIcons[i];
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t(item.title)}</h4>
                      <p className="text-gray-600">{t(item.body)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Navigation to Webshop */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t(SPAREN.cta.title)}</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">{t(SPAREN.cta.body)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold text-lg"
            >
              <Link href="/webshop">{t(SPAREN.cta.primary)}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-sky-500 text-white hover:bg-sky-600 font-bold text-lg"
            >
              <Link href="/spelen">{t(SPAREN.cta.secondary)}</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SparenPage;
