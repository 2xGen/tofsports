'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const KnltbPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get category from URL, default to 'tennis'
  const selectedCategory = searchParams.get('category') || 'tennis';

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    router.push(`/knltb?category=${category}`);
  };

  // Hero background gradient based on category
  const heroBackground = selectedCategory === 'padel'
    ? 'linear-gradient(to bottom right, rgba(180, 255, 200, 0.4), rgba(197, 223, 223, 0.5), rgba(62, 200, 188, 0.3))'
    : 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))';

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background - Changes based on category */}
        <div 
          className="absolute inset-0"
          style={{
            background: heroBackground,
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
              {selectedCategory === 'padel' ? 'TOF Padel' : 'Tenniskids'}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Powered by KNLTB
            </motion.p>

            {/* Category Buttons in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-3 md:gap-4 mt-8 flex-wrap relative z-30"
            >
              <Button
                onClick={() => handleCategoryChange('tennis')}
                variant={selectedCategory === 'tennis' ? 'default' : 'outline'}
                size="lg"
                className={`px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-bold flex-1 md:flex-none min-w-[120px] ${
                  selectedCategory === 'tennis'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300'
                }`}
              >
                Tennis
              </Button>
              <Button 
                onClick={() => handleCategoryChange('padel')}
                variant={selectedCategory === 'padel' ? 'default' : 'outline'}
                size="lg"
                className={`px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-bold flex-1 md:flex-none min-w-[120px] ${
                  selectedCategory === 'padel'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300'
                }`}
              >
                Padel
              </Button>
            </motion.div>
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
        {/* Tennis Content */}
        {selectedCategory === 'tennis' && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat is Tenniskids TOF?</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Elk kind centraal</h3>
                    <p className="text-lg leading-relaxed">
                      Tenniskids TOF is onderdeel van het KNLTB Tenniskids programma. TOF staat voor Training Ontwikkeling Fases en biedt structuur en ondersteuning bij de ontwikkeling van jeugdtennissers. Binnen Tenniskids TOF staat de jeugdspeler centraal. Spelers krijgen de ruimte om zich op hun eigen manier en in hun eigen tempo te ontwikkelen. Dit vergroot het spelplezier en de motivatie, en geeft zowel spelers, ouders als leraren inzicht in de voortgang.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mt-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Spelerskaart</h4>
                    <p className="text-lg leading-relaxed">
                      Elke jeugdspeler ontvangt een Tenniskids TOF spelerskaart, afgestemd op de Tenniskids-kleur waarin de speler actief is. De spelerskaart geeft inzicht in de ontwikkeling en wordt meegenomen naar trainingen en wedstrijden. Door de kaart aan de tennistas te hangen is deze altijd bij de hand.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Van level naar level</h4>
                    <p className="text-lg leading-relaxed mb-4">
                      Op de voorkant van de spelerskaart staan bolletjes die inzicht geven in vragen zoals:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-lg leading-relaxed mb-4">
                      <li>Wanneer is de speler klaar voor competitie of toernooien?</li>
                      <li>Wanneer kan de speler doorstromen naar een volgend niveau binnen dezelfde Tenniskids-kleur?</li>
                      <li>Wanneer is de speler klaar voor de volgende Tenniskids-kleur?</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">
                      De spelerskaart daagt jeugdspelers uit om van level naar level te groeien en zich voortdurend verder te ontwikkelen. In overleg met de leraar mag een bolletje worden ingekleurd zodra een level binnen een ontwikkelingsfase is behaald. De leraar houdt de ontwikkeling daarnaast bij in een digitale app.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Op de achterkant van de kaart kan een bolletje worden ingekleurd voor elke keer dat de speler op de baan staat, bijvoorbeeld tijdens tennislessen, wedstrijden, vrij spel of deelname aan clubactiviteiten.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 mt-6 border border-orange-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Sparen en beloning</h4>
                    <p className="text-lg leading-relaxed mb-4">
                      Wanneer de spelerskaart volledig is ingevuld, ontvangt de jeugdspeler een leuke beloning vanuit de leraar of vereniging. Op deze manier stimuleert Tenniskids TOF actieve deelname en blijvende betrokkenheid bij de tennissport.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Wil je meer weten over Tenniskids TOF? Vraag het aan de leraar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Padel Content */}
        {selectedCategory === 'padel' && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat is TOF padel?</h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Elk kind centraal</h3>
                    <p className="text-lg leading-relaxed">
                      TOF padel staat voor Training Ontwikkeling Fases padel en vormt de basis van het KNLTB padel jeugdprogramma. Het biedt leraren ondersteuning bij het opzetten en geven van lessen aan jeugd. Binnen TOF padel staat de jeugdspeler centraal! Spelers kunnen zich in hun eigen tempo en op hun eigen manier ontwikkelen, wat hun motivatie en spelplezier vergroot. Dit draagt bij aan het behoud van jeugdspelers en geeft zowel spelers als ouders inzicht in de padelontwikkeling.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mt-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Spelerskaart</h4>
                    <p className="text-lg leading-relaxed">
                      De jeugdspeler krijgt inzicht in de eigen padelontwikkeling via een persoonlijke spelerskaart, die aan de tas hangt. Er zijn drie verschillende spelerskaarten, afgestemd op het ontwikkelingsniveau. Op de voorkant van de kaart staat in welke fase de speler zich bevindt. Op de achterkant kunnen spelers na elke les, vrij spel, clubevent (zoals een oliebollentoernooi of jeugdkamp) of wedstrijddag een vakje inkleuren. Door samen te bekijken welke vakjes nog moeten worden ingekleurd, raken spelers extra gemotiveerd. De spelerskaart bevordert zo ook (meer) interactie en betere communicatie tussen leraar, jeugdspeler en ouder.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Ontwikkelingsmatrix</h4>
                    <p className="text-lg leading-relaxed mb-4">
                      De ontwikkeling van jeugdspelers wordt uitgedrukt in competenties die zijn onderverdeeld in fases en levels. Deze competenties bestaan uit technische, tactische, mentale en sociale aspecten en zijn terug te vinden in de ontwikkelingsmatrix. TOF padel werkt met twee ontwikkelingsmatrixen, die overzichtelijk zijn uitgewerkt in het TOF padel handboek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Leraren App Section - Appears for both categories */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">De Leraren App</h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Een complete digitale assistent speciaal ontwikkeld voor tennis- en padelleraren. Met deze app heb je alle tools binnen handbereik om je trainingen te verbeteren en de voortgang van je spelers bij te houden.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Lesplannen</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Toegang tot een uitgebreide bibliotheek met lesplannen die perfect aansluiten bij het KNLTB jeugdprogramma.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Oefeningen</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Honderden oefeningen met duidelijke instructies en video's om je trainingen gevarieerd en effectief te maken.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Voortgangsregistratie</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Houd de ontwikkeling van elke speler bij en volg hun voortgang door de verschillende niveaus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Video Section - Below Content */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              TOF - Powered by KNLTB
            </h2>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/792932911?h=ad7b439e93"
                  width="640"
                  height="360"
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KnltbPage;
