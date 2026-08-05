'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Target, Circle, Pencil, RotateCcw, Calendar, Search, User, Users, Lightbulb, Sparkles } from 'lucide-react';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';
import { ot, SPELEN_CONTENT as C } from '@/i18n/content/methodPages';

const SpelenPage = () => {
  const { locale } = useLocale();
  const t = (node) => ot(locale, node);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/spelen')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{t(C.hero.title)}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>{t(C.hero.subtitle)}</PageHeroSubtitle>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t(C.intro.heading)}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[Pencil, Target, Circle, Lightbulb].map((Icon, i) => {
                const card = C.intro.cards[i];
                return (
                  <div key={i} className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t(card.title)}</h3>
                    <p className="text-gray-600">{t(card.desc)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Swirl Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white p-3 rounded-xl">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t(C.swirl.heading)}</h2>
            </div>

            <p className="text-lg leading-relaxed">{t(C.swirl.intro1)}</p>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100 my-6">
              <p className="text-lg font-medium text-gray-800">{t(C.swirl.callout)}</p>
            </div>

            {/* Zelfsturend Leren */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">1</span>
                {t(C.swirl.section1.title)}
              </h3>
              <p className="text-gray-600">{t(C.swirl.section1.intro)}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[Target, Calendar, Search].map((Icon, i) => {
                  const card = C.swirl.section1.cards[i];
                  return (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-sky-600 mb-2 flex items-center gap-2">
                        <Icon className="w-4 h-4" /> {t(card.title)}
                      </h4>
                      <p className="text-sm text-gray-600">{t(card.desc)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Spelenderwijs Groeien */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">2</span>
                {t(C.swirl.section2.title)}
              </h3>
              <p className="text-gray-600">{t(C.swirl.section2.intro)}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-yellow-600" /> {t(C.swirl.section2.individual.title)}
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>{t(C.swirl.section2.individual.items[0])}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{t(C.swirl.section2.individual.items[1])}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">→</span>
                      <span>{t(C.swirl.section2.individual.items[2])}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>{t(C.swirl.section2.individual.items[3])}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" /> {t(C.swirl.section2.team.title)}
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{t(C.swirl.section2.team.items[0])}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{t(C.swirl.section2.team.items[1])}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>{t(C.swirl.section2.team.items[2])}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>{t(C.swirl.section2.team.items[3])}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <p className="text-gray-700 flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>{t(C.swirl.section2.tip)}</span>
                </p>
              </div>
            </div>

            {/* Thema-Bingo */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">3</span>
                {t(C.swirl.section3.title)}
              </h3>
              <p className="text-gray-600">{t(C.swirl.section3.intro)}</p>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 mt-4">
                <h4 className="font-bold text-purple-700 mb-2">{t(C.swirl.section3.howHeading)}</h4>
                <p className="text-gray-600 mb-3">{t(C.swirl.section3.how1)}</p>
                <p className="text-gray-700 font-medium">{t(C.swirl.section3.how2)}</p>
              </div>
            </div>

            {/* Waarom dit werkt */}
            <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-600" /> {t(C.swirl.why.title)}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t(C.swirl.why.body)}</p>
            </div>
          </div>
        </motion.section>

        {/* Navigation to Leren */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t(C.cta.title)}</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">{t(C.cta.body)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-rose-500 hover:bg-gray-100 font-bold text-lg"
            >
              <Link href="/leren">{t(C.cta.ctaLeren)}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 font-bold text-lg"
            >
              <Link href="/webshop">{t(C.cta.ctaWebshop)}</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SpelenPage;
