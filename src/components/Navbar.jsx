'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Facebook, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const OVER_TOF_LINKS = [
  { href: '/missie-visie', label: 'Visie & Missie' },
  { href: '/knltb', label: 'KNLTB' },
  { href: '/tof-methode', label: 'TOF Methode' },
  { href: '/tof-score', label: 'TOF Score' },
  { href: '/magneetposters', label: 'Magneetposters' },
  { href: '/leraren-app', label: 'Leraren-app' },
];

const PRODUCTEN_LINKS = [
  { href: '/pakketten', label: 'Clubpakketten' },
  { href: '/handboek', label: 'Speluitleg' },
  { href: '/webshop', label: 'Losse formats' },
];

const topNavLinkClass = (pathname, href) =>
  `text-sm font-medium transition-colors ${
    pathname === href || pathname.startsWith(`${href}/`)
      ? 'text-orange-600'
      : 'text-gray-700 hover:text-orange-600'
  }`;

const linkClass = (active) =>
  `block px-4 py-2.5 text-sm transition-colors ${
    active ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
  }`;

const NavDropdown = ({ label, links, pathname, isOpen, onOpen, onClose }) => {
  const isGroupActive = links.some(
    (l) => pathname === l.href || pathname.startsWith(`${l.href}/`)
  );

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isGroupActive || isOpen ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
            {links.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass(active)}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavGroup = ({ label, links, pathname, isExpanded, onToggle, onNavigate }) => {
  const isGroupActive = links.some(
    (l) => pathname === l.href || pathname.startsWith(`${l.href}/`)
  );

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between py-3 text-base font-medium ${
          isGroupActive ? 'text-orange-600' : 'text-gray-800'
        }`}
        aria-expanded={isExpanded}
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {isExpanded && (
        <div className="space-y-1 pb-3 pl-3">
          {links.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`block rounded-lg py-2 pl-3 text-sm font-medium ${
                  active ? 'text-orange-600 bg-orange-50' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();
  const { getCartCount, isLoaded } = useCart();
  const menuRef = useRef(null);

  const cartCount = isLoaded ? getCartCount() : 0;

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const closeMobile = () => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4" ref={menuRef}>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Image
                src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg"
                alt="TOF Sports"
                width={200}
                height={60}
                className="h-10 w-auto object-contain md:h-12"
                priority
                quality={90}
              />
            </Link>
          </div>

          <nav className="hidden flex-1 justify-center md:flex" aria-label="Hoofdnavigatie">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Home
              </Link>

              <NavDropdown
                label="Over TOF"
                links={OVER_TOF_LINKS}
                pathname={pathname}
                isOpen={openDropdown === 'over-tof'}
                onOpen={() => setOpenDropdown('over-tof')}
                onClose={() => setOpenDropdown(null)}
              />

              <NavDropdown
                label="Producten"
                links={PRODUCTEN_LINKS}
                pathname={pathname}
                isOpen={openDropdown === 'producten'}
                onOpen={() => setOpenDropdown('producten')}
                onClose={() => setOpenDropdown(null)}
              />

              <Link href="/kennisbank" className={topNavLinkClass(pathname, '/kennisbank')}>
                Kennisbank
              </Link>

              <Link href="/media" className={topNavLinkClass(pathname, '/media')}>
                Media
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/pakketten"
              className="hidden rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-orange-600 md:block"
            >
              Bekijk pakketten
            </Link>

            <Link
              href="/winkelmand"
              className={`relative rounded-lg p-2 transition-all ${
                pathname === '/winkelmand'
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-orange-600'
              }`}
              aria-label="Winkelmand"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors hover:text-orange-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition-colors hover:text-orange-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 transition-colors hover:text-orange-600 md:hidden"
              aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="px-4 py-4">
              <Link
                href="/"
                onClick={closeMobile}
                className={`mb-2 block border-b border-gray-100 py-3 text-base font-medium ${
                  pathname === '/' ? 'text-orange-600' : 'text-gray-800'
                }`}
              >
                Home
              </Link>

              <MobileNavGroup
                label="Over TOF"
                links={OVER_TOF_LINKS}
                pathname={pathname}
                isExpanded={mobileExpanded === 'over-tof'}
                onToggle={() =>
                  setMobileExpanded((v) => (v === 'over-tof' ? null : 'over-tof'))
                }
                onNavigate={closeMobile}
              />

              <MobileNavGroup
                label="Producten"
                links={PRODUCTEN_LINKS}
                pathname={pathname}
                isExpanded={mobileExpanded === 'producten'}
                onToggle={() =>
                  setMobileExpanded((v) => (v === 'producten' ? null : 'producten'))
                }
                onNavigate={closeMobile}
              />

              <Link
                href="/kennisbank"
                onClick={closeMobile}
                className={`block border-b border-gray-100 py-3 text-base font-medium ${
                  pathname === '/kennisbank' ? 'text-orange-600' : 'text-gray-800'
                }`}
              >
                Kennisbank
              </Link>

              <Link
                href="/media"
                onClick={closeMobile}
                className={`block border-b border-gray-100 py-3 text-base font-medium ${
                  pathname === '/media' ? 'text-orange-600' : 'text-gray-800'
                }`}
              >
                Media
              </Link>

              <Link
                href="/winkelmand"
                onClick={closeMobile}
                className={`flex items-center gap-2 border-b border-gray-100 py-3 text-base font-medium ${
                  pathname === '/winkelmand' ? 'text-orange-600' : 'text-gray-800'
                }`}
              >
                Winkelmand
                {cartCount > 0 && (
                  <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/pakketten"
                onClick={closeMobile}
                className="mt-4 block rounded-xl bg-orange-500 py-3.5 text-center text-base font-bold text-white hover:bg-orange-600"
              >
                Bekijk pakketten
              </Link>

              <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4">
                <a
                  href="https://www.instagram.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600"
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
