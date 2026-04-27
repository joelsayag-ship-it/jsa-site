/**
 * Calcul de l'impôt sur le revenu 2026 (revenus 2025).
 *
 * Toutes les fonctions exportées ici sont pures : aucun effet de bord,
 * pas d'accès React, pas de DOM. Elles sont conçues pour être testables
 * et ré-utilisables côté serveur si besoin.
 *
 * AVERTISSEMENT — ce moteur est volontairement simplifié :
 * il n'inclut pas le PAS, les acomptes contemporains, le PFU, les
 * plus-values, l'IFI, les contributions sociales, le versement
 * libératoire micro, le plafonnement global des niches, ni les
 * situations internationales / DOM / non-résidents.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type Situation =
  | "celibataire"
  | "marie_pacse"
  | "veuf"
  | "divorce_separe";

export interface TaxInputs {
  situation: Situation;
  nbEnfants: number;
  parentIsole: boolean;

  salairesDeclarant: number;
  salairesConjoint: number;
  salairesPreAbatus: boolean;

  remDirigeantAssimile: number;
  remDirigeantAssimilePreAbatus: boolean;

  remDirigeantTNS: number;
  bncProfessionnel: number;
  bicProfessionnel: number;

  microBNC: number;
  microBICServices: number;
  microBICVentes: number;
  versementLiberatoire: boolean;

  revenusFonciers: number;
  resultatLMNP: number;
  pensionsRetraites: number;
  autresRevenus: number;

  pensionAlimentaire: number;
  versementsPER: number;
  csgDeductible: number;
  autresCharges: number;

  emploiADomicile: number;
  fraisGardeEnfants: number;
  donsAssociations: number;
  donsAideEnDifficulte: boolean;
  autresReductions: number;

  appliquerDecote: boolean;
}

export interface TaxResult {
  parts: number;
  partsBase: number;

  revenuBrutTotal: number;
  abattementsTotal: number;
  microImposable: number;
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

/** Abattements micro-entreprise (sur le CA). */
export const ABATTEMENT_MICRO = {
  bnc: 0.34,
  bicServices: 0.5,
  bicVentes: 0.71,
} as const;

