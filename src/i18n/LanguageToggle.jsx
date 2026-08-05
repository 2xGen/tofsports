'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { switchLocalePath } from '@/i18n/config';
import { useLocale } from '@/i18n/LocaleProvider';

const LanguageToggle = ({ className = '' }) => {
  const { locale, t } = useLocale();
  const pathname = usePathname() || '/';
  const router = useRouter();

  const setLocale = (next) => {
    if (next === locale) return;
    router.push(switchLocalePath(pathname, next));
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      <label className="sr-only" htmlFor="language-select">
        {t('lang.switchTo')}
      </label>
      <select
        id="language-select"
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        aria-label={t('lang.switchTo')}
        className="appearance-none rounded-lg border border-gray-200 bg-white py-1.5 pl-2.5 pr-7 text-xs font-bold text-[#1B144C] transition-colors hover:border-gray-300 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
      >
        <option value="nl">{t('lang.nl')}</option>
        <option value="en">{t('lang.en')}</option>
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500"
        aria-hidden
      />
    </div>
  );
};

export default LanguageToggle;
