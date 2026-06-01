'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import PageHero, { PageHeroTitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/contact')} minHeight="50vh">
        {(heroInView) => (
          <PageHeroTitle heroInView={heroInView}>Contact</PageHeroTitle>
        )}
      </PageHero>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Adres</p>
                    <p className="text-gray-600">M. van Nispenstraat 16</p>
                    <p className="text-gray-600">3201KC Spijkenisse</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefoon</p>
                    <a href="tel:0613252559" className="text-gray-600 hover:text-orange-600 transition-colors">
                      06 13 25 25 59
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <a href="mailto:info@tofsports.nl" className="text-gray-600 hover:text-orange-600 transition-colors">
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
