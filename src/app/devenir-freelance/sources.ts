/**
 * Sources officielles de la section « Devenir freelance ».
 * Toutes ouvertes et vérifiées le 4 novembre 2026. À revérifier à chaque mise à jour
 * (janvier : PASS, barème ; avril et juillet : convention d'assurance chômage).
 */
export type Source = { label: string; url: string };

export const SOURCES = {
  // France Travail / Unédic
  ftCreation: {
    label: "France Travail : je crée ou je reprends une entreprise (cumul ARE et revenus)",
    url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/a-chaque-situation-son-allocatio/quelle-est-ma-situation-professi/je-reprends-une-activite-ou-une/je-cree-je-reprends-une-entrepri.html",
  },
  ftArce: {
    label: "France Travail : l'aide à la reprise ou à la création d'entreprise (ARCE)",
    url: "https://www.francetravail.fr/candidat/je-creereprends-une-entreprise/les-aides-financieres-creation-d/aide-a-la-reprise-et-a-la-creati.html",
  },
  ftAre7: {
    label: "France Travail : l'ARE en 7 questions (montant, différés)",
    url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/lessentiel-a-savoir-sur-lallocat/ARE-7-Questions.html",
  },
  ftDemission: {
    label: "France Travail : démissionner avec un projet professionnel",
    url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/a-chaque-situation-son-allocatio/quelle-est-ma-situation-professi/je-perds-ou-je-quitte-un-emploi/je-veux-demissionner-et-jai-un-p.html",
  },
  unedicCumul: {
    label: "Unédic : cumul de l'allocation et d'une rémunération (fiche du 5 octobre 2026)",
    url: "https://www.unedic.org/la-reglementation/fiches-thematiques/cumul-allocation-salaire",
  },
  unedicCreation: {
    label: "Unédic : je veux créer mon entreprise, comment l'assurance chômage peut-elle m'aider ?",
    url: "https://www.unedic.org/l-assurance-chomage-et-vous/demandeur-d-emploi-ou-salarie/mes-droits-en-fonction-de-mon-parcours/je-veux-creer-mon-entreprise-comment-l-assurance-chomage-peut-elle-m-aider-",
  },
  unedicAre: {
    label: "Unédic : l'allocation d'aide au retour à l'emploi (fiche du 5 octobre 2026)",
    url: "https://www.unedic.org/la-reglementation/fiches-thematiques/allocation-d-aide-au-retour-a-l-emploi-are",
  },
  unedicReglement: {
    label: "Unédic : règlement général d'assurance chômage, texte consolidé au 1er septembre 2026",
    url: "https://www.unedic.org/la-reglementation/conventions-d-assurance-chomage/texte-consolide-du-reglement-general-annexe-a-la-convention-du-15-novembre-2024-4",
  },
  unedicSeptembre2026: {
    label: "Unédic : assurance chômage, ce qui change le 1er septembre 2026",
    url: "https://www.unedic.org/actualites/assurance-chomage-ce-qui-change-le-1er-septembre-2026",
  },
  unedicRevalo: {
    label: "Unédic : pas de revalorisation des allocations au 1er juillet 2026",
    url: "https://www.unedic.org/actualites/allocations-dassurance-chomage-pas-de-revalorisation-au-1er-juillet-2026",
  },
  unedicDemission: {
    label: "Unédic : démission pour poursuivre un projet professionnel",
    url: "https://www.unedic.org/la-reglementation/fiches-thematiques/demission-pour-poursuivre-un-projet-professionnel",
  },
  unedicDiffere: {
    label: "Unédic : différé d'indemnisation en cas d'indemnités supra-légales",
    url: "https://www.unedic.org/la-reglementation/fiches-thematiques/differe-dindemnisation-specifique-en-cas-dindemnites-supra-legales",
  },
  unedicAffiliation: {
    label: "Unédic : affiliation au régime d'assurance chômage (dirigeants)",
    url: "https://www.unedic.org/la-reglementation/fiches-thematiques/affiliation-au-regime-dassurance-chomage",
  },
  // Service-public
  spCumul: {
    label: "Service-public : cumul de l'ARE avec une activité non salariée (F36613)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36613",
  },
  spArce: {
    label: "Service-public : ARCE (F15252)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F15252",
  },
  spAcre: {
    label: "Service-public : Acre (F11677, vérifiée le 1er juillet 2026)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F11677",
  },
  spAcreActu: {
    label: "Service-public : Acre, ce qui change en 2026 (actualité du 11 février 2026)",
    url: "https://entreprendre.service-public.gouv.fr/actualites/A18795",
  },
  spPass: {
    label: "Service-public : plafond de la Sécurité sociale 2026 et 2027",
    url: "https://entreprendre.service-public.gouv.fr/actualites/A15386",
  },
  spPfu: {
    label: "Service-public : la flat tax passe à 31,4 % en 2026",
    url: "https://entreprendre.service-public.gouv.fr/actualites/A18796",
  },
  spPrelevementsSociaux: {
    label: "Service-public : prélèvements sociaux sur les revenus du patrimoine (F2329)",
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2329",
  },
  spDividendesAssocies: {
    label: "Service-public : fiscalité des dividendes perçus par les associés (F32963)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F32963",
  },
  spOptionBareme: {
    label: "Service-public : imposition des revenus de capitaux mobiliers (F34913)",
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34913",
  },
  spDirigeant: {
    label: "Service-public : rémunération et dividendes du dirigeant (F36065)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36065",
  },
  spSasu: {
    label: "Service-public : SASU, imposition et rémunération (F36215)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36215",
  },
  spAssimileSalarie: {
    label: "Service-public : protection sociale du dirigeant assimilé salarié (F36240)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36240",
  },
  spEurl: {
    label: "Service-public : EURL, imposition et option pour l'IS (F36212)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36212",
  },
  spCotisationsTns: {
    label: "Service-public : cotisations sociales du travailleur indépendant (F38152)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F38152",
  },
  spReformeAssiette: {
    label: "Service-public : réforme de l'assiette sociale des indépendants (actualité du 20 avril 2026)",
    url: "https://entreprendre.service-public.gouv.fr/actualites/A18879",
  },
  spIs: {
    label: "Service-public : impôt sur les sociétés, taux réduit de 15 % (F23575)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23575",
  },
  // Impôts et textes
  impotsRcm: {
    label: "impots.gouv.fr : les revenus mobiliers (PFU, prélèvements sociaux, option)",
    url: "https://www.impots.gouv.fr/particulier/les-revenus-mobiliers",
  },
  impotsGerant: {
    label: "impots.gouv.fr : gérant de société et frais réels (article 62 du CGI)",
    url: "https://www.impots.gouv.fr/particulier/questions/je-suis-gerant-dune-societe-puis-je-beneficier-des-frais-reels",
  },
  impotsIs: {
    label: "impots.gouv.fr : taux réduit d'impôt sur les sociétés (actualité du 14 avril 2026)",
    url: "https://www.impots.gouv.fr/actualite/taux-reduit-dimpot-sur-les-societes-le-critere-du-chiffre-daffaires-revu-pour-les",
  },
  cssL1316_4: {
    label: "Code de la sécurité sociale, article L131-6-4 (Acre), en vigueur au 1er janvier 2026",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053282569",
  },
  cssD1316_1: {
    label: "Code de la sécurité sociale, article D131-6-1 (calcul de l'Acre)",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053451315",
  },
  cssL136_3: {
    label: "Code de la sécurité sociale, article L136-3 (assiette des indépendants, dividendes au-delà de 10 %)",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051284498",
  },
  codeCommerceDistribution: {
    label: "Code de commerce, articles L232-10 à L232-13 (réserve légale et distribution)",
    url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000005634379/LEGISCTA000006161291/",
  },
  urssafModeles: {
    label: "Modèles de calcul de l'Urssaf (mon-entreprise.urssaf.fr, règles au 1er juillet 2026)",
    url: "https://github.com/betagouv/mon-entreprise",
  },
} satisfies Record<string, Source>;

export type CleSource = keyof typeof SOURCES;
