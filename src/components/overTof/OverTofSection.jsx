'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OverTofSection = ({ id, title, subtitle, children, isFirst = false }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.45 }}
    className={`scroll-mt-40 ${isFirst ? '' : 'border-t border-gray-200 pt-16 md:pt-20'}`}
  >
    <div className="mb-8 md:mb-10">
      <h2 className="font-poppins text-2xl font-black text-gray-900 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-4xl text-lg text-gray-600">{subtitle}</p>}
    </div>
    <div className="w-full text-left">{children}</div>
  </motion.section>
);

export default OverTofSection;
