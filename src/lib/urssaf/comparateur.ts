/**
 * Comparateur SASU / EURL : calculs réalisés avec le moteur publicodes et les
 * modèles officiels de l'URSSAF (mon-entreprise.urssaf.fr), voir README.md.
 *
 * Même logique que le comparateur de statuts de l'URSSAF :
 * - SASU (modèle « assimilé salarié ») : tout le bénéfice (chiffre d'affaires
 *   moins charges) est versé en rémunération du président ;
 * - EURL (modèle « travailleur indépendant ») : chiffre d'affaires et charges,
 *   à l'impôt sur les sociétés ou à l'impôt sur le revenu, sans dividendes.
 *
 * Ce fichier ne dépend pas de React : il sert aussi bien au simulateur (client)
 * qu'aux exemples calculés au moment du build (serveur).
 */
import type Engine from "publicodes";

export type Activite = "libérale" | "commerciale";
export type ImpositionEURL = "IS" | "IR";
export type SituationFamiliale = "célibataire" | "couple";

export type SaisieComparateur = {
  /** Chiffre d'affaires annuel hors taxes, en euros */
  chiffreAffaires: number;
  /** Charges annuelles de l'entreprise hors rémunération du dirigeant, en euros */
  charges: number;
  activite: Activite;
  impositionEURL: ImpositionEURL;
  acre: boolean;
  situationFamiliale: SituationFamiliale;
  enfants: number;
};

export const SAISIE_PAR_DEFAUT: SaisieComparateur = {
  chiffreAffaires: 80000,
  charges: 5000,
  activite: "libérale",
  impositionEURL: "IS",
  acre: false,
  situationFamiliale: "célibataire",
  enfants: 0,
};

export type ResultatStatut = {
  /** SASU : coût total de la rémunération pour la société. EURL : rémunération brute (bénéfice). */
  remuneration: number;
  cotisations: number;
  netAvantImpot: number;
  impot: number;
  netApresImpot: number;
  trimestres: number;
};

export type ResultatComparaison = {
  sasu: ResultatStatut;
  eurl: ResultatStatut;
};

const euros = (n: number) => `${Math.max(0, Math.round(n))} €/an`;

/** Date de création en début d'année : on simule une année pleine, hors première année d'activité. */
const BASE = {
  "entreprise . date de création": "période . début d'année",
};

function situationFoyer(s: SaisieComparateur) {
  return {
    "impôt . méthode de calcul": "'barème standard'",
    "impôt . foyer fiscal . situation de famille . question": `'${s.situationFamiliale}'`,
    "impôt . foyer fiscal . enfants à charge": `${Math.max(0, Math.round(s.enfants))} enfant`,
    "impôt . foyer fiscal . parent isolé": "non",
    "impôt . foyer fiscal . autres revenus imposables": "0 €/an",
  };
}

export function situationSASU(s: SaisieComparateur) {
  return {
    ...BASE,
    "assimilé salarié . rémunération . totale": euros(s.chiffreAffaires - s.charges),
    "assimilé salarié . exonérations . Acre": s.acre ? "oui" : "non",
    "entreprise . TVA": "oui",
    ...situationFoyer(s),
  };
}

export function situationEURL(s: SaisieComparateur) {
  return {
    ...BASE,
    "entreprise . EI": "non",
    "entreprise . chiffre d'affaires": euros(s.chiffreAffaires),
    "entreprise . charges": euros(s.charges),
    "entreprise . imposition": `'${s.impositionEURL}'`,
    "entreprise . activité": `'${s.activite}'`,
    ...(s.activite === "libérale"
      ? { "entreprise . activité . libérale . réglementée": "non" }
      : { "entreprise . activité . principale": "'service'" }),
    "indépendant . cotisations et contributions . cotisations . exonérations . Acre": s.acre ? "oui" : "non",
    ...situationFoyer(s),
  };
}

function montant(engine: Engine, regle: string): number {
  const valeur = engine.evaluate({ valeur: regle, unité: "€/an" }).nodeValue;
  return typeof valeur === "number" && Number.isFinite(valeur) ? valeur : 0;
}

function trimestres(engine: Engine): number {
  const valeur = engine.evaluate("protection sociale . retraite . base . trimestres").nodeValue;
  return typeof valeur === "number" && Number.isFinite(valeur) ? valeur : 0;
}

const VIDE: ResultatStatut = {
  remuneration: 0,
  cotisations: 0,
  netAvantImpot: 0,
  impot: 0,
  netApresImpot: 0,
  trimestres: 0,
};

export function calculerSASU(engine: Engine, s: SaisieComparateur): ResultatStatut {
  if (s.chiffreAffaires - s.charges <= 0) return VIDE;
  engine.setSituation(situationSASU(s));
  return {
    remuneration: montant(engine, "assimilé salarié . rémunération . totale"),
    cotisations: montant(engine, "assimilé salarié . cotisations"),
    netAvantImpot: montant(engine, "assimilé salarié . rémunération . nette . à payer avant impôt"),
    impot: montant(engine, "assimilé salarié . rémunération . impôt"),
    netApresImpot: montant(engine, "assimilé salarié . rémunération . nette . après impôt"),
    trimestres: trimestres(engine),
  };
}

export function calculerEURL(engine: Engine, s: SaisieComparateur): ResultatStatut {
  if (s.chiffreAffaires - s.charges <= 0) return VIDE;
  engine.setSituation(situationEURL(s));
  return {
    remuneration: montant(engine, "indépendant . rémunération . brute"),
    cotisations: montant(engine, "indépendant . cotisations et contributions"),
    netAvantImpot: montant(engine, "indépendant . rémunération . nette"),
    impot: montant(engine, "indépendant . rémunération . impôt"),
    netApresImpot: montant(engine, "indépendant . rémunération . nette . après impôt"),
    trimestres: trimestres(engine),
  };
}

/** Options communes aux deux moteurs : pas de journalisation des avertissements. */
export const OPTIONS_MOTEUR = {
  logger: { log: () => {}, warn: () => {}, error: () => {} },
};
