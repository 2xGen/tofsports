'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const InfoSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform to move Visie container down as user scrolls (smoother range)
  const visieY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section
      ref={sectionRef}
      id="part2"
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background: '#1B144C',
        backgroundImage: 'url(https://toftennis.nl/wp-content/uploads/2024/04/Blauwe-bal-150x150.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '80px 80px',
        paddingTop: '300px',
        paddingBottom: '300px'
      }}
    >
      {/* Curved Shape Divider - top (matching hero section bottom) */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,50 Q250,0 500,50 T1000,50 L1000,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Background Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(62, 200, 188, 0.93) 0%, rgba(62, 200, 188, 0.93) 64%, rgba(180, 255, 200, 1) 100%)',
          opacity: 0.93
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4" style={{ width: '90%', maxWidth: '100%' }}>
        <div className="flex flex-row items-start justify-center gap-8" style={{ marginTop: '150px' }}>
          {/* Left Side - Visie Container */}
          <div className="w-1/2">
            <motion.div
              className="bg-white rounded-[15px] p-[35px]"
              style={{
                minHeight: '350px',
                marginTop: '-150px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                y: visieY
              }}
              initial={{ opacity: 0 }}
              animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <h1 className="font-poppins font-bold text-[4em] text-[#1B144C] mb-4">
                Visie
              </h1>
              <h3 className="font-poppins font-medium text-[1.6em] text-[#1B144C] mb-4" style={{ marginTop: '-16px' }}>
                Powered by KNLTB
              </h3>
              <div className="font-poppins text-[#1B144C]">
                <h2 className="font-poppins font-bold text-[1.8em] text-[#1B144C] mb-3">
                  De 365-Mentaliteit
                </h2>
                <p className="mb-4">
                  Wij maken van elke jeugdspeler een clubspeler. Onze visie is dat tennis en padel voor kinderen niet stopt na het uur training, maar dat zij 365 dagen per jaar de weg naar de club weten te vinden. Door de TOF 365-score als standaard te introduceren, creëren we een nieuwe cultuur waarin vrij spelen, clubactiviteiten en onderlinge uitdagingen de motor zijn achter spelplezier en ledenbehoud.
                </p>
                <p className="mb-4">
                  Alle tennis en padel jeugdspelers halen per jaar een TOF score van 365 punten op hun club of vereniging. Dit wordt bereikt door:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>6 tot 10 keer oefenformat</li>
                  <li>Clubkampioenschappen</li>
                  <li>Vrij spelen</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Video below Visie container */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y: visieY }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-[15px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden"
                style={{ aspectRatio: '16/9' }}
              >
                <source src="https://toftennis.nl/wp-content/uploads/2023/03/KNLTB_Logo-Animatie_Tenniskids_TOF.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>

          {/* Right Side - Video and Missie Container */}
          <div className="w-1/2 flex flex-col gap-6">
            {/* Video Container */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-[5px] overflow-hidden w-full" style={{ maxWidth: '600px' }}>
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/792932911?autoplay=1&muted=1&loop=1&controls=1"
                  width="640"
                  height="360"
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className="w-full"
                  style={{ aspectRatio: '16/9', minHeight: '400px' }}
                />
              </div>
            </motion.div>

            {/* Missie Container */}
            <motion.div
              className="bg-white rounded-[15px] p-[35px]"
              style={{
                minHeight: '350px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <h1 className="font-poppins font-bold text-[4em] text-[#1B144C] mb-4">
                Missie
              </h1>
              <div className="font-poppins text-[#1B144C]">
                <h2 className="font-poppins font-bold text-[1.8em] text-[#1B144C] mb-3">
                  Activeren, Ontwikkelen & Verbinden
                </h2>
                <p>
                  TOF Sports brengt de club tot leven. Onze missie is om de sportieve omgeving van kinderen te verrijken met producten die uitdagen tot extra beweging. Wij helpen verenigingen om jeugdspelers te transformeren van 'lesklanten' naar 'clubambassadeurs'. Met de TOF-methode borgen we dat elk kind zich optimaal ontwikkelt, vaker op de baan staat en voor de lange termijn verbonden blijft aan de club.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part3"
        className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 text-white"
        style={{ fontSize: '35px' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-[35px] w-[35px]" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default InfoSection;

