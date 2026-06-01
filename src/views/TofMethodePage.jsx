'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

const TofMethodePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/tof-methode')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>TOF Methode</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Spelen. Leren. Sparen. 365 dagen per jaar.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Intro */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">De TOF-methode: van lesklant naar actieve clubspeler</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bij TOF Sports geloven we dat jeugdspelers pas echt groeien wanneer tennis en padel méér zijn dan een wekelijkse training. Met de TOF-methode helpen wij verenigingen om jeugdspelers te activeren, te ontwikkelen en duurzaam te verbinden aan het clubleven.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
                <p className="text-lg text-gray-700 leading-relaxed">
                  De TOF-methode is gebouwd op één duidelijke overtuiging: een sterke jeugdafdeling ontstaat wanneer kinderen zich 365 dagen per jaar welkom en betrokken voelen op de club. Daarom verleggen we de focus van alleen trainen naar vaker spelen, samen ontdekken en actief deelnemen aan de vereniging.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Drie pijlers */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">De drie pijlers van de TOF-methode</h2>

          <div className="space-y-8">
            {/* 1. Spelen */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">1</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Spelen: De basis van een actieve club</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Spelen is de motor van plezier en ontwikkeling. Binnen de TOF-methode creëren we laagdrempelige speelmomenten op de eigen vereniging, waarin jeugdspelers elkaar ontmoeten en samen actief zijn.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Veilig en vertrouwd spelen op de eigen vereniging</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Teamgevoel en vriendschappen staan centraal</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Geen prestatiedruk, wel uitdaging en plezier</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Geschikt voor alle niveaus</li>
                </ul>
                <p className="text-gray-600 leading-relaxed italic">Door het spelen terug te brengen groeit de vereniging uit tot een plek waar kinderen graag zijn: ook buiten de training om.</p>
              </div>
            </div>

            {/* 2. Ontwikkelen */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">2</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Leren: Ontwikkelen door te doen</h3>
                </div>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Regels direct toepassen op de baan</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Fairplay direct toepassen op en naast de baan</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Mentaal weerbaarder op en naast de baan</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Meer zelfvertrouwen en zelfstandigheid</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Meer interactie tussen speler(s), leraar en vereniging</li>
                </ul>
              </div>
            </div>

            {/* 3. Verbinden */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">3</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Sparen: Samen bouwen aan clubgevoel</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Binnen gamification betekent sparen dat kinderen (samen) punten en beloningen verzamelen door actief mee te doen en inzet te tonen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Maakt deelname leuker</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Versterkt onderlinge verbinding</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Jeugdleden voelen zich meer betrokken</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Draagt bij aan een levendige jeugdcultuur op de vereniging</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 365-mentaliteit + CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">De 365-mentaliteit</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Bij TOF Sports stopt het niet na een lesuur per week. Wij werken vanuit de 365-mentaliteit: jeugdspelers voelen zich het hele jaar door onderdeel van de vereniging. Vrij spelen, onderlinge challenges, clubactiviteiten en speelmomenten maken sport tot een doorlopende clubervaring, waarbij de TOF-methode helpt om deze cultuur structureel te verankeren.
              </p>
              <Link
                href="/tof-score"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md"
              >
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                Ontdek hoe de TOF Score deze betrokkenheid meetbaar maakt
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TofMethodePage;
