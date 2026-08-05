'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COOKIE_CATEGORIES, COOKIE_UI, cookieText } from '@/i18n/content/cookies';
import { useLocale } from '@/i18n/LocaleProvider';

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

const saveConsent = (consent) => {
  localStorage.setItem(
    'tof-cookie-consent',
    JSON.stringify({
      ...consent,
      timestamp: new Date().toISOString(),
    })
  );
};

const CookieConsent = () => {
  const { locale } = useLocale();
  const t = (node) => cookieText(locale, node);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
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
      marketing: true,
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
      marketing: false,
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
    if (categoryId === 'necessary') return;
    setConsent((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleExpanded = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

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
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[100] border-t-2 border-gray-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
          >
            <div className="container mx-auto px-4 py-4 md:py-6">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <div className="flex flex-1 items-start gap-3">
                  <div className="flex-shrink-0 rounded-lg bg-orange-100 p-2">
                    <Cookie className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">{t(COOKIE_UI.bannerTitle)}</h3>
                    <p className="text-sm text-gray-600">
                      {t(COOKIE_UI.bannerBody)}{' '}
                      <button
                        type="button"
                        onClick={openSettings}
                        className="text-orange-500 underline hover:text-orange-600"
                      >
                        {t(COOKIE_UI.moreInfo)}
                      </button>
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-wrap gap-2 md:w-auto">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="flex-1 text-sm md:flex-none"
                  >
                    {t(COOKIE_UI.necessaryOnly)}
                  </Button>
                  <Button
                    onClick={openSettings}
                    variant="outline"
                    className="flex-1 text-sm md:flex-none"
                  >
                    <Settings className="mr-1 h-4 w-4" />
                    {t(COOKIE_UI.preferences)}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-orange-500 text-sm text-white hover:bg-orange-600 md:flex-none"
                  >
                    <Check className="mr-1 h-4 w-4" />
                    {t(COOKIE_UI.acceptAll)}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-orange-100 p-2">
                      <Cookie className="h-6 w-6 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {t(COOKIE_UI.settingsTitle)}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-600">{t(COOKIE_UI.settingsIntro)}</p>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto p-6">
                {Object.values(COOKIE_CATEGORIES).map((category) => (
                  <div key={category.id} className="overflow-hidden rounded-xl border border-gray-200">
                    <div
                      className={`flex cursor-pointer items-center justify-between p-4 ${
                        consent[category.id] ? 'bg-green-50' : 'bg-gray-50'
                      }`}
                      onClick={() => toggleExpanded(category.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') toggleExpanded(category.id);
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="flex flex-1 items-center gap-3">
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            checked={consent[category.id]}
                            onChange={() => toggleCategory(category.id)}
                            disabled={category.required}
                            className="peer sr-only"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div
                            className={`h-6 w-11 rounded-full peer after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full ${
                              category.required
                                ? 'cursor-not-allowed bg-green-500'
                                : 'bg-gray-300'
                            } peer-checked:bg-green-500`}
                          />
                        </label>
                        <div>
                          <h3 className="font-bold text-gray-900">{t(category.name)}</h3>
                          {category.required && (
                            <span className="text-xs text-gray-500">
                              {t(COOKIE_UI.alwaysActive)}
                            </span>
                          )}
                        </div>
                      </div>
                      {expandedCategories[category.id] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>

                    <AnimatePresence>
                      {expandedCategories[category.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gray-200 bg-white p-4">
                            <p className="mb-4 text-sm text-gray-600">
                              {t(category.description)}
                            </p>
                            <div className="rounded-lg bg-gray-50 p-3">
                              <p className="mb-2 text-xs font-medium text-gray-500">
                                {t(COOKIE_UI.usedCookies)}
                              </p>
                              <div className="space-y-2">
                                {category.cookies.map((cookie) => (
                                  <div key={cookie.name} className="flex justify-between text-xs">
                                    <span className="font-medium text-gray-700">{cookie.name}</span>
                                    <span className="text-gray-500">{t(cookie.duration)}</span>
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

              <div className="border-t border-gray-200 bg-gray-50 p-6">
                <div className="flex flex-wrap justify-end gap-3">
                  <Button onClick={handleRejectAll} variant="outline">
                    {t(COOKIE_UI.necessaryOnly)}
                  </Button>
                  <Button onClick={handleSavePreferences} variant="outline">
                    {t(COOKIE_UI.savePreferences)}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-orange-500 text-white hover:bg-orange-600"
                  >
                    {t(COOKIE_UI.acceptAll)}
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
