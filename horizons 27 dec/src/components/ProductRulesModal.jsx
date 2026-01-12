'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductRulesModal = ({ isOpen, onClose, productName, rules }) => {
  if (!rules) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header - Matching Hero Section Style */}
              <div 
                className="relative text-gray-800 p-6 md:p-8 flex items-center justify-between overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(180, 255, 200, 0.4), rgba(197, 223, 223, 0.5), rgba(62, 200, 188, 0.3))',
                }}
              >
                <h2 className="text-2xl md:text-4xl font-bold relative z-10">{productName}</h2>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="text-gray-800 hover:bg-white/30 relative z-10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto flex-1 p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  {rules.split('\n').map((line, index) => {
                    // Check if line is a heading (all caps or starts with specific patterns)
                    const isHeading = /^[A-Z][A-Z\s&]+$/.test(line.trim()) && line.trim().length > 3 && line.trim().length < 50;
                    const isSubHeading = line.trim().startsWith('•') || line.trim().startsWith('-');
                    const isEmpty = line.trim() === '';

                    if (isEmpty) {
                      return <div key={index} className="h-4" />;
                    }

                    if (isHeading) {
                      return (
                        <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                          {line.trim()}
                        </h3>
                      );
                    }

                    if (isSubHeading) {
                      return (
                        <p key={index} className="text-gray-700 mb-2 ml-4">
                          {line.trim()}
                        </p>
                      );
                    }

                    // Check for numbered lists
                    if (/^\d+\./.test(line.trim())) {
                      return (
                        <p key={index} className="text-gray-700 mb-2 ml-4">
                          {line.trim()}
                        </p>
                      );
                    }

                    // Regular paragraph
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {line.trim()}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <Button
                  onClick={onClose}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                  size="lg"
                >
                  Sluiten
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
