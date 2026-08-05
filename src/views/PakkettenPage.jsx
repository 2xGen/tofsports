'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  Package,
  ClipboardList,
  ShoppingCart,
  Layers,
  CircleDot,
  Minus,
  Plus,
  X,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import PageHero, { PageHeroEyebrow, PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import FormatThumbnail from '@/components/FormatThumbnail';
import { getYouTubeId } from '@/components/ProductVideo';
import { buildPackageDetailsFromQuote } from '@/lib/packageOrderDetails';
import {
  MAIN_PACKAGES,
  PACKAGE_LEVELS,
  YOUTH_TIERS,
  BUTTON_PACK_SIZE,
  BUTTON_PRICE_PER_PACK,
  LEVEL_PRICES,
  buildPackageQuote,
  calculateSuggestedButtons,
  formatEuro,
  getCombiLevelPrice,
  getDefaultWhiteboardChoice,
  getPackageBundleLines,
  getPackageFormatLines,
  getProductsNeedingPosterSize,
  getPosterSizeOptions,
  localizeYouthTier,
  packageIncludesFreeWhiteboard,
  suggestPosterTierIdForProduct,
  TOF_SCORE_APP_FOOTNOTE,
  WHITEBOARD_COMPACT_PRICE,
  WHITEBOARD_IMAGE,
  WHITEBOARD_PREMIUM_IMAGE,
  WHITEBOARD_PREMIUM_PRICE,
} from '@/data/pakketten';
import { useLocale } from '@/i18n/LocaleProvider';
import { ot } from '@/i18n/content/overTof';
import { localizePackage, localizeLevel } from '@/i18n/content/packages';

const STEP_DEFS = [
  { id: 1, labelKey: 'packages.steps.sport', icon: Package },
  { id: 2, labelKey: 'packages.steps.package', icon: Layers },
  { id: 3, labelKey: 'packages.steps.youth', icon: Users },
  { id: 4, labelKey: 'packages.steps.buttons', icon: CircleDot },
  { id: 5, labelKey: 'packages.steps.posters', icon: ClipboardList },
  { id: 6, labelKey: 'packages.steps.summary', icon: ShoppingCart },
];

function PackageVideoModal({ video, onClose }) {
  const { t } = useLocale();
  const videoId = getYouTubeId(video?.videoUrl);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={t('packages.videoLabel', { name: video.name })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-24 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:top-8"
        aria-label={t('common.close')}
      >
        <X className="h-6 w-6" />
      </button>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          {videoId ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={t('packages.explainerVideoTitle', { name: video.name })}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              {t('packages.videoUnavailable')}
            </div>
          )}
        </div>
        <p className="mt-4 text-center text-lg font-bold text-white">{video.name}</p>
      </motion.div>
    </motion.div>
  );
}

