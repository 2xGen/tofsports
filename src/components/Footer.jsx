'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Official KNLTB Tenniskids partner. Professionele, speelse tools voor de moderne tennis- en padelles.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/toftennis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/webshop" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Webshop
                </Link>
              </li>
              <li>
                <Link href="/knltb" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  KNLTB
                </Link>
              </li>
              <li>
                <Link href="/missie-visie" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Missie & Visie
                </Link>
              </li>
              <li>
                <Link href="/tof-score" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  TOF Score
                </Link>
              </li>
              <li>
                <Link href="/handboek" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Speluitleg
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>
                  M. van Nispenstraat 16<br />
                  3201KC Spijkenisse
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href="tel:0613252559" className="hover:text-orange-500 transition-colors">
                  06 13 25 25 59
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@toftennis.nl" className="hover:text-orange-500 transition-colors">
                  info@toftennis.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bedrijfsgegevens</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © TOF Sports 2018-{currentYear}. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined' && window.openCookieSettings) {
                    window.openCookieSettings();
                  }
                }}
                className="text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                Cookie Instellingen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
