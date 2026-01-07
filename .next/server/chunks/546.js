"use strict";exports.id=546,exports.ids=[546],exports.modules={6343:(e,t,a)=>{a.d(t,{Z:()=>n});let n=(0,a(2881).Z)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},3999:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(326),r=a(7577),s=a(295),i=a(4749),o=a(3965);class l extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){let a=(0,r.useId)(),s=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,r.useContext)(o._);return(0,r.useInsertionEffect)(()=>{let{width:e,height:n,top:r,left:o}=i.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=a;let l=document.createElement("style");return d&&(l.nonce=d),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${r}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),(0,n.jsx)(l,{isPresent:t,childRef:s,sizeRef:i,children:r.cloneElement(e,{ref:s})})}let p=({children:e,initial:t,isPresent:a,onExitComplete:o,custom:l,presenceAffectsLayout:p,mode:m})=>{let c=(0,i.h)(g),u=(0,r.useId)(),b=(0,r.useCallback)(e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;o&&o()},[c,o]),k=(0,r.useMemo)(()=>({id:u,initial:t,isPresent:a,custom:l,onExitComplete:b,register:e=>(c.set(e,!1),()=>c.delete(e))}),p?[Math.random(),b]:[a,b]);return(0,r.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[a]),r.useEffect(()=>{a||c.size||!o||o()},[a]),"popLayout"===m&&(e=(0,n.jsx)(d,{isPresent:a,children:e})),(0,n.jsx)(s.O.Provider,{value:k,children:e})};function g(){return new Map}var m=a(339),c=a(7941);let u=e=>e.key||"";function b(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var k=a(2482);let v=({children:e,exitBeforeEnter:t,custom:a,initial:s=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:d="sync"})=>{(0,c.k)(!t,"Replace exitBeforeEnter with mode='wait'");let g=(0,r.useMemo)(()=>b(e),[e]),v=g.map(u),j=(0,r.useRef)(!0),h=(0,r.useRef)(g),f=(0,i.h)(()=>new Map),[w,E]=(0,r.useState)(g),[T,S]=(0,r.useState)(g);(0,k.L)(()=>{j.current=!1,h.current=g;for(let e=0;e<T.length;e++){let t=u(T[e]);v.includes(t)?f.delete(t):!0!==f.get(t)&&f.set(t,!1)}},[T,v.length,v.join("-")]);let O=[];if(g!==w){let e=[...g];for(let t=0;t<T.length;t++){let a=T[t],n=u(a);v.includes(n)||(e.splice(t,0,a),O.push(a))}"wait"===d&&O.length&&(e=O),S(b(e)),E(g);return}let{forceRender:x}=(0,r.useContext)(m.p);return(0,n.jsx)(n.Fragment,{children:T.map(e=>{let t=u(e),r=g===T||v.includes(t);return(0,n.jsx)(p,{isPresent:r,initial:(!j.current||!!s)&&void 0,custom:r?void 0:a,presenceAffectsLayout:l,mode:d,onExitComplete:r?void 0:()=>{if(!f.has(t))return;f.set(t,!0);let e=!0;f.forEach(t=>{t||(e=!1)}),e&&(null==x||x(),S(h.current),o&&o())},children:e},t)})})};var j=a(270),h=a(4019),f=a(1561);let w=({isOpen:e,onClose:t,productName:a,rules:r})=>r?n.jsx(v,{children:e&&n.jsx(n.Fragment,{children:n.jsx(j.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",children:(0,n.jsxs)(j.E.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:e=>e.stopPropagation(),className:"bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col",children:[(0,n.jsxs)("div",{className:"relative text-gray-800 p-6 md:p-8 flex items-center justify-between overflow-hidden",style:{background:"linear-gradient(to bottom right, rgba(180, 255, 200, 0.4), rgba(197, 223, 223, 0.5), rgba(62, 200, 188, 0.3))"},children:[n.jsx("h2",{className:"text-2xl md:text-4xl font-bold relative z-10",children:a}),n.jsx(f.z,{onClick:t,variant:"ghost",size:"icon",className:"text-gray-800 hover:bg-white/30 relative z-10",children:n.jsx(h.Z,{className:"h-6 w-6"})})]}),n.jsx("div",{className:"overflow-y-auto flex-1 p-6 md:p-8",children:n.jsx("div",{className:"prose prose-lg max-w-none",children:r.split("\n").map((e,t)=>{let a=/^[A-Z][A-Z\s&]+$/.test(e.trim())&&e.trim().length>3&&e.trim().length<50,r=e.trim().startsWith("•")||e.trim().startsWith("-");return""===e.trim()?n.jsx("div",{className:"h-4"},t):a?n.jsx("h3",{className:"text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0",children:e.trim()},t):r||/^\d+\./.test(e.trim())?n.jsx("p",{className:"text-gray-700 mb-2 ml-4",children:e.trim()},t):n.jsx("p",{className:"text-gray-700 mb-4 leading-relaxed",children:e.trim()},t)})})}),n.jsx("div",{className:"border-t border-gray-200 p-6 bg-gray-50",children:n.jsx(f.z,{onClick:t,className:"w-full bg-orange-500 hover:bg-orange-600 text-white font-bold",size:"lg",children:"Sluiten"})})]})})})}):null},1561:(e,t,a)=>{a.d(t,{z:()=>p});var n=a(326),r=a(1175),s=a(4214),i=a(9360),o=a(7577),l=a.n(o);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=l().forwardRef(({className:e,variant:t,size:a,asChild:i=!1,...o},l)=>{let p=i?s.g7:"button";return n.jsx(p,{className:(0,r.cn)(d({variant:t,size:a,className:e})),ref:l,...o})});p.displayName="Button"},7891:(e,t,a)=>{a.d(t,{O:()=>n,V:()=>r});let n=[{id:"piramide",name:"PIRAMIDE TENNIS",category:"tennis",ageGroup:"Rood & Oranje (t/m 10-11 jaar)",description:"De strijd om de top \xe9n de actie! Daag spelers naast of boven je uit om te klimmen in de piramide. Het gaat niet alleen om wie bovenaan eindigt, maar ook om wie de meeste 'klimacties' maakt en de meeste wedstrijden speelt. Omdat elke gespeelde punt direct wordt bijgeschreven op jouw TOF score, is vaker spelen belangrijker dan winnen. Wat is jouw status vandaag?",detailedRules:`PIRAMIDE TENNIS
Offici\xeble Spelregels & Handleiding

INTRODUCTIE
PIRAMIDE TENNIS is een dynamisch tennisformat waarbij spelers strijden om de top van de piramide. Daag je teamgenoten uit, klim naar de top of word de koning van de actie! In dit format draait het om winnen, stijgen en zoveel mogelijk spelen.

Het doel: Stijg in de piramide door wedstrijden te winnen en word uiteindelijk de nummer 1, of win door de meeste actie te cre\xebren!

Dit format is perfect voor:
• Tennisverenigingen en tennisscholen
• Jeugdtrainingen en clinics
• Toernooien en events
• Groepen van 8 tot 55+ spelers

BENODIGDE MATERIALEN
• Magneetbord: 60cm x 90cm magnetische poster op whiteboard (rijdbaar op de tennisbaan)
• Magneetbuttons: Witte buttons voor elke speler
• Watervaste stift: Voor het schrijven van namen
• Alcohol: Voor het schoonmaken van de buttons
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
• De verliezer daalt \xe9\xe9n of meerdere posities

3. Actie
• Word je uitgedaagd? Verdedig dan direct je positie op de baan
• Elke gespeelde wedstrijd telt mee voor je TOF score
• Hoe meer je speelt, hoe hoger je TOF score status

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
• Elke wedstrijd telt mee voor je TOF score!

BASISSPELVERLOOP
Spelverloop in stappen:

1. Voorbereiding
• Verdeel alle spelers over de piramide (van boven naar beneden)
• Schrijf namen op buttons en plaats ze op het bord
• Bepaal de wedstrijdvorm (aantal punten per wedstrijd)
• Bepaal welke winnaar categorie(\xebn) je wilt gebruiken

2. Spelen
• Spelers kunnen elkaar uitdagen (naast of boven)
• Korte wedstrijden: eerste tot 7 punten (trainer kan dit aanpassen)
• Winnaar stijgt, verliezer daalt
• Elke gespeelde wedstrijd wordt bijgeschreven op TOF score

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
Elke gespeelde wedstrijd telt mee voor je TOF score:
• Win of verlies: elke punt telt
• Hoe meer je speelt, hoe hoger je TOF score
• Streef naar XP 100, 500 of zelfs 1000 punten
• De Marathon winnaar heeft vaak ook de hoogste TOF score!

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
4. Focus op \xe9\xe9n winnaar categorie (bijv. De Top)

Vaste Training
• Wissel af met reguliere training
• Gebruik als warming-up of afsluiting
• Ideaal voor vrijdagmiddag/zaterdag (sociale sessies)
• Introduceer verschillende winnaar categorie\xebn voor variatie

Toernooien & Events
• Organiseer PIRAMIDE TENNIS tournaments
• Competities tussen verenigingen
• Gezinsdagen en open dagen
• Combineer met TOF score tracking voor extra motivatie

Feedback & Aanpassingen
Deze spelregels kunnen worden aangepast op basis van feedback en ervaringen van verenigingen. Wat werkt voor jouw groep is het beste!

CONTACT & BESTELLEN
Interesse in PIRAMIDE TENNIS voor jouw vereniging of tennisschool?

Powered by KNLTB Tennis

In de box:
• Magneetbord (60x90cm) met whiteboard
• Witte magneetbuttons (aantal naar keuze)
• Watervaste stift + alcohol voor schoonmaken
• Spelregelkaart
• Volledige spelregelsgids
• Snelstart handleiding
• Trainerstips

Veel speelplezier met PIRAMIDE TENNIS!
TOF Tennis - Tennis + Strategie + Actie = Onvergetelijk Speelplezier`,formats:[{id:"piramide-21",name:"Poster 1",players:"Tot 21 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Piramide%2021-1.png",packages:{basis:{price:79.95,label:"Basis pakket"},plus:{price:89.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:99.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"piramide-36",name:"Poster 2",players:"21-36 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Piramide%2036-1.png",packages:{basis:{price:89.95,label:"Basis pakket"},plus:{price:99.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:109.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"piramide-55",name:"Poster 3",players:"37-55 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Piramide%2055-1.png",packages:{basis:{price:99.95,label:"Basis pakket"},plus:{price:109.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:119.95,label:"Compleet pakket (plus + 10 extra buttons)"}}}]},{id:"davis",name:"DAVIS CLUP",category:"tennis",ageGroup:"Groen & Geel (11-16 jaar)",description:"Magneet poster systeem met witte buttons, watervaste stift en spelregelkaart",formats:[{id:"davis-20",name:"Poster 1",players:"Tot 20 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Davis%20Clup%2020-1.png",packages:{basis:{price:79.95,label:"Basis pakket"},plus:{price:89.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:99.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"davis-30",name:"Poster 2",players:"21-30 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Davis%20Clup%2030-1.png",packages:{basis:{price:89.95,label:"Basis pakket"},plus:{price:99.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:109.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"davis-40",name:"Poster 3",players:"31-40 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Davis%20Clup%2040-1.png",packages:{basis:{price:99.95,label:"Basis pakket"},plus:{price:109.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:119.95,label:"Compleet pakket (plus + 10 extra buttons)"}}}]},{id:"4opeenrij",name:"4 OP EEN RIJ",category:"tennis",ageGroup:"Alle leeftijden",description:"Win korte wedstrijden en plaats buttons om als eerste vier op een rij te scoren. Of je nu wint of verliest, met elke gespeelde game groeit jouw TOF score status. Op naar de 100, 500 of zelfs 1000 punten! Elke punt telt mee voor jouw persoonlijke totaal. Hoe TOF is dat?!",detailedRules:`VIER OP EEN RIJ TENNIS
Offici\xeble Spelregels & Handleiding

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
Spelprincipe: Combinatie van tennis, conditie \xe9n tactiek!

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
• Snelheid \xe9n tactiek zijn belangrijk
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
Spelprincipe: Aanvallen \xe9n verdedigen!

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
A: Laat \xe9\xe9n speler per team twee keer spelen, of introduceer een "joker" die voor beide teams kan spelen.

Q: Kunnen we ook dubbelspel spelen?
A: Absoluut! Bij grote groepen of om variatie te cre\xebren zijn dubbels perfect.

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
TOF Tennis - Tennis + Strategie = Onvergetelijk Speelplezier`,formats:[{id:"4opeenrij-30",name:"Poster 1",players:"Tot 30 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%204%20OP%201%20RIJ-1.png",packages:{standard:{price:84.95,label:"Standaard set (1 poster + 49 gekleurde buttons)"}}}]},{id:"kraak-de-code",name:"KRAAK DE CODE",category:"tennis",ageGroup:"Alle leeftijden",description:"Strijd in 2 tot 4 teams om de geheime code te kraken door 5 dezelfde buttons op de juiste plek te krijgen. Door te spelen verdien je het recht om buttons te verplaatsen. Ondertussen bouw je razendsnel aan je TOF score. Of de code nu gekraakt wordt of niet, jouw inzet brengt je dichter bij de volgende mijlpaal van 200 of 1000 punten!",detailedRules:`KRAAK DE CODE TENNIS
Offici\xeble Spelregels & Handleiding

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
• Elke gespeelde wedstrijd telt mee voor je TOF score
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
• Elke gespeelde wedstrijd wordt bijgeschreven op TOF score
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
• Alle gespeelde wedstrijden tellen mee voor TOF score
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
Elke gespeelde wedstrijd telt mee voor je TOF score:
• Win of verlies: elke punt telt
• Door te spelen verdien je het recht om buttons te verplaatsen
• Ondertussen bouw je razendsnel aan je TOF score
• Of de code nu gekraakt wordt of niet, jouw inzet brengt je dichter bij de volgende mijlpaal van 200 of 1000 punten!
• Teams met de meeste gespeelde wedstrijden hebben vaak ook de hoogste TOF scores

VEELGESTELDE VRAGEN
Q: Wat als er een oneven aantal spelers is?
A: Verdeel spelers zo gelijkmatig mogelijk. Een team met \xe9\xe9n speler meer is meestal geen probleem.

Q: Kunnen teams elkaar zien wat ze doen?
A: Ja! Dat maakt het tactischer. Teams kunnen hints krijgen door te observeren, maar moeten ook oppassen dat anderen hun code niet kopi\xebren.

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
• Combineer met TOF score tracking voor extra motivatie

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
TOF Tennis - Tennis + Logica = De Ultieme Teamuitdaging!`,formats:[{id:"kraak-de-code-30",name:"Standaard set",players:"Tot 30 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20KRAAK%20DE%20CODE-1.png",packages:{standard:{price:84.95,label:"1 poster + 40 gekleurde buttons"}}}]},{id:"swirl",name:"DE SWIRL",category:"tennis",ageGroup:"Rood Oranje Groen",description:"Magneet poster met buttons (afhankelijk van aantal jeugdleden) en spelregelkaart",formats:[{id:"swirl-lila",name:"Poster Lila",players:"Standaard",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20SWIRL%20LILA-1.png",packages:{standard:{price:79.95,label:"1 poster + 30 witte buttons"}},extras:[{name:"Extra 1 set Witte buttons",price:15}]},{id:"swirl-oranje",name:"Poster Oranje",players:"Standaard",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20SWIRL%20Oranje-1.png",packages:{standard:{price:79.95,label:"1 poster + 30 witte buttons"}},extras:[{name:"Extra 1 set Witte buttons",price:15}]},{id:"swirl-pistache",name:"Poster Pistache",players:"Standaard",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20SWIRL%20Pistache-1.png",packages:{standard:{price:79.95,label:"1 poster + 30 witte buttons"}},extras:[{name:"Extra 1 set Witte buttons",price:15}]}]},{id:"scoreboard",name:"TOF Scoreboard",category:"tennis",ageGroup:"Rood Oranje Groen Geel",description:"Magneet poster met buttons (afhankelijk van aantal jeugdleden) en spelregelkaart",formats:[{id:"scoreboard-1",name:"Standaard set",players:"Standaard",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20TENNIS%20Scorbord-1.png",packages:{standard:{price:79.95,label:"1 poster + 20 witte buttons"}},extras:[{name:"Extra 1 set Witte buttons",price:15}]}]},{id:"padel-piramide",name:"PADEL PIRAMIDE",category:"padel",ageGroup:"t/m 10-11 jaar",description:"De strijd om de top \xe9n de actie! Daag spelers naast of boven je uit om te klimmen in de piramide. Het gaat niet alleen om wie bovenaan eindigt, maar ook om wie de meeste 'klimacties' maakt en de meeste wedstrijden speelt. Omdat elke gespeelde punt direct wordt bijgeschreven op jouw TOF score, is vaker spelen belangrijker dan winnen. Wat is jouw status vandaag?",formats:[{id:"padel-piramide-21",name:"Poster 1",players:"Tot 21 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20Piramide%2021-1.png",packages:{basis:{price:79.95,label:"Basis pakket"},plus:{price:89.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:99.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"padel-piramide-36",name:"Poster 2",players:"21-36 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20Piramide%2036-1.png",packages:{basis:{price:89.95,label:"Basis pakket"},plus:{price:99.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:109.95,label:"Compleet pakket (plus + 10 extra buttons)"}}}]},{id:"padel-club-clash",name:"PADEL CLUB CLASH",category:"padel",ageGroup:"Groen & Geel (11-16 jaar)",description:"Magneet poster systeem met witte buttons, watervaste stift en spelregelkaart",formats:[{id:"padel-club-clash-20",name:"Poster 1",players:"Tot 20 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20CLUB%20CLASH%2020-1.png",packages:{basis:{price:79.95,label:"Basis pakket"},plus:{price:89.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:99.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"padel-club-clash-30",name:"Poster 2",players:"21-30 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20CLUB%20CLASH%2020-1.png",packages:{basis:{price:89.95,label:"Basis pakket"},plus:{price:99.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:109.95,label:"Compleet pakket (plus + 10 extra buttons)"}}},{id:"padel-club-clash-40",name:"Poster 3",players:"31-40 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20CLUB%20CLASH%2040-1.png",packages:{basis:{price:99.95,label:"Basis pakket"},plus:{price:109.95,label:"Plus pakket (basis + stift + alcohol)"},compleet:{price:119.95,label:"Compleet pakket (plus + 10 extra buttons)"}}}]},{id:"uno-dos-tres-cuatro",name:"UNO DOS TRES CUATRO",category:"padel",ageGroup:"Alle leeftijden",description:"Win korte wedstrijden en plaats buttons om als eerste vier op een rij te scoren. Of je nu wint of verliest, met elke gespeelde game groeit jouw TOF score status. Op naar de 100, 500 of zelfs 1000 punten! Elke punt telt mee voor jouw persoonlijke totaal. Hoe TOF is dat?!",formats:[{id:"uno-dos-tres-cuatro-30",name:"Poster 1",players:"Tot 30 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20UNO%20DOS%20TRES%20CUATRO-1.png",packages:{standard:{price:84.95,label:"Standaard set (1 poster + 49 gekleurde buttons)"}}}]},{id:"unlock-the-code",name:"UNLOCK THE CODE",category:"padel",ageGroup:"Alle leeftijden",description:"Strijd in 2 tot 4 teams om de geheime code te kraken door 5 dezelfde buttons op de juiste plek te krijgen. Door te spelen verdien je het recht om buttons te verplaatsen. Ondertussen bouw je razendsnel aan je TOF score. Of de code nu gekraakt wordt of niet, jouw inzet brengt je dichter bij de volgende mijlpaal van 200 of 1000 punten!",formats:[{id:"unlock-the-code-30",name:"Standaard set",players:"Tot 30 spelers",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20UNLOCK%20THE%20CODE-1.png",packages:{standard:{price:84.95,label:"1 poster + 40 gekleurde buttons"}}}]},{id:"padel-swirl",name:"DE SWIRL",category:"padel",ageGroup:"Rood Oranje Groen",description:"Magneet poster met buttons (afhankelijk van aantal jeugdleden) en spelregelkaart",formats:[{id:"padel-swirl-1",name:"Poster 1",players:"Standaard",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20SWIRL-1.png",packages:{standard:{price:79.95,label:"1 poster + 30 witte buttons"}},extras:[{name:"Extra 1 set Witte buttons",price:15}]}]},{id:"padel-scoreboard",name:"TOF Scoreboard",category:"padel",ageGroup:"Alle leeftijden",description:"Magneet poster met buttons (afhankelijk van aantal jeugdleden) en spelregelkaart",formats:[{id:"padel-scoreboard-1",name:"Standaard set",players:"Standaard",image:"https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/TOF%20Sports/TOF%20PADEL%20SCOREBORD-1.png",packages:{standard:{price:79.95,label:"1 poster + 20 witte buttons"}},extras:[{name:"Extra 1 set Witte buttons",price:15}]}]}],r=e=>n.filter(t=>t.category===e)}};