import type { Metadata } from "next";
import { SITE_URL, urlChapitre } from "../chapitres";
import { A, CtaEncart, Encart, GabaritChapitre, H2, H3, Ol, P, Tableau, Ul, euros, type Faq } from "../ui";
import {
  PFU_TOTAL_2026,
  impotSocietes,
  scenarioEURL,
  scenarioSASU,
  type ScenarioDividendes,
} from "@/lib/devenir-freelance/calculs";

const SLUG = "dividendes-sasu-eurl";
const PAGE_URL = `${SITE_URL}${urlChapitre(SLUG)}`;

export const metadata: Metadata = {
  title: "Dividendes SASU et EURL 2026 : flat tax 31,4 %, cotisations, calcul",
  description:
    "Dividendes en 2026 : PFU de 31,4 %, option pour le barème, dispense d'acompte avant le 30 novembre, cotisations en EURL au-delà de 10 %, salaire ou dividendes chiffrés.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Dividendes en SASU et en EURL : flat tax à 31,4 %, cotisations et calcul",
    description: "Ce qui a changé en 2026 et ce que rapportent vraiment les dividendes face au salaire.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const BENEFICE = 90_000;
const CAPITAL = 1_000;
const SALAIRE_MIXTE = 40_000;

function essayer(f: () => ScenarioDividendes): ScenarioDividendes | null {
  try {
    const r = f();
    return Number.isFinite(r.totalNet) && r.totalNet > 0 ? r : null;
  } catch {
    return null;
  }
}

const SCENARIOS = [
  essayer(() => scenarioSASU(BENEFICE, BENEFICE, CAPITAL, "SASU : tout en salaire")),
  essayer(() => scenarioSASU(BENEFICE, SALAIRE_MIXTE, CAPITAL, `SASU : ${euros(SALAIRE_MIXTE)} de salaire + dividendes`)),
  essayer(() => scenarioSASU(BENEFICE, 0, CAPITAL, "SASU : aucun salaire, tout en dividendes")),
  essayer(() => scenarioEURL(BENEFICE, BENEFICE, CAPITAL, "EURL à l'IS : tout en rémunération")),
  essayer(() => scenarioEURL(BENEFICE, SALAIRE_MIXTE, CAPITAL, `EURL à l'IS : ${euros(SALAIRE_MIXTE)} de rémunération + dividendes`)),
].filter((x): x is ScenarioDividendes => x !== null);

const EX_DIV = 10_000;

const FAQS: Faq[] = [
  {
    q: "Quel est le taux de la flat tax sur les dividendes en 2026 ?",
    a: "31,4 % : 12,8 % d'impôt sur le revenu et 18,6 % de prélèvements sociaux (CSG 10,6 %, CRDS 0,5 %, prélèvement de solidarité 7,5 %). La loi de financement de la Sécurité sociale pour 2026 a relevé la CSG de 1,4 point sur ces revenus au 1er janvier 2026 ; le taux global était de 30 % auparavant.",
  },
  {
    q: "Faut-il opter pour le barème progressif ?",
    a: "Parfois. Avec l'option, les dividendes bénéficient d'un abattement de 40 % et de 6,8 % de CSG déductible, mais ils s'ajoutent à vos autres revenus imposés au barème. L'option est souvent intéressante si votre taux marginal est de 0 % ou 11 %. Elle est globale (tous vos revenus de capitaux mobiliers de l'année) et, depuis les revenus 2026, n'est plus irrévocable.",
  },
  {
    q: "Peut-on éviter l'acompte de 12,8 % prélevé au versement ?",
    a: "Oui, si votre revenu fiscal de référence de l'avant-dernière année est inférieur à 50 000 € (personne seule) ou 75 000 € (couple). Il faut remettre une attestation sur l'honneur à la société (ou à la banque qui paie) au plus tard le 30 novembre de l'année précédant le versement : avant le 30 novembre 2026 pour des dividendes versés en 2027.",
  },
  {
    q: "Les dividendes d'EURL sont-ils soumis aux cotisations sociales ?",
    a: "Pour le gérant associé unique d'une EURL à l'impôt sur les sociétés, oui pour la part qui dépasse 10 % du capital social, des primes d'émission et des sommes en compte courant d'associé (détenus par lui, son conjoint ou partenaire de Pacs et ses enfants mineurs). Cette part supporte les cotisations des indépendants. La part inférieure à 10 % supporte seulement la flat tax ou le barème.",
  },
  {
    q: "Quand peut-on se verser des dividendes ?",
    a: "Après l'approbation des comptes de l'exercice par l'associé unique, dans les 6 mois de la clôture, et seulement à partir du bénéfice distribuable (bénéfice de l'exercice, moins les pertes antérieures et la dotation à la réserve légale, plus le report bénéficiaire et les réserves disponibles). Les dividendes doivent être mis en paiement au plus tard 9 mois après la clôture.",
  },
];

const PLAN = [
  { id: "fiscalite-2026", label: "La fiscalité des dividendes en 2026" },
  { id: "bareme", label: "Flat tax ou barème" },
  { id: "acompte", label: "L'acompte de 12,8 % et la dispense" },
  { id: "eurl-10", label: "EURL : le seuil de 10 %" },
  { id: "salaire-ou-dividendes", label: "Salaire ou dividendes : chiffré" },
  { id: "conditions", label: "Quand et comment distribuer" },
];

export default function Page() {
  return (
    <GabaritChapitre
      slug={SLUG}
      plan={PLAN}
      faqs={FAQS}
      titreContact="Salaire, dividendes ou réserve : on arbitre avec vous"
      sources={[
        "spPfu",
        "spPrelevementsSociaux",
        "impotsRcm",
        "spDividendesAssocies",
        "spOptionBareme",
        "spDirigeant",
        "cssL136_3",
        "spCotisationsTns",
        "spIs",
        "impotsIs",
        "codeCommerceDistribution",
        "urssafModeles",
      ]}
      chapo={
        <p>
          Les dividendes sont la deuxième façon de sortir l&apos;argent de votre société. En 2026, la flat tax est passée
          à 31,4 %, et les règles restent très différentes entre SASU et EURL. Taux, options, calendrier et comparaison
          chiffrée avec le salaire.
        </p>
      }
    >
      <H2 id="fiscalite-2026">La fiscalité des dividendes en 2026</H2>
      <P>
        Les dividendes sont prélevés sur le bénéfice <strong>après impôt sur les sociétés</strong>. Ils supportent
        ensuite, chez vous, le prélèvement forfaitaire unique (PFU, ou « flat tax ») :
      </P>
      <Tableau
        entetes={["Composante", "Taux 2026", "Taux 2025"]}
        lignes={[
          ["Impôt sur le revenu", "12,8 %", "12,8 %"],
          ["CSG", "10,6 %", "9,2 %"],
          ["CRDS", "0,5 %", "0,5 %"],
          ["Prélèvement de solidarité", "7,5 %", "7,5 %"],
          [<strong key="t">Total (PFU)</strong>, <strong key="t1">31,4 %</strong>, "30 %"],
        ]}
        legende="Hausse de la CSG de 1,4 point sur les revenus du capital au 1er janvier 2026 (article 12 de la loi n° 2025-1403 du 30 décembre 2025). Les revenus fonciers et l'assurance-vie restent à 17,2 % de prélèvements sociaux."
      />
      <Encart type="exemple" titre={`${euros(EX_DIV)} de dividendes bruts en SASU`}>
        <p>
          Flat tax : {euros(EX_DIV * PFU_TOTAL_2026)} ({euros(EX_DIV * 0.128)} d&apos;impôt et {euros(EX_DIV * 0.186)} de
          prélèvements sociaux). Il vous reste <strong>{euros(EX_DIV * (1 - PFU_TOTAL_2026))}</strong>.
        </p>
        <p>
          Pour distribuer ces {euros(EX_DIV)}, la société a dû réaliser un bénéfice avant impôt d&apos;environ{" "}
          {euros(EX_DIV / 0.85)} (IS à 15 % : {euros(impotSocietes(EX_DIV / 0.85))}), sous le seuil de 42 500 €.
        </p>
      </Encart>

      <H2 id="bareme">Flat tax ou barème progressif</H2>
      <P>
        Vous pouvez renoncer au PFU et faire imposer vos dividendes au barème progressif, en cochant la case 2OP de la
        déclaration de revenus. Dans ce cas :
      </P>
      <Ul>
        <li>les dividendes bénéficient d&apos;un <strong>abattement de 40 %</strong> ;</li>
        <li>
          <strong>6,8 % de CSG sont déductibles</strong> de votre revenu imposable l&apos;année suivante ;
        </li>
        <li>les prélèvements sociaux restent dus à 18,6 % ;</li>
        <li>
          l&apos;option est <strong>globale</strong> : elle vaut pour tous vos revenus de capitaux mobiliers et plus-values
          de l&apos;année ;
        </li>
        <li>
          <strong>nouveau</strong> : pour les revenus 2026 et suivants, l&apos;option n&apos;est plus irrévocable, vous
          pouvez y renoncer dans le délai de réclamation.
        </li>
      </Ul>
      <P>
        En pratique, le barème est souvent plus intéressant quand votre taux marginal d&apos;imposition est de 0 % ou de
        11 % : 12,8 % de PFU contre, au plus, 11 % sur 60 % du dividende. Au-delà, le PFU l&apos;emporte en général.
        Faites le calcul avec le <A href="/simulateur-impot-revenu">simulateur d&apos;impôt 2027</A>.
      </P>

      <H2 id="acompte">L&apos;acompte de 12,8 % et la dispense avant le 30 novembre</H2>
      <P>
        Quand la société vous verse un dividende, elle retient à la source un <strong>acompte de 12,8 %</strong>{" "}
        d&apos;impôt (le prélèvement forfaitaire non libératoire) en plus des 18,6 % de prélèvements sociaux.
        L&apos;acompte s&apos;impute sur l&apos;impôt de l&apos;année suivante ; l&apos;excédent vous est remboursé.
      </P>
      <Encart type="attention" titre="Date limite : 30 novembre 2026">
        <p>
          Si votre revenu fiscal de référence 2025 est inférieur à 50 000 € (personne seule) ou 75 000 € (couple), vous
          pouvez être dispensé de cet acompte pour les dividendes versés en 2027. Il faut remettre une attestation sur
          l&apos;honneur à la société au plus tard le 30 novembre 2026.
        </p>
      </Encart>

      <H2 id="eurl-10">EURL : le seuil de 10 % qui change tout</H2>
      <P>
        Pour le gérant associé unique d&apos;une EURL à l&apos;impôt sur les sociétés, la part des dividendes qui dépasse{" "}
        <strong>10 % du capital social, des primes d&apos;émission et des sommes en compte courant d&apos;associé</strong>{" "}
        entre dans le revenu soumis aux cotisations des indépendants (article L136-3 du code de la sécurité sociale).
        Le capital et les comptes courants pris en compte sont ceux du gérant, de son conjoint ou partenaire de Pacs et
        de ses enfants mineurs.
      </P>
      <Tableau
        premiereColonneLarge
        entetes={["", "Part jusqu'à 10 %", "Part au-delà de 10 %"]}
        lignes={[
          ["Cotisations sociales des indépendants", "Non", "Oui"],
          ["Prélèvements sociaux de 18,6 %", "Oui", "Non (remplacés par les cotisations et la CSG-CRDS des indépendants)"],
          ["Impôt sur le revenu", "12,8 % ou barème", "12,8 % ou barème"],
        ]}
        legende={`Avec un capital de ${euros(CAPITAL)} et sans compte courant, le seuil est de ${euros(CAPITAL * 0.1)} : presque tout le dividende supporte les cotisations.`}
      />
      <P>
        C&apos;est pourquoi, en EURL, les dividendes sont rarement plus intéressants que la rémunération, sauf avec un
        capital ou des comptes courants importants. En SASU, au contraire, les dividendes ne supportent jamais de
        cotisations sociales.
      </P>

      <H2 id="salaire-ou-dividendes">Salaire ou dividendes : la comparaison chiffrée</H2>
      <P>
        Une société dégage {euros(BENEFICE)} de bénéfice avant rémunération du dirigeant, avec un capital de{" "}
        {euros(CAPITAL)}. Comment ce montant arrive-t-il dans votre poche selon la répartition choisie ?
      </P>
      {SCENARIOS.length > 0 ? (
        <Tableau
          premiereColonneLarge
          entetes={[
            "Répartition",
            "Rémunération",
            "Impôt sur les sociétés",
            "Dividendes bruts",
            "Cotisations et prélèvements sociaux",
            "Impôt sur le revenu",
            "Reste au dirigeant",
            "Trimestres",
          ]}
          lignes={SCENARIOS.map((s) => [
            s.libelle,
            euros(s.remuneration),
            euros(s.impotSocietes),
            euros(s.dividendesBruts),
            euros(s.cotisationsEtPrelevements),
            euros(s.impotRevenu),
            <strong key="t">{euros(s.totalNet)}</strong>,
            String(s.trimestres),
          ])}
          legende="Cotisations et impôt sur la rémunération : moteur et modèles officiels de l'Urssaf (règles au 1er juillet 2026), activité libérale, célibataire sans enfant, hors ACRE. IS à 15 % jusqu'à 42 500 € puis 25 %. Réserve légale de 5 % du bénéfice dans la limite de 10 % du capital. Dividendes au PFU de 31,4 %. En SASU, la rémunération indiquée est le coût total du salaire pour la société."
        />
      ) : (
        <P>Les exemples chiffrés sont momentanément indisponibles.</P>
      )}
      <H3>Ce qu&apos;il faut en retenir</H3>
      <Ul>
        <li>
          <strong>En SASU</strong>, les dividendes laissent souvent plus d&apos;argent que le salaire, mais ne valident
          aucun trimestre de retraite et n&apos;ouvrent pas de droits aux indemnités journalières. Un salaire de base
          complété par des dividendes est souvent le meilleur équilibre.
        </li>
        <li>
          <strong>En EURL</strong>, les dividendes au-delà de 10 % du capital supportent les cotisations : l&apos;écart
          avec la rémunération est faible, et la rémunération reste souvent plus simple.
        </li>
        <li>
          <strong>Si vous touchez l&apos;ARE</strong>, les dividendes comptent pour la dérogation au plafond de 60 % :
          voir le <A href={urlChapitre("cumul-are-arce-acre")}>tableau de compatibilité</A>.
        </li>
        <li>
          <strong>Laisser l&apos;argent dans la société</strong> est aussi une option : le bénéfice est imposé à 15 %
          jusqu&apos;à 42 500 €, et vous distribuerez plus tard, au moment le plus favorable.
        </li>
      </Ul>

      <H2 id="conditions">Quand et comment distribuer</H2>
      <Ol>
        <li>
          <strong>Clôturer l&apos;exercice</strong> et établir les comptes annuels.
        </li>
        <li>
          <strong>Approuver les comptes</strong> par décision de l&apos;associé unique dans les 6 mois de la clôture, et
          décider de l&apos;affectation du résultat.
        </li>
        <li>
          <strong>Doter la réserve légale</strong> : 5 % du bénéfice tant qu&apos;elle n&apos;atteint pas 10 % du
          capital.
        </li>
        <li>
          <strong>Distribuer le bénéfice distribuable</strong> : bénéfice de l&apos;exercice, moins les pertes
          antérieures et la réserve légale, plus le report bénéficiaire et les réserves disponibles.
        </li>
        <li>
          <strong>Payer dans les 9 mois</strong> de la clôture, avec l&apos;acompte de 12,8 % et les prélèvements sociaux
          retenus à la source et déclarés (formulaire 2777) par la société.
        </li>
      </Ol>
      <P>
        Pour une clôture au 31 décembre, préparez-vous dès maintenant avec notre{" "}
        <A href="/blog/cloture-31-12-sasu-eurl-checklist-freelance">checklist de clôture SASU et EURL</A>.
      </P>
      <Encart type="retenir" titre="Très hauts revenus">
        <p>
          Au-delà de 250 000 € de revenu fiscal de référence (500 000 € pour un couple), la contribution différentielle
          sur les hauts revenus impose un taux minimal de 20 %, reconduite par la loi de finances pour 2026.
        </p>
      </Encart>

      <CtaEncart
        titre="Salaire, dividendes ou réserve : chiffrons votre année"
        texte="Avant la clôture, on compare les répartitions possibles avec vos vrais chiffres (bénéfice, ARE, retraite, impôt du foyer). Premier rendez-vous gratuit."
      />
    </GabaritChapitre>
  );
}
