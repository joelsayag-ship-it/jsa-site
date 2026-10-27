/**
 * Contenu des pages « attestation d'expert-comptable ».
 * Une entrée = une page /attestation-expert-comptable/[slug].
 * Prix de départ par type (minimum 150 € HT) ; le montant définitif est confirmé au client avant toute intervention.
 */

export const PRIX_APPEL = "150 € HT";

/** Formate un prix plancher : prix(150) => "150 € HT" */
export const prix = (n: number) => `${n} € HT`;
export const DELAI = "24 à 48 h ouvrées";

export type Attestation = {
  slug: string;
  /** Libellé court (cartes, menu, select du formulaire) */
  label: string;
  /** Prix plancher affiché « à partir de », en euros HT */
  prixMin: number;
  /** Titre SEO (balise title) */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Résumé d'une ligne pour les cartes de la page principale */
  resume: string;
  destinataires: { titre: string; texte: string }[];
  contenu: string[];
  pieces: string[];
  exemple: { titre: string; texte: string };
  faqs: { q: string; a: string }[];
  /** Liens internes vers les contenus existants du site */
  liens?: { label: string; href: string }[];
};

export const ATTESTATIONS: Attestation[] = [
  {
    slug: "revenus",
    label: "Attestation de revenus",
    prixMin: 150,
    title: "Attestation de revenus expert-comptable : dès 150 € HT",
    description:
      "Crédit immobilier, location, dossier administratif : votre attestation de revenus signée par un expert-comptable inscrit à l'Ordre, sous 24 à 48 h. Devis sous 24 h.",
    h1: "Attestation de revenus par un expert-comptable",
    intro:
      "Indépendant, dirigeant de SASU ou d'EURL, micro-entrepreneur : vos revenus ne tiennent pas sur un bulletin de paie. Une banque, une agence immobilière ou une administration vous demande donc une attestation de revenus signée par un expert-comptable. Nous l'établissons à partir de vos pièces, en ligne, sous 24 à 48 h ouvrées.",
    resume: "Crédit immobilier, location, dossier administratif.",
    destinataires: [
      {
        titre: "Banque, crédit immobilier",
        texte:
          "Pour un prêt, la banque veut connaître vos revenus réels sur les dernières années : rémunération de dirigeant, dividendes, bénéfice de l'entreprise individuelle.",
      },
      {
        titre: "Bailleur ou agence immobilière",
        texte:
          "Sans fiche de paie, l'agence demande souvent une attestation de l'expert-comptable pour vérifier que vos revenus couvrent le loyer.",
      },
      {
        titre: "Administration, organisme, consulat",
        texte:
          "Certains dossiers (aides, démarches à l'étranger, organismes sociaux) exigent un justificatif de revenus établi par un professionnel indépendant.",
      },
    ],
    contenu: [
      "Votre identité et celle de votre entreprise (forme juridique, SIREN).",
      "Les revenus perçus sur la ou les périodes demandées : rémunération de dirigeant, dividendes, bénéfice imposable selon votre statut.",
      "La source des montants : comptes annuels, déclarations, comptabilité tenue.",
      "La signature de l'expert-comptable inscrit à l'Ordre, sur papier à en-tête du cabinet.",
    ],
    pieces: [
      "Les liasses fiscales ou comptes annuels des derniers exercices clos.",
      "Vos avis d'imposition des dernières années.",
      "Pour une SASU ou une SAS : bulletins de paie du dirigeant et décisions de distribution de dividendes.",
      "Pour une micro-entreprise : vos déclarations de chiffre d'affaires à l'URSSAF.",
      "Le modèle ou formulaire demandé par la banque ou l'agence, s'il existe.",
    ],
    exemple: {
      titre: "Exemple : consultant en SASU qui achète sa résidence principale",
      texte:
        "Sa banque demande ses revenus des trois dernières années. L'attestation reprend, année par année, son salaire de président et les dividendes votés, à partir des bilans, des bulletins de paie et des procès-verbaux d'assemblée. La banque dispose ainsi d'un chiffre fiable, signé par un professionnel qui engage sa responsabilité.",
    },
    faqs: [
      {
        q: "Je n'ai pas encore de bilan clos, puis-je obtenir une attestation de revenus ?",
        a: "Cela dépend de ce qui peut être vérifié. L'expert-comptable n'atteste que ce que les pièces permettent d'établir. Avec une comptabilité tenue et des rémunérations versées, une attestation sur une période en cours est souvent possible. Décrivez votre situation dans le formulaire : nous vous disons rapidement ce qui est faisable.",
      },
      {
        q: "La banque accepte-t-elle une attestation d'un expert-comptable qui ne tient pas ma comptabilité ?",
        a: "Oui. Ce que la banque attend, c'est la signature d'un expert-comptable inscrit à l'Ordre, qui a examiné les pièces justificatives. Il n'est pas nécessaire d'être client du cabinet à l'année.",
      },
      {
        q: "Pouvez-vous remplir le formulaire fourni par ma banque ?",
        a: "Oui, s'il ne contient que des informations que nous pouvons vérifier. Joignez-le à votre demande : nous le complétons et le signons, ou nous établissons une attestation sur papier libre qui reprend les mêmes éléments.",
      },
    ],
    liens: [
      { label: "Optimiser sa rémunération en SASU", href: "/blog/optimiser-remuneration-sasu-salaire-dividendes" },
      { label: "Simulateur impôt sur le revenu", href: "/simulateur-impot-revenu" },
    ],
  },
  {
    slug: "chiffre-affaires",
    label: "Attestation de chiffre d'affaires",
    prixMin: 150,
    title: "Attestation de chiffre d'affaires expert-comptable dès 150 € HT",
    description:
      "Banque, appel d'offres, assureur, bailleur : votre chiffre d'affaires attesté par un expert-comptable inscrit à l'Ordre, sous 24 à 48 h. Devis sous 24 h.",
    h1: "Attestation de chiffre d'affaires par un expert-comptable",
    intro:
      "Un client grand compte, un acheteur public, votre assureur ou votre banque vous demande de justifier votre chiffre d'affaires, souvent sous la forme d'une attestation de chiffre d'affaires comptable. L'attestation de l'expert-comptable confirme le montant réalisé sur un exercice ou une période donnée, à partir de votre comptabilité et de vos pièces.",
    resume: "Banque, appel d'offres, assureur, bailleur commercial.",
    destinataires: [
      {
        titre: "Appels d'offres et grands comptes",
        texte:
          "Les dossiers de candidature demandent souvent le chiffre d'affaires des derniers exercices, parfois attesté par un expert-comptable.",
      },
      {
        titre: "Banque et financeurs",
        texte:
          "Pour un prêt professionnel, une ligne de trésorerie ou un affacturage, le financeur veut un chiffre d'affaires vérifié.",
      },
      {
        titre: "Assureur, bailleur, franchiseur",
        texte:
          "La prime de certaines assurances, un loyer variable ou une redevance de franchise sont calculés sur le chiffre d'affaires déclaré.",
      },
    ],
    contenu: [
      "Le chiffre d'affaires hors taxes réalisé sur la période demandée (exercice clos ou période en cours).",
      "Si besoin, une ventilation par activité, par client ou par mois.",
      "La concordance avec la comptabilité et les déclarations de TVA.",
      "La signature de l'expert-comptable inscrit à l'Ordre.",
    ],
    pieces: [
      "Le grand livre ou le fichier des écritures comptables (FEC) de la période.",
      "Les déclarations de TVA correspondantes.",
      "Les comptes annuels si l'exercice est clos.",
      "Le modèle d'attestation imposé par le destinataire, s'il existe.",
    ],
    exemple: {
      titre: "Exemple : agence qui répond à un marché public",
      texte:
        "Le règlement de consultation demande le chiffre d'affaires des trois derniers exercices. L'attestation reprend les montants des comptes annuels, vérifiés avec les déclarations de TVA, et peut être jointe directement au dossier de candidature.",
    },
    faqs: [
      {
        q: "Peut-on attester un chiffre d'affaires sur une période en cours d'exercice ?",
        a: "Oui, si la comptabilité de la période est tenue et que les pièces permettent de vérifier le montant. L'attestation précise alors la période couverte et les éléments examinés.",
      },
      {
        q: "Je suis micro-entrepreneur, est-ce possible ?",
        a: "Oui. Nous partons de vos déclarations à l'URSSAF, de votre livre des recettes et de vos relevés bancaires pour attester le chiffre d'affaires encaissé.",
      },
      {
        q: "Quelle différence avec la déclaration que je peux faire moi-même ?",
        a: "Une déclaration sur l'honneur n'engage que vous. L'attestation de l'expert-comptable est établie après examen des pièces par un professionnel inscrit à l'Ordre qui engage sa responsabilité : c'est ce qui rassure le destinataire.",
      },
    ],
    liens: [
      { label: "TVA du freelance : franchise ou réel", href: "/blog/tva-freelance-franchise-reel-obligations-2026" },
      { label: "Micro-entreprise : quand passer en société", href: "/blog/micro-entreprise-quand-passer-en-societe" },
    ],
  },
  {
    slug: "fonds-propres",
    label: "Attestation de fonds propres",
    prixMin: 150,
    title: "Attestation de fonds propres expert-comptable dès 150 € HT",
    description:
      "Bail commercial, banque, agrément : vos capitaux propres attestés par un expert-comptable inscrit à l'Ordre, sous 24 à 48 h. 100 % en ligne, devis sous 24 h.",
    h1: "Attestation de fonds propres par un expert-comptable",
    intro:
      "Les capitaux propres mesurent la solidité financière de votre société. Un bailleur, une banque, un acheteur ou un organisme d'agrément peut vous demander de les justifier par une attestation d'expert-comptable, établie à partir du dernier bilan ou d'une situation comptable récente.",
    resume: "Bail commercial, banque, agrément, appel d'offres.",
    destinataires: [
      {
        titre: "Bailleur commercial",
        texte:
          "Avant de signer un bail, le propriétaire veut s'assurer que la société locataire est solide, en particulier si elle est récente.",
      },
      {
        titre: "Banque, financeurs, assureur-crédit",
        texte:
          "Le montant des fonds propres conditionne souvent la taille d'un prêt ou d'une garantie.",
      },
      {
        titre: "Agréments et appels d'offres",
        texte:
          "Certaines activités réglementées et certains marchés imposent un niveau minimum de capitaux propres.",
      },
    ],
    contenu: [
      "Le montant des capitaux propres à la date demandée : capital, réserves, report à nouveau, résultat.",
      "Si besoin, la comparaison avec le capital social (capitaux propres au moins égaux à la moitié du capital).",
      "La source : comptes annuels approuvés ou situation comptable intermédiaire.",
      "La signature de l'expert-comptable inscrit à l'Ordre.",
    ],
    pieces: [
      "Les derniers comptes annuels et la liasse fiscale.",
      "Le procès-verbal d'approbation des comptes et d'affectation du résultat.",
      "Pour une date récente : la comptabilité à jour de la période.",
      "Les statuts et, en cas d'augmentation de capital récente, les pièces correspondantes.",
    ],
    exemple: {
      titre: "Exemple : SAS qui prend ses premiers bureaux",
      texte:
        "Le bailleur demande une attestation des capitaux propres au dernier bilan. L'attestation reprend le montant de la liasse fiscale, rapproché des comptes approuvés, et précise la date de clôture concernée.",
    },
    faqs: [
      {
        q: "Mes capitaux propres sont négatifs, que se passe-t-il ?",
        a: "L'attestation reflète la réalité des comptes : nous ne pouvons pas attester un montant différent de celui que les pièces établissent. En revanche, nous pouvons vous conseiller sur les moyens de reconstituer vos fonds propres avant de déposer votre dossier.",
      },
      {
        q: "Fonds propres et capitaux propres, est-ce la même chose ?",
        a: "Dans la plupart des demandes, oui : il s'agit du total du bilan revenant aux associés (capital, réserves, résultat). Certains destinataires y ajoutent les comptes courants d'associés bloqués : précisez-le dans votre demande.",
      },
    ],
  },
  {
    slug: "france-travail",
    label: "Attestation pour France Travail",
    prixMin: 150,
    title: "Attestation expert-comptable France Travail dès 150 € HT",
    description:
      "Cumul ARE et création : attestation de rémunération ou de non-rémunération du dirigeant, signée par un expert-comptable, sous 24 à 48 h. Devis sous 24 h.",
    h1: "Attestation d'expert-comptable pour France Travail",
    intro:
      "Vous avez créé votre société en continuant à percevoir l'ARE ? France Travail peut vous demander de justifier les rémunérations perçues en tant que dirigeant, ou leur absence. L'attestation de l'expert-comptable apporte cette preuve à partir de la comptabilité de votre société.",
    resume: "Cumul ARE et création : rémunération ou non-rémunération.",
    destinataires: [
      {
        titre: "Maintien de l'ARE",
        texte:
          "Pour calculer ou maintenir vos allocations, France Travail doit connaître les rémunérations que vous tirez de votre société.",
      },
      {
        titre: "Dirigeant non rémunéré",
        texte:
          "Si vous ne vous versez rien, une attestation de non-rémunération confirme qu'aucune rémunération n'a été versée sur la période.",
      },
      {
        titre: "Régularisation de fin d'année",
        texte:
          "Pour les gérants non salariés, les revenus définitifs sont connus après la clôture : l'attestation permet de régulariser votre dossier.",
      },
    ],
    contenu: [
      "L'identité du dirigeant et de la société, sa fonction et sa date de nomination.",
      "Les rémunérations versées sur la période demandée, ou l'absence de rémunération.",
      "Les éléments examinés : comptabilité, comptes bancaires, décisions de l'associé unique.",
      "La signature de l'expert-comptable inscrit à l'Ordre.",
    ],
    pieces: [
      "Les statuts et l'acte de nomination du dirigeant.",
      "La comptabilité de la période (ou les relevés bancaires de la société).",
      "Les bulletins de paie ou décisions de rémunération, s'il y en a.",
      "Le courrier ou le formulaire de France Travail, s'il en existe un.",
    ],
    exemple: {
      titre: "Exemple : développeur qui lance sa SASU avec l'ARE",
      texte:
        "Il ne se verse pas de salaire pendant la première année. France Travail lui demande un justificatif : l'attestation de non-rémunération, établie à partir des relevés et de la comptabilité de la SASU, confirme qu'aucune rémunération n'a été versée sur la période.",
    },
    faqs: [
      {
        q: "Les dividendes comptent-ils comme une rémunération pour France Travail ?",
        a: "Les règles dépendent de votre statut et de votre situation, et elles évoluent. Indiquez-nous ce que France Travail vous demande exactement : nous établissons une attestation qui répond précisément à la demande, en distinguant si besoin rémunération et dividendes.",
      },
      {
        q: "Je suis en micro-entreprise, ai-je besoin d'une attestation ?",
        a: "En micro-entreprise, ce sont vos déclarations de chiffre d'affaires qui comptent, et France Travail les demande en général directement. L'attestation sert surtout aux dirigeants de société.",
      },
    ],
    liens: [
      { label: "ARE, ARCE, ACRE : le guide", href: "/blog/are-arce-acre-creation-societe-freelance" },
      { label: "Passer de salarié à freelance", href: "/blog/passer-salarie-freelance-guide-2026" },
    ],
  },
  {
    slug: "bpi",
    label: "Attestation pour Bpifrance",
    prixMin: 400,
    title: "Attestation expert-comptable Bpifrance dès 400 € HT",
    description:
      "État récapitulatif des dépenses, fonds propres, chiffre d'affaires : vos attestations Bpifrance signées par un expert-comptable inscrit à l'Ordre. Devis sous 24 h.",
    h1: "Attestation d'expert-comptable pour Bpifrance",
    intro:
      "Prêt d'amorçage, subvention, avance remboursable : un dossier Bpifrance demande souvent des chiffres attestés par un expert-comptable, au dépôt de la demande ou à la fin du programme pour débloquer le solde de l'aide. Nous établissons ces attestations à partir de votre comptabilité et de vos justificatifs.",
    resume: "Prêt, subvention, état récapitulatif des dépenses.",
    destinataires: [
      {
        titre: "État récapitulatif des dépenses",
        texte:
          "À la fin d'un programme aidé, Bpifrance demande souvent l'état des dépenses réalisées, visé par l'expert-comptable, avant de verser le solde.",
      },
      {
        titre: "Fonds propres",
        texte:
          "Le montant de certains prêts est plafonné par les fonds propres de la société : une attestation permet de les justifier.",
      },
      {
        titre: "Chiffre d'affaires et effectif",
        texte:
          "Selon le programme, des données sur l'activité sont demandées pour vérifier l'éligibilité.",
      },
    ],
    contenu: [
      "Les montants demandés par Bpifrance, selon le modèle du programme quand il existe.",
      "Pour un état de dépenses : le rapprochement de chaque dépense avec les factures et les paiements.",
      "La période et le périmètre couverts.",
      "La signature de l'expert-comptable inscrit à l'Ordre.",
    ],
    pieces: [
      "La convention d'aide ou le courrier de Bpifrance précisant ce qui est attendu.",
      "Le modèle d'état récapitulatif ou d'attestation fourni par Bpifrance.",
      "Les factures et justificatifs de paiement des dépenses du programme.",
      "La comptabilité de la période et, si besoin, les derniers comptes annuels.",
    ],
    exemple: {
      titre: "Exemple : startup en fin de programme d'innovation",
      texte:
        "Pour recevoir le solde de son aide, elle doit présenter l'état des dépenses réalisées. Nous rapprochons chaque ligne des factures et des relevés, puis nous visons l'état sur le modèle demandé.",
    },
    faqs: [
      {
        q: "Bpifrance exige-t-il toujours un expert-comptable ?",
        a: "Non, cela dépend du programme et du montant. Certaines conventions acceptent une déclaration du dirigeant, d'autres demandent un expert-comptable ou un commissaire aux comptes. Vérifiez votre convention ou transmettez-la-nous avec votre demande.",
      },
      {
        q: "Pouvez-vous aussi préparer le business plan ou le prévisionnel ?",
        a: "Oui. Nous préparons les prévisionnels financiers demandés par Bpifrance et les banques : compte de résultat, plan de financement et trésorerie sur trois ans. Précisez-le dans votre message, nous vous ferons une proposition séparée.",
      },
    ],
    liens: [
      { label: "Comment créer sa société en 2026", href: "/blog/comment-creer-sa-societe-2026" },
    ],
  },
];

export function getAttestation(slug: string) {
  return ATTESTATIONS.find((a) => a.slug === slug);
}
