'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const InfoSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="part-plug-play"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: '#1B144C',
        backgroundImage: 'url(https://toftennis.nl/wp-content/uploads/2024/04/Blauwe-bal-150x150.png)',
        backgroundRepeat: 'repeat',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(62, 200, 188, 0.93) 0%, rgba(62, 200, 188, 0.93) 64%, rgba(180, 255, 200, 1) 100%)',
          opacity: 0.93,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center justify-center rounded-[20px] border-2 border-[#1B144C]/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 text-center">
            <h2 className="mx-auto mb-6 max-w-3xl font-poppins text-2xl font-bold leading-tight text-[#1B144C] md:text-3xl">
              Het Plug &amp; Play jeugdprogramma dat jouw tennis- of padelclub direct op scherp zet.
            </h2>
            <p className="mx-auto max-w-2xl font-poppins text-base leading-relaxed text-gray-700 md:text-lg">
              Met de TOF Methode beschik je over een Plug &amp; Play systeem met spelvormen, een
              zichtbaar scoresysteem en praktische tools die jeugdspelers stimuleren om vaker te
              spelen, te leren en actief betrokken te zijn bij de club.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <motion.a
              href="/pakketten"
              className="rounded-[50px] bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-10 py-5 font-poppins text-lg font-bold text-white shadow-lg transition-all hover:from-[#2A1F5C] hover:to-[#4A3F8A] hover:shadow-xl md:px-12 md:text-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Bekijk de pakketten voor jouw club
            </motion.a>
            <p className="mt-4 max-w-md text-center font-poppins text-sm text-gray-600 md:text-base">
              Ontwikkeld in samenwerking met trainers en verenigingen
            </p>
            <a
              href="/media#tof-warmup-track"
              className="mt-2 inline-block text-sm font-semibold text-[#1B144C] underline decoration-2 underline-offset-4 transition-colors hover:text-[#3B2F7A]"
            >
              Luister de TOF Warm-up Track
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
