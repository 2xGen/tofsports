'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Visible on all screen sizes, left side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image 
                src="https://toftennis.nl/wp-content/uploads/2024/04/TOF-logo.svg" 
                alt="TOF Tennis" 
                width={200}
                height={60}
                className="h-10 md:h-12 w-auto object-contain" 
                priority
                quality={90}
              />
            </Link>
          </div>

          {/* Navigation Menu - Center, hidden on mobile */}
          <nav className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/webshop" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/webshop') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Webshop
              </Link>
              <Link 
                href="/spelers-kaarten" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/spelers-kaarten') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Spelerskaarten
              </Link>
              <Link 
                href="/tof-score" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/tof-score') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                TOF Score
              </Link>
              <Link 
                href="/handboek" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/handboek') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Handboek
              </Link>
              <Link 
                href="/leraren-app" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/leraren-app') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Leraren App
              </Link>
            </div>
          </nav>

          {/* Right side - Social icons on desktop, Hamburger menu on mobile */}
          <div className="flex items-center gap-4">
            {/* Social Icons - Hidden on mobile, shown on desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Toggle - Right side */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Menu toggle"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  pathname === '/' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/webshop"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive('/webshop') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Webshop
              </Link>
              <Link
                href="/spelers-kaarten"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive('/spelers-kaarten') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Spelerskaarten
              </Link>
              <Link
                href="/tof-score"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive('/tof-score') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                TOF Score
              </Link>
              <Link
                href="/handboek"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive('/handboek') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Handboek
              </Link>
              <Link
                href="/leraren-app"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive('/leraren-app') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Leraren App
              </Link>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <a
                  href="https://www.instagram.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/toftennis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600 transition-colors"
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
