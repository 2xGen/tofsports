'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Tag } from 'lucide-react';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { getKennisbankArticles, getKennisbankCategories } from '@/data/kennisbank';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

const formatDate = (iso, locale) => {
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
};

const KennisbankPage = () => {
  const { locale, t } = useLocale();
  const allLabel = t('knowledge.all');
  const guideLabel = t('knowledge.guide');
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = useMemo(() => getKennisbankArticles(locale), [locale]);
  const categoryOptions = useMemo(() => getKennisbankCategories(locale), [locale]);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return articles;
    return articles.filter((a) => a.category === guideLabel || a.category === 'Gids' || a.category === 'Guide');
  }, [activeCategory, articles, guideLabel]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/kennisbank')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{t('knowledge.title')}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {t('knowledge.subtitle')}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-0.5 h-8 w-8 shrink-0 text-orange-500" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                  {t('knowledge.introTitle')}
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {t('knowledge.introBody')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mb-8 flex flex-wrap gap-2">
          {categoryOptions.map((cat) => {
            const isAll = cat === allLabel || cat === 'Alle' || cat === 'All';
            const selected = isAll ? activeCategory === 'all' : activeCategory === 'guide';
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(isAll ? 'all' : 'guide')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? 'bg-orange-500 text-white'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredArticles.length === 0 ? (
          <p className="py-12 text-center text-gray-500">{t('knowledge.empty')}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <motion.li
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={article.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  {article.image && (
                    <div className="relative aspect-[16/10] w-full bg-gray-100">
                      <Image
                        src={article.image}
                        alt={article.imageAlt ?? article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        quality={85}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 font-medium text-orange-700">
                        <Tag className="h-3 w-3" aria-hidden />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden />
                        {formatDate(article.date, locale)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1B144C]">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1B144C]">
                      {locale === 'en' ? 'Read the guide' : 'Lees de gids'}{' '}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default KennisbankPage;
