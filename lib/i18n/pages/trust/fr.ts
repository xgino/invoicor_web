import type { TrustDict } from "./en";

/**
 * About and Contact (P10, P11), French (France). Polite "vous", like help/fr.ts. App labels stay
 * English. French spacing before ? ! : ; and inside « » (NBSP).
 */
export const fr: TrustDict = {
  home: "Accueil",
  country: "les Pays-Bas",
  about: {
    meta: {
      title: "À propos d'Invoicor : l'appli de facture honnête | Invoicor",
      description:
        "Qui fait Invoicor et ses valeurs : un début gratuit, aucuns frais sur votre argent, de vraies personnes qui lisent tout, des données en Allemagne.",
    },
    crumb: "À propos",
    eyebrow: "À propos d'Invoicor",
    title: "L'appli de facturation honnête",
    subtitle:
      "Invoicor aide les indépendants et les petites entreprises à envoyer une facture professionnelle en quelques secondes, dans la langue et la devise de leur client, sans paywall caché et sans frais sur leur argent.",
    whyEyebrow: "Pourquoi Invoicor existe",
    whyTitle: "La facturation ne devrait pas vous prendre vos soirées",
    whyText:
      "La plupart des gens qui envoient des factures sont plombiers, agents d'entretien, graphistes ou consultants, pas comptables. Ils terminent un chantier, le client demande la facture, et on leur propose soit un document vierge, soit un logiciel de comptabilité conçu pour un service financier. Invoicor est entre les deux : les champs qu'attend le service comptable de votre client, préremplis avec ce que vous avez enregistré la dernière fois, et un PDF propre que vous envoyez avant de partir.",
    whyText2:
      "Les mêmes reproches reviennent sans cesse dans les avis sur les applis de facturation : une offre « gratuite » qui n'est en fait qu'un essai, aucun humain à qui parler, et un traitement des paiements qui bloque votre argent. Invoicor est conçu pour éviter les trois.",
    principlesEyebrow: "Nos valeurs",
    principlesTitle: "Quatre promesses que nous pouvons tenir",
    principles: [
      {
        title: "Vraiment gratuit pour commencer",
        text: "{n} vraies factures dans l'application, sans filigrane et sans abonnement. Vous voyez ce que vous obtenez avant de payer quoi que ce soit.",
      },
      {
        title: "Nous ne touchons jamais à votre argent",
        text: "Invoicor n'est pas un prestataire de paiement. Votre client vous paie directement, par virement sur votre compte ou via un lien de paiement que vous ajoutez vous-même, et nous ne prenons aucune commission sur les paiements.",
      },
      {
        title: "De vraies personnes lisent chaque message",
        text: "Les retours envoyés depuis l'application et les e-mails arrivent à l'équipe, pas à un robot. La réponse peut prendre quelques jours, et nous préférons le dire plutôt que de promettre une heure que nous ne pourrions pas tenir.",
      },
      {
        title: "Vos données restent dans l'UE",
        text: "Les comptes et les factures sont stockés sur des serveurs en Allemagne et traités conformément au RGPD. Si vous supprimez votre compte, vos données sont effacées de nos serveurs sous 30 jours, sauf ce que la loi nous oblige à conserver.",
      },
    ],
    whatEyebrow: "Ce qu'il fait, et ce qu'il ne fait pas",
    whatTitle: "Pour savoir avant de télécharger",
    doesTitle: "Invoicor permet",
    does: [
      "De créer une facture professionnelle sur votre iPhone en quelques secondes et d'envoyer le PDF par e-mail, iMessage ou WhatsApp",
      "31 modèles de facture et votre propre logo",
      "Des factures en 11 langues et 38 devises, pour vos clients à l'étranger",
      "Des clients et produits enregistrés, et la duplication de la facture du mois dernier en un geste",
      "Un générateur de factures gratuit sur ce site, sans compte",
    ],
    doesntTitle: "Invoicor ne permet pas (encore)",
    doesnt: [
      "Les devis",
      "Les factures récurrentes ou programmées, ni les relances à vos clients",
      "Le traitement des paiements (vous ajoutez votre propre lien de paiement)",
      "Le travail hors ligne : une connexion Internet est nécessaire",
      "Android (ça arrive : voir la page Android)",
    ],
    screensNote:
      "Les écrans de l'application sont en anglais ; les factures existent en 11 langues.",
    whoEyebrow: "Qui est derrière",
    whoTitle: "Géré depuis {country}",
    whoText:
      "Invoicor est une entreprise exploitée depuis {country}. Voici ses informations ; les conditions d'utilisation et la politique de confidentialité indiquent ce qui s'applique lorsque vous utilisez l'application.",
    contactButton: "Nous contacter",
    helpButton: "Aide et FAQ",
    ctaTitle: "Envoyez votre prochaine facture",
    ctaGradient: "en quelques secondes.",
    ctaText: "{n} factures gratuites, sans filigrane, sans abonnement.",
  },
  contact: {
    meta: {
      title: "Contacter Invoicor : retours, questions, bugs | Invoicor",
      description:
        "Joignez l'équipe Invoicor depuis l'appli (Settings, Send Feedback) ou par e-mail. Une personne lit chaque message ; la réponse peut prendre quelques jours.",
    },
    crumb: "Contact",
    eyebrow: "Contact",
    title: "Parlez aux personnes qui font Invoicor",
    subtitle:
      "Questions, bugs ou idées : une personne de l'équipe lit chaque message. La réponse peut prendre quelques jours ; pour une réponse rapide, le centre d'aide est souvent plus efficace.",
    waysHidden: "Comment nous joindre",
    app: {
      title: "Dans l'application",
      before: "Allez dans",
      path: "Settings → Support → Send Feedback",
      middle:
        "et choisissez un bug, une demande de fonctionnalité ou une question. Le modèle de votre iPhone et la version de l'application sont ajoutés automatiquement, et",
      submissions: "My Submissions",
      after: "indique où en est chaque message : nouveau, lu, en cours ou résolu.",
    },
    email: {
      title: "Par e-mail",
      before: "Écrivez à",
      after:
        "pour toute demande : si vous ne parvenez pas à vous connecter, pour une demande liée à vos données, un partenariat ou la presse.",
    },
    help: {
      title: "Aide et FAQ",
      before:
        "La plupart des questions sur les modèles, les devises, les taxes et les formules trouvent leur réponse dans le",
      link: "centre d'aide",
      after: ", à tout moment.",
    },
    noPhone:
      "Il n'y a ni ligne téléphonique ni chat en direct : par écrit, nous pouvons examiner votre compte et vous répondre correctement.",
    topicsEyebrow: "Avant d'écrire",
    topicsTitle: "La bonne réponse dès le premier message",
    topics: [
      {
        title: "Un bug ou un PDF défectueux",
        text: "Indiquez ce que vous avez touché, ce que vous attendiez et ce qui s'est passé, ainsi que le numéro de la facture s'il s'agit d'une facture précise. Une capture d'écran aide (joignez-la à un e-mail).",
      },
      {
        title: "Abonnements, remboursements et résiliation",
        text: "Les formules s'achètent via Apple, c'est donc Apple qui gère les paiements et les remboursements. Résiliez à tout moment dans Réglages → [votre nom] → Abonnements sur votre iPhone. Si quelque chose vous semble anormal, nous vous aidons volontiers.",
      },
      {
        title: "Vos données et votre vie privée",
        text: "Demandez une copie de vos données ou leur suppression par e-mail ; vous pouvez aussi supprimer votre compte dans l'application. La politique de confidentialité explique vos droits au titre du RGPD.",
      },
      {
        title: "Affiliés et partenaires",
        text: "Le programme d'affiliation a sa propre page, qui explique son fonctionnement et comment s'inscrire. Pour tout autre partenariat, écrivez-nous.",
      },
    ],
    related: "Voir aussi :",
    relatedLinks: {
      privacy: "politique de confidentialité (en anglais)",
      terms: "conditions d'utilisation (en anglais)",
      affiliate: "programme d'affiliation (en anglais)",
      about: "à propos d'Invoicor",
    },
    companyEyebrow: "Informations légales",
    companyTitle: "À qui vous écrivez",
    ctaTitle: "Pas encore essayé ?",
    ctaGradient: "Commencez gratuitement.",
    ctaText: "{n} factures gratuites, sans filigrane, sans abonnement.",
  },
  company: {
    business: "Entreprise",
    basedIn: "Siège",
    kvk: "Numéro KvK (registre du commerce néerlandais)",
    vat: "Numéro de TVA",
    data: "Données",
    dataValue: "Serveurs en Allemagne (UE), traitement conforme au RGPD",
    email: "E-mail",
    countryName: "Pays-Bas",
  },
};
