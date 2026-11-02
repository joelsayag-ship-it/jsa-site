// Événements envoyés à Google Analytics (G-SPXNG4LWZC).
//
// Règle de mesure (audit GA4 du 02/11/2026) :
// - `generate_lead` = une demande réellement reçue (l'API a répondu OK). C'est le seul
//   événement à marquer comme événement clé dans GA4 et à importer comme conversion
//   principale dans Google Ads.
// - `click_tel` / `click_email` = clic sur le numéro ou l'adresse e-mail (événements clés secondaires).
// - `cta_click`, `simulateur_calcul` = micro-conversions, jamais des événements clés.
//
// Ne pas renvoyer `form_submit` à la main : la mesure améliorée de GA4 l'envoie déjà
// à chaque soumission, même ratée, et ce n'est pas un lead.

type Gtag = (...args: unknown[]) => void;

export function suivre(evenement: string, parametres: Record<string, string | number | boolean | undefined> = {}) {
  (window as Window & { gtag?: Gtag }).gtag?.("event", evenement, parametres);
}

/** À appeler uniquement quand l'API de contact a confirmé la réception de la demande. */
export function suivreLead(formulaire: string, detail?: string) {
  suivre("generate_lead", { form_name: formulaire, form_detail: detail || undefined });
}
