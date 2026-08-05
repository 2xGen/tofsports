'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageHero, { PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';
import { ot } from '@/i18n/content/overTof';
import { SPELERS_KAARTEN } from '@/i18n/content/spelersKaarten';

const SpelersKaartenPage = () => {
  const { locale } = useLocale();
  const t = (node) => ot(locale, node);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/spelers-kaarten')}>
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>{t(SPELERS_KAARTEN.hero.title)}</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {t(SPELERS_KAARTEN.hero.subtitle)}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      {/* Content Sections */}
      <div id="content" className="container mx-auto px-4 py-12 max-w-7xl">
        {/* TOF Tennis Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t(SPELERS_KAARTEN.tennis.title)}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700">
                  <p>{t(SPELERS_KAARTEN.tennis.intro)}</p>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2">{t(SPELERS_KAARTEN.tennis.cardTitle)}</h4>
                    <p>{t(SPELERS_KAARTEN.tennis.cardBody)}</p>
                  </div>

                  <p>{t(SPELERS_KAARTEN.tennis.body2)}</p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href={SPELERS_KAARTEN.tennis.ctaHref}>
                        {t(SPELERS_KAARTEN.tennis.cta)}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tenniskids-tof-spelerskaarten.png"
                    alt="Tenniskids TOF Spelerskaarten"
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TOF Padel Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Text content - first on mobile, second on desktop (alternate) */}
                <div className="space-y-4 text-gray-700 order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t(SPELERS_KAARTEN.padel.title)}</h2>
                  <p>{t(SPELERS_KAARTEN.padel.intro)}</p>

                  <div>
                    <h4 className="font-bold text-lg mb-2">{t(SPELERS_KAARTEN.padel.cardTitle)}</h4>
                    <p>{t(SPELERS_KAARTEN.padel.cardBody)}</p>
                  </div>

                  <p>{t(SPELERS_KAARTEN.padel.body2)}</p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href={SPELERS_KAARTEN.padel.ctaHref}>
                        {t(SPELERS_KAARTEN.padel.cta)}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image - second on mobile, first on desktop (alternate) */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 order-2 md:order-1">
                  <Image
                    src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/tof-padel-materialen.jpg"
                    alt="TOF Padel Materialen"
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TOF Rolstoel Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t(SPELERS_KAARTEN.rolstoel.title)}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700">
                  <p>{t(SPELERS_KAARTEN.rolstoel.intro)}</p>

                  <div>
                    <h4 className="font-bold text-lg mb-2">{t(SPELERS_KAARTEN.rolstoel.cardTitle)}</h4>
                    <p>{t(SPELERS_KAARTEN.rolstoel.cardBody)}</p>
                    <p className="mt-2">{t(SPELERS_KAARTEN.rolstoel.body3)}</p>
                  </div>

                  <p>{t(SPELERS_KAARTEN.rolstoel.body4)}</p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                    >
                      <Link href={SPELERS_KAARTEN.rolstoel.ctaHref}>
                        {t(SPELERS_KAARTEN.rolstoel.cta)}
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/materialen-tof-rolstoeltennis.png"
                    alt="TOF Rolstoeltennis Materialen"
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SpelersKaartenPage;
