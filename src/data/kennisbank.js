import { KENNISBANK_GUIDES } from '@/data/kennisbankGuides';

export const kennisbankArticles = KENNISBANK_GUIDES.map((guide) => ({
  id: guide.id,
  slug: guide.slug,
  title: guide.title,
  excerpt: guide.excerpt,
  category: guide.category,
  date: guide.date,
  image: guide.image,
  imageAlt: guide.imageAlt,
  href: `/kennisbank/${guide.slug}`,
}));

export const kennisbankCategories = ['Alle', 'Gids'];
