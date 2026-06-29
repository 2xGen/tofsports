'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MissieVisieContent = ({ useAnchors = false }) => {
  const methodeHref = useAnchors ? '#tof-methode' : '/tof-methode';
  const scoreHref = useAnchors ? '#tof-score' : '/tof-score';

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">De 365-mentaliteit</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Wij geloven dat verenigingen sterker worden wanneer jeugdspelers zich het hele jaar door
            betrokken voelen en met plezier actief deel uitmaken van het verenigingsleven. Niet alleen
            tijdens het lesuur en competitie, maar 365 dagen per jaar. Daarom zetten we jeugdspelers
            centraal en zien we sport als een doorlopende clubervaring waarin ontwikkeling, plezier en
            ontmoeting samenkomen.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-1 text-xl font-bold text-gray-900 md:text-2xl">Missie</h3>
          <p className="mb-8 text-xl font-bold text-orange-500">Spelen – Leren – Sparen</p>
          <p className="mb-6 text-xl font-semibold text-gray-900">
            TOF Sports maakt van elke jeugdspeler een echte clubspeler.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Wij brengen verenigingen tot leven door jeugdspelers echt in beweging te krijgen. Onze
            missie is om kinderen te activeren tot meer speelmomenten, hen breed te laten ontwikkelen
            en duurzaam te verbinden aan hun vereniging. Met de TOF-methode groeien jeugdleden van
            lesklant naar actieve clubspeler en ambassadeur van hun sport.
          </p>
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8">
            <h4 className="mb-2 text-xl font-bold text-gray-900">
              Klaar om jouw vereniging tot leven te brengen?
            </h4>
            <p className="mb-6 text-gray-600">Ontdek de TOF-methode en de 365-mentaliteit.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={methodeHref}
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                TOF-methode
              </Link>
              <Link
                href={scoreHref}
                className="inline-flex items-center justify-center rounded-xl border-2 border-orange-500 bg-white px-5 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                TOF Score
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                Plan een kennismaking
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissieVisieContent;
