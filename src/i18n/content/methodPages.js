/** Bilingual copy for the Spelen / Leren / Sparen method pages. Use `ot(locale, node)` to pick nl/en strings. */
export { ot } from './overTof';

export const SPELEN_CONTENT = {
  hero: {
    title: { nl: 'Spelen', en: 'Play' },
    subtitle: {
      nl: 'Maak van elke training een avontuur met onze interactieve magneetposters en whiteboardtools.',
      en: 'Turn every training session into an adventure with our interactive magnet posters and whiteboard tools.',
    },
  },
  intro: {
    heading: { nl: 'Wat zit er in het Spelen pakket?', en: "What's in the Play package?" },
    cards: [
      {
        title: { nl: 'Whiteboard + tools', en: 'Whiteboard + tools' },
        desc: {
          nl: 'Stiften en markers om aantekeningen te maken en scores bij te houden.',
          en: 'Pens and markers to take notes and keep track of scores.',
        },
      },
      {
        title: { nl: 'Magneetposters', en: 'Magnet posters' },
        desc: {
          nl: 'Spelvormen en oefeningen in handig 60x90cm formaat, verpakt in een stevige bewaarkoker.',
          en: 'Game formats and exercises in a handy 60x90cm size, packed in a sturdy storage tube.',
        },
      },
      {
        title: { nl: 'magneetbuttons', en: 'Magnet buttons' },
        desc: {
          nl: 'Kleurrijke magneten om spelers te markeren en oefeningen interactief te maken.',
          en: 'Colourful magnets to mark players and make exercises interactive.',
        },
      },
      {
        title: { nl: 'Support', en: 'Support' },
        desc: {
          nl: 'Praktische instructie en begeleiding voor trainers, zodat je direct met de spelvormen aan de slag kunt en iedere les soepel verloopt.',
          en: 'Practical instructions and guidance for coaches, so you can get started with the game formats right away and every lesson runs smoothly.',
        },
      },
    ],
  },
  swirl: {
    heading: { nl: 'De Swirl: Regie over je eigen Training', en: 'The Swirl: Take Charge of Your Own Training' },
    intro1: {
      nl: 'De Swirl is een krachtige visuele tool om de voortgang van jonge tennissers in kaart te brengen. Het biedt talloze mogelijkheden voor trainers om interne competitie en motivatie toe te voegen aan de les.',
      en: 'The Swirl is a powerful visual tool to map the progress of young tennis players. It offers coaches countless ways to add internal competition and motivation to the lesson.',
    },
    callout: {
      nl: 'De Swirl is een visueel dashboard dat kinderen zeggenschap geeft over hun eigen ontwikkeling. In plaats van alleen maar opdrachten uit te voeren, maken ze bewuste keuzes over hun voortgang.',
      en: 'The Swirl is a visual dashboard that gives children a say in their own development. Instead of just carrying out tasks, they make conscious choices about their progress.',
    },
    section1: {
      title: { nl: 'Zelfsturend Leren', en: 'Self-directed Learning' },
      intro: {
        nl: 'De Swirl biedt kinderen de ruimte om hun eigen training vorm te geven:',
        en: 'The Swirl gives children the space to shape their own training:',
      },
      cards: [
        {
          title: { nl: 'Kiezen', en: 'Choose' },
          desc: {
            nl: 'Een kind kan aan het begin van de les een magneet plakken op een onderdeel dat hij die dag graag wil trainen.',
            en: 'At the start of the lesson, a child can place a magnet on a part they would like to train that day.',
          },
        },
        {
          title: { nl: 'Plannen', en: 'Plan' },
          desc: {
            nl: 'Kinderen kunnen aangeven wat ze de volgende week willen aanpakken, waardoor ze alvast vooruitkijken.',
            en: 'Children can indicate what they want to tackle next week, so they already look ahead.',
          },
        },
        {
          title: { nl: 'Reflecteren', en: 'Reflect' },
          desc: {
            nl: 'De magneetjes werken als een thermometer. Een kind kan aanwijzen waar het goed gaat en waar nog hulp nodig is.',
            en: 'The magnets work like a thermometer. A child can point out what is going well and where help is still needed.',
          },
        },
      ],
    },
    section2: {
      title: { nl: 'Spelenderwijs Groeien: De Swirl-Race', en: 'Growing Through Play: The Swirl Race' },
      intro: {
        nl: 'Naast de zelfstandige keuzes kan de trainer de kaart gebruiken om de motivatie te verhogen met wedstrijdjes.',
        en: 'Besides independent choices, the coach can use the board to boost motivation with mini competitions.',
      },
      individual: {
        title: { nl: 'Individuele Race naar de Kern', en: 'Individual Race to the Core' },
        items: [
          {
            nl: 'Iedereen start bij vakje 1 en volgt de spiraalvormige route (30 stappen: 3 rondes van 10)',
            en: 'Everyone starts at square 1 and follows the spiral route (30 steps: 3 rounds of 10)',
          },
          { nl: 'Winst: Zet 2 stappen vooruit richting de kern', en: 'Win: Move 2 steps forward towards the core' },
          { nl: 'Verlies: Zet 1 stap vooruit', en: 'Loss: Move 1 step forward' },
          {
            nl: 'Wie bereikt als eerste de gouden tennisbal in het midden?',
            en: 'Who is the first to reach the golden tennis ball in the middle?',
          },
        ],
      },
      team: {
        title: { nl: 'Team-Challenge: Samen Sterk', en: 'Team Challenge: Stronger Together' },
        items: [
          { nl: 'Verdeel de groep in twee teams (bijv. Rood en Blauw)', en: 'Split the group into two teams (e.g. Red and Blue)' },
          {
            nl: 'Elk team heeft één magneet die de route aflegt op basis van teamprestaties',
            en: 'Each team has one magnet that travels the route based on team performance',
          },
          { nl: 'Teamwinst: Magneet gaat 2 stappen vooruit', en: 'Team win: magnet moves 2 steps forward' },
          { nl: 'Verlies: Magneet gaat 1 stap terug', en: 'Loss: magnet moves 1 step back' },
        ],
      },
      tip: {
        nl: 'Tip voor de trainer: Voeg een "Power-up" toe! Als kinderen een opdracht uitvoeren die bij het specifieke cijfer van dat vakje hoort (bijv. een compliment geven bij vakje 9: Fairplay), mogen ze een extra stap zetten.',
        en: 'Tip for the coach: Add a "Power-up"! If children complete a task linked to the specific number on that square (e.g. giving a compliment at square 9: Fair Play), they may take an extra step.',
      },
    },
    section3: {
      title: { nl: 'De "Thema-Bingo" Wedstrijdvorm', en: 'The "Theme Bingo" Competition Format' },
      intro: {
        nl: "De trainer koppelt de wedstrijdjes aan specifieke thema's op de kaart (bijv. Netspel of Fairplay).",
        en: 'The coach links the mini competitions to specific themes on the board (e.g. Net Play or Fair Play).',
      },
      howHeading: { nl: 'Hoe het werkt:', en: 'How it works:' },
      how1: {
        nl: "Speel korte tie-breaks. Als een leerling wint én een punt scoort dat past bij het thema van die baan (bijv. een volley bij 'Netspel'), mag hij/zij een extra stap zetten op de Swirl.",
        en: "Play short tie-breaks. If a player wins and scores a point that matches the theme of that court (e.g. a volley for 'Net Play'), they may take an extra step on the Swirl.",
      },
      how2: {
        nl: 'Dit stimuleert kinderen om niet alleen te winnen, maar ook de geleerde technieken uit de verschillende fases toe te passen!',
        en: 'This encourages children not only to win, but also to apply the techniques learned in the different phases!',
      },
    },
    why: {
      title: { nl: 'Waarom dit werkt', en: 'Why this works' },
      body: {
        nl: 'Door de combinatie van zeggenschap (vrij kiezen) en gamification (de race naar het midden) ontstaat er een unieke leeromgeving. Kinderen zijn meer betrokken omdat ze zelf hebben mogen kiezen waar ze aan werken, en ze zijn extra gemotiveerd om die skills in de wedstrijdjes te laten zien om hun magneet dichter bij de kern te krijgen.',
        en: 'The combination of ownership (free choice) and gamification (the race to the middle) creates a unique learning environment. Children are more engaged because they got to choose what to work on themselves, and they are extra motivated to show those skills in the mini competitions to bring their magnet closer to the core.',
      },
    },
  },
  cta: {
    title: { nl: 'Klaar voor leren?', en: 'Ready to learn?' },
    body: {
      nl: 'Ontdek onze inspirerende leermiddelen waarmee kinderen meer bewegen en spelenderwijs groeien!',
      en: 'Discover our inspiring learning tools that get children moving more and growing through play!',
    },
    ctaLeren: { nl: 'Bekijk Leren →', en: 'View Learn →' },
    ctaWebshop: { nl: 'Bekijk Webshop', en: 'View Webshop' },
  },
};

