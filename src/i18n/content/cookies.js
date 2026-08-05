/** Cookie consent copy (nl/en). Use with ot() from overTof or local pick. */
export function cookieText(locale, node) {
  if (node == null) return node;
  if (typeof node === 'string') return node;
  if (typeof node === 'object' && ('nl' in node || 'en' in node)) {
    return locale === 'en' ? (node.en ?? node.nl) : (node.nl ?? node.en);
  }
  return node;
}

export const COOKIE_UI = {
  bannerTitle: { nl: 'Wij gebruiken cookies', en: 'We use cookies' },
  bannerBody: {
    nl: 'We gebruiken cookies om je ervaring op onze website te verbeteren. Sommige cookies zijn noodzakelijk voor het functioneren van de site, andere helpen ons de site te verbeteren.',
    en: 'We use cookies to improve your experience on our website. Some cookies are necessary for the site to work; others help us improve it.',
  },
  moreInfo: { nl: 'Meer informatie', en: 'More information' },
  necessaryOnly: { nl: 'Alleen noodzakelijk', en: 'Necessary only' },
  preferences: { nl: 'Voorkeuren', en: 'Preferences' },
  acceptAll: { nl: 'Alles accepteren', en: 'Accept all' },
  settingsTitle: { nl: 'Cookie Voorkeuren', en: 'Cookie preferences' },
  settingsIntro: {
    nl: 'Wij respecteren uw privacy. U kunt hieronder uw voorkeuren instellen voor welke cookies u wilt toestaan. U kunt uw voorkeuren op elk moment wijzigen.',
    en: 'We respect your privacy. Below you can set which cookies you want to allow. You can change your preferences at any time.',
  },
  alwaysActive: { nl: 'Altijd actief', en: 'Always active' },
  usedCookies: { nl: 'Gebruikte cookies:', en: 'Cookies used:' },
  savePreferences: { nl: 'Voorkeuren opslaan', en: 'Save preferences' },
};

export const COOKIE_CATEGORIES = {
  necessary: {
    id: 'necessary',
    name: { nl: 'Noodzakelijke cookies', en: 'Necessary cookies' },
    description: {
      nl: 'Deze cookies zijn essentieel voor het functioneren van de website. Ze maken basisfuncties mogelijk zoals pagina-navigatie, winkelwagen en toegang tot beveiligde gedeelten. De website kan niet goed functioneren zonder deze cookies.',
      en: 'These cookies are essential for the website to function. They enable basic features such as page navigation, the cart and access to secure areas. The site cannot work properly without them.',
    },
    required: true,
    cookies: [
      {
        name: 'tof-cart',
        purpose: { nl: 'Bewaart uw winkelwagen', en: 'Stores your cart' },
        duration: { nl: 'Lokale opslag', en: 'Local storage' },
      },
      {
        name: 'tof-cookie-consent',
        purpose: { nl: 'Bewaart uw cookievoorkeuren', en: 'Stores your cookie preferences' },
        duration: { nl: '1 jaar', en: '1 year' },
      },
    ],
  },
  functional: {
    id: 'functional',
    name: { nl: 'Functionele cookies', en: 'Functional cookies' },
    description: {
      nl: "Deze cookies maken verbeterde functionaliteit en personalisatie mogelijk. Ze kunnen worden geplaatst door ons of door externe partijen wiens diensten we aan onze pagina's hebben toegevoegd.",
      en: 'These cookies enable enhanced functionality and personalisation. They may be set by us or by third parties whose services we have added to our pages.',
    },
    required: false,
    cookies: [
      {
        name: 'user-preferences',
        purpose: {
          nl: 'Onthoudt uw voorkeuren zoals taal en regio',
          en: 'Remembers your preferences such as language and region',
        },
        duration: { nl: '1 jaar', en: '1 year' },
      },
    ],
  },
  analytics: {
    id: 'analytics',
    name: { nl: 'Analytische cookies', en: 'Analytics cookies' },
    description: {
      nl: 'Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken. Ze verzamelen informatie anoniem en helpen ons de website te verbeteren.',
      en: 'These cookies help us understand how visitors use the website. They collect information anonymously and help us improve the site.',
    },
    required: false,
    cookies: [
      {
        name: '_ga, _gid',
        purpose: {
          nl: 'Google Analytics - Meet websitegebruik',
          en: 'Google Analytics — measures site usage',
        },
        duration: { nl: '2 jaar / 24 uur', en: '2 years / 24 hours' },
      },
    ],
  },
  marketing: {
    id: 'marketing',
    name: { nl: 'Marketing cookies', en: 'Marketing cookies' },
    description: {
      nl: 'Deze cookies worden gebruikt om advertenties relevanter te maken voor u. Ze worden ook gebruikt om het aantal keren dat u een advertentie ziet te beperken en om de effectiviteit van advertentiecampagnes te meten.',
      en: 'These cookies make ads more relevant to you. They also limit how often you see an ad and measure campaign effectiveness.',
    },
    required: false,
    cookies: [
      {
        name: 'Facebook Pixel',
        purpose: {
          nl: 'Remarketing en conversie tracking',
          en: 'Remarketing and conversion tracking',
        },
        duration: { nl: '3 maanden', en: '3 months' },
      },
    ],
  },
};
