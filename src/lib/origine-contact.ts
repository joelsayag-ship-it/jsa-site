// Origine des demandes de contact : quel formulaire, sur quelle page,
// et d'où venait le visiteur quand il est arrivé sur le site.
// Ces informations sont jointes au mail reçu par Joël (API jsa-contact-api).
// Rien n'est envoyé tant que le visiteur ne soumet pas un formulaire.

const CLE = "jsa_arrivee";

type Arrivee = { page: string; provenance: string; campagne: string };

export type OrigineDemande = {
  formulaire: string;
  page: string;
  titrePage: string;
  arrivee: string;
  provenance: string;
  campagne: string;
};

const SOURCES: [RegExp, string][] = [
  [/(^|\.)google\./, "Google"],
  [/(^|\.)bing\.com$/, "Bing"],
  [/(^|\.)duckduckgo\.com$/, "DuckDuckGo"],
  [/(^|\.)qwant\.com$/, "Qwant"],
  [/(^|\.)ecosia\.org$/, "Ecosia"],
  [/(^|\.)yahoo\./, "Yahoo"],
  [/(^|\.)linkedin\.com$|^lnkd\.in$/, "LinkedIn"],
  [/(^|\.)facebook\.com$/, "Facebook"],
  [/(^|\.)instagram\.com$/, "Instagram"],
  [/(^|\.)chatgpt\.com$|(^|\.)openai\.com$/, "ChatGPT"],
  [/(^|\.)perplexity\.ai$/, "Perplexity"],
  [/(^|\.)claude\.ai$/, "Claude"],
];

function nommerSource(hote: string): string {
  // Gemini avant Google : le motif Google attraperait aussi gemini.google.com
  if (/(^|\.)gemini\.google\.com$/.test(hote)) return "Gemini";
  for (const [motif, nom] of SOURCES) if (motif.test(hote)) return nom;
  return hote;
}

/** À appeler une fois au chargement du site : mémorise la page d'arrivée et la provenance. */
export function memoriserArrivee() {
  try {
    if (sessionStorage.getItem(CLE)) return;

    const params = new URLSearchParams(window.location.search);
    let provenance = "Accès direct (lien enregistré, adresse tapée ou application)";
    if (params.get("gclid") || params.get("gbraid") || params.get("wbraid")) {
      provenance = "Google Ads (annonce payante)";
    } else if (document.referrer) {
      const hote = new URL(document.referrer).hostname.replace(/^www\./, "");
      const siteHote = window.location.hostname.replace(/^www\./, "");
      provenance = hote === siteHote ? "Navigation sur le site" : nommerSource(hote);
    }

    const campagne = ["utm_source", "utm_medium", "utm_campaign"]
      .map((k) => params.get(k))
      .filter(Boolean)
      .join(" / ");

    const arrivee: Arrivee = { page: window.location.pathname, provenance, campagne };
    sessionStorage.setItem(CLE, JSON.stringify(arrivee));
  } catch {
    // Stockage indisponible (navigation privée stricte, etc.) : on n'aura que la page du formulaire.
  }
}

/** Informations d'origine à joindre à l'envoi d'un formulaire. */
export function origineDemande(formulaire: string): OrigineDemande {
  let arrivee: Partial<Arrivee> = {};
  try {
    arrivee = JSON.parse(sessionStorage.getItem(CLE) || "{}");
  } catch {
    arrivee = {};
  }
  return {
    formulaire,
    page: window.location.pathname,
    titrePage: document.title,
    arrivee: arrivee.page || "",
    provenance: arrivee.provenance || "",
    campagne: arrivee.campagne || "",
  };
}
