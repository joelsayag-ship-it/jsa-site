import type { Metadata } from "next";
import { SITE_URL, urlChapitre } from "../chapitres";
import { A, CtaEncart, Encart, GabaritChapitre, H2, H3, P, Tableau, Ul, euros, type Faq } from "../ui";
import { remunerationSeule } from "@/lib/devenir-freelance/calculs";

const SLUG = "remuneration-sasu-eurl";
const PAGE_URL = `${SITE_URL}${urlChapitre(SLUG)}`;

export const metadata: Metadata = {
  title: "Rémunération du dirigeant SASU et EURL 2026 : cotisations et net",
  description:
    "Salaire du président de SASU ou rémunération du gérant d'EURL : cotisations, impôt, réforme de l'assiette des indépendants, exemples calculés avec le moteur de l'Urssaf.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Rémunération du dirigeant en SASU et en EURL : cotisations, impôt et net",
    description: "Ce qui reste vraiment sur votre compte en SASU et en EURL, calculé avec les règles de l'Urssaf.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const NIVEAUX = [40_000, 60_000, 90_000, 120_000];
const EXEMPLES = NIVEAUX.map((n) => {
  try {
    return { n, ...remunerationSeule(n) };
  } catch {
    return null;
  }
}).filter((x): x is NonNullable<typeof x> => x !== null);

const FAQS: Faq[] = [
  {
    q: "Le président de SASU cotise-t-il au chômage ?",
    a: "Non. Il est assimilé salarié et paie les mêmes cotisations qu'un salarié cadre, sauf l'assurance chômage. Il n'est donc pas couvert par France Travail au titre de son mandat, mais il peut garder l'ARE de son ancien emploi salarié selon les règles de cumul.",
  },
  {
    q: "Faut-il se verser un salaire dès la création ?",
    a: "Ce n'est pas obligatoire. En SASU, un président sans salaire ne paie pas de cotisations, ce qui permet de garder l'ARE entière pendant le lancement (dans la limite du plafond de 60 % des droits). En contrepartie, il ne valide pas de trimestres de retraite. En EURL, des cotisations minimales restent dues même sans rémunération, car le gérant est travailleur non salarié du seul fait de son mandat.",
  },
  {
    q: "La rémunération du dirigeant est-elle déductible ?",
    a: "Oui, en SASU et en EURL à l'impôt sur les sociétés, si elle correspond à un travail effectif et n'est pas excessive. Elle réduit le bénéfice soumis à l'IS. Chez vous, elle est imposée comme un salaire, avec l'abattement de 10 % ou vos frais réels. En EURL à l'impôt sur le revenu (régime par défaut), c'est le bénéfice qui est imposé, et la rémunération n'est pas déductible.",
  },
  {
    q: "Qu'est-ce que la réforme de l'assiette des indépendants ?",
    a: "Depuis les revenus 2025, les cotisations et la CSG-CRDS des travailleurs indépendants sont calculées sur une assiette unique : le revenu professionnel diminué d'un abattement forfaitaire de 26 % (avec un plancher et un plafond). Elle s'applique en pratique depuis la déclaration d'avril 2026, pour la régularisation 2025 et les cotisations 2026.",
  },
];

const PLAN = [
  { id: "deux-regimes", label: "Deux régimes sociaux" },
  { id: "comparaison", label: "Ce qui reste : exemples calculés" },
  { id: "sasu", label: "Le salaire du président de SASU" },
  { id: "eurl", label: "La rémunération du gérant d'EURL" },
  { id: "impot", label: "Côté impôt sur le revenu" },
  { id: "combien", label: "Combien se verser ?" },
];

export default function Page() {
  return (
    <GabaritChapitre
      slug={SLUG}
      plan={PLAN}
      faqs={FAQS}
      titreContact="Fixons votre rémunération avec vos chiffres"
      sources={[
        "spAssimileSalarie",
        "spSasu",
        "spDirigeant",
        "spEurl",
        "spCotisationsTns",
        "spReformeAssiette",
        "cssL136_3",
        "impotsGerant",
        "spIs",
        "urssafModeles",
      ]}
      chapo={
        <p>
          En SASU comme en EURL, c&apos;est vous qui fixez votre rémunération. Mais pour une même somme dépensée par la
          société, ce qui arrive sur votre compte personnel varie beaucoup selon le statut. Les règles 2026 et des
          exemples calculés avec les modèles officiels de l&apos;Urssaf.
        </p>
      }
    >
      <H2 id="deux-regimes">Deux régimes sociaux très différents</H2>
      <Tableau
        premiereColonneLarge
        entetes={["", "Président de SASU", "Gérant associé unique d'EURL"]}
        lignes={[
          ["Régime", "Assimilé salarié (régime général)", "Travailleur non salarié (indépendant)"],
          ["Cotisations", "Celles d'un salarié cadre, sauf l'assurance chômage", "Calculées sur le revenu professionnel, après un abattement de 26 % depuis la réforme de l'assiette"],
          ["Sans rémunération", "Aucune cotisation", "Cotisations minimales dues malgré tout"],
          ["Assurance chômage", "Non (sauf contrat de travail distinct)", "Non"],
          ["Bulletin de paie", "Oui, chaque mois où un salaire est versé", "Non : rémunération décidée par le gérant, cotisations réglées à l'Urssaf"],
          ["Dividendes", "Sans cotisations sociales", "Soumis aux cotisations au-delà de 10 % du capital"],
        ]}
      />

      <H2 id="comparaison">Ce qui reste vraiment : exemples calculés</H2>
      <P>
        Pour chaque montant, la société consacre toute la somme à la rémunération du dirigeant (pas de dividendes,
        EURL à l&apos;impôt sur les sociétés). Calcul avec le moteur et les modèles officiels de l&apos;Urssaf, règles
        au 1er juillet 2026, activité libérale non réglementée, célibataire sans enfant, hors première année et sans
        ACRE.
      </P>
      {EXEMPLES.length > 0 ? (
        <Tableau
          premiereColonneLarge
          entetes={["Somme consacrée à la rémunération", "", "Cotisations", "Net avant impôt", "Impôt sur le revenu", "Net après impôt", "Trimestres de retraite"]}
          lignes={EXEMPLES.flatMap((e) => [
            [
              euros(e.n),
              "SASU",
              euros(e.sasu.cotisations),
              euros(e.sasu.netAvantImpot),
              euros(e.sasu.impot),
              <strong key="s">{euros(e.sasu.netApresImpot)}</strong>,
              String(e.sasu.trimestres),
            ],
            [
              "",
              "EURL",
              euros(e.eurl.cotisations),
              euros(e.eurl.netAvantImpot),
              euros(e.eurl.impot),
              <strong key="e">{euros(e.eurl.netApresImpot)}</strong>,
              String(e.eurl.trimestres),
            ],
          ])}
          legende="SASU : la somme correspond au coût total du salaire pour la société (brut et cotisations patronales). EURL : rémunération du gérant, cotisations comprises. Montants annuels arrondis. Pour d'autres montants ou une EURL à l'impôt sur le revenu, utilisez le simulateur SASU ou EURL."
        />
      ) : (
        <P>Les exemples chiffrés sont momentanément indisponibles.</P>
      )}
      <P>
        À dépense égale, l&apos;EURL laisse nettement plus de revenu net, car les cotisations des indépendants sont plus
        faibles. La SASU coûte plus cher mais apporte une protection sociale plus proche de celle d&apos;un salarié
        (prévoyance, retraite complémentaire plus élevée). Pour tester vos propres chiffres :{" "}
        <A href="/ressources/simulateur-sasu-eurl">simulateur SASU ou EURL</A>.
      </P>

      <H2 id="sasu">Le salaire du président de SASU</H2>
      <Ul>
        <li>
          <strong>Mêmes cotisations qu&apos;un cadre, sauf le chômage</strong>, déclarées chaque mois par la société (DSN)
          avec un bulletin de paie.
        </li>
        <li>
          <strong>Aucune cotisation sans salaire</strong> : c&apos;est ce qui permet à de nombreux freelances de garder
          l&apos;ARE pendant le lancement (voir <A href={urlChapitre("are-ou-arce")}>ARE ou ARCE</A>).
        </li>
        <li>
          <strong>Souplesse</strong> : le salaire peut être modifié par décision de l&apos;associé unique, et complété par
          des <A href={urlChapitre("dividendes-sasu-eurl")}>dividendes</A> sans cotisations sociales.
        </li>
      </Ul>

      <H2 id="eurl">La rémunération du gérant d&apos;EURL</H2>
      <Ul>
        <li>
          <strong>Travailleur non salarié, même sans rémunération</strong> : des cotisations minimales sont dues chaque
          année.
        </li>
        <li>
          <strong>Assiette unique depuis la réforme</strong> : le revenu professionnel est diminué d&apos;un abattement
          forfaitaire de 26 % (avec un plancher de 1,76 % et un plafond de 130 % du PASS) pour calculer à la fois les
          cotisations et la CSG-CRDS. Appliquée depuis avril 2026 aux revenus 2025 et aux cotisations 2026.
        </li>
        <li>
          <strong>Cotisations provisionnelles la première année</strong> : en 2026, l&apos;Urssaf appelle des forfaits de
          début d&apos;activité (96 € de maladie-maternité, 1 631 € de retraite de base, 739 € de retraite
          complémentaire, 119 € d&apos;invalidité-décès, 886 € de CSG-CRDS, 120 € de formation professionnelle), puis
          régularise sur le revenu réel.
        </li>
      </Ul>
      <H3>EURL à l&apos;impôt sur le revenu ou à l&apos;impôt sur les sociétés</H3>
      <P>
        Avec un associé unique personne physique, l&apos;EURL est par défaut à l&apos;impôt sur le revenu : tout le
        bénéfice est imposé chez vous et soumis aux cotisations, que vous le preniez ou non. L&apos;option pour
        l&apos;impôt sur les sociétés est possible à la création ou en cours de vie, en la notifiant au service des
        impôts des entreprises avant la fin du 3e mois de l&apos;exercice. Elle permet de laisser une partie du bénéfice
        dans la société, imposée à 15 % jusqu&apos;à 42 500 €.
      </P>

      <H2 id="impot">Côté impôt sur le revenu</H2>
      <P>
        En SASU comme en EURL à l&apos;IS, votre rémunération est déductible du bénéfice de la société si elle correspond
        à un travail effectif et n&apos;est pas excessive. Chez vous, elle est imposée comme un salaire : le gérant
        d&apos;EURL à l&apos;IS relève de l&apos;article 62 du code général des impôts, avec l&apos;abattement de 10 %
        par défaut ou la déduction des frais réels sur option.
      </P>
      <Encart type="exemple" titre="Pour estimer votre impôt personnel">
        <p>
          Notre <A href="/simulateur-impot-revenu">simulateur d&apos;impôt sur le revenu 2027</A> calcule l&apos;impôt sur
          vos revenus 2026 avec le barème du projet de loi de finances pour 2027.
        </p>
      </Encart>

      <H2 id="combien">Combien se verser ?</H2>
      <P>Il n&apos;y a pas de montant idéal, mais cinq questions à se poser, dans cet ordre :</P>
      <Ul>
        <li>
          <strong>De combien avez-vous besoin pour vivre ?</strong> C&apos;est le point de départ, le reste peut
          attendre dans la société.
        </li>
        <li>
          <strong>Touchez-vous l&apos;ARE ?</strong> Chaque euro de rémunération réduit l&apos;allocation de 70 centimes
          (sur la rémunération déclarée), dans la limite du plafond de 60 % des droits.
        </li>
        <li>
          <strong>Voulez-vous valider vos trimestres de retraite ?</strong> Sans salaire en SASU, aucun trimestre
          n&apos;est validé.
        </li>
        <li>
          <strong>Avez-vous un projet de prêt immobilier ou de location ?</strong> Les banques et les bailleurs regardent
          d&apos;abord une rémunération régulière ; nous pouvons aussi établir une{" "}
          <A href="/attestation-expert-comptable/revenus">attestation de revenus</A>.
        </li>
        <li>
          <strong>Que faire du reste ?</strong> Le laisser dans la société (IS à 15 % jusqu&apos;à 42 500 €), ou le
          distribuer en dividendes : voir le chapitre{" "}
          <A href={urlChapitre("dividendes-sasu-eurl")}>dividendes</A> et notre article sur l&apos;
          <A href="/blog/optimiser-remuneration-sasu-salaire-dividendes">arbitrage salaire et dividendes en SASU</A>.
        </li>
      </Ul>
      <Encart type="retenir">
        <p>
          Le choix entre SASU et EURL se fait avant la création, en chiffrant les deux. Notre article{" "}
          <A href="/blog/sasu-ou-eurl-quel-statut-choisir-2026">SASU ou EURL : quel statut choisir</A> détaille les
          autres critères (protection sociale, image, sortie, associés).
        </p>
      </Encart>

      <CtaEncart
        titre="Votre rémunération, chiffrée avant la création"
        texte="Besoins personnels, ARE, retraite, projet immobilier : on fixe avec vous la rémunération et le statut qui vous laissent le plus, sans mauvaise surprise. Premier rendez-vous gratuit."
      />
    </GabaritChapitre>
  );
}
