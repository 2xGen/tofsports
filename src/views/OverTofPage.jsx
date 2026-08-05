'use client';

import React, { useEffect } from 'react';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import SectionJumpNav from '@/components/overTof/SectionJumpNav';
import OverTofSection from '@/components/overTof/OverTofSection';
import MissieVisieContent from '@/components/overTof/sections/MissieVisieContent';
import KnltbContent from '@/components/overTof/sections/KnltbContent';
import TofMethodeContent from '@/components/overTof/sections/TofMethodeContent';
import TofScoreContent from '@/components/overTof/sections/TofScoreContent';
import MagneetpostersContent from '@/components/overTof/sections/MagneetpostersContent';
import LerarenAppContent from '@/components/overTof/sections/LerarenAppContent';
import OverTofDividerImage, { OVER_TOF_DIVIDER_IMAGES } from '@/components/overTof/OverTofDividerImage';
import { getPageHeroImage } from '@/data/heroSlides';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const SECTION_CONTENT = {
  'visie-missie': MissieVisieContent,
  knltb: KnltbContent,
  'tof-methode': TofMethodeContent,
  'tof-score': TofScoreContent,
  magneetposters: MagneetpostersContent,
  'leraren-app': LerarenAppContent,
};

const ANCHOR_SECTIONS = new Set(['visie-missie', 'tof-methode', 'tof-score']);

const OverTofPage = () => {
  const { locale } = useLocale();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return undefined;

    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const timer = setTimeout(scrollToHash, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/over-tof')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>
              {ot(locale, OVER_TOF.page.title)}
            </PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {ot(locale, OVER_TOF.page.subtitle)}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <SectionJumpNav />

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {OVER_TOF.sections.map((section, index) => {
          const Content = SECTION_CONTENT[section.id];
          return (
            <React.Fragment key={section.id}>
              {index > 0 && (
                <OverTofDividerImage
                  {...OVER_TOF_DIVIDER_IMAGES[index - 1]}
                  alt={ot(locale, OVER_TOF.dividers[index - 1])}
                />
              )}
              <OverTofSection
                id={section.id}
                title={ot(locale, section.title)}
                subtitle={ot(locale, section.subtitle)}
                isFirst={index === 0}
              >
                <Content useAnchors={ANCHOR_SECTIONS.has(section.id)} />
              </OverTofSection>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OverTofPage;