/** Abattement minimum légal applicable aux régimes micro. */
export const ABATTEMENT_MICRO_MIN = 305;

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
  emploiADomicile: 0.5,
  fraisGardeEnfants: 0.5,
  donsStandard: 0.66,
  donsAideEnDifficulte: 0.75,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// 1. Parts fiscales
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Calcule le nombre de parts fiscales du foyer.
 *
 * Règles simplifiées :
 * - Célibataire / divorcé / séparé : 1 part
 * - Marié / PACSÉ : 2 parts
 * - Veuf : 1 part (2 parts s'il y a au moins un enfant à charge)
 * - 1er et 2e enfant : +0,5 part chacun
 * - À partir du 3e enfant : +1 part par enfant
 * - Parent isolé (au moins 1 enfant) : +0,5 part
 *
 * Cas particuliers non gérés : invalidité, anciens combattants,
 * garde alternée fine, rattachement d'enfants majeurs.
 */
export function calculateParts(
  situation: Situation,
  nbEnfants: number,
  parentIsole: boolean,
): { parts: number; partsBase: number } {
  const enfants = Math.max(0, Math.floor(nbEnfants));

  let base: number;
  switch (situation) {
    case "marie_pacse":
      base = 2;
      break;
    case "veuf":
      base = enfants > 0 ? 2 : 1;
      break;
    case "celibataire":
    case "divorce_separe":
    default:
      base = 1;
      break;
  }

  let partsEnfants = 0;
  if (enfants >= 1) partsEnfants += 0.5;
  if (enfants >= 2) partsEnfants += 0.5;
  if (enfants >= 3) partsEnfants += enfants - 2;

  let majoration = 0;
  if (
    parentIsole &&
    enfants >= 1 &&
    (situation === "celibataire" || situation === "divorce_separe")
  ) {
    majoration = 0.5;
  }

  const parts = base + partsEnfants + majoration;
  return { parts, partsBase: base };
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Barème progressif
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Applique le barème progressif à un revenu imposable par part.
 * Renvoie l'impôt dû pour 1 part, avant multiplication par le nombre
 * de parts.
 */
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

/** Renvoie le taux marginal correspondant à un revenu par part. */
export function getMarginalTaxRate(taxablePerPart: number): number {
  if (taxablePerPart <= 0) return 0;
  let rate = 0;
  for (const bracket of BRACKETS_2026) {
    if (taxablePerPart > bracket.min) rate = bracket.rate;
  }
  return rate;
}

/** Impôt brut total = impôt par part × nombre de parts. */
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

/**
 * Plafonnement simplifié du QF.
 *
 * On compare l'impôt calculé avec le nombre réel de parts à celui
 * calculé avec le nombre de parts "de base" (1 si seul, 2 si marié).
 * L'avantage en impôt issu des demi-parts supplémentaires est plafonné.
 *
 * Cas particuliers non gérés : majorations spécifiques aux veufs,
 * invalides, anciens combattants, demi-part vieux parents isolés.
 */
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
// 4. Micro-entreprise
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Calcule le revenu imposable issu de l'activité micro-entreprise
 * après application des abattements forfaitaires fiscaux.
 *
 * Si le foyer a opté pour le versement libératoire et que le CA
 * concerné a déjà été soumis à ce dernier, ces revenus sont sortis
 * de l'assiette progressive et la fonction renvoie 0 pour la part
 * correspondante (le simulateur affiche un message dédié).
 */
export function calculateMicroTaxableIncome(
  microBNC: number,
  microBICServices: number,
  microBICVentes: number,
  versementLiberatoire: boolean,
): number {
  if (versementLiberatoire) return 0;

  const apply = (ca: number, rate: number): number => {
    if (ca <= 0) return 0;
    const abat = Math.max(ca * rate, ABATTEMENT_MICRO_MIN);
    return Math.max(0, ca - abat);
  };

  return (
    apply(microBNC, ABATTEMENT_MICRO.bnc) +
    apply(microBICServices, ABATTEMENT_MICRO.bicServices) +
    apply(microBICVentes, ABATTEMENT_MICRO.bicVentes)
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Décote
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Décote simplifiée pour les faibles impositions.
 *
 * Valeurs basées sur la loi de finances 2025 (revenus 2024) ; la
 * version 2026 sera publiée plus tard, on retient ces valeurs comme
 * approximation prudente.
 *
 * TODO : actualiser dès publication de la LF 2026 définitive.
 */
export function calculateDecote(grossTax: number, isCouple: boolean): number {
  const seuil = isCouple ? DECOTE.seuilCouple : DECOTE.seuilCelib;
  const plafond = isCouple ? DECOTE.plafondCouple : DECOTE.plafondCelib;
  if (grossTax <= 0 || grossTax >= seuil) return 0;
  return Math.max(0, plafond - grossTax * DECOTE.taux);
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. Crédits et réductions d'impôt
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Calcule le total des réductions et crédits d'impôt simplifiés.
 *
 * Plafonds spécifiques (frais de garde 3500 € / enfant, plafond global
 * des niches fiscales 10 000 €, plafonds dons aux associations…) NON
 * gérés dans cette première version.
 */
export function calculateCredits(inputs: {
  emploiADomicile: number;
  fraisGardeEnfants: number;
  donsAssociations: number;
  donsAideEnDifficulte: boolean;
  autresReductions: number;
}): number {
  const emploi = Math.max(0, inputs.emploiADomicile) * TAUX_CREDITS.emploiADomicile;
  const garde =
    Math.max(0, inputs.fraisGardeEnfants) * TAUX_CREDITS.fraisGardeEnfants;
  const tauxDons = inputs.donsAideEnDifficulte
    ? TAUX_CREDITS.donsAideEnDifficulte
    : TAUX_CREDITS.donsStandard;
  const dons = Math.max(0, inputs.donsAssociations) * tauxDons;
  const autres = Math.max(0, inputs.autresReductions);
  return emploi + garde + dons + autres;
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. Calcul global — orchestration
// ─────────────────────────────────────────────────────────────────────────────

function applyAbattementSalaires(montant: number, deja: boolean): {
  imposable: number;
  abat: number;
} {
  if (montant <= 0) return { imposable: 0, abat: 0 };
  if (deja) return { imposable: montant, abat: 0 };
  const abat = montant * ABATTEMENT_SALAIRES_RATE;
  return { imposable: montant - abat, abat };
}

/**
 * Fonction principale : prend toutes les saisies utilisateur et renvoie
 * le résultat fiscal complet pour affichage dans l'interface.
 */
export function calculateNetTax(inputs: TaxInputs): TaxResult {
  // 1. Parts
  const { parts, partsBase } = calculateParts(
    inputs.situation,
    inputs.nbEnfants,
    inputs.parentIsole,
  );

  // 2. Revenus avec abattements
  const salDecl = applyAbattementSalaires(
    inputs.salairesDeclarant,
    inputs.salairesPreAbatus,
  );
  const salConj = applyAbattementSalaires(
    inputs.salairesConjoint,
    inputs.salairesPreAbatus,
  );
  const remAss = applyAbattementSalaires(
    inputs.remDirigeantAssimile,
    inputs.remDirigeantAssimilePreAbatus,
  );

  const microImposable = calculateMicroTaxableIncome(
    inputs.microBNC,
    inputs.microBICServices,
    inputs.microBICVentes,
    inputs.versementLiberatoire,
  );

  const revenuBrutTotal =
    Math.max(0, inputs.salairesDeclarant) +
    Math.max(0, inputs.salairesConjoint) +
    Math.max(0, inputs.remDirigeantAssimile) +
    Math.max(0, inputs.remDirigeantTNS) +
    Math.max(0, inputs.bncProfessionnel) +
    Math.max(0, inputs.bicProfessionnel) +
    (inputs.versementLiberatoire
      ? 0
      : Math.max(0, inputs.microBNC) +
        Math.max(0, inputs.microBICServices) +
        Math.max(0, inputs.microBICVentes)) +
    Math.max(0, inputs.revenusFonciers) +
    Math.max(0, inputs.resultatLMNP) +
    Math.max(0, inputs.pensionsRetraites) +
    Math.max(0, inputs.autresRevenus);

  const abattementsTotal = salDecl.abat + salConj.abat + remAss.abat;

  const revenuCategoriels =
    salDecl.imposable +
    salConj.imposable +
    remAss.imposable +
    Math.max(0, inputs.remDirigeantTNS) +
    Math.max(0, inputs.bncProfessionnel) +
    Math.max(0, inputs.bicProfessionnel) +
    microImposable +
    Math.max(0, inputs.revenusFonciers) +
    Math.max(0, inputs.resultatLMNP) +
    Math.max(0, inputs.pensionsRetraites) +
    Math.max(0, inputs.autresRevenus);

  // 3. Charges déductibles
  const chargesDeductiblesTotal =
    Math.max(0, inputs.pensionAlimentaire) +
    Math.max(0, inputs.versementsPER) +
    Math.max(0, inputs.csgDeductible) +
    Math.max(0, inputs.autresCharges);

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

  // 6. Crédits & réductions
  const reductionsCreditsTotal = calculateCredits({
    emploiADomicile: inputs.emploiADomicile,
    fraisGardeEnfants: inputs.fraisGardeEnfants,
    donsAssociations: inputs.donsAssociations,
    donsAideEnDifficulte: inputs.donsAideEnDifficulte,
    autresReductions: inputs.autresReductions,
  });

  const impotNet = Math.max(0, impotApresDecote - reductionsCreditsTotal);

  const tauxMarginal = getMarginalTaxRate(quotientFamilial);
  const tauxMoyen =
    revenuNetImposable > 0 ? impotNet / revenuNetImposable : 0;

  return {
    parts,
    partsBase,
    revenuBrutTotal,
    abattementsTotal,
    microImposable,
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

// ─────────────────────────────────────────────────────────────────────────────
// Cas de test manuels (à exécuter mentalement ou via un test runner)
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. Célibataire, 35 000 € salaire net imposable
//    → parts = 1 ; après 10 % abat = 31 500 € ; barème :
//      11 % × (29 579 - 11 600) + 30 % × (31 500 - 29 579)
//      ≈ 1 977,69 + 576,30 = 2 553,99 € avant décote.
//
// 2. Couple marié, 80 000 € de salaires, 2 enfants
//    → parts = 3 ; après 10 % abat = 72 000 € ; QF = 24 000 €
//      → impôt par part = 11 % × (24 000 - 11 600) = 1 364 €
//      → ×3 = 4 092 € avant plafonnement (l'avantage QF des 1 part
//      d'enfants doit rester sous le plafond 2 × 1 807 = 3 614 €).
//
// 3. Freelance SASU, 50 000 € de rémunération dirigeant
//    → identique à un salarié : 45 000 € imposable, parts = 1,
//      ≈ 5 605 € d'IR brut.
//
// 4. Micro-BNC, 40 000 € CA → abat 34 % = 13 600 € (> 305 €)
//    → revenu imposable micro = 26 400 €.
//
// 5. Micro-BIC services, 50 000 € CA → abat 50 % = 25 000 €
//    → revenu imposable = 25 000 €.
//
// 6. Micro-BIC ventes, 80 000 € CA → abat 71 % = 56 800 €
//    → revenu imposable = 23 200 €.
//
// 7. Versement libératoire coché → microImposable = 0, le CA est
//    exclu de l'assiette progressive et un message s'affiche.
//
// 8. Foyer avec 20 000 € de revenus fonciers → ajoutés tels quels
//    au revenu net imposable.
//
// 9. LMNP avec 5 000 € de résultat imposable → ajoutés tels quels.
