'use client';

import React from 'react';
import Link from '@/i18n/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const DEFAULT_CTA_TEXT = 'Bekijk de pakketten';
const DEFAULT_CTA_LINK = '/pakketten';

const ProductCard = ({ product }) => {
  const linkUrl = product.linkUrl ?? DEFAULT_CTA_LINK;
  const ctaText = product.ctaText ?? DEFAULT_CTA_TEXT;
  const imageLayout = product.imageLayout ?? 'overlay';
  const fullHeight = product.fullHeight ?? false;

  const ctaButton = (
    <Button
      asChild
      variant="secondary"
      className="shrink-0 rounded-2xl border-none bg-white px-6 py-5 text-base font-bold text-gray-900 shadow-lg hover:bg-gray-100 md:px-8 md:py-6 md:text-lg w-full sm:w-auto"
    >
      <Link href={linkUrl}>{ctaText}</Link>
    </Button>
  );

  if (product.image && imageLayout === 'split') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-5%' }}
        className={`w-full ${fullHeight ? 'h-full' : ''}`}
      >
        <div
          className={`relative w-full overflow-hidden rounded-3xl border-4 shadow-2xl transition-transform duration-300 hover:scale-[1.01] ${product.borderColor ?? 'border-white'} ${
            fullHeight
              ? 'h-[420px] md:h-[calc(100dvh-9rem)]'
              : 'min-h-[420px] md:min-h-[480px]'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={product.image}
              alt={product.imageAlt ?? product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${product.imagePositionClass ?? ''}`}
              style={
                product.imageObjectPosition
                  ? { objectPosition: product.imageObjectPosition }
                  : undefined
              }
              quality={85}
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
            aria-hidden
          />
          <div className={`absolute inset-x-0 bottom-0 ${product.color} p-5 md:p-6`}>
            <h3 className="text-xl font-black tracking-tight text-white md:text-2xl">
              {product.title}
            </h3>
            {product.description && !product.hideDescription && (
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/95 md:text-base">
                {product.description}
              </p>
            )}
            {product.showCta !== false && (
              <div className="mt-4 shrink-0 md:mt-5">{ctaButton}</div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  if (product.image) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-5%' }}
        className="w-full"
      >
        <div
          className={`relative min-h-[420px] w-full overflow-hidden rounded-3xl border-4 shadow-2xl transition-transform duration-300 hover:scale-[1.01] md:min-h-[460px] ${product.borderColor ?? 'border-white'}`}
        >
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            quality={90}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[420px] flex-col items-stretch justify-center p-5 md:min-h-[460px] md:p-8">
            <div
              className={`${product.color} flex w-full flex-col rounded-2xl border-2 border-white/30 p-5 shadow-xl md:p-6`}
            >
              <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                {product.title}
              </h3>
              {product.description && !product.hideDescription && (
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/95 md:text-base">
                  {product.description}
                </p>
              )}
              {product.showCta !== false && (
                <div className="mt-4 shrink-0 md:mt-5">{ctaButton}</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-5%' }}
      className="w-full"
    >
      <div
        className={`${product.color} transform overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl transition-transform duration-300 hover:scale-[1.01]`}
      >
        <div className="flex flex-col p-8 md:p-10">
          <h3 className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl">
            {product.title}
          </h3>
          {product.description && !product.hideDescription && (
            <p className="mb-6 flex-1 text-lg font-medium leading-relaxed text-white/90 md:text-xl">
              {product.description}
            </p>
          )}
          <div className="mt-auto">{ctaButton}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
