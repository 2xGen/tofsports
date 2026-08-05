import { KENNISBANK_GUIDES, getGuideSlug, localizeGuide } from '@/data/kennisbankGuides';

export function getKennisbankArticles(locale = 'nl') {
  return KENNISBANK_GUIDES.map((guide) => {
    const localized = localizeGuide(guide, locale);
    const slug = getGuideSlug(guide, locale);
    return {
      id: localized.id,
      slug,
      title: localized.title,
      excerpt: localized.excerpt,
      category: localized.category,
      date: localized.date,
      image: localized.image,
      imageAlt: localized.imageAlt,
      href: `/kennisbank/${slug}`,
    };
  });
}

/** @deprecated prefer getKennisbankArticles(locale) */
export const kennisbankArticles = getKennisbankArticles('nl');

export const kennisbankCategories = ['Alle', 'Gids'];

export function getKennisbankCategories(locale = 'nl') {
  if (locale === 'en') return ['All', 'Guide'];
  return kennisbankCategories;
}
