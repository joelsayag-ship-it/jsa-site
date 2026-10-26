/**
 * Calcul de l'impôt sur le revenu 2026 (revenus 2025) et 2027 (revenus 2026),
 * version simplifiée.
 *
 * - Impôt 2026 : paramètres de la loi de finances pour 2026.
 * - Impôt 2027 : paramètres du projet de loi de finances pour 2027 (n° 3210,
 *   déposé le 01/10/2026, article 2 : revalorisation de 2,1 %). PROVISOIRE :
 *   à remplacer par les montants de la loi promulguée (fin décembre 2026).
 *
 * Toutes les fonctions exportées ici sont pures : aucun effet de bord,
 * pas d'accès React, pas de DOM. Elles sont conçues pour être testables
 * et ré-utilisables côté serveur si besoin.
 *
 * AVERTISSEMENT — moteur volontairement simplifié : pas de PAS, pas d'acomptes
 * contemporains, pas de PFU / plus-values, pas d'IFI, pas de contributions
 * sociales, pas de versement libératoire micro, pas de plafonnement global
 * des niches, pas de DOM ni non-résidents.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type Situation =
  | "celibataire"
  | "marie_pacse"
  | "veuf"
  | "divorce_separe";

export type SituationParticuliere = "aucune" | "parent_isole" | "invalide";

export interface TaxInputs {
  situation: Situation;
  /** Nombre total d'enfants à charge (y compris en garde alternée). Plafonné à 6. */
  nbEnfants: number;
  /** Parmi nbEnfants, ceux en garde alternée. */
  enfantsAlternes: number;
  situationParticuliere: SituationParticuliere;

  /** Salaires / pensions / rémunération dirigeant — déclarant. Abattement 10 % appliqué. */
  revenus: number;
  /** Idem pour le conjoint. */
  revenusConjoint: number;

  /** Revenus fonciers nets imposables (déjà après abattement micro-foncier ou charges). */
  revenusFonciers: number;
  /** BIC, BNC, micro, LMNP et autres revenus imposables — saisis en net imposable. */
  bicBncAutres: number;

  /** Charges déductibles du revenu global (PER, pension alimentaire, CSG, etc.). */
  chargesDeductibles: number;

  donsAssociations: number;
  /** Crédit d'impôt 50 % pour garde d'enfants de moins de 6 ans hors domicile. */
  gardeEnfantsMoins6: number;

  appliquerDecote: boolean;

  /** Année d'imposition (2026 = revenus 2025, 2027 = revenus 2026). Par défaut ANNEE_PAR_DEFAUT (2027). */
  annee?: AnneeImpot;
}

export interface TaxResult {
  parts: number;
  partsBase: number;

  revenuBrutTotal: number;
  abattementsTotal: number;
  chargesDeductiblesTotal: number;
  revenuNetImposable: number;

  quotientFamilial: number;

  impotAvantPlafond: number;
  impotBasePartsBase: number;
  plafondQF: number;
  effetPlafonnement: number;
  impotApresPlafond: number;

  decote: number;
  reductionsCreditsTotal: number;

  impotNet: number;

