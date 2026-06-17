'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Package, ShoppingBag } from 'lucide-react';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';
import WebshopContent from '@/components/producten/WebshopContent';
import { getPageHeroImage } from '@/data/heroSlides';

const PRODUCT_PATHS = [
  {
    icon: Package,
    label: 'Clubpakket',
    description: 'Direct starten met een compleet jeugdprogramma',
    href: '#clubpakketten',
  },
  {
    icon: BookOpen,
    label: 'Handboek',
    description: 'Formats uitproberen via speluitleg',
    href: '/handboek',
  },
  {
    icon: ShoppingBag,
    label: 'Losse formats',
    description: 'Individuele producten bestellen',
    href: '#losse-formats',
  },
];

const ProductenPage = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return undefined;

    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/producten')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>Producten</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Kies wat past bij jouw vereniging: compleet pakket, handboek of losse formats.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12 md:mb-14"
        >
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
            <div className="border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-5 md:px-8">
              <p className="max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
                Of je nu direct wilt starten met een clubpakket, formats wilt uitproberen via het
                handboek of losse producten wilt bestellen — hier vind je alle opties op een rij.
              </p>
            </div>
            <div className="grid gap-px bg-gray-100 sm:grid-cols-3">
              {PRODUCT_PATHS.map(({ icon: Icon, label, description, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex flex-col gap-2 bg-white p-5 transition-colors hover:bg-orange-50/60 md:p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-poppins text-base font-bold text-gray-900 md:text-lg">
                    {label}
                  </span>
                  <span className="text-sm leading-relaxed text-gray-600">{description}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="clubpakketten" className="scroll-mt-40">
          <PakkettenCardsGrid
            showPackageDetails={false}
            description="Tennispakket, padelpakket of tennis- en padelpakket — elk pakket bevat formats, matrix, TOF Score poster, whiteboard en 1 jaar leraren-app."
          />
        </section>

        <section
          id="losse-formats"
          className="scroll-mt-40 border-t border-gray-200 pt-16 md:pt-20"
        >
          <div className="mb-8 text-left md:mb-10">
            <h2 className="font-poppins text-2xl font-black text-gray-900 md:text-3xl">
              Liever losse formats?
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Bestel individuele tennis- en padelformats via de webshop.
            </p>
          </div>
          <WebshopContent />
        </section>
      </div>
    </div>
  );
};

export default ProductenPage;
