import { KENNISBANK_GUIDES, getGuideSlug } from '@/data/kennisbankGuides';
import { localizePath } from '@/i18n/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';
const LAST_MOD = new Date('2026-06-16');

export default function sitemap() {
  const staticPaths = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/kennisbank', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/over-tof', changeFrequency: 'monthly', priority: 0.95 },
    { path: '/producten', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/pakketten', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/tof-methode', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/tof-score', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/missie-visie', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/knltb', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/webshop', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/winkelmand', changeFrequency: 'weekly', priority: 0.5 },
    { path: '/spelen', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/leren', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sparen', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/spelers-kaarten', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/leraren-app', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/magneetposters', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/handboek', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/media', changeFrequency: 'monthly', priority: 0.8 },
  ];

  const entries = [];

  staticPaths.forEach(({ path, changeFrequency, priority }) => {
    const nlPath = path || '/';
    const nlUrl = path ? `${BASE_URL}${path}` : BASE_URL;
    const enPath = localizePath(nlPath, 'en');
    const enUrl = `${BASE_URL}${enPath}`;
    entries.push({
      url: nlUrl,
      lastModified: LAST_MOD,
      changeFrequency,
      priority,
    });
    entries.push({
      url: enUrl,
      lastModified: LAST_MOD,
      changeFrequency,
      priority: Math.max(0.3, priority - 0.05),
    });
  });

  KENNISBANK_GUIDES.forEach((guide) => {
    const nlSlug = getGuideSlug(guide, 'nl');
    const enSlug = getGuideSlug(guide, 'en');
    entries.push({
      url: `${BASE_URL}/kennisbank/${nlSlug}`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
    entries.push({
      url: `${BASE_URL}${localizePath(`/kennisbank/${enSlug}`, 'en')}`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return entries;
}
