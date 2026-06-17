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

const OverTofPage = () => {
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
            <PageHeroTitle heroInView={heroInView}>Over TOF</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Alles over onze visie, methode en tools voor tennis- en padelverenigingen.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <SectionJumpNav />

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <OverTofSection
          id="visie-missie"
          title="Visie & Missie"
          subtitle="De 365-mentaliteit: waarom we jeugd het hele jaar betrokken willen houden op de club."
          isFirst
        >
          <MissieVisieContent useAnchors />
        </OverTofSection>

        <OverTofDividerImage {...OVER_TOF_DIVIDER_IMAGES[0]} />

        <OverTofSection
          id="knltb"
          title="KNLTB"
          subtitle="Powered by KNLTB — Tenniskids TOF en TOF padel als basis van je jeugdprogramma."
        >
          <KnltbContent />
        </OverTofSection>

        <OverTofDividerImage {...OVER_TOF_DIVIDER_IMAGES[1]} />

        <OverTofSection
          id="tof-methode"
          title="TOF Methode"
          subtitle="Spelen, leren en sparen: het Plug & Play systeem voor je vereniging."
        >
          <TofMethodeContent useAnchors />
        </OverTofSection>

        <OverTofDividerImage {...OVER_TOF_DIVIDER_IMAGES[2]} />

        <OverTofSection
          id="tof-score"
          title="TOF Score"
          subtitle="Meet betrokkenheid en motiveer jeugd met punten, status en speelmomenten."
        >
          <TofScoreContent useAnchors />
        </OverTofSection>

        <OverTofDividerImage {...OVER_TOF_DIVIDER_IMAGES[3]} />

        <OverTofSection
          id="magneetposters"
          title="Magneetposters"
          subtitle="Format-posters op magneet voor whiteboard — professioneel op de baan."
        >
          <MagneetpostersContent />
        </OverTofSection>

        <OverTofDividerImage {...OVER_TOF_DIVIDER_IMAGES[4]} />

        <OverTofSection
          id="leraren-app"
          title="Leraren-app"
          subtitle="Lesplannen, TOF Score en clubbeheer digitaal in de KNLTB leraren-app."
        >
          <LerarenAppContent />
        </OverTofSection>
      </div>
    </div>
  );
};

export default OverTofPage;