  tauxMarginal: number;
  tauxMoyen: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Paramètres fiscaux par année d'imposition
// ─────────────────────────────────────────────────────────────────────────────

export interface Bracket {
  min: number;
  max: number;
  rate: number;
}

export type AnneeImpot = 2026 | 2027;

export interface ParametresImpot {
  annee: AnneeImpot;
  anneeRevenus: number;
  /** "loi" = loi de finances votée ; "projet" = projet de loi, montants provisoires. */
  statut: "loi" | "projet";
  brackets: Bracket[];
  /** Plafond de l'avantage du quotient familial par demi-part supplémentaire. */
  plafondDemiPart: number;
  /** Décote = forfait − taux × impôt brut (art. 197, I, 4 du CGI). */
  decote: { forfaitCelib: number; forfaitCouple: number; taux: number };
}

export const PARAMETRES: Record<AnneeImpot, ParametresImpot> = {
  2026: {
    annee: 2026,
    anneeRevenus: 2025,
    statut: "loi",
    brackets: [
      { min: 0, max: 11_600, rate: 0 },
      { min: 11_600, max: 29_579, rate: 0.11 },
      { min: 29_579, max: 84_577, rate: 0.3 },
      { min: 84_577, max: 181_917, rate: 0.41 },
      { min: 181_917, max: Infinity, rate: 0.45 },
    ],
    plafondDemiPart: 1807,
    decote: { forfaitCelib: 897, forfaitCouple: 1483, taux: 0.4525 },
  },
  2027: {
    annee: 2027,
    anneeRevenus: 2026,
    statut: "projet",
    brackets: [
      { min: 0, max: 11_844, rate: 0 },
      { min: 11_844, max: 30_200, rate: 0.11 },
      { min: 30_200, max: 86_353, rate: 0.3 },
      { min: 86_353, max: 185_737, rate: 0.41 },
      { min: 185_737, max: Infinity, rate: 0.45 },
    ],
    plafondDemiPart: 1845,
    decote: { forfaitCelib: 915, forfaitCouple: 1513, taux: 0.4525 },
  },
};

/** Année proposée sur le site : impôt 2027 sur les revenus 2026. */
export const ANNEE_PAR_DEFAUT: AnneeImpot = 2027;

const params = (annee: AnneeImpot = ANNEE_PAR_DEFAUT) => PARAMETRES[annee];

/** Barème progressif IR 2026 (conservé pour compatibilité). */
export const BRACKETS_2026: Bracket[] = PARAMETRES[2026].brackets;

/** Abattement forfaitaire salaires / pensions. */
export const ABATTEMENT_SALAIRES_RATE = 0.1;

/** Plafonnement du quotient familial 2026 (conservé pour compatibilité). */
export const PLAFOND_DEMI_PART = PARAMETRES[2026].plafondDemiPart;

/** Taux des principaux crédits / réductions d'impôt. */
export const TAUX_CREDITS = {
  gardeEnfantsMoins6: 0.5,
  donsStandard: 0.66,
} as const;

/** Limite haute affichée dans l'UI pour le nombre d'enfants. */
export const MAX_ENFANTS = 6;

// ─────────────────────────────────────────────────────────────────────────────
// 1. Parts fiscales
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Calcule le nombre de parts fiscales du foyer.
 *
 * - Célibataire / divorcé / séparé : 1 part
 * - Marié / PACSÉ : 2 parts
 * - Veuf : 1 part (2 parts s'il y a au moins un enfant à charge)
 * - 1er et 2e enfant à charge plein : +0,5 part chacun
 * - À partir du 3e : +1 part par enfant
 * - Enfant en garde alternée : moitié de la part qu'il aurait à charge plein
 * - Parent isolé (au moins 1 enfant) : +0,5 part
 * - Invalide (case P) : +0,5 part
 */
export function calculateParts(
  situation: Situation,
  nbEnfants: number,
  enfantsAlternes: number,
  situationParticuliere: SituationParticuliere,
): { parts: number; partsBase: number } {
  const total = clampInt(nbEnfants, 0, MAX_ENFANTS);
  const alternes = clampInt(enfantsAlternes, 0, total);
  const charge = total - alternes;

  let base: number;
  switch (situation) {
    case "marie_pacse":
      base = 2;
      break;
    case "veuf":
      base = total > 0 ? 2 : 1;
      break;
    case "celibataire":
    case "divorce_separe":
    default:
      base = 1;
      break;
  }

  // On compte les enfants à charge plein d'abord, puis ceux en garde alternée
  // (moitié de la part). L'ordre n'a pas d'effet sur le total.
  const partFor = (rang: number) => (rang <= 2 ? 0.5 : 1);
  let partsEnfants = 0;
  let rang = 0;
  for (let i = 0; i < charge; i++) {
    rang++;
    partsEnfants += partFor(rang);
  }
  for (let i = 0; i < alternes; i++) {
    rang++;
    partsEnfants += partFor(rang) / 2;
  }

  let majoration = 0;
  if (
    situationParticuliere === "parent_isole" &&
    total >= 1 &&
    (situation === "celibataire" || situation === "divorce_separe")
  ) {
    majoration += 0.5;
  }
  if (situationParticuliere === "invalide") {
    majoration += 0.5;
  }

  const parts = base + partsEnfants + majoration;
  return { parts, partsBase: base };
}

function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Barème progressif
// ─────────────────────────────────────────────────────────────────────────────

export function calculateTaxByBracket(taxablePerPart: number, annee?: AnneeImpot): number {
  if (taxablePerPart <= 0) return 0;
  let tax = 0;
  for (const bracket of params(annee).brackets) {
    if (taxablePerPart <= bracket.min) break;
    const upper = Math.min(taxablePerPart, bracket.max);
    tax += (upper - bracket.min) * bracket.rate;
    if (taxablePerPart <= bracket.max) break;
  }
  return tax;
}

export function getMarginalTaxRate(taxablePerPart: number, annee?: AnneeImpot): number {
  if (taxablePerPart <= 0) return 0;
  let rate = 0;
  for (const bracket of params(annee).brackets) {
    if (taxablePerPart > bracket.min) rate = bracket.rate;
  }
  return rate;
}

export function calculateGrossTax(
  taxableIncome: number,
  parts: number,
  annee?: AnneeImpot,
): number {
  if (parts <= 0) return 0;
  const perPart = taxableIncome / parts;
  return calculateTaxByBracket(perPart, annee) * parts;
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Plafonnement du quotient familial
// ─────────────────────────────────────────────────────────────────────────────

export function calculateFamilyQuotientCap(
  taxableIncome: number,
  parts: number,
  partsBase: number,
  annee?: AnneeImpot,
): {
  impotPartsReelles: number;
  impotPartsBase: number;
  plafond: number;
  impotApresPlafond: number;
  effetPlafonnement: number;
} {
  const impotPartsReelles = calculateGrossTax(taxableIncome, parts, annee);
  const impotPartsBase = calculateGrossTax(taxableIncome, partsBase, annee);

  const demiPartsSupp = Math.max(0, (parts - partsBase) / 0.5);
  const plafond = demiPartsSupp * params(annee).plafondDemiPart;

  const avantageQF = impotPartsBase - impotPartsReelles;

  let impotApresPlafond = impotPartsReelles;
  let effetPlafonnement = 0;

  if (avantageQF > plafond) {
    impotApresPlafond = impotPartsBase - plafond;
    effetPlafonnement = avantageQF - plafond;
  }

  return {
    impotPartsReelles,
    impotPartsBase,
    plafond,
    impotApresPlafond,
    effetPlafonnement,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. Décote
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Décote : forfait − 45,25 % de l'impôt brut, dans la limite de l'impôt brut.
 * Elle s'annule d'elle-même au-delà du seuil (forfait / taux).
 * isCouple = couple soumis à imposition commune (mariés ou pacsés) uniquement.
 */
export function calculateDecote(grossTax: number, isCouple: boolean, annee?: AnneeImpot): number {
  if (grossTax <= 0) return 0;
  const { forfaitCelib, forfaitCouple, taux } = params(annee).decote;
  const forfait = isCouple ? forfaitCouple : forfaitCelib;
  return Math.min(grossTax, Math.max(0, forfait - grossTax * taux));
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Calcul global
// ─────────────────────────────────────────────────────────────────────────────

function applyAbattementSalaires(montant: number): {
  imposable: number;
  abat: number;
} {
  if (montant <= 0) return { imposable: 0, abat: 0 };
  const abat = montant * ABATTEMENT_SALAIRES_RATE;
  return { imposable: montant - abat, abat };
}

export function calculateNetTax(inputs: TaxInputs): TaxResult {
  const annee = inputs.annee ?? ANNEE_PAR_DEFAUT;
  // 1. Parts
  const { parts, partsBase } = calculateParts(
    inputs.situation,
    inputs.nbEnfants,
    inputs.enfantsAlternes,
    inputs.situationParticuliere,
  );

  // 2. Revenus
  const decl = applyAbattementSalaires(Math.max(0, inputs.revenus));
  const conj = applyAbattementSalaires(Math.max(0, inputs.revenusConjoint));

  const fonciers = Math.max(0, inputs.revenusFonciers);
  const autres = Math.max(0, inputs.bicBncAutres);

  const revenuBrutTotal =
    Math.max(0, inputs.revenus) +
    Math.max(0, inputs.revenusConjoint) +
    fonciers +
    autres;

  const abattementsTotal = decl.abat + conj.abat;

  const revenuCategoriels =
    decl.imposable + conj.imposable + fonciers + autres;

  // 3. Charges déductibles
  const chargesDeductiblesTotal = Math.max(0, inputs.chargesDeductibles);

  const revenuNetImposable = Math.max(
    0,
    revenuCategoriels - chargesDeductiblesTotal,
  );

  const quotientFamilial = parts > 0 ? revenuNetImposable / parts : 0;

  // 4. Impôt brut + plafonnement QF
  const cap = calculateFamilyQuotientCap(revenuNetImposable, parts, partsBase, annee);

  // 5. Décote
  // Décote « couple » réservée aux couples soumis à imposition commune.
  const isCouple = inputs.situation === "marie_pacse";
  const decote = inputs.appliquerDecote
    ? calculateDecote(cap.impotApresPlafond, isCouple, annee)
    : 0;

  const impotApresDecote = Math.max(0, cap.impotApresPlafond - decote);

  // 6. Réductions & crédits
  const garde =
    Math.max(0, inputs.gardeEnfantsMoins6) * TAUX_CREDITS.gardeEnfantsMoins6;
  const dons = Math.max(0, inputs.donsAssociations) * TAUX_CREDITS.donsStandard;
  const reductionsCreditsTotal = garde + dons;

  const impotNet = Math.max(0, impotApresDecote - reductionsCreditsTotal);

  const tauxMarginal = getMarginalTaxRate(quotientFamilial, annee);
  const tauxMoyen =
    revenuNetImposable > 0 ? impotNet / revenuNetImposable : 0;

  return {
    parts,
    partsBase,
    revenuBrutTotal,
    abattementsTotal,
    chargesDeductiblesTotal,
    revenuNetImposable,
    quotientFamilial,
    impotAvantPlafond: cap.impotPartsReelles,
    impotBasePartsBase: cap.impotPartsBase,
    plafondQF: cap.plafond,
    effetPlafonnement: cap.effetPlafonnement,
    impotApresPlafond: cap.impotApresPlafond,
    decote,
    reductionsCreditsTotal,
    impotNet,
    tauxMarginal,
    tauxMoyen,
  };
}
