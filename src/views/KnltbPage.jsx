'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import KnltbContent from '@/components/overTof/sections/KnltbContent';

const KnltbPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get('category') || 'tennis';
  const heroImage = getPageHeroImage('/knltb', selectedCategory);

  const handleCategoryChange = (category) => {
    router.push(`/knltb?category=${category}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={heroImage}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>
              {selectedCategory === 'padel' ? 'TOF Padel' : 'Tenniskids'}
            </PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>Powered by KNLTB</PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <KnltbContent category={selectedCategory} onCategoryChange={handleCategoryChange} />
      </div>
    </div>
  );
};

export default KnltbPage;
