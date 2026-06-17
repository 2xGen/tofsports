'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TofScoreContent = ({ useAnchors = false }) => {
  const methodeHref = useAnchors ? '#tof-methode' : '/tof-methode';

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
            De TOF 365-Score: meten wat écht belangrijk is
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            Om jeugdparticipatie zichtbaar en meetbaar te maken, introduceert TOF Sports de TOF
            365-Score: dé standaard voor actieve jeugdleden binnen tennis- en padelverenigingen. De
            score beloont meedoen — hoe vaker een jeugdspeler speelt en deelneemt aan het
            clubleven, hoe hoger de score.
          </p>
          <div className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-lg font-bold text-white">
            <span>Doel:</span>
            <span>365 punten per jaar per jeugdspeler</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Punten verdienen
          </span>
          <h3 className="mt-1 mb-4 text-xl font-bold text-gray-900">Hoe werkt de TOF 365-Score?</h3>
          <p className="mb-6 leading-relaxed text-gray-600">
            Punten worden verzameld op steeds terugkerende speelmomenten op de vereniging.
          </p>
          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {['Deelname aan oefenformats', 'Deelname aan de clubkampioenschappen', 'Vrij spelen'].map(
              (item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Spelen zonder de druk om te moeten winnen
          </h3>
          <p className="mb-6 leading-relaxed text-gray-600">
            Deelname telt meer dan resultaat. Vaker meedoen en net verliezen levert bij TOF Score
            meer op dan af en toe aanwezig zijn en steeds winnen.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              'Meer motivatie om te spelen',
              'Meer zelfvertrouwen',
              'Een veilige leeromgeving',
              'Snellere en bredere ontwikkeling',
            ].map((text) => (
              <div
                key={text}
                className="flex gap-3 rounded-xl border border-orange-100 bg-orange-50/50 p-4"
              >
                <span className="text-xl text-orange-500">→</span>
                <span className="text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
          <h3 className="mb-3 text-lg font-bold text-gray-900">Gamification en motivatie</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Spelers werken toe naar steeds hogere scores, sparen voor leuke beloningen en bouwen zo
            aan hun TOF Score-status.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
          <h3 className="mb-3 text-lg font-bold text-gray-900">Digitale tool</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Leraren houden scores en voortgang digitaal bij, waarbij de nadruk ligt op deelname en
            inzet.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8"
      >
        <h4 className="mb-2 text-xl font-bold text-gray-900">
          Klaar om jeugdparticipatie te laten groeien?
        </h4>
        <p className="mb-6 text-sm text-gray-600">
          Met de TOF-methode en de TOF 365-Score bouwen verenigingen aan een actieve, levendige
          jeugdafdeling.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={methodeHref}
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Ontdek de TOF-methode
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-orange-500 bg-white px-5 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
          >
            Plan een kennismaking
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TofScoreContent;
