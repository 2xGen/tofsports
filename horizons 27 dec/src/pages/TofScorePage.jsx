'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const TofScorePage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Matching Webshop Style */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background - Static */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))',
          }}
        />

        <div className="container mx-auto px-4 relative z-30 py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            {/* Main Heading - zoomInRight animation */}
            <motion.h1
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-5xl md:text-7xl font-bold text-gray-800 relative z-30"
            >
              TOF Score
            </motion.h1>

            {/* Subtitle - fadeIn animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Houd scores en progressie digitaal bij. Een onmisbare tool voor het organiseren van interne competities en toernooien.
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

      {/* Content Sections */}
      <div id="content" className="container mx-auto px-4 py-12 max-w-7xl">
        {/* De 365-Mentaliteit Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">De 365-Mentaliteit</h2>
              
              <p>
                Wij maken van elke jeugdspeler een clubspeler. Onze visie is dat tennis en padel voor kinderen niet stopt na het uur training, maar dat zij 365 dagen per jaar de weg naar de club weten te vinden. Door de TOF 365-score als standaard te introduceren, creëren we een nieuwe cultuur waarin vrij spelen, clubactiviteiten en onderlinge uitdagingen de motor zijn achter spelplezier en ledenbehoud.
              </p>

              <p>
                Alle tennis en padel jeugdspelers halen per jaar een TOF score van 365 punten op hun club of vereniging. Dit wordt bereikt door:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>6 tot 10 keer oefenformat</li>
                <li>Clubkampioenschappen</li>
                <li>Vrij spelen</li>
              </ul>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof%20score%20punten%20hori.png"
                alt="TOF Score Punten Horizontaal"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </motion.section>

        {/* TOF Score Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof%20score%20punten%20square.png"
                alt="TOF Score Punten Vierkant"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>

            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">TOF Score</h2>
              
              <p>
                Je kunt een tenniswedstrijd winnen of verliezen waarbij blijdschap en teleurstelling dicht bij elkaar liggen. Bij TOF score telt elke punt ongeacht winst of verlies. Hoe vaak je speelt is belangrijker dan hoe vaak je wint.
              </p>

              <p>
                'Wat is jouw TOF score status?' Op naar XP 500 of zelfs XP 1000. Kinderen worden hierdoor gemotiveerd om deel te nemen aan alle events waar TOF score aan gekoppeld is. Hoe tof is dat?!
              </p>

              <p>
                Met TOF Score houd je scores en progressie digitaal bij. Het is een onmisbare tool voor het organiseren van interne competities en toernooien, waarbij elke speler beloond wordt voor deelname en inzet, niet alleen voor winst.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TofScorePage;
