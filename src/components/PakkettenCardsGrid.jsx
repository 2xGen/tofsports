'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MAIN_PACKAGES, formatEuro } from '@/data/pakketten';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';
import { localizePackage } from '@/i18n/content/packages';

/** Short overlay labels matching the homepage mockup */
const OVERLAY_LABELS = {
  tennis: { nl: 'Tennispakket', en: 'Tennis package' },
  padel: { nl: 'Padelpakket', en: 'Padel package' },
  combi: { nl: 'Tennis- & padelpakket', en: 'Tennis & padel package' },
};

const PakkettenCardsGrid = ({
  title,
  description,
  showCta = true,
  showPackageDetails = true,
  showSubtitle = true,
  light = false,
  /** Homepage-style: photo tiles with yellow pill labels, no detail panel */
  overlayStyle = false,
  /** Square corners (e.g. Over TOF embeds) */
  square = false,
  ctaLabel,
  className = '',
}) => {
  const { locale, t } = useLocale();
  const resolvedTitle = title ?? t('home.packagesTitle');
  const resolvedCta = ctaLabel ?? t('home.packagesCta');
  const resolvedDescription =
    description ??
    (locale === 'en'
      ? 'Choose Basic (from €295), Plus (€445) or Complete (€595) — tennis, padel or combi with 10% off. Includes knowledge sessions, TOF Score app and shipping. Prices excl. VAT.'
      : 'Kies Basis (vanaf €295), Plus (€445) of Compleet (€595) — tennis, padel of combi met 10% voordeel. Inclusief kennissessies, TOF Score app en verzending. Prijzen ex. btw.');

  const useOverlay = overlayStyle || (light && !showPackageDetails);

  return (
    <section className={className}>
      <div className={`text-center ${useOverlay ? 'mb-10 md:mb-12' : 'mb-8 md:mb-10'}`}>
        <h2
          className={`font-heading ${
            useOverlay
              ? 'text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]'
              : 'text-2xl font-semibold md:text-3xl'
          } ${light || useOverlay ? 'text-tof-indigo' : 'text-white'}`}
        >
          {resolvedTitle}
        </h2>
        <p
          className={`mx-auto mt-4 leading-relaxed md:mt-5 md:text-lg md:leading-8 ${
            useOverlay ? 'max-w-4xl' : 'max-w-2xl'
          } ${light || useOverlay ? 'text-tof-indigo/75' : 'text-white/70'}`}
        >
          {resolvedDescription}
        </p>
      </div>

      <div className={`grid gap-5 md:grid-cols-3 ${useOverlay ? 'md:gap-6 lg:gap-8' : 'gap-6'}`}>
        {MAIN_PACKAGES.map((rawPkg, index) => {
          const pkg = localizePackage(rawPkg, locale);
          const overlayLabel =
            OVERLAY_LABELS[pkg.id]?.[locale] ??
            OVERLAY_LABELS[pkg.id]?.nl ??
            pkg.title;

          if (useOverlay) {
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href="/pakketten"
                  className="group relative block aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src={pkg.image}
                    alt={overlayLabel}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                  />
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-tof-yellow px-4 py-2.5 text-center text-sm font-bold text-tof-indigo shadow-sm transition group-hover:scale-105 sm:px-5 sm:py-3 sm:text-base md:px-6">
                    {overlayLabel}
                  </span>
                </Link>
              </motion.div>
            );
          }

          return (
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
                className={`group flex h-full flex-col overflow-hidden border-4 border-white/10 bg-tof-surface text-left shadow-lg transition-shadow hover:border-white/20 hover:shadow-xl ${
                  square ? '' : 'rounded-3xl'
                }`}
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
                    <div className="absolute inset-0 bg-black/40" aria-hidden />
                  </div>
                  {pkg.badge && (
                    <span
                      className={`absolute right-3 top-3 z-10 bg-tof-green px-3 py-1 text-xs font-bold text-white shadow-md ${
                        square ? '' : 'rounded-full'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <div className={`flex flex-1 flex-col ${pkg.color} p-5 text-white`}>
                  {showSubtitle && pkg.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
                      {pkg.subtitle}
                    </p>
                  )}
                  <h3
                    className={`text-xl font-black text-white ${
                      showSubtitle && pkg.subtitle ? 'mt-1' : ''
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  {showPackageDetails && (
                    <>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/95">
                        {pkg.description}
                      </p>
                      <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="text-2xl font-black text-white">
                          {t('packages.from')} {formatEuro(pkg.vanafPrice)}
                        </span>
                        <span className="text-sm font-medium text-white/85">
                          {t('packages.shippingIncl')}
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {showCta && (
        <div className={`flex justify-center ${useOverlay ? 'mt-12 md:mt-14' : 'mt-8'}`}>
          <Button
            asChild
            size="lg"
            className={
              useOverlay
                ? 'gap-2 rounded-full bg-tof-indigo px-10 py-6 text-base font-semibold text-tof-yellow hover:bg-tof-indigo/90'
                : `gap-2 bg-tof-yellow px-8 font-semibold text-tof-indigo hover:bg-tof-yellow/90 ${
                    square ? 'rounded-md' : 'rounded-full'
                  }`
            }
          >
            <Link href="/pakketten">
              {resolvedCta}
              {!useOverlay && <ArrowRight className="h-4 w-4" />}
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default PakkettenCardsGrid;