function LevelPicker({ sport, selectedLevelId, onSelect }) {
  const { locale, t } = useLocale();
  const [videoModal, setVideoModal] = useState(null);
  const selectedLevel = PACKAGE_LEVELS.find((level) => level.id === selectedLevelId);
  const selectedLevelLocalized = selectedLevel
    ? localizeLevel(selectedLevel, locale)
    : null;
  const selectedFormats = selectedLevelId
    ? getPackageFormatLines(sport, selectedLevelId)
    : [];
  const selectedBundles = selectedLevelId ? getPackageBundleLines(selectedLevelId, locale) : [];

  return (
    <>
      <p className="mb-4 text-center text-sm text-gray-500">
        {t('packages.step2Hint')}
      </p>

      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
        {PACKAGE_LEVELS.map((rawLevel) => {
          const level = localizeLevel(rawLevel, locale);
          const selected = selectedLevelId === level.id;
          const formatCount = getPackageFormatLines(sport, level.id).length;
          const hasFreeBoard = level.id === 'plus' || level.id === 'compleet';

          return (
            <button
              key={level.id}
              type="button"
              onClick={() => onSelect(level.id)}
              className={`relative flex h-full flex-col rounded-2xl border-2 p-5 text-left transition-all ${
                selected
                  ? 'border-[#1B144C] bg-[#1B144C] text-white shadow-lg ring-4 ring-[#1B144C]/15'
                  : 'border-gray-200 bg-white text-gray-900 hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              {level.id === 'compleet' && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold ${
                    selected ? 'bg-white text-[#1B144C]' : 'bg-orange-500 text-white'
                  }`}
                >
                  {t('packages.popular')}
                </span>
              )}

              <div className="flex items-start justify-between gap-2">
                <p className="text-xl font-black">{level.label}</p>
                {selected && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1B144C]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                )}
              </div>

              <p className={`mt-3 text-2xl font-black ${selected ? 'text-white' : 'text-[#1B144C]'}`}>
                {formatEuro(LEVEL_PRICES[level.id])}
              </p>
              <p className={`text-sm ${selected ? 'text-white/80' : 'text-gray-500'}`}>
                {t('packages.exVat')}
              </p>

              <p className={`mt-4 text-sm leading-relaxed ${selected ? 'text-white/90' : 'text-gray-600'}`}>
                {level.description}
              </p>

              <ul className={`mt-4 space-y-1.5 text-xs ${selected ? 'text-white/85' : 'text-gray-500'}`}>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {t('packages.formatsCount', { count: formatCount })}
                </li>
                {hasFreeBoard && (
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                    {t('packages.freeBoardAction')}
                  </li>
                )}
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {t('packages.sessionsAndApp')}
                </li>
              </ul>

              <span
                className={`mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold ${
                  selected
                    ? 'bg-white text-[#1B144C]'
                    : 'bg-[#1B144C]/10 text-[#1B144C]'
                }`}
              >
                {selected
                  ? t('packages.selected')
                  : t('packages.choose', { label: level.label })}
              </span>
            </button>
          );
        })}
      </div>

      {selectedLevelLocalized && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-8 max-w-2xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-lg font-black text-gray-900">
            {t('packages.includedIn', { label: selectedLevelLocalized.label })}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {t('packages.includedHint')}
          </p>

          <ul className="mt-5 space-y-3">
            {selectedFormats.map((format) => (
              <li
                key={format.id}
                className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-2.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                  {format.image ? (
                    <FormatThumbnail
                      thumbnail={format.thumbnail}
                      fallbackSrc={format.image}
                      alt={format.name}
                    />
                  ) : (
                    <Check className="h-4 w-4 text-emerald-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{format.name}</p>
                  {format.videoUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        setVideoModal({ name: format.name, videoUrl: format.videoUrl })
                      }
                      className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B144C] hover:underline"
                    >
                      <Play className="h-3 w-3 fill-current" />
                      {t('packages.viewVideo')}
                    </button>
                  )}
                </div>
              </li>
            ))}
            {selectedBundles.map((item) => (
              <li
                key={item.id}
                className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-2.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain p-0.5"
                      sizes="48px"
                    />
                  ) : (
                    <Check className="h-4 w-4 text-emerald-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {item.name}
                    {item.footnote && '**'}
                  </p>
                  {item.description && (
                    <p className="text-xs text-gray-500">{item.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <AnimatePresence>
        {videoModal && (
          <PackageVideoModal video={videoModal} onClose={() => setVideoModal(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function WhiteboardOption({
  selected,
  onSelect,
  image,
  title,
  description,
  priceLabel,
  badge,
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
        selected
          ? 'border-[#1B144C] bg-[#1B144C]/5 shadow-md'
          : 'border-gray-200 bg-white hover:border-indigo-200 hover:shadow-sm'
      }`}
    >
      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
        <Image src={image} alt="" fill className="object-contain p-1" sizes="96px" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="font-bold text-gray-900">{title}</p>
          {priceLabel && (
            <span className="shrink-0 text-sm font-bold text-[#1B144C]">{priceLabel}</span>
          )}
        </div>
        {badge && (
          <span className="mt-1 inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
            {badge}
          </span>
        )}
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      {selected && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1B144C] text-white">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
      )}
    </button>
  );
}

function WhiteboardPicker({ hasFreeWhiteboard, value, onChange }) {
  const { t } = useLocale();
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
      <h3 className="font-bold text-gray-900">{t('packages.whiteboardHeading')}</h3>
      {hasFreeWhiteboard ? (
        <p className="mt-2 text-sm text-gray-600">{t('packages.whiteboardFreeInfo')}</p>
      ) : (
        <p className="mt-2 text-sm text-gray-600">{t('packages.whiteboardNoFreeInfo')}</p>
      )}

      <div className="mt-5 space-y-3">
        {hasFreeWhiteboard ? (
          <>
            <WhiteboardOption
              selected={value === 'included'}
              onSelect={() => onChange('included')}
              image={WHITEBOARD_IMAGE}
              title={t('packages.whiteboardIncludedTitle')}
              description={t('packages.whiteboardIncludedDesc')}
              priceLabel={t('packages.whiteboardFree')}
              badge={t('packages.whiteboardTempAction')}
            />
            <WhiteboardOption
              selected={value === 'decline'}
              onSelect={() => onChange('decline')}
              image={WHITEBOARD_IMAGE}
              title={t('packages.whiteboardDeclineTitle')}
              description={t('packages.whiteboardDeclineDesc')}
              priceLabel="€ 0,00"
            />
            <WhiteboardOption
              selected={value === 'premium'}
              onSelect={() => onChange('premium')}
              image={WHITEBOARD_PREMIUM_IMAGE}
              title={t('packages.whiteboardUpgradeTitle')}
              description={t('packages.whiteboardUpgradeDesc')}
              priceLabel={`+ ${formatEuro(WHITEBOARD_PREMIUM_PRICE)}`}
              badge={t('packages.whiteboardRecommended')}
            />
          </>
        ) : (
          <>
            <WhiteboardOption
              selected={value === 'none'}
              onSelect={() => onChange('none')}
              image={WHITEBOARD_IMAGE}
              title={t('packages.whiteboardNoneTitle')}
              description={t('packages.whiteboardNoneDesc')}
              priceLabel="€ 0,00"
            />
            <WhiteboardOption
              selected={value === 'compact'}
              onSelect={() => onChange('compact')}
              image={WHITEBOARD_IMAGE}
              title={t('packages.whiteboardCompactTitle')}
              description={t('packages.whiteboardCompactDesc')}
              priceLabel={formatEuro(WHITEBOARD_COMPACT_PRICE)}
            />
            <WhiteboardOption
              selected={value === 'premium'}
              onSelect={() => onChange('premium')}
              image={WHITEBOARD_PREMIUM_IMAGE}
              title={t('packages.whiteboardPremiumTitle')}
              description={t('packages.whiteboardPremiumDesc')}
              priceLabel={formatEuro(WHITEBOARD_PREMIUM_PRICE)}
              badge={t('packages.whiteboardRecommended')}
            />
          </>
        )}
      </div>
    </div>
  );
}

const PakkettenPage = () => {
  const { locale, t } = useLocale();
  const STEPS = STEP_DEFS.map((s) => ({ ...s, label: t(s.labelKey) }));
  const [step, setStep] = useState(1);
  const [packageId, setPackageId] = useState(null);
  const [tennisLevelId, setTennisLevelId] = useState(null);
  const [padelLevelId, setPadelLevelId] = useState(null);
  const [youthTierId, setYouthTierId] = useState(null);
  const [hasOwnButtons, setHasOwnButtons] = useState(null);
  const [buttonCount, setButtonCount] = useState(0);
  const [posterSizes, setPosterSizes] = useState({});
  const [whiteboardChoice, setWhiteboardChoice] = useState('none');
  const { toast } = useToast();
  const { addToCart } = useCart();

  const levelSelection = useMemo(
    () => ({ tennisLevelId, padelLevelId }),
    [tennisLevelId, padelLevelId],
  );

  const hasLevelsSelected = () => {
    if (packageId === 'combi') return Boolean(tennisLevelId && padelLevelId);
    if (packageId === 'tennis') return Boolean(tennisLevelId);
    if (packageId === 'padel') return Boolean(padelLevelId);
    return false;
  };

  const hasFreeWhiteboard = useMemo(
    () => packageIncludesFreeWhiteboard(packageId, { tennisLevelId, padelLevelId }),
    [packageId, tennisLevelId, padelLevelId],
  );

  useEffect(() => {
    if (!packageId || !hasLevelsSelected()) return;
    setWhiteboardChoice(getDefaultWhiteboardChoice(packageId, { tennisLevelId, padelLevelId }));
  }, [packageId, tennisLevelId, padelLevelId]);

  const youthTier = localizeYouthTier(YOUTH_TIERS.find((t) => t.id === youthTierId), locale);
  const posterProducts = useMemo(() => {
    if (!packageId || !hasLevelsSelected()) return [];
    return getProductsNeedingPosterSize(packageId, levelSelection);
  }, [packageId, levelSelection, tennisLevelId, padelLevelId]);

  useEffect(() => {
    if (!youthTier) return;
    const suggested = calculateSuggestedButtons(youthTier.playerCount);
    setButtonCount(suggested);
  }, [youthTier]);

  useEffect(() => {
    if (!packageId || !hasLevelsSelected() || !youthTierId) return;
    const defaults = {};
    getProductsNeedingPosterSize(packageId, levelSelection).forEach((productId) => {
      defaults[productId] = suggestPosterTierIdForProduct(productId, youthTierId);
    });
    setPosterSizes(defaults);
  }, [packageId, levelSelection, youthTierId, tennisLevelId, padelLevelId]);

  const quote = useMemo(() => {
    if (!packageId || !hasLevelsSelected() || !youthTierId) return null;
    return buildPackageQuote({
      packageId,
      tennisLevelId,
      padelLevelId,
      youthTierId,
      orderButtons: hasOwnButtons === false,
      buttonCount,
      posterSizes,
      whiteboardChoice,
      locale,
    });
  }, [
    packageId,
    tennisLevelId,
    padelLevelId,
    youthTierId,
    hasOwnButtons,
    buttonCount,
    posterSizes,
    whiteboardChoice,
    locale,
  ]);

  const skipPosterStep = posterProducts.length === 0;

  const canGoNext = () => {
    if (step === 1) return Boolean(packageId);
    if (step === 2) return hasLevelsSelected();
    if (step === 3) return Boolean(youthTierId);
    if (step === 4) return hasOwnButtons !== null && (hasOwnButtons || buttonCount >= BUTTON_PACK_SIZE);
    if (step === 5 && !skipPosterStep) {
      return posterProducts.every((id) => posterSizes[id]);
    }
    return true;
  };

  const goNext = () => {
    if (!canGoNext()) return;
    if (step === 4 && skipPosterStep) {
      setStep(6);
      return;
    }
    setStep((s) => Math.min(s + 1, 6));
  };

  const goBack = () => {
    if (step === 6 && skipPosterStep) {
      setStep(4);
      return;
    }
    setStep((s) => Math.max(1, s - 1));
  };

  const adjustButtons = (delta) => {
    setButtonCount((current) => Math.max(BUTTON_PACK_SIZE, current + delta));
  };

  const handleAddToCart = () => {
    if (!quote) return;
    addToCart({
      productId: quote.levels
        ? `hoofdpakket-combi-tennis-${quote.tennisLevelId}-padel-${quote.padelLevelId}`
        : `hoofdpakket-${quote.package.id}-${quote.level.id}`,
      productName: `${quote.package.title} — ${quote.levelLabel}`,
      formatId: quote.youth.id,
      formatName: quote.youth.label,
      packageType: quote.levels
        ? `tennis-${quote.tennisLevelId}-padel-${quote.padelLevelId}`
        : quote.level.id,
      packageLabel: `${quote.levelLabel} · ${quote.youth.shortLabel} ${t('packages.youthSuffix')}`,
      price: quote.totalExBtw,
      metadata: {
        buttonCount: quote.buttonCount,
        posterSizes: quote.posterSizes,
        tennisLevelId: quote.tennisLevelId,
        padelLevelId: quote.padelLevelId,
        whiteboardChoice: quote.whiteboardChoice,
        packageDetails: buildPackageDetailsFromQuote(quote),
      },
    });
    toast({
      title: t('packages.toastAddedTitle'),
      description: t('packages.toastAddedDescription', {
        title: quote.package.title,
        level: quote.levelLabel,
      }),
      duration: 4000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/pakketten')} minHeight="45vh">
        {(heroInView) => (
          <div className="flex flex-col items-center">
            <PageHeroEyebrow heroInView={heroInView}>{t('packages.heroEyebrow')}</PageHeroEyebrow>
            <PageHeroTitle heroInView={heroInView} className="font-black">
              {t('packages.heroTitle')}
            </PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              {t('packages.heroSubtitle')}
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <nav
          className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3"
          aria-label={t('packages.stepsAria')}
        >
          {STEPS.filter((s) => !(skipPosterStep && s.id === 5)).map(({ id, label, icon: Icon }) => {
            const displayStep = skipPosterStep && id === 6 ? 5 : id;
            const active = step === id || (step === 6 && id === 6);
            const done = step > id || (step === 6 && id < 6);
            return (
              <div
                key={id}
                className={`flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold transition-colors md:px-5 ${
                  active
                    ? 'border-[#1B144C] bg-[#1B144C] text-white shadow-lg'
                    : done
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-900 shadow-sm'
                      : 'border-gray-200 bg-white text-gray-800 shadow-md'
                }`}
              >
                {done ? <Check className="h-4 w-4 shrink-0" /> : <Icon className="h-4 w-4 shrink-0" />}
                <span className="hidden sm:inline">
                  {displayStep}. {label}
                </span>
                <span className="sm:hidden">{displayStep}</span>
              </div>
            );
          })}
        </nav>

        {step > 1 && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={goBack}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('packages.prev')}
            </Button>
            {step < 6 ? (
              <Button
                type="button"
                onClick={goNext}
                disabled={!canGoNext()}
                className="gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-8 font-bold"
              >
                {t('packages.next')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleAddToCart}
                disabled={!quote}
                className="gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-8 font-bold"
              >
                <ShoppingCart className="h-5 w-5" />
                {t('packages.addToCart')}
              </Button>
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                {t('packages.step1Title')}
              </h2>
              <p className="mb-10 text-center text-gray-600">
                {t('packages.step1Subtitle')}
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {MAIN_PACKAGES.map((rawPkg) => {
                  const pkg = localizePackage(rawPkg, locale);
                  const selected = packageId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => {
                        setPackageId(pkg.id);
                        setTennisLevelId(null);
                        setPadelLevelId(null);
                        setStep(2);
                      }}
                      className={`group flex h-full flex-col overflow-hidden rounded-3xl border-4 bg-white text-left shadow-lg transition-shadow ${
                        selected
                          ? `${pkg.borderColor} ring-4 ring-offset-2 ring-[#1B144C]/20`
                          : 'border-gray-100 hover:shadow-xl'
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 50vw, 320px"
                          quality={65}
                        />
                        {pkg.badge && (
                          <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                            {pkg.badge}
                          </span>
                        )}
                        {selected && (
                          <span className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1B144C] shadow-md">
                            <Check className="h-5 w-5" strokeWidth={3} />
                          </span>
                        )}
                      </div>
                      <div className={`flex flex-1 flex-col bg-gradient-to-r ${pkg.color} p-5 text-white`}>
                        <h3 className="text-xl font-black">{pkg.title}</h3>
                        <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="text-2xl font-black">
                            {t('packages.from')} {formatEuro(pkg.vanafPrice)}
                          </span>
                          <span className="text-sm font-medium text-white/85">{t('packages.shippingIncl')}</span>
                        </p>
                        <div className="mt-2 min-h-7">
                          {pkg.id === 'combi' && (
                            <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                              {t('packages.combiDiscountBadge')}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && packageId && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                {packageId === 'combi'
                  ? t('packages.step2TitleCombi')
                  : t('packages.step2Title')}
              </h2>
              <p className="mb-10 text-center text-gray-600">
                {packageId === 'combi'
                  ? t('packages.step2SubtitleCombi')
                  : t('packages.step2Subtitle')}
              </p>

              {packageId === 'combi' ? (
                <div className="space-y-12">
                  <div className="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center">
                    <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
                      {t('packages.combiDiscountBadge')}
                    </p>
                    {tennisLevelId && padelLevelId ? (
                      <>
                        <p className="mt-2 text-sm text-gray-500 line-through">
                          {formatEuro(LEVEL_PRICES[tennisLevelId] + LEVEL_PRICES[padelLevelId])} {t('packages.exVat')}
                        </p>
                        <p className="mt-1 text-2xl font-black text-[#1B144C]">
                          {formatEuro(getCombiLevelPrice(tennisLevelId, padelLevelId))}{' '}
                          <span className="text-sm font-medium text-gray-600">{t('packages.exVat')}</span>
                        </p>
                        <p className="mt-1 text-sm font-semibold text-emerald-700">
                          {t('packages.combiSavings', {
                            amount: formatEuro(
                              LEVEL_PRICES[tennisLevelId] +
                                LEVEL_PRICES[padelLevelId] -
                                getCombiLevelPrice(tennisLevelId, padelLevelId),
                            ),
                          })}
                        </p>
                      </>
                    ) : (
                      <p className="mt-2 text-sm text-emerald-900">{t('packages.combiHint')}</p>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-6 text-center text-lg font-bold text-sky-700">{t('packages.tennis')}</h3>
                    <LevelPicker
                      sport="tennis"
                      selectedLevelId={tennisLevelId}
                      onSelect={setTennisLevelId}
                    />
                  </div>
                  <div>
                    <h3 className="mb-6 text-center text-lg font-bold text-orange-600">{t('packages.padel')}</h3>
                    <LevelPicker
                      sport="padel"
                      selectedLevelId={padelLevelId}
                      onSelect={setPadelLevelId}
                    />
                  </div>
                </div>
              ) : (
                <LevelPicker
                  sport={packageId === 'padel' ? 'padel' : 'tennis'}
                  selectedLevelId={packageId === 'padel' ? padelLevelId : tennisLevelId}
                  onSelect={packageId === 'padel' ? setPadelLevelId : setTennisLevelId}
                />
              )}

              <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
                <span className="font-semibold text-gray-600">**</span> {ot(locale, TOF_SCORE_APP_FOOTNOTE)}
              </p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                {t('packages.step3Title')}
              </h2>
              <p className="mb-10 text-center text-gray-600">
                {t('packages.step3Subtitle')}
              </p>
              <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
                {YOUTH_TIERS.map((rawTier) => {
                  const tier = localizeYouthTier(rawTier, locale);
                  const selected = youthTierId === tier.id;
                  const suggested = calculateSuggestedButtons(tier.playerCount);
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => {
                        setYouthTierId(tier.id);
                        setStep(4);
                      }}
                      className={`rounded-2xl border-2 p-6 text-left transition-all ${
                        selected
                          ? 'border-[#1B144C] bg-[#1B144C]/5 shadow-md'
                          : 'border-gray-200 bg-white hover:border-indigo-200 hover:shadow-sm'
                      }`}
                    >
                      <p className="text-lg font-black text-gray-900">{tier.label}</p>
                      <p className="mt-2 text-sm text-gray-600">
                        {t('packages.buttonsAdvice', { count: suggested })}
                      </p>
                      {selected && (
                        <span className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1B144C] text-white">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 4 && youthTier && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                {t('packages.step4Title')}
              </h2>
              <p className="mb-6 text-center text-gray-600">
                {t('packages.step4Subtitle', { price: formatEuro(BUTTON_PRICE_PER_PACK) })}
              </p>

              <div className="mx-auto mb-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => setHasOwnButtons(true)}
                  className={`rounded-2xl border-2 px-6 py-4 text-left font-semibold transition-all ${
                    hasOwnButtons === true
                      ? 'border-[#1B144C] bg-[#1B144C]/5'
                      : 'border-gray-200 bg-white hover:border-indigo-200'
                  }`}
                >
                  {t('packages.haveButtons')}
                </button>
                <button
                  type="button"
                  onClick={() => setHasOwnButtons(false)}
                  className={`rounded-2xl border-2 px-6 py-4 text-left font-semibold transition-all ${
                    hasOwnButtons === false
                      ? 'border-[#1B144C] bg-[#1B144C]/5'
                      : 'border-gray-200 bg-white hover:border-indigo-200'
                  }`}
                >
                  {t('packages.orderButtons')}
                </button>
              </div>

              {hasOwnButtons === false && (
                <div className="mx-auto max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-center text-sm text-gray-600">
                    {t('packages.suggestedFor', {
                      tier: youthTier.label.toLowerCase(),
                      count: calculateSuggestedButtons(youthTier.playerCount),
                    })}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => adjustButtons(-BUTTON_PACK_SIZE)}
                      disabled={buttonCount <= BUTTON_PACK_SIZE}
                      aria-label={t('packages.fewerButtons')}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-[4rem] text-center text-2xl font-black text-gray-900">
                      {buttonCount}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => adjustButtons(BUTTON_PACK_SIZE)}
                      aria-label={t('packages.moreButtons')}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold text-[#1B144C]">
                    {formatEuro((buttonCount / BUTTON_PACK_SIZE) * BUTTON_PRICE_PER_PACK)} {t('packages.exVat')}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {step === 5 && !skipPosterStep && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                {t('packages.step5Title')}
              </h2>
              <p className="mb-10 text-center text-gray-600">
                {t('packages.step5Subtitle')}
              </p>
              <div className="mx-auto max-w-4xl space-y-8">
                {posterProducts.map((productId) => {
                  const product = quote?.formatLines.find((l) => l.productId === productId);
                  const options = getPosterSizeOptions(productId, locale);
                  return (
                    <div
                      key={productId}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6"
                    >
                      <p className="font-bold text-gray-900">{product?.name}</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {t('packages.playersQuestion')}
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {options.map((option) => {
                          const selected = posterSizes[productId] === option.id;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() =>
                                setPosterSizes((prev) => ({ ...prev, [productId]: option.id }))
                              }
                              className={`overflow-hidden rounded-xl border-2 text-left transition-all ${
                                selected
                                  ? 'border-[#1B144C] ring-2 ring-[#1B144C]/20'
                                  : 'border-gray-200 hover:border-indigo-200'
                              }`}
                            >
                              <div className="relative aspect-[3/4] w-full bg-gray-50">
                                <Image
                                  src={option.image}
                                  alt={option.label}
                                  fill
                                  className="object-contain p-2"
                                  sizes="(max-width: 640px) 50vw, 220px"
                                />
                                {selected && (
                                  <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1B144C] text-white shadow-md">
                                    <Check className="h-4 w-4" strokeWidth={3} />
                                  </span>
                                )}
                              </div>
                              <div
                                className={`px-3 py-2.5 text-xs font-semibold leading-snug sm:text-sm ${
                                  selected
                                    ? 'bg-[#1B144C]/5 text-[#1B144C]'
                                    : 'text-gray-700'
                                }`}
                              >
                                {option.label}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 6 && quote && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                {t('packages.step6Title', { title: quote.package.title, level: quote.levelLabel })}
              </h2>
              <p className="mb-10 text-center text-gray-600">
                {t('packages.summaryFor', { youth: quote.youth.label })}
              </p>

              <div className="grid gap-8 lg:grid-cols-5">
                <div className="space-y-6 lg:col-span-3">
                  <WhiteboardPicker
                    hasFreeWhiteboard={hasFreeWhiteboard}
                    value={whiteboardChoice}
                    onChange={setWhiteboardChoice}
                  />

                  <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                    <h3 className="mb-4 font-bold text-gray-900">{t('packages.formatsInPackage')}</h3>
                    <ul className="space-y-4">
                      {quote.formatLines.map((line) => (
                        <li
                          key={line.productId}
                          className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50/80 p-3"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                            <FormatThumbnail
                              thumbnail={line.thumbnail}
                              fallbackSrc={line.image}
                              alt={line.name}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900">{line.name}</p>
                            {line.players && (
                              <p className="text-sm text-gray-500">{line.players}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mb-3 mt-8 font-bold text-gray-900">{t('packages.alsoIncluded')}</h3>
                    <ul className="space-y-3">
                      {quote.bundleLines.map((item) => (
                        <li
                          key={item.id ?? item.name}
                          className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-2.5"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={48}
                                height={48}
                                className="h-full w-full object-contain p-0.5"
                                sizes="48px"
                              />
                            ) : (
                              <Check className="h-4 w-4 text-emerald-500" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1 text-sm text-gray-700">
                            <p className="font-bold text-gray-900">
                              {item.name}
                              {item.footnote && '**'}
                              {item.price > 0 && (
                                <span className="ml-2 font-bold text-[#1B144C]">
                                  {formatEuro(item.price)}
                                </span>
                              )}
                            </p>
                            {item.description && (
                              <p className="text-gray-600">{item.description}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    {quote.bundleLines.some((item) => item.footnote) && (
                      <p className="mt-3 text-xs leading-relaxed text-gray-500">
                        <span className="font-semibold text-gray-600">**</span> {ot(locale, TOF_SCORE_APP_FOOTNOTE)}
                      </p>
                    )}

                    {quote.buttonCount > 0 && (
                      <p className="mt-6 rounded-xl bg-orange-50 px-4 py-3 text-sm text-orange-900">
                        {t('packages.magnetButtonsLine', {
                          count: quote.buttonCount,
                          packs: quote.buttonCount / BUTTON_PACK_SIZE,
                        })}
                      </p>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="sticky top-28 rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg md:p-8">
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                      <Image
                        src={quote.package.image}
                        alt={quote.package.title}
                        fill
                        className="object-cover"
                        sizes="400px"
                      />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                      {quote.package.subtitle}
                    </p>
                    <h3 className="text-2xl font-black text-gray-900">
                      {quote.package.title} · {quote.levelLabel}
                    </h3>

                    <dl className="mt-6 space-y-2 border-t border-gray-100 pt-4 text-sm">
                      <div className="flex justify-between text-gray-600">
                        <dt>{t('packages.pakketLine')}</dt>
                        <dd>{formatEuro(quote.packageExBtw)}</dd>
                      </div>
                      {quote.buttonsExBtw > 0 && (
                        <div className="flex justify-between text-gray-600">
                          <dt>{t('packages.magneetbuttonsLine')}</dt>
                          <dd>{formatEuro(quote.buttonsExBtw)}</dd>
                        </div>
                      )}
                      {quote.whiteboardExBtw > 0 && quote.whiteboardLine && (
                        <div className="flex justify-between text-gray-600">
                          <dt>{quote.whiteboardLine.name}</dt>
                          <dd>{formatEuro(quote.whiteboardExBtw)}</dd>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-gray-100 pt-2 font-bold text-gray-900">
                        <dt>{t('packages.totalEx')}</dt>
                        <dd>{formatEuro(quote.totalExBtw)}</dd>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <dt>{t('packages.vat')}</dt>
                        <dd>{formatEuro(quote.btw)}</dd>
                      </div>
                      <div className="flex justify-between text-lg font-black text-[#1B144C]">
                        <dt>{t('packages.totalInc')}</dt>
                        <dd>{formatEuro(quote.totalIncBtw)}</dd>
                      </div>
                    </dl>

                    <Button
                      onClick={handleAddToCart}
                      className="mt-6 w-full gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] py-6 font-bold"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {t('packages.addToCart')}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            disabled={step === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('packages.prev')}
          </Button>
          {step < 6 ? (
            <Button
              type="button"
              onClick={goNext}
              disabled={!canGoNext()}
              className="gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-8 font-bold"
            >
              {t('packages.next')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleAddToCart}
              disabled={!quote}
              className="gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-8 font-bold"
            >
              <ShoppingCart className="h-5 w-5" />
              {t('packages.addToCart')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PakkettenPage;
