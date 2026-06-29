'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TofMethodeContent = ({ useAnchors = false }) => {
  const scoreHref = useAnchors ? '#tof-score' : '/tof-score';

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            De TOF-methode: van lesklant naar actieve clubspeler
          </h3>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            Bij TOF Sports geloven we dat jeugdspelers pas echt groeien wanneer tennis en padel méér
            zijn dan een wekelijkse training. Met de TOF-methode helpen wij verenigingen om
            jeugdspelers te activeren, te ontwikkelen en duurzaam te verbinden aan het clubleven.
          </p>
          <div className="rounded-xl border-l-4 border-orange-500 bg-gray-50 p-6">
            <p className="text-lg leading-relaxed text-gray-700">
              De TOF-methode is gebouwd op één duidelijke overtuiging: een sterke jeugdafdeling
              ontstaat wanneer kinderen zich 365 dagen per jaar welkom en betrokken voelen op de
              club.
            </p>
          </div>
        </div>
      </motion.div>

      <div>
        <h3 className="mb-8 text-xl font-bold text-gray-900 md:text-2xl">
          De drie pijlers van de TOF-methode
        </h3>
        <div className="space-y-6">
          {[
            {
              n: 1,
              title: 'Spelen: De basis van een actieve club',
              intro:
                'Spelen is de motor van plezier en ontwikkeling. Binnen de TOF-methode creëren we laagdrempelige speelmomenten op de eigen vereniging.',
              items: [
                'Veilig en vertrouwd spelen op de eigen vereniging',
                'Teamgevoel en vriendschappen staan centraal',
                'Geen prestatiedruk, wel uitdaging en plezier',
                'Geschikt voor alle niveaus',
              ],
              footer:
                'Door het spelen terug te brengen groeit de vereniging uit tot een plek waar kinderen graag zijn: ook buiten de training om.',
            },
            {
              n: 2,
              title: 'Leren: Ontwikkelen door te doen',
              items: [
                'Regels direct toepassen op de baan',
                'Fairplay direct toepassen op en naast de baan',
                'Mentaal weerbaarder op en naast de baan',
                'Meer zelfvertrouwen en zelfstandigheid',
                'Meer interactie tussen speler(s), leraar en vereniging',
              ],
            },
            {
              n: 3,
              title: 'Sparen: Samen bouwen aan clubgevoel',
              intro:
                'Binnen gamification betekent sparen dat kinderen (samen) punten en beloningen verzamelen door actief mee te doen en inzet te tonen.',
              items: [
                'Maakt deelname leuker',
                'Versterkt onderlinge verbinding',
                'Jeugdleden voelen zich meer betrokken',
                'Draagt bij aan een levendige jeugdcultuur op de vereniging',
              ],
            },
          ].map((pillar) => (
            <div
              key={pillar.n}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
            >
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    {pillar.n}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 md:text-xl">{pillar.title}</h4>
                </div>
                {pillar.intro && (
                  <p className="mb-4 leading-relaxed text-gray-600">{pillar.intro}</p>
                )}
                <ul className="mb-4 space-y-2 text-gray-700">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-orange-500">•</span> {item}
                    </li>
                  ))}
                </ul>
                {pillar.footer && (
                  <p className="italic leading-relaxed text-gray-600">{pillar.footer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
      >
        <div className="p-6 md:p-10">
          <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">De 365-mentaliteit</h3>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Bij TOF Sports stopt het niet na een lesuur per week. Wij werken vanuit de
            365-mentaliteit: jeugdspelers voelen zich het hele jaar door onderdeel van de
            vereniging. Vrij spelen, onderlinge challenges, clubactiviteiten en speelmomenten maken
            sport tot een doorlopende clubervaring.
          </p>
          <Link
            href={scoreHref}
            className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-md transition-colors hover:bg-orange-600"
          >
            <ArrowRight className="h-5 w-5 shrink-0" />
            Ontdek hoe de TOF Score deze betrokkenheid meetbaar maakt
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default TofMethodeContent;
