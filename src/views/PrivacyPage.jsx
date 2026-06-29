'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero, { PageHeroTitle } from '@/components/PageHero';
import { getPageHeroImage } from '@/data/heroSlides';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageHero image={getPageHeroImage('/privacy')} minHeight="40vh">
        {(heroInView) => (
          <PageHeroTitle heroInView={heroInView} className="text-4xl md:text-6xl">
            Privacy Verklaring
          </PageHeroTitle>
        )}
      </PageHero>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10"
        >
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Om door TOF Sports diensten aan bezoekers beschikbaar te kunnen stellen, is het noodzakelijk dat wij in een aantal gevallen persoonsgegevens verwerken. TOF Sports respecteert de privacy van haar deelnemers en/of bezoekers en zorgt dat alle persoonsgegevens vertrouwelijk worden behandeld. In deze privacy verklaring wordt uitgelegd welke gegevens worden verwerkt, wat er met de gegevens wordt gedaan en welke rechten u heeft.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wij verwerken gegevens indien u:</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Een bestelformulier invult</h3>
                <p className="text-gray-600">
                  De gegevens die wij nodig hebben voor de verwerking van uw bestelling zullen wij niet langer dan noodzakelijk is voor de verwerking van de hierboven omschreven doeleinden bewaren.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contact met ons opneemt (via een contactformulier)</h3>
                <p className="text-gray-600">
                  Het gaat dan om de gegevens waarover u contact met ons opneemt en die u zelf heeft doorgegeven voor het opnemen van contact. Het kan gaan om uw email adres en/of telefoonnummer in combinatie met uw voor- en achternaam.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">U aanmeldt voor nieuwsbrieven</h3>
                <p className="text-gray-600">
                  Het gaat dan om de gegevens die u zelf hebt doorgegeven voor het ontvangen van bijvoorbeeld een nieuwsbrief, waaronder in ieder geval uw naam en email adres.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Doel van de verwerking</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Het optimaal kunnen bedienen van de deelnemers binnen onze organisatie en het verbeteren van onze dienstverlening;</li>
              <li>Het organiseren van informatie bijeenkomsten;</li>
              <li>Het verstrekken van door u gevraagde informatie;</li>
              <li>Het aanbieden van producten en diensten van TOF Sports of andere partijen waar TOF Sports mee samenwerkt.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Verstrekking aan derden</h2>
            <p className="text-gray-600">
              De door ons verzamelde gegevens zijn nodig in het kader van de hierboven beschreven doeleinden. Indien verstrekking van de gegevens aan derden nodig is voor het uitvoeren van de hiervoor genoemde doeleinden, stellen wij uw gegevens aan deze derden ter beschikking onder door TOF Sports opgestelde voorwaarden en in lijn met de daarvoor geldende wettelijke eisen en richtlijnen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Bewaartermijn</h2>
            <p className="text-gray-600">
              De persoonsgegevens worden alleen voor de hierboven gestelde doelen verwerkt. TOF Sports bewaart uw persoonsgegevens niet langer dan noodzakelijk is voor de verwerking van de hierboven omschreven doeleinden, tenzij deze gegevens noodzakelijk zijn ter voldoening aan een wettelijke plicht.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Beveiliging</h2>
            <p className="text-gray-600">
              Wij gaan uiterst zorgvuldig om met de verwerking van uw gegevens. TOF Sports treft voortdurend passende maatregelen om uw gegevens te beveiligen tegen verlies, ongeoorloofd gebruik of de wijziging ervan. Deze maatregelen zijn in lijn met de daarvoor geldende wettelijke eisen en richtlijnen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Uw rechten</h2>
            <p className="text-gray-600">
              Als u vragen en/of opmerkingen heeft met betrekking tot de verwerking van uw persoonsgegevens kunt u contact opnemen door een email te sturen aan{' '}
              <a href="mailto:info@tofsports.nl" className="text-orange-500 hover:text-orange-600 font-medium">
                info@tofsports.nl
              </a>
              . Gebruik dit email adres ook voor het afmelden voor het ontvangen van informatie.
            </p>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © TOF Sports 2018-{new Date().getFullYear()}. Alle auteursrechten voorbehouden. ® TOF Sports™
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
