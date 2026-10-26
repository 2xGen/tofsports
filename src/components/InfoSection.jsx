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
      className="relative overflow-hidden bg-tof-indigo py-20 md:py-28"
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl rounded-[20px] border border-tof-indigo/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] md:p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <WarmupLiedCard
            titleClassName="text-xl font-semibold text-tof-indigo md:text-2xl"
            subtitleClassName="mt-2 text-sm text-tof-indigo/70 md:text-base"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
