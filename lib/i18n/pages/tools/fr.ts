/**
 * The free tools' text, French (FR, also read in BE and CH). Polite "vous", like home/fr.ts and
 * generator/fr.ts. Examples use the French standard VAT rate (20 %), decimal comma and euros.
 * French spacing before ? ! : ; % € and inside « » uses NBSP.
 */
import type { ToolsDict } from "./en";

export const fr: ToolsDict = {
  common: {
    navLabel: "Outils gratuits",
    home: "Accueil",
    eyebrow: "Outil gratuit · sans inscription",
    howEyebrow: "Comment ça marche",
    howTitle: "Le calcul, expliqué simplement",
    faqEyebrow: "FAQ",
    faqTitle: "Questions sur cet outil",
    moreTools: "Autres outils gratuits",
    closing: {
      title: "Vous facturez chaque semaine ?",
      gradient: "Faites-le dans l'app.",
      text: "Clients et articles enregistrés, chaque facture avec son statut, et un PDF soigné depuis votre iPhone. {n} factures gratuites.",
    },
    currency: "Devise",
  },

  hub: {
    meta: {
      title: "Outils gratuits : facture, calcul TVA, heures | Invoicor",
      description:
        "Outils gratuits pour indépendants et TPE : générateur de facture en ligne, calcul TVA HT/TTC, calcul des heures travaillées et de votre taux horaire.",
    },
    crumb: "Outils gratuits",
    eyebrow: "Gratuit · sans inscription · rien à installer",
    title: "Des outils gratuits pour vous faire payer",
    subtitle:
      "Créez une facture, calculez la TVA sans erreur, additionnez vos heures et fixez un taux horaire qui paie vos charges. Tout fonctionne dans votre navigateur.",
    closing: {
      title: "Tout cela, sur votre iPhone.",
      gradient: "{n} factures gratuites.",
      text: "Clients et articles enregistrés, TVA et totaux calculés pour vous, et chaque facture avec son statut.",
    },
  },

  tools: {
    generator: {
      name: "Créer une facture",
      short: "Remplissez une facture en ligne et téléchargez un PDF. 21 modèles, sans inscription.",
    },
    vat: {
      name: "Calcul TVA",
      short: "Passez du HT au TTC ou du TTC au HT, avec les taux normaux de 19 pays.",
    },
    hours: {
      name: "Calcul des heures",
      short:
        "Additionnez une semaine d'horaires et transformez 1:45 en 1,75 heure pour votre facture.",
    },
    rate: {
      name: "Calcul du taux horaire",
      short: "Partez du revenu que vous voulez pour trouver votre taux horaire et votre TJM.",
    },
  },

  vat: {
    meta: {
      title: "Calcul TVA : HT en TTC et TTC en HT, gratuit | Invoicor",
      description:
        "Calcul TVA gratuit : ajoutez la TVA à un prix HT ou retirez-la d'un prix TTC. Taux de 20 % par défaut, 19 pays, résultat immédiat, rien à installer.",
    },
    title: "Calcul TVA : HT ⇄ TTC",
    subtitle:
      "Calculez un prix TTC à partir du HT, ou le HT à partir du TTC, avec les taux normaux de 19 pays. Immédiat, gratuit, et rien ne quitte votre navigateur.",
    defaultCountry: "FR",
    ui: {
      label: "Calcul TVA",
      modeAria: "Quel montant avez-vous ?",
      add: "Ajouter la TVA (montant HT)",
      remove: "Retirer la TVA (montant TTC)",
      amountNet: "Montant HT",
      amountGross: "Montant TTC",
      country: "Pays (taux normal)",
      custom: "Autre taux",
      gst: "GST",
      rate: "Taux de TVA",
      net: "Montant HT",
      vatRow: "TVA {rate} %",
      gross: "Montant TTC",
      cta: "Reporter sur une facture",
      invoiceItem: "Produit ou service",
    },
    sections: [
      {
        title: "Ajouter la TVA (du HT au TTC)",
        paragraphs: [
          "TVA = HT × taux ÷ 100, et TTC = HT + TVA. Une prestation de 478,50 € HT avec 20 % de TVA donne 95,70 € de TVA et 574,20 € TTC. Les montants sont arrondis au centime le plus proche, comme sur une facture.",
        ],
      },
      {
        title: "Retirer la TVA (du TTC au HT)",
        paragraphs: [
          "HT = TTC ÷ (1 + taux ÷ 100). C'est l'étape où l'on se trompe le plus : retirer 20 % du montant TTC donne un HT trop faible. À 20 % de TVA, 120 € TTC font 100 € HT, et non 96 €.",
          "Utile quand un fournisseur vous donne un prix TTC, ou quand vous fixez un prix public et voulez savoir quelle part vous revient.",
        ],
      },
      {
        title: "Taux normal et taux réduits",
        paragraphs: [
          "La liste des pays utilise le taux normal de chaque pays. En France, il est de 20 % ; des taux réduits de 10 %, 5,5 % et 2,1 % s'appliquent à certains produits et services, et certaines activités sont exonérées. En cas de doute, consultez impots.gouv.fr ou votre expert-comptable, puis saisissez le taux vous-même.",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment calculer un prix TTC à partir du HT ?",
        answer:
          "Multipliez le prix HT par le taux de TVA et ajoutez le résultat. Pour 100 € HT à 20 % : 100 × 0,20 = 20 € de TVA, soit 120 € TTC. Le calculateur le fait pour vous et arrondit au centime.",
      },
      {
        question: "Comment retrouver le HT à partir d'un prix TTC ?",
        answer:
          "Divisez le prix TTC par 1 plus le taux, au lieu de retirer le pourcentage. Pour 120 € TTC à 20 % : 120 ÷ 1,20 = 100 € HT, et la TVA est de 20 €. Retirer 20 % de 120 donnerait 96 €, ce qui est faux.",
      },
      {
        question: "Quels taux de TVA le calculateur propose-t-il ?",
        answer:
          "Les taux normaux de 16 pays européens et la GST de l'Australie, du Canada et de la Nouvelle-Zélande, à jour en novembre 2026. Beaucoup de pays ont aussi des taux réduits pour certains biens et services (en France : 10 %, 5,5 % et 2,1 %) ; saisissez vous-même le taux qui vous concerne s'il est différent.",
      },
      {
        question: "Ma facture doit-elle afficher les prix HT ou TTC ?",
        answer:
          "Les clients professionnels attendent des prix HT avec la TVA ajoutée en bas de facture ; les particuliers attendent le prix qu'ils paient, TTC. Dans tous les cas, une facture avec TVA doit indiquer le total HT, le taux, le montant de TVA et le total TTC. Dans l'app Invoicor et le générateur gratuit, vous choisissez pour chaque facture si les prix sont HT ou TTC.",
      },
      {
        question: "Ce que je saisis est-il envoyé à un serveur ?",
        answer: "Non. Le calculateur fonctionne entièrement dans votre navigateur.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Calcul heures travaillées : total et décimal | Invoicor",
      description:
        "Calcul des heures travaillées gratuit : horaires de début et de fin moins les pauses, conversion heures-minutes en décimal et montant à facturer.",
    },
    title: "Calcul des heures travaillées",
    subtitle:
      "Additionnez une semaine d'horaires moins les pauses, obtenez le total en heures et minutes et en heures décimales, et voyez ce que vous facturez à votre taux horaire.",
    ui: {
      label: "Calcul des heures",
      intro:
        "Ajoutez chaque jour travaillé : début, fin et pause non payée. Autant de jours que nécessaire, une semaine ou un mois entier.",
      date: "Date",
      start: "Début",
      end: "Fin",
      break: "Pause (min)",
      hours: "Heures",
      remove: "Supprimer",
      startAria: "{day} début",
      endAria: "{day} fin",
      breakAria: "{day} pause en minutes",
      removeAria: "Supprimer {day}",
      addDay: "Ajouter un jour",
      addWeek: "Ajouter une semaine",
      period: "{days} jours · {from} – {to}",
      rate: "Votre taux horaire (facultatif)",
      totalTime: "Heures travaillées",
      decimal: "En heures décimales (pour la facture)",
      toInvoice: "À facturer",
      totalHours: "Total des heures",
      calc: "{hours} heures × {rate}",
      convertTitle: "Conversion rapide : heures et minutes ⇄ décimal",
      convertLabel: "Durée (1:45) ou décimal (1,75)",
      convertHint: "Saisissez une durée comme 1:45 ou un nombre comme 1,75",
      convertResult: "{time} = {hours} heures",
      cta: "Créer une facture pour ces heures",
      invoiceItem: "Prestation du {from} au {to}",
    },
    sections: [
      {
        title: "Les heures travaillées par jour",
        paragraphs: [
          "Heures = heure de fin − heure de début − pause. De 09:00 à 17:30 avec 30 minutes de pause, cela fait 8 heures. Un horaire qui se termine après minuit compte le temps passé après minuit.",
        ],
      },
      {
        title: "Des heures et minutes aux heures décimales",
        paragraphs: [
          "Une facture multiplie des heures par un taux : il lui faut donc des heures décimales, soit minutes ÷ 60. 15 minutes = 0,25, 30 = 0,5, 45 = 0,75. Une semaine de 38:45 fait 38,75 heures.",
          "À 60 € de l'heure, 38,75 heures font 2 325 €. Écrire 38,45 facturerait 2 307 € et vous ferait perdre 18 €.",
        ],
      },
      {
        title: "Reporter les heures sur une facture",
        paragraphs: [
          "Faites une ligne par type de travail, avec les heures décimales en quantité et votre taux horaire en prix unitaire, par exemple « Intervention sur chantier, 38,75 heures × 60 € ». Indiquez les dates dans la désignation ou les notes pour que votre client puisse les comparer à ses propres relevés.",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment convertir des minutes en heures décimales ?",
        answer:
          "Divisez les minutes par 60. 45 minutes font 0,75 heure, donc 1 heure 45 minutes font 1,75 heure. Sur la facture, utilisez le nombre décimal : 1,75 × votre taux horaire.",
      },
      {
        question: "Pourquoi ne pas écrire 1,45 pour 1 heure 45 ?",
        answer:
          "Parce que 1,45 heure correspond à 1 heure et 27 minutes. Écrire l'heure de l'horloge comme un nombre décimal est l'erreur la plus fréquente sur les factures d'heures, et elle sous-facture chaque ligne. Le convertisseur sous le calculateur affiche les deux formes.",
      },
      {
        question: "Le calcul fonctionne-t-il pour le travail de nuit ?",
        answer:
          "Oui. Si l'heure de fin est plus tôt que l'heure de début, l'horaire est compté comme passant minuit : de 22:00 à 02:00, cela fait 4 heures.",
      },
      {
        question: "Faut-il facturer les pauses ?",
        answer:
          "En général, vous facturez le temps réellement travaillé, donc les pauses non payées sont exclues. Si votre contrat prévoit autre chose, mettez la pause à 0.",
      },
      {
        question: "Ce que je saisis est-il envoyé à un serveur ?",
        answer:
          "Non. Le calculateur fonctionne entièrement dans votre navigateur, et rien n'est enregistré.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Calcul taux horaire et TJM freelance (gratuit) | Invoicor",
      description:
        "Calculez votre taux horaire et votre TJM minimum de freelance à partir du revenu voulu, des cotisations, de vos frais, congés et heures facturables.",
    },
    title: "Calculer son taux horaire et son TJM",
    subtitle:
      "Partez du revenu que vous voulez garder pour trouver le taux horaire et le TJM dont vous avez besoin, cotisations, impôt, frais, congés et heures réellement facturables compris.",
    defaults: { takeHome: "36000", tax: "40", costs: "5000", weeks: "8", hours: "25" },
    ui: {
      label: "Calcul du taux horaire",
      earnTitle: "Ce que vous voulez gagner",
      payTitle: "Ce que ça vous coûte",
      billTitle: "Ce que vous pouvez facturer",
      periodAria: "Saisir les montants",
      perMonth: "Par mois",
      perYear: "Par an",
      takeHome: "Revenu que vous voulez garder",
      takeHomeHint: "Après impôt sur le revenu, comme un salaire",
      tax: "Cotisations sociales et impôt",
      taxHint: "Part du bénéfice que vous mettez de côté",
      costs: "Frais professionnels",
      costsHint: "Assurance, logiciels, matériel, expert-comptable",
      weeks: "Semaines non facturées par an",
      weeksHint: "Congés, maladie, périodes creuses",
      hours: "Heures facturables par semaine",
      hoursHint: "Travail payé uniquement, sans administratif ni trajets",
      total: "Votre taux horaire minimum",
      day: "TJM (8 heures facturables)",
      stepsTitle: "Le détail du calcul",
      step1:
        "Pour garder {takeHome} par an, il vous faut {beforeTax} avant cotisations et impôt ({tax} % mis de côté).",
      step2:
        "Ajoutez {costs} de frais professionnels : vous devez facturer {revenue} par an, soit environ {perMonth} par mois.",
      step3: "Vous pouvez facturer {weeks} semaines × {hours} heures = {billable} heures par an.",
      step4: "{revenue} ÷ {billable} heures = {hourly} de l'heure.",
      note: "Un minimum, hors TVA : il couvre votre revenu, vos cotisations, votre impôt et vos frais, rien de plus. Le pourcentage est une estimation ; votre expert-comptable peut vous donner le vrai chiffre.",
      invalid:
        "Indiquez au moins une heure facturable par semaine et moins de 52 semaines non facturées.",
      cta: "Créer une facture avec ce taux",
      invoiceItem: "Prestation au taux horaire",
    },
    sections: [
      {
        title: "1. Du revenu net au bénéfice avant impôt",
        paragraphs: [
          "bénéfice avant cotisations et impôt = revenu voulu ÷ (1 − part mise de côté). Pour garder 36 000 € en mettant 40 % de côté, il vous faut 60 000 € de bénéfice.",
        ],
      },
      {
        title: "2. Ajoutez vos frais professionnels",
        paragraphs: [
          "Assurance, logiciels, matériel, véhicule, expert-comptable, téléphone : tout ce que vous payez pour faire tourner votre activité. Chiffre d'affaires nécessaire = bénéfice avant impôt + frais.",
        ],
      },
      {
        title: "3. Divisez par les heures facturables",
        paragraphs: [
          "heures facturables par an = (52 − semaines non facturées) × heures facturables par semaine. Taux horaire = chiffre d'affaires ÷ heures facturables. Le TJM suppose 8 heures facturables par jour.",
          "Exemple : 60 000 € + 5 000 € = 65 000 € par an, sur 44 semaines de 25 heures facturables (1 100 heures), soit environ 59,09 € de l'heure, ou un TJM de 473 €.",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment calculer son taux horaire de freelance ?",
        answer:
          "Partez de ce que vous voulez garder par an, ajoutez les cotisations et l'impôt que vous paierez dessus et vos frais professionnels, puis divisez par les heures que vous pouvez réellement facturer dans l'année. Le calculateur fait exactement cela et affiche chaque étape.",
      },
      {
        question: "Combien d'heures facturables faut-il compter ?",
        answer:
          "Moins que vous ne travaillez. L'administratif, les devis, la prospection, les trajets et la formation ne se facturent pas. Beaucoup d'indépendants facturent 20 à 30 heures sur une semaine de 40 heures ; partez d'un chiffre que vous avez vraiment atteint ces derniers mois.",
      },
      {
        question: "Pourquoi compter les semaines non facturées ?",
        answer:
          "Parce que vous ne gagnez rien pendant vos congés, un arrêt maladie ou entre deux missions, alors que vos frais continuent. Avec 8 semaines non facturées, votre revenu annuel doit venir de 44 semaines de travail.",
      },
      {
        question: "Le pourcentage de cotisations et d'impôt est-il exact ?",
        answer:
          "C'est une part que vous mettez de côté, pas un calcul fiscal : vos cotisations et votre impôt réels dépendent de votre statut (micro-entreprise, EI, société), de vos déductions et de votre tranche. Demandez votre chiffre à votre expert-comptable et saisissez-le.",
      },
      {
        question: "Est-ce le taux que je dois facturer ?",
        answer:
          "C'est votre minimum : le taux qui couvre votre revenu, vos cotisations, votre impôt et vos frais. Ce que vous facturez dépend aussi de votre expérience, de votre marché et de la valeur du travail. Beaucoup d'indépendants ajoutent une marge par-dessus.",
      },
    ],
  },
};
