'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PakkettenCardsGrid from '@/components/PakkettenCardsGrid';

const MagneetpostersContent = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
    >
      <div className="space-y-4 p-6 text-gray-700 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
          Waarom magneetposters voor onze formats?
        </h3>
        <p className="text-lg">
          Onze tennis- en padel-formats zijn ontworpen om optimaal te werken met magneetposters.
          Deze grootformaat posters (60x90 cm) zijn de professionele standaard voor het presenteren
          van speelse oefenformats en speelschema&apos;s.
        </p>
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
          <p>
            <strong>Belangrijk om te weten:</strong> Voor optimaal gebruik heb je een (rijdend)
            whiteboard nodig. Dit formaat is essentieel voor de beste presentatie en gebruiksgemak.
          </p>
        </div>
        <div className="border-l-4 border-teal-500 bg-teal-50 p-4">
          <h4 className="mb-3 text-lg font-bold text-gray-900">
            Waarom magneetposters de beste keuze zijn
          </h4>
          <ul className="space-y-2">
            {[
              'Snel wisselen: in één beweging op en af het whiteboard',
              'Geen beschadigingen aan je bord',
              'Duurzaam, flexibel en herbruikbaar',
              'Full colour print voor een professionele uitstraling',
              'Combineer 3–4 posters op een 120 cm breed whiteboard',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="font-bold text-teal-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
    >
      <div className="p-6 md:p-8">
        <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
          Flexibel magneetfolie (0,3 mm)
        </h3>
        <p className="mb-6 text-gray-700">
          Dun, flexibel magneetfolie met volledig magnetische achterzijde — geen harde magneetplaat,
          maar een luxe poster die direct op een whiteboard blijft plakken.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            ['Lichtgewicht & soepel', 'Blijft stabiel op het whiteboard door het lage gewicht.'],
            ['UV- en weerbestendig', 'Verkleurt niet in de volle zon bij de padelbanen.'],
            ['Magnetische kracht', 'Hecht over het hele oppervlak — hoeken krullen niet om.'],
            ['Eenvoudig op te rollen', 'Na het toernooi compact op te bergen in de bestuurskamer.'],
          ].map(([title, text]) => (
            <div key={title}>
              <h4 className="mb-2 font-bold text-gray-900">{title}</h4>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
    >
      <div className="p-6 md:p-8">
        <h3 className="mb-6 text-xl font-bold text-gray-900">Specificaties</h3>
        <div className="overflow-x-auto">
          <table className="mx-auto w-full max-w-lg border-collapse text-sm">
            <tbody>
              {[
                ['Formaat', '60 x 90 cm'],
                ['Dikte', '0,3 mm'],
                ['Bedrukking', 'Full colour (krasvast)'],
                ['Toepassing', 'Tennis- en padel-formats'],
                ['Ondergrond', 'Ijzerhoudende / metalen vlakken'],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                    {label}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
    >
      <div className="p-6 md:p-8">
        <h3 className="mb-6 text-xl font-bold text-gray-900">
          Magneetposter + verrijdbaar whiteboard
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            ['Mobiel gemak', 'Verplaats het speelschema van de bestuurskamer naar de baan.'],
            ['Flexibel wisselen', 'Geen punaises of plakband dat loslaat in de wind.'],
            ['Interactief', 'Maak extra aantekeningen met een whiteboardmarker.'],
            ['Professionele uitstraling', 'Een strak 60x90 cm overzicht op de club.'],
          ].map(([title, text]) => (
            <div key={title}>
              <h4 className="mb-2 font-bold text-gray-900">{title}</h4>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    <PakkettenCardsGrid
      title="Klaar voor de volgende stap?"
      description="Ontdek welk clubpakket past bij jouw tennis- of padelvereniging."
      showPackageDetails={false}
      className="!mt-4"
    />
  </div>
);

export default MagneetpostersContent;
