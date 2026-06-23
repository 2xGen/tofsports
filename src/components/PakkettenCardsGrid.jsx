'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MAIN_PACKAGES, formatEuro } from '@/data/pakketten';

const PakkettenCardsGrid = ({
  title = 'Kies de oplossing die bij jou past',
  description = 'Kies Basis (vanaf €295), Plus (€445) of Compleet (€595) — tennis, padel of combi met 10% voordeel. Inclusief kennissessies, TOF Score app en verzending. Prijzen ex. btw.',
  showCta = true,
  showPackageDetails = true,
  showSubtitle = true,
  ctaLabel = 'Stel jouw pakket samen',
  className = '',
}) => {
  return (
    <section className={className}>
      <div className="mb-8 text-center md:mb-10">
        <h2 className="font-poppins text-2xl font-black text-gray-900 md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {MAIN_PACKAGES.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="h-full"
          >
            <Link
              href="/pakketten"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border-4 border-gray-100 bg-white text-left shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <Image
                    src={pkg.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                    quality={75}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                    aria-hidden
                  />
                </div>
                {pkg.badge && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                    {pkg.badge}
                  </span>
                )}
              </div>
              <div className={`flex flex-1 flex-col bg-gradient-to-r ${pkg.color} p-5 text-white`}>
                {showSubtitle && pkg.subtitle && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
                    {pkg.subtitle}
                  </p>
                )}
                <h3 className={`text-xl font-black ${showSubtitle && pkg.subtitle ? 'mt-1' : ''}`}>
                  {pkg.title}
                </h3>
                {showPackageDetails && (
                  <>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/95">
                      {pkg.description}
                    </p>
                    <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-2xl font-black">vanaf {formatEuro(pkg.vanafPrice)}</span>
                      <span className="text-sm font-medium text-white/85">ex. btw · incl. verzending</span>
                    </p>
                  </>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {showCta && (
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-full bg-[#1B144C] px-8 font-bold hover:bg-[#2A1F5C]"
          >
            <Link href="/pakketten">
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default PakkettenCardsGrid;

