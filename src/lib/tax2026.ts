/**
 * Calcul de l'impôt sur le revenu 2026 (revenus 2025) — version simplifiée.
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
// Constantes fiscales 2026 (revenus 2025)
// ─────────────────────────────────────────────────────────────────────────────

export interface Bracket {
  min: number;
  max: number;
  rate: number;
}

/** Barème progressif IR 2026 — appliqué sur le quotient familial. */
export const BRACKETS_2026: Bracket[] = [
  { min: 0, max: 11_600, rate: 0 },
  { min: 11_600, max: 29_579, rate: 0.11 },
  { min: 29_579, max: 84_577, rate: 0.3 },
  { min: 84_577, max: 181_917, rate: 0.41 },
  { min: 181_917, max: Infinity, rate: 0.45 },
];

/** Abattement forfaitaire salaires / pensions. */
export const ABATTEMENT_SALAIRES_RATE = 0.1;

/** Plafonnement du quotient familial — par demi-part supplémentaire. */
export const PLAFOND_DEMI_PART = 1807;

/** Décote (valeurs 2025 — projection pour 2026 indicative). */
export const DECOTE = {
  seuilCelib: 1964,
  seuilCouple: 3248,
  plafondCelib: 889,
  plafondCouple: 1470,
  taux: 0.4525,
} as const;

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

export function calculateTaxByBracket(taxablePerPart: number): number {
  if (taxablePerPart <= 0) return 0;
  let tax = 0;
  for (const bracket of BRACKETS_2026) {
    if (taxablePerPart <= bracket.min) break;
    const upper = Math.min(taxablePerPart, bracket.max);
    tax += (upper - bracket.min) * bracket.rate;
    if (taxablePerPart <= bracket.max) break;
  }
  return tax;
}

export function getMarginalTaxRate(taxablePerPart: number): number {
  if (taxablePerPart <= 0) return 0;
  let rate = 0;
  for (const bracket of BRACKETS_2026) {
    if (taxablePerPart > bracket.min) rate = bracket.rate;
  }
  return rate;
}

export function calculateGrossTax(
  taxableIncome: number,
  parts: number,
): number {
  if (parts <= 0) return 0;
  const perPart = taxableIncome / parts;
  return calculateTaxByBracket(perPart) * parts;
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Plafonnement du quotient familial
// ─────────────────────────────────────────────────────────────────────────────

export function calculateFamilyQuotientCap(
  taxableIncome: number,
  parts: number,
  partsBase: number,
): {
  impotPartsReelles: number;
  impotPartsBase: number;
  plafond: number;
  impotApresPlafond: number;
  effetPlafonnement: number;
} {
  const impotPartsReelles = calculateGrossTax(taxableIncome, parts);
  const impotPartsBase = calculateGrossTax(taxableIncome, partsBase);

  const demiPartsSupp = Math.max(0, (parts - partsBase) / 0.5);
  const plafond = demiPartsSupp * PLAFOND_DEMI_PART;

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

export function calculateDecote(grossTax: number, isCouple: boolean): number {
  const seuil = isCouple ? DECOTE.seuilCouple : DECOTE.seuilCelib;
  const plafond = isCouple ? DECOTE.plafondCouple : DECOTE.plafondCelib;
  if (grossTax <= 0 || grossTax >= seuil) return 0;
  return Math.max(0, plafond - grossTax * DECOTE.taux);
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
  const cap = calculateFamilyQuotientCap(revenuNetImposable, parts, partsBase);

  // 5. Décote
  const isCouple =
    inputs.situation === "marie_pacse" ||
    (inputs.situation === "veuf" && inputs.nbEnfants > 0);
  const decote = inputs.appliquerDecote
    ? calculateDecote(cap.impotApresPlafond, isCouple)
    : 0;

  const impotApresDecote = Math.max(0, cap.impotApresPlafond - decote);

  // 6. Réductions & crédits
  const garde =
    Math.max(0, inputs.gardeEnfantsMoins6) * TAUX_CREDITS.gardeEnfantsMoins6;
  const dons = Math.max(0, inputs.donsAssociations) * TAUX_CREDITS.donsStandard;
  const reductionsCreditsTotal = garde + dons;

  const impotNet = Math.max(0, impotApresDecote - reductionsCreditsTotal);

  const tauxMarginal = getMarginalTaxRate(quotientFamilial);
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
