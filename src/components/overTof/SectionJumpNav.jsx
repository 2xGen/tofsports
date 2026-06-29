'use client';

import React, { useEffect, useState } from 'react';

export const OVER_TOF_SECTIONS = [
  { id: 'visie-missie', label: 'Visie & Missie' },
  { id: 'knltb', label: 'KNLTB' },
  { id: 'tof-methode', label: 'TOF Methode' },
  { id: 'tof-score', label: 'TOF Score' },
  { id: 'magneetposters', label: 'Magneetposters' },
  { id: 'leraren-app', label: 'Leraren-app' },
];

const SectionJumpNav = () => {
  const [activeId, setActiveId] = useState(OVER_TOF_SECTIONS[0].id);

  useEffect(() => {
    const observers = OVER_TOF_SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
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
      className="sticky top-20 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      aria-label="Secties op deze pagina"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <p className="pt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Ga direct naar
        </p>
        <div className="flex gap-2 overflow-x-auto pb-3 pt-2 scrollbar-hide">
          {OVER_TOF_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeId === id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
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
