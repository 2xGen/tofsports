// Shared products data for all webshop pages

const WEBSHOP_MEDIA =
  'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/tof%20webshop';

export const POSTER_WIZARD_PRICING = {
  type: 'poster-wizard',
  posterPrice: 95,
  tiers: [
    { id: 'tier-21', label: 'Tot en met 21 spelers', buttonAddon: 30 },
    { id: 'tier-36', label: 'Tot en met 36 spelers', buttonAddon: 40 },
    { id: 'tier-55', label: 'Tot en met 55 spelers', buttonAddon: 60 },
  ],
};

/** Padel Piramide — alleen 21 en 36 spelers */
export const POSTER_WIZARD_PRICING_36 = {
  type: 'poster-wizard',
  posterPrice: 95,
  tiers: [
    { id: 'tier-21', label: 'Tot en met 21 spelers', buttonAddon: 30 },
    { id: 'tier-36', label: 'Tot en met 36 spelers', buttonAddon: 40 },
  ],
};

export const POSTER_BUTTONS_30_PRICING = {
  type: 'poster-buttons-optional',
  posterPrice: 95,
  buttonAddon: 30,
  buttonLabel: '30 magneetbuttons (3 dozen à 10)',
  subtitle: 'Kies of je magneetbuttons wilt bijbestellen (min. 30 stuks)',
};

