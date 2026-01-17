'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const SparenPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Matching Other Pages Style */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background - Lime/Green theme for Sparen */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(163, 230, 53, 0.4), rgba(132, 204, 22, 0.5), rgba(101, 163, 13, 0.3))',
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
              Sparen
            </motion.h1>

            {/* Subtitle - fadeIn animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 relative z-30 max-w-2xl mx-auto"
            >
              Elk punt telt! Motiveer kinderen met beloningen en de TOF Score.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat zit er in het Sparen pakket?</h2>
            
            <p className="text-lg leading-relaxed">
              Met het sparen-systeem blijven kinderen gemotiveerd om vaker te spelen en hun doelen te bereiken. 
              Elk punt, elke les en elke prestatie telt mee voor een beloning!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TOF Score in de KNLTB Leraren App</h3>
                <p className="text-gray-600">Houd de voortgang van elke speler digitaal bij en beloon hun inzet met de officiële TOF Score.</p>
              </div>
              <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                <div className="text-4xl mb-4">🏅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buttons en Bandjes</h3>
                <p className="text-gray-600">Fysieke beloningen die kinderen trots kunnen dragen en verzamelen als bewijs van hun prestaties.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How it works Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hoe werkt het sparen?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-lime-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Punten verdienen</h4>
                  <p className="text-gray-600">Kinderen verdienen punten door te trainen, wedstrijden te spelen, vrij te spelen en mee te doen aan clubactiviteiten.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Voortgang bijhouden</h4>
                  <p className="text-gray-600">De trainer registreert de punten in de KNLTB Leraren App. Kinderen en ouders kunnen de voortgang volgen.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Beloningen ontvangen</h4>
                  <p className="text-gray-600">Bij bepaalde mijlpalen ontvangen kinderen buttons en bandjes als beloning voor hun inzet!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Het 365-doel</h3>
              <p className="text-gray-700 leading-relaxed">
                Het ultieme doel is om 365 punten per jaar te behalen - dat is gemiddeld één punt per dag! 
                Dit stimuleert kinderen om het hele jaar door actief te blijven en de weg naar de club te vinden.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Why Sparen Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Waarom sparen werkt</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                  <span className="text-xl">🔥</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Intrinsieke motivatie</h4>
                  <p className="text-gray-600">Kinderen willen zelf beter worden en meer punten halen.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                  <span className="text-xl">👀</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Zichtbare erkenning</h4>
                  <p className="text-gray-600">Buttons en bandjes zijn een tastbaar bewijs van prestaties.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                  <span className="text-xl">🏠</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Clubbinding</h4>
                  <p className="text-gray-600">Kinderen komen vaker naar de club, ook buiten de lessen om.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Meetbare voortgang</h4>
                  <p className="text-gray-600">Trainers en ouders kunnen de ontwikkeling volgen.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Navigation to Webshop */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Alles voor jouw club
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Bekijk alle producten voor Spelen, Leren en Sparen in onze webshop en geef je jeugdprogramma een boost!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold text-lg"
            >
              <Link href="/webshop">
                Bekijk Webshop →
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-sky-500 text-white hover:bg-sky-600 font-bold text-lg"
            >
              <Link href="/spelen">
                Terug naar Spelen
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SparenPage;
