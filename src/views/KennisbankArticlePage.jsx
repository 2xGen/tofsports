'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import PageHero from '@/components/PageHero';
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
    <div className="min-h-screen bg-white pt-20">
      <PageHero
        image={heroImage}
        minHeight="40vh"
        showWave={false}
        imageOnly
        objectPosition="object-[center_28%]"
      />

      <article className="container mx-auto max-w-5xl px-4 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 text-center md:mb-10"
        >
          <h1 className="font-heading text-3xl font-bold tracking-tight !text-tof-indigo md:text-4xl lg:text-[2.75rem]">
            {guide.heroTitle}
          </h1>
          {guide.subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-tof-indigo md:text-lg md:leading-8">
              {guide.subtitle}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-tof-indigo/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-tof-indigo/10 px-3 py-1 font-medium text-tof-indigo">
              <Tag className="h-3.5 w-3.5" aria-hidden />
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {formatDate(guide.date, locale)}
            </span>
            <Link href="/kennisbank" className="font-medium text-tof-indigo hover:underline">
              {t('knowledge.back')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="bg-[#F3F3F5] p-6 md:p-10"
        >
          <KennisbankArticleBody sections={guide.sections} />
        </motion.div>
      </article>

      <section className="border-t border-tof-indigo/50 bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <PakkettenCardsGrid
            title={t('knowledge.nextStepTitle')}
            description={t('knowledge.nextStepBody')}
            showPackageDetails={false}
            showSubtitle={false}
            light
            overlayStyle
            square
          />
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <OtherGuidesSection guides={KENNISBANK_GUIDES} currentSlug={rawGuide.slug} />
      </section>
    </div>
  );
};

export default KennisbankArticlePage;