export const allProducts = [
  {
    id: 'piramide',
    name: 'PIRAMIDE TENNIS',
    category: 'tennis',
    ageGroup: 'Tenniskids Rood | Tenniskids Oranje',
    videoUrl: 'https://www.youtube.com/watch?v=wtJjEy9Js0g',
    description: 'Het competitieve klassementsformat waarin spelers elkaar uitdagen en zo hoog mogelijk in de piramide proberen te klimmen. Laagdrempelig en doorlopend: spelers organiseren hun wedstrijden zelf, zonder extra organisatie voor de trainer.',
    highlights: [
      'Spelers dagen elkaar uit en spelen doorlopend wedstrijden op de club',
      'Draai de button om tijdens een wedstrijd, zo zie je direct wie beschikbaar is',
      'Geschikt voor jeugd én volwassenen, in enkel- én dubbelspel',
      'Resultaten koppelbaar aan TOF Score en de TOF app',
    ],
    descriptionLong: `Spelers proberen zo hoog mogelijk op de piramide te komen door onderlinge wedstrijden te spelen. Wanneer een wedstrijd start, wordt dit zichtbaar gemaakt door de button om te draaien. Na afloop wisselen spelers van positie afhankelijk van de uitslag, waarna de button weer teruggaat om aan te geven dat iemand opnieuw beschikbaar is voor een nieuwe uitdaging.

Zo ontstaat een continu en laagdrempelig systeem waarin spelers zelf wedstrijden organiseren en de club levendiger wordt, zonder extra druk of organisatie voor trainers. Gespeelde wedstrijden en resultaten kunnen worden bijgehouden en gekoppeld aan TOF Score en de TOF app.`,
    detailedRules: `PIRAMIDE TENNIS
Officiële Spelregels & Handleiding

INTRODUCTIE
PIRAMIDE TENNIS is een dynamisch tennisformat waarbij spelers strijden om de top van de piramide. Daag je teamgenoten uit, klim naar de top of word de koning van de actie! In dit format draait het om winnen, stijgen en zoveel mogelijk spelen.

Het doel: Stijg in de piramide door wedstrijden te winnen en word uiteindelijk de nummer 1, of win door de meeste actie te creëren!

Dit format is perfect voor:
• Tennisverenigingen en tennisscholen
• Jeugdtrainingen en clinics
• Toernooien en events
• Groepen van 8 tot 55+ spelers

BENODIGDE MATERIALEN
• Magneetbord: 60cm x 90cm magnetische poster op whiteboard (rijdbaar op de tennisbaan)
• Magneetbuttons: witte buttons voor elke speler
• Watervaste stift: Voor het schrijven van namen
• Stiftremover: Voor het schoonmaken van de buttons
• Tennisbanen: Minimaal 1 baan, ideaal 2-4 banen voor grotere groepen
• Tennismateriaal: Rackets, ballen (aangepast aan niveau/leeftijd)

BASISOPZET
Spelers
• 8 tot 55+ spelers (afhankelijk van het gekozen formaat)
• Individuele competitie: elke speler speelt voor zichzelf
• Flexibel aan te passen aan aantal beschikbare banen en spelers

Speelveld
• Singles: hele baan
• Bij grote groepen: halve baan met tramrails
• Spelbord staat zichtbaar naast de banen

HOE WERKT HET?
Het spelprincipe is eenvoudig maar strategisch:

1. Uitdagen
• Daag de speler naast je of boven je uit om hun plek in de piramide over te nemen
• Je kunt alleen uitdagen als je naast of direct onder iemand staat
• Elke uitdaging resulteert in een korte wedstrijd

2. Klimmen
• Win je wedstrijd en stijg direct in de ranglijst
• Je neemt de positie over van de speler die je hebt uitgedaagd
• De verliezer daalt één of meerdere posities

3. Actie
• Word je uitgedaagd? Verdedig dan direct je positie op de baan
• Elke gespeelde wedstrijd telt mee voor je TOF Score
• Hoe meer je speelt, hoe hoger je TOF Score status

3 MANIEREN OM TE WINNEN
PIRAMIDE TENNIS biedt drie verschillende manieren om te winnen, waardoor het spel voor iedereen interessant blijft:

1. De Top
Wie staat er aan het einde van de sessie op de hoogste trede?
• De speler die op positie 1 eindigt, wint deze categorie
• Perfect voor strategische spelers die slim uitdagen
• Focus op het bereiken en behouden van de top

2. De Klimmer
Wie heeft de meeste plekken winst geboekt en de grootste opmars gemaakt?
• Tel hoeveel posities elke speler is gestegen
• De speler met de grootste stijging wint
• Perfect voor spelers die graag vooruitgang boeken

3. De Marathon
Wie is de meest actieve speler en heeft de meeste wedstrijden gespeeld?
• Tel het aantal gespeelde wedstrijden per speler
• De speler met de meeste wedstrijden wint
• Perfect voor energieke spelers die graag veel spelen
• Elke wedstrijd telt mee voor je TOF Score!

BASISSPELVERLOOP
Spelverloop in stappen:

1. Voorbereiding
• Verdeel alle spelers over de piramide (van boven naar beneden)
• Schrijf namen op buttons en plaats ze op het bord
• Bepaal de wedstrijdvorm (aantal punten per wedstrijd)
• Bepaal welke winnaar categorie(ën) je wilt gebruiken

2. Spelen
• Spelers kunnen elkaar uitdagen (naast of boven)
• Korte wedstrijden: eerste tot 7 punten (trainer kan dit aanpassen)
• Winnaar stijgt, verliezer daalt
• Elke gespeelde wedstrijd wordt bijgeschreven op TOF Score

3. Einde van de Sessie
• Tel de resultaten per categorie
• Bekroon de winnaars:
  - De Top: positie 1
  - De Klimmer: meeste posities gestegen
  - De Marathon: meeste wedstrijden gespeeld

VARIANTEN
Variant 1: Klassieke Piramide
• Standaard uitdagingen: alleen naast of direct boven
• Focus op strategisch spel
• Meest geschikt voor beginners

Variant 2: Vrije Uitdaging
• Spelers mogen iedereen uitdagen (binnen bepaalde regels)
• Meer actie en dynamiek
• Geschikt voor gevorderde groepen

Variant 3: Team Piramide
• Verdeel spelers in teams
• Teams strijden tegen elkaar
• Team met hoogste gemiddelde positie wint

TIPS VOOR BEGELEIDERS & TRAINERS
Groepsgrootte
• 8-21 spelers: Poster 1 (klein formaat)
• 21-36 spelers: Poster 2 (medium formaat)
• 37-55 spelers: Poster 3 (groot formaat)
• Meer dan 55 spelers: gebruik meerdere piramides of rotatie

Wedstrijdlengte
• Standaard: 7 punten
• Sneller: 5 punten (meer actie)
• Langer: 9-11 punten (meer tactiek)
• Pas aan op basis van groepsgrootte en beschikbare tijd

Niveau Aanpassen
• Beginners (rood/oranje bal): Kleinere velden, langere rally's
• Gevorderden (groene bal/geel): Volledige baan, snellere wedstrijden
• Mix niveaus: Handicap systeem (bijv. gevorderde start lager in piramide)

Motivatie & Sfeer
• Vier elke stijging in de piramide
• Moedig spelers aan om actief te zijn (Marathon categorie)
• Houd de energie hoog met korte pauzes tussen wedstrijden
• Laat spelers hun eigen strategie ontwikkelen

Praktisch
• Zorg dat het bord goed zichtbaar is voor alle spelers
• Wijs een scheidsrechter/assistent aan bij het bord
• Buttons kunnen vastlopen - houd reservebuttons bij de hand
• Update het bord regelmatig na elke wedstrijd

TOF SCORE INTEGRATIE
Elke gespeelde wedstrijd telt mee voor je TOF Score:
• Win of verlies: elke punt telt
• Hoe meer je speelt, hoe hoger je TOF Score
• Streef naar XP 100, 500 of zelfs 1000 punten
• De Marathon winnaar heeft vaak ook de hoogste TOF Score!

VEELGESTELDE VRAGEN
Q: Wat als er een oneven aantal spelers is?
A: Geen probleem! De piramide werkt met elk aantal spelers. De onderste rij kan onvolledig zijn.

Q: Kunnen spelers elkaar meerdere keren uitdagen?
A: Ja! Spelers kunnen elkaar meerdere keren uitdagen tijdens een sessie. Dit maakt het spel dynamischer.

Q: Hoe lang duurt een gemiddelde sessie?
A: 45-60 minuten voor een compleet spel. Dit hangt af van het aantal spelers en de wedstrijdlengte.

Q: Wat als een speler niet wil uitdagen?
A: Spelers kunnen ook uitgedaagd worden. Passief spelen betekent vaak dalen in de piramide.

Q: Kan dit ook indoor?
A: Ja! Perfect voor indoor tennisbanen, zeker in wintermaanden.

Q: Hoeveel spelers kunnen er maximaal meedoen?
A: Met Poster 3 kunnen tot 55 spelers meedoen. Bij grotere groepen kun je meerdere piramides gebruiken of rotatie inbouwen.

Q: Wat is de ideale leeftijd?
A: Vanaf ongeveer 6 jaar (met rode ballen) tot en met volwassenen. Pas de regels en wedstrijdlengte aan op leeftijd en niveau.

Q: Moeten alle spelers even goed kunnen tennissen?
A: Nee! Juist de mix maakt het leuk. Je kunt handicaps inbouwen of zorgen dat beginners lager starten in de piramide.

SUCCESVOL IMPLEMENTEREN
Eerste Keer
1. Begin met een kleine groep (8-12 spelers)
2. Leg de basisregels uit: uitdagen, klimmen, actie
3. Houd de eerste sessie kort en simpel
4. Focus op één winnaar categorie (bijv. De Top)

Vaste Training
• Wissel af met reguliere training
• Gebruik als warming-up of afsluiting
• Ideaal voor vrijdagmiddag/zaterdag (sociale sessies)
• Introduceer verschillende winnaar categorieën voor variatie

Toernooien & Events
• Organiseer PIRAMIDE TENNIS tournaments
• Competities tussen verenigingen
• Gezinsdagen en open dagen
• Combineer met TOF Score tracking voor extra motivatie

Feedback & Aanpassingen
Deze spelregels kunnen worden aangepast op basis van feedback en ervaringen van verenigingen. Wat werkt voor jouw groep is het beste!

CONTACT & BESTELLEN
Interesse in PIRAMIDE TENNIS voor jouw vereniging of tennisschool?

Powered by KNLTB Tennis

In de box:
• Magneetbord (60x90cm) met whiteboard
• witte magneetbuttons (aantal naar keuze)
• Watervaste stift + stiftremover voor schoonmaken
• Spelregelkaart
• Volledige spelregelsgids
• Snelstart handleiding
• Trainerstips

Veel speelplezier met PIRAMIDE TENNIS!
TOF Tennis - Tennis + Strategie + Actie = Onvergetelijk Speelplezier`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Piramide%20tennis%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/piramide%20tennis%2021.jpg`, label: 'Poster t/m 21 spelers' },
      { url: `${WEBSHOP_MEDIA}/piramide%20tennis%2036.jpg`, label: 'Poster t/m 36 spelers' },
      { url: `${WEBSHOP_MEDIA}/piramide%20tennis%2055.jpg`, label: 'Poster t/m 55 spelers' },
    ],
    pricing: POSTER_WIZARD_PRICING,
    formats: [
      {
        id: 'piramide',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/piramide%20tennis%2036.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'davis',
    name: 'DAVIS CLUP',
    category: 'tennis',
    ageGroup: 'Tenniskids Oranje | Tenniskids Groen | Jeugd Geel',
    videoUrl: 'https://www.youtube.com/watch?v=iw1PehVTvI4',
    description: 'Een teamcompetitie voor de oudere jeugd, met een knipoog naar de Davis Cup. Spelers vormen hun eigen teams op de club en strijden in onderlinge wedstrijden: persoonlijke ontwikkeling en teamspirit in één format.',
    highlights: [
      'Spelers maken hun eigen teams en spelen tegen andere teams',
      'Punten tellen zowel individueel als per team op',
      'Combineert persoonlijke ontwikkeling met teamcompetitie',
      'Ruimte om een beloning of eindscore te koppelen',
    ],
    descriptionLong: `Het Davis Clup format is een speels en competitief oefenformat voor de oudere jeugd op de tennisclub, met een knipoog naar de Davis Cup waarin landen tegen elkaar spelen. Binnen dit format maken spelers hun eigen teams op de club en spelen ze onderling wedstrijden tegen andere teams.

Resultaten worden per wedstrijd bijgehouden door een streepje achter de teamnaam te zetten met het aantal punten. De punten tellen zowel individueel als per team op. Zo ontstaat een combinatie van persoonlijke ontwikkeling en teamcompetitie, met ruimte om hieraan een beloning of eindscore te koppelen.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Davis%20clup%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/davis%20clup%20tennis%2021.jpg`, label: 'Tot en met 21 spelers' },
      { url: `${WEBSHOP_MEDIA}/davis%20club%20tennis%2036.jpg`, label: 'Tot en met 36 spelers' },
      { url: `${WEBSHOP_MEDIA}/davis%20clup%20tennis%2055.jpg`, label: 'Tot en met 55 spelers' },
    ],
    pricing: POSTER_WIZARD_PRICING,
    formats: [
      {
        id: 'davis',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/davis%20club%20tennis%2036.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: '4opeenrij',
    name: 'VIER OP EEN RIJ',
    category: 'tennis',
    ageGroup: 'Alle leeftijden',
    videoUrl: 'https://www.youtube.com/watch?v=gAYHvXSPl5o',
    description: 'Een speels en competitief format rond korte wedstrijden en snelle uitdagingen. Win je duel en zet een stap in het spelbord: wie als eerste vier op een rij heeft, wint. Eenvoudig te begrijpen en breed inzetbaar.',
    highlights: [
      'Korte wedstrijden en opdrachten houden iedereen actief',
      'Na elke overwinning een button plaatsen richting vier op een rij',
      'Breed inzetbaar voor verschillende leeftijden en niveaus',
      'Individuele prestaties koppelbaar aan TOF Score en de TOF app',
    ],
    descriptionLong: `Spelers nemen het tegen elkaar op in korte wedstrijden of opdrachten. Na elke overwinning mag een speler of team een stap zetten in het spelbord, met als doel om als eerste vier op een rij te behalen of binnen een bepaalde tijd zoveel mogelijk combinaties te maken. Het format is eenvoudig te begrijpen en daardoor breed inzetbaar voor verschillende leeftijden en niveaus binnen de tennisjeugd.

Naast het teamdoel kan ook op individueel niveau worden bijgehouden hoeveel overwinningen en activiteiten spelers behalen. Deze resultaten kunnen worden gekoppeld aan TOF Score en verwerkt worden in de TOF app. Zo ontstaat een dynamische spelvorm waarin spelers continu worden uitgedaagd om actief te spelen, te winnen en betrokken te blijven op de club.`,
    detailedRules: `VIER OP EEN RIJ TENNIS
Officiële Spelregels & Handleiding

INTRODUCTIE
VIER OP EEN RIJ Tennis is een dynamisch tennisformat dat het klassieke bordspel "Vier op een rij" combineert met tennis. Door korte, intense wedstrijden te spelen verdienen teams het recht om buttons op een spelbord te plaatsen.

Het doel: Het eerste team dat vier buttons op een rij krijgt (horizontaal, verticaal of diagonaal), wint het spel!

Dit format is perfect voor:
• Tennisverenigingen en tennisscholen
• Jeugdtrainingen en clinics
• Toernooien en events
• Groepen van 8 tot 24+ spelers

BENODIGDE MATERIALEN
• Magneetbord: 60cm x 90cm magnetische poster op whiteboard (rijdbaar op de tennisbaan)
• Magneetbuttons: Twee sets in verschillende kleuren (bijv. rood en blauw)
• Tennisbanen: Minimaal 1 baan, ideaal 2-4 banen voor grotere groepen
• Tennismateriaal: Rackets, ballen (aangepast aan niveau/leeftijd)

BASISOPZET
Teams
• 2 teams (Team Rood en Team Blauw)
• Per team: 4 tot 12 spelers
• Flexibel aan te passen aan aantal beschikbare banen en spelers

Speelveld
• Singles: hele baan
• Bij grote groepen: halve baan met tramrails
• Spelbord staat zichtbaar naast de banen

BASISSPELVERLOOP
Spelverloop in 5 stappen:

1. Voorbereiding
• Verdeel spelers in twee gelijke teams
• Wijs elke team een kleur toe (rood of blauw)
• Bepaal de wedstrijdvorm (aantal punten per wedstrijd)

2. Wedstrijden Spelen
• Teams spelen korte wedstrijden tegen elkaar
• Standaard: Eerste tot 7 punten (trainer kan dit aanpassen)
• Belangrijk: Korte wedstrijden houden het spel dynamisch!

3. Button Plaatsen
• Het team dat de wedstrijd wint, mag als eerste een button plaatsen
• Het verliezende team mag daarna ook een button plaatsen
• Beide teams hebben nu een button op het bord

4. Volgende Ronde
• Direct daarna: nieuwe uitdaging/wedstrijd
• Dit herhaalt zich tot er een winnaar is

5. Winnen
• Het eerste team met vier buttons op een rij (horizontaal, verticaal of diagonaal) wint het spel!

VARIANT 1: KLASSIEK VIER-OP-EEN-RIJ
Spelprincipe: Zoals het originele bordspel - zwaartekracht!

Regels
• Buttons worden van onderen naar boven geplaatst
• Je kunt alleen een button plaatsen als er al een button onder zit (of in de onderste rij)
• Je mag niet "zweven" - elk vakje moet ondersteund worden

Spelverloop
1. Win een wedstrijd
2. Kies een kolom
3. Plaats je button in het laagste beschikbare vakje van die kolom
4. Eerste team met 4 op een rij wint!

Strategisch Element
• Blokkeer de tegenstander door slim te plaatsen
• Denk vooruit: welke kolom geeft jou of je tegenstander een voordeel?

Beste voor:
• Beginners die het spel leren kennen
• Snelle spelletjes (meestal 8-12 wedstrijden)
• Klassieke vier-op-een-rij liefhebbers

VARIANT 2: VRIJE KEUZE
Spelprincipe: Tactische vrijheid - plaats overal!

Regels
• Je mag je button in elk willekeurig leeg vakje plaatsen
• Niet gebonden aan onderste rij of zwaartekracht
• Spel duurt door tot het bord vol is of tijdslimiet bereikt is

Winnaar
Het team met de meeste vier-op-een-rijen aan het einde wint!

Spelverloop
1. Win een wedstrijd
2. Plaats je button op elke gewenste positie
3. Spel eindigt wanneer:
   • Bord vol is, OF
   • Afgesproken tijd/aantal wedstrijden voorbij is
4. Tel alle vier-op-een-rijen per team
5. Team met meeste vier-op-een-rijen wint!

Strategisch Element
• Probeer meerdere vier-op-een-rijen tegelijk op te bouwen
• Blokkeer strategische posities van de tegenstander
• Denk in meerdere richtingen: horizontaal, verticaal, diagonaal

Beste voor:
• Gevorderde spelers
• Langere spelsessies
• Meer tactische diepgang

VARIANT 3: SPRINT NAAR HET BORD
Spelprincipe: Combinatie van tennis, conditie én tactiek!

Voorbereiding
• Speel eerst alle wedstrijden
• Gewonnen buttons worden apart gelegd (niet op bord!)
• Tel aan het einde hoeveel buttons elk team heeft verzameld

Het Sprintspel
1. Vorm twee rijen: Team Rood en Team Blauw
2. Rijen staan 15 meter van het bord
3. Beide teams hebben hun verzamelde buttons bij zich

Spelverloop
1. Op startsignaal: Eerste speler van elk team rent naar het bord
2. Wie het eerst aankomt mag als eerste een button plaatsen
3. Daarna mag de andere speler ook plaatsen
4. Beide spelers rennen terug naar hun team
5. Volgende spelers in de rij starten meteen
6. Dit herhaalt zich tot alle buttons geplaatst zijn

Regels bij het Plaatsen
• Klassieke vier-op-een-rij regel: Van onderen naar boven!
• Snelheid én tactiek zijn belangrijk
• Haast kan fouten veroorzaken!

Winnaar
Eerste team met 4 op een rij wint!

Spanning!
Het team dat met tennis de meeste buttons verzamelde, kan alsnog verliezen door:
• Trager rennen
• Slechter plaatsen onder tijdsdruk
• Tactische fouten

Beste voor:
• Energieke groepen
• Extra fysieke uitdaging
• Spannende finale
• Alle leeftijden (pauzeer indien nodig)

VARIANT 4: BLOKKEREN (GEVORDERD)
Spelprincipe: Aanvallen én verdedigen!

Extra Regel
Als je een wedstrijd wint, mag je kiezen:

OPTIE A: Aanvallen
• Plaats een eigen button op het bord

OF

OPTIE B: Verdedigen
• Verplaats een button van de tegenstander naar een ander vakje
• OF: Verwijder een button van de tegenstander helemaal

Strategisch Element
• Wanneer ga je blokkeren en wanneer opbouwen?
• Breek de vier-op-een-rij van de tegenstander op kritieke momenten
• Let op: te veel verdedigen = zelf geen vier-op-een-rij opbouwen!

Spelverloop
1. Win een wedstrijd
2. Overleg met je team: aanvallen of verdedigen?
3. Voer je actie uit
4. Eerste team met 4 op een rij wint (of meeste vier-op-een-rijen bij variant 2)

Tips voor Begeleiders
• Introduceer dit PAS nadat teams meerdere keren het basisspel hebben gespeeld
• Spelers moeten eerst het basisspel onder de knie hebben
• Geschikt voor spelers vanaf ca. 10 jaar

Beste voor:
• Ervaren groepen
• Tactisch sterke spelers
• Extra uitdaging na basisvarianten

TIPS VOOR BEGELEIDERS & TRAINERS
Groepsgrootte
• 4 banen beschikbaar: 8 spelers actief (singles)
• 2 banen: Roteer spelers of speel dubbelspel
• 1 baan: Kleinere teams of rotatie

Wedstrijdlengte
• Standaard: 7 punten
• Sneller: 5 punten
• Langer: 9-11 punten
• Pas aan op basis van groepsgrootte en beschikbare tijd

Niveau Aanpassen
• Beginners (rood/oranje bal): Kleinere velden, langere rally's
• Gevorderden (groene bal/geel): Volledige baan, snellere wedstrijden
• Mix niveaus: Handicap systeem (bijv. gevorderde start op 0-2)

Motivatie & Sfeer
• Moedig teamwork en tactisch overleg aan
• Vier elke gewonnen button als team
• Laat teams namen kiezen voor extra betrokkenheid
• Houd de energie hoog met korte pauzes tussen wedstrijden

Praktisch
• Zorg dat het bord goed zichtbaar is voor alle spelers
• Wijs een scheidsrechter/assistent aan bij het bord
• Buttons kunnen vastlopen - houd reservebuttons bij de hand
• Bescherm het bord bij slecht weer

Variatie
• Wissel tussen varianten om het interessant te houden
• Start met Variant 1 voor nieuwe groepen
• Bouw op naar complexere varianten

VEELGESTELDE VRAGEN
Q: Wat als er een oneven aantal spelers is?
A: Laat één speler per team twee keer spelen, of introduceer een "joker" die voor beide teams kan spelen.

Q: Kunnen we ook dubbelspel spelen?
A: Absoluut! Bij grote groepen of om variatie te creëren zijn dubbels perfect.

Q: Hoe lang duurt een gemiddelde sessie?
A: 45-60 minuten voor een compleet spel met Variant 1 of 2. Variant 3 is wat langer door de verzamelfase.

Q: Wat als het bord vol is en niemand heeft 4 op een rij?
A: Bij Variant 1: meestal niet mogelijk. Bij Variant 2: tel de meeste vier-op-een-rijen. Gelijkspel? Sudden death wedstrijd!

Q: Kan dit ook indoor?
A: Ja! Perfect voor indoor tennisbanen, zeker in wintermaanden.

Q: Hoeveel spelers kunnen er maximaal meedoen?
A: Met 4 banen kunnen 8 spelers tegelijk actief zijn. Bij grotere groepen kun je rotatie inbouwen of dubbels spelen. In de praktijk werkt het goed met 8-24 spelers.

Q: Wat is de ideale leeftijd?
A: Vanaf ongeveer 6 jaar (met rode ballen) tot en met volwassenen. Pas de regels en wedstrijdlengte aan op leeftijd en niveau.

Q: Moeten alle spelers even goed kunnen tennissen?
A: Nee! Juist de mix maakt het leuk. Je kunt handicaps inbouwen of zorgen dat elk team een mix van niveaus heeft.

SUCCESVOL IMPLEMENTEREN
Eerste Keer
1. Begin met Variant 1 (klassiek)
2. Speel een proefrondje om regels uit te leggen
3. Houd de eerste sessie kort en simpel

Vaste Training
• Wissel af met reguliere training
• Gebruik als warming-up of afsluiting
• Ideaal voor vrijdagmiddag/zaterdag (sociale sessies)

Toernooien & Events
• Organiseer VIER OP EEN RIJ tournaments
• Team competities tussen verenigingen
• Gezinsdagen en open dagen

Feedback & Aanpassingen
Deze spelregels kunnen worden aangepast op basis van feedback en ervaringen van verenigingen. Wat werkt voor jouw groep is het beste!

CONTACT & BESTELLEN
Interesse in VIER OP EEN RIJ Tennis voor jouw vereniging of tennisschool?

Powered by KNLTB Tennis

In de box:
• Magneetbord (60x90cm) met whiteboard
• 2 sets magneetbuttons (rood & blauw)
• Volledige spelregelsgids
• Snelstart handleiding
• Trainerstips

Veel speelplezier met VIER OP EEN RIJ Tennis!
TOF Tennis - Tennis + Strategie = Onvergetelijk Speelplezier`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Vier%20op%20een%20rij%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/vier%20op%20een%20rij.jpg`, label: 'Magneetposter' },
    ],
    pricing: {
      type: 'fixed-bundle',
      price: 145,
      label: 'Poster + gekleurde buttons',
    },
    formats: [
      {
        id: '4opeenrij',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/vier%20op%20een%20rij.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'kraak-de-code',
    name: 'KRAAK DE CODE',
    category: 'tennis',
    ageGroup: 'Alle leeftijden',
    videoUrl: 'https://www.youtube.com/watch?v=REM_Lal8Wco',
    description: 'Een spannend codekraakspel waarin spelers door te winnen beurten verdienen om de juiste kleurcode te raden. Achter de vraagtekens zitten kleuren verstopt: wie kraakt als eerste de code? Competitief, actief en altijd anders.',
    highlights: [
      'Verdien een beurt door een oefening of wedstrijd te winnen',
      'Raad de verborgen kleurcode; de trainer controleert',
      'Meerdere teams spelen tegelijk voor extra spanning',
      'Koppel TOF Score voor bonuspunten en beloningen',
    ],
    descriptionLong: `Bij Kraak de Code draait het om zo snel mogelijk de juiste kleurcode te raden. Achter de vraagtekens zitten verschillende kleuren verstopt. Spelers — individueel, in duo's of als team — verdienen een beurt door bijvoorbeeld een oefening of wedstrijd te winnen. Daarna mogen ze naar het bord om een kleurcode in te vullen die zij denken dat juist is. De trainer controleert de code. Is hij niet goed, dan volgt er een nieuwe oefening en een nieuwe kans.

Zo blijven spelers actief en gemotiveerd bezig. Meerdere teams kunnen tegelijk spelen, waardoor er een competitief en spannend spel ontstaat op de club. Door TOF Score eraan te koppelen kun je extra punten geven, bijvoorbeeld voor het eerste team dat de juiste code raadt. Deze punten tellen op binnen de TOF Score en kunnen gekoppeld worden aan een beloning.`,
    detailedRules: `KRAAK DE CODE TENNIS
Officiële Spelregels & Handleiding

INTRODUCTIE
KRAAK DE CODE Tennis is een dynamisch tennisformat dat tennis combineert met logica en teamstrategie. In dit format strijden 2 tot 4 teams tegen elkaar om als eerste de geheime code te kraken.

Het doel: Door korte, intense wedstrijden te winnen, verdien je de kans om buttons te plaatsen of verplaatsen. Welk team kraakt als eerste de code door 5 buttons van dezelfde kleur op de juiste positie te krijgen?

Tennis + Logica = De ultieme teamuitdaging!

Dit format is perfect voor:
• Tennisverenigingen en tennisscholen
• Jeugdtrainingen en clinics
• Toernooien en events
• Groepen van 8 tot 30+ spelers

BENODIGDE MATERIALEN
• Magneetbord: 60cm x 90cm magnetische poster op whiteboard (rijdbaar op de tennisbaan)
• Magneetbuttons: 40 gekleurde buttons (8 rood, 8 oranje, 8 groen, 8 geel, 8 blauw)
• Tennisbanen: Minimaal 1 baan, ideaal 2-4 banen voor grotere groepen
• Tennismateriaal: Rackets, ballen (aangepast aan niveau/leeftijd)

BASISOPZET
Teams
• 2 tot 4 teams (afhankelijk van groepsgrootte)
• Per team: 4 tot 8 spelers
• Flexibel aan te passen aan aantal beschikbare banen en spelers

Speelveld
• Singles: hele baan
• Bij grote groepen: halve baan met tramrails
• Spelbord staat zichtbaar naast de banen

HET SPELVERLOOP
Het spel bestaat uit drie belangrijke stappen die elkaar continu afwisselen:

1. Speel je Wedstrijd
Teams nemen het tegen elkaar op in korte partijen om punten.
• Korte wedstrijden: eerste tot 7 punten (trainer kan dit aanpassen)
• Elke gespeelde wedstrijd telt mee voor je TOF Score
• Win of verlies: elke punt telt!
• Belangrijk: Korte wedstrijden houden het spel dynamisch!

2. Zet je Buttons
Na de wedstrijd mag je buttons plaatsen of verplaatsen om de juiste volgorde te vinden.
• Het team dat de wedstrijd wint, mag buttons plaatsen of verplaatsen
• Je kunt nieuwe buttons plaatsen op lege posities
• Je kunt bestaande buttons verplaatsen naar andere posities
• Strategisch overleg binnen je team is cruciaal!

3. Kraak de Code
Het doel is om als eerste team 5 buttons van dezelfde kleur op de juiste positie te krijgen.
• De code bestaat uit 5 posities
• Elke positie moet dezelfde kleur hebben
• Het eerste team dat de code compleet heeft, wint het spel!
• Let op: de code kan horizontaal, verticaal of diagonaal zijn (afhankelijk van variant)

STRATEGIE & ACTIE
Team vs. Team
• Speel met kleine of grote groepen (8 tot 30+ spelers) verdeeld over meerdere banen
• Elke team heeft zijn eigen kleur of set buttons
• Teams strijden parallel op verschillende banen
• Meer banen = meer actie en sneller spel

Tactisch Overleg
• Gebruik je winst om je eigen code te perfectioneren
• Overleg binnen je team over welke buttons te plaatsen of verplaatsen
• Observeer andere teams om hints te krijgen over de code
• Balans tussen eigen code opbouwen en anderen blokkeren

Dynamisch Spel
• Een razendsnel spel waar communicatie en tennisprestaties hand in hand gaan
• Elke gewonnen wedstrijd geeft je een kans om dichter bij de code te komen
• Elke verloren wedstrijd betekent dat andere teams vooruitgang kunnen boeken
• De spanning blijft hoog tot het einde!

VARIANTEN
Variant 1: Klassieke Code (Horizontaal)
• De code bestaat uit 5 buttons in een horizontale rij
• Eerste team met 5 dezelfde kleuren op een rij wint
• Meest eenvoudige variant, perfect voor beginners

Variant 2: Verticale Code
• De code bestaat uit 5 buttons in een verticale kolom
• Eerste team met 5 dezelfde kleuren in een kolom wint
• Meer tactische uitdaging

Variant 3: Diagonale Code
• De code bestaat uit 5 buttons in een diagonale lijn
• Eerste team met 5 dezelfde kleuren diagonaal wint
• Meest uitdagende variant

Variant 4: Vrije Code
• Teams mogen zelf bepalen welke 5 posities hun code vormen
• Eerste team dat zijn zelfgekozen code compleet heeft, wint
• Meest flexibele en strategische variant

BASISSPELVERLOOP
Spelverloop in stappen:

1. Voorbereiding
• Verdeel spelers in 2 tot 4 teams
• Wijs elke team een kleur toe (of gebruik verschillende kleuren per team)
• Bepaal de wedstrijdvorm (aantal punten per wedstrijd)
• Bepaal welke code variant je speelt
• Plaats het spelbord zichtbaar voor alle teams

2. Wedstrijden Spelen
• Teams spelen korte wedstrijden tegen elkaar
• Standaard: eerste tot 7 punten
• Elke gespeelde wedstrijd wordt bijgeschreven op TOF Score
• Winnaar krijgt het recht om buttons te plaatsen/verplaatsen

3. Buttons Plaatsen/Verplaatsen
• Het winnende team mag buttons plaatsen of verplaatsen
• Team overlegt welke actie het meest strategisch is
• Buttons worden geplaatst op het bord
• Andere teams observeren om hints te krijgen

4. Code Controleren
• Na elke actie controleren teams of de code gekraakt is
• Eerste team met complete code wint!
• Als code niet gekraakt is, start volgende ronde

5. Winnen
• Het eerste team dat de code compleet heeft, wint het spel!
• Alle gespeelde wedstrijden tellen mee voor TOF Score
• Vier de winnaar en de inzet van alle teams!

TIPS VOOR BEGELEIDERS & TRAINERS
Groepsgrootte
• 8-12 spelers: 2 teams (ideaal voor start)
• 12-20 spelers: 3 teams (meer dynamiek)
• 20-30+ spelers: 4 teams (maximale actie)
• Verdeel teams gelijkmatig voor eerlijke competitie

Wedstrijdlengte
• Standaard: 7 punten
• Sneller: 5 punten (meer actie, sneller spel)
• Langer: 9-11 punten (meer tactiek, langere sessie)
• Pas aan op basis van groepsgrootte en beschikbare tijd

Niveau Aanpassen
• Beginners (rood/oranje bal): Kleinere velden, langere rally's, eenvoudigere code variant
• Gevorderden (groene bal/geel): Volledige baan, snellere wedstrijden, complexere code variant
• Mix niveaus: Handicap systeem of zorg dat elk team een mix van niveaus heeft

Motivatie & Sfeer
• Moedig teamwork en tactisch overleg aan
• Vier elke goede zet en strategische keuze
• Laat teams namen kiezen voor extra betrokkenheid
• Houd de energie hoog met korte pauzes tussen wedstrijden
• Beloon niet alleen de winnaar, maar ook de meest actieve teams

Praktisch
• Zorg dat het bord goed zichtbaar is voor alle teams
• Wijs een scheidsrechter/assistent aan bij het bord
• Houd overzicht bij welke teams welke kleuren gebruiken
• Buttons kunnen vastlopen - houd reservebuttons bij de hand
• Update het bord regelmatig na elke actie

TOF SCORE INTEGRATIE
Elke gespeelde wedstrijd telt mee voor je TOF Score:
• Win of verlies: elke punt telt
• Door te spelen verdien je het recht om buttons te verplaatsen
• Ondertussen bouw je razendsnel aan je TOF Score
• Of de code nu gekraakt wordt of niet, jouw inzet brengt je dichter bij de volgende mijlpaal van 200 of 1000 punten!
• Teams met de meeste gespeelde wedstrijden hebben vaak ook de hoogste TOF Scores

VEELGESTELDE VRAGEN
Q: Wat als er een oneven aantal spelers is?
A: Verdeel spelers zo gelijkmatig mogelijk. Een team met één speler meer is meestal geen probleem.

Q: Kunnen teams elkaar zien wat ze doen?
A: Ja! Dat maakt het tactischer. Teams kunnen hints krijgen door te observeren, maar moeten ook oppassen dat anderen hun code niet kopiëren.

Q: Hoe lang duurt een gemiddelde sessie?
A: 45-60 minuten voor een compleet spel. Dit hangt af van het aantal teams, spelers en de moeilijkheidsgraad van de code.

Q: Wat als niemand de code kraakt?
A: Bepaal een tijdslimiet. Aan het einde wint het team dat het dichtst bij de code is (meeste correcte posities).

Q: Kan dit ook indoor?
A: Ja! Perfect voor indoor tennisbanen, zeker in wintermaanden.

Q: Hoeveel spelers kunnen er maximaal meedoen?
A: Tot 30 spelers met het standaard formaat. Bij grotere groepen kun je meerdere spellen parallel spelen of rotatie inbouwen.

Q: Wat is de ideale leeftijd?
A: Vanaf ongeveer 6 jaar (met rode ballen) tot en met volwassenen. Pas de regels en wedstrijdlengte aan op leeftijd en niveau.

Q: Moeten alle spelers even goed kunnen tennissen?
A: Nee! Juist de mix maakt het leuk. Je kunt handicaps inbouwen of zorgen dat elk team een mix van niveaus heeft.

Q: Kunnen teams de code van andere teams zien?
A: Ja, maar ze weten niet welke kleur de code precies is. Dit maakt observatie en tactiek belangrijk.

SUCCESVOL IMPLEMENTEREN
Eerste Keer
1. Begin met 2 teams en Variant 1 (klassieke horizontale code)
2. Leg de basisregels uit: wedstrijd spelen, buttons plaatsen, code kraken
3. Houd de eerste sessie kort en simpel
4. Focus op teamwork en communicatie

Vaste Training
• Wissel af met reguliere training
• Gebruik als warming-up of afsluiting
• Ideaal voor vrijdagmiddag/zaterdag (sociale sessies)
• Introduceer verschillende code varianten voor variatie

Toernooien & Events
• Organiseer KRAAK DE CODE tournaments
• Team competities tussen verenigingen
• Gezinsdagen en open dagen
• Combineer met TOF Score tracking voor extra motivatie

Feedback & Aanpassingen
Deze spelregels kunnen worden aangepast op basis van feedback en ervaringen van verenigingen. Wat werkt voor jouw groep is het beste!

CONTACT & BESTELLEN
Interesse in KRAAK DE CODE Tennis voor jouw vereniging of tennisschool?

Powered by KNLTB Tennis

In de box:
• Magneetbord (60x90cm) met whiteboard
• 40 gekleurde buttons (8 rood, 8 oranje, 8 groen, 8 geel, 8 blauw)
• Spelregelkaart
• Volledige spelregelsgids
• Snelstart handleiding
• Trainerstips

Veel speelplezier met KRAAK DE CODE Tennis!
TOF Tennis - Tennis + Logica = De Ultieme Teamuitdaging!`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/kraak%20de%20code%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/kraak%20de%20code%20tennis.jpg`, label: 'Magneetposter' },
    ],
    pricing: {
      type: 'fixed-bundle',
      price: 135,
      label: 'Poster + gekleurde buttons',
    },
    formats: [
      {
        id: 'kraak-de-code',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/kraak%20de%20code%20tennis.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'swirl',
    name: 'DE SWIRL',
    category: 'tennis',
    ageGroup: 'Tenniskids Rood | Tenniskids Oranje | Tenniskids Groen',
    videoUrl: 'https://www.youtube.com/watch?v=EdDnRoxkcFk',
    description: 'Het veelzijdige format dat direct aansluit op de TOF Tennis Spelerskaarten. Laat spelers zelf kiezen waar ze aan willen werken, óf speel de Swirl als snelle wedstrijdvorm naar het midden toe. Eigenaarschap én speelplezier.',
    highlights: [
      'Sluit naadloos aan op de TOF Tennis Spelerskaarten',
      'Spelers kiezen zelf hun ontwikkelpunt: voetenwerk, netspel, rally of wedstrijd',
      'Ook als wedstrijdvorm: elk gewonnen punt is een stap richting het midden',
      'Koppelbaar aan TOF Score voor inzicht in voortgang en activiteit',
    ],
    descriptionLong: `TOF Tennis Swirl sluit direct aan op de TOF Tennis Spelerskaarten en kan op verschillende manieren ingezet worden binnen het jeugdprogramma. Een leuke toepassing is om spelers zelf te laten kiezen waar zij de komende periode aan willen werken — denk aan voetenwerk, netspel, rallyvaardigheden of het spelen van wedstrijden. Door kinderen hierin een stem te geven, ontstaat meer eigenaarschap en motivatie.

Daarnaast kan de Swirl gebruikt worden als speelse wedstrijdvorm: twee teams spelen korte wedstrijden tegen elkaar en voor ieder gewonnen punt mag een team één stap verder bewegen binnen de Swirl. Het team dat als eerste het midden bereikt, wint. Uiteraard kan ook TOF Score aan de Swirl worden gekoppeld, zodat trainers de voortgang van spelers volgen én inzicht krijgen in hoeveel wedstrijden en activiteiten er op de club worden gespeeld.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/de%20swirl%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/tennis%20swirl.jpg`, label: 'Magneetposter' },
    ],
    pricing: POSTER_BUTTONS_30_PRICING,
    formats: [
      {
        id: 'swirl-pistache',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/tennis%20swirl.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'scoreboard',
    name: 'TOF Scoreboard',
    category: 'tennis',
    ageGroup: 'Alle leeftijden',
    description: 'Magneet poster met buttons en spelregelkaart. Tip: aantal benodigde buttons is gelijk aan aantal jeugdspelers.',
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/Scoreboard.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/tennis%20scoreboard.jpg`, label: 'Magneetposter' },
    ],
    pricing: POSTER_BUTTONS_30_PRICING,
    formats: [
      {
        id: 'scoreboard-1',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/tennis%20scoreboard.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'padel-piramide',
    name: 'PADEL PIRAMIDE',
    category: 'padel',
    ageGroup: 'Ontwikkelingsmatrix 1 | T/m 11 jaar',
    videoUrl: 'https://www.youtube.com/watch?v=RkwfcItUHZM',
    description: 'Het klassementsformat voor de jongste jeugd binnen Explore Padel, vaak gespeeld over de breedte van de baan. Spelers dagen elkaar uit en klimmen in de piramide: het draait vooral om onderlinge uitdaging en veel spelmomenten.',
    highlights: [
      'Spelers dagen elkaar uit en organiseren zelf hun wedstrijden',
      'Draai de button om tijdens het spelen, zo zie je wie beschikbaar is',
      'Ideaal voor de jongste jeugd; ook geschikt als dubbelspel-variant voor ouderen',
      'Resultaten koppelbaar aan TOF Score en de TOF app',
    ],
    descriptionLong: `De Padel Piramide wordt vooral gebruikt voor de jongste jeugd binnen Explore Padel, waar vaak over de breedte van de baan wordt gespeeld. Spelers dagen elkaar uit om wedstrijden te spelen en proberen zo hoog mogelijk op de piramide te klimmen. Het belangrijkste doel is niet alleen winnen, maar vooral het stimuleren van onderlinge uitdaging en spelmomenten op de club.

Zodra een wedstrijd start, wordt de button omgedraaid om aan te geven dat er gespeeld wordt. Na de wedstrijd wisselen spelers van positie afhankelijk van de uitslag, en wordt de button weer teruggedraaid om te laten zien dat de speler opnieuw beschikbaar is. Zo leren kinderen zelf wedstrijden te organiseren en elkaar uit te dagen. Gespeelde wedstrijden en resultaten kunnen worden bijgehouden en gekoppeld aan TOF Score en de TOF app.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/padel%20piramide%20500.jpg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/padel%20piramide%2021.jpg`, label: 'Tot en met 21 spelers' },
      { url: `${WEBSHOP_MEDIA}/padel%20piramide%2036.jpg`, label: 'Tot en met 36 spelers' },
    ],
    pricing: POSTER_WIZARD_PRICING_36,
    formats: [
      {
        id: 'padel-piramide',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/padel%20piramide%2036.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'padel-club-clash',
    name: 'PADEL CLUP CLASH',
    category: 'padel',
    ageGroup: 'Ontwikkelingsmatrix 2 | 11-16 jaar',
    videoUrl: 'https://www.youtube.com/watch?v=MZm8bETmIuQ',
    description: 'Een laagdrempelig teamformat voor de iets oudere jeugd (Experience of Expert Padel). Spelers maken zelf groepjes en spelen wedstrijdjes tegen andere groepjes: spelenderwijs wedstrijdervaring opdoen op de eigen club.',
    highlights: [
      'Spelers maken zelf groepjes en spelen tegen andere groepjes',
      'Scores noteren op het TOF Score-formulier, digitaal bij te houden',
      'Vertrouwde setting op de eigen club als opstap naar officiële wedstrijden',
      'Een waardevolle aanvulling op het jeugdprogramma',
    ],
    descriptionLong: `Clup Clash Padel is een oefenformat van TOF Sports voor de iets oudere jeugd binnen de club, zoals Experience Padel of Expert Padel, bedoeld als aanvulling op het jeugdprogramma. Spelers maken zelf groepjes en spelen vervolgens wedstrijdjes tegen andere groepjes op de club.

De scores worden genoteerd op het TOF Score-formulier en kunnen digitaal worden bijgehouden binnen het TOF-systeem. Zo ontstaat een laagdrempelige en vertrouwde setting op de eigen club, waarin spelers spelenderwijs wedstrijdervaring opdoen en beter worden voorbereid op officiële wedstrijden.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/padel%20club%20clash%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/padel%20clup%20clash%2021.jpg`, label: 'Tot en met 21 spelers' },
      { url: `${WEBSHOP_MEDIA}/padel%20clup%20clash%2036.jpg`, label: 'Tot en met 36 spelers' },
      { url: `${WEBSHOP_MEDIA}/padel%20clup%20clash%2055.jpg`, label: 'Tot en met 55 spelers' },
    ],
    pricing: POSTER_WIZARD_PRICING,
    formats: [
      {
        id: 'padel-club-clash',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/padel%20clup%20clash%2036.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'uno-dos-tres-cuatro',
    name: 'UNO DOS TRES CUATRO',
    category: 'padel',
    ageGroup: 'Alle leeftijden',
    videoUrl: 'https://www.youtube.com/watch?v=qH1gAcVx6S8',
    description: 'Het padelformat rond snelheid, uitdaging en het verzamelen van overwinningen. Speel korte wedstrijden, creëer patronen van vier op een rij en win zoveel mogelijk rondes. Eenvoudig te begrijpen en op elk niveau toepasbaar.',
    highlights: [
      'Korte wedstrijden en uitdagingen binnen een duidelijke spelstructuur',
      'Maak zo snel mogelijk patronen van vier op een rij',
      'Toepasbaar voor zowel jongere als oudere jeugdspelers',
      'Prestaties koppelbaar aan TOF Score en de TOF app',
    ],
    descriptionLong: `Spelers spelen korte wedstrijden of uitdagingen tegen elkaar. Het doel is om zo snel mogelijk patronen van vier op een rij te creëren of binnen een bepaalde tijd zoveel mogelijk succesvolle rondes te winnen. Het format is eenvoudig te begrijpen en kan op verschillende niveaus worden toegepast, waardoor het geschikt is voor zowel jongere als oudere jeugdspelers.

Naast het teamdoel kan ook op individueel niveau worden bijgehouden hoeveel prestaties en overwinningen spelers behalen. Deze resultaten kunnen worden gekoppeld aan TOF Score en vervolgens worden verwerkt in de TOF app. Zo ontstaat een dynamische spelvorm waarin spelers continu worden uitgedaagd om actief te blijven spelen en hun niveau te ontwikkelen op de padelbaan.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/un%20dos%20tres%20500.jpg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/uno%20dos%20tres%20cuatro.jpg`, label: 'Magneetposter' },
    ],
    pricing: {
      type: 'fixed-bundle',
      price: 145,
      label: 'Poster + gekleurde buttons',
    },
    formats: [
      {
        id: 'uno-dos-tres-cuatro',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/uno%20dos%20tres%20cuatro.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'unlock-the-code',
    name: 'UNLOCK THE CODE',
    category: 'padel',
    ageGroup: 'Alle leeftijden',
    videoUrl: 'https://www.youtube.com/watch?v=Gek0aHuhR8A',
    description: 'Samenwerken, uitdagingen aangaan en als eerste de juiste kleurcode kraken. Achter de magneetjes met vraagtekens zitten kleuren verborgen: verdien pogingen door te winnen en achterhaal stap voor stap de code.',
    highlights: [
      'Verdien een poging via een opdracht, oefening of gewonnen wedstrijd',
      'Juiste kleuren blijven staan: kraak de code stap voor stap',
      'Meerdere teams spelen tegelijk voor maximale competitie',
      'Koppel TOF Score voor extra punten binnen het TOF-systeem',
    ],
    descriptionLong: `Bij Unlock the Code Padel draait alles om samenwerken, uitdagingen aangaan en als eerste de juiste kleurcode kraken. Achter de magneetjes met vraagtekens zitten verschillende kleuren verborgen. Spelers verdienen een poging door een opdracht uit te voeren, een oefening te voltooien of een wedstrijd te winnen. Daarna mogen zij een kleurencombinatie invullen waarvan zij denken dat deze overeenkomt met de verborgen code. De trainer controleert de gekozen combinatie: kloppen één of meerdere kleuren, dan blijven deze staan voor de volgende ronde.

Op basis van die informatie proberen de spelers stap voor stap de volledige kleurcode te achterhalen. Is de code nog niet gekraakt, dan volgt een nieuwe opdracht en een nieuwe kans. Meerdere teams kunnen tegelijkertijd deelnemen, waardoor een uitdagende en competitieve spelvorm ontstaat. Het team dat als eerste de volledige kleurcode kraakt, wint. Door het format te koppelen aan TOF Score kunnen extra punten worden verdiend die meetellen binnen het TOF-systeem en eenvoudig worden bijgehouden in de TOF app.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/unlock%20the%20code%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/unlock%20the%20code.jpg`, label: 'Magneetposter' },
    ],
    pricing: {
      type: 'fixed-bundle',
      price: 135,
      label: 'Poster + gekleurde buttons',
    },
    formats: [
      {
        id: 'unlock-the-code',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/unlock%20the%20code.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'padel-swirl',
    name: 'DE SWIRL',
    category: 'padel',
    ageGroup: 'Alle leeftijden',
    videoUrl: 'https://www.youtube.com/watch?v=NsVjU-huVWE',
    description: 'Het veelzijdige format dat aansluit bij de padelkaarten die veel jeugdspelers al kennen. Laat spelers zelf hun ontwikkelpunt kiezen, óf speel de Swirl als dynamische wedstrijdvorm. Herkenbaar, motiverend en breed inzetbaar.',
    highlights: [
      'Sluit aan bij de bekende padelkaarten, spelers stappen direct in',
      'Spelers kiezen zelf hun focus: wand en hek, voetenwerk of ander spelonderdeel',
      'Ook als wedstrijdvorm: elk gewonnen punt is een stap verder in de Swirl',
      'Alle punten koppelbaar aan TOF Score',
    ],
    descriptionLong: `TOF Padel Swirl sluit aan bij de padelkaarten die veel jeugdspelers al kennen, waardoor kinderen het format direct herkennen en gemakkelijk instappen. De Swirl kan op verschillende manieren worden ingezet, bijvoorbeeld door spelers zelf te laten kiezen waar zij de komende periode aan willen werken — denk aan de wand en het hek, voetenwerk of een ander onderdeel van hun spel. Zo krijgen spelers meer invloed op hun eigen ontwikkeling en ontstaat extra motivatie tijdens trainingen.

Daarnaast kan de Swirl gebruikt worden als speelse wedstrijdvorm: twee teams spelen korte, dynamische wedstrijdjes en na ieder gewonnen punt mag een team een stap verder in de Swirl zetten. Het team dat als eerste de volledige ronde aflegt, wint. Alle behaalde punten kunnen worden gekoppeld aan TOF Score, zodat ontwikkeling, eigenaarschap en wedstrijdplezier samenkomen op de baan.`,
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/the%20swirl%20padel%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/padel%20swirl.jpg`, label: 'Magneetposter' },
    ],
    pricing: POSTER_BUTTONS_30_PRICING,
    formats: [
      {
        id: 'padel-swirl-1',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/padel%20swirl.jpg`,
        packages: {},
      },
    ],
  },
  {
    id: 'padel-scoreboard',
    name: 'TOF Scoreboard',
    category: 'padel',
    ageGroup: 'Alle leeftijden',
    description: 'Magneet poster met buttons en spelregelkaart. Tip: aantal benodigde buttons is gelijk aan aantal jeugdspelers.',
    image: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/padel%20scoreboard%20500.jpeg',
    galleryImages: [
      { url: `${WEBSHOP_MEDIA}/padel%20scoreboard.jpg`, label: 'Magneetposter' },
    ],
    pricing: POSTER_BUTTONS_30_PRICING,
    formats: [
      {
        id: 'padel-scoreboard-1',
        name: 'Magneetposter',
        players: '',
        image: `${WEBSHOP_MEDIA}/padel%20scoreboard.jpg`,
        packages: {},
      },
    ],
  }
];

export const getProductImageGallery = (product) => {
  const images = [];
  const add = (url, label = null, variant = 'poster') => {
    if (!url || images.some((item) => item.url === url)) return;
    images.push({ url, label, variant });
  };

  if (product.image) {
    add(product.image, 'In gebruik', 'hero');
  }

  (product.galleryImages || []).forEach((item) => {
    if (typeof item === 'string') add(item, null, 'poster');
    else add(item.url, item.label, item.variant || 'poster');
  });

  (product.formats || []).forEach((format) => {
    if (format.image) add(format.image, format.name, 'poster');
  });

  return images;
};

export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return allProducts.find((product) => product.id === id);
};

