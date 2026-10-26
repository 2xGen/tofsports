'use client';

import React, { useEffect, useState } from 'react';
import { OVER_TOF, ot } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

export const OVER_TOF_SECTIONS = OVER_TOF.sections.map(({ id, title }) => ({
  id,
  label: title,
}));

const SectionJumpNav = () => {
  const { locale } = useLocale();
  const sections = OVER_TOF.sections.map((s) => ({
    id: s.id,
    label: ot(locale, s.title),
  }));
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const ids = OVER_TOF.sections.map((s) => s.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      className="bg-white"
      aria-label={ot(locale, OVER_TOF.page.sectionsAria)}
    >
      <div className="container mx-auto max-w-5xl px-4 pb-3 pt-6 md:pb-4 md:pt-8">
        <p className="text-sm text-tof-indigo">{ot(locale, OVER_TOF.page.jumpTo)}:</p>
        <div className="mt-3 flex flex-wrap gap-2.5 md:flex-nowrap md:gap-3">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors md:flex-1 md:px-4 md:py-3.5 md:text-base ${
                activeId === id
                  ? 'bg-tof-indigo text-tof-yellow'
                  : 'bg-tof-indigo text-tof-yellow hover:bg-tof-indigo/90'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SectionJumpNav;
