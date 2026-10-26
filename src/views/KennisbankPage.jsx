'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import PageHero from '@/components/PageHero';
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
    <div className="min-h-screen bg-white pt-20">
      <PageHero
        image={getPageHeroImage('/kennisbank')}
        minHeight="40vh"
        showWave={false}
        imageOnly
        objectPosition="object-[center_28%]"
      />

      <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center md:mb-12"
        >
          <h1 className="font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl lg:text-[2.75rem]">
            {t('knowledge.introTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-tof-indigo md:mt-5 md:text-lg md:leading-8">
            {t('knowledge.introBody')}
          </p>

          <div className="mt-8 flex flex-wrap justify-start gap-3 md:mt-10">
            {categoryOptions.map((cat) => {
              const isAll = cat === allLabel || cat === 'Alle' || cat === 'All';
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(isAll ? 'all' : 'guide')}
                  className="rounded-full bg-tof-indigo px-6 py-2.5 text-sm font-semibold text-tof-yellow transition-colors hover:bg-tof-indigo/90 md:px-8 md:py-3 md:text-base"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.section>

        {filteredArticles.length === 0 ? (
          <p className="py-12 text-center text-tof-indigo/60">{t('knowledge.empty')}</p>
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
                  className="group flex h-full flex-col overflow-hidden border border-tof-indigo/10 bg-white transition-shadow hover:shadow-md"
                >
                  {article.image && (
                    <div className="relative aspect-[16/10] w-full bg-[#F3F3F5]">
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
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-tof-indigo/70">
                      <span className="inline-flex items-center gap-1 rounded-full bg-tof-indigo/10 px-2.5 py-1 font-medium text-tof-indigo">
                        <Tag className="h-3 w-3" aria-hidden />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden />
                        {formatDate(article.date, locale)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-tof-indigo group-hover:text-tof-indigo/80">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-tof-indigo/75">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tof-indigo">
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
