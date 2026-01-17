'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Cookie categories
const COOKIE_CATEGORIES = {
  necessary: {
    id: 'necessary',
    name: 'Noodzakelijke cookies',
    description: 'Deze cookies zijn essentieel voor het functioneren van de website. Ze maken basisfuncties mogelijk zoals pagina-navigatie, winkelwagen en toegang tot beveiligde gedeelten. De website kan niet goed functioneren zonder deze cookies.',
    required: true,
    cookies: [
      { name: 'tof-cart', purpose: 'Bewaart uw winkelwagen', duration: 'Lokale opslag' },
      { name: 'tof-cookie-consent', purpose: 'Bewaart uw cookievoorkeuren', duration: '1 jaar' },
    ]
  },
  functional: {
    id: 'functional',
    name: 'Functionele cookies',
    description: 'Deze cookies maken verbeterde functionaliteit en personalisatie mogelijk. Ze kunnen worden geplaatst door ons of door externe partijen wiens diensten we aan onze pagina\'s hebben toegevoegd.',
    required: false,
    cookies: [
      { name: 'user-preferences', purpose: 'Onthoudt uw voorkeuren zoals taal en regio', duration: '1 jaar' },
    ]
  },
  analytics: {
    id: 'analytics',
    name: 'Analytische cookies',
    description: 'Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken. Ze verzamelen informatie anoniem en helpen ons de website te verbeteren.',
    required: false,
    cookies: [
      { name: '_ga, _gid', purpose: 'Google Analytics - Meet websitegebruik', duration: '2 jaar / 24 uur' },
    ]
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing cookies',
    description: 'Deze cookies worden gebruikt om advertenties relevanter te maken voor u. Ze worden ook gebruikt om het aantal keren dat u een advertentie ziet te beperken en om de effectiviteit van advertentiecampagnes te meten.',
    required: false,
    cookies: [
      { name: 'Facebook Pixel', purpose: 'Remarketing en conversie tracking', duration: '3 maanden' },
    ]
  }
};

// Get saved consent from localStorage
const getSavedConsent = () => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('tof-cookie-consent');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  }
  return null;
};

// Save consent to localStorage
const saveConsent = (consent) => {
  localStorage.setItem('tof-cookie-consent', JSON.stringify({
    ...consent,
    timestamp: new Date().toISOString()
  }));
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedConsent = getSavedConsent();
    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setConsent(allAccepted);
    saveConsent(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setConsent(onlyNecessary);
    saveConsent(onlyNecessary);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const toggleCategory = (categoryId) => {
    if (categoryId === 'necessary') return; // Can't toggle necessary cookies
    setConsent(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleExpanded = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  // Expose function to open settings from anywhere (for footer button)
  useEffect(() => {
    window.openCookieSettings = () => {
      setShowSettings(true);
    };
    return () => {
      delete window.openCookieSettings;
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-2 border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="container mx-auto px-4 py-4 md:py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon & Text */}
                <div className="flex items-start gap-3 flex-1">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Cookie className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Wij gebruiken cookies</h3>
                    <p className="text-sm text-gray-600">
                      We gebruiken cookies om je ervaring op onze website te verbeteren. 
                      Sommige cookies zijn noodzakelijk voor het functioneren van de site, 
                      andere helpen ons de site te verbeteren.{' '}
                      <button 
                        onClick={openSettings}
                        className="text-orange-500 hover:text-orange-600 underline"
                      >
                        Meer informatie
                      </button>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="flex-1 md:flex-none text-sm"
                  >
                    Alleen noodzakelijk
                  </Button>
                  <Button
                    onClick={openSettings}
                    variant="outline"
                    className="flex-1 md:flex-none text-sm"
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    Voorkeuren
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-white text-sm"
                  >
                    <Check className="w-4 h-4 mr-1" />
                    Alles accepteren
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Cookie className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Cookie Voorkeuren</h2>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Wij respecteren uw privacy. U kunt hieronder uw voorkeuren instellen voor welke cookies u wilt toestaan. 
                  U kunt uw voorkeuren op elk moment wijzigen.
                </p>
              </div>

              {/* Cookie Categories */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {Object.values(COOKIE_CATEGORIES).map((category) => (
                  <div 
                    key={category.id}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    {/* Category Header */}
                    <div 
                      className={`p-4 flex items-center justify-between cursor-pointer ${
                        consent[category.id] ? 'bg-green-50' : 'bg-gray-50'
                      }`}
                      onClick={() => toggleExpanded(category.id)}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={consent[category.id]}
                            onChange={() => toggleCategory(category.id)}
                            disabled={category.required}
                            className="sr-only peer"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div className={`w-11 h-6 rounded-full peer 
                            ${category.required ? 'bg-green-500 cursor-not-allowed' : 'bg-gray-300'}
                            peer-checked:bg-green-500 
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:bg-white after:rounded-full after:h-5 after:w-5 
                            after:transition-all peer-checked:after:translate-x-full`}
                          />
                        </label>
                        <div>
                          <h3 className="font-bold text-gray-900">{category.name}</h3>
                          {category.required && (
                            <span className="text-xs text-gray-500">Altijd actief</span>
                          )}
                        </div>
                      </div>
                      {expandedCategories[category.id] ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>

                    {/* Category Details */}
                    <AnimatePresence>
                      {expandedCategories[category.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 border-t border-gray-200 bg-white">
                            <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                            
                            {/* Cookie List */}
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-xs font-medium text-gray-500 mb-2">Gebruikte cookies:</p>
                              <div className="space-y-2">
                                {category.cookies.map((cookie, index) => (
                                  <div key={index} className="flex justify-between text-xs">
                                    <span className="text-gray-700 font-medium">{cookie.name}</span>
                                    <span className="text-gray-500">{cookie.duration}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-wrap gap-3 justify-end">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                  >
                    Alleen noodzakelijk
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    variant="outline"
                  >
                    Voorkeuren opslaan
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Alles accepteren
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
