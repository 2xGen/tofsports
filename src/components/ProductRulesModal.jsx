'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/i18n/LocaleProvider';

const ProductRulesModal = ({ isOpen, onClose, productName, rules }) => {
  const { t } = useLocale();
  if (!rules) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl"
            >
              <div className="relative flex items-center justify-between border-b border-tof-indigo/15 bg-[#F3F3F5] p-6 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-tof-indigo/70">
                    {t('webshop.officialRules')}
                  </p>
                  <h2 className="mt-1 font-heading text-2xl font-bold !text-tof-indigo md:text-3xl">
                    {productName}
                  </h2>
                </div>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-tof-indigo hover:bg-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-none">
                  {rules.split('\n').map((line, index) => {
                    const isHeading =
                      /^[A-Z][A-Z\s&]+$/.test(line.trim()) &&
                      line.trim().length > 3 &&
                      line.trim().length < 50;
                    const isSubHeading =
                      line.trim().startsWith('•') || line.trim().startsWith('-');
                    const isEmpty = line.trim() === '';

                    if (isEmpty) {
                      return <div key={index} className="h-4" />;
                    }

                    if (isHeading) {
                      return (
                        <h3
                          key={index}
                          className="mb-4 mt-8 font-heading text-2xl font-bold !text-tof-indigo first:mt-0"
                        >
                          {line.trim()}
                        </h3>
                      );
                    }

                    if (isSubHeading) {
                      return (
                        <p key={index} className="mb-2 ml-4 text-tof-indigo/80">
                          {line.trim()}
                        </p>
                      );
                    }

                    if (/^\d+\./.test(line.trim())) {
                      return (
                        <p key={index} className="mb-2 ml-4 text-tof-indigo/80">
                          {line.trim()}
                        </p>
                      );
                    }

                    return (
                      <p key={index} className="mb-4 leading-relaxed text-tof-indigo/80">
                        {line.trim()}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-tof-indigo/15 bg-[#F3F3F5] p-6">
                <Button
                  onClick={onClose}
                  className="w-full !rounded-none bg-tof-yellow font-bold text-tof-indigo hover:bg-tof-yellow/90"
                  size="lg"
                >
                  {t('common.close')}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductRulesModal;
