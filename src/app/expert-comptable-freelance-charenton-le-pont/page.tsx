import type { Metadata } from "next";
import OffrePage, { SITE_URL } from "../components/OffrePage";

const CHEMIN = "/expert-comptable-freelance-charenton-le-pont";

export const metadata: Metadata = {
  title: "Expert-comptable Charenton-le-Pont (94220) | JSA Expertise",
  description:
    "Cabinet d'expertise comptable installé à Charenton-le-Pont, sur la ligne 8 du métro. Indépendants, professions de santé, créateurs et petites sociétés : rendez-vous au cabinet ou en visio. Premier rendez-vous gratuit.",
  alternates: { canonical: `${SITE_URL}${CHEMIN}` },
  openGraph: {
    title: "Expert-comptable à Charenton-le-Pont | JSA Expertise",
    description: "Le cabinet est dans votre ville : rendez-vous au cabinet ou en visio, comptabilité en ligne avec Tiime.",
    url: `${SITE_URL}${CHEMIN}`,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CharentonPage() {
  return (
    <OffrePage
      chemin={CHEMIN}
      fil="Expert-comptable à Charenton-le-Pont"
      badge="Cabinet installé à Charenton-le-Pont (94220)"
      h1Debut="Expert-comptable à Charenton-le-Pont :"
      h1Fin="le cabinet est dans votre ville"
      intro={[
        "JSA Expertise est installé à Charenton-le-Pont, près de la ligne 8 du métro (Charenton-Écoles, Liberté). Vous pouvez passer au cabinet quand c'est utile, et gérer le reste à distance.",
        "Indépendants, professions libérales, créateurs d'entreprise ou dirigeants de petites sociétés : vous échangez directement avec votre expert-comptable.",
      ]}
      zone={{ type: "City", nom: "Charenton-le-Pont" }}
      service={{ nom: "Expert-comptable à Charenton-le-Pont", public: "Indépendants, professions libérales et petites sociétés de Charenton-le-Pont" }}
      blocs={[
        {
          type: "cartes",
          badge: "Qui nous accompagnons",
          titre: "Les Charentonnais que l'on accompagne",
          cartes: [
            {
              titre: "Freelances et consultants",
              texte: "Consultants, développeurs, métiers du conseil et du numérique, en SASU, en EURL ou en micro-entreprise : voir notre accompagnement [expert-comptable freelance](/expert-comptable-freelance).",
            },
            {
              titre: "Professions de santé",
              texte: "Médecins, kinésithérapeutes, psychologues installés à Charenton ou alentour : BNC, déclaration 2035, cotisations de votre caisse. Voir notre page [professions de santé](/expert-comptable-professions-de-sante).",
            },
            {
              titre: "Créateurs d'entreprise",
              texte: "Vous lancez votre activité depuis Charenton : choix du statut chiffré, statuts, immatriculation. Voir notre offre de [création de société](/creation-de-societe).",
            },
            {
              titre: "Sociétés qui changent de cabinet",
              texte: "Votre dossier est suivi ailleurs, ou vous avez tenu votre comptabilité seul : voir comment se passe une [reprise de dossier](/reprise-dossier-comptable).",
            },
          ],
        },
        {
          type: "texte",
          badge: "Le cabinet",
          titre: "Un expert-comptable à Charenton, au cabinet ou à distance",
          paragraphes: [
            "Le premier rendez-vous se fait au cabinet ou en visio, selon ce qui vous arrange. Vous pouvez passer au cabinet pour le premier échange ou pour le point sur le bilan, et gérer le quotidien à distance.",
            "Au quotidien, tout passe par l'application Tiime : relevés bancaires synchronisés, justificatifs en photo, factures. Vos questions reçoivent une réponse de votre expert-comptable sous 24 h, par téléphone ou par e-mail.",
            "Le cabinet accompagne aussi les villes voisines : [Saint-Maurice](/expert-comptable-freelance-saint-maurice), [Saint-Mandé](/expert-comptable-freelance-saint-mande), [Vincennes](/expert-comptable-freelance-vincennes), [Alfortville](/expert-comptable-freelance-alfortville), [Ivry-sur-Seine](/expert-comptable-freelance-ivry-sur-seine) et le [12e arrondissement de Paris](/expert-comptable-freelance-paris-12).",
          ],
        },
        {
          type: "avis",
          badge: "Avis clients",
          titre: "Ce qu'en disent nos clients",
          noms: ["Charlotte M.", "Lucie S.", "Thomas D."],
        },
        {
          type: "etapes",
          badge: "Comment ça se passe",
          titre: "Votre premier rendez-vous à Charenton",
          etapes: [
            {
              titre: "Prise de rendez-vous",
              texte: "Par le formulaire, par téléphone ou en réservant un créneau en ligne. Vous choisissez : au cabinet ou en visio.",
            },
            {
              titre: "Le premier échange",
              texte: "Votre activité, votre statut, vos échéances et vos questions. Gratuit et sans engagement.",
            },
            {
              titre: "Le devis",
              texte: "Vous recevez un devis précis. Si vous l'acceptez, la lettre de mission est signée en ligne et votre espace Tiime est ouvert.",
            },
          ],
        },
        {
          type: "cta",
          titre: "Un expert-comptable à Charenton : faisons connaissance",
          texte: "Premier rendez-vous gratuit et sans engagement, au cabinet ou en visio.",
        },
      ]}
      faqTitre="Charenton-le-Pont : vos questions"
      faqs={[
        {
          q: "Où se trouve le cabinet ?",
          a: "À Charenton-le-Pont (94220), aux portes du 12e arrondissement, près des stations Charenton-Écoles et Liberté de la ligne 8. Le cabinet reçoit sur rendez-vous : l'adresse vous est confirmée au moment de la prise de rendez-vous.",
        },
        {
          q: "Faut-il venir au cabinet ?",
          a: "Non. Le premier rendez-vous peut se faire en visio, et le suivi se fait en ligne avec Tiime. Venir au cabinet reste possible à chaque étape, par exemple pour le bilan.",
        },
        {
          q: "Peut-on domicilier sa société à son domicile à Charenton ?",
          a: "Oui, en principe : le dirigeant peut domicilier sa société à son domicile, avec des règles différentes selon que vous êtes propriétaire ou locataire et selon le règlement de copropriété. Les options sont détaillées dans notre article sur la [domiciliation d'une société](/blog/domiciliation-societe-freelance-domicile-ou-domiciliataire).",
        },
        {
          q: "Combien coûte un expert-comptable à Charenton ?",
          a: "Le prix dépend de la forme de votre entreprise, de votre volume de pièces et du niveau de conseil attendu. Vous recevez un devis précis après le premier rendez-vous. Les fourchettes habituelles sont détaillées dans notre article [combien coûte un expert-comptable](/blog/combien-coute-expert-comptable-freelance).",
        },
      ]}
      liens={[
        { label: "Expert-comptable freelance", href: "/expert-comptable-freelance" },
        { label: "Professions de santé", href: "/expert-comptable-professions-de-sante" },
        { label: "Création de société", href: "/creation-de-societe" },
        { label: "Attestation de revenus", href: "/attestation-expert-comptable/revenus" },
        { label: "Simulateur SASU ou EURL", href: "/ressources/simulateur-sasu-eurl" },
        { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
      ]}
      contact={{
        titre: "Prenons rendez-vous à Charenton",
        formulaire: "Formulaire de la page Charenton-le-Pont",
      }}
    />
  );
}
