'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getPageHeroImage } from '@/data/heroSlides';

const HubCardsGrid = ({ items, columns = 3 }) => {
  const gridClass =
    columns === 3
      ? 'md:grid-cols-2 lg:grid-cols-3'
      : 'md:grid-cols-2';

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {items.map((item, index) => {
        const image = getPageHeroImage(item.imageRoute);

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Link
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt || item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 360px"
                  quality={75}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-lg font-black text-gray-900 md:text-xl">{item.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all">
                  Lees meer <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HubCardsGrid;
