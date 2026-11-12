import type { Metadata } from "next";
import { SITE_URL, urlChapitre } from "../chapitres";
import { A, CtaEncart, Encart, GabaritChapitre, H2, H3, Ol, P, Tableau, Ul, euros, type Faq } from "../ui";
import {
  ABATTEMENT_MICRO,
  CUMUL_PLAFOND_RELIQUAT,
  arce,
  cumulMois,
  revenuMicro,
} from "@/lib/devenir-freelance/calculs";

const SLUG = "are-ou-arce";
const PAGE_URL = `${SITE_URL}${urlChapitre(SLUG)}`;

export const metadata: Metadata = {
  title: "ARE ou ARCE en 2026 : que choisir quand on crée son entreprise ?",
  description:
    "Maintien de l'ARE ou capital ARCE : règles 2026 (60 % des droits, plafond de cumul, 2e versement), calcul du cumul en micro, EURL et SASU, exemples chiffrés.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "ARE ou ARCE : garder son chômage ou le prendre en capital ?",
    description: "Les règles 2026 de France Travail et trois scénarios chiffrés pour choisir.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

/* ── Exemple de référence ────────────────────────────────────────────────── */

const AJ = 75; // allocation journalière brute
const JOURS_RESTANTS = 450; // droits restants à la date de création
const JOURS_MOIS = 30;
const A_ARCE = arce(AJ, JOURS_RESTANTS);
const PLAFOND_CUMUL = AJ * JOURS_RESTANTS * CUMUL_PLAFOND_RELIQUAT;

type Mois = { libelle: string; ca: number; nb: number };

/** ARE versée sur 12 mois pour un micro-entrepreneur en BNC, plafond de 60 % compris. */
function areSur12Mois(periodes: Mois[]) {
  let total = 0;
  let joursReportes = 0;
  const lignes = periodes.map((p) => {
    const c = cumulMois(AJ, JOURS_MOIS, revenuMicro(p.ca, ABATTEMENT_MICRO.bnc));
    const verseParMois = c.verse;
    let verse = 0;
    for (let i = 0; i < p.nb; i++) {
      const reste = Math.max(0, PLAFOND_CUMUL - total);
      const v = Math.min(verseParMois, reste);
      total += v;
      verse += v;
      joursReportes += c.joursReportes;
    }
    return { ...p, joursParMois: c.jours, verse };
  });
  return { lignes, total, joursReportes };
}

const SCENARIO_PROGRESSIF = areSur12Mois([
  { libelle: "Mois 1 à 3", ca: 0, nb: 3 },
  { libelle: "Mois 4 à 6", ca: 2000, nb: 3 },
  { libelle: "Mois 7 à 12", ca: 5000, nb: 6 },
]);
const SCENARIO_MISSION = areSur12Mois([{ libelle: "Mois 1 à 12", ca: 6000, nb: 12 }]);
const SCENARIO_SANS_REVENU = areSur12Mois([{ libelle: "Mois 1 à 12", ca: 0, nb: 12 }]);

const EX_MICRO = cumulMois(AJ, JOURS_MOIS, revenuMicro(3000, ABATTEMENT_MICRO.bnc));
const EX_SASU = cumulMois(AJ, JOURS_MOIS, 1000);

const FAQS: Faq[] = [
  {
    q: "Combien rapporte l'ARCE ?",
    a: "L'ARCE est égale à 60 % de vos droits à l'ARE restants à la date de création (allocation journalière multipliée par le nombre de jours restants), diminués de 3 % au titre de la retraite complémentaire. Elle est versée en deux fois : la moitié au démarrage, l'autre moitié six mois plus tard si l'activité continue. Le taux de 60 % vaut pour les droits ouverts après une fin de contrat depuis le 1er juillet 2023 (45 % avant).",
  },
  {
    q: "Quand vaut-il mieux garder l'ARE ?",
    a: "Depuis le plafond de 60 % (fins de contrat depuis le 1er avril 2025), garder l'ARE ne rapporte en principe pas plus que l'ARCE. L'ARE reste préférable si vous ne pouvez pas obtenir l'ACRE (délai de 60 jours dépassé), si vous risquez de reprendre un CDI à temps plein dans les 6 mois, ou si votre activité ne vous rapporte vraiment aucun revenu pendant longtemps : dans ce cas, une dérogation peut permettre d'aller au-delà de 60 %.",
  },
  {
    q: "Quand vaut-il mieux prendre l'ARCE ?",
    a: "Quand vous gagnez bien votre vie dès les premiers mois (mission déjà signée, TJM élevé) : vos revenus réduiraient fortement l'ARE mensuelle, alors que l'ARCE ne dépend pas de vos revenus. Elle sert aussi à financer un investissement de départ ou à renforcer la trésorerie.",
  },
  {
    q: "L'ARCE est-elle imposable ?",
    a: "Oui. France Travail indique qu'elle est soumise à la CSG et à la CRDS, et son guide 2026 précise qu'elle est imposable dans la catégorie des traitements et salaires. Elle ne valide pas de trimestres de retraite de base.",
  },
  {
    q: "Que se passe-t-il si mon activité s'arrête après l'ARCE ?",
    a: "Vous pouvez vous réinscrire et reprendre le reliquat de vos droits (les 40 % restants), après un différé égal au montant brut du second versement divisé par votre allocation journalière, et à condition de ne pas avoir dépassé le délai de déchéance : 3 ans après l'ouverture des droits, plus la durée de ces droits.",
  },
  {
    q: "Le second versement de l'ARCE peut-il être refusé ?",
    a: "Oui, s'il n'y a plus d'activité six mois après le premier versement, ou, pour les fins de contrat depuis le 1er avril 2025, si vous occupez à ce moment-là un CDI à temps plein (attestation sur l'honneur, contrôle par France Travail).",
  },
];

const PLAN = [
  { id: "deux-options", label: "Deux façons d'utiliser ses droits" },
  { id: "maintien-are", label: "Garder l'ARE : le calcul" },
  { id: "arce", label: "L'ARCE : montant et versements" },
  { id: "scenarios", label: "Trois scénarios chiffrés" },
  { id: "choisir", label: "Comment choisir" },
  { id: "rappels-are", label: "Rappels sur l'ARE en 2026" },
];

export default function Page() {
  return (
    <GabaritChapitre
      slug={SLUG}
      plan={PLAN}
      faqs={FAQS}
      titreContact="ARE ou ARCE : comparons avec vos vrais droits"
      sources={[
        "ftArce",
        "ftCreation",
        "spArce",
        "spCumul",
        "unedicCumul",
        "unedicCreation",
        "unedicAre",
        "ftAre7",
        "unedicDiffere",
        "unedicSeptembre2026",
        "unedicRevalo",
        "unedicReglement",
      ]}
      chapo={
        <p>
          Vous créez votre entreprise en étant indemnisé par France Travail : vous pouvez garder votre allocation chaque
          mois, ou en toucher une partie d&apos;un coup avec l&apos;ARCE. Les règles ont changé en 2025 et le bon choix
          dépend surtout de vos revenus des premiers mois. Règles, calculs et exemples chiffrés.
        </p>
      }
    >
      <H2 id="deux-options">Deux façons d&apos;utiliser ses droits au chômage</H2>
      <Tableau
        premiereColonneLarge
        entetes={["", "Garder l'ARE (cumul)", "Demander l'ARCE"]}
        lignes={[
          ["Forme", "Allocation versée chaque mois, réduite selon vos revenus", "Capital versé en deux fois"],
          ["Montant maximal", "60 % des droits restants à la création (fins de contrat depuis le 1er avril 2025)", "60 % des droits restants, moins 3 % de retraite complémentaire"],
          ["Effet de vos revenus", "Chaque mois, 70 % de vos revenus pris en compte sont retirés de l'allocation", "Aucun : le capital ne dépend pas de ce que vous gagnez"],
          ["Condition", "Déclarer ses revenus chaque mois (actualisation du 28 au 15)", "Avoir obtenu l'ACRE (demande à l'Urssaf sous 60 jours)"],
          ["Après l'arrêt de l'activité", "Reprise des droits non consommés", "Reprise des 40 % restants, après un différé"],
        ]}
        legende="Les deux options sont exclusives : choisir l'ARCE met fin au cumul de l'ARE avec vos revenus d'activité."
      />

      <H2 id="maintien-are">Garder l&apos;ARE : comment se calcule le cumul</H2>
      <P>
        Chaque mois, France Travail calcule le nombre de jours indemnisés avec la formule publiée par l&apos;Unédic :
      </P>
      <Encart type="exemple" titre="La formule">
        <p>
          <strong>Jours indemnisés = (allocation mensuelle − 70 % des revenus du mois) ÷ allocation journalière</strong>,
          arrondi au nombre entier le plus proche.
        </p>
        <p>
          Les jours qui ne sont pas payés ne sont pas perdus : ils sont reportés et prolongent vos droits.
        </p>
      </Encart>
      <P>Ce que France Travail retient comme « revenus du mois » dépend du statut :</P>
      <Ul>
        <li>
          <strong>Micro-entreprise</strong>{" "}: le chiffre d&apos;affaires après abattement forfaitaire (34 % en BNC, 50 %
          en BIC de services, 71 % en vente).
        </li>
        <li>
          <strong>SASU</strong> : le salaire brut versé au président.
        </li>
        <li>
          <strong>EURL</strong>{" "}: la rémunération déclarée du gérant, dans le périmètre retenu pour l&apos;impôt sur le
          revenu.
        </li>
      </Ul>

      <H3>Exemple 1 : micro-entrepreneur en BNC</H3>
      <P>
        Allocation de {euros(AJ)} par jour, soit {euros(EX_MICRO.allocationMensuelle)}{" "}pour un mois de 30 jours.
        Chiffre d&apos;affaires du mois : 3 000 €. France Travail retient {euros(revenuMicro(3000, ABATTEMENT_MICRO.bnc))}{" "}
        (après l&apos;abattement de 34 %) et en déduit 70 %, soit {euros(EX_MICRO.deduction)}.
      </P>
      <P>
        Résultat : ({euros(EX_MICRO.allocationMensuelle)} − {euros(EX_MICRO.deduction)}) ÷ {euros(AJ)} ={" "}
        <strong>{EX_MICRO.jours} jours indemnisés</strong>, soit {euros(EX_MICRO.verse)} versés. Les{" "}
        {EX_MICRO.joursReportes} autres jours sont reportés.
      </P>

      <H3>Exemple 2 : président de SASU avec un petit salaire</H3>
      <P>
        Même allocation, salaire brut de 1 000 € dans le mois. Déduction : 700 €. ({euros(EX_SASU.allocationMensuelle)}{" "}
        − 700 €) ÷ {euros(AJ)} = <strong>{EX_SASU.jours} jours indemnisés</strong>, soit {euros(EX_SASU.verse)}. Sans
        aucun salaire, l&apos;allocation du mois est versée en entier.
      </P>

      <Encart type="nouveau" titre="Le plafond de 60 % (fins de contrat depuis le 1er avril 2025)">
        <p>
          Le cumul de l&apos;ARE avec une activité non salariée est désormais limité à 60 % du reliquat de droits à la
          date de début de l&apos;activité. Une fois ce plafond atteint, les versements s&apos;arrêtent. Exception : si
          l&apos;activité est réelle mais ne vous a rapporté aucun revenu (dividendes compris), vous pouvez demander à
          l&apos;instance paritaire régionale la poursuite des versements, dans les 6 mois.
        </p>
      </Encart>

      <H2 id="arce">L&apos;ARCE : montant, versements et conditions</H2>
      <P>
        L&apos;ARCE (aide à la reprise ou à la création d&apos;entreprise) vous verse{" "}
        <strong>60 % de vos droits restants</strong> à la date de création, diminués de{" "}
        <strong>3 % au titre de la retraite complémentaire</strong>.
      </P>
      <Encart type="exemple" titre={`Exemple : ${euros(AJ)} par jour et ${JOURS_RESTANTS} jours restants`}>
        <p>
          Droits restants : {euros(AJ)} × {JOURS_RESTANTS} jours = {euros(A_ARCE.droitsRestants)}.
        </p>
        <p>
          ARCE : 60 % = {euros(A_ARCE.brut)}, puis moins 3 % = <strong>{euros(A_ARCE.net)}</strong>, versés en deux fois{" "}
          {euros(A_ARCE.versement)}.
        </p>
        <p className="text-sm text-gray-500">
          Méthode de l&apos;exemple officiel de France Travail : 40 € × 518 jours × 60 % = 12 432 €, soit 12 059 € après
          les 3 %.
        </p>
      </Encart>
      <Ol>
        <li>
          <strong>Avoir obtenu l&apos;ACRE</strong>{" "}: c&apos;est une condition de l&apos;ARCE. Depuis 2026, l&apos;ACRE
          se demande à l&apos;Urssaf dans les 60 jours du début d&apos;activité (voir le chapitre{" "}
          <A href={urlChapitre("acre")}>ACRE 2026</A>).
        </li>
        <li>
          <strong>Créer après la fin du contrat</strong> qui a ouvert vos droits, et au plus tôt à votre inscription à
          France Travail.
        </li>
        <li>
          <strong>Premier versement</strong>{" "}: quand toutes les conditions sont réunies, après les différés et le délai
          d&apos;attente de 7 jours.
        </li>
        <li>
          <strong>Second versement, 6 mois plus tard</strong>{" "}: si l&apos;activité est toujours exercée et, pour les fins
          de contrat depuis le 1er avril 2025, si vous n&apos;occupez pas un CDI à temps plein.
        </li>
      </Ol>
      <P>
        L&apos;ARCE est soumise à la CSG et à la CRDS et ne valide pas de trimestres de retraite de base. Si
        l&apos;activité s&apos;arrête, vous pouvez reprendre les 40 % restants après un différé égal au second versement
        divisé par votre allocation journalière.
      </P>

      <H2 id="scenarios">Trois scénarios chiffrés sur 12 mois</H2>
      <P>
        Même profil pour les trois : allocation de {euros(AJ)} par jour, {JOURS_RESTANTS} jours de droits restants à la
        création, activité libérale en micro-entreprise (BNC), mois de 30 jours. Plafond de cumul :{" "}
        {euros(PLAFOND_CUMUL)}. ARCE possible : {euros(A_ARCE.brut)} avant la retenue de 3 %.
      </P>
      <Tableau
        premiereColonneLarge
        entetes={["Scénario", "Chiffre d'affaires", "ARE versée sur 12 mois", "ARCE (avant 3 %)", "Option la plus favorable sur 12 mois"]}
        lignes={[
          [
            "Démarrage progressif",
            "0 € les 3 premiers mois, 2 000 €/mois ensuite pendant 3 mois, puis 5 000 €/mois",
            euros(SCENARIO_PROGRESSIF.total),
            euros(A_ARCE.brut),
            SCENARIO_PROGRESSIF.total >= A_ARCE.brut ? "Équivalent" : "ARCE, versée plus tôt",
          ],
          [
            "Mission signée dès le départ",
            "6 000 €/mois dès le 1er mois",
            euros(SCENARIO_MISSION.total),
            euros(A_ARCE.brut),
            SCENARIO_MISSION.total >= A_ARCE.brut ? "Équivalent" : "ARCE, nettement",
          ],
          [
            "Aucun revenu personnel (SASU sans salaire)",
            "Rien de déclaré à France Travail",
            euros(SCENARIO_SANS_REVENU.total),
            euros(A_ARCE.brut),
            "Équivalent sur 12 mois ; l'ARE peut aller plus loin avec une dérogation",
          ],
        ]}
        legende="Montants bruts, avant CSG-CRDS et participation retraite complémentaire des deux côtés. Calcul : formule de cumul de l'Unédic, abattement BNC de 34 %, plafond de 60 % du reliquat. Ces scénarios ne tiennent pas compte de la dégressivité (allocations supérieures à 92,57 € par jour) ni de la durée maximale des droits."
      />
      <P>
        La leçon de ces exemples : <strong>depuis le plafond de 60 %, l&apos;ARE maintenue ne peut pas dépasser
        l&apos;ARCE</strong>, sauf dérogation. Dans le scénario progressif, l&apos;ARE complète les mois creux puis
        s&apos;arrête quand le chiffre d&apos;affaires monte ; les jours non payés restent en réserve et
        l&apos;allocation reprendrait si l&apos;activité ralentissait, mais toujours dans la limite de{" "}
        {euros(PLAFOND_CUMUL)}. Avec une mission signée dès le départ, l&apos;ARE ne verse presque rien et l&apos;ARCE
        est bien plus intéressante.
      </P>
      <P>
        Sans aucun revenu personnel, l&apos;ARE atteint le plafond au bout de{" "}
        {Math.ceil(PLAFOND_CUMUL / (AJ * JOURS_MOIS))}{" "}mois. Elle ne va au-delà que si l&apos;instance paritaire
        régionale accepte de poursuivre les versements, ce qui suppose une activité réelle n&apos;ayant rapporté aucun
        revenu, dividendes compris.
      </P>

      <H2 id="choisir">Comment choisir</H2>
      <Tableau
        premiereColonneLarge
        entetes={["Votre situation", "Option qui convient souvent"]}
        lignes={[
          ["Mission signée, TJM élevé dès le premier mois", "ARCE : l'ARE serait presque entièrement absorbée par vos revenus"],
          ["Revenus qui démarrent lentement", "ARCE en général : même plafond, versé plus tôt"],
          ["Investissement de départ ou besoin de trésorerie", "ARCE"],
          ["Aucun revenu personnel pendant longtemps (SASU sans salaire, projet long à lancer)", "ARE maintenue : seule option qui peut dépasser 60 %, avec une dérogation"],
          ["CDI à temps plein possible dans les 6 mois", "ARE maintenue : le second versement de l'ARCE serait perdu"],
          ["Délai de 60 jours pour demander l'ACRE dépassé", "ARE maintenue : l'ARCE n'est plus possible"],
        ]}
      />
      <Encart type="retenir" titre="Avant de choisir, demandez vos chiffres exacts">
        <p>
          Votre allocation journalière et le nombre de jours restants figurent dans votre espace France Travail. Le
          plafond de 60 % ne concerne que les fins de contrat depuis le 1er avril 2025 : si votre contrat a pris fin
          avant, le maintien de l&apos;ARE n&apos;est pas plafonné et l&apos;arbitrage est différent. Faites le calcul
          sur 12 à 24 mois avec vos revenus prévisionnels.
        </p>
      </Encart>

      <H2 id="rappels-are">Rappels sur l&apos;ARE en 2026</H2>
      <Ul>
        <li>
          <strong>Montant journalier brut</strong> : le plus élevé entre 40,4 % du salaire journalier de référence plus
          13,18 €, et 57 % de ce salaire, avec un minimum de 32,13 € et un maximum de 75 % du salaire journalier de
          référence. Pas de revalorisation au 1er juillet 2026.
        </li>
        <li>
          <strong>Dégressivité</strong>{" "}: baisse de 30 % à partir du 7e mois pour les moins de 55 ans dont
          l&apos;allocation dépasse 92,57 € par jour (fins de contrat depuis le 1er avril 2025).
        </li>
        <li>
          <strong>Durée maximale</strong> : 548 jours (18 mois) avant 55 ans, 685 jours de 55 à 56 ans, 822 jours à
          partir de 57 ans.
        </li>
        <li>
          <strong>Rupture conventionnelle depuis le 1er septembre 2026</strong> : durée maximale ramenée à 15 mois avant
          55 ans et à 20,5 mois à partir de 55 ans, pour les fins de contrat fixées par la convention à compter de cette
          date.
        </li>
        <li>
          <strong>Différés avant le premier paiement</strong>{" "}: différé lié aux congés payés (30 jours au plus), différé
          lié aux indemnités supérieures au minimum légal (montant divisé par 111,8 en 2026, 150 jours au plus), puis 7
          jours d&apos;attente.
        </li>
      </Ul>
      <P>
        Pour savoir ce qui se cumule ou non selon votre statut, voyez le{" "}
        <A href={urlChapitre("cumul-are-arce-acre")}>tableau de compatibilité</A>. Pour justifier vos revenus de
        dirigeant (ou leur absence) auprès de France Travail, nous établissons aussi des{" "}
        <A href="/attestation-expert-comptable/france-travail">attestations d&apos;expert-comptable pour France Travail</A>.
      </P>

      <CtaEncart
        titre="ARE ou ARCE : on fait le calcul avec vos droits"
        texte="Allocation journalière, jours restants, revenus des premiers mois, statut : on compare les deux options sur 12 à 24 mois. Premier rendez-vous gratuit."
      />
    </GabaritChapitre>
  );
}
