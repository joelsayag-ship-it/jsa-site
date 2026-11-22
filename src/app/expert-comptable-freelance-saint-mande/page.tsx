import type { Metadata } from "next";
import OffrePage, { SITE_URL } from "../components/OffrePage";

const CHEMIN = "/expert-comptable-freelance-saint-mande";

export const metadata: Metadata = {
  title: "Expert-comptable Saint-Mandé (94160) | JSA Expertise",
  description:
    "Expert-comptable pour les indépendants, professions libérales et petites sociétés de Saint-Mandé. Cabinet voisin à Charenton-le-Pont, rendez-vous au cabinet ou en visio. Premier rendez-vous gratuit.",
  alternates: { canonical: `${SITE_URL}${CHEMIN}` },
  openGraph: {
    title: "Expert-comptable à Saint-Mandé | JSA Expertise",
    description: "Indépendants, professions libérales et sociétés de Saint-Mandé : un expert-comptable voisin, joignable directement.",
    url: `${SITE_URL}${CHEMIN}`,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function SaintMandePage() {
  return (
    <OffrePage
      chemin={CHEMIN}
      fil="Expert-comptable à Saint-Mandé"
      badge="Cabinet voisin, à Charenton-le-Pont"
      h1Debut="Expert-comptable à Saint-Mandé :"
      h1Fin="un cabinet voisin, joignable directement"
      intro={[
        "Entre le bois de Vincennes et Paris, Saint-Mandé compte de nombreux indépendants et professions libérales. JSA Expertise, installé à Charenton-le-Pont de l'autre côté du bois, les accompagne au cabinet ou à distance.",
        "Vous échangez directement avec votre expert-comptable, et le quotidien se gère en ligne avec l'application Tiime.",
      ]}
      zone={{ type: "City", nom: "Saint-Mandé" }}
      service={{ nom: "Expert-comptable à Saint-Mandé", public: "Indépendants, professions libérales et petites sociétés de Saint-Mandé" }}
      blocs={[
        {
          type: "cartes",
          badge: "Qui nous accompagnons",
          titre: "Les Saint-Mandéens que l'on accompagne",
          cartes: [
            {
              titre: "Professions libérales et de santé",
              texte: "Médecins, kinésithérapeutes, psychologues, en cabinet ou en remplacement : micro-BNC ou déclaration contrôlée, 2035, cotisations. Voir notre page [professions de santé](/expert-comptable-professions-de-sante).",
            },
            {
              titre: "Consultants et freelances",
              texte: "Conseil, numérique, finance, en SASU, en EURL ou en micro-entreprise : voir notre accompagnement [expert-comptable freelance](/expert-comptable-freelance).",
            },
            {
              titre: "Créateurs d'entreprise",
              texte: "Statut chiffré avant de signer, statuts, immatriculation jusqu'au Kbis : voir notre offre de [création de société](/creation-de-societe).",
            },
            {
              titre: "Locataires et emprunteurs",
              texte: "Indépendant récemment installé, vous devez justifier vos revenus pour louer ou acheter : voir notre [attestation de revenus](/attestation-expert-comptable/revenus).",
            },
          ],
        },
        {
          type: "liste",
          badge: "L'accompagnement",
          titre: "Ce que votre expert-comptable prend en charge",
          items: [
            { fort: "Comptabilité et TVA", texte: "banque synchronisée dans Tiime, justificatifs en photo, déclarations de TVA dans les délais." },
            { fort: "Bilan et déclarations", texte: "comptes annuels et liasse fiscale pour une société, déclaration 2035 pour une profession libérale en entreprise individuelle." },
            { fort: "Rémunération", texte: "salaire, dividendes ou mise en réserve en SASU ou en EURL, avec une simulation avant chaque décision." },
            { fort: "Conseil", texte: "vos questions reçoivent une réponse de votre expert-comptable sous 24 h, par téléphone ou par e-mail." },
          ],
        },
        {
          type: "avis",
          badge: "Avis clients",
          titre: "Ce qu'en disent nos clients",
          noms: ["Benjamin T.", "Julien G.", "Hannah-léa F."],
        },
        {
          type: "texte",
          badge: "Au cabinet ou à distance",
          titre: "Depuis Saint-Mandé, comment ça se passe",
          paragraphes: [
            "Le premier rendez-vous se fait en visio ou au cabinet de Charenton-le-Pont, selon ce qui vous arrange. Il est gratuit et sans engagement : votre activité, votre statut, vos échéances, puis un devis précis.",
            "Ensuite, tout se fait à distance : relevés bancaires et justificatifs dans Tiime, lettre de mission et comptes annuels signés en ligne. Le cabinet reste à votre disposition pour un rendez-vous quand c'est utile.",
            "Le cabinet accompagne aussi les villes voisines : [Vincennes](/expert-comptable-freelance-vincennes), [Charenton-le-Pont](/expert-comptable-freelance-charenton-le-pont), [Saint-Maurice](/expert-comptable-freelance-saint-maurice) et le [12e arrondissement de Paris](/expert-comptable-freelance-paris-12).",
          ],
        },
        {
          type: "cta",
          titre: "Un expert-comptable pour votre activité à Saint-Mandé",
          texte: "Premier rendez-vous gratuit et sans engagement, en visio ou au cabinet.",
        },
      ]}
      faqTitre="Saint-Mandé : vos questions"
      faqs={[
        {
          q: "Accompagnez-vous les professions libérales de Saint-Mandé ?",
          a: "Oui : médecins, kinésithérapeutes, psychologues et autres professions libérales, en exercice individuel ou en société. Nous connaissons la déclaration 2035 et les caisses propres à chaque profession (CARMF, CARPIMKO, CIPAV).",
        },
        {
          q: "Peut-on tout faire à distance depuis Saint-Mandé ?",
          a: "Oui. Les documents passent par Tiime, les échanges par téléphone, e-mail ou visio, et les documents se signent en ligne. Le cabinet de Charenton-le-Pont vous reçoit si vous préférez vous rencontrer.",
        },
        {
          q: "Comment se rémunérer en SASU : salaire ou dividendes ?",
          a: "Le salaire supporte des cotisations sociales mais ouvre des droits (retraite, prévoyance). Les dividendes sont soumis en 2026 au prélèvement forfaitaire unique de 31,4 %, sauf option pour le barème. Le bon dosage dépend de vos revenus et de vos projets : notre chapitre [rémunération en SASU et en EURL](/devenir-freelance/remuneration-sasu-eurl) détaille les règles.",
        },
        {
          q: "Combien coûte un expert-comptable à Saint-Mandé ?",
          a: "Le prix dépend de la forme de votre entreprise, de votre volume de pièces et du niveau de conseil attendu. Vous recevez un devis précis après le premier rendez-vous. Les fourchettes habituelles sont détaillées dans notre article [combien coûte un expert-comptable](/blog/combien-coute-expert-comptable-freelance).",
        },
      ]}
      liens={[
        { label: "Professions de santé", href: "/expert-comptable-professions-de-sante" },
        { label: "Expert-comptable freelance", href: "/expert-comptable-freelance" },
        { label: "Création de société", href: "/creation-de-societe" },
        { label: "Reprise de dossier", href: "/reprise-dossier-comptable" },
        { label: "Attestation de revenus", href: "/attestation-expert-comptable/revenus" },
        { label: "Simulateur SASU ou EURL", href: "/ressources/simulateur-sasu-eurl" },
      ]}
      contact={{
        titre: "Parlons de votre activité à Saint-Mandé",
        formulaire: "Formulaire de la page Saint-Mandé",
      }}
    />
  );
}
