'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const SpelersKaartenPage = () => {
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
              Spelerskaarten
            </motion.h1>

            {/* Subtitle - fadeIn animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Interactieve oefenkaarten die spelers uitdagen met verschillende technieken en vaardigheden.
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
        {/* TOF Tennis Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">TOF Tennis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700">
                  <p>
                    Tenniskids TOF (Training Ontwikkelings Fases) is een onderdeel van het Tenniskids programma waarbij kinderen zich op hun eigen manier en tempo kunnen ontwikkelen.
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">Spelerskaart</h4>
                    <p>
                      Met de TOF Tennis spelerskaart krijgen kinderen en ouders inzicht in de ontwikkeling. De kaart is beschikbaar in de Tenniskids kleur waarin het kind speelt en kan aan de tennistas worden gehangen.
                    </p>
                  </div>

                  <p>
                    Op de voorkant van de kaart kunnen kinderen bolletjes inkleuren wanneer ze een level hebben doorlopen. Op de achterkant worden bolletjes ingekleurd voor elke keer dat het kind op de baan staat - tijdens trainingen, wedstrijden, vrij spelen of clubactiviteiten. Dit werkt motiverend en geeft duidelijkheid over de voortgang.
                  </p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href="/webshop?category=tennis">
                        Bekijk in webshop
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

        {/* TOF Padel Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Text content - first on mobile, second on desktop (alternate) */}
                <div className="space-y-4 text-gray-700 order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TOF Padel</h2>
                  <p>
                    TOF Padel (Training Ontwikkelings Fases) is de basis van het padel jeugdprogramma. Spelers ontwikkelen zich op hun eigen tempo en manier, wat hun motivatie en spelplezier vergroot.
                  </p>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Spelerskaart</h4>
                    <p>
                      De TOF Padel spelerskaart geeft jeugdspelers en ouders inzicht in de padelontwikkeling. Er zijn drie verschillende spelerskaarten, afgestemd op het ontwikkelingsniveau. Op de voorkant staat de fase waarin de speler zich bevindt, op de achterkant kunnen spelers vakjes inkleuren na elke les, vrij spel, clubevent of wedstrijd.
                    </p>
                  </div>

                  <p>
                    TOF Padel bestaat uit drie elementen: de ontwikkelingsmatrix (met technische, tactische, mentale en sociale competenties), de spelerskaart en de Leraren app (met oefenstofvideo's en voortgangsregistratie).
                  </p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href="/webshop?category=padel">
                        Bekijk in webshop
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image - second on mobile, first on desktop (alternate) */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 order-2 md:order-1">
                  <Image
                    src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof-padel-materialen.jpg"
                    alt="TOF Padel Materialen"
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

        {/* TOF Rolstoel Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">TOF Rolstoeltennis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700">
                  <p>
                    TOF Rolstoeltennis (Training Ontwikkelings Fases) is een volledig uitgewerkt jeugdprogramma voor rolstoeltennis. Spelers ontwikkelen zich op hun eigen manier en tempo, wat hun motivatie en spelplezier vergroot.
                  </p>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Spelerskaart</h4>
                    <p>
                      De TOF Rolstoeltennis spelerskaart geeft spelers en ouders inzicht in de ontwikkeling. Er zijn drie verschillende spelerskaarten, afgestemd op het ontwikkelingsniveau en passend bij een eigen wedstrijdformat. De kaart kan aan de tas of sportrolstoel worden gehangen.
                    </p>
                    <p className="mt-2">
                      Op de voorkant staat per fase het level van de speler. Op de achterkant kunnen spelers vakjes inkleuren na elke les, vrij spel, clubevent of wedstrijd. Dit werkt motiverend en bevordert de binding met de club.
                    </p>
                  </div>

                  <p>
                    TOF Rolstoeltennis bestaat uit drie elementen: de ontwikkelingsmatrix (met technische, tactische, mentale en sociale competenties), de spelerskaart en de Leraren app (met oefenstofvideo's en voortgangsregistratie).
                  </p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href="/webshop?category=tennis">
                        Bekijk in webshop
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/materialen-tof-rolstoeltennis.png"
                    alt="TOF Rolstoeltennis Materialen"
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
      </div>
    </div>
  );
};

export default SpelersKaartenPage;

