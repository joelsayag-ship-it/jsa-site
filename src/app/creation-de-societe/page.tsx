import type { Metadata } from "next";
import OffrePage, { SITE_URL } from "../components/OffrePage";

const CHEMIN = "/creation-de-societe";

export const metadata: Metadata = {
  title: "Création de société avec un expert-comptable : SASU, EURL | JSA Expertise",
  description:
    "Créer votre SASU ou votre EURL avec un expert-comptable : choix du statut chiffré, statuts, immatriculation jusqu'au Kbis, ARE, ARCE et ACRE, puis comptabilité dès le premier mois.",
  alternates: { canonical: `${SITE_URL}${CHEMIN}` },
  openGraph: {
    title: "Création de société accompagnée | JSA Expertise",
    description: "Du choix du statut à votre première facture : création de SASU ou d'EURL avec un expert-comptable.",
    url: `${SITE_URL}${CHEMIN}`,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CreationSocietePage() {
  return (
    <OffrePage
      chemin={CHEMIN}
      fil="Création de société"
      badge="SASU, EURL, SAS, SARL"
      h1Debut="Création de société :"
      h1Fin="du choix du statut à votre première facture"
      intro={[
        "SASU, EURL ou société à plusieurs associés : JSA Expertise vous aide à choisir la forme adaptée à votre activité, prépare les statuts et suit l'immatriculation jusqu'au Kbis.",
        "La création est proposée avec l'accompagnement comptable de votre société, pour que la comptabilité, la TVA et votre rémunération soient en place dès le premier mois.",
      ]}
      lienSecondaire={{ label: "Simuler SASU ou EURL", href: "/ressources/simulateur-sasu-eurl" }}
      service={{ nom: "Création de société accompagnée par un expert-comptable", public: "Freelances, indépendants et créateurs d'entreprise" }}
      blocs={[
        {
          type: "liste",
          badge: "Ce que comprend la création",
          titre: "Tout ce que nous prenons en charge",
          items: [
            {
              fort: "Le choix du statut, chiffré",
              texte: "SASU ou EURL, impôt sur les sociétés ou sur le revenu, salaire ou dividendes : nous comparons les options avec votre chiffre d'affaires prévu, vos frais et votre situation personnelle.",
            },
            {
              fort: "Vos droits de créateur",
              texte: "maintien de l'ARE ou demande d'ARCE, ACRE : nous regardons ce qui s'applique à votre cas. Les règles sont détaillées dans notre guide [ARE ou ARCE](/devenir-freelance/are-ou-arce).",
            },
            {
              fort: "Les statuts et documents juridiques",
              texte: "rédaction des statuts, nomination du dirigeant, déclaration des bénéficiaires effectifs, attestation de domiciliation.",
            },
            {
              fort: "Capital et annonce légale",
              texte: "nous vous indiquons comment déposer le capital et nous préparons le texte de l'annonce légale.",
            },
            {
              fort: "L'immatriculation",
              texte: "dépôt du dossier sur le guichet unique des formalités des entreprises et suivi jusqu'à la réception du Kbis.",
            },
            {
              fort: "Le démarrage",
              texte: "espace Tiime connecté à votre compte bancaire professionnel, numéro de TVA intracommunautaire, modèle de facture conforme, calendrier de vos premières échéances.",
            },
          ],
        },
        {
          type: "etapes",
          badge: "Comment ça se passe",
          titre: "Votre création, étape par étape",
          etapes: [
            {
              titre: "Premier rendez-vous",
              texte: "Au cabinet à Charenton-le-Pont ou en visio : votre projet, votre chiffre d'affaires prévu, votre situation (salarié, demandeur d'emploi, portage). Vous recevez ensuite un devis.",
            },
            {
              titre: "Le choix chiffré",
              texte: "Comparaison des statuts et de la rémunération avec vos chiffres. Vous décidez en connaissant le net que chaque option vous laisse.",
            },
            {
              titre: "Statuts et immatriculation",
              texte: "Lettre de mission, statuts à signer, dépôt du capital, annonce légale, dossier sur le guichet unique, puis Kbis.",
            },
            {
              titre: "Votre premier mois",
              texte: "Comptabilité en place dans Tiime, première facture, déclarations de TVA programmées : votre société fonctionne.",
            },
          ],
        },
        {
          type: "texte",
          badge: "Un conseil honnête",
          titre: "Avez-vous besoin d'une société ?",
          paragraphes: [
            "Pas toujours. Pour tester une activité ou démarrer avec peu de frais, la micro-entreprise est souvent suffisante : sa création est gratuite et se fait en ligne sur le guichet unique. Si c'est votre cas, nous vous le disons au premier rendez-vous.",
            "La société devient intéressante quand le chiffre d'affaires dépasse les plafonds de la micro-entreprise, quand vos frais réels dépassent l'abattement forfaitaire, ou quand vous voulez séparer votre patrimoine et piloter votre rémunération. Les signaux à surveiller sont détaillés dans notre article [micro-entreprise : quand passer en société](/blog/micro-entreprise-quand-passer-en-societe).",
          ],
        },
        {
          type: "cta",
          titre: "SASU, EURL ou micro : on fait le calcul ensemble",
          texte: "Premier rendez-vous gratuit et sans engagement, en visio ou au cabinet.",
        },
        {
          type: "cartes",
          badge: "Votre situation",
          titre: "Les créations que l'on accompagne",
          cartes: [
            {
              titre: "Vous quittez votre CDI",
              texte: "Fin de contrat, droits éventuels au chômage, date de création : on prépare la société pour qu'elle soit prête avant votre première mission.",
            },
            {
              titre: "Vous sortez du portage salarial",
              texte: "On compare le net en portage et en société avec votre TJM réel, puis on crée la société pour signer avec votre client ou votre ESN.",
            },
            {
              titre: "Votre micro-entreprise devient trop petite",
              texte: "Plafond de chiffre d'affaires en vue, TVA, frais réels élevés : on chiffre le passage en société et le bon moment pour le faire.",
            },
            {
              titre: "Vous vous associez",
              texte: "SAS ou SARL à plusieurs : répartition du capital, pouvoirs des dirigeants, règles de sortie d'un associé, à prévoir dès les statuts.",
            },
          ],
        },
      ]}
      faqTitre="Création de société : vos questions"
      faqs={[
        {
          q: "Faut-il un expert-comptable pour créer sa société ?",
          a: "Non, ce n'est pas obligatoire : vous pouvez faire les démarches vous-même sur le guichet unique des formalités des entreprises. L'intérêt d'un expert-comptable est de chiffrer le choix du statut et de la rémunération avant de signer les statuts, puis de mettre la comptabilité en place dès le premier jour.",
        },
        {
          q: "SASU ou EURL : comment choisir ?",
          a: "La SASU donne au dirigeant le régime général de la Sécurité sociale, avec des cotisations plus élevées sur le salaire et la possibilité de se rémunérer en dividendes. L'EURL, avec un gérant travailleur non salarié, coûte moins cher en cotisations pour un même revenu, avec une protection sociale plus légère. Notre [simulateur SASU ou EURL](/ressources/simulateur-sasu-eurl) donne un premier ordre de grandeur.",
        },
        {
          q: "Peut-on créer sa société en étant demandeur d'emploi ?",
          a: "Oui. Selon votre situation, vous pouvez conserver une partie de vos allocations (ARE) ou demander l'aide à la reprise ou à la création d'entreprise (ARCE), et demander l'ACRE. Les deux options sont comparées avec des exemples dans notre guide [ARE ou ARCE](/devenir-freelance/are-ou-arce).",
        },
        {
          q: "Combien coûte la création ?",
          a: "Le prix de notre accompagnement est fixé sur devis, selon la forme de la société et le nombre d'associés. Les frais externes, comme les frais d'immatriculation et l'annonce légale, s'y ajoutent et sont indiqués dans le devis. Le détail des étapes et des coûts figure dans notre article [comment créer sa société en 2026](/blog/comment-creer-sa-societe-2026).",
        },
        {
          q: "Où domicilier ma société ?",
          a: "À votre domicile, dans un local professionnel ou chez une société de domiciliation. Chaque option a ses conditions : voir notre article sur la [domiciliation d'une société](/blog/domiciliation-societe-freelance-domicile-ou-domiciliataire).",
        },
      ]}
      liens={[
        { label: "Expert-comptable freelance", href: "/expert-comptable-freelance" },
        { label: "Guide : devenir freelance", href: "/devenir-freelance" },
        { label: "SASU ou EURL en 2026", href: "/blog/sasu-ou-eurl-quel-statut-choisir-2026" },
        { label: "Simulateur TJM en salaire net", href: "/ressources/simulateur-tjm-salaire-net" },
        { label: "ACRE 2026", href: "/devenir-freelance/acre" },
        { label: "Compte bancaire pro", href: "/blog/compte-bancaire-pro-freelance-micro-sasu-eurl" },
      ]}
      contact={{
        titre: "Parlons de votre projet de création",
        formulaire: "Formulaire de la page création de société",
      }}
    />
  );
}