export const LEREN_CONTENT = {
  hero: {
    title: { nl: 'Leren', en: 'Learn' },
    subtitle: {
      nl: 'Ontdek onze inspirerende leermiddelen. Kennis opdoen gaat vanzelf!',
      en: 'Discover our inspiring learning tools. Gaining knowledge happens naturally!',
    },
  },
  intro: {
    heading: { nl: 'Wat zit er in het Leren pakket?', en: "What's in the Learn package?" },
    body: {
      nl: 'Met onze inspirerende leermiddelen wordt je jeugdprogramma een ontdekkingsreis waarin kinderen spelenderwijs inzicht krijgen in inzet, gedrag en spelregels.',
      en: 'With our inspiring learning tools, your youth programme becomes a voyage of discovery where children gain insight into effort, behaviour and the rules of the game through play.',
    },
    cards: [
      {
        title: { nl: 'Kennis producten', en: 'Knowledge products' },
        desc: {
          nl: 'Tenniskennis wordt kennis - kinderen kennis opdoen op een leuke manier.',
          en: 'Tennis knowledge becomes knowledge — children gain knowledge in a fun way.',
        },
      },
      {
        title: { nl: 'Ja-Nee kaarten', en: 'Yes-No cards' },
        desc: {
          nl: 'Interactieve vragenkaarten waarmee kinderen hun kennis kunnen testen op een leuke manier.',
          en: 'Interactive question cards children can use to test their knowledge in a fun way.',
        },
      },
      {
        title: { nl: 'Zoek de Schat', en: 'Find the Treasure' },
        desc: {
          nl: 'Een spannend spel dat kinderen uitdaagt om al zoekend nieuwe vaardigheden te ontdekken.',
          en: 'An exciting game that challenges children to discover new skills while searching.',
        },
      },
      {
        title: { nl: 'Support', en: 'Support' },
        desc: {
          nl: 'Instructie en begeleiding voor trainers, zodat je de kennisproducten direct effectief inzet op de baan.',
          en: 'Instructions and guidance for coaches, so you can put the knowledge products to effective use on court right away.',
        },
      },
    ],
  },
  why: {
    heading: { nl: 'Waarom interactief leren?', en: 'Why interactive learning?' },
    items: [
      {
        title: { nl: 'Beter onthouden', en: 'Better retention' },
        desc: {
          nl: 'Door actief bezig te zijn met de stof onthouden kinderen meer dan bij passief luisteren.',
          en: 'By actively engaging with the material, children retain more than by passively listening.',
        },
      },
      {
        title: { nl: 'Meer plezier', en: 'More fun' },
        desc: {
          nl: "Leren voelt niet als 'moeten' maar als 'willen' wanneer het een spel wordt.",
          en: "Learning doesn't feel like a chore but like something they want to do once it becomes a game.",
        },
      },
      {
        title: { nl: 'Samen leren', en: 'Learning together' },
        desc: {
          nl: 'Onze materialen stimuleren samenwerking en competitie in de groep.',
          en: 'Our materials encourage collaboration and competition within the group.',
        },
      },
      {
        title: { nl: 'Zichtbare voortgang', en: 'Visible progress' },
        desc: {
          nl: 'Kinderen zien direct wat ze al weten en waar ze nog kunnen groeien.',
          en: 'Children can see straight away what they already know and where they can still grow.',
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
    ctaSparen: { nl: 'Bekijk Sparen →', en: 'View Save →' },
    ctaWebshop: { nl: 'Bekijk Webshop', en: 'View Webshop' },
  },
};

export const SPAREN_CONTENT = {
  hero: {
    title: { nl: 'Sparen', en: 'Save' },
    subtitle: {
      nl: 'Elk punt telt mee! Motiveer kinderen met beloningen en de TOF Score.',
      en: 'Every point counts! Motivate children with rewards and the TOF Score.',
    },
  },
  intro: {
    heading: { nl: 'Wat zit er in het Sparen pakket?', en: "What's in the Save package?" },
    body: {
      nl: 'Met het spaarsysteem blijven kinderen gemotiveerd om vaker te spelen en hun doelen te bereiken. Elk punt brengt ze dichter bij een beloning!',
      en: 'With the savings system, children stay motivated to play more often and reach their goals. Every point brings them closer to a reward!',
    },
    cards: [
      {
        title: { nl: 'TOF Score in de KNLTB Leraren App', en: 'TOF Score in the KNLTB Coach App' },
        desc: {
          nl: 'Houd de voortgang van elke speler digitaal bij en beloon hun inzet met de officiële TOF Score.',
          en: "Track each player's progress digitally and reward their effort with the official TOF Score.",
        },
      },
      {
        title: { nl: 'Buttons en Bandjes', en: 'Buttons and Bands' },
        desc: {
          nl: 'Fysieke beloningen die kinderen trots dragen, met zichtbare status door meedoen.',
          en: 'Physical rewards children proudly wear, showing visible status through participation.',
        },
      },
      {
        title: { nl: 'TOF score magneetposter', en: 'TOF Score magnet poster' },
        desc: {
          nl: 'Kinderen noteren zelf de behaalde scores.',
          en: 'Children note down their own scores.',
        },
      },
      {
        title: { nl: 'Support', en: 'Support' },
        desc: {
          nl: 'Praktische instructie en begeleiding voor trainers, zodat je direct met de producten aan de slag kunt en iedere les soepel verloopt.',
          en: 'Practical instructions and guidance for coaches, so you can start using the products right away and every lesson runs smoothly.',
        },
      },
    ],
  },
  how: {
    heading: { nl: 'Hoe werkt het sparen?', en: 'How does saving work?' },
    steps: [
      {
        title: { nl: 'Punten verdienen', en: 'Earn points' },
        desc: {
          nl: 'Kinderen verdienen punten bij clubactiviteiten en vrij spelen.',
          en: 'Children earn points at club activities and free play.',
        },
      },
      {
        title: { nl: 'Beloningen ontvangen', en: 'Receive rewards' },
        desc: {
          nl: 'Bij behaalde mijlpalen ontvangen kinderen een leuke beloning.',
          en: 'When milestones are reached, children receive a fun reward.',
        },
      },
    ],
    goalTitle: { nl: 'Het 365-doel', en: 'The 365 goal' },
    goalBody: {
      nl: 'Het ultieme doel is om 365 punten per jaar te behalen - dat is gemiddeld één punt per dag! Dit stimuleert kinderen om het hele jaar door actief te blijven en de weg naar de club te vinden.',
      en: 'The ultimate goal is to earn 365 points per year — that is an average of one point per day! This encourages children to stay active all year round and keep finding their way to the club.',
    },
  },
  why: {
    heading: { nl: 'Waarom sparen werkt', en: 'Why saving works' },
    items: [
      {
        title: { nl: 'Intrinsieke motivatie', en: 'Intrinsic motivation' },
        desc: {
          nl: 'Kinderen willen zelf beter worden en meer punten halen.',
          en: 'Children want to improve themselves and earn more points.',
        },
      },
      {
        title: { nl: 'Zichtbare erkenning', en: 'Visible recognition' },
        desc: {
          nl: 'Als leuke beloning voor meedoen, inzet en gedrag.',
          en: 'A fun reward for participation, effort and behaviour.',
        },
      },
      {
        title: { nl: 'Clubbinding', en: 'Club bonding' },
        desc: {
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
      en: 'Check out all products for Play, Learn and Save in our webshop and give your youth programme a boost!',
    },
    ctaWebshop: { nl: 'Bekijk Webshop →', en: 'View Webshop →' },
    ctaBack: { nl: 'Terug naar Spelen', en: 'Back to Play' },
  },
};
