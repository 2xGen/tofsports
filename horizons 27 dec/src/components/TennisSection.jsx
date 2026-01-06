'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TennisSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const section2InView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} id="part2" className="relative pt-20 pb-20 md:py-32 bg-white overflow-hidden">
      {/* Curved Shape Divider - top (curves upward, mirroring hero section bottom) */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0,50 Q250,0 500,50 T1000,50 L1000,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Background with scale and blur effects - scale out-in speed 4px, range 20-80% */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50"
        style={{
          scale: useTransform(scrollYProgress, [0.3, 0.6], [1, 1.04]),
          filter: useTransform(scrollYProgress, [0.3, 0.6], ['blur(0px)', 'blur(7px)']),
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">TOF Tennis</h1>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={section2InView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-600"
            >
              Official KNLTB Tenniskids partner
            </motion.h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Wat tof dat je een kijkje neemt op onze website!</p>
              <p>Wij zijn drie verenigingsleraren die vanaf <strong>2016</strong> hebben gewerkt aan een vernieuwde versie van het Tenniskids programma wat past bij de huidige generatie kinderen. Met als doel om meer kinderen meer te laten tennissen en langer te behouden voor de sport.</p>
            </div>
            
            {/* Video */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={section2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <video 
                className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                autoPlay 
                loop 
                muted 
                playsInline
                controlsList="nodownload"
              >
                <source src="https://toftennis.nl/wp-content/uploads/2023/03/KNLTB_Logo-Animatie_Tenniskids_TOF.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>

          {/* Right Video with image overlay - matching Elementor Vimeo video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              y: useTransform(scrollYProgress, [0.3, 0.6], [0, -20]),
            }}
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
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part3"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-orange-500 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default TennisSection;