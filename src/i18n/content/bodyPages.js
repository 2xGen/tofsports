/** Bilingual copy for the Spelen / Leren / Sparen body pages. Use `ot(locale, node)` from overTof.js. */

export const SPELEN = {
  hero: {
    title: { nl: 'Spelen', en: 'Play' },
    subtitle: {
      nl: 'Maak van elke training een avontuur met onze interactieve magneetposters en whiteboardtools.',
      en: 'Turn every training into an adventure with our interactive magnetic posters and whiteboard tools.',
    },
  },
  introTitle: { nl: 'Wat zit er in het Spelen pakket?', en: "What's in the Play package?" },
  cards: [
    {
      title: { nl: 'Whiteboard + tools', en: 'Whiteboard + tools' },
      body: {
        nl: 'Stiften en markers om aantekeningen te maken en scores bij te houden.',
        en: 'Markers and pens to make notes and keep track of scores.',
      },
    },
    {
      title: { nl: 'Magneetposters', en: 'Magnetic posters' },
      body: {
        nl: 'Spelvormen en oefeningen in handig 60x90cm formaat, verpakt in een stevige bewaarkoker.',
        en: 'Games and exercises in a handy 60x90cm size, packed in a sturdy storage tube.',
      },
    },
    {
      title: { nl: 'magneetbuttons', en: 'Magnet buttons' },
      body: {
        nl: 'Kleurrijke magneten om spelers te markeren en oefeningen interactief te maken.',
        en: 'Colourful magnets to mark players and make exercises interactive.',
      },
    },
    {
      title: { nl: 'Support', en: 'Support' },
      body: {
        nl: 'Praktische instructie en begeleiding voor trainers, zodat je direct met de spelvormen aan de slag kunt en iedere les soepel verloopt.',
        en: 'Practical instruction and guidance for coaches, so you can start using the game formats right away and every lesson runs smoothly.',
      },
    },
  ],
  swirl: {
    title: { nl: 'De Swirl: Regie over je eigen Training', en: 'The Swirl: In charge of your own training' },
    intro: {
      nl: 'De Swirl is een krachtige visuele tool om de voortgang van jonge tennissers in kaart te brengen. Het biedt talloze mogelijkheden voor trainers om interne competitie en motivatie toe te voegen aan de les.',
      en: "The Swirl is a powerful visual tool to map the progress of young tennis players. It gives coaches countless ways to add internal competition and motivation to the lesson.",
    },
    callout: {
      nl: 'De Swirl is een visueel dashboard dat kinderen zeggenschap geeft over hun eigen ontwikkeling. In plaats van alleen maar opdrachten uit te voeren, maken ze bewuste keuzes over hun voortgang.',
      en: 'The Swirl is a visual dashboard that gives children a say in their own development. Instead of just carrying out tasks, they make conscious choices about their progress.',
    },
    step1: {
      title: { nl: 'Zelfsturend Leren', en: 'Self-directed learning' },
      intro: {
        nl: 'De Swirl biedt kinderen de ruimte om hun eigen training vorm te geven:',
        en: 'The Swirl gives children the space to shape their own training:',
      },
      cards: [
        {
          title: { nl: 'Kiezen', en: 'Choose' },
          body: {
            nl: 'Een kind kan aan het begin van de les een magneet plakken op een onderdeel dat hij die dag graag wil trainen.',
            en: 'At the start of the lesson a child can place a magnet on a part they want to train that day.',
          },
        },
        {
          title: { nl: 'Plannen', en: 'Plan' },
          body: {
            nl: 'Kinderen kunnen aangeven wat ze de volgende week willen aanpakken, waardoor ze alvast vooruitkijken.',
            en: 'Children can indicate what they want to work on next week, so they look ahead.',
          },
        },
        {
          title: { nl: 'Reflecteren', en: 'Reflect' },
          body: {
            nl: 'De magneetjes werken als een thermometer. Een kind kan aanwijzen waar het goed gaat en waar nog hulp nodig is.',
            en: 'The magnets work like a thermometer. A child can point out what is going well and where help is still needed.',
          },
        },
      ],
    },
    step2: {
      title: { nl: 'Spelenderwijs Groeien: De Swirl-Race', en: 'Growing through play: the Swirl race' },
      intro: {
        nl: 'Naast de zelfstandige keuzes kan de trainer de kaart gebruiken om de motivatie te verhogen met wedstrijdjes.',
        en: 'Alongside independent choices, the coach can use the board to boost motivation with mini competitions.',
      },
      individual: {
        title: { nl: 'Individuele Race naar de Kern', en: 'Individual race to the centre' },
        items: [
          {
            nl: 'Iedereen start bij vakje 1 en volgt de spiraalvormige route (30 stappen: 3 rondes van 10)',
            en: 'Everyone starts at square 1 and follows the spiral route (30 steps: 3 rounds of 10)',
          },
          { nl: '<strong>Winst:</strong> Zet 2 stappen vooruit richting de kern', en: '<strong>Win:</strong> Move 2 steps forward towards the centre' },
          { nl: '<strong>Verlies:</strong> Zet 1 stap vooruit', en: '<strong>Loss:</strong> Move 1 step forward' },
          { nl: 'Wie bereikt als eerste de gouden tennisbal in het midden?', en: 'Who reaches the golden tennis ball in the middle first?' },
        ],
      },
      team: {
        title: { nl: 'Team-Challenge: Samen Sterk', en: 'Team challenge: stronger together' },
        items: [
          { nl: 'Verdeel de groep in twee teams (bijv. Rood en Blauw)', en: 'Split the group into two teams (e.g. Red and Blue)' },
          { nl: 'Elk team heeft één magneet die de route aflegt op basis van teamprestaties', en: 'Each team has one magnet that moves along the route based on team performance' },
          { nl: '<strong>Teamwinst:</strong> Magneet gaat 2 stappen vooruit', en: '<strong>Team win:</strong> Magnet moves 2 steps forward' },
          { nl: '<strong>Verlies:</strong> Magneet gaat 1 stap terug', en: '<strong>Loss:</strong> Magnet moves 1 step back' },
        ],
      },
      tip: {
        nl: 'Voeg een "Power-up" toe! Als kinderen een opdracht uitvoeren die bij het specifieke cijfer van dat vakje hoort (bijv. een compliment geven bij vakje 9: Fairplay), mogen ze een extra stap zetten.',
        en: 'Add a "power-up"! When children complete a task that matches the number of that square (e.g. giving a compliment on square 9: Fair play), they get to take an extra step.',
      },
    },
    step3: {
      title: { nl: 'De "Thema-Bingo" Wedstrijdvorm', en: 'The "theme bingo" match format' },
      intro: {
        nl: "De trainer koppelt de wedstrijdjes aan specifieke thema's op de kaart (bijv. Netspel of Fairplay).",
        en: 'The coach links the mini matches to specific themes on the board (e.g. net play or fair play).',
      },
      howTitle: { nl: 'Hoe het werkt:', en: 'How it works:' },
      body1: {
        nl: "Speel korte tie-breaks. Als een leerling wint én een punt scoort dat past bij het thema van die baan (bijv. een volley bij 'Netspel'), mag hij/zij een extra stap zetten op de Swirl.",
        en: "Play short tie-breaks. If a player wins and scores a point that matches the theme of that court (e.g. a volley for 'net play'), they get to take an extra step on the Swirl.",
      },
      body2: {
        nl: 'Dit stimuleert kinderen om niet alleen te winnen, maar ook de geleerde technieken uit de verschillende fases toe te passen!',
        en: 'This encourages children not just to win, but also to apply the techniques learned in the different phases!',
      },
    },
    why: {
      title: { nl: 'Waarom dit werkt', en: 'Why this works' },
      body: {
        nl: 'Door de combinatie van <strong>zeggenschap</strong> (vrij kiezen) en <strong>gamification</strong> (de race naar het midden) ontstaat er een unieke leeromgeving. Kinderen zijn meer betrokken omdat ze zelf hebben mogen kiezen waar ze aan werken, en ze zijn extra gemotiveerd om die skills in de wedstrijdjes te laten zien om hun magneet dichter bij de kern te krijgen.',
        en: 'The combination of <strong>ownership</strong> (free choice) and <strong>gamification</strong> (the race to the centre) creates a unique learning environment. Children are more engaged because they got to choose what to work on themselves, and they are extra motivated to show those skills in the mini matches to get their magnet closer to the centre.',
      },
    },
  },
  cta: {
    title: { nl: 'Klaar voor leren?', en: 'Ready to learn?' },
    body: {
      nl: 'Ontdek onze inspirerende leermiddelen waarmee kinderen meer bewegen en spelenderwijs groeien!',
      en: 'Discover our inspiring learning tools that get children moving more and growing through play!',
    },
    primary: { nl: 'Bekijk Leren →', en: 'View Learn →' },
    secondary: { nl: 'Bekijk Webshop', en: 'View webshop' },
  },
};

