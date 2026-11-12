import type { Metadata } from "next";
import { SITE_URL, urlChapitre } from "../chapitres";
import { A, CtaEncart, Encart, GabaritChapitre, H2, H3, Ol, P, Tableau, Ul, euros, type Faq } from "../ui";
import { ACRE_SEUIL_FIN, ACRE_SEUIL_TOTAL, remunerationSeule } from "@/lib/devenir-freelance/calculs";

const SLUG = "acre";
const PAGE_URL = `${SITE_URL}${urlChapitre(SLUG)}`;

export const metadata: Metadata = {
  title: "ACRE 2026 : nouvelles règles, demande sous 60 jours, calcul",
  description:
    "ACRE 2026 : exonération ramenée à 25 %, plus automatique, demande à l'Urssaf sous 60 jours. Conditions, micro-entreprise, EURL, SASU et exemples calculés avec le moteur Urssaf.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "ACRE 2026 : nouvelles règles, demande sous 60 jours et calcul de l'exonération",
    description: "Ce qui a changé au 1er janvier et au 1er juillet 2026, et ce que l'ACRE vous fait vraiment économiser.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const NIVEAUX = [30_000, 50_000, 70_000];
const EXEMPLES = NIVEAUX.map((n) => {
  try {
    const sans = remunerationSeule(n);
    const avec = remunerationSeule(n, { acre: true });
    return { n, sans, avec };
  } catch {
    return null;
  }
}).filter((x): x is NonNullable<typeof x> => x !== null);

const FAQS: Faq[] = [
  {
    q: "L'ACRE est-elle encore automatique en 2026 ?",
    a: "Non. Jusqu'au 31 décembre 2025, l'ACRE était accordée sans démarche pour la plupart des créateurs. Depuis le 1er janvier 2026, il faut la demander à l'Urssaf au plus tard le 60e jour qui suit le début d'activité. L'Urssaf répond sous 30 jours ; sans réponse, la demande est acceptée.",
  },
  {
    q: "Combien fait-on économiser l'ACRE en 2026 ?",
    a: "Hors micro-entreprise, l'exonération est égale au quart (25 %) des cotisations concernées si votre revenu ne dépasse pas 75 % du plafond de la Sécurité sociale, soit 36 045 € en 2026. Elle diminue ensuite et s'annule à 48 060 €. Elle dure 12 mois et ne porte ni sur la retraite complémentaire ni sur la CSG-CRDS.",
  },
  {
    q: "Quel est le taux ACRE pour une micro-entreprise en 2026 ?",
    a: "Pour une micro-entreprise créée ou reprise depuis le 1er juillet 2026, le taux de cotisation est ramené à 75 % du taux normal (exemple officiel : 15,9 % au lieu de 21,2 %), jusqu'à la fin du 3e trimestre civil qui suit le début d'activité. Avant le 1er juillet 2026, la réduction était de 50 %.",
  },
  {
    q: "L'ACRE sert-elle à quelque chose en SASU sans salaire ?",
    a: "Pas pour les cotisations : sans salaire, il n'y a pas de cotisations à exonérer. Mais elle reste indispensable si vous voulez l'ARCE, qui est réservée aux créateurs ayant obtenu l'ACRE.",
  },
  {
    q: "Qui peut bénéficier de l'ACRE ?",
    a: "Notamment les demandeurs d'emploi indemnisés, les demandeurs d'emploi non indemnisés inscrits 6 mois au cours des 18 derniers mois, les bénéficiaires du RSA ou de l'ASS, les jeunes de 18 à 25 ans (29 ans en cas de handicap), et les créateurs installés dans certaines zones (quartiers prioritaires, zones France ruralités revitalisation). Il ne faut pas en avoir bénéficié dans les 3 années précédentes.",
  },
];

const PLAN = [
  { id: "changements-2026", label: "Ce qui a changé en 2026" },
  { id: "conditions", label: "Qui peut en bénéficier" },
  { id: "montant", label: "Le montant de l'exonération" },
  { id: "exemples", label: "Exemples calculés" },
  { id: "micro", label: "Micro-entreprise" },
  { id: "demande", label: "Faire la demande" },
];

export default function Page() {
  return (
    <GabaritChapitre
      slug={SLUG}
      plan={PLAN}
      faqs={FAQS}
      titreContact="ACRE, ARCE, statut : on vérifie votre dossier"
      sources={["spAcre", "spAcreActu", "cssL1316_4", "cssD1316_1", "spPass", "spArce", "urssafModeles"]}
      chapo={
        <p>
          L&apos;ACRE a beaucoup changé en 2026 : elle n&apos;est plus automatique, elle se demande dans un délai de 60
          jours et l&apos;exonération est plafonnée à 25 % des cotisations. Ce qu&apos;il faut savoir, et ce qu&apos;elle
          vous fait vraiment économiser selon votre statut.
        </p>
      }
    >
      <H2 id="changements-2026">Ce qui a changé en 2026</H2>
      <Tableau
        premiereColonneLarge
        entetes={["", "Jusqu'en 2025", "En 2026"]}
        lignes={[
          ["Démarche", "Automatique pour la plupart des créateurs", "Demande obligatoire à l'Urssaf dans les 60 jours du début d'activité (depuis le 1er janvier 2026)"],
          ["Exonération hors micro", "Plus large (exonération des cotisations concernées jusqu'à 75 % du PASS)", "25 % des cotisations concernées, dégressive au-delà de 36 045 €, nulle à partir de 48 060 €"],
          ["Micro-entreprise", "Cotisations réduites de 50 %", "Cotisations réduites de 25 % pour les créations depuis le 1er juillet 2026"],
        ]}
        legende="Article 23 de la loi de financement de la Sécurité sociale pour 2026 (loi n° 2025-1403 du 30 décembre 2025) et décret n° 2026-69 du 6 février 2026."
      />
      <Encart type="attention" titre="Des pages officielles pas toutes à jour">
        <p>
          Certaines pages publiées au printemps 2026 évoquaient encore une exonération de 50 %. Les textes en vigueur
          (article L131-6-4 du code de la sécurité sociale) et la fiche service-public vérifiée le 1er juillet 2026
          retiennent 25 %. C&apos;est ce taux que nous appliquons.
        </p>
      </Encart>

      <H2 id="conditions">Qui peut bénéficier de l&apos;ACRE</H2>
      <P>Vous devez être en début d&apos;activité (création ou reprise) et appartenir à l&apos;une de ces catégories :</P>
      <Ul>
        <li>demandeur d&apos;emploi indemnisé (ARE) ;</li>
        <li>demandeur d&apos;emploi non indemnisé inscrit 6 mois au cours des 18 derniers mois ;</li>
        <li>bénéficiaire du RSA ou de l&apos;ASS ;</li>
        <li>jeune de 18 à 25 ans (jusqu&apos;à 29 ans en cas de handicap reconnu), ou de moins de 30 ans non éligible à l&apos;ARE ;</li>
        <li>créateur dans un quartier prioritaire de la politique de la ville ou une zone France ruralités revitalisation ;</li>
        <li>salarié qui reprend son entreprise en difficulté, titulaire d&apos;un contrat d&apos;appui au projet d&apos;entreprise, bénéficiaire de la PreParE.</li>
      </Ul>
      <P>Deux conditions supplémentaires :</P>
      <Ul>
        <li>
          <strong>Ne pas avoir bénéficié de l&apos;ACRE dans les 3 années précédentes.</strong>
        </li>
        <li>
          <strong>En société, contrôler effectivement l&apos;entreprise</strong>{" "}(plus de 50 % du capital, dont au moins
          35 % à titre personnel, ou d&apos;autres combinaisons prévues par les textes) et garder ce contrôle au moins 2
          ans, sinon l&apos;Urssaf peut reprendre l&apos;aide. En SASU ou en EURL avec un associé unique, la condition
          est remplie.
        </li>
      </Ul>

      <H2 id="montant">Le montant de l&apos;exonération (hors micro-entreprise)</H2>
      <P>
        L&apos;ACRE dure <strong>12 mois</strong>. Elle porte sur les cotisations maladie-maternité, indemnités
        journalières, allocations familiales, retraite de base et invalidité-décès. Elle ne touche pas la retraite
        complémentaire ni la CSG-CRDS.
      </P>
      <Tableau
        entetes={["Revenu d'activité annuel (assiette)", "Exonération"]}
        lignes={[
          [`Jusqu'à ${euros(ACRE_SEUIL_TOTAL)} (75 % du PASS)`, "25 % des cotisations concernées"],
          [`De ${euros(ACRE_SEUIL_TOTAL)} à ${euros(ACRE_SEUIL_FIN)}`, "Dégressive, de 25 % à 0"],
          [`À partir de ${euros(ACRE_SEUIL_FIN)} (1 PASS)`, "Aucune"],
        ]}
        legende="Plafond annuel de la Sécurité sociale (PASS) 2026 : 48 060 €. Il passera à 48 900 € en 2027."
      />
      <H3>Président de SASU</H3>
      <P>
        L&apos;exonération porte sur les cotisations patronales et salariales de Sécurité sociale du salaire versé
        pendant les 12 mois, avec les mêmes seuils. Sans salaire, il n&apos;y a rien à exonérer.
      </P>
      <H3>Gérant d&apos;EURL</H3>
      <P>
        L&apos;exonération s&apos;applique aux cotisations de travailleur indépendant calculées sur votre revenu
        professionnel (rémunération, et dividendes au-delà de 10 % du capital si l&apos;EURL est à l&apos;IS).
      </P>

      <H2 id="exemples">Exemples calculés avec le moteur de l&apos;Urssaf</H2>
      <P>
        Cotisations annuelles du dirigeant la première année, sans puis avec l&apos;ACRE, pour une activité libérale non
        réglementée. Calcul réalisé avec les modèles officiels de l&apos;Urssaf (règles au 1er juillet 2026), la même
        méthode que notre <A href="/ressources/simulateur-sasu-eurl">simulateur SASU ou EURL</A>.
      </P>
      {EXEMPLES.length > 0 ? (
        <Tableau
          premiereColonneLarge
          entetes={["Somme consacrée à la rémunération", "SASU : cotisations sans / avec ACRE", "Économie SASU", "EURL : cotisations sans / avec ACRE", "Économie EURL"]}
          lignes={EXEMPLES.map((e) => [
            euros(e.n),
            `${euros(e.sans.sasu.cotisations)} / ${euros(e.avec.sasu.cotisations)}`,
            <strong key="s">{euros(e.sans.sasu.cotisations - e.avec.sasu.cotisations)}</strong>,
            `${euros(e.sans.eurl.cotisations)} / ${euros(e.avec.eurl.cotisations)}`,
            <strong key="e">{euros(e.sans.eurl.cotisations - e.avec.eurl.cotisations)}</strong>,
          ])}
          legende="SASU : coût total de la rémunération pour la société (salaire brut et cotisations patronales). EURL à l'IS : rémunération du gérant, cotisations comprises. Célibataire sans enfant, création en 2026, année pleine."
        />
      ) : (
        <P>Les exemples chiffrés sont momentanément indisponibles.</P>
      )}
      <P>
        L&apos;économie reste modeste depuis 2026 : de l&apos;ordre de 1 000 à 2 000 € sur l&apos;année dans ces
        exemples, et rien quand le revenu dépasse le plafond de la Sécurité sociale. L&apos;ACRE ne doit donc pas
        guider le choix du statut, mais la demander ne coûte rien.
      </P>

      <H2 id="micro">Micro-entreprise : un taux réduit pendant trois à quatre trimestres</H2>
      <P>
        En micro-entreprise, l&apos;ACRE prend la forme d&apos;un taux de cotisation réduit appliqué à votre chiffre
        d&apos;affaires. Pour une création ou une reprise depuis le <strong>1er juillet 2026</strong>, ce taux est égal à{" "}
        <strong>75 % du taux normal</strong>{" "}(exemple officiel : 15,9 % au lieu de 21,2 % pour une activité de services
        commerciale). Il s&apos;applique jusqu&apos;à la fin du 3e trimestre civil qui suit le début d&apos;activité :
        pour un début le 3 septembre 2026, jusqu&apos;au 30 juin 2027.
      </P>
      <P>
        Pour une micro-entreprise créée entre le 1er janvier et le 30 juin 2026, l&apos;ancienne réduction de 50 %
        s&apos;applique en principe : vérifiez le taux indiqué sur votre espace Urssaf.
      </P>

      <H2 id="demande">Faire la demande : 60 jours, pas un de plus</H2>
      <Ol>
        <li>
          <strong>Créez votre entreprise</strong>{" "}et notez la date de début d&apos;activité (elle figure sur votre
          extrait Kbis ou votre avis de situation au répertoire des entreprises).
        </li>
        <li>
          <strong>Déposez la demande à l&apos;Urssaf au plus tard le 60e jour</strong>{" "}qui suit : formulaire R75199 pour
          un travailleur indépendant (gérant d&apos;EURL), R75212 pour un dirigeant assimilé salarié (président de SASU,
          via l&apos;espace employeur, motif « Aide à la création d&apos;activité »), R55376 pour une micro-entreprise.
        </li>
        <li>
          <strong>Attendez la réponse</strong>{" "}: l&apos;Urssaf a 30 jours pour répondre ; sans réponse, la demande est
          acceptée.
        </li>
        <li>
          <strong>Si vous visez l&apos;ARCE</strong>, transmettez ensuite le justificatif à France Travail : l&apos;ARCE
          n&apos;est versée qu&apos;aux créateurs qui ont obtenu l&apos;ACRE (voir{" "}
          <A href={urlChapitre("are-ou-arce")}>ARE ou ARCE</A>).
        </li>
      </Ol>
      <Encart type="retenir" titre="Le réflexe à avoir">
        <p>
          Mettez un rappel à 30 jours après votre date de début d&apos;activité. Une demande d&apos;ACRE oubliée, c&apos;est
          quelques centaines d&apos;euros perdus, mais c&apos;est surtout l&apos;ARCE qui devient impossible.
        </p>
      </Encart>

      <CtaEncart
        titre="On s'occupe de votre création, ACRE comprise"
        texte="Statuts, immatriculation, demande d'ACRE dans les délais, choix entre ARE et ARCE : on prépare votre lancement avec vous. Premier rendez-vous gratuit."
      />
    </GabaritChapitre>
  );
}
