'use client';

import React from 'react';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import TofMethodeContent from '@/components/overTof/sections/TofMethodeContent';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const SECTION = OVER_TOF.sections.find((s) => s.id === 'tof-methode');

const TofMethodePage = () => {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/tof-methode')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{ot(locale, SECTION.title)}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {ot(locale, SECTION.subtitle)}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <TofMethodeContent />
      </div>
    </div>
  );
};

export default TofMethodePage;
