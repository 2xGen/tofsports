'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import HubCardsGrid from '@/components/HubCardsGrid';
import { getPageHeroImage } from '@/data/heroSlides';

const HubPage = ({ title, subtitle, intro, items, heroRoute, columns = 3 }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage(heroRoute)} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{title}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>{subtitle}</PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {intro && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-gray-600">{intro}</p>
            </div>
          </motion.section>
        )}

        <HubCardsGrid items={items} columns={columns} />
      </div>
    </div>
  );
};

export default HubPage;
