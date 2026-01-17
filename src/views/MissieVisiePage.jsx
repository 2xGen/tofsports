'use client';

import React, { useRef } from 'react';
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
              Missie & Visie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Onze missie en visie voor tennis en padel
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
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Visie Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Visie</h2>
                <p className="text-lg text-gray-600 font-medium">Powered by KNLTB</p>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">De 365-Mentaliteit</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Wij maken van elke jeugdspeler een clubspeler. Onze visie is dat tennis en padel voor kinderen niet stopt na het uur training, maar dat zij 365 dagen per jaar de weg naar de club weten te vinden. Door de TOF 365-score als standaard te introduceren, creëren we een nieuwe cultuur waarin vrij spelen, clubactiviteiten en onderlinge uitdagingen de motor zijn achter spelplezier en ledenbehoud.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mt-6">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    Alle tennis en padel jeugdspelers halen per jaar een TOF score van 365 punten op hun club of vereniging. Dit wordt bereikt door:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-3">•</span>
                      <span>6 tot 10 keer oefenformat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-3">•</span>
                      <span>Clubkampioenschappen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 font-bold mr-3">•</span>
                      <span>Vrij spelen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Missie Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Missie</h2>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Activeren, Ontwikkelen & Verbinden</h3>
                  <p className="text-lg leading-relaxed">
                    TOF Sports brengt de club tot leven. Onze missie is om de sportieve omgeving van kinderen te verrijken met producten die uitdagen tot extra beweging. Wij helpen verenigingen om jeugdspelers te transformeren van 'lesklanten' naar 'clubambassadeurs'. Met de TOF-methode borgen we dat elk kind zich optimaal ontwikkelt, vaker op de baan staat en voor de lange termijn verbonden blijft aan de club.
                  </p>
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
