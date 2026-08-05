import nl from '@/i18n/dictionaries/nl';
import en from '@/i18n/dictionaries/en';
import { defaultLocale } from '@/i18n/config';

const dictionaries = { nl, en };

export function getDictionary(locale = defaultLocale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Resolve nested key like "nav.home" with optional {var} interpolation */
export function translate(dict, key, vars = {}) {
  const value = key.split('.').reduce((acc, part) => (acc == null ? acc : acc[part]), dict);
  if (typeof value !== 'string') return key;
  return value.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] != null ? String(vars[name]) : `{${name}}`,
  );
}
