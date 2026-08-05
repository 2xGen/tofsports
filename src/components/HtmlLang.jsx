'use client';

import React, { useEffect } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

/** Keeps <html lang> in sync with the active locale */
const HtmlLang = () => {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'nl-NL';
  }, [locale]);

  return null;
};

export default HtmlLang;
