'use client';

import React from 'react';
import NextLink from 'next/link';
import { localizePath } from '@/i18n/config';
import { useLocale } from '@/i18n/LocaleProvider';

/**
 * Locale-aware Link — prefixes /en and maps to English slugs when locale is English.
 * Pass href as a Dutch app path (e.g. "/over-tof", "/pakketten").
 */
const Link = ({ href, ...props }) => {
  const { locale } = useLocale();
  const localized =
    typeof href === 'string' && href.startsWith('/') && !href.startsWith('http')
      ? localizePath(href, locale)
      : href;
  return <NextLink href={localized} {...props} />;
};

export default Link;
