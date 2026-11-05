/**
 * Section « Devenir freelance » : liste des chapitres (sommaire, navigation,
 * fil d'Ariane, sitemap). L'ordre est celui du parcours conseillé.
 */
export const SITE_URL = "https://www.jsaexpertise.com";
export const SECTION_PATH = "/devenir-freelance";
export const SECTION_URL = `${SITE_URL}${SECTION_PATH}`;
export const SECTION_NOM = "Devenir freelance";

/** Date de la dernière vérification des règles et chiffres sur les sources officielles. */
export const DATE_VERIFICATION = "4 novembre 2026";
export const DATE_MAJ_ISO = "2026-11-04";

export type Chapitre = {
  slug: string;
  /** Titre court (menus, sommaire) */
  court: string;
  /** Titre complet du chapitre (H1) */
  titre: string;
  /** Une phrase de présentation pour le sommaire */
  resume: string;
};

export const CHAPITRES: Chapitre[] = [
  {
    slug: "cumul-are-arce-acre",
    court: "Ce qui se cumule",
    titre: "ARE, ARCE, ACRE, salaire, dividendes : ce qui se cumule selon votre statut",
    resume:
      "Le tableau de compatibilité entre aides et statuts : micro-entreprise, EURL, SASU. La page à lire en premier.",
  },
  {
    slug: "are-ou-arce",
    court: "ARE ou ARCE",
    titre: "ARE ou ARCE : garder son chômage ou le prendre en capital ?",
    resume:
      "Maintien de l'allocation, plafond de 60 %, capital ARCE, retour au reliquat : les règles 2026 et des exemples chiffrés.",
  },
  {
    slug: "acre",
    court: "ACRE 2026",
    titre: "ACRE 2026 : nouvelles règles, demande sous 60 jours et calcul de l'exonération",
    resume:
      "Exonération ramenée à 25 %, demande obligatoire, cas de la micro-entreprise, de l'EURL et de la SASU.",
  },
  {
    slug: "remuneration-sasu-eurl",
    court: "Se rémunérer",
    titre: "Rémunération du dirigeant en SASU et en EURL : cotisations, impôt et net",
    resume:
      "Salaire du président de SASU, rémunération du gérant d'EURL, ce qui reste vraiment : exemples calculés avec le moteur de l'Urssaf.",
  },
  {
    slug: "dividendes-sasu-eurl",
    court: "Dividendes",
    titre: "Dividendes en SASU et en EURL : flat tax à 31,4 %, cotisations et calcul",
    resume:
      "Prélèvement forfaitaire de 31,4 % en 2026, option pour le barème, piège des 10 % en EURL, salaire ou dividendes chiffrés.",
  },
];

export function chapitre(slug: string): Chapitre {
  const c = CHAPITRES.find((x) => x.slug === slug);
  if (!c) throw new Error(`Chapitre inconnu : ${slug}`);
  return c;
}

export const urlChapitre = (slug: string) => `${SECTION_PATH}/${slug}`;
