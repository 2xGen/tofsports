/** Bilingual Over TOF copy. Use `ot(locale, node)` to pick nl/en strings. */

export function ot(locale, node) {
  if (node == null) return node;
  if (typeof node === 'string') return node;
  if (typeof node === 'object' && ('nl' in node || 'en' in node)) {
    return locale === 'en' ? (node.en ?? node.nl) : (node.nl ?? node.en);
  }
  return node;
}

export function otMap(locale, list) {
  return (list || []).map((item) => {
    if (typeof item === 'string' || (item && ('nl' in item || 'en' in item))) {
      return ot(locale, item);
    }
    if (Array.isArray(item)) return item.map((x) => ot(locale, x));
    if (item && typeof item === 'object') {
      const out = {};
      Object.keys(item).forEach((key) => {
        const val = item[key];
        if (Array.isArray(val)) out[key] = val.map((x) => ot(locale, x));
        else out[key] = ot(locale, val);
      });
      return out;
    }
    return item;
  });
}

export const OVER_TOF = {
  page: {
    title: { nl: 'Over TOF', en: 'About TOF' },
    subtitle: {
      nl: 'Alles over onze visie, methode en tools voor tennis- en padelverenigingen.',
      en: 'Everything about our vision, method and tools for tennis and padel clubs.',
    },
    jumpTo: { nl: 'Ga direct naar', en: 'Jump to' },
    sectionsAria: { nl: 'Secties op deze pagina', en: 'Sections on this page' },
  },
  sections: [
    {
      id: 'visie-missie',
      title: { nl: 'Visie & Missie', en: 'Vision & Mission' },
      subtitle: {
        nl: 'De 365-mentaliteit: waarom we jeugd het hele jaar betrokken willen houden op de club.',
        en: 'The 365 mindset: why we keep juniors engaged at the club all year round.',
      },
    },
    {
      id: 'knltb',
      title: { nl: 'KNLTB', en: 'KNLTB' },
      subtitle: {
        nl: 'Powered by KNLTB — Tenniskids TOF en TOF padel als basis van je jeugdprogramma.',
        en: 'Powered by KNLTB — Tenniskids TOF and TOF padel as the foundation of your youth programme.',
      },
    },
    {
      id: 'tof-methode',
      title: { nl: 'TOF Methode', en: 'TOF Method' },
      subtitle: {
        nl: 'Spelen, leren en sparen: het Plug & Play systeem voor je vereniging.',
        en: 'Play, learn and save: the Plug & Play system for your club.',
      },
    },
    {
      id: 'tof-score',
      title: { nl: 'TOF Score', en: 'TOF Score' },
      subtitle: {
        nl: 'Meet betrokkenheid en motiveer jeugd met punten, status en speelmomenten.',
        en: 'Measure engagement and motivate juniors with points, status and play moments.',
      },
    },
    {
      id: 'magneetposters',
      title: { nl: 'Magneetposters', en: 'Magnetic posters' },
      subtitle: {
        nl: 'Format-posters op magneet voor whiteboard — professioneel op de baan.',
        en: 'Magnetic format posters for whiteboard — professional on court.',
      },
    },
    {
      id: 'leraren-app',
      title: { nl: 'Leraren-app', en: 'Coach app' },
      subtitle: {
        nl: 'Lesplannen, TOF Score en clubbeheer digitaal in de KNLTB leraren-app.',
        en: 'Lesson plans, TOF Score and club management digitally in the KNLTB coach app.',
      },
    },
  ],
  dividers: [
    {
      nl: 'Jeugd speelt op de club — de 365-mentaliteit in actie',
      en: 'Juniors playing at the club — the 365 mindset in action',
    },
    {
      nl: 'Trainer en jeugd met het TOF bord — Powered by KNLTB',
      en: 'Coach and juniors with the TOF board — Powered by KNLTB',
    },
    {
      nl: 'Kinderen spelen een TOF format op de vereniging',
      en: 'Children playing a TOF format at the club',
    },
    {
      nl: 'Jeugd bij het TOF scorebord op de baan',
      en: 'Juniors at the TOF scoreboard on court',
    },
    {
      nl: 'Trainer en jeugd met het TOF padelbord op de baan',
      en: 'Coach and juniors with the TOF padel board on court',
    },
  ],
  missieVisie: {
    visionTitle: { nl: 'De 365-mentaliteit', en: 'The 365 mindset' },
    visionBody: {
      nl: 'Wij geloven dat verenigingen sterker worden wanneer jeugdspelers zich het hele jaar door betrokken voelen en met plezier actief deel uitmaken van het verenigingsleven. Niet alleen tijdens het lesuur en competitie, maar 365 dagen per jaar. Daarom zetten we jeugdspelers centraal en zien we sport als een doorlopende clubervaring waarin ontwikkeling, plezier en ontmoeting samenkomen.',
      en: 'We believe clubs grow stronger when juniors feel engaged all year and happily take part in club life. Not only during lessons and competition, but 365 days a year. That is why we put juniors first and see sport as an ongoing club experience where development, fun and meeting others come together.',
    },
    missionTitle: { nl: 'Missie', en: 'Mission' },
    pillars: { nl: 'Spelen – Leren – Sparen', en: 'Play – Learn – Save' },
    missionLead: {
      nl: 'TOF Sports maakt van elke jeugdspeler een echte clubspeler.',
      en: 'TOF Sports turns every junior into a true club player.',
    },
    missionBody: {
      nl: 'Wij brengen verenigingen tot leven door jeugdspelers echt in beweging te krijgen. Onze missie is om kinderen te activeren tot meer speelmomenten, hen breed te laten ontwikkelen en duurzaam te verbinden aan hun vereniging. Met de TOF-methode groeien jeugdleden van lesklant naar actieve clubspeler en ambassadeur van hun sport.',
      en: 'We bring clubs to life by getting juniors truly moving. Our mission is to activate children for more play moments, help them develop broadly and connect them sustainably to their club. With the TOF method, juniors grow from lesson customers into active club players and ambassadors of their sport.',
    },
    ctaTitle: {
      nl: 'Klaar om jouw vereniging tot leven te brengen?',
      en: 'Ready to bring your club to life?',
    },
    ctaBody: {
      nl: 'Ontdek de TOF-methode en de 365-mentaliteit.',
      en: 'Discover the TOF method and the 365 mindset.',
    },
    ctaMethod: { nl: 'TOF-methode', en: 'TOF method' },
    ctaScore: { nl: 'TOF Score', en: 'TOF Score' },
    ctaContact: { nl: 'Plan een kennismaking', en: 'Book an introduction' },
  },
  knltb: {
    tennisTitle: { nl: 'Wat is Tenniskids TOF?', en: 'What is Tenniskids TOF?' },
    padelTitle: { nl: 'Wat is TOF padel?', en: 'What is TOF padel?' },
    childFirst: { nl: 'Elk kind centraal', en: 'Every child first' },
    tennisIntro: {
      nl: 'Tenniskids TOF is onderdeel van het KNLTB Tenniskids programma. TOF staat voor Training Ontwikkeling Fases en biedt structuur en ondersteuning bij de ontwikkeling van jeugdtennissers. Binnen Tenniskids TOF staat de jeugdspeler centraal. Spelers krijgen de ruimte om zich op hun eigen manier en in hun eigen tempo te ontwikkelen.',
      en: 'Tenniskids TOF is part of the KNLTB Tenniskids programme. TOF stands for Training Development Phases and provides structure and support for junior tennis development. Within Tenniskids TOF the junior is central. Players get room to develop in their own way and at their own pace.',
    },
    padelIntro: {
      nl: 'TOF padel staat voor Training Ontwikkeling Fases padel en vormt de basis van het KNLTB padel jeugdprogramma. Binnen TOF padel staat de jeugdspeler centraal — spelers ontwikkelen zich in hun eigen tempo, wat motivatie en spelplezier vergroot.',
      en: 'TOF padel stands for Training Development Phases padel and forms the basis of the KNLTB padel youth programme. Within TOF padel the junior is central — players develop at their own pace, which boosts motivation and enjoyment.',
    },
    playerCard: { nl: 'Spelerskaart', en: 'Player card' },
    tennisCard: {
      nl: 'Elke jeugdspeler ontvangt een Tenniskids TOF spelerskaart, afgestemd op de Tenniskids-kleur waarin de speler actief is. De spelerskaart geeft inzicht in de ontwikkeling en wordt meegenomen naar trainingen en wedstrijden.',
      en: 'Every junior receives a Tenniskids TOF player card, matched to the Tenniskids colour they play in. The card gives insight into development and is brought to training and matches.',
    },
    padelCard: {
      nl: 'De jeugdspeler krijgt inzicht via een persoonlijke spelerskaart aan de tas. Drie kaarten, afgestemd op ontwikkelingsniveau. Op de achterkant kleuren spelers vakjes in na elke les, vrij spel, clubevent of wedstrijddag.',
      en: 'Juniors gain insight via a personal player card on their bag. Three cards matched to development level. On the back, players colour boxes after every lesson, free play, club event or match day.',
    },
    levelTitle: { nl: 'Van level naar level', en: 'From level to level' },
    levelP1: {
      nl: 'Op de voorkant van de spelerskaart staan bolletjes die inzicht geven in vragen zoals wanneer een speler klaar is voor competitie, doorstroom binnen een kleur of de volgende Tenniskids-kleur.',
      en: 'On the front of the player card are dots that help answer questions such as when a player is ready for competition, progress within a colour, or the next Tenniskids colour.',
    },
    levelP2: {
      nl: 'Op de achterkant kan een bolletje worden ingekleurd voor elke keer dat de speler op de baan staat — lessen, wedstrijden, vrij spel of clubactiviteiten.',
      en: 'On the back, a dot can be coloured in every time the player is on court — lessons, matches, free play or club activities.',
    },
    saveTitle: { nl: 'Sparen en beloning', en: 'Saving and rewards' },
    saveBody: {
      nl: 'Wanneer de spelerskaart volledig is ingevuld, ontvangt de jeugdspeler een beloning vanuit de leraar of vereniging. Zo stimuleert Tenniskids TOF actieve deelname en blijvende betrokkenheid.',
      en: 'When the player card is fully filled in, the junior receives a reward from the coach or club. That is how Tenniskids TOF encourages active participation and lasting engagement.',
    },
    matrixTitle: { nl: 'Ontwikkelingsmatrix', en: 'Development matrix' },
    matrixBody: {
      nl: 'De ontwikkeling wordt uitgedrukt in competenties onderverdeeld in fases en levels — technisch, tactisch, mentaal en sociaal — uitgewerkt in het TOF padel handboek.',
      en: 'Development is expressed in competencies divided into phases and levels — technical, tactical, mental and social — set out in the TOF padel handbook.',
    },
    appTitle: { nl: 'De Leraren App', en: 'The Coach App' },
    appIntro: {
      nl: 'Een complete digitale assistent speciaal ontwikkeld voor tennis- en padelleraren. Met deze app heb je alle tools binnen handbereik om je trainingen te verbeteren en de voortgang van je spelers bij te houden.',
      en: 'A complete digital assistant built for tennis and padel coaches. With this app you have every tool at hand to improve your sessions and track player progress.',
    },
    features: [
      {
        title: { nl: 'Lesplannen', en: 'Lesson plans' },
        text: {
          nl: 'Toegang tot een uitgebreide bibliotheek met lesplannen die perfect aansluiten bij het KNLTB jeugdprogramma.',
          en: 'Access to an extensive library of lesson plans that fit the KNLTB youth programme perfectly.',
        },
      },
      {
        title: { nl: 'Oefeningen', en: 'Exercises' },
        text: {
          nl: "Honderden oefeningen met duidelijke instructies en video's om je trainingen gevarieerd en effectief te maken.",
          en: 'Hundreds of exercises with clear instructions and videos to make your sessions varied and effective.',
        },
      },
      {
        title: { nl: 'Voortgangsregistratie', en: 'Progress tracking' },
        text: {
          nl: 'Houd de ontwikkeling van elke speler bij en volg hun voortgang door de verschillende niveaus.',
          en: 'Track each player’s development and follow their progress through the different levels.',
        },
      },
    ],
  },
  methode: {
    title: {
      nl: 'De TOF-methode: van lesklant naar actieve clubspeler',
      en: 'The TOF method: from lesson customer to active club player',
    },
    intro: {
      nl: 'Bij TOF Sports geloven we dat jeugdspelers pas echt groeien wanneer tennis en padel méér zijn dan een wekelijkse training. Met de TOF-methode helpen wij verenigingen om jeugdspelers te activeren, te ontwikkelen en duurzaam te verbinden aan het clubleven.',
      en: 'At TOF Sports we believe juniors only truly grow when tennis and padel are more than a weekly lesson. With the TOF method we help clubs activate juniors, develop them and connect them sustainably to club life.',
    },
    highlight: {
      nl: 'De TOF-methode is gebouwd op één duidelijke overtuiging: een sterke jeugdafdeling ontstaat wanneer kinderen zich 365 dagen per jaar welkom en betrokken voelen op de club.',
      en: 'The TOF method is built on one clear belief: a strong youth section grows when children feel welcome and engaged at the club 365 days a year.',
    },
    pillarsTitle: {
      nl: 'De drie pijlers van de TOF-methode',
      en: 'The three pillars of the TOF method',
    },
    pillars: [
      {
        n: 1,
        title: {
          nl: 'Spelen: De basis van een actieve club',
          en: 'Play: The foundation of an active club',
        },
        intro: {
          nl: 'Spelen is de motor van plezier en ontwikkeling. Binnen de TOF-methode creëren we laagdrempelige speelmomenten op de eigen vereniging.',
          en: 'Play drives fun and development. Within the TOF method we create accessible play moments at your own club.',
        },
        items: [
          {
            nl: 'Veilig en vertrouwd spelen op de eigen vereniging',
            en: 'Safe, familiar play at your own club',
          },
          {
            nl: 'Teamgevoel en vriendschappen staan centraal',
            en: 'Team spirit and friendships come first',
          },
          {
            nl: 'Geen prestatiedruk, wel uitdaging en plezier',
            en: 'No performance pressure — challenge and fun instead',
          },
          { nl: 'Geschikt voor alle niveaus', en: 'Suitable for all levels' },
        ],
        footer: {
          nl: 'Door het spelen terug te brengen groeit de vereniging uit tot een plek waar kinderen graag zijn: ook buiten de training om.',
          en: 'By bringing play back, the club becomes a place children love to be — also outside training.',
        },
      },
      {
        n: 2,
        title: {
          nl: 'Leren: Ontwikkelen door te doen',
          en: 'Learn: Develop by doing',
        },
        items: [
          {
            nl: 'Regels direct toepassen op de baan',
            en: 'Apply rules directly on court',
          },
          {
            nl: 'Fairplay direct toepassen op en naast de baan',
            en: 'Apply fair play on and off court',
          },
          {
            nl: 'Mentaal weerbaarder op en naast de baan',
            en: 'Mentally stronger on and off court',
          },
          {
            nl: 'Meer zelfvertrouwen en zelfstandigheid',
            en: 'More confidence and independence',
          },
          {
            nl: 'Meer interactie tussen speler(s), leraar en vereniging',
            en: 'More interaction between player(s), coach and club',
          },
        ],
      },
      {
        n: 3,
        title: {
          nl: 'Sparen: Samen bouwen aan clubgevoel',
          en: 'Save: Build club spirit together',
        },
        intro: {
          nl: 'Binnen gamification betekent sparen dat kinderen (samen) punten en beloningen verzamelen door actief mee te doen en inzet te tonen.',
          en: 'In gamification, saving means children (together) collect points and rewards by taking part actively and showing effort.',
        },
        items: [
          { nl: 'Maakt deelname leuker', en: 'Makes participation more fun' },
          {
            nl: 'Versterkt onderlinge verbinding',
            en: 'Strengthens connection between players',
          },
          {
            nl: 'Jeugdleden voelen zich meer betrokken',
            en: 'Juniors feel more engaged',
          },
          {
            nl: 'Draagt bij aan een levendige jeugdcultuur op de vereniging',
            en: 'Contributes to a lively youth culture at the club',
          },
        ],
      },
    ],
    mindsetTitle: { nl: 'De 365-mentaliteit', en: 'The 365 mindset' },
    mindsetBody: {
      nl: 'Bij TOF Sports stopt het niet na een lesuur per week. Wij werken vanuit de 365-mentaliteit: jeugdspelers voelen zich het hele jaar door onderdeel van de vereniging. Vrij spelen, onderlinge challenges, clubactiviteiten en speelmomenten maken sport tot een doorlopende clubervaring.',
      en: 'At TOF Sports it does not stop after one lesson a week. We work from the 365 mindset: juniors feel part of the club all year. Free play, peer challenges, club activities and play moments turn sport into an ongoing club experience.',
    },
    scoreCta: {
      nl: 'Ontdek hoe de TOF Score deze betrokkenheid meetbaar maakt',
      en: 'Discover how TOF Score makes this engagement measurable',
    },
  },
  score: {
    title: {
      nl: 'De TOF 365-Score: meten wat écht belangrijk is',
      en: 'The TOF 365 Score: measuring what really matters',
    },
    intro: {
      nl: 'Om jeugdparticipatie zichtbaar en meetbaar te maken, introduceert TOF Sports de TOF 365-Score: dé standaard voor actieve jeugdleden binnen tennis- en padelverenigingen. De score beloont meedoen — hoe vaker een jeugdspeler speelt en deelneemt aan het clubleven, hoe hoger de score.',
      en: 'To make youth participation visible and measurable, TOF Sports introduces the TOF 365 Score: the standard for active juniors at tennis and padel clubs. The score rewards taking part — the more often a junior plays and joins club life, the higher the score.',
    },
    goalLabel: { nl: 'Doel:', en: 'Goal:' },
    goalValue: {
      nl: '365 punten per jaar per jeugdspeler',
      en: '365 points per year per junior',
    },
    earnEyebrow: { nl: 'Punten verdienen', en: 'Earn points' },
    howTitle: {
      nl: 'Hoe werkt de TOF 365-Score?',
      en: 'How does the TOF 365 Score work?',
    },
    howIntro: {
      nl: 'Punten worden verzameld op steeds terugkerende speelmomenten op de vereniging.',
      en: 'Points are collected at recurring play moments at the club.',
    },
    earnItems: [
      {
        nl: 'Deelname aan oefenformats',
        en: 'Taking part in practice formats',
      },
      {
        nl: 'Deelname aan de clubkampioenschappen',
        en: 'Taking part in club championships',
      },
      { nl: 'Vrij spelen', en: 'Free play' },
    ],
    pressureTitle: {
      nl: 'Spelen zonder de druk om te moeten winnen',
      en: 'Play without the pressure to win',
    },
    pressureBody: {
      nl: 'Deelname telt meer dan resultaat. Vaker meedoen en net verliezen levert bij TOF Score meer op dan af en toe aanwezig zijn en steeds winnen.',
      en: 'Participation counts more than results. Taking part more often and narrowly losing earns more with TOF Score than showing up occasionally and always winning.',
    },
    benefits: [
      { nl: 'Meer motivatie om te spelen', en: 'More motivation to play' },
      { nl: 'Meer zelfvertrouwen', en: 'More confidence' },
      { nl: 'Een veilige leeromgeving', en: 'A safe learning environment' },
      {
        nl: 'Snellere en bredere ontwikkeling',
        en: 'Faster and broader development',
      },
    ],
    gameTitle: { nl: 'Gamification en motivatie', en: 'Gamification and motivation' },
    gameBody: {
      nl: 'Spelers werken toe naar steeds hogere scores, sparen voor leuke beloningen en bouwen zo aan hun TOF Score-status.',
      en: 'Players work towards higher scores, save for fun rewards and build their TOF Score status.',
    },
    digitalTitle: { nl: 'Digitale tool', en: 'Digital tool' },
    digitalBody: {
      nl: 'Leraren houden scores en voortgang digitaal bij, waarbij de nadruk ligt op deelname en inzet.',
      en: 'Coaches track scores and progress digitally, with the emphasis on participation and effort.',
    },
    ctaTitle: {
      nl: 'Klaar om jeugdparticipatie te laten groeien?',
      en: 'Ready to grow youth participation?',
    },
    ctaBody: {
      nl: 'Met de TOF-methode en de TOF 365-Score bouwen verenigingen aan een actieve, levendige jeugdafdeling.',
      en: 'With the TOF method and the TOF 365 Score, clubs build an active, lively youth section.',
    },
    ctaMethod: { nl: 'Ontdek de TOF-methode', en: 'Discover the TOF method' },
    ctaContact: { nl: 'Plan een kennismaking', en: 'Book an introduction' },
  },
  posters: {
    whyTitle: {
      nl: 'Waarom magneetposters voor onze formats?',
      en: 'Why magnetic posters for our formats?',
    },
    whyBody: {
      nl: 'Onze tennis- en padel-formats zijn ontworpen om optimaal te werken met magneetposters. Deze grootformaat posters (60x90 cm) zijn de professionele standaard voor het presenteren van speelse oefenformats en speelschema\'s.',
      en: 'Our tennis and padel formats are designed to work optimally with magnetic posters. These large-format posters (60x90 cm) are the professional standard for presenting playful practice formats and play schedules.',
    },
    importantLabel: { nl: 'Belangrijk om te weten:', en: 'Important to know:' },
    importantBody: {
      nl: 'Voor optimaal gebruik heb je een (rijdend) whiteboard nodig. Dit formaat is essentieel voor de beste presentatie en gebruiksgemak.',
      en: 'For best use you need a (mobile) whiteboard. This format is essential for the best presentation and ease of use.',
    },
    bestTitle: {
      nl: 'Waarom magneetposters de beste keuze zijn',
      en: 'Why magnetic posters are the best choice',
    },
    bestItems: [
      {
        nl: 'Snel wisselen: in één beweging op en af het whiteboard',
        en: 'Quick swap: on and off the whiteboard in one move',
      },
      { nl: 'Geen beschadigingen aan je bord', en: 'No damage to your board' },
      {
        nl: 'Duurzaam, flexibel en herbruikbaar',
        en: 'Durable, flexible and reusable',
      },
      {
        nl: 'Full colour print voor een professionele uitstraling',
        en: 'Full-colour print for a professional look',
      },
      {
        nl: 'Combineer 3–4 posters op een 120 cm breed whiteboard',
        en: 'Combine 3–4 posters on a 120 cm wide whiteboard',
      },
    ],
    foilTitle: {
      nl: 'Flexibel magneetfolie (0,3 mm)',
      en: 'Flexible magnetic foil (0.3 mm)',
    },
    foilBody: {
      nl: 'Dun, flexibel magneetfolie met volledig magnetische achterzijde — geen harde magneetplaat, maar een luxe poster die direct op een whiteboard blijft plakken.',
      en: 'Thin, flexible magnetic foil with a fully magnetic back — not a hard magnet plate, but a premium poster that sticks straight onto a whiteboard.',
    },
    foilFeatures: [
      [
        { nl: 'Lichtgewicht & soepel', en: 'Lightweight & flexible' },
        {
          nl: 'Blijft stabiel op het whiteboard door het lage gewicht.',
          en: 'Stays stable on the whiteboard thanks to its low weight.',
        },
      ],
      [
        { nl: 'UV- en weerbestendig', en: 'UV- and weather-resistant' },
        {
          nl: 'Verkleurt niet in de volle zon bij de padelbanen.',
          en: 'Does not fade in full sun by the padel courts.',
        },
      ],
      [
        { nl: 'Magnetische kracht', en: 'Magnetic strength' },
        {
          nl: 'Hecht over het hele oppervlak — hoeken krullen niet om.',
          en: 'Holds across the full surface — corners do not curl.',
        },
      ],
      [
        { nl: 'Eenvoudig op te rollen', en: 'Easy to roll up' },
        {
          nl: 'Na het toernooi compact op te bergen in de bestuurskamer.',
          en: 'After the tournament, store it compactly in the clubhouse.',
        },
      ],
    ],
    specsTitle: { nl: 'Specificaties', en: 'Specifications' },
    specs: [
      [{ nl: 'Formaat', en: 'Size' }, { nl: '60 x 90 cm', en: '60 x 90 cm' }],
      [{ nl: 'Dikte', en: 'Thickness' }, { nl: '0,3 mm', en: '0.3 mm' }],
      [
        { nl: 'Bedrukking', en: 'Print' },
        { nl: 'Full colour (krasvast)', en: 'Full colour (scratch-resistant)' },
      ],
      [
        { nl: 'Toepassing', en: 'Use' },
        { nl: 'Tennis- en padel-formats', en: 'Tennis and padel formats' },
      ],
      [
        { nl: 'Ondergrond', en: 'Surface' },
        {
          nl: 'Ijzerhoudende / metalen vlakken',
          en: 'Ferrous / metal surfaces',
        },
      ],
    ],
    boardTitle: {
      nl: 'Magneetposter + verrijdbaar whiteboard',
      en: 'Magnetic poster + mobile whiteboard',
    },
    boardFeatures: [
      [
        { nl: 'Mobiel gemak', en: 'Mobile convenience' },
        {
          nl: 'Verplaats het speelschema van de bestuurskamer naar de baan.',
          en: 'Move the play schedule from the clubhouse to the court.',
        },
      ],
      [
        { nl: 'Flexibel wisselen', en: 'Flexible swapping' },
        {
          nl: 'Geen punaises of plakband dat loslaat in de wind.',
          en: 'No pins or tape that comes loose in the wind.',
        },
      ],
      [
        { nl: 'Interactief', en: 'Interactive' },
        {
          nl: 'Maak extra aantekeningen met een whiteboardmarker.',
          en: 'Add notes with a whiteboard marker.',
        },
      ],
      [
        { nl: 'Professionele uitstraling', en: 'Professional look' },
        {
          nl: 'Een strak 60x90 cm overzicht op de club.',
          en: 'A clean 60x90 cm overview at the club.',
        },
      ],
    ],
    nextTitle: {
      nl: 'Klaar voor de volgende stap?',
      en: 'Ready for the next step?',
    },
    nextBody: {
      nl: 'Ontdek welk clubpakket past bij jouw tennis- of padelvereniging.',
      en: 'Discover which club package fits your tennis or padel club.',
    },
  },
  app: {
    intro: {
      nl: 'De Leraren App is een complete digitale assistent speciaal ontwikkeld voor tennis- en padelcoaches. Met deze app heb je alle tools binnen handbereik om je trainingen te verbeteren en de voortgang van je spelers bij te houden.',
      en: 'The Coach App is a complete digital assistant built for tennis and padel coaches. With this app you have every tool at hand to improve your sessions and track player progress.',
    },
  },
};
