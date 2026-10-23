/**
 * Barème fiscal des indemnités kilométriques (utilisé par le simulateur et la page).
 * Source : administration fiscale, barème inchangé depuis 2023.
 * Fichier sans "use client" : importable par les composants serveur et client.
 */

export type VehicleType = "voiture" | "moto" | "cyclo";

export type Tranche = {
  max: number | null;
  coeff: number;
  intercept: number;
  rangeLabel: string;
  formulaLabel: string;
};

export type BaremeCV = { cv: string; tranches: Tranche[] };

export const VOITURE: BaremeCV[] = [
  {
    cv: "3 CV et moins",
    tranches: [
      { max: 5000,  coeff: 0.529, intercept: 0,    rangeLabel: "d ≤ 5 000 km",            formulaLabel: "d × 0,529" },
      { max: 20000, coeff: 0.316, intercept: 1065,  rangeLabel: "5 001 ≤ d ≤ 20 000 km",  formulaLabel: "(d × 0,316) + 1 065 €" },
      { max: null,  coeff: 0.37,  intercept: 0,    rangeLabel: "d > 20 000 km",            formulaLabel: "d × 0,370" },
    ],
  },
  {
    cv: "4 CV",
    tranches: [
      { max: 5000,  coeff: 0.606, intercept: 0,    rangeLabel: "d ≤ 5 000 km",            formulaLabel: "d × 0,606" },
      { max: 20000, coeff: 0.34,  intercept: 1330,  rangeLabel: "5 001 ≤ d ≤ 20 000 km",  formulaLabel: "(d × 0,340) + 1 330 €" },
      { max: null,  coeff: 0.407, intercept: 0,    rangeLabel: "d > 20 000 km",            formulaLabel: "d × 0,407" },
    ],
  },
  {
    cv: "5 CV",
    tranches: [
      { max: 5000,  coeff: 0.636, intercept: 0,    rangeLabel: "d ≤ 5 000 km",            formulaLabel: "d × 0,636" },
      { max: 20000, coeff: 0.357, intercept: 1395,  rangeLabel: "5 001 ≤ d ≤ 20 000 km",  formulaLabel: "(d × 0,357) + 1 395 €" },
      { max: null,  coeff: 0.427, intercept: 0,    rangeLabel: "d > 20 000 km",            formulaLabel: "d × 0,427" },
    ],
  },
  {
    cv: "6 CV",
    tranches: [
      { max: 5000,  coeff: 0.665, intercept: 0,    rangeLabel: "d ≤ 5 000 km",            formulaLabel: "d × 0,665" },
      { max: 20000, coeff: 0.374, intercept: 1457,  rangeLabel: "5 001 ≤ d ≤ 20 000 km",  formulaLabel: "(d × 0,374) + 1 457 €" },
      { max: null,  coeff: 0.447, intercept: 0,    rangeLabel: "d > 20 000 km",            formulaLabel: "d × 0,447" },
    ],
  },
  {
    cv: "7 CV et plus",
    tranches: [
      { max: 5000,  coeff: 0.697, intercept: 0,    rangeLabel: "d ≤ 5 000 km",            formulaLabel: "d × 0,697" },
      { max: 20000, coeff: 0.394, intercept: 1515,  rangeLabel: "5 001 ≤ d ≤ 20 000 km",  formulaLabel: "(d × 0,394) + 1 515 €" },
      { max: null,  coeff: 0.47,  intercept: 0,    rangeLabel: "d > 20 000 km",            formulaLabel: "d × 0,470" },
    ],
  },
];

export const MOTO: BaremeCV[] = [
  {
    cv: "1 ou 2 CV",
    tranches: [
      { max: 3000,  coeff: 0.395, intercept: 0,    rangeLabel: "d ≤ 3 000 km",           formulaLabel: "d × 0,395" },
      { max: 6000,  coeff: 0.099, intercept: 891,   rangeLabel: "3 001 ≤ d ≤ 6 000 km",  formulaLabel: "(d × 0,099) + 891 €" },
      { max: null,  coeff: 0.248, intercept: 0,    rangeLabel: "d > 6 000 km",            formulaLabel: "d × 0,248" },
    ],
  },
  {
    cv: "3 à 5 CV",
    tranches: [
      { max: 3000,  coeff: 0.468, intercept: 0,    rangeLabel: "d ≤ 3 000 km",           formulaLabel: "d × 0,468" },
      { max: 6000,  coeff: 0.082, intercept: 1158,  rangeLabel: "3 001 ≤ d ≤ 6 000 km",  formulaLabel: "(d × 0,082) + 1 158 €" },
      { max: null,  coeff: 0.275, intercept: 0,    rangeLabel: "d > 6 000 km",            formulaLabel: "d × 0,275" },
    ],
  },
  {
    cv: "Plus de 5 CV",
    tranches: [
      { max: 3000,  coeff: 0.606, intercept: 0,    rangeLabel: "d ≤ 3 000 km",           formulaLabel: "d × 0,606" },
      { max: 6000,  coeff: 0.079, intercept: 1583,  rangeLabel: "3 001 ≤ d ≤ 6 000 km",  formulaLabel: "(d × 0,079) + 1 583 €" },
      { max: null,  coeff: 0.343, intercept: 0,    rangeLabel: "d > 6 000 km",            formulaLabel: "d × 0,343" },
    ],
  },
];

export const CYCLO: Tranche[] = [
  { max: 3000, coeff: 0.315, intercept: 0,   rangeLabel: "d ≤ 3 000 km",           formulaLabel: "d × 0,315" },
  { max: 6000, coeff: 0.079, intercept: 711,  rangeLabel: "3 001 ≤ d ≤ 6 000 km",  formulaLabel: "(d × 0,079) + 711 €" },
  { max: null, coeff: 0.198, intercept: 0,   rangeLabel: "d > 6 000 km",            formulaLabel: "d × 0,198" },
];

/** Montant du barème pour une distance donnée, avant majoration électrique. */
export function montantIK(tranches: Tranche[], d: number): number {
  const t = tranches.find((x) => x.max === null || d <= x.max) ?? tranches[tranches.length - 1];
  return d * t.coeff + t.intercept;
}
