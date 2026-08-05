'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Link from '@/i18n/Link';
import { useLocale } from '@/i18n/LocaleProvider';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg"
                alt="TOF Sports"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">{t('footer.tagline')}</p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 transition-colors hover:text-orange-500">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/over-tof"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/producten"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link
                  href="/kennisbank"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('nav.knowledge')}
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('nav.media')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.method')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tof-methode"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('footer.aboutMethod')}
                </Link>
              </li>
              <li>
                <Link
                  href="/spelen"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('footer.play')}
                </Link>
              </li>
              <li>
                <Link
                  href="/leren"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('footer.learn')}
                </Link>
              </li>
              <li>
                <Link
                  href="/sparen"
                  className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  {t('footer.save')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <span>
                  M. van Nispenstraat 16
                  <br />
                  3201KC Spijkenisse
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-orange-500" />
                <a href="tel:0613252559" className="transition-colors hover:text-orange-500">
                  06 13 25 25 59
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-orange-500" />
                <a href="mailto:info@tofsports.nl" className="transition-colors hover:text-orange-500">
                  info@tofsports.nl
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-orange-500 transition-colors hover:text-orange-400"
            >
              {t('footer.getInTouch')}
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">{t('footer.companyDetails')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-500">KVK:</span> 70507929
              </li>
              <li>
                <span className="text-gray-500">BTW:</span> NL858349954B01
              </li>
              <li>
                <span className="text-gray-500">IBAN:</span> NL56KNAB0257029400
              </li>
              <li>
                <span className="text-gray-500">BIC:</span> KNABNL2H
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © TOF Sports 2018-{currentYear}. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 transition-colors hover:text-orange-500"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.openCookieSettings) {
                    window.openCookieSettings();
                  }
                }}
                className="text-sm text-gray-500 transition-colors hover:text-orange-500"
              >
                {t('footer.cookieSettings')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
