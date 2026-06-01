'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, BadgeCheck, Map, Lightbulb, Brain, Smile, Users, TrendingUp } from 'lucide-react';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

const LerenPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/leren')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>Leren</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Ontdek onze inspirerende leermiddelen. Kennis opdoen gaat vanzelf!
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

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
              Met onze inspirerende leermiddelen wordt je jeugdprogramma een ontdekkingsreis waarin kinderen spelenderwijs inzicht krijgen in inzet, gedrag en spelregels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kennis producten</h3>
                <p className="text-gray-600">Tenniskennis wordt kennis - kinderen kennis opdoen op een leuke manier.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ja-Nee kaarten</h3>
                <p className="text-gray-600">Interactieve vragenkaarten waarmee kinderen hun kennis kunnen testen op een leuke manier.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zoek de Schat</h3>
                <p className="text-gray-600">Een spannend spel dat kinderen uitdaagt om al zoekend nieuwe vaardigheden te ontdekken.</p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">Instructie en begeleiding voor trainers, zodat je de kennisproducten direct effectief inzet op de baan.</p>
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
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Beter onthouden</h4>
                    <p className="text-gray-600">Door actief bezig te zijn met de stof onthouden kinderen meer dan bij passief luisteren.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                    <Smile className="w-5 h-5" />
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
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Samen leren</h4>
                    <p className="text-gray-600">Onze materialen stimuleren samenwerking en competitie in de groep.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 text-rose-600 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5" />
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
            Klaar voor sparen?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Kinderen komen vaker naar de club, bewegen meer en sparen voor TOF score punten voor leuke beloningen.
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
