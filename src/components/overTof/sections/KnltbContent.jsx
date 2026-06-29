'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const KnltbContent = () => {
  const [category, setCategory] = useState('tennis');

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          onClick={() => setCategory('tennis')}
          size="lg"
          className={`min-w-[120px] font-bold ${
            category === 'tennis'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Tennis
        </Button>
        <Button
          type="button"
          onClick={() => setCategory('padel')}
          size="lg"
          className={`min-w-[120px] font-bold ${
            category === 'padel'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Padel
        </Button>
      </div>

      {category === 'tennis' && (
        <motion.div
          key="tennis"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
        >
          <div className="space-y-6 p-6 text-gray-700 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Wat is Tenniskids TOF?</h3>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">Elk kind centraal</h4>
              <p className="text-lg leading-relaxed">
                Tenniskids TOF is onderdeel van het KNLTB Tenniskids programma. TOF staat voor
                Training Ontwikkeling Fases en biedt structuur en ondersteuning bij de ontwikkeling
                van jeugdtennissers. Binnen Tenniskids TOF staat de jeugdspeler centraal. Spelers
                krijgen de ruimte om zich op hun eigen manier en in hun eigen tempo te ontwikkelen.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">Spelerskaart</h4>
              <p className="text-lg leading-relaxed">
                Elke jeugdspeler ontvangt een Tenniskids TOF spelerskaart, afgestemd op de
                Tenniskids-kleur waarin de speler actief is. De spelerskaart geeft inzicht in de
                ontwikkeling en wordt meegenomen naar trainingen en wedstrijden.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">Van level naar level</h4>
              <p className="mb-4 text-lg leading-relaxed">
                Op de voorkant van de spelerskaart staan bolletjes die inzicht geven in vragen zoals
                wanneer een speler klaar is voor competitie, doorstroom binnen een kleur of de
                volgende Tenniskids-kleur.
              </p>
              <p className="text-lg leading-relaxed">
                Op de achterkant kan een bolletje worden ingekleurd voor elke keer dat de speler op
                de baan staat — lessen, wedstrijden, vrij spel of clubactiviteiten.
              </p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">Sparen en beloning</h4>
              <p className="text-lg leading-relaxed">
                Wanneer de spelerskaart volledig is ingevuld, ontvangt de jeugdspeler een beloning
                vanuit de leraar of vereniging. Zo stimuleert Tenniskids TOF actieve deelname en
                blijvende betrokkenheid.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {category === 'padel' && (
        <motion.div
          key="padel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
        >
          <div className="space-y-6 p-6 text-gray-700 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Wat is TOF padel?</h3>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">Elk kind centraal</h4>
              <p className="text-lg leading-relaxed">
                TOF padel staat voor Training Ontwikkeling Fases padel en vormt de basis van het
                KNLTB padel jeugdprogramma. Binnen TOF padel staat de jeugdspeler centraal — spelers
                ontwikkelen zich in hun eigen tempo, wat motivatie en spelplezier vergroot.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 text-xl font-bold text-gray-900">Spelerskaart</h4>
              <p className="text-lg leading-relaxed">
                De jeugdspeler krijgt inzicht via een persoonlijke spelerskaart aan de tas. Drie
                kaarten, afgestemd op ontwikkelingsniveau. Op de achterkant kleuren spelers vakjes
                in na elke les, vrij spel, clubevent of wedstrijddag.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">Ontwikkelingsmatrix</h4>
              <p className="text-lg leading-relaxed">
                De ontwikkeling wordt uitgedrukt in competenties onderverdeeld in fases en levels —
                technisch, tactisch, mentaal en sociaal — uitgewerkt in het TOF padel handboek.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-8">
          <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">De Leraren App</h3>
          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            Een complete digitale assistent speciaal ontwikkeld voor tennis- en padelleraren. Met
            deze app heb je alle tools binnen handbereik om je trainingen te verbeteren en de
            voortgang van je spelers bij te houden.
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
                <h4 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h4>
                <p className="leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8"
      >
        <h3 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          TOF - Powered by KNLTB
        </h3>
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
          <iframe
            title="TOF - Powered by KNLTB"
            src="https://player.vimeo.com/video/792932911?h=ad7b439e93"
            width="640"
            height="360"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default KnltbContent;
