'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Target, Circle, Pencil, RotateCcw, Calendar, Search, User, Users, Lightbulb, Sparkles } from 'lucide-react';

const SpelenPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section - Matching Other Pages Style */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background - Static */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.4), rgba(14, 165, 233, 0.5), rgba(2, 132, 199, 0.3))',
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
              Spelen
            </motion.h1>

            {/* Subtitle - fadeIn animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 relative z-30 max-w-2xl mx-auto"
            >
              Maak van elke training een avontuur met onze interactieve magneetposters en whiteboardtools.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Wat zit er in het Spelen pakket?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Magneetposters</h3>
                <p className="text-gray-600">Spelvormen en oefeningen in handig 60x90cm formaat, verpakt in een stevige bewaarkoker.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Circle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Magneetbuttons</h3>
                <p className="text-gray-600">Kleurrijke magneten om spelers te markeren en oefeningen interactief te maken.</p>
              </div>
              <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <Pencil className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Whiteboardtools</h3>
                <p className="text-gray-600">Stiften en markers om aantekeningen te maken en scores bij te houden.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Swirl Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8"
        >
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white p-3 rounded-xl">
                <RotateCcw className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">De Swirl: Regie over je eigen Training</h2>
            </div>
            
            <p className="text-lg leading-relaxed">
              De Swirl is een krachtige visuele tool om de voortgang van jonge tennissers in kaart te brengen. 
              Het biedt talloze mogelijkheden voor trainers om interne competitie en motivatie toe te voegen aan de les.
            </p>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100 my-6">
              <p className="text-lg font-medium text-gray-800">
                De Swirl is een visueel dashboard dat kinderen zeggenschap geeft over hun eigen ontwikkeling. 
                In plaats van alleen maar opdrachten uit te voeren, maken ze bewuste keuzes over hun voortgang.
              </p>
            </div>

            {/* Zelfsturend Leren */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">1</span>
                Zelfsturend Leren
              </h3>
              <p className="text-gray-600">De Swirl biedt kinderen de ruimte om hun eigen training vorm te geven:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sky-600 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Kiezen
                  </h4>
                  <p className="text-sm text-gray-600">Een kind kan aan het begin van de les een magneet plakken op een onderdeel dat hij die dag graag wil trainen.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sky-600 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Plannen
                  </h4>
                  <p className="text-sm text-gray-600">Kinderen kunnen aangeven wat ze de volgende week willen aanpakken, waardoor ze alvast vooruitkijken.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sky-600 mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4" /> Reflecteren
                  </h4>
                  <p className="text-sm text-gray-600">De magneetjes werken als een thermometer. Een kind kan aanwijzen waar het goed gaat en waar nog hulp nodig is.</p>
                </div>
              </div>
            </div>

            {/* Spelenderwijs Groeien */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">2</span>
                Spelenderwijs Groeien: De Swirl-Race
              </h3>
              <p className="text-gray-600">Naast de zelfstandige keuzes kan de trainer de kaart gebruiken om de motivatie te verhogen met wedstrijdjes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-yellow-600" /> Individuele Race naar de Kern
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Iedereen start bij vakje 1 en volgt de spiraalvormige route (30 stappen: 3 rondes van 10)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Winst:</strong> Zet 2 stappen vooruit richting de kern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">→</span>
                      <span><strong>Verlies:</strong> Zet 1 stap vooruit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Wie bereikt als eerste de gouden tennisbal in het midden?</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" /> Team-Challenge: Samen Sterk
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Verdeel de groep in twee teams (bijv. Rood en Blauw)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Elk team heeft één magneet die de route aflegt op basis van teamprestaties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span><strong>Teamwinst:</strong> Magneet gaat 2 stappen vooruit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span><strong>Verlies:</strong> Magneet gaat 1 stap terug</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <p className="text-gray-700 flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Tip voor de trainer:</strong> Voeg een "Power-up" toe! Als kinderen een opdracht uitvoeren die bij het specifieke cijfer van dat vakje hoort (bijv. een compliment geven bij vakje 9: Fairplay), mogen ze een extra stap zetten.</span>
                </p>
              </div>
            </div>

            {/* Thema-Bingo */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm">3</span>
                De "Thema-Bingo" Wedstrijdvorm
              </h3>
              <p className="text-gray-600">De trainer koppelt de wedstrijdjes aan specifieke thema's op de kaart (bijv. Netspel of Fairplay).</p>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 mt-4">
                <h4 className="font-bold text-purple-700 mb-2">Hoe het werkt:</h4>
                <p className="text-gray-600 mb-3">
                  Speel korte tie-breaks. Als een leerling wint én een punt scoort dat past bij het thema van die baan 
                  (bijv. een volley bij 'Netspel'), mag hij/zij een extra stap zetten op de Swirl.
                </p>
                <p className="text-gray-700 font-medium">
                  Dit stimuleert kinderen om niet alleen te winnen, maar ook de geleerde technieken uit de verschillende fases toe te passen!
                </p>
              </div>
            </div>

            {/* Waarom dit werkt */}
            <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-600" /> Waarom dit werkt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Door de combinatie van <strong>zeggenschap</strong> (vrij kiezen) en <strong>gamification</strong> (de race naar het midden) 
                ontstaat er een unieke leeromgeving. Kinderen zijn meer betrokken omdat ze zelf hebben mogen kiezen waar ze aan werken, 
                en ze zijn extra gemotiveerd om die skills in de wedstrijdjes te laten zien om hun magneet dichter bij de kern te krijgen.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Navigation to Leren */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klaar om te leren?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Ontdek onze interactieve leermiddelen die kinderen spelenderwijs beter maken!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-rose-500 hover:bg-gray-100 font-bold text-lg"
            >
              <Link href="/leren">
                Bekijk Leren →
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

export default SpelenPage;
