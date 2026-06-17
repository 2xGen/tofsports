'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LerarenAppContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
  >
    <div className="space-y-6 p-6 text-gray-700 md:p-8">
      <p className="text-lg leading-relaxed">
        De Leraren App is een complete digitale assistent speciaal ontwikkeld voor tennis- en
        padelcoaches. Met deze app heb je alle tools binnen handbereik om je trainingen te
        verbeteren en de voortgang van je spelers bij te houden.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: 'Lesplannen',
            text: 'Toegang tot een uitgebreide bibliotheek met lesplannen die perfect aansluiten bij het KNLTB jeugdprogramma.',
          },
          {
            title: 'Oefeningen',
            text: "Honderden oefeningen met duidelijke instructies en video's om je trainingen gevarieerd en effectief te maken.",
          },
          {
            title: 'Voortgangsregistratie',
            text: 'Houd de ontwikkeling van elke speler bij en volg hun voortgang door de verschillende niveaus.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-gray-50 p-6">
            <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default LerarenAppContent;
