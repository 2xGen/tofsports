'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const MagneetpostersPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))',
          }}
        />

        <div className="container mx-auto px-4 relative z-30 py-16">
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-5xl md:text-7xl font-bold text-gray-800 relative z-30"
            >
              Magneetposters
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 relative z-30 max-w-2xl mx-auto"
            >
              Waarom magneetposters de beste keuze zijn voor onze tennis- en padel-formats
            </motion.p>
          </div>
        </div>

        {/* Curved Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom magneetposters voor onze formats?
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Onze tennis- en padel-formats zijn ontworpen om optimaal te werken met magneetposters. Deze grootformaat posters (60x90 cm) zijn de professionele standaard voor het presenteren van speelschema's. In plaats van plakband of punaises, plakken onze formats direct op elk metalen oppervlak, zoals een (rijdend) whiteboard.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="text-gray-700">
                    <strong>Belangrijk om te weten:</strong> Onze formats zijn gedrukt op magneetposters van 60x90 cm. Voor optimaal gebruik heb je een (rijdend) whiteboard nodig. Dit formaat is essentieel voor de beste presentatie en gebruiksgemak.
                  </p>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Waarom magneetposters de beste keuze zijn:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span><strong>Snel wisselen:</strong> In één beweging "zo erop, zo eraf". Ideaal voor wisselende speelschema's en toernooien. Perfect voor onze verschillende format-typen.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span><strong>Geen beschadigingen:</strong> Geen lijmresten of gaatjes in je whiteboard; de magnetische achterzijde blijft altijd netjes en beschadigt je bord niet.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span><strong>Duurzaam & Flexibel:</strong> Onze formats op magneetposter zijn gemaakt van hoogwaardig materiaal dat je eenvoudig kunt oprollen, opbergen en keer op keer hergebruiken.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span><strong>Strakke uitstraling:</strong> Onze formats worden in haarscherpe full colour geprint op de magneetposter voor een professionele uitstraling op de club.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span><strong>Perfecte match:</strong> Combineer 3 tot 4 van onze format-posters op een 120 cm breed whiteboard voor het ultieme mobiele wedstrijdsecretariaat.</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Onze tennis- en padel-formats zijn specifiek ontworpen voor gebruik met magneetposters. Het materiaal is essentieel omdat de formats intensief gebruikt worden en vaak verplaatst moeten worden tussen verschillende locaties op de club.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Material Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Het Materiaal van Onze Formats: Flexibel Magneetfolie (0,3 mm)
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Onze tennis- en padel-formats worden gedrukt op magneetposters gemaakt van dun, flexibel magneetfolie (0,3 mm dikte). De achterzijde is volledig magnetisch, waardoor de formats direct op een whiteboard blijven plakken. Dit is niet te vergelijken met een harde magneetplaat; het voelt meer aan als een dikke, luxe poster met "magische" krachten.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Lichtgewicht & Soepel</h3>
                    <p>
                      Dankzij de dikte van slechts 0,3 mm is de poster zeer licht. Dit is een groot voordeel voor het 60x90 cm formaat, omdat de poster door zijn eigen gewicht niet naar beneden glijdt op een whiteboard.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">UV- en Weerbestendig</h3>
                    <p>
                      De posters worden bedrukt met UV-inkten. Hierdoor verkleuren je formats niet als het whiteboard buiten in de volle zon staat bij de padelbanen.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Magnetische Kracht</h3>
                    <p>
                      Speciaal ontwikkeld voor vlakke, ijzerhoudende ondergronden (zoals whiteboards, metalen deuren of memoborden). Het hecht over het hele oppervlak, waardoor de hoeken niet omkrullen.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Eenvoudig op te rollen</h3>
                    <p>
                      Na het toernooi rol je de posters simpelweg op (met de bedrukte zijde naar buiten). Zo nemen ze nauwelijks ruimte in beslag in de bestuurskamer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Specifications Table */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Specificaties</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Eigenschap</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Product</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Magneetposter (Flexibel Magneetfolie)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Formaat</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">60 x 90 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Dikte</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">0,3 mm (lichtgewicht, ideaal voor whiteboards)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Gewicht</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Ca. 1000 gr/m² (Licht maar stabiel)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Bedrukking</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Full colour (krasvast)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Toepassing</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Tennis- en Padel-formats</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Ondergrond</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Alle ijzerhoudende/metalen vlakken</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Temperatuur</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Bestand tegen hitte en kou (geschikt voor buiten)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">Voordeel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Snel verwisselbaar, herbruikbaar en UV-bestendig</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Whiteboard Combination Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Onze Formats & Een Mobiel Whiteboard: De Perfecte Combinatie
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Onze tennis- en padel-formats zijn gedrukt op magneetposters van 60x90 cm en werken het beste in combinatie met een (rijdend) whiteboard. Deze combinatie maakt je toernooi-organisatie en training professioneler en makkelijker dan ooit.
                </p>

                {/* Whiteboard Image */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 my-8">
                  <Image
                    src="https://toftennis.nl/wp-content/uploads/2023/03/Standaard-bord-2023.png"
                    alt="Standaard whiteboard voor magneetposters"
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    quality={85}
                    unoptimized={true}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Mobiel gemak</h3>
                    <p>
                      Combineer de posters met een rijdend whiteboard van 120 bij 90 cm. Zo verplaats je het speelschema moeiteloos van de bestuurskamer naar het terras of direct naar de baan.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Flexibel wisselen</h3>
                    <p>
                      Dankzij de magnetische achterzijde "plak" je het format er in één beweging op. Geen gedoe met punaises of plakband dat loslaat in de wind.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Interactief</h3>
                    <p>
                      Omdat de poster op een whiteboard hangt, kun je eromheen (of alleen op de TOF Score poster) makkelijk extra aantekeningen maken met een whiteboardmarker.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-gray-900">Professionele uitstraling</h3>
                    <p>
                      Een strak 60x90 cm overzicht dat direct indruk maakt op de spelers en bezoekers van je club.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6">
                  <p className="text-gray-700">
                    <strong>Belangrijk om te weten:</strong> Onze formats zijn gedrukt op magneetposters van 60x90 cm. Vanwege dit royale formaat is een (rijdend) whiteboard noodzakelijk voor optimaal gebruik. Zonder whiteboard kun je de formats niet optimaal gebruiken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div 
            className="rounded-2xl shadow-lg p-8 md:p-12"
            style={{
              background: 'linear-gradient(to bottom right, rgba(180, 200, 255, 0.4), rgba(197, 223, 240, 0.5), rgba(100, 180, 220, 0.3))'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Klaar om onze formats te gebruiken?
            </h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Bekijk onze tennis- en padel-formats op magneetposter in de webshop. Vergeet niet: voor optimaal gebruik heb je een (rijdend) whiteboard nodig.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg"
            >
              <Link href="/webshop">
                Bekijk in webshop
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MagneetpostersPage;

