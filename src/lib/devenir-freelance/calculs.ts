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

function montant(engine: Engine, regle: string): number {
  const v = engine.evaluate({ valeur: regle, unité: "€/an" }).nodeValue;
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}

const eurosAn = (n: number) => `${Math.max(0, Math.round(n))} €/an`;

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

function trimestres(engine: Engine): number {
  const v = engine.evaluate("protection sociale . retraite . base . trimestres").nodeValue;
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}

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
 * La part des dividendes au-delà de 10 % du capital supporte les cotisations des indépendants
 * (art. L136-3 du code de la sécurité sociale) : calculée par le moteur de l'Urssaf.
 */
export function scenarioEURL(benefice: number, remuneration: number, capital: number, libelle: string): ScenarioDividendes {
  const { eurl } = moteurs();
  const resultat = benefice - remuneration;
  const is = impotSocietes(resultat);
  const dividendesBruts = Math.max(0, resultat - is - reserveLegale(resultat, capital));
  const seuil = capital * 0.1;
  const partPrelevements = Math.min(dividendesBruts, seuil);
  const partCotisations = Math.max(0, dividendesBruts - seuil);

  eurl.setSituation({
    "entreprise . date de création": "période . début d'année",
    "entreprise . EI": "non",
    "entreprise . chiffre d'affaires": eurosAn(remuneration),
    "entreprise . charges": "0 €/an",
    "entreprise . imposition": "'IS'",
    "entreprise . activité": "'libérale'",
    "entreprise . activité . libérale . réglementée": "non",
    "indépendant . cotisations et contributions . cotisations . exonérations . Acre": "non",
    "impôt . méthode de calcul": "'barème standard'",
    "impôt . foyer fiscal . situation de famille . question": "'célibataire'",
    "impôt . foyer fiscal . enfants à charge": "0 enfant",
    "impôt . foyer fiscal . parent isolé": "non",
    "impôt . foyer fiscal . autres revenus imposables": "0 €/an",
    ...(dividendesBruts > 0
      ? {
          "indépendant . dividendes . soumis à prélèvements sociaux": eurosAn(partPrelevements),
          "indépendant . dividendes . soumis à cotisations sociales": eurosAn(partCotisations),
          "indépendant . dividendes . imposition": "'PFU'",
        }
      : {}),
  });

  const impot = montant(eurl, "indépendant . rémunération . impôt . avec dividendes");
  return {
    libelle,
    remuneration,
    impotSocietes: is,
    dividendesBruts,
    cotisationsEtPrelevements: montant(eurl, "indépendant . cotisations et contributions . avec dividendes"),
    impotRevenu: impot,
    totalNet: montant(eurl, "indépendant . rémunération . nette . avec dividendes") - impot,
    trimestres: trimestres(eurl),
  };
}
