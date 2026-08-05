'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/i18n/LocaleProvider';

const formatEuro = (amount) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(amount);

const ProductConfigureModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const { t } = useLocale();
  const pricing = product?.pricing;
  const [step, setStep] = useState(1);
  const [tierId, setTierId] = useState(null);
  const [wantsButtons, setWantsButtons] = useState(null);
  const [extraQuantity, setExtraQuantity] = useState(0);

  const type = pricing?.type;
  const bundleExtra = pricing?.extras?.[0];

  useEffect(() => {
    if (!isOpen) return undefined;
    setStep(1);
    setTierId(null);
    setWantsButtons(null);
    setExtraQuantity(0);
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, product?.id]);

  const selectedTier = useMemo(
    () => pricing?.tiers?.find((t) => t.id === tierId),
    [pricing?.tiers, tierId]
  );

  const totalPrice = useMemo(() => {
    if (!pricing) return 0;
    if (type === 'fixed-bundle') {
      return pricing.price + (bundleExtra ? bundleExtra.price * extraQuantity : 0);
    }
    if (type === 'poster-buttons-optional') {
      return pricing.posterPrice + (wantsButtons ? pricing.buttonAddon : 0);
    }
    if (type === 'poster-wizard' && selectedTier) {
      return pricing.posterPrice + (wantsButtons ? selectedTier.buttonAddon : 0);
    }
    return pricing.posterPrice ?? 0;
  }, [pricing, type, selectedTier, wantsButtons, bundleExtra, extraQuantity]);

  const canProceed =
    (step === 1 && type !== 'fixed-bundle') ||
    (step === 2 && type === 'poster-wizard' && tierId) ||
    (step === 2 && type === 'poster-buttons-optional' && wantsButtons !== null);

  const canAdd =
    type === 'fixed-bundle' ||
    (type === 'poster-buttons-optional' && wantsButtons !== null) ||
    (type === 'poster-wizard' && tierId && wantsButtons !== null);

  const buildCartItem = () => {
    if (type === 'fixed-bundle') {
      const extraTotal = bundleExtra ? bundleExtra.price * extraQuantity : 0;
      return {
        productId: product.id,
        productName: product.name,
        formatId: 'bundle',
        formatName: pricing.label,
        packageType: 'bundle',
        packageLabel: pricing.label,
        extraName: extraQuantity > 0 && bundleExtra ? bundleExtra.name : null,
        extraPrice: bundleExtra?.price ?? 0,
        extraQuantity,
        price: pricing.price + extraTotal,
      };
    }

    if (type === 'poster-buttons-optional') {
      const withButtons = wantsButtons === true;
      const format = product.formats?.[0];
      return {
        productId: product.id,
        productName: product.name,
        formatId: format?.id ?? 'poster',
        formatName: format?.name ?? t('configure.magneticPoster'),
        packageType: withButtons ? 'poster-buttons' : 'poster-only',
        packageLabel: withButtons
          ? `${t('configure.magneticPoster')} + ${pricing.buttonLabel || t('configure.magnetButtonsGeneric')}`
          : t('configure.posterOnly'),
        price: totalPrice,
      };
    }

    if (type === 'poster-wizard' && selectedTier) {
      const withButtons = wantsButtons === true;
      return {
        productId: product.id,
        productName: product.name,
        formatId: selectedTier.id,
        formatName: selectedTier.label,
        packageType: withButtons ? 'poster-buttons' : 'poster-only',
        packageLabel: withButtons
          ? `${t('configure.posterPlusButtons')} (${selectedTier.label.toLowerCase()})`
          : `${t('configure.posterOnly')} (${selectedTier.label.toLowerCase()})`,
        price: totalPrice,
      };
    }

    return null;
  };

  const handleAdd = () => {
    const item = buildCartItem();
    if (!item) return;
    onAddToCart(item);
    onClose();
  };

  const maxStep = type === 'poster-wizard' ? 3 : type === 'poster-buttons-optional' ? 2 : 1;

  if (!product || !pricing) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
              aria-label={t('configure.close')}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-gray-100 px-6 pb-4 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                {t('configure.configure')}
              </p>
              <h2 className="pr-8 font-poppins text-xl font-black text-gray-900">{product.name}</h2>
            </div>

            <div className="space-y-6 px-6 py-6">
              {type === 'fixed-bundle' && (
                <>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm text-gray-600">{pricing.label}</p>
                    <p className="mt-2 text-3xl font-black text-gray-900">{formatEuro(pricing.price)}</p>
                  </div>

                  {bundleExtra && (
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                      <p className="mb-3 text-sm font-semibold text-gray-900">{t('configure.extraOptions')}</p>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">{bundleExtra.name}</p>
                          <p className="text-sm font-bold text-gray-900">{formatEuro(bundleExtra.price)}</p>
                        </div>
                        <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
                          <button
                            type="button"
                            onClick={() => setExtraQuantity((q) => Math.max(0, q - 1))}
                            disabled={extraQuantity <= 0}
                            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label={t('configure.less')}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{extraQuantity}</span>
                          <button
                            type="button"
                            onClick={() => setExtraQuantity((q) => q + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-200"
                            aria-label={t('configure.more')}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {type !== 'fixed-bundle' && step >= 1 && (
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
                  <p className="text-sm font-medium text-gray-700">{t('configure.magneticPoster')}</p>
                  <p className="mt-1 text-2xl font-black text-gray-900">
                    {formatEuro(pricing.posterPrice)}
                  </p>
                </div>
              )}

              {type === 'poster-wizard' && step >= 2 && (
                <div>
                  <p className="mb-3 font-semibold text-gray-900">
                    {t('configure.playersQuestion')}
                  </p>
                  <div className="space-y-2">
                    {pricing.tiers.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setTierId(tier.id)}
                        className={`w-full rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                          tierId === tier.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <span className="font-semibold text-gray-900">{tier.label}</span>
                        {wantsButtons === true && (
                          <span className="mt-1 block text-sm text-gray-600">
                            + {formatEuro(tier.buttonAddon)} {t('configure.buttonsAddonSuffix')}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {((type === 'poster-wizard' && step >= 3) ||
                (type === 'poster-buttons-optional' && step >= 2)) && (
                <div>
                  <p className="mb-3 font-semibold text-gray-900">{t('configure.buttonsQuestion')}</p>
                  <p className="mb-4 text-sm text-gray-600">
                    {pricing.buttonsHelpText || t('configure.buttonsHelpDefault')}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setWantsButtons(false)}
                      className={`rounded-xl border-2 px-4 py-4 text-left transition-colors ${
                        wantsButtons === false
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <span className="font-semibold text-gray-900">{t('configure.alreadyHaveButtons')}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setWantsButtons(true)}
                      className={`rounded-xl border-2 px-4 py-4 text-left transition-colors ${
                        wantsButtons === true
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <span className="font-semibold text-gray-900">{t('configure.yesPlease')}</span>
                      <span className="mt-1 block text-sm text-gray-600">
                        +
                        {formatEuro(
                          type === 'poster-buttons-optional'
                            ? pricing.buttonAddon
                            : selectedTier?.buttonAddon ?? 0
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {canAdd && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{t('configure.total')}</span>
                    <span className="text-2xl font-black text-gray-900">{formatEuro(totalPrice)}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 border-t border-gray-100 px-6 py-4">
              {step > 1 && type !== 'fixed-bundle' ? (
                <Button type="button" variant="outline" onClick={() => setStep((s) => s - 1)}>
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  {t('configure.back')}
                </Button>
              ) : (
                <Button type="button" variant="outline" onClick={onClose}>
                  {t('configure.cancel')}
                </Button>
              )}

              {type === 'fixed-bundle' ? (
                <Button
                  type="button"
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                  onClick={handleAdd}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {t('configure.addToCart')} — {formatEuro(totalPrice)}
                </Button>
              ) : canAdd ? (
                <Button
                  type="button"
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                  onClick={handleAdd}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {t('configure.addToCart')} — {formatEuro(totalPrice)}
                </Button>
              ) : step < maxStep ? (
                <Button
                  type="button"
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed}
                >
                  {t('configure.next')}
                </Button>
              ) : (
                <Button type="button" className="flex-1" disabled>
                  {t('configure.makeYourChoice')}
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductConfigureModal;
