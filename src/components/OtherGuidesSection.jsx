'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getGuideSlug, localizeGuide } from '@/data/kennisbankGuides';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

const OtherGuidesSection = ({ guides, currentSlug }) => {
  const { locale, t } = useLocale();
  const otherGuides = guides
    .filter((guide) => guide.slug !== currentSlug && guide.id !== currentSlug)
    .map((guide) => localizeGuide(guide, locale));

  if (otherGuides.length === 0) return null;

  return (
    <section className="mt-16 border-t border-tof-indigo/50 pt-12">
      <h2 className="mb-6 font-heading text-2xl font-semibold text-tof-indigo md:text-3xl">
        {t('knowledge.otherGuides')}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {otherGuides.map((guide, index) => (
          <motion.article
            key={guide.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Link
              href={`/kennisbank/${getGuideSlug(guide, locale)}`}
              className="group flex h-full flex-col overflow-hidden border border-tof-indigo/10 bg-white transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full bg-[#F3F3F5]">
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  quality={80}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-tof-indigo/70">
                  {guide.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-tof-indigo group-hover:text-tof-indigo/80">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-tof-indigo/75">
                  {guide.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tof-indigo">
                  {guide.ctaText} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/kennisbank"
          className="inline-flex items-center gap-2 font-semibold text-tof-indigo hover:underline"
        >
          {t('knowledge.allGuides')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default OtherGuidesSection;
