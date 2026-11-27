import type { ContentDict } from "./en";

/**
 * The fixed text of the template and industry pages and their hubs, French (France). Polite
 * "vous", like help/fr.ts and home/fr.ts. French spacing before ? ! : and inside « » (NBSP).
 */
export const fr: ContentDict = {
  home: "Accueil",
  onThisPage: "Sur cette page",
  updated: "Mis à jour",
  disclaimer:
    "Informations générales, pas un conseil fiscal ou juridique. Vérifiez les détails avec un expert-comptable ou un avocat de votre pays.",
  hubCta: "Créez votre prochaine facture",
  templateHub: {
    meta: {
      title: "Modèles de facture gratuits par métier | Invoicor",
      description:
        "Modèles de facture gratuits par métier et guides : mentions à inclure, exemples chiffrés, erreurs à éviter. Créez-les et envoyez-les avec l'app Invoicor.",
    },
    crumb: "Modèles",
    eyebrow: "Modèles et guides gratuits",
    title: "Modèles de facture gratuits",
    subtitle:
      "Des modèles et des guides pour votre métier ou le type de facture qu'il vous faut (acompte, à l'heure, freelance…) : ce qu'il faut y mettre, un exemple avec de vraies lignes, et les erreurs qui retardent le paiement.",
    groupTypes: "Types de facture",
    groupTrades: "Modèles par métier",
    cardType: "Type de facture",
    cardTrade: "Modèle et guide",
    cta: "Voir le modèle",
    explainerTitle: "Comment utiliser ces modèles",
    explainer: [
      "Chaque guide montre ce que contient une bonne facture pour ce métier ou ce type de facture : les informations qu'attendent votre client et son comptable, comment présenter la main-d'œuvre et les fournitures, et comment gérer les acomptes et la TVA. L'exemple de facture reprend des lignes réalistes : vous pouvez en reprendre la structure pour vos propres chantiers et missions.",
      "Vous pouvez refaire chacun d'eux dans un tableur ou un traitement de texte. Ou créer la même facture dans l'app Invoicor : vos coordonnées, vos clients et vos articles enregistrés se remplissent tout seuls, les totaux et la TVA sont calculés, et vous envoyez un PDF soigné depuis votre téléphone. Vos {n} premières factures sont gratuites.",
    ],
  },
  template: {
    crumb: "Modèles",
    eyebrow: "Modèle et guide gratuits",
    use: "Utiliser ce modèle gratuitement",
    app: "Le créer dans l'app",
    toc: {
      include: "Ce qu'il faut inclure",
      sample: "Exemple de facture",
      notes: "Remarques",
      industryNotes: "Spécificités du métier",
      mistakes: "Erreurs à éviter",
      formats: "L'envoyer en PDF",
      tip: "Conseil de pro",
      faq: "Questions fréquentes",
    },
    eyebrows: {
      include: "Check-list",
      sample: "Exemple",
      notes: "Bon à savoir",
      mistakes: "À éviter",
      formats: "Format",
      tip: "Conseil de pro",
    },
    subtotal: "Sous-total",
    depositPaid: "Acompte versé",
    tax: "TVA",
    balanceDue: "Reste à payer",
    invoiceNotes: "Notes de la facture :",
    fillExample: "Remplir cet exemple en ligne",
    fillHint: "Gratuit, sans inscription. Modifiez ce que vous voulez, puis téléchargez le PDF.",
    mistakesTitle: "Les erreurs courantes à éviter",
    formatsTitle: "L'envoyer en PDF",
    whyPdf: "Pourquoi le PDF",
    pdfDefault:
      "Un PDF s'affiche de la même façon sur tous les téléphones et ordinateurs, ne se modifie pas par erreur, et c'est ce qu'attendent les clients et les comptables.",
    browserTitle: "Gratuit, dans votre navigateur",
    browserText:
      "Ouvrez ce modèle dans le générateur gratuit : les lignes de l'exemple sont déjà remplies. Modifiez-les, ajoutez votre logo et téléchargez le PDF. Sans inscription.",
    openGenerator: "Ouvrir le générateur",
    iphoneTitle: "Depuis votre iPhone",
    iphoneText:
      "L'app Invoicor crée le même PDF et l'envoie par e-mail ou par message, avec vos clients et vos articles habituels enregistrés. {n} factures gratuites.",
    getApp: "Télécharger l'app",
    whyNotWord:
      "Pourquoi pas Word ou Excel ? N'importe qui peut y modifier les montants, et une formule peut fausser un total sans que vous le voyiez. Invoicor crée uniquement des PDF.",
    appCardEyebrow: "Vous facturez chaque semaine ?",
    appCardText:
      "Enregistrez vos clients et vos lignes habituelles, et envoyez chaque facture depuis votre téléphone.",
    moreTemplates: "Autres modèles de facture",
    ctaGradient: "en quelques secondes.",
    ctaText:
      "Clients et lignes enregistrés, totaux et TVA calculés automatiquement, et un PDF soigné envoyé depuis votre téléphone avant même de quitter le chantier.",
  },
  industryHub: {
    meta: {
      title: "Logiciel de facturation par métier | Invoicor",
      description:
        "Plombier, graphiste indépendant ou consultant : découvrez comment l'app mobile Invoicor accélère votre facturation.",
    },
    crumb: "Métiers",
    eyebrow: "Métiers",
    title: "Pensé pour votre façon de travailler.",
    subtitle:
      "Chaque métier facture à sa façon. Découvrez les erreurs de facturation, les lignes et les règles de TVA propres à votre activité, et comment Invoicor s'en occupe.",
    card: "Métier",
    cta: "Voir comment ça marche",
    explainerTitle: "Une seule app, adaptée à votre métier",
    explainer: [
      "Un plombier facture un déplacement, la main-d'œuvre et les pièces. Un graphiste facture un acompte puis des étapes. Une entreprise de ménage facture le même client chaque semaine. Chaque page métier présente les erreurs qui retardent le paiement dans ce métier, les lignes que vous utiliserez le plus, les termes que vos clients s'attendent à voir et les points de TVA à vérifier.",
      "Invoicor fonctionne de la même façon pour tous : enregistrez vos clients et vos lignes une fois, choisissez un modèle et envoyez un PDF soigné depuis votre téléphone. {n} factures sont gratuites, et Invoicor ne prend jamais de commission sur vos paiements.",
    ],
  },
  industry: {
    crumb: "Métiers",
    start: "Commencer gratuitement sur iOS",
    online: "En créer une gratuitement en ligne",
    toc: {
      mistakes: "Erreurs de facturation",
      features: "Ce qu'Invoicor vous apporte",
      scenario: "Un cas concret",
      tip: "Conseil d'expert",
      lineItems: "Lignes courantes",
      glossary: "Glossaire",
      tax: "TVA et obligations",
      faq: "Questions fréquentes",
    },
    eyebrows: {
      mistakes: "Ce qui coince",
      features: "Ce qu'Invoicor vous apporte",
      scenario: "Une journée type",
      tip: "Conseil d'expert",
      lineItems: "Lignes de facture",
      glossary: "Glossaire",
      tax: "TVA et obligations",
    },
    scenarioTitle: "Un vrai cas de facturation",
    fromExperience: "Retour d'expérience",
    lineItemsIntro:
      "Enregistrez-les une fois comme articles dans Invoicor et ajoutez-les à n'importe quelle facture d'un simple toucher.",
    whatToKnow: "À savoir",
    templatesEyebrow: "Modèles gratuits",
    templatesTitle: "Besoin d'une seule facture tout de suite ?",
    templatesCard: "Avec un exemple rempli et ce qu'il faut inclure",
    moreIndustries: "Autres métiers",
    ctaGradient: "Essayez gratuitement.",
    ctaText:
      "Clients et lignes enregistrés, totaux et TVA calculés automatiquement, et un PDF soigné envoyé depuis votre téléphone.",
  },
};
