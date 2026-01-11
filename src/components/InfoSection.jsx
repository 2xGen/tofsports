'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const InfoSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.3 });


  return (
    <section
      ref={sectionRef}
      id="part2"
      className="relative min-h-screen flex flex-col items-center justify-center py-[100px] md:py-[300px]"
      style={{
        background: '#1B144C',
        backgroundImage: 'url(https://toftennis.nl/wp-content/uploads/2024/04/Blauwe-bal-150x150.png)',
        backgroundRepeat: 'repeat'
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
        <div className="flex flex-col items-center justify-center" style={{ marginTop: '150px' }}>
          {/* Text Container */}
          <motion.div
            className="bg-white rounded-[20px] p-8 md:p-[50px] flex flex-col items-center justify-center -mt-[50px] md:-mt-[150px]"
            style={{
              minHeight: '400px',
              width: '85%',
              maxWidth: '1200px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              border: '2px solid rgba(27, 20, 76, 0.1)'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="text-center mb-10">
              <h1 className="font-poppins font-bold text-[#1B144C] text-[1.8em] md:text-[2.5em] leading-tight mb-6">
                Zet je jeugdprogramma direct op scherp
              </h1>
              <p className="font-poppins text-[#1B144C] text-[1.1em] md:text-[1.3em] leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Met kant-en-klare oefenformats en spelvormen voor padel en tennis. Alles wat je nodig hebt om direct te starten met effectieve trainingen.
              </p>
            </div>
            <motion.a
              href="/webshop"
              className="bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] text-white font-poppins font-bold px-[50px] md:px-[60px] py-[20px] md:py-[25px] rounded-[50px] hover:from-[#2A1F5C] hover:to-[#4A3F8A] transition-all text-[1.1em] md:text-[1.3em] shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Bekijk onze producten
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part3"
        className="absolute bottom-[30px] md:bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 text-white"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 md:h-[35px] md:w-[35px]" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default InfoSection;

