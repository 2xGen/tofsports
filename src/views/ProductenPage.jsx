'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';
import WebshopContent from '@/components/producten/WebshopContent';
import { getPageHeroImage } from '@/data/heroSlides';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

const ProductenPage = () => {
  const { t } = useLocale();

  const productPaths = [
    {
      iconSrc: '/icons/product-box.png',
      label: t('producten.pathPackage'),
      description: t('producten.pathPackageDesc'),
      href: '#clubpakketten',
    },
    {
      iconSrc: '/icons/product-boek.png',
      label: t('producten.pathHandbook'),
      description: t('producten.pathHandbookDesc'),
      href: '/handboek',
    },
    {
      iconSrc: '/icons/product-doc.png',
      label: t('producten.pathShop'),
      description: t('producten.pathShopDesc'),
      href: '#losse-formats',
    },
  ];

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
    <div className="min-h-screen bg-white pt-20">
      <PageHero
        image={getPageHeroImage('/producten')}
        minHeight="40vh"
        showWave={false}
        imageOnly
        objectPosition="object-[center_28%]"
      />

      <div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12 md:mb-14"
        >
          <div className="bg-[#F3F3F5] px-6 py-10 text-center md:px-10 md:py-12">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl">
              {t('producten.title')}
            </h1>
            <p className="mx-auto mt-4 text-base leading-relaxed text-tof-indigo md:whitespace-nowrap md:text-lg">
              {t('producten.intro')}
            </p>

            <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-6 md:mt-12 md:gap-8">
              {productPaths.map(({ iconSrc, label, description, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex flex-col items-center gap-4"
                >
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white p-3 shadow-sm transition-transform group-hover:scale-105 md:h-24 md:w-24 md:p-3.5">
                    <Image
                      src={iconSrc}
                      alt=""
                      width={72}
                      height={72}
                      className="h-full w-full object-contain"
                      aria-hidden
                    />
                  </span>
                  <span className="inline-flex rounded-full bg-tof-yellow px-5 py-2 text-sm font-semibold text-tof-indigo transition-colors group-hover:bg-tof-yellow/90 md:px-6 md:text-base">
                    {label}
                  </span>
                  <span className="max-w-[16rem] whitespace-pre-line text-sm leading-relaxed text-tof-indigo md:text-base">
                    {description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        <section id="clubpakketten" className="scroll-mt-28 pb-8 md:pb-12">
          <PakkettenCardsGrid
            title={t('home.packagesTitle')}
            showPackageDetails={false}
            showSubtitle={false}
            showCta
            light
            overlayStyle
            square
            description={t('producten.packagesDesc')}
          />
        </section>

        <section
          id="losse-formats"
          className="scroll-mt-28 border-t border-tof-indigo/50 pt-16 md:pt-24"
        >
          <div className="mb-8 text-center md:mb-10">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-tof-indigo md:text-4xl">
              {t('producten.looseTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-tof-indigo md:text-lg">
              {t('producten.looseBody')}
            </p>
          </div>
          <WebshopContent light />
        </section>
      </div>
    </div>
  );
};

export default ProductenPage;
