import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';
import KennisbankArticlePage from '@/views/KennisbankArticlePage';
import {
  getAllGuideSlugs,
  getGuideBySlug,
  getGuideSlug,
  localizeGuide,
} from '@/data/kennisbankGuides';
import { localizePath, resolveRequestLocale } from '@/i18n/config';
import { getDictionary, translate } from '@/i18n/getDictionary';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const locale = resolveRequestLocale(headers(), cookies());
  const rawGuide = getGuideBySlug(params.slug);
  if (!rawGuide) return {};

  const guide = localizeGuide(rawGuide, locale);
  const dict = getDictionary(locale);
  const kbLabel = translate(dict, 'nav.knowledge');
  const title = `${guide.title} | ${kbLabel} TOF Sports`;
  const path = localizePath(`/kennisbank/${getGuideSlug(rawGuide, locale)}`, locale);
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description: guide.metaDescription,
    openGraph: {
      title,
      description: guide.metaDescription,
      url,
      siteName: 'TOF Sports',
      locale: locale === 'en' ? 'en_GB' : 'nl_NL',
      type: 'article',
      publishedTime: guide.date,
      images: [{ url: guide.image, alt: guide.imageAlt }],
    },
    alternates: {
      canonical: url,
      languages: {
        nl: `${SITE_URL}${localizePath(`/kennisbank/${getGuideSlug(rawGuide, 'nl')}`, 'nl')}`,
        en: `${SITE_URL}${localizePath(`/kennisbank/${getGuideSlug(rawGuide, 'en')}`, 'en')}`,
        'x-default': `${SITE_URL}${localizePath(`/kennisbank/${getGuideSlug(rawGuide, 'nl')}`, 'nl')}`,
      },
    },
  };
}

export default function Page({ params }) {
  const locale = resolveRequestLocale(headers(), cookies());
  const rawGuide = getGuideBySlug(params.slug);
  if (!rawGuide) notFound();

  const guide = localizeGuide(rawGuide, locale);
  const path = localizePath(`/kennisbank/${getGuideSlug(rawGuide, locale)}`, locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    image: guide.image,
    datePublished: guide.date,
    inLanguage: locale === 'en' ? 'en' : 'nl',
    author: {
      '@type': 'Organization',
      name: 'TOF Sports',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TOF Sports',
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KennisbankArticlePage guide={rawGuide} />
    </>
  );
}
