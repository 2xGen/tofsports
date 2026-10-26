'use client';

import React from 'react';
import Link from '@/i18n/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { allProducts } from '@/data/products';
import { localizeProduct } from '@/data/products.en';
import { useLocale } from '@/i18n/LocaleProvider';

const formatEuro = (amount) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(
    amount,
  );

const getDisplayPrice = (pricing) => {
  if (!pricing) return null;
  if (pricing.type === 'fixed-bundle') return formatEuro(pricing.price);
  if (pricing.type === 'poster-buttons-optional')
    return formatEuro(pricing.posterPrice);
  if (pricing.type === 'poster-wizard') return formatEuro(pricing.posterPrice);
  return null;
};

/** Overlay labels matching the homepage mockup */
const OVERLAY_LABELS = {
  piramide: { nl: 'Piramide tennis', en: 'Pyramid tennis' },
  '4opeenrij': { nl: 'Vier op een rij', en: 'Four in a row' },
  'padel-piramide': { nl: 'Padel Piramide', en: 'Padel Pyramid' },
};

const ShopSection = () => {
  const { locale, t } = useLocale();
  const featuredItemConfigs = [
    { id: 'piramide', link: '/webshop?category=tennis' },
    { id: '4opeenrij', link: '/webshop?category=tennis' },
    { id: 'padel-piramide', link: '/webshop?category=padel' },
  ];

  const items = featuredItemConfigs
    .map(({ id, link }) => {
      const product = allProducts.find((entry) => entry.id === id);
      if (!product) return null;
      const localized = localizeProduct(product, locale);
      const label =
        OVERLAY_LABELS[id]?.[locale] ??
        OVERLAY_LABELS[id]?.nl ??
        localized.name;

      return {
        id: localized.id,
        name: label,
        price: getDisplayPrice(localized.pricing),
        image: localized.image,
        link,
      };
    })
    .filter(Boolean);

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-14"
        >
          <h2 className="font-heading text-3xl font-semibold text-tof-indigo md:text-4xl lg:text-[2.75rem]">
            {t('home.shopSection.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-tof-indigo/75 md:text-lg md:leading-8">
            {t('home.shopSection.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link href={item.link} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                  />
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tof-yellow px-5 py-2.5 text-center text-sm font-bold text-tof-indigo shadow-sm transition group-hover:scale-105 sm:px-6 sm:text-base">
                    {item.name}
                  </span>
                </div>
                {item.price && (
                  <p className="mt-4 text-center text-xl font-semibold text-tof-indigo md:text-2xl">
                    {item.price}
                  </p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href="/webshop"
            className="inline-flex items-center rounded-full bg-tof-indigo px-10 py-3.5 text-base font-semibold text-tof-yellow transition hover:bg-tof-indigo/90 md:px-12 md:py-4"
          >
            {t('home.shopSection.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
