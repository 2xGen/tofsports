'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Users,
  Package,
  ClipboardList,
  Mail,
  ShoppingCart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';
import PageHero, { PageHeroEyebrow, PageHeroTitle, PageHeroSubtitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';
import FormatThumbnail from '@/components/FormatThumbnail';
import {
  MAIN_PACKAGES,
  PLAYER_TIERS,
  buildPackageQuote,
  formatEuro,
  getVanafPrice,
} from '@/data/pakketten';

const STEPS = [
  { id: 1, label: 'Kies pakket', icon: Package },
  { id: 2, label: 'Jeugdspelers', icon: Users },
  { id: 3, label: 'Jouw pakket', icon: ClipboardList },
];

const PakkettenPage = () => {
  const [step, setStep] = useState(1);
  const [packageId, setPackageId] = useState(null);
  const [tierId, setTierId] = useState(null);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const quote = useMemo(() => {
    if (!packageId || !tierId) return null;
    return buildPackageQuote(packageId, tierId);
  }, [packageId, tierId]);

  const canGoStep2 = Boolean(packageId);
  const canGoStep3 = Boolean(packageId && tierId);

  const goNext = () => {
    if (step === 1 && canGoStep2) setStep(2);
    else if (step === 2 && canGoStep3) setStep(3);
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleAddToCart = () => {
    if (!quote) return;
    addToCart({
      productId: `hoofdpakket-${quote.package.id}`,
      productName: quote.package.title,
      formatId: quote.tier.id,
      formatName: quote.tier.label,
      packageType: 'compleet',
      packageLabel: `Hoofdpakket (${quote.tier.shortLabel} jeugdspelers)`,
      price: quote.totalExBtw,
    });
    toast({
      title: 'Pakket toegevoegd',
      description: `${quote.package.title} staat in je winkelmand. Rond je bestelling af of neem contact op voor advies.`,
      duration: 4000,
    });
  };

  const mailSubject = quote
    ? encodeURIComponent(
        `Offerte ${quote.package.title} – ${quote.tier.label}`
      )
    : '';
  const mailBody = quote
    ? encodeURIComponent(
        `Hoi TOF Sports,\n\nIk ben geïnteresseerd in het ${quote.package.title} voor ${quote.tier.label}.\nGeschatte prijs (ex. btw): ${formatEuro(quote.totalExBtw)}\n\nGraag hoor ik van jullie!\n`
      )
    : '';

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/pakketten')} minHeight="45vh">
        {(heroInView) => (
          <div className="flex flex-col items-center">
            <PageHeroEyebrow heroInView={heroInView}>Plug &amp; Play jeugdprogramma</PageHeroEyebrow>
            <PageHeroTitle heroInView={heroInView} className="font-black">
              Stel jouw clubpakket samen
            </PageHeroTitle>
            <PageHeroSubtitle heroInView={heroInView}>
              Kies tennis, padel of combi en geef aan hoeveel jeugdspelers je hebt. Wij berekenen
              het juiste pakket met de juiste formats en materialen.
            </PageHeroSubtitle>
          </div>
        )}
      </PageHero>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-24">
        {/* Step indicator */}
        <nav
          className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-3"
          aria-label="Stappen"
        >
          {STEPS.map(({ id, label, icon: Icon }) => {
            const active = step === id;
            const done = step > id;
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
                {done ? (
                  <Check className="h-4 w-4 shrink-0" />
                ) : (
                  <Icon className="h-4 w-4 shrink-0" />
                )}
                <span className="hidden sm:inline">
                  {id}. {label}
                </span>
                <span className="sm:hidden">{id}</span>
              </div>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          {/* Step 1 — Package */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                Welk hoofdpakket past bij jouw club?
              </h2>
              <p className="mb-10 text-center text-gray-600">
                Prijzen zijn <strong>vanaf</strong>, excl. btw — afhankelijk van aantal jeugdspelers.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {MAIN_PACKAGES.map((pkg) => {
                  const selected = packageId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setPackageId(pkg.id)}
                      className={`group flex flex-col overflow-hidden rounded-3xl border-4 bg-white text-left shadow-lg transition-shadow ${
                        selected
                          ? `${pkg.borderColor} ring-4 ring-offset-2 ring-[#1B144C]/20`
                          : 'border-gray-100 hover:shadow-xl'
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                          <Image
                            src={pkg.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 320px"
                            quality={65}
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                            aria-hidden
                          />
                        </div>
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
                      <div className={`bg-gradient-to-r ${pkg.color} p-5 text-white`}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
                          {pkg.subtitle}
                        </p>
                        <h3 className="mt-1 text-xl font-black">{pkg.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/95">
                          {pkg.description}
                        </p>
                        <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="text-2xl font-black">
                            vanaf {formatEuro(pkg.vanafPrice)}
                          </span>
                          <span className="text-sm font-medium text-white/85">ex. btw</span>
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2 — Players */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                Hoeveel jeugdspelers heeft je club?
              </h2>
              <p className="mb-10 text-center text-gray-600">
                Op basis hiervan kiezen we de juiste format-posters en buttonsets voor jouw
                pakket.
              </p>
              <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
                {PLAYER_TIERS.map((tier) => {
                  const selected = tierId === tier.id;
                  const previewPrice =
                    packageId &&
                    formatEuro(
                      buildPackageQuote(packageId, tier.id)?.totalExBtw ??
                        getVanafPrice(packageId)
                    );
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setTierId(tier.id)}
                      className={`rounded-2xl border-2 p-6 text-left transition-all ${
                        selected
                          ? 'border-[#1B144C] bg-[#1B144C]/5 shadow-md'
                          : 'border-gray-200 bg-white hover:border-indigo-200 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-lg font-black text-gray-900">{tier.label}</p>
                          {packageId && (
                            <p className="mt-2 text-sm font-semibold text-[#1B144C]">
                              Indicatie: {previewPrice} ex. btw
                            </p>
                          )}
                        </div>
                        {selected && (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B144C] text-white">
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 3 — Summary */}
          {step === 3 && quote && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="mb-2 text-center font-poppins text-2xl font-black text-gray-900 md:text-3xl">
                Jouw {quote.package.title}
              </h2>
              <p className="mb-10 text-center text-gray-600">
                Voor <strong>{quote.tier.label}</strong> — compleet Plug &amp; Play pakket
              </p>

              <div className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                    <h3 className="mb-4 font-bold text-gray-900">Formats in jouw pakket</h3>
                    <ul className="space-y-4">
                      {quote.formatLines.map((line, lineIndex) => (
                        <li
                          key={`${line.productId}-${line.formatName}`}
                          className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50/80 p-3"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                            <FormatThumbnail
                              thumbnail={line.thumbnail}
                              fallbackSrc={line.image}
                              alt={line.name}
                              priority={lineIndex === 0}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900">{line.name}</p>
                            <p className="text-sm text-gray-500">
                              {line.formatName} · {line.players}
                            </p>
                            <p className="text-xs text-gray-400">{line.packageLabel}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mb-3 mt-8 font-bold text-gray-900">
                      Ook inbegrepen
                    </h3>
                    <ul className="space-y-3">
                      {quote.bundleLines.map((item) => (
                        <li key={item.name} className="flex gap-2.5 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <p className="min-w-0 flex-1 leading-snug">
                            <strong className="text-gray-900">{item.name}</strong>
                            {item.includedValue != null && (
                              <span className="font-bold text-emerald-700" aria-hidden>
                                **
                              </span>
                            )}
                            {item.description ? (
                              <span className="text-gray-600"> — {item.description}</span>
                            ) : null}
                          </p>
                        </li>
                      ))}
                    </ul>
                    {quote.bundleLines.some((item) => item.includedValue != null) && (
                      <p className="mt-4 border-l-2 border-emerald-300 pl-3 text-xs leading-relaxed text-gray-600">
                        <span className="font-bold text-emerald-800">**</span> Het rijdbare whiteboard
                        ter waarde van €150 is als bonus inbegrepen voor alle nieuwe clubs, zodat je
                        maximaal gebruik kunt maken van de TOF-formats.
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
                      {quote.package.title}
                    </h3>

                    <dl className="mt-6 space-y-2 border-t border-gray-100 pt-4 text-sm">
                      <div className="flex justify-between text-gray-600">
                        <dt>Formats (plus)</dt>
                        <dd>{formatEuro(quote.formatsSubtotal)}</dd>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <dt>Clubpakket (matrix, poster, whiteboard, app)</dt>
                        <dd>{formatEuro(quote.bundleExtras)}</dd>
                      </div>
                      <div className="flex justify-between border-t border-gray-100 pt-2 font-bold text-gray-900">
                        <dt>Totaal ex. btw</dt>
                        <dd>{formatEuro(quote.totalExBtw)}</dd>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <dt>Btw (21%)</dt>
                        <dd>{formatEuro(quote.btw)}</dd>
                      </div>
                      <div className="flex justify-between text-lg font-black text-[#1B144C]">
                        <dt>Totaal incl. btw</dt>
                        <dd>{formatEuro(quote.totalIncBtw)}</dd>
                      </div>
                    </dl>

                    <p className="mt-4 text-xs text-gray-500">
                      Indicatieve prijs op basis van plus-formats en jouw jeugdgroep. Neem
                      contact op voor een definitieve offerte.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <Button
                        onClick={handleAddToCart}
                        className="w-full gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] py-6 font-bold"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        In winkelwagen
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full gap-2 rounded-2xl py-6 font-bold"
                      >
                        <a href={`mailto:info@tofsports.nl?subject=${mailSubject}&body=${mailBody}`}>
                          <Mail className="h-5 w-5" />
                          Vraag offerte aan
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            disabled={step === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Vorige
          </Button>
          {step < 3 ? (
            <Button
              type="button"
              onClick={goNext}
              disabled={(step === 1 && !canGoStep2) || (step === 2 && !canGoStep3)}
              className="gap-2 rounded-2xl bg-gradient-to-r from-[#1B144C] to-[#3B2F7A] px-8 font-bold"
            >
              Volgende
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button asChild variant="outline" className="gap-2">
              <Link href="/webshop">Losse formats bekijken</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PakkettenPage;
