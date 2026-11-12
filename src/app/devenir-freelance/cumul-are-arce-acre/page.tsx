import type { Metadata } from "next";
import { SITE_URL, urlChapitre } from "../chapitres";
import { A, CtaEncart, Encart, GabaritChapitre, H2, H3, P, Pastille, Tableau, Ul, type Faq } from "../ui";

const SLUG = "cumul-are-arce-acre";
const PAGE_URL = `${SITE_URL}${urlChapitre(SLUG)}`;

export const metadata: Metadata = {
  title: "ARE, ARCE, ACRE : ce qui se cumule en micro, EURL ou SASU (2026)",
  description:
    "Tableau de compatibilité 2026 : ARE et création d'entreprise, ARCE, ACRE, salaire et dividendes en micro-entreprise, EURL et SASU. Règles vérifiées sur France Travail et l'Urssaf.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "ARE, ARCE, ACRE, salaire, dividendes : ce qui se cumule selon votre statut",
    description:
      "Le tableau de compatibilité entre aides à la création et statuts : micro-entreprise, EURL, SASU. Règles 2026.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

const FAQS: Faq[] = [
  {
    q: "Peut-on toucher l'ARE et l'ARCE en même temps ?",
    a: "Non. Les deux sont exclusifs : soit vous gardez votre allocation chaque mois (avec une réduction selon vos revenus), soit vous demandez l'ARCE, un capital égal à 60 % de vos droits restants versé en deux fois. Si vous choisissez l'ARCE, vous ne pouvez plus cumuler l'ARE avec vos revenus d'activité.",
  },
  {
    q: "Peut-on cumuler l'ACRE et l'ARE ?",
    a: "Oui. L'ACRE est une exonération partielle de cotisations sociales accordée par l'Urssaf, l'ARE est une allocation versée par France Travail : les deux se cumulent. Depuis le 1er janvier 2026, l'ACRE n'est plus automatique : il faut la demander à l'Urssaf dans les 60 jours qui suivent le début d'activité.",
  },
  {
    q: "Faut-il avoir l'ACRE pour obtenir l'ARCE ?",
    a: "Oui. Le règlement d'assurance chômage subordonne l'ARCE à l'obtention de l'exonération de début d'activité (ACRE). Comme l'ACRE se demande désormais dans les 60 jours, ne laissez pas passer ce délai si vous visez l'ARCE.",
  },
  {
    q: "Président de SASU sans salaire : est-ce que je garde toute mon ARE ?",
    a: "Sans rémunération déclarée, la formule de cumul ne retire rien à votre allocation du mois. Mais depuis le 1er avril 2025, le cumul de l'ARE avec une activité non salariée est plafonné à 60 % des droits restants à la date de création. Au-delà, il faut demander une dérogation à l'instance paritaire régionale, possible seulement si l'activité est réelle et n'a rapporté aucun revenu, dividendes compris.",
  },
  {
    q: "Les dividendes réduisent-ils l'ARE ?",
    a: "La formule de cumul vise les rémunérations déclarées au titre des assurances sociales. Les dividendes n'y figurent pas en tant que tels, mais France Travail en tient compte pour la dérogation au plafond de 60 % (aucun revenu, dividendes compris). Déclarez-les et faites confirmer votre situation par votre conseiller avant de distribuer.",
  },
];

const PLAN = [
  { id: "aides-entre-elles", label: "Les aides entre elles" },
  { id: "par-statut", label: "Le tableau par statut" },
  { id: "micro", label: "Micro-entreprise" },
  { id: "eurl", label: "EURL" },
  { id: "sasu", label: "SASU" },
  { id: "plafond-60", label: "Le plafond de 60 % de 2025" },
  { id: "salarie", label: "Garder un emploi salarié" },
];

export default function Page() {
  return (
    <GabaritChapitre
      slug={SLUG}
      plan={PLAN}
      faqs={FAQS}
      titreContact="Vérifions ce qui se cumule dans votre cas"
      sources={[
        "unedicCumul",
        "unedicCreation",
        "ftCreation",
        "ftArce",
        "spCumul",
        "spArce",
        "spAcre",
        "spAcreActu",
        "unedicAffiliation",
        "spDirigeant",
        "unedicReglement",
      ]}
      chapo={
        <p>
          Allocation chômage, capital ARCE, exonération ACRE, salaire de dirigeant, dividendes : tout ne se cumule pas,
          et la réponse dépend du statut choisi. Voici la carte complète, à jour des changements de 2025 et 2026.
        </p>
      }
    >
      <Encart type="retenir" titre="L'essentiel en 4 lignes">
        <ul>
          <li>
            <strong>ARE et ARCE sont exclusives</strong>{" "}: c&apos;est l&apos;une ou l&apos;autre.
          </li>
          <li>
            <strong>L&apos;ACRE se cumule</strong>{" "}avec l&apos;ARE comme avec l&apos;ARCE, et elle est même obligatoire
            pour obtenir l&apos;ARCE.
          </li>
          <li>
            <strong>Depuis 2026, l&apos;ACRE se demande</strong>{" "}dans les 60 jours et l&apos;exonération est limitée à
            25 % des cotisations.
          </li>
          <li>
            <strong>Le maintien de l&apos;ARE est plafonné</strong> à 60 % de vos droits restants pour les fins de
            contrat depuis le 1er avril 2025.
          </li>
        </ul>
      </Encart>

      <H2 id="aides-entre-elles">Les aides entre elles</H2>
      <P>
        Trois dispositifs, deux organismes. L&apos;<strong>ARE</strong>{" "}(allocation d&apos;aide au retour à
        l&apos;emploi) et l&apos;<strong>ARCE</strong>{" "}(aide à la reprise ou à la création d&apos;entreprise) sont
        versées par France Travail à partir de vos droits au chômage. L&apos;<strong>ACRE</strong>{" "}(aide aux créateurs
        et repreneurs d&apos;entreprise) est une exonération partielle de cotisations sociales accordée par l&apos;Urssaf
        pendant 12 mois.
      </P>
      <Tableau
        premiereColonneLarge
        entetes={["Combinaison", "Possible ?", "Ce qu'il faut savoir"]}
        lignes={[
          [
            "ARE maintenue + ACRE",
            <Pastille key="1" v="oui" />,
            "Le cas le plus courant. L'ACRE réduit vos cotisations, l'ARE continue d'être versée selon vos revenus.",
          ],
          [
            "ARCE + ACRE",
            <Pastille key="2" v="oui">Obligatoire</Pastille>,
            "L'ARCE n'est versée qu'aux créateurs qui ont obtenu l'ACRE. Demande à l'Urssaf sous 60 jours.",
          ],
          [
            "ARE maintenue + ARCE",
            <Pastille key="3" v="non" />,
            "Exclusives : choisir l'ARCE met fin au cumul de l'ARE avec vos revenus d'activité.",
          ],
          [
            "ARCE puis retour à l'ARE",
            <Pastille key="4" v="sous">Si l'activité cesse</Pastille>,
            "Il vous reste 40 % des droits. Après une cessation d'activité, vous pouvez les reprendre, après un différé lié au second versement et dans la limite du délai de déchéance.",
          ],
          [
            "ACRE deux fois",
            <Pastille key="5" v="sous">Délai de 3 ans</Pastille>,
            "Pas d'ACRE si vous en avez bénéficié au cours des 3 années précédentes.",
          ],
        ]}
        legende="Sources : règlement d'assurance chômage (articles 30 à 35), fiches service-public F15252 et F11677."
      />

      <H2 id="par-statut">Le tableau par statut</H2>
      <P>
        Le statut juridique change surtout une chose : <strong>ce que France Travail retient comme revenu</strong>{" "}pour
        réduire votre allocation. La règle de base est la même pour tous : chaque mois, l&apos;allocation est diminuée
        de <strong>70 % des revenus pris en compte</strong>, et les jours non payés ne sont pas perdus, ils sont
        reportés.
      </P>
      <Tableau
        premiereColonneLarge
        entetes={["", "Micro-entreprise", "EURL (gérant associé unique)", "SASU (président)"]}
        lignes={[
          [
            "Maintien de l'ARE",
            <Pastille key="m1" v="oui" />,
            <Pastille key="e1" v="oui" />,
            <Pastille key="s1" v="oui" />,
          ],
          [
            "Revenu retenu par France Travail",
            "Chiffre d'affaires après abattement forfaitaire (34 % en BNC, 50 % en BIC de services, 71 % en vente)",
            "Rémunération du gérant déclarée (et bénéfice à l'impôt sur le revenu si l'EURL n'a pas opté pour l'IS)",
            "Salaire brut du président",
          ],
          [
            "Sans aucun revenu",
            "Allocation entière, dans la limite du plafond de 60 %",
            "Allocation entière, dans la limite du plafond de 60 %",
            "Allocation entière, dans la limite du plafond de 60 %",
          ],
          [
            "ARCE",
            <Pastille key="m2" v="sous">Avec l&apos;ACRE</Pastille>,
            <Pastille key="e2" v="sous">Avec l&apos;ACRE</Pastille>,
            <Pastille key="s2" v="sous">Avec l&apos;ACRE</Pastille>,
          ],
          [
            "ACRE 2026",
            "Taux de cotisation à 75 % du taux normal jusqu'à la fin du 3e trimestre civil (créations depuis le 1er juillet 2026)",
            "25 % d'exonération si le revenu ne dépasse pas 36 045 €, dégressive jusqu'à 48 060 €",
            "25 % d'exonération des cotisations salariales et patronales, seulement si un salaire est versé",
          ],
          [
            "Dividendes",
            "Sans objet",
            "Possibles à l'IS : au-delà de 10 % du capital, soumis aux cotisations sociales",
            "Possibles : pas de cotisations, flat tax de 31,4 %",
          ],
          [
            "Assurance chômage du dirigeant",
            "Non",
            "Non (gérant associé unique exclu)",
            "Non pour le mandat (sauf vrai contrat de travail distinct)",
          ],
        ]}
        legende="Règles en vigueur au 4 novembre 2026. Plafond de 60 % : fins de contrat de travail (ou procédures de licenciement engagées) depuis le 1er avril 2025."
      />

      <H2 id="micro">Micro-entreprise : le chiffre d&apos;affaires après abattement</H2>
      <P>
        Vous déclarez chaque mois votre chiffre d&apos;affaires à France Travail. Il retient ce chiffre diminué de
        l&apos;abattement forfaitaire pour frais (34 % pour une activité libérale en BNC, 50 % pour une prestation de
        services commerciale ou artisanale, 71 % pour l&apos;achat-revente), puis retire 70 % de ce montant à votre
        allocation du mois.
      </P>
      <P>
        Pour un consultant en BNC qui facture 3 000 € dans le mois, France Travail retient 1 980 € (3 000 € moins 34 %)
        et retire 1 386 € (70 % de 1 980 €) à son allocation. Le calcul détaillé, jour par jour, est dans le chapitre{" "}
        <A href={urlChapitre("are-ou-arce")}>ARE ou ARCE</A>.
      </P>
      <Encart type="nouveau" titre="ACRE micro-entreprise : 25 % depuis le 1er juillet 2026">
        <p>
          Pour une micro-entreprise créée ou reprise depuis le 1er juillet 2026, l&apos;ACRE ramène le taux de
          cotisation à 75 % du taux normal (contre 50 % auparavant), jusqu&apos;à la fin du 3e trimestre civil qui suit
          le début d&apos;activité. Exemple donné par l&apos;administration : 15,9 % au lieu de 21,2 % pour une activité
          de services commerciale. Demande sous 60 jours, voir le chapitre{" "}
          <A href={urlChapitre("acre")}>ACRE 2026</A>.
        </p>
      </Encart>

      <H2 id="eurl">EURL : la rémunération du gérant, et le piège des dividendes</H2>
      <P>
        Le gérant associé unique d&apos;une EURL est travailleur non salarié et n&apos;est pas couvert par
        l&apos;assurance chômage pour son mandat. En revanche, il peut garder l&apos;ARE issue de son ancien emploi
        salarié, selon la règle de cumul : 70 % de la rémunération déclarée est retirée de l&apos;allocation.
      </P>
      <Ul>
        <li>
          <strong>EURL à l&apos;impôt sur le revenu</strong>{" "}(le régime par défaut) : le bénéfice est imposé chez vous
          comme revenu professionnel, rémunération ou non. Il n&apos;y a pas de dividendes.
        </li>
        <li>
          <strong>EURL à l&apos;impôt sur les sociétés</strong> : vous choisissez votre rémunération. Les dividendes
          sont possibles, mais la part qui dépasse 10 % du capital social (et des comptes courants) supporte les
          cotisations des indépendants. Avec un capital de 1 000 €, cela commence dès 100 € de dividendes.
        </li>
      </Ul>
      <P>
        Le détail des calculs est dans les chapitres <A href={urlChapitre("remuneration-sasu-eurl")}>se rémunérer</A> et{" "}
        <A href={urlChapitre("dividendes-sasu-eurl")}>dividendes</A>.
      </P>

      <H2 id="sasu">SASU : président sans salaire, le montage classique</H2>
      <P>
        Le président de SASU est assimilé salarié pour la Sécurité sociale, mais il n&apos;est pas couvert par
        l&apos;assurance chômage au titre de son mandat. Il peut en revanche percevoir l&apos;ARE de son ancien emploi.
        S&apos;il ne se verse aucun salaire, rien n&apos;est déduit de son allocation du mois : c&apos;est le montage
        qu&apos;utilisent beaucoup de freelances pendant le lancement, avec deux limites.
      </P>
      <Ul>
        <li>
          <strong>Le plafond de 60 %</strong>{" "}des droits restants s&apos;applique aussi dans ce cas (voir ci-dessous).
        </li>
        <li>
          <strong>L&apos;argent reste dans la société</strong>{" "}: l&apos;impôt sur les sociétés s&apos;applique sur le
          bénéfice, et le sortir plus tard en dividendes coûte 31,4 % de flat tax.
        </li>
      </Ul>
      <P>
        Avec une SASU sans salaire, l&apos;ACRE n&apos;apporte rien (pas de cotisations, donc rien à exonérer). Elle
        reste nécessaire si vous voulez l&apos;ARCE.
      </P>

      <H2 id="plafond-60">Le plafond de 60 % introduit en 2025</H2>
      <P>
        Pour les fins de contrat de travail (ou les procédures de licenciement engagées) depuis le{" "}
        <strong>1er avril 2025</strong>, le cumul de l&apos;ARE avec une activité non salariée est plafonné à{" "}
        <strong>60 % du reliquat de droits</strong>{" "}existant à la date de début de l&apos;activité. Une fois ce plafond
        atteint, les versements s&apos;arrêtent.
      </P>
      <Ul>
        <li>
          Si l&apos;activité est réelle mais ne vous a rapporté <strong>aucun revenu, dividendes compris</strong>, vous
          pouvez demander à l&apos;instance paritaire régionale de France Travail la poursuite des versements, dans les 6
          mois qui suivent l&apos;atteinte du plafond.
        </li>
        <li>
          Si l&apos;activité cesse ou est mise en sommeil, vous pouvez reprendre les 40 % restants, dans la limite du
          délai de déchéance (3 ans après l&apos;ouverture des droits, plus la durée des droits).
        </li>
      </Ul>
      <Encart type="attention" titre="Ce que cela change dans le choix ARE ou ARCE">
        <p>
          Avant 2025, garder l&apos;ARE permettait en théorie de toucher 100 % de ses droits, contre 60 % avec
          l&apos;ARCE. Désormais, les deux options plafonnent à 60 % pour la plupart des créateurs. La vraie différence
          porte sur le rythme (mensuel ou en capital) et sur l&apos;effet de vos revenus : avec l&apos;ARE, chaque euro
          gagné réduit l&apos;allocation du mois ; avec l&apos;ARCE, vos revenus ne changent rien au capital.
        </p>
      </Encart>

      <H2 id="salarie">Garder un emploi salarié en parallèle</H2>
      <P>
        Vous pouvez créer votre activité tout en gardant un emploi salarié. Deux points de vigilance :
      </P>
      <Ul>
        <li>
          <strong>ARCE</strong>{" "}: pour les fins de contrat depuis le 1er avril 2025, le second versement n&apos;est pas
          dû si vous occupez un CDI à temps plein au moment où il doit être versé (6 mois après le premier).
        </li>
        <li>
          <strong>ACRE</strong>{" "}: en société, elle suppose de contrôler effectivement l&apos;entreprise (plus de 50 % du
          capital notamment) et de garder ce contrôle au moins 2 ans.
        </li>
      </Ul>

      <H3>Et si vous démissionnez ?</H3>
      <P>
        Une démission n&apos;ouvre en principe pas droit au chômage, sauf dans le cadre de la démission pour
        reconversion avec un projet de création validé (5 ans d&apos;ancienneté, conseil en évolution professionnelle
        avant de démissionner, accord de Transitions Pro). Le parcours complet est dans le{" "}
        <A href="/devenir-freelance#quitter-son-emploi">sommaire du guide</A>.
      </P>

      <CtaEncart
        titre="Votre combinaison est-elle la bonne ?"
        texte="Droits restants, statut, rémunération, dividendes : on vérifie avec vos chiffres que rien ne vous fait perdre une aide. Premier rendez-vous gratuit, en visio ou par téléphone."
      />
    </GabaritChapitre>
  );
}
