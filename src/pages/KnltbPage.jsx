'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const KnltbPage = () => {
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
              KNLTB
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Official KNLTB Tenniskids partner
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

      {/* Video Section */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              TOF Tennis - Official KNLTB Partner
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
                  src="https://player.vimeo.com/video/808644931?h=89dedc6cbc"
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

        {/* Spelerskaarten Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Spelerskaarten</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Interactieve oefenkaarten die spelers uitdagen met verschillende technieken en vaardigheden. De spelerskaarten zijn een essentieel onderdeel van het TOF Tennis programma.
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">TOF Tennis Spelerskaarten</h4>
                    <p>
                      Met de TOF Tennis spelerskaart krijgen kinderen en ouders inzicht in de ontwikkeling. De kaart is beschikbaar in de Tenniskids kleur waarin het kind speelt en kan aan de tennistas worden gehangen.
                    </p>
                  </div>

                  <p>
                    Op de voorkant van de kaart kunnen kinderen bolletjes inkleuren wanneer ze een level hebben doorlopen. Op de achterkant worden bolletjes ingekleurd voor elke keer dat het kind op de baan staat - tijdens trainingen, wedstrijden, vrij spelen of clubactiviteiten.
                  </p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href="/spelers-kaarten">
                        Meer informatie
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tenniskids-tof-spelerskaarten.png"
                    alt="Tenniskids TOF Spelerskaarten"
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Leraren App Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Image first on mobile, second on desktop */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 order-2 md:order-1">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="text-center p-8">
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">De Leraren App</h3>
                      <p className="text-gray-600 text-lg">Digitale assistent voor tenniscoaches</p>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-4 text-gray-700 order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">De Leraren App</h2>
                  
                  <p className="text-lg leading-relaxed">
                    Een complete digitale assistent speciaal ontwikkeld voor tenniscoaches. Met deze app heb je alle tools binnen handbereik om je trainingen te verbeteren en de voortgang van je spelers bij te houden.
                  </p>

                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Lesplannen</h3>
                      <p className="text-gray-600 text-sm">
                        Toegang tot een uitgebreide bibliotheek met lesplannen die perfect aansluiten bij het Tenniskids programma.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Oefeningen</h3>
                      <p className="text-gray-600 text-sm">
                        Honderden oefeningen met duidelijke instructies en video's om je trainingen gevarieerd en effectief te maken.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Voortgangsregistratie</h3>
                      <p className="text-gray-600 text-sm">
                        Houd de ontwikkeling van elke speler bij en volg hun voortgang door de verschillende Tenniskids niveaus.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href="/leraren-app">
                        Meer informatie
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KnltbPage;
