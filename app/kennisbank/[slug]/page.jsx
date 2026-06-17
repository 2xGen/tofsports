import { notFound } from 'next/navigation';
import KennisbankArticlePage from '@/views/KennisbankArticlePage';
import { getAllGuideSlugs, getGuideBySlug } from '@/data/kennisbankGuides';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tofsports.nl';

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  const title = `${guide.title} | Kennisbank TOF Sports`;
  const url = `${SITE_URL}/kennisbank/${guide.slug}`;

  return {
    title,
    description: guide.metaDescription,
    openGraph: {
      title,
      description: guide.metaDescription,
      url,
      siteName: 'TOF Sports',
      locale: 'nl_NL',
      type: 'article',
      publishedTime: guide.date,
      images: [{ url: guide.image, alt: guide.imageAlt }],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function Page({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    image: guide.image,
    datePublished: guide.date,
    author: {
      '@type': 'Organization',
      name: 'TOF Sports',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TOF Sports',
    },
    mainEntityOfPage: `${SITE_URL}/kennisbank/${guide.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KennisbankArticlePage guide={guide} />
    </>
  );
}
