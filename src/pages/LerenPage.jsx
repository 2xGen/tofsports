'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const LerenPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Matching Other Pages Style */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background - Rose/Pink theme for Leren */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(251, 113, 133, 0.4), rgba(244, 63, 94, 0.5), rgba(225, 29, 72, 0.3))',
          }}
        />

        <div className="container mx-auto px-4 relative z-30 py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            {/* Main Heading - zoomInRight animation */}
            <motion.h1
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-5xl md:text-7xl font-bold text-white relative z-30"
            >
              Leren
            </motion.h1>

            {/* Subtitle - fadeIn animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 relative z-30 max-w-2xl mx-auto"
            >
              Kennis opdoen was nog nooit zo leuk! Ontdek onze interactieve leermiddelen.
            </motion.p>
          </div>
        </div>

        {/* Curved Shape Divider - negative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat zit er in het Leren pakket?</h2>
            
            <p className="text-lg leading-relaxed">
              Met onze interactieve leermiddelen maak je van elke les een ontdekkingsreis. 
              Kinderen leren spelenderwijs de regels, technieken en tactieken van tennis en padel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kennis producten</h3>
                <p className="text-gray-600">Educatieve materialen die tenniskennis op een speelse manier overbrengen.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ja-Nee kaarten</h3>
                <p className="text-gray-600">Interactieve vragenkaarten waarmee kinderen hun kennis kunnen testen op een leuke manier.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zoek de Schat</h3>
                <p className="text-gray-600">Een spannend spel dat kinderen uitdaagt om al zoekend nieuwe vaardigheden te ontdekken.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Learning Matters Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Waarom interactief leren?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Beter onthouden</h4>
                    <p className="text-gray-600">Door actief bezig te zijn met de stof onthouden kinderen meer dan bij passief luisteren.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                    <span className="text-xl">😊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Meer plezier</h4>
                    <p className="text-gray-600">Leren voelt niet als 'moeten' maar als 'willen' wanneer het een spel wordt.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Samen leren</h4>
                    <p className="text-gray-600">Onze materialen stimuleren samenwerking en competitie in de groep.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Zichtbare voortgang</h4>
                    <p className="text-gray-600">Kinderen zien direct wat ze al weten en waar ze nog kunnen groeien.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Navigation to Sparen */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klaar om te sparen?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Ontdek hoe kinderen punten kunnen verdienen en beloningen kunnen verzamelen met de TOF Score!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-lime-600 hover:bg-gray-100 font-bold text-lg"
            >
              <Link href="/sparen">
                Bekijk Sparen →
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 font-bold text-lg"
            >
              <Link href="/webshop">
                Bekijk Webshop
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LerenPage;
