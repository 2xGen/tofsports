'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

const LerarenAppPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/leraren-app')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>De Leraren App</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Een complete digitale assistent voor tenniscoaches met lesplannen, oefeningen en
              voortgangsregistratie.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Over de Leraren App</h2>
            
            <p className="text-lg leading-relaxed">
              De Leraren App is een complete digitale assistent speciaal ontwikkeld voor tenniscoaches. Met deze app heb je alle tools binnen handbereik om je trainingen te verbeteren en de voortgang van je spelers bij te houden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lesplannen</h3>
                <p className="text-gray-600">
                  Toegang tot een uitgebreide bibliotheek met lesplannen die perfect aansluiten bij het Tenniskids programma.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Oefeningen</h3>
                <p className="text-gray-600">
                  Honderden oefeningen met duidelijke instructies en video's om je trainingen gevarieerd en effectief te maken.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Voortgangsregistratie</h3>
                <p className="text-gray-600">
                  Houd de ontwikkeling van elke speler bij en volg hun voortgang door de verschillende Tenniskids niveaus.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LerarenAppPage;

