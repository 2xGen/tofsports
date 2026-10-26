'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Facebook, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { isOverTofPath, isProductenPath } from '@/data/hubPages';
import { stripLocale, toInternalPath } from '@/i18n/config';
import Link from '@/i18n/Link';
import LanguageToggle from '@/i18n/LanguageToggle';
import { useLocale } from '@/i18n/LocaleProvider';

const topNavLinkClass = (path, href, isActive) =>
  `text-sm font-medium transition-colors ${
    isActive ?? (path === href || path.startsWith(`${href}/`))
      ? 'text-tof-yellow font-semibold'
      : 'text-white/80 hover:text-white'
  }`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const path = toInternalPath(stripLocale(pathname || '/'));
  const { getCartCount, isLoaded } = useCart();
  const { t } = useLocale();
  const menuRef = useRef(null);

  const cartCount = isLoaded ? getCartCount() : 0;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-tof-indigo">
      <div className="container mx-auto px-4" ref={menuRef}>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Image
                src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg"
                alt="TOF Sports"
                width={200}
                height={60}
                className="h-10 w-auto object-contain brightness-0 invert md:h-12"
                priority
                quality={90}
              />
            </Link>
          </div>

          <nav className="hidden flex-1 justify-center md:flex" aria-label={t('nav.mainNav')}>
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  path === '/' ? 'text-tof-yellow font-semibold' : 'text-white/80 hover:text-white'
                }`}
              >
                {t('nav.home')}
              </Link>

              <Link
                href="/over-tof"
                className={topNavLinkClass(path, '/over-tof', isOverTofPath(pathname))}
              >
                {t('nav.about')}
              </Link>

              <Link
                href="/producten"
                className={topNavLinkClass(path, '/producten', isProductenPath(pathname))}
              >
                {t('nav.products')}
              </Link>

              <Link href="/kennisbank" className={topNavLinkClass(path, '/kennisbank')}>
                {t('nav.knowledge')}
              </Link>

              <Link href="/media" className={topNavLinkClass(path, '/media')}>
                {t('nav.media')}
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle className="hidden sm:inline-flex" />

            <Link
              href="/pakketten"
              className="hidden rounded-full bg-tof-yellow px-5 py-2.5 text-sm font-semibold text-tof-indigo transition-all hover:bg-tof-yellow/90 md:block"
            >
              {t('nav.packages')}
            </Link>

            <Link
              href="/winkelmand"
              className={`relative rounded-lg p-2 transition-all ${
                path === '/winkelmand'
                  ? 'bg-tof-yellow/20 text-tof-yellow'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              aria-label={t('nav.cart')}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-tof-yellow px-1 text-xs font-semibold text-tof-indigo">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-colors hover:text-tof-yellow"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-colors hover:text-tof-yellow"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 transition-colors hover:text-white md:hidden"
              aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-tof-indigo md:hidden">
            <div className="px-4 py-4">
              <div className="mb-3 flex justify-end sm:hidden">
                <LanguageToggle />
              </div>

              <Link
                href="/"
                onClick={closeMobile}
                className={`mb-2 block border-b border-white/10 py-3 text-base font-medium ${
                  path === '/' ? 'text-tof-yellow font-semibold' : 'text-white'
                }`}
              >
                {t('nav.home')}
              </Link>

              <Link
                href="/over-tof"
                onClick={closeMobile}
                className={`block border-b border-white/10 py-3 text-base font-medium ${
                  isOverTofPath(pathname) ? 'text-tof-yellow font-semibold' : 'text-white'
                }`}
              >
                {t('nav.about')}
              </Link>

              <Link
                href="/producten"
                onClick={closeMobile}
                className={`block border-b border-white/10 py-3 text-base font-medium ${
                  isProductenPath(pathname) ? 'text-tof-yellow font-semibold' : 'text-white'
                }`}
              >
                {t('nav.products')}
              </Link>

              <Link
                href="/kennisbank"
                onClick={closeMobile}
                className={`block border-b border-white/10 py-3 text-base font-medium ${
                  path === '/kennisbank' || path.startsWith('/kennisbank/')
                    ? 'text-tof-yellow font-semibold'
                    : 'text-white'
                }`}
              >
                {t('nav.knowledge')}
              </Link>

              <Link
                href="/media"
                onClick={closeMobile}
                className={`block border-b border-white/10 py-3 text-base font-medium ${
                  path === '/media' ? 'text-tof-yellow font-semibold' : 'text-white'
                }`}
              >
                {t('nav.media')}
              </Link>

              <Link
                href="/winkelmand"
                onClick={closeMobile}
                className={`flex items-center gap-2 border-b border-white/10 py-3 text-base font-medium ${
                  path === '/winkelmand' ? 'text-tof-yellow font-semibold' : 'text-white'
                }`}
              >
                {t('nav.cart')}
                {cartCount > 0 && (
                  <span className="rounded-full bg-tof-yellow px-2 py-0.5 text-xs font-semibold text-tof-indigo">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/pakketten"
                onClick={closeMobile}
                className="mt-4 block rounded-full bg-tof-yellow py-3.5 text-center text-base font-semibold text-tof-indigo hover:bg-tof-yellow/90"
              >
                {t('nav.packages')}
              </Link>

              <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
                <a
                  href="https://www.instagram.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-tof-yellow"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-tof-yellow"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
