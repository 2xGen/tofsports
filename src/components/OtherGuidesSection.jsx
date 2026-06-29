'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const OtherGuidesSection = ({ guides, currentSlug }) => {
  const otherGuides = guides.filter((guide) => guide.slug !== currentSlug);

  if (otherGuides.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="mb-6 font-poppins text-2xl font-black text-gray-900 md:text-3xl">
        Andere gidsen
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {otherGuides.map((guide, index) => (
          <motion.article
            key={guide.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Link
              href={`/kennisbank/${guide.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full bg-gray-100">
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  quality={80}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                  {guide.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-[#1B144C]">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {guide.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1B144C]">
                  {guide.ctaText} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/kennisbank"
          className="inline-flex items-center gap-2 font-semibold text-[#1B144C] hover:underline"
        >
          Bekijk alle gidsen in de kennisbank <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default OtherGuidesSection;
