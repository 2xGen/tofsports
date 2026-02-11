'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const TofScorePage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
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
              TOF Score
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Elk speelmoment telt.
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
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">De TOF 365-Score: meten wat écht belangrijk is</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Om jeugdparticipatie zichtbaar en meetbaar te maken, introduceert TOF Sports de TOF 365-Score: dé standaard voor actieve jeugdleden binnen tennis- en padelverenigingen. De score beloont meedoen — hoe vaker een jeugdspeler speelt en deelneemt aan het clubleven, hoe hoger de score.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white font-bold text-lg">
                <span>Doel:</span>
                <span>365 punten per jaar per jeugdspeler</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Hoe werkt + punten */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">Punten verdienen</span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1 mb-4">Hoe werkt de TOF 365-Score?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Punten worden verzameld door speelmomenten en clubactiviteiten:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  'Deelname aan TOF-oefenformats (6–10 per jaar)',
                  'Clubkampioenschappen en clubactiviteiten',
                  'Vrij spelen met andere jeugdleden',
                  'Onderlinge challenges op de club',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic">Elk bezoek aan de vereniging wordt zo waardevol en zichtbaar beloond.</p>
            </div>
          </div>
        </motion.section>

        {/* Spelen zonder prestatiedruk - benefit cards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Spelen zonder prestatiedruk</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Deelname telt meer dan resultaat. Inzet, aanwezigheid en plezier staan centraal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Meer motivatie om te spelen',
                  'Meer zelfvertrouwen bij jeugdspelers',
                  'Een veilige leeromgeving',
                  'Snellere en bredere ontwikkeling',
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                    <span className="text-orange-500 text-xl">→</span>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Zichtbare voortgang */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Zichtbare voortgang</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                De score wordt zichtbaar gemaakt door de TOF Score Poster op de club, digitale registratie in de TOF Score App en fysieke TOF-buttons bij mijlpalen (100, 500, 1000 punten). De tas van een jeugdspeler wordt zo een uithangbord van inzet en betrokkenheid.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Gamification + Digitale tool - two columns on desktop */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Gamification en motivatie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jeugdspelers werken toe naar XP 500 of XP 1000. “Wat is jouw TOF Score status?” zorgt voor extra betrokkenheid. Meedoen wordt vanzelf leuker: hoe TOF is dat?
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Digitale tool</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Verenigingen houden scores en progressie digitaal bij. De tool richt zich op deelname en inzet. Aanwezigheid, betrokkenheid en initiatief tellen mee — het beheer wordt overzichtelijk en de 365-mentaliteit wordt versterkt.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Waarom het werkt - compact list */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Waarom de TOF 365-Score werkt</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                {[
                  'Stimuleert zelfstandig spelen',
                  'Vergroot plezier en betrokkenheid',
                  'Verbindt jeugdspelers aan elkaar en aan de club',
                  'Ondersteunt trainers en verenigingen met structuur',
                  'Draagt bij aan duurzaam ledenbehoud',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-500 text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm italic border-l-4 border-orange-200 pl-4">
                De TOF 365-Score is geen doel op zich, maar een krachtig hulpmiddel om de 365-mentaliteit te versterken.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-orange-200">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Klaar om jeugdparticipatie te laten groeien?</h4>
            <p className="text-gray-600 mb-6 text-sm">
              Met de TOF-methode en de TOF 365-Score bouwen verenigingen aan een actieve, levendige jeugdafdeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tof-methode"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
              >
                Ontdek de TOF-methode
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors"
              >
                Plan een kennismaking
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TofScorePage;
