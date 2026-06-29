'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WarmupLiedCard from '@/components/WarmupLiedCard';

const InfoSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="tof-warmup-lied"
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
          className="mx-auto max-w-4xl rounded-[20px] border-2 border-[#1B144C]/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] md:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <WarmupLiedCard />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
