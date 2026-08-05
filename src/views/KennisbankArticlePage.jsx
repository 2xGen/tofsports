'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import PageHero, { PageHeroEyebrow, PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import KennisbankArticleBody from '@/components/KennisbankArticleBody';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';
import OtherGuidesSection from '@/components/OtherGuidesSection';
import { KENNISBANK_GUIDES, localizeGuide } from '@/data/kennisbankGuides';
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

const KennisbankArticlePage = ({ guide: rawGuide }) => {
  const { locale, t } = useLocale();
  const guide = localizeGuide(rawGuide, locale);
  const heroImage = { src: guide.image, alt: guide.imageAlt };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={heroImage} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroEyebrow heroInView={heroInView}>{t('knowledge.title')}</PageHeroEyebrow>
            <PageHeroTitle heroInView={heroInView}>{guide.heroTitle}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>{guide.subtitle}</PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <article className="container mx-auto max-w-5xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-500"
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 font-medium text-orange-700">
            <Tag className="h-3.5 w-3.5" aria-hidden />
            {guide.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" aria-hidden />
            {formatDate(guide.date, locale)}
          </span>
          <Link href="/kennisbank" className="font-medium text-[#1B144C] hover:underline">
            {t('knowledge.back')}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-10"
        >
          <KennisbankArticleBody sections={guide.sections} />
        </motion.div>
      </article>

      <section className="border-t border-gray-200 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <PakkettenCardsGrid
            title={t('knowledge.nextStepTitle')}
            description={t('knowledge.nextStepBody')}
            showPackageDetails={false}
          />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-20">
        <OtherGuidesSection guides={KENNISBANK_GUIDES} currentSlug={rawGuide.slug} />
      </section>
    </div>
  );
};

export default KennisbankArticlePage;
