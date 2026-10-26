'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';
import { getKennisbankPillarCards } from '@/data/kennisbankGuides';

const BENEFITS = [
  {
    id: 'play',
    labelNl: 'Meer\nspeelmomenten',
    labelEn: 'More\nplay moments',
  },
  {
    id: 'engage',
    labelNl: 'Meer\nbetrokkenheid',
    labelEn: 'More\nengagement',
  },
  {
    id: 'prep',
    labelNl: 'Minder\nvoorbereiding',
    labelEn: 'Less\npreparation',
  },
];

const FeatureRow = ({ card, imageOnLeft, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="grid overflow-hidden md:grid-cols-2"
  >
    <div
      className={`relative aspect-[16/10] w-full md:aspect-auto md:min-h-[320px] lg:min-h-[380px] ${
        imageOnLeft ? 'md:order-1' : 'md:order-2'
      }`}
    >
      <Image
        src={card.image}
        alt={card.imageAlt ?? card.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={85}
      />
    </div>

    <div
      className={`flex flex-col justify-center bg-[#F3F3F5] px-8 py-10 sm:px-12 sm:py-12 md:px-14 lg:px-16 lg:py-16 ${
        imageOnLeft ? 'md:order-2' : 'md:order-1'
      }`}
    >
      <Image
        src="/icon-check.png"
        alt=""
        width={56}
        height={56}
        className="mb-5 h-10 w-10 object-contain md:mb-6 md:h-12 md:w-12"
      />
      <h3 className="font-heading text-2xl font-semibold tracking-tight text-tof-indigo md:text-3xl">
        {card.title}
      </h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-tof-indigo/75 md:mt-5 md:text-lg md:leading-8">
        {card.description}
      </p>
      <Link
        href={card.linkUrl}
        className="mt-8 inline-flex w-fit items-center rounded-full bg-tof-yellow px-6 py-3 text-sm font-semibold text-tof-indigo transition hover:bg-tof-yellow/90 md:mt-10 md:px-7 md:py-3.5 md:text-base"
      >
        {card.ctaText}
      </Link>
    </div>
  </motion.article>
);

const HorizontalProductsSection = () => {
  const { locale, t } = useLocale();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.08, margin: '0px 0px -40px 0px' });
  const pillarCards = getKennisbankPillarCards(locale);

  return (
    <section
      ref={sectionRef}
      id="part-waarom"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="bg-tof-yellow px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20"
        >
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold tracking-tight text-tof-indigo sm:mb-14 md:mb-16 md:text-4xl lg:text-[2.75rem]">
            {t('home.howTitle')}
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 md:gap-12">
            {BENEFITS.map((item, index) => {
              const label = (locale === 'en' ? item.labelEn : item.labelNl).split(
                '\n',
              );
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.22, delay: 0.04 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm sm:h-28 sm:w-28 md:mb-6 md:h-32 md:w-32">
                    <Image
                      src="/icon-check.png"
                      alt=""
                      width={72}
                      height={72}
                      className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                    />
                  </div>
                  <p className="font-heading text-xl font-semibold leading-snug text-tof-indigo md:text-2xl">
                    {label.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-16 px-4 sm:px-6 md:mt-20 lg:mt-24 lg:px-8">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
          {pillarCards.map((card, index) => (
            <FeatureRow
              key={card.id}
              card={card}
              index={index}
              imageOnLeft={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalProductsSection;
