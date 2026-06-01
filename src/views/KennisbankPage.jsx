'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Tag } from 'lucide-react';
import PageHero, { PageHeroSubtitle, PageHeroTitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import { kennisbankArticles, kennisbankCategories } from '@/data/kennisbank';

const formatDate = (iso) => {
  try {
    return new Intl.DateTimeFormat('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
};

const KennisbankPage = () => {
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'Alle') return kennisbankArticles;
    return kennisbankArticles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/kennisbank')} minHeight="50vh">
        {(heroInView) => (
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <PageHeroTitle heroInView={heroInView}>Kennisbank</PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Gidsen, tips en praktische kennis voor je jeugdprogramma.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container mx-auto max-w-5xl px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-0.5 h-8 w-8 shrink-0 text-orange-500" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                  Alles wat je nodig hebt om slimmer te werken op de club
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Hier delen we gidsen, tips en uitleg over de TOF Methode, speelmomenten en
                  motivatie op de vereniging. Nieuwe artikelen worden regelmatig toegevoegd.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mb-8 flex flex-wrap gap-2">
          {kennisbankCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <p className="text-center text-gray-500 py-12">Geen artikelen in deze categorie.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {filteredArticles.map((article, index) => (
              <motion.li
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg">
                  {article.image && (
                    <div className="relative aspect-[16/10] w-full bg-gray-100">
                      <Image
                        src={article.image}
                        alt={article.imageAlt ?? article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                        quality={85}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 font-medium text-orange-700">
                      <Tag className="h-3 w-3" aria-hidden />
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden />
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {article.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-medium text-gray-400">Volledig artikel volgt</p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default KennisbankPage;
