'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { defaultLocale, getLocaleFromPathname } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const LocaleContext = createContext({
  locale: defaultLocale,
  dict: getDictionary(defaultLocale),
  t: (key, vars) => translate(getDictionary(defaultLocale), key, vars),
});

export function LocaleProvider({ children }) {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPathname(pathname);
  const value = useMemo(() => {
    const dict = getDictionary(locale);
    return {
      locale,
      dict,
      t: (key, vars) => translate(dict, key, vars),
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useTranslations() {
  return useLocale().t;
}
