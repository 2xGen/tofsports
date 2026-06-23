'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';

const PakkettenSection = () => {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="part2"
      className="relative overflow-hidden bg-gray-50 py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto max-w-6xl px-4"
      >
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1B144C]/70">
            Plug &amp; Play
          </p>
        </div>
        <PakkettenCardsGrid
          showPackageDetails={false}
          showSubtitle={false}
          title="Kies de oplossing die bij jou past"
          ctaLabel="Stel jouw pakket samen"
          description="Kies Basis, Plus of Compleet — tennis, padel of combi. Inclusief kennissessies, TOF Score app en verzending."
        />
      </motion.div>
    </section>
  );
};

export default PakkettenSection;
