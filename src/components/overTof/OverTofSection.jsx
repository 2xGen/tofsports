'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OverTofSection = ({
  id,
  title,
  subtitle,
  children,
  isFirst = false,
  centered = false,
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45 }}
    className={`scroll-mt-28 ${isFirst ? 'pt-0' : 'pt-10 md:pt-12'}`}
  >
    <div
      className={`border-t border-tof-indigo/50 ${
        isFirst ? 'mb-6 md:mb-8' : 'mb-10 md:mb-12'
      }`}
      aria-hidden
    />
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-relaxed text-tof-indigo md:text-lg ${
            centered ? 'mx-auto max-w-3xl' : 'max-w-5xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
    <div className="w-full text-left">{children}</div>
  </motion.section>
);

export default OverTofSection;