export const LEREN = {
  hero: {
    title: { nl: 'Leren', en: 'Learn' },
    subtitle: {
      nl: 'Ontdek onze inspirerende leermiddelen. Kennis opdoen gaat vanzelf!',
      en: 'Discover our inspiring learning tools. Gaining knowledge happens naturally!',
    },
  },
  introTitle: { nl: 'Wat zit er in het Leren pakket?', en: "What's in the Learn package?" },
  introBody: {
    nl: 'Met onze inspirerende leermiddelen wordt je jeugdprogramma een ontdekkingsreis waarin kinderen spelenderwijs inzicht krijgen in inzet, gedrag en spelregels.',
    en: 'With our inspiring learning tools, your youth programme becomes a journey of discovery where children playfully gain insight into effort, behaviour and the rules of the game.',
  },
  cards: [
    {
      title: { nl: 'Kennis producten', en: 'Knowledge products' },
      body: {
        nl: 'Tenniskennis wordt kennis - kinderen kennis opdoen op een leuke manier.',
        en: 'Tennis knowledge made fun — children gain knowledge in an enjoyable way.',
      },
    },
    {
      title: { nl: 'Ja-Nee kaarten', en: 'Yes-no cards' },
      body: {
        nl: 'Interactieve vragenkaarten waarmee kinderen hun kennis kunnen testen op een leuke manier.',
        en: 'Interactive question cards that let children test their knowledge in a fun way.',
      },
    },
    {
      title: { nl: 'Zoek de Schat', en: 'Treasure hunt' },
      body: {
        nl: 'Een spannend spel dat kinderen uitdaagt om al zoekend nieuwe vaardigheden te ontdekken.',
        en: 'An exciting game that challenges children to discover new skills while searching.',
      },
    },
    {
      title: { nl: 'Support', en: 'Support' },
      body: {
        nl: 'Instructie en begeleiding voor trainers, zodat je de kennisproducten direct effectief inzet op de baan.',
        en: 'Instruction and guidance for coaches, so you can use the knowledge products effectively on court right away.',
      },
    },
  ],
  why: {
    title: { nl: 'Waarom interactief leren?', en: 'Why interactive learning?' },
    items: [
      {
        title: { nl: 'Beter onthouden', en: 'Better retention' },
        body: {
          nl: 'Door actief bezig te zijn met de stof onthouden kinderen meer dan bij passief luisteren.',
          en: 'By actively engaging with the material, children remember more than by passively listening.',
        },
      },
      {
        title: { nl: 'Meer plezier', en: 'More fun' },
        body: {
          nl: "Leren voelt niet als 'moeten' maar als 'willen' wanneer het een spel wordt.",
          en: "Learning doesn't feel like a chore but like something they want to do when it becomes a game.",
        },
      },
      {
        title: { nl: 'Samen leren', en: 'Learning together' },
        body: {
          nl: 'Onze materialen stimuleren samenwerking en competitie in de groep.',
          en: 'Our materials encourage cooperation and competition within the group.',
        },
      },
      {
        title: { nl: 'Zichtbare voortgang', en: 'Visible progress' },
        body: {
          nl: 'Kinderen zien direct wat ze al weten en waar ze nog kunnen groeien.',
          en: 'Children can immediately see what they already know and where they can still grow.',
        },
      },
    ],
  },
  cta: {
    title: { nl: 'Klaar voor sparen?', en: 'Ready to save?' },
    body: {
      nl: 'Kinderen komen vaker naar de club, bewegen meer en sparen voor TOF score punten voor leuke beloningen.',
      en: 'Children come to the club more often, move more, and save TOF Score points for fun rewards.',
    },
    primary: { nl: 'Bekijk Sparen →', en: 'View Save →' },
    secondary: { nl: 'Bekijk Webshop', en: 'View webshop' },
  },
};

