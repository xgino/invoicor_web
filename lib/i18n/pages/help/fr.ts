import type { HelpDict } from "./en";

/**
 * Help center, French (FR, also read in BE and CH). Polite "vous", like home/fr.ts. The app's own
 * screens are in English, so app labels stay in English in « » (French translation in brackets the
 * first time). French spacing before ? ! : % and inside « » (NBSP).
 */
export const fr: HelpDict = {
  meta: {
    title: "Aide et questions fréquentes | Invoicor",
    description:
      "Réponses aux questions sur Invoicor : créer une facture, modèles, devises, TVA, envoi et suivi, abonnements et vos données.",
  },
  home: "Accueil",
  crumb: "Aide",
  toc: "Sur cette page",
  eyebrow: "Assistance",
  title: "Centre d'aide",
  subtitle:
    "Tout ce qu'il faut savoir sur Invoicor. Vous ne trouvez pas votre réponse ? De vraies personnes lisent chaque message.",
  contactTitle: "Encore une question ?",
  contactText:
    "Écrivez-nous depuis l'application ou par e-mail. De vraies personnes lisent chaque message ; la réponse peut prendre quelques jours.",
  sections: [
    {
      id: "getting-started",
      title: "Premiers pas",
      items: [
        {
          q: "Comment créer ma première facture ?",
          a: "Ouvrez Invoicor et touchez le bouton + dans l'onglet « Invoices » (Factures). Choisissez un client (ou créez-en un), ajoutez vos lignes, puis touchez « Preview Invoice » (Aperçu de la facture). Votre facture est générée en PDF, que vous pouvez envoyer par e-mail, WhatsApp, AirDrop ou toute autre application.",
        },
        {
          q: "Dois-je d'abord créer un profil d'entreprise ?",
          a: "Oui. Avant votre première facture, Invoicor vous demande les informations de votre entreprise (raison sociale, adresse, logo, coordonnées bancaires). Cela prend une minute, et ces informations sont reprises sur chaque facture que vous créez.",
        },
        {
          q: "Invoicor est-il gratuit ?",
          a: "Oui. Vous pouvez créer jusqu'à 3 factures gratuitement, sans limite de durée et sans abonnement. Les factures gratuites incluent les modèles gratuits, l'export PDF, la gestion des clients et le suivi des statuts. Aucun filigrane dans l'application, quelle que soit la formule.",
        },
        {
          q: "Sur quels appareils fonctionne Invoicor ?",
          a: "Invoicor fonctionne sur iPhone et iPad avec iOS ou iPadOS 17.6 ou version ultérieure. Il n'existe pas encore de version web ; vous accédez à vos données via l'application. Les écrans de l'application sont pour l'instant en anglais, mais vos factures peuvent être en français et dans 10 autres langues.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Créer des factures",
      items: [
        {
          q: "Puis-je ajouter le logo de mon entreprise sur mes factures ?",
          a: "Oui. Ouvrez votre profil d'entreprise et touchez « Upload Logo » (Importer un logo). Invoicor accepte les formats PNG, JPG, SVG et WebP. Votre logo figure sur chaque facture que vous envoyez, et la transparence des PNG est conservée.",
        },
        {
          q: "Comment fonctionnent les modèles ?",
          a: "Invoicor propose 31 modèles de facture professionnels : 21 sont gratuits, 8 sont inclus dans Starter et 2 dans Pro. Chaque formule comprend aussi les modèles des formules inférieures. Vous pouvez définir un modèle par défaut dans votre profil d'entreprise ou en choisir un autre pour chaque facture.",
        },
        {
          q: "Puis-je facturer dans d'autres devises ?",
          a: "Oui. Invoicor prend en charge 38 devises, dont l'USD, l'EUR, le GBP, le JPY, le CHF, le CAD, l'AUD, l'INR et le BRL. Définissez une devise par défaut dans votre profil d'entreprise ou changez-la pour chaque facture.",
        },
        {
          q: "Puis-je envoyer mes factures dans la langue de mon client ?",
          a: "Oui. Invoicor propose 11 langues de facture. Tous les libellés de la facture (Article, Quantité, Total, etc.) sont traduits automatiquement. Définissez une langue par défaut dans votre profil d'entreprise ou choisissez-la pour chaque facture.",
        },
        {
          q: "Comment fonctionne le calcul de la TVA ?",
          a: "Indiquez votre taux de TVA dans votre profil d'entreprise (par exemple 20 % pour la TVA française). Invoicor calcule automatiquement la taxe sur chaque facture. Vous pouvez choisir entre des prix TTC ou HT, et modifier le taux pour une facture donnée.",
        },
        {
          q: "Puis-je appliquer une remise sur une facture ?",
          a: "Oui. Vous pouvez appliquer une remise en pourcentage ou d'un montant fixe sur n'importe quelle facture. La remise apparaît sur une ligne à part dans les totaux.",
        },
        {
          q: "Combien de lignes peut contenir une facture ?",
          a: "Cela dépend de votre formule : jusqu'à 10 lignes par facture en Free, 25 en Starter et 50 en Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Envoi et suivi",
      items: [
        {
          q: "Comment envoyer une facture ?",
          a: "Depuis l'écran de détail de la facture, touchez « Share » (Partager). Votre facture est générée en PDF et vous pouvez l'envoyer par e-mail, WhatsApp, AirDrop, Messages ou toute autre application de partage de votre iPhone.",
        },
        {
          q: "Que signifient les statuts de facture ?",
          a: "Draft (Brouillon) : enregistrée mais pas encore envoyée, vous pouvez encore la modifier. Sent (Envoyée) : partagée avec votre client, verrouillée. Paid (Payée) : le client a payé, c'est vous qui l'indiquez. Overdue (En retard) : échéance dépassée, toujours impayée. Cancelled (Annulée) : annulée, plus active.",
          list: [
            [
              "Draft (Brouillon)",
              "enregistrée mais pas encore envoyée, vous pouvez encore la modifier.",
            ],
            ["Sent (Envoyée)", "partagée avec votre client, verrouillée."],
            ["Paid (Payée)", "le client a payé, c'est vous qui l'indiquez."],
            ["Overdue (En retard)", "échéance dépassée, toujours impayée."],
            ["Cancelled (Annulée)", "annulée, plus active."],
          ],
        },
        {
          q: "Puis-je modifier une facture après l'avoir envoyée ?",
          a: "Non. Dès qu'une facture passe au statut « Sent », elle est verrouillée pour préserver sa valeur légale. Pour la modifier, dupliquez-la, corrigez la copie et envoyez la nouvelle version.",
        },
        {
          q: "Puis-je dupliquer une facture ?",
          a: "Oui. Sur l'écran de détail de la facture, touchez le bouton « Copy » (Copier). Un nouveau brouillon est créé avec le même client, les mêmes lignes et les mêmes réglages. Pratique pour un travail qui revient souvent.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Compte et facturation",
      items: [
        {
          q: "Comment fonctionnent les abonnements ?",
          a: "Invoicor propose les formules Starter et Pro, facturées au mois ou à l'année via l'App Store d'Apple. Toute la facturation est gérée par Apple : nous ne voyons ni ne conservons jamais vos informations de paiement. Vous pouvez gérer ou résilier votre abonnement dans les Réglages de votre iPhone → [votre nom] → Abonnements.",
        },
        {
          q: "Faut-il une carte pour l'essai gratuit ?",
          a: "Pas pour la formule gratuite : vos 3 premières factures ne demandent ni abonnement ni paiement. Les essais gratuits de Starter et Pro passent par Apple : vous les lancez avec votre identifiant Apple, qui nécessite un moyen de paiement. Résiliez avant la fin de l'essai et vous ne payez rien. Invoicor ne voit jamais votre carte.",
        },
        {
          q: "Puis-je résilier mon abonnement ?",
          a: "Oui, à tout moment. Allez dans Réglages → [votre nom] → Abonnements → Invoicor → Annuler l'abonnement. Votre formule reste active jusqu'à la fin de la période de facturation en cours. Vous ne serez plus prélevé.",
        },
        {
          q: "Que se passe-t-il si je repasse à la formule gratuite ?",
          a: "Vos factures, clients et données restent intacts, et vous pouvez toujours consulter, partager et suivre chaque facture créée. La formule gratuite comprend 3 factures au total : si vous en avez déjà créé 3 ou plus, il vous faudra de nouveau un abonnement pour en créer d'autres.",
        },
        {
          q: "Comment supprimer mon compte ?",
          a: "Ouvrez Settings (Réglages) dans l'application et touchez « Delete Account » (Supprimer le compte). Votre compte et toutes les données associées sont supprimés définitivement de nos serveurs. Cette action est irréversible.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Plusieurs entreprises",
      items: [
        {
          q: "Puis-je gérer plusieurs entreprises ?",
          a: "Oui. Avec la formule Pro, vous pouvez créer jusqu'à 3 profils d'entreprise distincts, chacun avec sa raison sociale, son logo, son adresse et ses coordonnées bancaires. Choisissez celui qui convient au moment de créer une facture.",
        },
        {
          q: "Comment définir un profil d'entreprise par défaut ?",
          a: "Dans l'onglet « Library » (Bibliothèque), ouvrez la section « Business » (Entreprise). Appuyez longuement sur un profil et choisissez « Set as Default » (Définir par défaut). Le profil par défaut est présélectionné quand vous créez une nouvelle facture.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Données et confidentialité",
      items: [
        {
          q: "Où sont stockées mes données ?",
          a: "Les données de votre compte et de vos factures sont stockées sur des serveurs en Allemagne, dans l'Union européenne, sous le régime du RGPD. Les outils de mesure d'audience du site invoicor.com (Google Analytics et PostHog, des services américains) ne fonctionnent que si vous acceptez les cookies.",
        },
        {
          q: "Comment protégez-vous mes données ?",
          a: "Avec des mesures de protection courantes : chaque connexion entre l'application et nos serveurs est chiffrée (HTTPS), les mots de passe sont stockés sous forme hachée, la connexion utilise des jetons sécurisés (ou Se connecter avec Apple ou Google), et l'accès à nos serveurs en Allemagne est restreint. Aucun service en ligne ne peut être totalement sûr, mais nous faisons le nécessaire pour empêcher tout accès non autorisé à vos données.",
        },
        {
          q: "Vendez-vous mes données ?",
          a: "Non. Nous ne vendons ni ne louons jamais vos données ni celles de vos clients. Nous ne partageons que le strict nécessaire avec les services qui font fonctionner Invoicor (notre hébergeur en Allemagne, Apple ou Google si vous vous connectez avec eux, et notre service d'abonnements), tous cités dans notre Politique de confidentialité.",
          link: { text: "Politique de confidentialité", page: "privacy" },
        },
        {
          q: "Puis-je exporter mes données ?",
          a: "Vous pouvez exporter chaque facture en PDF à tout moment. Pour un export complet de vos données, écrivez-nous à {email} : nous vous les fournirons dans un format lisible par machine, comme le prévoit le RGPD.",
        },
      ],
    },
    {
      id: "safety",
      title: "Sécurité et arnaques",
      items: [
        {
          q: "J'ai reçu une facture faite avec Invoicor. Est-elle authentique ?",
          a: "Invoicor est l'outil que l'expéditeur a utilisé pour créer la facture ; nous ne la rédigeons pas, ne l'envoyons pas pour le compte de qui que ce soit et n'en vérifions pas le contenu. Traitez-la comme n'importe quelle facture : avant de payer, vérifiez que vous connaissez l'expéditeur, que vous avez bien commandé le travail ou les produits, et que le montant est correct.",
        },
        {
          q: "Comment payer une facture en toute sécurité ?",
          a: "Vérifiez trois choses : l'expéditeur (une entreprise que vous connaissez), le montant (celui que vous avez convenu) et les coordonnées de paiement (les mêmes que celles que cette entreprise utilisait jusqu'ici). Au moindre doute, contactez l'expéditeur par un numéro de téléphone ou une adresse que vous connaissez déjà, pas avec les coordonnées indiquées sur la facture.",
        },
        {
          q: "Les coordonnées bancaires ou le lien de paiement d'une facture ont changé. Que faire ?",
          a: "Ne payez pas tout de suite. Le changement de coordonnées de paiement est l'arnaque à la facture la plus courante. Appelez l'expéditeur à un numéro que vous avez déjà et faites-lui confirmer les nouvelles coordonnées avant de payer.",
        },
        {
          q: "Invoicor gère-t-il ou protège-t-il le paiement ?",
          a: "Non. Invoicor n'est ni un service ni une passerelle de paiement : les paiements vont directement du client à l'expéditeur, via le lien de paiement ou les coordonnées bancaires de l'expéditeur. Invoicor ne peut ni retenir, ni annuler, ni rembourser un paiement. Nos Conditions d'utilisation l'expliquent à la section 5.",
          link: { text: "Conditions d'utilisation", page: "terms" },
        },
        {
          q: "Comment signaler une facture suspecte faite avec Invoicor ?",
          a: "Écrivez à {email} en joignant la facture et en précisant comment vous l'avez reçue. Nous pouvons suspendre les comptes qui envoient des factures frauduleuses. Si vous avez déjà payé un escroc, contactez aussi immédiatement votre banque et la police.",
        },
      ],
    },
  ],
};
