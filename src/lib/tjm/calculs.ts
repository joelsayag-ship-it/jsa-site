/**
 * Simulateur « TJM vers salaire net » : du taux journalier au revenu net du freelance,
 * en micro-entreprise, en EURL (à l'IS) et en SASU.
 *
 * - EURL et SASU : moteur publicodes et modèles officiels de l'Urssaf, via comparateur.ts
 *   (même calcul que le simulateur SASU / EURL : tout le bénéfice versé en rémunération).
 * - Micro-entreprise, activité libérale non réglementée (BNC) : taux de cotisations 2026
 *   de 25,6 % du chiffre d'affaires (service-public F36232, vérifié le 01/01/2026) et
 *   contribution à la formation professionnelle de 0,2 %. Impôt calculé avec le même
 *   moteur (barème standard), sur le chiffre d'affaires après l'abattement forfaitaire
 *   de 34 % (minimum 305 €, service-public F23267, vérifié le 13/05/2026).
 *
 * Paramètres vérifiés le 12/11/2026.
 */
import type Engine from "publicodes";
import {
  SAISIE_PAR_DEFAUT,
  calculerEURL,
  calculerSASU,
  type ResultatStatut,
  type SituationFamiliale,
} from "@/lib/urssaf/comparateur";

export const MICRO_TAUX_COTISATIONS_BNC = 0.256;
export const MICRO_TAUX_CFP_LIBERAL = 0.002;
export const MICRO_ABATTEMENT_BNC = 0.34;
export const MICRO_ABATTEMENT_MINIMUM = 305;
export const MICRO_PLAFOND_SERVICES = 83_600;

export type SaisieTjm = {
  /** Taux journalier hors taxes, en euros */
  tjm: number;
  /** Jours facturés dans l'année */
  jours: number;
  /** Frais professionnels annuels (logiciels, matériel, déplacements, expert-comptable...) */
  frais: number;
  situationFamiliale: SituationFamiliale;
  enfants: number;
};

export const SAISIE_TJM_PAR_DEFAUT: SaisieTjm = {
  tjm: 500,
  jours: 200,
  frais: 3000,
  situationFamiliale: "célibataire",
  enfants: 0,
};

export type ResultatMicro = ResultatStatut & {
  /** Chiffre d'affaires au-dessus du plafond de la micro-entreprise */
  plafondDepasse: boolean;
  frais: number;
};

export type ResultatTjm = {
  chiffreAffaires: number;
  micro: ResultatMicro;
  eurl: ResultatStatut;
  sasu: ResultatStatut;
};

export type Moteurs = { sasu: Engine; eurl: Engine };

export const chiffreAffaires = (s: Pick<SaisieTjm, "tjm" | "jours">) =>
  Math.max(0, s.tjm) * Math.max(0, s.jours);

function saisieComparateur(s: SaisieTjm) {
  return {
    ...SAISIE_PAR_DEFAUT,
    chiffreAffaires: chiffreAffaires(s),
    charges: Math.max(0, s.frais),
    activite: "libérale" as const,
    impositionEURL: "IS" as const,
    acre: false,
    situationFamiliale: s.situationFamiliale,
    enfants: s.enfants,
  };
}

/** Impôt du foyer quand le seul revenu est un revenu de micro-entreprise (après abattement). */
function impotMicro(engine: Engine, revenuImposable: number, s: SaisieTjm): number {
  engine.setSituation({
    "entreprise . date de création": "période . début d'année",
    "assimilé salarié . rémunération . totale": "0 €/an",
    "impôt . méthode de calcul": "'barème standard'",
    "impôt . foyer fiscal . situation de famille . question": `'${s.situationFamiliale}'`,
    "impôt . foyer fiscal . enfants à charge": `${Math.max(0, Math.round(s.enfants))} enfant`,
    "impôt . foyer fiscal . parent isolé": "non",
    "impôt . foyer fiscal . autres revenus imposables": `${Math.max(0, Math.round(revenuImposable))} €/an`,
  });
  const v = engine.evaluate({ valeur: "assimilé salarié . rémunération . impôt", unité: "€/an" }).nodeValue;
  return typeof v === "number" && Number.isFinite(v) ? Math.max(0, v) : 0;
}

export function calculerMicro(engine: Engine, s: SaisieTjm): ResultatMicro {
  const ca = chiffreAffaires(s);
  const frais = Math.max(0, s.frais);
  const cotisations = ca * (MICRO_TAUX_COTISATIONS_BNC + MICRO_TAUX_CFP_LIBERAL);
  const revenuImposable = ca > 0 ? Math.max(0, ca - Math.max(ca * MICRO_ABATTEMENT_BNC, MICRO_ABATTEMENT_MINIMUM)) : 0;
  const impot = ca > 0 ? impotMicro(engine, revenuImposable, s) : 0;
  const netAvantImpot = ca - cotisations - frais;
  return {
    remuneration: ca,
    cotisations,
    netAvantImpot,
    impot,
    netApresImpot: netAvantImpot - impot,
    trimestres: 0,
    plafondDepasse: ca > MICRO_PLAFOND_SERVICES,
    frais,
  };
}

export function calculerTjm(moteurs: Moteurs, s: SaisieTjm): ResultatTjm {
  const c = saisieComparateur(s);
  return {
    chiffreAffaires: c.chiffreAffaires,
    micro: calculerMicro(moteurs.sasu, s),
    eurl: calculerEURL(moteurs.eurl, c),
    sasu: calculerSASU(moteurs.sasu, c),
  };
}

export type Statut = "micro" | "eurl" | "sasu";

function netMensuel(moteurs: Moteurs, s: SaisieTjm, statut: Statut): number {
  const c = saisieComparateur(s);
  const r =
    statut === "micro"
      ? calculerMicro(moteurs.sasu, s)
      : statut === "eurl"
        ? calculerEURL(moteurs.eurl, c)
        : calculerSASU(moteurs.sasu, c);
  return r.netApresImpot / 12;
}

/**
 * Mode inverse : TJM nécessaire pour atteindre un net mensuel après impôt donné,
 * par dichotomie (le net augmente avec le TJM). Renvoie null si l'objectif dépasse 5 000 €/jour.
 */
export function tjmPourNet(
  moteurs: Moteurs,
  netMensuelVise: number,
  base: Omit<SaisieTjm, "tjm">,
  statut: Statut
): number | null {
  if (netMensuelVise <= 0 || base.jours <= 0) return 0;
  // Bornes : 0 à 1 500 €/jour couvre la plupart des cas ; sinon on élargit à 5 000 €/jour.
  let bas = 0;
  let haut = 1500;
  if (netMensuel(moteurs, { ...base, tjm: haut }, statut) < netMensuelVise) {
    bas = haut;
    haut = 5000;
    if (netMensuel(moteurs, { ...base, tjm: haut }, statut) < netMensuelVise) return null;
  }
  // Dichotomie jusqu'à 5 € près (une dizaine de calculs : rapide dans le navigateur).
  for (let i = 0; i < 16 && haut - bas > 5; i++) {
    const milieu = (bas + haut) / 2;
    if (netMensuel(moteurs, { ...base, tjm: milieu }, statut) >= netMensuelVise) haut = milieu;
    else bas = milieu;
  }
  // Arrondi au multiple de 5 € supérieur, en vérifiant qu'il atteint bien l'objectif.
  let resultat = Math.ceil(bas / 5) * 5;
  while (resultat < haut && netMensuel(moteurs, { ...base, tjm: resultat }, statut) < netMensuelVise) resultat += 5;
  return Math.max(resultat, 5);
}
