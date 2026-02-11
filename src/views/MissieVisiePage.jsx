'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const MissieVisiePage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
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
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-5xl md:text-7xl font-bold text-gray-800 relative z-30"
            >
              Visie & Missie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Onze visie en missie voor tennis- en padeljeugd
            </motion.p>
          </div>
        </div>

        {/* Curved Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Visie Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <div className="mb-8">
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">Powered by KNLTB</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1 mb-6">Visie</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4">De 365-mentaliteit</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Wij geloven dat verenigingen sterker worden wanneer jeugdspelers het hele jaar door actief en met plezier onderdeel zijn van het clubleven. Niet alleen tijdens de training, maar 365 dagen per jaar. Daarom zetten we jeugdspelers centraal en zien we tennis en padel als een doorlopende clubervaring waarin sport, plezier en ontmoeting samenkomen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 md:p-8 border-l-4 border-orange-500">
                <p className="text-base font-semibold text-gray-900 mb-4">De TOF 365-Score maakt betrokkenheid zichtbaar. Punten worden verzameld door:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">1</span>
                    <span>6 tot 10 oefenformats voor zelfstandig en samen spelen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">2</span>
                    <span>Deelname aan clubkampioenschappen en clubactiviteiten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">3</span>
                    <span>Vrij spelen met andere jeugdleden, laagdrempelig</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Missie Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Missie</h2>
              <p className="text-xl font-bold text-orange-500 mb-8">Activeren – Ontwikkelen – Verbinden</p>

              <p className="text-xl font-semibold text-gray-900 mb-6">TOF Sports maakt van elke jeugdspeler een clubspeler.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Wij brengen de vereniging tot leven door jeugdspelers in beweging te brengen. Onze missie: kinderen activeren tot meer speelmomenten, hen breed laten ontwikkelen en blijvend verbinden aan hun vereniging. Met de TOF-methode groeien jeugdleden van lesklant naar actieve clubspeler en clubambassadeur.
              </p>

              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Wat dit oplevert</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                  <span className="text-orange-500 text-xl">→</span>
                  <span className="text-gray-700">Meer actieve jeugdleden, ook buiten de training</span>
                </div>
                <div className="flex gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                  <span className="text-orange-500 text-xl">→</span>
                  <span className="text-gray-700">Meer spelplezier en snellere ontwikkeling</span>
                </div>
                <div className="flex gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                  <span className="text-orange-500 text-xl">→</span>
                  <span className="text-gray-700">Sterkere binding tussen jeugd, trainers en vereniging</span>
                </div>
                <div className="flex gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                  <span className="text-orange-500 text-xl">→</span>
                  <span className="text-gray-700">Duurzaam ledenbehoud en gezonde clubcultuur</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-orange-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Klaar om jouw vereniging tot leven te brengen?</h4>
                <p className="text-gray-600 mb-6">Ontdek de TOF-methode en de 365-mentaliteit.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/tof-methode" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
                    TOF-methode
                  </Link>
                  <Link href="/tof-score" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border-2 border-orange-500 text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
                    TOF Score
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-orange-600 font-semibold hover:bg-orange-50 transition-colors">
                    Plan een kennismaking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MissieVisiePage;
