import type { Metadata } from "next";
import OffrePage, { SITE_URL } from "../components/OffrePage";

const CHEMIN = "/reprise-dossier-comptable";

export const metadata: Metadata = {
  title: "Reprise de dossier comptable et changement d'expert-comptable | JSA Expertise",
  description:
    "Vous changez d'expert-comptable ou avez besoin d'un cabinet pour établir votre bilan ? JSA Expertise reprend votre dossier, en lien avec votre précédent cabinet. Premier rendez-vous gratuit.",
  alternates: { canonical: `${SITE_URL}${CHEMIN}` },
  openGraph: {
    title: "Reprise de dossier comptable | JSA Expertise",
    description: "Reprise de votre dossier en cours d'année ou à la clôture, dans le respect des règles de la profession.",
    url: `${SITE_URL}${CHEMIN}`,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RepriseDossierPage() {
  return (
    <OffrePage
      chemin={CHEMIN}
      fil="Reprise de dossier comptable"
      badge="Sociétés, indépendants, professions libérales"
      h1Debut="Reprise de dossier comptable :"
      h1Fin="on prend le relais, dans les règles"
      intro={[
        "Vous changez d'expert-comptable, votre cabinet cesse son activité, ou vous avez tenu votre comptabilité seul et il faut maintenant établir le bilan ? JSA Expertise reprend votre dossier, à la clôture ou en cours d'année.",
        "Quand un autre expert-comptable suivait votre dossier, la transition se fait avec lui, par écrit, comme le prévoit le code de déontologie de la profession.",
      ]}
      service={{ nom: "Reprise de dossier comptable", public: "Sociétés, indépendants et professions libérales" }}
      blocs={[
        {
          type: "cartes",
          badge: "Votre situation",
          titre: "Les reprises que l'on nous confie",
          cartes: [
            {
              titre: "Vous changez de cabinet",
              texte: "Le choix de votre expert-comptable vous appartient. Nous organisons la transition avec le cabinet qui vous suivait, sans interruption de vos déclarations.",
            },
            {
              titre: "Vous avez tenu votre comptabilité seul",
              texte: "Logiciel en ligne ou tableur : nous partons de vos écritures, les vérifions (banque, TVA, immobilisations) et établissons le bilan et la liasse fiscale.",
            },
            {
              titre: "Votre activité évolue",
              texte: "Passage de micro-entreprise en société, première embauche, nouvelle activité : nous reprenons le dossier existant pour l'accompagner dans cette étape.",
            },
            {
              titre: "Votre cabinet cesse son activité",
              texte: "Départ en retraite, fermeture ou cession du cabinet : nous reprenons votre dossier à la date convenue, en lien avec votre ancien expert-comptable.",
            },
          ],
        },
        {
          type: "etapes",
          badge: "Comment ça se passe",
          titre: "La reprise de votre dossier, étape par étape",
          etapes: [
            {
              titre: "Premier rendez-vous",
              texte: "Au cabinet à Charenton-le-Pont ou en visio : votre activité, votre date de clôture, les prochaines échéances (TVA, bilan, liasse). Vous recevez ensuite un devis.",
            },
            {
              titre: "Courrier à votre ancien cabinet",
              texte: "Avant d'accepter la mission, nous informons par écrit l'expert-comptable qui vous suivait. Ce courrier entre confrères est une obligation déontologique : il permet aussi de vérifier que la transition se fait dans de bonnes conditions.",
            },
            {
              titre: "Récupération des éléments",
              texte: "Dernier bilan et liasse fiscale, fichier des écritures comptables (FEC), balance, statuts, accès à vos espaces impots.gouv et Urssaf : nous établissons la liste avec vous.",
            },
            {
              titre: "Lettre de mission et mise en place",
              texte: "Lettre de mission signée, espace Tiime ouvert et connecté à votre banque, calendrier des prochaines échéances : votre dossier est repris.",
            },
          ],
        },
        {
          type: "texte",
          badge: "Le calendrier",
          titre: "À quel moment reprendre un dossier ?",
          paragraphes: [
            "Le plus simple est de démarrer avec un nouvel exercice : le cabinet qui vous suivait établit les comptes de l'exercice en cours, et nous prenons la suite à partir du suivant. Les responsabilités de chacun sont claires.",
            "Une reprise en cours d'exercice reste possible. On part alors d'une situation arrêtée à la date du changement, établie avec votre ancien cabinet ou reconstituée à partir de vos relevés bancaires.",
            "Avant de prendre votre décision, relisez votre lettre de mission actuelle : elle prévoit en général un préavis et les conditions de fin de mission.",
          ],
        },
        {
          type: "cta",
          titre: "Votre dossier, vos échéances : faisons le point",
          texte: "Premier rendez-vous gratuit et sans engagement, en visio ou au cabinet.",
        },
        {
          type: "liste",
          badge: "L'accompagnement",
          titre: "Ce que comprend le suivi de votre dossier",
          intro: "Une fois le dossier repris, l'accompagnement est le même que pour tous nos clients, décrit sur notre page [expert-comptable freelance](/expert-comptable-freelance).",
          items: [
            { fort: "Tenue comptable et TVA", texte: "banque synchronisée dans Tiime, justificatifs en photo, déclarations de TVA dans les délais." },
            { fort: "Bilan et liasse fiscale", texte: "clôture de l'exercice, comptes annuels, liasse fiscale et déclaration de résultat." },
            { fort: "Conseil", texte: "rémunération, salaire ou dividendes, choix fiscaux : vos questions reçoivent une réponse de votre expert-comptable sous 24 h." },
            { fort: "Facturation électronique", texte: "mise en conformité de votre facturation avec les nouvelles obligations." },
          ],
        },
      ]}
      faqTitre="Reprise de dossier : vos questions"
      faqs={[
        {
          q: "Dois-je prévenir moi-même mon expert-comptable actuel ?",
          a: "C'est préférable : votre lettre de mission prévoit en général un préavis, et il est plus simple d'en parler directement. De notre côté, nous informons aussi votre précédent cabinet par écrit avant d'accepter la mission : c'est une obligation du code de déontologie pour tout expert-comptable qui reprend un dossier.",
        },
        {
          q: "Peut-on changer d'expert-comptable en cours d'année ?",
          a: "Oui. Le plus simple reste de changer au début d'un exercice, mais une reprise en cours d'année est possible : on part d'une situation comptable arrêtée à la date du changement.",
        },
        {
          q: "Quels documents faut-il récupérer ?",
          a: "Les derniers comptes annuels et liasses fiscales, le fichier des écritures comptables (FEC), la balance et le grand livre de l'exercice en cours, les statuts et procès-verbaux, les déclarations de TVA et les accès à vos espaces en ligne (impots.gouv, Urssaf). Nous vous envoyons la liste adaptée à votre dossier.",
        },
        {
          q: "J'ai tenu ma comptabilité seul sur un logiciel : comment ça se passe ?",
          a: "Nous partons de vos écritures existantes. Comme aucun expert-comptable ne suivait le dossier, il n'y a pas de confrère à informer. Nous vérifions la banque, la TVA et les immobilisations avant d'établir le bilan : il faut prévoir un peu plus de temps la première année.",
        },
        {
          q: "Combien coûte une reprise de dossier ?",
          a: "Le forfait mensuel dépend de votre activité et de votre volume de pièces, comme pour tout nouveau client. Si la comptabilité de l'exercice en cours doit être complétée ou reprise, ce travail est chiffré à part dans le devis, après examen des pièces. Les fourchettes habituelles sont détaillées dans notre article [combien coûte un expert-comptable](/blog/combien-coute-expert-comptable-freelance).",
        },
      ]}
      liens={[
        { label: "Expert-comptable freelance", href: "/expert-comptable-freelance" },
        { label: "Création de société", href: "/creation-de-societe" },
        { label: "Professions de santé", href: "/expert-comptable-professions-de-sante" },
        { label: "Clôture au 31/12 : checklist", href: "/blog/cloture-31-12-sasu-eurl-checklist-freelance" },
        { label: "Facturation électronique", href: "/blog/facturation-electronique-obligations-etapes-2026" },
        { label: "Coût d'un expert-comptable", href: "/blog/combien-coute-expert-comptable-freelance" },
      ]}
      contact={{
        titre: "Parlons de la reprise de votre dossier",
        formulaire: "Formulaire de la page reprise de dossier comptable",
      }}
    />
  );
}
