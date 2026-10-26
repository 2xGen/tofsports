'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

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
    <section id="part-herkenbaar" className="relative overflow-hidden">
      <div className="bg-tof-indigo py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-8%' }}
            >
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                {locale === 'en' ? 'Does this sound familiar?' : 'Herken je dit?'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/90 md:mt-8 md:text-lg md:leading-8">
                {locale === 'en'
                  ? 'Juniors come for their lesson, but rarely play outside training. Coaches constantly look for new activities and the sense of belonging among juniors stays behind.'
                  : 'Jeugdleden komen voor hun les, maar spelen weinig buiten de training om. Trainers zoeken continu naar nieuwe activiteiten en het clubgevoel onder jeugdspelers blijft achter.'}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg md:leading-8">
                {locale === 'en'
                  ? 'With TOF Sports you create an environment where juniors play more often, take on challenges together and stay actively involved.'
                  : 'Met TOF Sports creëer je een omgeving waarin jeugdspelers vaker spelen, samen uitdagingen aangaan en actief betrokken blijven.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true, margin: '-8%' }}
            >
              <h3 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                {locale === 'en' ? 'As a result' : 'Daardoor'}
              </h3>
              <ul className="mt-8 flex flex-col gap-5 md:mt-10 md:gap-6">
                {outcomes.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tof-yellow sm:h-11 sm:w-11"
                      aria-hidden
                    >
                      <Image
                        src="/icon-check.png"
                        alt=""
                        width={28}
                        height={28}
                        className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                      />
                    </span>
                    <span className="font-heading text-base font-medium leading-snug text-white md:text-lg">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-tof-yellow py-10 md:py-12">
        <div className="flex justify-center px-4">
          <Link
            href="/pakketten"
            className="inline-flex items-center rounded-full bg-tof-indigo px-10 py-3.5 text-base font-semibold text-tof-yellow transition hover:bg-tof-indigo/90 md:px-12 md:py-4 md:text-lg"
          >
            {t('nav.packages')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecognitionPunchSection;
