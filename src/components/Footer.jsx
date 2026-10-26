'use client';

import React from 'react';
import Image from 'next/image';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

const footerLinkClass =
  'text-sm text-white/80 transition-colors hover:text-tof-yellow';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="bg-tof-indigo text-white">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Logo + Snelle Links + TOF Methode, with tagline spanning underneath */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-3xl bg-tof-yellow p-5 transition hover:bg-tof-yellow/90 md:p-6"
                >
                  <Image
                    src="/tof-logo-blauw.png"
                    alt="TOF Sports"
                    width={280}
                    height={160}
                    className="h-24 w-auto md:h-28 lg:h-32"
                  />
                </Link>
              </div>

              <div>
                <h3 className="mb-4 text-base font-semibold text-white">
                  {t('footer.quickLinks')}
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/" className={footerLinkClass}>
                      {t('nav.home')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/over-tof" className={footerLinkClass}>
                      {t('nav.about')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/producten" className={footerLinkClass}>
                      {t('nav.products')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/kennisbank" className={footerLinkClass}>
                      {t('nav.knowledge')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/media" className={footerLinkClass}>
                      {t('nav.media')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className={footerLinkClass}>
                      {t('footer.privacyPolicy')}
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          typeof window !== 'undefined' &&
                          window.openCookieSettings
                        ) {
                          window.openCookieSettings();
                        }
                      }}
                      className={footerLinkClass}
                    >
                      {t('footer.cookieSettings')}
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-base font-semibold text-white">
                  {t('footer.method')}
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/tof-methode" className={footerLinkClass}>
                      {t('footer.aboutMethod')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/spelen" className={footerLinkClass}>
                      {t('footer.play')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/leren" className={footerLinkClass}>
                      {t('footer.learn')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/sparen" className={footerLinkClass}>
                      {t('footer.save')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 max-w-3xl space-y-2">
              <p className="text-sm leading-relaxed text-white/70">
                {t('footer.tagline')}
              </p>
              <p className="text-sm text-white/70">
                © TOF Sports 2018-{currentYear}. {t('footer.rights')}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>
                M. van Nispenstraat 16
                <br />
                3201KC Spijkenisse
              </li>
              <li>
                <a href="tel:0613252559" className="transition-colors hover:text-tof-yellow">
                  06 13 25 25 59
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tofsports.nl"
                  className="transition-colors hover:text-tof-yellow"
                >
                  info@tofsports.nl
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-semibold text-white transition-colors hover:text-tof-yellow"
            >
              {t('footer.getInTouch')}
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white">
              {t('footer.companyDetails')}
            </h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>KVK: 70507929</li>
              <li>BTW: NL858349954B01</li>
              <li>IBAN: NL56KNAB0257029400</li>
              <li>BIC: KNABNL2H</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
