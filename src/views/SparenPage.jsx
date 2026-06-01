'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Smartphone, Medal, ClipboardList, Lightbulb, Flame, Eye, House, Target } from 'lucide-react';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

const SparenPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/sparen')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>Sparen</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Elk punt telt mee! Motiveer kinderen met beloningen en de TOF Score.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat zit er in het Sparen pakket?</h2>
            
            <p className="text-lg leading-relaxed">
              Met het spaarsysteem blijven kinderen gemotiveerd om vaker te spelen en hun doelen te bereiken. Elk punt brengt ze dichter bij een beloning!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TOF Score in de KNLTB Leraren App</h3>
                <p className="text-gray-600">Houd de voortgang van elke speler digitaal bij en beloon hun inzet met de officiële TOF Score.</p>
              </div>
              <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <Medal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buttons en Bandjes</h3>
                <p className="text-gray-600">Fysieke beloningen die kinderen trots dragen, met zichtbare status door meedoen.</p>
              </div>
              <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">TOF score magneetposter</h3>
                <p className="text-gray-600">Kinderen noteren zelf de behaalde scores.</p>
              </div>
              <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
                <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">Praktische instructie en begeleiding voor trainers, zodat je direct met de producten aan de slag kunt en iedere les soepel verloopt.</p>
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
                  <p className="text-gray-600">Kinderen verdienen punten bij clubactiviteiten en vrij spelen.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Beloningen ontvangen</h4>
                  <p className="text-gray-600">Bij behaalde mijlpalen ontvangen kinderen een leuke beloning.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-lime-600" />
                Het 365-doel
              </h3>
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
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Intrinsieke motivatie</h4>
                  <p className="text-gray-600">Kinderen willen zelf beter worden en meer punten halen.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Zichtbare erkenning</h4>
                  <p className="text-gray-600">Als leuke beloning voor meedoen, inzet en gedrag.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lime-100 text-lime-600 p-2 rounded-lg">
                  <House className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Clubbinding</h4>
                  <p className="text-gray-600">Kinderen komen vaker naar de club, ook buiten de lessen om.</p>
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
