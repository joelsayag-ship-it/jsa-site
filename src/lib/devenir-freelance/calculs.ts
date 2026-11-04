/**
 * Calculs de la section « Devenir freelance ».
 *
 * - Règles France Travail / Unédic (ARE, ARCE) : formules publiées par l'Unédic
 *   (fiche « cumul allocation et rémunération », 5 octobre 2026) et France Travail
 *   (page ARCE, exemple 40 € x 518 j x 60 % puis 3 % de retraite complémentaire).
 * - Impôt sur les sociétés : 15 % jusqu'à 42 500 € de bénéfice, 25 % au-delà
 *   (art. 219 du CGI, fiche service-public F23575).
 * - Dividendes : PFU de 31,4 % en 2026 (12,8 % d'impôt + 18,6 % de prélèvements sociaux).
 * - Cotisations et impôt sur la rémunération : moteur publicodes et modèles de l'Urssaf
 *   (voir src/lib/urssaf/README.md), calculés au moment du build.
 *
 * Paramètres vérifiés le 4 novembre 2026.
 */
import Engine from "publicodes";
import modeleAS from "@/lib/urssaf/modele-as.json";
import modeleTI from "@/lib/urssaf/modele-ti.json";
import { OPTIONS_MOTEUR, SAISIE_PAR_DEFAUT, calculerEURL, calculerSASU, type ResultatStatut } from "@/lib/urssaf/comparateur";

/* ── Paramètres officiels 2026 ──────────────────────────────────────────── */

export const PASS_2026 = 48_060;
export const PASS_2027 = 48_900;
/** Acre hors micro : exonération de 25 % jusqu'à 75 % du PASS, dégressive jusqu'au PASS. */
export const ACRE_SEUIL_TOTAL = 36_045;
export const ACRE_SEUIL_FIN = 48_060;

export const ARCE_TAUX = 0.6;
/** Retenue de 3 % au titre de la retraite complémentaire (exemple France Travail). */
export const ARCE_RETENUE_RETRAITE = 0.03;
/** Part des revenus d'activité déduite de l'allocation mensuelle. */
export const CUMUL_TAUX_DEDUCTION = 0.7;
/** Plafond de cumul ARE + création : 60 % du reliquat (fins de contrat depuis le 1er avril 2025). */
export const CUMUL_PLAFOND_RELIQUAT = 0.6;
/** Abattements micro-entreprise retenus par France Travail. */
export const ABATTEMENT_MICRO = { bnc: 0.34, bicServices: 0.5, bicVente: 0.71 } as const;

export const IS_TAUX_REDUIT = 0.15;
export const IS_PLAFOND_TAUX_REDUIT = 42_500;
export const IS_TAUX_NORMAL = 0.25;

export const PFU_IR = 0.128;
export const PRELEVEMENTS_SOCIAUX_2026 = 0.186;
export const PFU_TOTAL_2026 = PFU_IR + PRELEVEMENTS_SOCIAUX_2026; // 31,4 %

/* ── France Travail ─────────────────────────────────────────────────────── */

export function arce(allocationJournaliere: number, joursRestants: number) {
  const brut = allocationJournaliere * joursRestants * ARCE_TAUX;
  const net = brut * (1 - ARCE_RETENUE_RETRAITE);
  return { brut, net, versement: net / 2, droitsRestants: allocationJournaliere * joursRestants };
}

/**
 * Nombre de jours indemnisés dans le mois quand on déclare des revenus d'activité.
 * J = (allocation mensuelle - 70 % des revenus pris en compte) / allocation journalière, arrondi.
 */
export function cumulMois(allocationJournaliere: number, joursDuMois: number, revenusPrisEnCompte: number) {
  const allocationMensuelle = allocationJournaliere * joursDuMois;
  const deduction = revenusPrisEnCompte * CUMUL_TAUX_DEDUCTION;
  const jours = Math.max(0, Math.min(joursDuMois, Math.round((allocationMensuelle - deduction) / allocationJournaliere)));
  return {
    allocationMensuelle,
    deduction,
    jours,
    joursReportes: joursDuMois - jours,
    verse: jours * allocationJournaliere,
  };
}

/** Revenus d'un micro-entrepreneur retenus par France Travail : CA après abattement forfaitaire. */
export function revenuMicro(chiffreAffaires: number, abattement: number) {
  return chiffreAffaires * (1 - abattement);
}

/* ── Fiscalité de la société ────────────────────────────────────────────── */

export function impotSocietes(benefice: number): number {
  if (benefice <= 0) return 0;
  const tranche1 = Math.min(benefice, IS_PLAFOND_TAUX_REDUIT) * IS_TAUX_REDUIT;
  const tranche2 = Math.max(0, benefice - IS_PLAFOND_TAUX_REDUIT) * IS_TAUX_NORMAL;
  return tranche1 + tranche2;
}

/** Réserve légale : 5 % du bénéfice tant qu'elle n'atteint pas 10 % du capital (première année). */
export function reserveLegale(benefice: number, capital: number): number {
  return Math.max(0, Math.min(benefice * 0.05, capital * 0.1));
}

