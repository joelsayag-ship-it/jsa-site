import type { Metadata } from "next";
import OffrePage, { SITE_URL } from "../components/OffrePage";

const CHEMIN = "/expert-comptable-professions-de-sante";

export const metadata: Metadata = {
  title: "Expert-comptable professions de santé : médecins, kinés, psychologues",
  description:
    "Expert-comptable pour médecins, masseurs-kinésithérapeutes et psychologues libéraux : BNC, déclaration 2035, TVA, CARMF, CARPIMKO, CIPAV, installation et société. Premier rendez-vous gratuit.",
  alternates: { canonical: `${SITE_URL}${CHEMIN}` },
  openGraph: {
    title: "Expert-comptable des professions de santé libérales | JSA Expertise",
    description: "Médecins, kinés, psychologues : installation, 2035, cotisations, société. Un expert-comptable qui connaît les BNC.",
    url: `${SITE_URL}${CHEMIN}`,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ProfessionsSantePage() {
  return (
    <OffrePage
      chemin={CHEMIN}
      fil="Professions de santé"
      badge="Médecins, kinésithérapeutes, psychologues"
      h1Debut="Expert-comptable des professions de santé :"
      h1Fin="médecins, kinés, psychologues"
      intro={[
        "Installation, remplacements, rétrocessions d'honoraires, déclaration 2035, cotisations de votre caisse de retraite : la comptabilité d'un professionnel de santé libéral a ses propres règles.",
        "JSA Expertise vous accompagne en exercice individuel ou en société, au cabinet à Charenton-le-Pont ou à distance.",
      ]}
      lienSecondaire={{ label: "Attestation de revenus", href: "/attestation-expert-comptable/revenus" }}
      service={{ nom: "Expert-comptable des professions de santé libérales", public: "Médecins, masseurs-kinésithérapeutes, psychologues et professions de santé libérales" }}
      blocs={[
        {
          type: "cartes",
          badge: "Votre profession",
          titre: "Ce qui change selon votre métier",
          cartes: [
            {
              titre: "Médecins",
              texte: "Retraite à la CARMF. Selon votre secteur conventionnel, l'Assurance maladie prend en charge une partie de vos cotisations sur les revenus conventionnés. Remplacements, collaboration, exercice en SELARL ou en SELAS : chaque mode d'exercice a ses règles comptables.",
            },
            {
              titre: "Masseurs-kinésithérapeutes",
              texte: "Retraite à la CARPIMKO. Rétrocessions d'honoraires entre titulaire et assistant ou remplaçant, matériel amorti sur plusieurs années, cabinet de groupe en société civile de moyens (SCM) avec sa propre déclaration.",
            },
            {
              titre: "Psychologues",
              texte: "Retraite à la CIPAV. Les séances sont exonérées de TVA pour les titulaires du titre de psychologue, mais pas forcément les activités annexes (formations, interventions en entreprise). Exercice possible en SASU ou en EURL.",
            },
          ],
          intro: "Nous accompagnons aussi d'autres professions de santé libérales : nous étudions votre situation au premier rendez-vous.",
        },
        {
          type: "liste",
          badge: "L'accompagnement",
          titre: "Ce que nous faisons pour vous",
          items: [
            {
              fort: "Le bon régime fiscal",
              texte: "micro-BNC jusqu'à 83 600 € de recettes ou déclaration contrôlée : nous comparons les deux avec vos frais réels, et nous refaisons le point quand votre installation change.",
            },
            {
              fort: "La comptabilité de recettes et de dépenses",
              texte: "banque connectée dans Tiime, suivi des honoraires encaissés et des rétrocessions, amortissement du matériel.",
            },
            {
              fort: "La déclaration 2035 et vos déclarations personnelles",
              texte: "2035 et ses annexes, report sur votre déclaration de revenus, déclaration des revenus professionnels pour vos cotisations sociales.",
            },
            {
              fort: "Vos cotisations anticipées",
              texte: "Urssaf et caisse de retraite : nous prévoyons les appels et les régularisations des premières années, pour que vous mettiez de côté le bon montant.",
            },
            {
              fort: "Le passage en société",
              texte: "SELARL ou SELAS pour les professions réglementées, SASU ou EURL pour les psychologues, SCM pour partager un cabinet : nous chiffrons l'intérêt avant toute décision.",
            },
            {
              fort: "Vos justificatifs de revenus",
              texte: "pour une location ou un prêt, même avant votre premier bilan : voir notre [attestation de revenus](/attestation-expert-comptable/revenus).",
            },
          ],
        },
        {
          type: "etapes",
          badge: "Votre installation",
          titre: "Vous vous installez en libéral : comment ça se passe",
          etapes: [
            {
              titre: "Avant l'installation",
              texte: "Premier rendez-vous gratuit : choix du régime fiscal, budget du cabinet, besoin de financement. Si votre banque le demande, nous établissons votre [prévisionnel](/attestation-expert-comptable/business-plan-previsionnel).",
            },
            {
              titre: "Les premiers mois",
              texte: "Comptabilité en place dans Tiime, suivi des encaissements, mise de côté pour les cotisations calculées d'abord sur une base forfaitaire puis régularisées.",
            },
            {
              titre: "Chaque année",
              texte: "Déclaration 2035, déclaration de revenus, point sur le régime fiscal et sur l'intérêt d'une société.",
            },
          ],
        },
        {
          type: "cta",
          titre: "Votre régime, vos frais, vos cotisations : faisons le point",
          texte: "Premier rendez-vous gratuit et sans engagement, en visio ou au cabinet.",
        },
      ]}
      faqTitre="Professions de santé : vos questions"
      faqs={[
        {
          q: "Micro-BNC ou déclaration contrôlée : que choisir ?",
          a: "En micro-BNC, l'administration applique un abattement forfaitaire de 34 % sur vos recettes, sans bilan à produire. En déclaration contrôlée, vous êtes imposé sur votre bénéfice réel, après déduction de vos frais. Si vos frais dépassent nettement 34 % de vos recettes (loyer de cabinet, matériel, formations), la déclaration contrôlée est souvent plus intéressante. Un cas chiffré figure dans notre article sur la [comptabilité des professions de santé libérales](/blog/expert-comptable-profession-liberale-paris-psychologue-kine-medecin).",
        },
        {
          q: "Un psychologue doit-il facturer la TVA ?",
          a: "Les séances réalisées par un psychologue titulaire du titre sont exonérées de TVA, comme les soins des professions de santé réglementées (article 261, 4, 1° du code général des impôts). Certaines activités annexes, comme les formations ou les interventions en entreprise, peuvent en revanche être soumises à la TVA : nous vérifions chaque cas avant la première facture.",
        },
        {
          q: "Je suis remplaçant : quelles sont mes obligations ?",
          a: "Le remplaçant exerce en libéral : il perçoit des rétrocessions d'honoraires, imposées en BNC, et cotise à l'Urssaf et à sa caisse de retraite. Il doit tenir une comptabilité de ses recettes et de ses frais, même simple. Nous regardons avec vous le régime le plus adapté à votre volume de remplacements.",
        },
        {
          q: "Faut-il passer en société ?",
          a: "Pas forcément. La société devient intéressante à partir d'un certain niveau de bénéfice, ou pour s'associer. Les professions de santé réglementées exercent en société sous des formes encadrées (SELARL, SELAS) ; les psychologues peuvent utiliser les formes de droit commun. Nous comparons les deux situations avec vos chiffres avant toute décision.",
        },
        {
          q: "Pouvez-vous établir une attestation de revenus pour une location ou un prêt ?",
          a: "Oui. C'est une demande fréquente des professionnels de santé récemment installés, souvent avant le premier bilan. Le détail est sur notre page [attestation de revenus](/attestation-expert-comptable/revenus).",
        },
      ]}
      liens={[
        { label: "Comptabilité santé : BNC, TVA, caisses", href: "/blog/expert-comptable-profession-liberale-paris-psychologue-kine-medecin" },
        { label: "Attestation de revenus", href: "/attestation-expert-comptable/revenus" },
        { label: "Prévisionnel d'installation", href: "/attestation-expert-comptable/business-plan-previsionnel" },
        { label: "Charges déductibles", href: "/blog/charges-deductibles-societe-freelance" },
        { label: "Micro-entreprise ou société", href: "/blog/micro-entreprise-quand-passer-en-societe" },
        { label: "Prêt immobilier en libéral", href: "/blog/pret-immobilier-freelance-dossier-banque" },
      ]}
      contact={{
        titre: "Parlons de votre activité libérale",
        formulaire: "Formulaire de la page professions de santé",
      }}
    />
  );
}
