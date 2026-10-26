'use client';

import React, { useEffect } from 'react';
import PageHero from '@/components/PageHero';
import SectionJumpNav from '@/components/overTof/SectionJumpNav';
import OverTofSection from '@/components/overTof/OverTofSection';
import MissieVisieContent from '@/components/overTof/sections/MissieVisieContent';
import KnltbContent from '@/components/overTof/sections/KnltbContent';
import TofMethodeContent from '@/components/overTof/sections/TofMethodeContent';
import TofScoreContent from '@/components/overTof/sections/TofScoreContent';
import LerarenAppContent from '@/components/overTof/sections/LerarenAppContent';
import OverTofDividerImage, { OVER_TOF_DIVIDER_IMAGES } from '@/components/overTof/OverTofDividerImage';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const OVER_TOF_HERO = {
  src: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/waarom%20tof%20500.jpg',
  alt: 'Waarom TOF — jeugd op de club',
};

const SECTION_CONTENT = {
  'visie-missie': MissieVisieContent,
  knltb: KnltbContent,
  'tof-methode': TofMethodeContent,
  'tof-score': TofScoreContent,
  'leraren-app': LerarenAppContent,
};

const ANCHOR_SECTIONS = new Set(['visie-missie', 'tof-methode', 'tof-score']);

/** Show divider image before these section indexes (after knltb / methode) */
const DIVIDER_BEFORE_INDEX = new Set([2, 3]);

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
    <div className="min-h-screen bg-white pt-20">
      <PageHero
        image={OVER_TOF_HERO}
        minHeight="40vh"
        showWave={false}
        imageOnly
        objectPosition="object-[center_28%]"
      />

      <SectionJumpNav />

      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-3 md:pb-16 md:pt-4">
        {OVER_TOF.sections.map((section, index) => {
          const Content = SECTION_CONTENT[section.id];
          if (!Content) return null;

          const dividerImage = OVER_TOF_DIVIDER_IMAGES[index - 1];
          const dividerAlt = OVER_TOF.dividers[index - 1];

          return (
            <React.Fragment key={section.id}>
              {DIVIDER_BEFORE_INDEX.has(index) && dividerImage && (
                <OverTofDividerImage
                  {...dividerImage}
                  alt={dividerAlt ? ot(locale, dividerAlt) : dividerImage.alt}
                />
              )}
              <OverTofSection
                id={section.id}
                title={ot(locale, section.title)}
                subtitle={ot(locale, section.subtitle)}
                isFirst={index === 0}
                centered={section.id === 'knltb'}
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
