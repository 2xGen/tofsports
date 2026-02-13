const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';
const LAST_MOD = new Date('2026-02-13');

export default function sitemap() {
  const routes = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
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
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${BASE_URL}${path}` : BASE_URL,
    lastModified: LAST_MOD,
    changeFrequency,
    priority,
  }));
}