export const SPAREN = {
  hero: {
    title: { nl: 'Sparen', en: 'Save' },
    subtitle: {
      nl: 'Elk punt telt mee! Motiveer kinderen met beloningen en de TOF Score.',
      en: 'Every point counts! Motivate children with rewards and the TOF Score.',
    },
  },
  introTitle: { nl: 'Wat zit er in het Sparen pakket?', en: "What's in the Save package?" },
  introBody: {
    nl: 'Met het spaarsysteem blijven kinderen gemotiveerd om vaker te spelen en hun doelen te bereiken. Elk punt brengt ze dichter bij een beloning!',
    en: 'With the savings system, children stay motivated to play more often and reach their goals. Every point brings them closer to a reward!',
  },
  cards: [
    {
      title: { nl: 'TOF Score in de KNLTB Leraren App', en: 'TOF Score in the KNLTB Coach App' },
      body: {
        nl: 'Houd de voortgang van elke speler digitaal bij en beloon hun inzet met de officiële TOF Score.',
        en: "Track each player's progress digitally and reward their effort with the official TOF Score.",
      },
    },
    {
      title: { nl: 'Buttons en Bandjes', en: 'Buttons and wristbands' },
      body: {
        nl: 'Fysieke beloningen die kinderen trots dragen, met zichtbare status door meedoen.',
        en: 'Physical rewards that children proudly wear, showing visible status for taking part.',
      },
    },
    {
      title: { nl: 'TOF score magneetposter', en: 'TOF Score magnetic poster' },
      body: {
        nl: 'Kinderen noteren zelf de behaalde scores.',
        en: 'Children note down their own scores.',
      },
    },
    {
      title: { nl: 'Support', en: 'Support' },
      body: {
        nl: 'Praktische instructie en begeleiding voor trainers, zodat je direct met de producten aan de slag kunt en iedere les soepel verloopt.',
        en: 'Practical instruction and guidance for coaches, so you can start using the products right away and every lesson runs smoothly.',
      },
    },
  ],
  how: {
    title: { nl: 'Hoe werkt het sparen?', en: 'How does saving work?' },
    steps: [
      {
        title: { nl: 'Punten verdienen', en: 'Earn points' },
        body: {
          nl: 'Kinderen verdienen punten bij clubactiviteiten en vrij spelen.',
          en: 'Children earn points at club activities and free play.',
        },
      },
      {
        title: { nl: 'Beloningen ontvangen', en: 'Receive rewards' },
        body: {
          nl: 'Bij behaalde mijlpalen ontvangen kinderen een leuke beloning.',
          en: 'When they reach milestones, children receive a fun reward.',
        },
      },
    ],
    goalTitle: { nl: 'Het 365-doel', en: 'The 365 goal' },
    goalBody: {
      nl: 'Het ultieme doel is om 365 punten per jaar te behalen - dat is gemiddeld één punt per dag! Dit stimuleert kinderen om het hele jaar door actief te blijven en de weg naar de club te vinden.',
      en: 'The ultimate goal is to reach 365 points a year — that is an average of one point per day! This encourages children to stay active all year round and keep finding their way to the club.',
    },
  },
  why: {
    title: { nl: 'Waarom sparen werkt', en: 'Why saving works' },
    items: [
      {
        title: { nl: 'Intrinsieke motivatie', en: 'Intrinsic motivation' },
        body: {
          nl: 'Kinderen willen zelf beter worden en meer punten halen.',
          en: 'Children want to improve themselves and earn more points.',
        },
      },
      {
        title: { nl: 'Zichtbare erkenning', en: 'Visible recognition' },
        body: {
          nl: 'Als leuke beloning voor meedoen, inzet en gedrag.',
          en: 'A fun reward for participation, effort and behaviour.',
        },
      },
      {
        title: { nl: 'Clubbinding', en: 'Club bonding' },
        body: {
          nl: 'Kinderen komen vaker naar de club, ook buiten de lessen om.',
          en: 'Children come to the club more often, even outside of lessons.',
        },
      },
    ],
  },
  cta: {
    title: { nl: 'Alles voor jouw club', en: 'Everything for your club' },
    body: {
      nl: 'Bekijk alle producten voor Spelen, Leren en Sparen in onze webshop en geef je jeugdprogramma een boost!',
      en: 'Check out all Play, Learn and Save products in our webshop and give your youth programme a boost!',
    },
    primary: { nl: 'Bekijk Webshop →', en: 'View webshop →' },
    secondary: { nl: 'Terug naar Spelen', en: 'Back to Play' },
  },
};
