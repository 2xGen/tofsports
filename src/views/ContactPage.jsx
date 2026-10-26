'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import PageHero, { PageHeroTitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { useLocale } from '@/i18n/LocaleProvider';

const ContactPage = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-tof-indigo pt-20">
      <PageHero image={getPageHeroImage('/contact')} minHeight="50vh">
        {(heroInView) => (
          <PageHeroTitle heroInView={heroInView}>{t('contact.title')}</PageHeroTitle>
        )}
      </PageHero>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-tof-surface shadow-lg">
            <div className="p-6 md:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-tof-yellow" />
                  <div>
                    <p className="font-semibold text-white">{t('contact.address')}</p>
                    <p className="text-white/70">M. van Nispenstraat 16</p>
                    <p className="text-white/70">3201KC Spijkenisse</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-tof-yellow" />
                  <div>
                    <p className="font-semibold text-white">{t('contact.phone')}</p>
                    <a
                      href="tel:0613252559"
                      className="text-white/70 transition-colors hover:text-tof-indigo"
                    >
                      06 13 25 25 59
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-tof-yellow" />
                  <div>
                    <p className="font-semibold text-white">{t('contact.email')}</p>
                    <a
                      href="mailto:info@tofsports.nl"
                      className="text-white/70 transition-colors hover:text-tof-indigo"
                    >
                      info@tofsports.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;
