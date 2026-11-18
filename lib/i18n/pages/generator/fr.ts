/**
 * The free invoice generator, French (FR, also read in BE and CH). Polite "vous", like home/fr.ts.
 * The checklist names the French "mentions obligatoires"; the e-invoicing note matches home/fr.ts.
 * French spacing before ? ! : ; % € and inside « » uses NBSP.
 */
import type { GeneratorDict } from "./en";

export const fr: GeneratorDict = {
  ui: {
    viewAria: "Affichage du générateur",
    tabForm: "Formulaire",
    tabPreview: "Aperçu",
    previewAria: "Aperçu de la facture",
    offerTitle: "Charger l'exemple {niche} ?",
    offerText: "Il remplace vos lignes et vos notes ; votre entreprise et votre client restent.",
    offerLoad: "Charger l'exemple",
    offerKeep: "Garder les miennes",
    savedBlocked: "Non enregistré : ce navigateur bloque le stockage",
    savedOk: "Enregistré dans ce navigateur uniquement. Personne d'autre ne peut le voir.",
    newInvoice: "Nouvelle facture",
    newInvoiceTitle: "Garde vos coordonnées, efface le client et les lignes",
    clearAll: "Tout effacer",
    clearConfirm:
      "Tout effacer ? Vos coordonnées, votre client et vos lignes seront supprimés de ce navigateur.",
    templateLabel: "Modèle",
    browseTemplates: "Voir les modèles",
    subtotal: "Total HT",
    discount: "Remise",
    tax: "TVA",
    taxIncluded: " (incluse)",
    total: "Total TTC",

    setupTitle: "Paramètres de la facture",
    setupHint: "Modèle, langue et devise",
    change: "Modifier",
    invoiceLanguage: "Langue de la facture",
    currency: "Devise",
    dateFormat: "Format de date",

    detailsTitle: "Détails de la facture",
    detailsHint: "Numéro, dates et échéance de paiement",
    invoiceNumber: "Numéro de facture",
    invoiceNumberHint: "Numérotation continue et sans trou, par exemple F-2026-001, F-2026-002",
    issueDate: "Date d'émission",
    dueDate: "Date d'échéance",
    paymentTerms: "Conditions de paiement",
    paymentTermsPlaceholder: "ex. Paiement à 30 jours",

    businessTitle: "Votre entreprise",
    businessHint: "Qui émet la facture",
    businessName: "Nom ou raison sociale",
    email: "E-mail",
    phone: "Téléphone",
    address: "Adresse",
    postalCode: "Code postal",
    city: "Ville",
    country: "Pays",
    taxId: "N° de TVA intracommunautaire",
    taxIdPlaceholder: "ex. FR12345678901",
    registration: "SIREN / SIRET",
    registrationPlaceholder: "ex. SIRET 123 456 789 00012",
    bankDetails: "Coordonnées bancaires",
    bankName: "Banque",
    iban: "IBAN / numéro de compte",
    swift: "BIC / SWIFT",

    clientTitle: "Facturé à",
    clientHint: "Le client que vous facturez",
    clientName: "Nom du client ou de l'entreprise",
    contactPerson: "Interlocuteur",
    clientTaxHint: "Obligatoire pour les clients professionnels dans l'UE",

    itemsTitle: "Lignes",
    itemsHint: "Ce que vous facturez, jusqu'à {max} lignes",
    addLine: "Ajouter une ligne",
    itemsLimit: "C'est la limite gratuite. L'app Invoicor permet d'en ajouter davantage.",
    line: "Ligne {line}",
    moveUp: "Monter la ligne {line}",
    moveDown: "Descendre la ligne {line}",
    removeLine: "Supprimer la ligne {line}",
    item: "Désignation",
    itemPlaceholder: "ex. Remplacement d'un mitigeur de cuisine",
    qty: "Qté",
    price: "Prix unitaire",
    details: "Détails (facultatif)",
    detailsPlaceholder: "Affiché sur une ligne à part, sous la désignation",
    amount: "Montant",

    taxTitle: "TVA et remise",
    taxHint: "Un seul taux de TVA pour toute la facture",
    taxRate: "Taux de TVA",
    taxInclusive: "Les prix sont TTC (TVA incluse)",
    discountNone: "Pas de remise",
    discountPercent: "Pourcentage (%)",
    discountFixed: "Montant fixe",
    discountPct: "Remise en %",
    discountAmount: "Montant de la remise",

    notesTitle: "Notes",
    notesHint: "Un remerciement, des mentions légales ou autre chose",

    payTitle: "Lien de paiement en ligne",
    payHint: "Facultatif. Votre client vous paie directement, jamais par nous",
    payLabel: "Votre lien de paiement",
    payFieldHint:
      "Votre propre lien PayPal, Stripe ou autre. Il apparaît sous forme de bouton « Payer en ligne ».",
    payError: "Le lien doit commencer par https://",

    logo: "Logo (facultatif)",
    logoAlt: "Votre logo",
    logoRemove: "Retirer",
    logoUpload: "Ajouter un logo",
    logoHint: "PNG ou JPG, 500 Ko maximum. Remplace le nom en haut de la facture.",
    logoErrType: "Utilisez une image PNG ou JPG.",
    logoErrSize: "Le logo ne doit pas dépasser 500 Ko.",
    logoErrRead: "Impossible de lire cette image.",

    creating: "Création de votre PDF…",
    download: "Télécharger le PDF",
    downloadNote:
      "Gratuit. Le PDF porte une petite ligne « Created with invoicor.com » en bas de page.",
    downloadNeedsItem: "Ajoutez au moins une ligne avec une désignation pour télécharger.",
    pdfError:
      "Ce navigateur n'a pas pu créer le PDF. Réessayez, ou essayez un autre navigateur. Votre formulaire est enregistré.",
    ready: "Prêt",
    doneTitle: "Votre facture est téléchargée",
    doneText: "Retrouvez {file} dans votre dossier Téléchargements.",
    downloadAgain: "Télécharger à nouveau",
    createAnother: "Créer une autre facture",
    appTitle: "La prochaine fois, envoyez-la depuis votre téléphone.",
    appText:
      "L'app Invoicor garde ce client et vos lignes, conserve chaque facture avec son statut, et n'ajoute aucun filigrane. {n} factures gratuites.",
    fileName: "facture",

    previewFrame: "Aperçu de la facture",
    previewError:
      "L'aperçu n'a pas pu se charger. Vérifiez votre connexion ; votre formulaire est enregistré.",
    overflowTitle: "La facture ne tient plus sur une page.",
    overflowText:
      "Le bas de la facture (notes, coordonnées bancaires) serait coupé. Raccourcissez les détails ou utilisez moins de lignes.",

    pickerTitle: "Choisir un modèle",
    pickerCount: "{free} gratuits ici · les {all} dans l'app",
    close: "Fermer",
    free: "Gratuit",
    inApp: "Dans l'app",
    lockedAria: "{name} : disponible dans l'app Invoicor",
    thumbTitle: "Modèle {name}",
  },

  defaults: {
    invoiceNumber: "F-2026-001",
    paymentTerms: "Paiement à 30 jours à compter de la date d'émission",
    notes: "Merci pour votre confiance.",
  },

  page: {
    meta: {
      title: "Créer une facture gratuite en ligne (PDF) | Invoicor",
      description:
        "Créez une facture gratuite en ligne : choisissez un modèle de facture, ajoutez vos lignes et téléchargez le PDF. Sans inscription, 38 devises.",
    },
    home: "Accueil",
    crumb: "Créer une facture",
    eyebrow: "Gratuit · sans inscription",
    h1: "Créer une facture gratuite en ligne",
    lead: "Renseignez vos coordonnées, choisissez un modèle et téléchargez une facture PDF professionnelle. Gratuit, sans compte, en 38 devises et 11 langues.",

    howEyebrow: "Comment ça marche",
    howTitle: "Créer une facture en 3 étapes",
    howDescription: "Créez une facture professionnelle en ligne et téléchargez-la en PDF.",
    steps: [
      {
        name: "Ajoutez votre entreprise et votre client",
        text: "Indiquez votre nom ou raison sociale, votre adresse, votre SIRET et votre numéro de TVA, puis le client à facturer. Ajoutez votre logo si vous en avez un.",
      },
      {
        name: "Ajoutez les lignes, la TVA et la remise",
        text: "Listez ce que vous avez réalisé ou vendu, avec quantité et prix unitaire. Choisissez un taux de TVA et une remise si besoin : les totaux HT et TTC se calculent tout seuls.",
      },
      {
        name: "Choisissez un modèle et téléchargez le PDF",
        text: "Choisissez l'un des 21 modèles gratuits, vérifiez l'aperçu en direct et téléchargez votre facture en PDF.",
      },
    ],

    mustEyebrow: "Mentions obligatoires",
    mustTitle: "Ce qu'une facture doit comporter en France",
    mustIntro:
      "En France, une facture entre professionnels doit porter certaines mentions obligatoires. Le générateur a un champ pour chacune ; ce qui n'a pas de champ dédié trouve sa place dans les notes.",
    mustHave: [
      "Un numéro unique, attribué dans une suite chronologique et continue",
      "La date d'émission et la date de la vente ou de la prestation",
      "Vos nom, adresse et forme juridique, avec votre SIREN ou SIRET",
      "Le nom et l'adresse de votre client (et son adresse de livraison si elle diffère)",
      "Votre numéro de TVA intracommunautaire, et celui du client professionnel s'il en a un",
      "La désignation précise, la quantité et le prix unitaire HT de chaque produit ou service",
      "Le taux et le montant de la TVA, le total HT et le total TTC",
      "La date d'échéance du paiement et les conditions d'escompte (ou « Pas d'escompte pour paiement anticipé »)",
      "Entre professionnels : le taux des pénalités de retard et l'indemnité forfaitaire de 40 € pour frais de recouvrement",
    ],
    mustNote:
      "Micro-entrepreneur en franchise de TVA ? Mettez le taux à 0 % et ajoutez dans les notes : « TVA non applicable, art. 293 B du CGI ». Facturation électronique : depuis le 1er septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques entre professionnels ; l'émission devient obligatoire pour les PME et micro-entreprises au 1er septembre 2027. Ce générateur crée une facture PDF, qui reste possible pour vos clients particuliers et, d'ici là, pour vos clients professionnels si vous êtes une PME. En cas de doute, demandez à votre expert-comptable.",

    typesEyebrow: "Les bases",
    typesTitle: "Facture, reçu ou devis ?",
    types: [
      {
        title: "Devis",
        text: "Avant les travaux : ce que cela coûtera. Signé par le client, il l'engage, mais ce n'est pas une demande de paiement.",
      },
      {
        title: "Facture",
        text: "Après la prestation (ou avant, pour un acompte) : une demande de paiement, avec une date d'échéance.",
      },
      { title: "Reçu", text: "Après le paiement : la preuve que l'argent a bien été reçu." },
    ],
    typesNote:
      "Ce générateur crée des factures. Une fois le paiement reçu, beaucoup d'entreprises renvoient la même facture avec la mention « Acquittée ».",

    termsEyebrow: "Être payé",
    termsTitle: "Des conditions de paiement pour être payé à temps",
    termsText:
      "Les conditions de paiement indiquent à votre client quand régler. Pour un particulier ou un petit chantier, « Paiement à réception » convient bien. Entre professionnels, le délai est de 30 jours après la prestation si rien n'est convenu, et la loi le plafonne à 60 jours à compter de l'émission de la facture, ou 45 jours fin de mois. Dans tous les cas, écrivez la vraie date d'échéance sur la facture, facilitez le paiement avec votre IBAN ou un lien de paiement, et gardez le numéro de facture pour vos archives. Des conditions claires et une échéance précise sont le moyen le plus simple d'éviter les relances.",

    tipsEyebrow: "Bonnes pratiques",
    tipsTitle: "Numéroter, envoyer et relancer",
    tips: [
      {
        title: "Numérotez dans une seule suite continue",
        text: "Utilisez une numérotation chronologique comme F-2026-001, F-2026-002, sans trou ni doublon : c'est une obligation en France. Une facture se retrouve aussi en quelques secondes quand votre client ou votre comptable la demande. Pour corriger une facture envoyée, faites un avoir plutôt que de la supprimer.",
      },
      {
        title: "Envoyez-la le jour même",
        text: "Une facture envoyée juste après la prestation est payée plus vite. Envoyez le PDF par e-mail ou par message, et indiquez le montant et la date d'échéance dans le message pour que votre client les voie sans ouvrir le fichier.",
      },
      {
        title: "Relancez tôt, et poliment",
        text: "Si l'échéance est dépassée, envoyez un rappel court et aimable avec la facture en pièce jointe. La plupart des retards sont de simples oublis. Conservez une copie de chaque facture envoyée (dix ans, pour la comptabilité) : vous saurez toujours ce qui reste dû.",
      },
    ],

    vsEyebrow: "À vous de choisir",
    vsTitle: "Ce générateur ou l'app Invoicor ?",
    vsIntro:
      "Les deux créent les mêmes factures professionnelles, avec les mêmes modèles. Le générateur est idéal pour une facture ponctuelle ; l'app, pour facturer chaque semaine.",
    vsCaption: "Générateur de factures gratuit comparé à l'app Invoicor",
    vsGenerator: "Générateur",
    vsApp: "App",
    compare: [
      ["Prix", "Gratuit", "{n} factures gratuites, puis un abonnement"],
      ["Filigrane", "Petite ligne « Created with invoicor.com »", "Aucun"],
      ["Modèles", "21 gratuits", "Les 31 (21 gratuits, les autres selon la formule)"],
      ["Lignes", "Jusqu'à 10", "Jusqu'à 50 (Pro)"],
      ["Clients et lignes enregistrés", "Dans ce navigateur uniquement", "Oui, sur votre compte"],
      ["Historique et statut des factures", "Non", "Brouillon, envoyée, payée, en retard"],
      ["Où", "Dans tout navigateur", "iPhone et iPad"],
    ],

    moreEyebrow: "Modèles et guides",
    moreTitle: "Des factures pour votre métier",
    moreBefore:
      "Le générateur propose 21 modèles gratuits. Pour savoir quoi mettre sur une facture dans votre métier, consultez nos",
    moreLink: "modèles de facture et guides",
    moreAfter: ", ou le guide de votre secteur :",
    moreEnglishNote: "Ces guides sont pour l'instant en anglais.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Plombiers et chauffagistes" },
      { href: "/industries/electricians", label: "Électriciens" },
      { href: "/industries/freelance-designers", label: "Graphistes freelance" },
      { href: "/industries/photographers-videographers", label: "Photographes" },
      { href: "/industries/consultants-coaches", label: "Consultants et coachs" },
      { href: "/industries/cleaning-services", label: "Entreprises de nettoyage" },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Créer une facture gratuite : vos questions",
    faqs: [
      {
        question: "Ce générateur de factures est-il vraiment gratuit ?",
        answer:
          "Oui. Créer et télécharger des factures ici est gratuit et ne demande aucun compte. Chaque PDF porte une petite ligne « Created with invoicor.com » en bas de page. Si vous préférez ne rien avoir, l'app Invoicor pour iPhone n'a pas de filigrane et vos {n} premières factures sont gratuites.",
      },
      {
        question: "Faut-il créer un compte ?",
        answer:
          "Non. Remplissez le formulaire et téléchargez le PDF. Votre brouillon est gardé dans votre navigateur : vous pouvez fermer l'onglet et reprendre plus tard sur le même appareil.",
      },
      {
        question: "Conservez-vous ma facture ?",
        answer:
          "Non. L'aperçu et le PDF sont créés directement dans votre navigateur : ce que vous saisissez ne quitte pas votre appareil. Votre brouillon est enregistré dans ce navigateur uniquement ; « Tout effacer » le supprime.",
      },
      {
        question: "Quelles devises et quelles langues puis-je utiliser ?",
        answer:
          "38 devises et 11 langues de facture. Les intitulés de la facture (Facture, Quantité, Total, etc.) sont traduits dans la langue choisie.",
      },
      {
        question: "Puis-je ajouter mon logo ?",
        answer:
          "Oui. Importez un PNG ou un JPG de 500 Ko maximum : il apparaît en haut de la facture.",
      },
      {
        question: "Combien de lignes puis-je ajouter ?",
        answer:
          "Jusqu'à 10 par facture, comme la formule gratuite de l'app Invoicor. Les formules payantes de l'app en permettent davantage.",
      },
      {
        question: "Puis-je ajouter la TVA et une remise ?",
        answer:
          "Oui. Choisissez un taux de TVA pour la facture, ajouté aux prix (HT) ou déjà inclus (TTC), et une remise facultative en pourcentage ou en montant fixe. Le total HT, la TVA et le total TTC sont calculés pour vous. Si vous êtes en franchise de TVA, mettez 0 % et ajoutez la mention « TVA non applicable, art. 293 B du CGI » dans les notes.",
      },
      {
        question: "Mon client peut-il payer en ligne ?",
        answer:
          "Ajoutez votre propre lien de paiement (PayPal, Stripe ou Wise, par exemple) et votre IBAN : ils sont imprimés sur la facture. Votre client vous paie directement. Invoicor ne traite aucun paiement et ne prend aucune commission.",
      },
      {
        question: "Puis-je modifier le PDF après l'avoir téléchargé ?",
        answer:
          "Un PDF n'est pas fait pour être modifié. Changez le formulaire et téléchargez-en un nouveau ; votre brouillon est toujours là. Attention : une facture déjà envoyée ne se modifie pas, elle se corrige par un avoir. Pour garder chaque facture avec son statut et la renvoyer plus tard, utilisez l'app Invoicor.",
      },
      {
        question: "Puis-je copier le texte du PDF ?",
        answer:
          "Non. Le PDF est créé dans votre navigateur comme une image nette de la facture : son texte ne peut pas être sélectionné ni recherché. Votre lien de paiement et les autres liens fonctionnent quand même. L'app Invoicor crée des PDF au texte sélectionnable.",
      },
    ],
  },
};
