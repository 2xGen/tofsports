'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const TofMethodePage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))',
          }}
        />
        <div className="container mx-auto px-4 relative z-30 py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="text-5xl md:text-7xl font-bold text-gray-800 relative z-30"
            >
              TOF Methode
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Spelen. Ontwikkelen. Verbinden. 365 dagen per jaar.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

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
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Ontwikkelen: Leren door te doen</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ontwikkeling stopt niet bij techniek alleen. Binnen TOF leren jeugdspelers spelenderwijs meer over tennis en padel, de spelregels én de clubcultuur.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Regels en fair play direct toepassen op de baan</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Samen leren tijdens speelformats en clubactiviteiten</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Meer zelfvertrouwen en zelfstandigheid</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Betere aansluiting tussen trainer, speler en club</li>
                </ul>
                <p className="text-gray-600 leading-relaxed italic">Een kind dat begrijpt hoe het spel werkt en zich thuis voelt op de club, speelt met meer plezier en blijft langer lid.</p>
              </div>
            </div>

            {/* 3. Verbinden */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">3</span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Verbinden: Samen bouwen aan clubgevoel</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  De TOF-methode versterkt de sociale kant van sport. Jeugdspelers worden geen losse deelnemers meer, maar actieve clubspelers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Meer ontmoetingen tussen jeugdleden</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Sterkere band met trainers en begeleiders</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Ouders raken meer betrokken bij de vereniging</li>
                  <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Een levendige jeugdstructuur die blijft groeien</li>
                </ul>
                <p className="text-gray-600 leading-relaxed italic">Zo ontstaat een clubcultuur waarin jeugdspelers elkaar uitdagen, ondersteunen en samen plezier maken.</p>
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
                Bij TOF stopt tennis en padel niet na één uur per week. Wij werken vanuit de 365-mentaliteit: jeugdspelers voelen zich het hele jaar door onderdeel van de vereniging. Vrij spelen, onderlinge challenges, clubactiviteiten en speelmomenten maken tennis en padel tot een doorlopende clubervaring. De TOF-methode helpt verenigingen om deze cultuur structureel te verankeren.
              </p>
              <Link
                href="/tof-score"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-md"
              >
                <span className="flex-shrink-0 text-2xl" role="img" aria-label="Tennisbal">🎾</span>
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
