'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const heroInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll();

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background with Motion Effects - scale 8-88%, blur 20-80%, speed 4px, blur 7px */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, rgba(180, 255, 200, 0.4), rgba(197, 223, 223, 0.5), rgba(62, 200, 188, 0.3))',
          scale: useTransform(scrollYProgress, [0, 0.3], [1.08, 0.88]),
          filter: useTransform(scrollYProgress, [0.1, 0.3], ['blur(0px)', 'blur(7px)']),
        }}
      />

      <div className="container mx-auto px-4 relative z-30 -mt-20 md:-mt-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          {/* Logo - bounceInDown animation */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ 
              duration: 1, 
              type: "spring",
              bounce: 0.6,
              delay: 0.2
            }}
          >
            <Link href="/" className="block">
              <Image 
                src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg" 
                alt="TOF Tennis" 
                width={350}
                height={200}
                className="h-20 md:h-48 w-auto mx-auto"
                priority
                quality={90}
              />
            </Link>
          </motion.div>

          {/* Headings - zoomInRight animation */}
          <motion.h2
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="text-4xl md:text-7xl font-bold text-gray-800 relative z-30"
          >
            Sports
          </motion.h2>

          {/* Subtitle - fadeIn animation */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-600 relative z-30"
          >
            Powered by KNLTB
          </motion.h3>
        </div>
      </div>

      {/* Floating Tennis Ball - bounceInLeft with scroll motion */}
      <motion.div
        className="absolute bottom-16 md:bottom-20 left-4 md:left-10 lg:left-20 z-[1]"
        initial={{ opacity: 0, x: -100 }}
        animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.5 }}
      >
        <TennisBallRoll scrollYProgress={heroScrollProgress} />
      </motion.div>

      {/* Curved Shape Divider - negative */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      {/* Down Arrow */}
      <motion.a
        href="#part2"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-gray-600 hover:text-orange-500 transition-colors"
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

// Tennis Ball Roll Component - rolling in positive direction (right) all the way across
const TennisBallRoll = ({ scrollYProgress }) => {
  // Ball dimensions: mobile 96px (48px radius), desktop 128px (64px radius)
  // Average radius for calculation: ~56px
  const ballRadius = 56; // pixels
  // Max distance to roll all the way across screen (viewport width minus ball width and padding)
  // Using a large value that will work for most screens - will roll from left edge to right edge
  const maxDistance = 1200; // pixels to travel (adjust based on typical viewport width)
  
  // Calculate x position based on scroll - positive direction (right), all the way across
  const x = useTransform(scrollYProgress, [0, 1], [0, maxDistance]);
  
  // Calculate rotation based on distance traveled - positive direction
  // For a rolling ball: rotation (degrees) = (distance / radius) * (180 / π)
  const maxRotation = (maxDistance / ballRadius) * (180 / Math.PI);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, maxRotation]);

  return (
    <motion.div
      style={{ x, rotate }}
      className="relative w-20 h-20 md:w-32 md:h-32"
    >
      <Image 
        src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tennis%20bal.png" 
        alt="Tennis ball" 
        width={128}
        height={128}
        className="w-full h-full drop-shadow-lg"
        loading="lazy"
        quality={85}
      />
    </motion.div>
  );
};

export default HeroSection;