/* ── Moteur Urssaf ──────────────────────────────────────────────────────── */

function moteurs() {
  return {
    sasu: new Engine(modeleAS as never, OPTIONS_MOTEUR),
    eurl: new Engine(modeleTI as never, OPTIONS_MOTEUR),
  };
}


/** SASU et EURL à l'IS, tout le bénéfice versé en rémunération (même logique que le simulateur). */
export function remunerationSeule(benefice: number, options: { acre?: boolean } = {}) {
  const { sasu, eurl } = moteurs();
  const saisie = {
    ...SAISIE_PAR_DEFAUT,
    chiffreAffaires: benefice,
    charges: 0,
    acre: options.acre ?? false,
  };
  return { sasu: calculerSASU(sasu, saisie), eurl: calculerEURL(eurl, saisie) };
}

export type ScenarioDividendes = {
  libelle: string;
  /** SASU : coût total de la rémunération pour la société. EURL : rémunération brute (cotisations comprises). */
  remuneration: number;
  impotSocietes: number;
  dividendesBruts: number;
  /** Cotisations sur la rémunération (et sur les dividendes au-delà de 10 % en EURL) + prélèvements sociaux sur dividendes */
  cotisationsEtPrelevements: number;
  /** Impôt sur le revenu : barème sur la rémunération + 12,8 % sur les dividendes */
  impotRevenu: number;
  /** Ce qui reste au dirigeant après cotisations, IS et impôt sur le revenu */
  totalNet: number;
  trimestres: number;
};

/**
 * SASU : rémunération (coût total) puis dividendes du solde après IS et réserve légale, au PFU.
 * Les dividendes de SASU ne supportent pas de cotisations sociales.
 */
export function scenarioSASU(benefice: number, remuneration: number, capital: number, libelle: string): ScenarioDividendes {
  const { sasu } = moteurs();
  const rem: ResultatStatut | null =
    remuneration > 0 ? calculerSASU(sasu, { ...SAISIE_PAR_DEFAUT, chiffreAffaires: remuneration, charges: 0 }) : null;
  const resultat = benefice - remuneration;
  const is = impotSocietes(resultat);
  const dividendesBruts = Math.max(0, resultat - is - reserveLegale(resultat, capital));
  return {
    libelle,
    remuneration,
    impotSocietes: is,
    dividendesBruts,
    cotisationsEtPrelevements: (rem?.cotisations ?? 0) + dividendesBruts * PRELEVEMENTS_SOCIAUX_2026,
    impotRevenu: (rem?.impot ?? 0) + dividendesBruts * PFU_IR,
    totalNet: (rem?.netApresImpot ?? 0) + dividendesBruts * (1 - PFU_TOTAL_2026),
    trimestres: rem?.trimestres ?? 0,
  };
}

/**
 * EURL à l'IS, gérant associé unique (TNS) : rémunération puis dividendes.
 * La part des dividendes au-delà de 10 % du capital entre dans le revenu soumis aux cotisations
 * des indépendants (art. L136-3 du code de la sécurité sociale). Les cotisations sont donc calculées
 * par le moteur de l'Urssaf sur la rémunération augmentée de cette part ; la part sous 10 % supporte
 * les prélèvements sociaux de 18,6 %. Impôt sur le revenu : barème sur la rémunération (moteur Urssaf)
 * et 12,8 % sur l'ensemble des dividendes. Estimation : l'impôt sur la rémunération est calculé sans
 * tenir compte des cotisations supplémentaires dues sur les dividendes.
 */
export function scenarioEURL(benefice: number, remuneration: number, capital: number, libelle: string): ScenarioDividendes {
  const { eurl } = moteurs();
  const resultat = benefice - remuneration;
  const is = impotSocietes(resultat);
  const dividendesBruts = Math.max(0, resultat - is - reserveLegale(resultat, capital));
  const seuil = capital * 0.1;
  const partPrelevements = Math.min(dividendesBruts, seuil);
  const partCotisations = Math.max(0, dividendesBruts - seuil);

  const saisie = (ca: number) => ({ ...SAISIE_PAR_DEFAUT, chiffreAffaires: ca, charges: 0, impositionEURL: "IS" as const });
  const surRemuneration = calculerEURL(eurl, saisie(remuneration));
  const avecDividendes = partCotisations > 0 ? calculerEURL(eurl, saisie(remuneration + partCotisations)) : surRemuneration;

  const cotisations = avecDividendes.cotisations;
  const prelevements = partPrelevements * PRELEVEMENTS_SOCIAUX_2026;
  const impot = surRemuneration.impot + dividendesBruts * PFU_IR;
  return {
    libelle,
    remuneration,
    impotSocietes: is,
    dividendesBruts,
    cotisationsEtPrelevements: cotisations + prelevements,
    impotRevenu: impot,
    totalNet: remuneration + dividendesBruts - cotisations - prelevements - impot,
    trimestres: avecDividendes.trimestres,
  };
}
