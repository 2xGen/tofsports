'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

const BACKGROUND_IMAGE =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/herkenbaar.jpg';

const outcomesNl = [
  'Spelen kinderen vaker',
  'Blijven jeugdleden langer betrokken',
  'Ontstaat meer interactie tussen spelers',
  'Worden trainers ontzorgd',
  'Groeit het clubgevoel',
];

const outcomesEn = [
  'Children play more often',
  'Juniors stay engaged longer',
  'More interaction between players',
  'Coaches are supported',
  'Club spirit grows',
];

const RecognitionPunchSection = () => {
  const { locale, t } = useLocale();
  const outcomes = locale === 'en' ? outcomesEn : outcomesNl;

  return (
    <section id="part-herkenbaar" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt={
            locale === 'en'
              ? 'Juniors at the tennis and padel club'
              : 'Jeugd op de tennis- en padelclub'
          }
          fill
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1B144C]/88 via-[#1B144C]/75 to-indigo-900/80"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, margin: '-8%' }}
          className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/20 bg-white/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md md:rounded-[2.5rem] md:p-11 lg:p-12"
        >
          <h2 className="text-center font-poppins text-2xl font-black leading-tight tracking-tight text-[#1B144C] md:text-3xl lg:text-4xl">
            {t('home.recognitionTitle')}
          </h2>

          <p className="mt-6 text-center font-poppins text-base font-medium leading-relaxed text-gray-600 md:text-lg">
            {locale === 'en'
              ? 'Juniors come for their lesson, but rarely play outside training. Coaches constantly look for new activities and the sense of belonging among juniors stays behind.'
              : 'Jeugdleden komen voor hun les, maar spelen weinig buiten de training om. Trainers zoeken continu naar nieuwe activiteiten en het clubgevoel onder jeugdspelers blijft achter.'}
          </p>

          <p className="mt-5 text-center font-poppins text-base font-medium leading-relaxed text-gray-800 md:text-lg">
            {locale === 'en'
              ? 'With TOF Sports you create an environment where juniors play more often, take on challenges together and stay actively involved.'
              : 'Met TOF Sports creëer je een omgeving waarin jeugdspelers vaker spelen, samen uitdagingen aangaan en actief betrokken blijven.'}
          </p>

          <p className="mt-8 text-center font-poppins text-lg font-bold text-[#1B144C] md:text-xl">
            {locale === 'en' ? 'As a result:' : 'Daardoor:'}
          </p>

          <ul className="mx-auto mt-5 flex max-w-md flex-col gap-3.5 md:mt-6 md:gap-4">
            {outcomes.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-left"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500"
                  aria-hidden
                >
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </span>
                <span className="font-poppins text-base font-medium leading-snug text-gray-700">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 flex justify-center md:mt-10">
            <Button
              asChild
              className="rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-8 py-6 text-base font-bold text-white shadow-lg hover:from-[#2A1F5C] hover:to-[#4A3F8A] md:text-lg"
            >
              <Link href="/pakketten">{t('nav.packages')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecognitionPunchSection;
