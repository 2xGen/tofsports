'use client';

import React from 'react';
import Link from '@/i18n/Link';
import { OVER_TOF, ot, otMap } from '@/i18n/content/overTof';
import { useLocale } from '@/i18n/LocaleProvider';

const TofMethodeContent = ({ useAnchors = false }) => {
  const { locale } = useLocale();
  const c = OVER_TOF.methode;
  const scoreHref = useAnchors ? '#tof-score' : '/tof-score';
  const pillars = otMap(locale, c.pillars);

  const splitTitle = (title) => {
    const i = title.indexOf(':');
    if (i === -1) return { head: title, sub: null };
    return {
      head: title.slice(0, i).trim(),
      sub: title.slice(i + 1).trim(),
    };
  };

  return (
    <div>
      <div className="max-w-5xl space-y-6 md:space-y-8">
        <div>
          <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
            {ot(locale, c.title)}
          </h3>
          <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
            {ot(locale, c.intro)}
          </p>
        </div>
        <p className="text-base leading-relaxed text-tof-indigo md:text-lg">
          {ot(locale, c.highlight)}
        </p>
      </div>

      <div className="mt-10 border-t border-tof-indigo/50 pt-10 md:mt-12 md:pt-12">
        <h3 className="mb-6 text-xl font-bold text-tof-indigo md:mb-8 md:text-2xl">
          {ot(locale, c.pillarsTitle)}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {pillars.map((pillar) => {
            const { head, sub } = splitTitle(pillar.title);
            return (
              <div key={pillar.n} className="flex flex-col bg-[#F3F3F5] p-6 md:p-7">
                <h4 className="text-xl font-bold text-tof-indigo md:text-2xl">
                  {pillar.n}. {head}
                </h4>
                {sub && (
                  <p className="mt-1 text-base font-bold text-tof-indigo md:text-lg">{sub}</p>
                )}
                {pillar.intro && (
                  <p className="mt-3 text-sm leading-relaxed text-tof-indigo md:text-base">
                    {pillar.intro}
                  </p>
                )}
                {(pillar.items || []).length > 0 && (
                  <ul className="mt-3 space-y-2 text-sm text-tof-indigo md:text-base">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tof-indigo" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {pillars.some((p) => p.footer) && (
          <div className="mt-10 border-y border-tof-indigo/50 py-10 md:mt-12 md:py-12">
            <div className="w-full bg-tof-yellow px-12 py-8 text-center md:px-24 md:py-10 lg:px-40 xl:px-52">
              {pillars
                .filter((p) => p.footer)
                .map((p) => (
                  <p
                    key={p.n}
                    className="mx-auto max-w-2xl text-lg italic leading-relaxed text-tof-indigo md:text-xl lg:text-2xl"
                  >
                    {p.footer}
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 max-w-5xl md:mt-12">
        <h3 className="mb-3 text-xl font-bold text-tof-indigo md:text-2xl">
          {ot(locale, c.mindsetTitle)}
        </h3>
        <p className="mb-6 text-base leading-relaxed text-tof-indigo md:text-lg">
          {ot(locale, c.mindsetBody)}
        </p>
        <Link
          href={scoreHref}
          className="inline-flex items-center justify-center rounded-full bg-tof-indigo px-6 py-2.5 text-sm font-semibold text-tof-yellow transition-colors hover:bg-tof-indigo/90"
        >
          {ot(locale, c.scoreCta)}
        </Link>
      </div>
    </div>
  );
};

export default TofMethodeContent;
