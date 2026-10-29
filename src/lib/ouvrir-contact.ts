// Ouvre le panneau « Rendez-vous offert » (ContactFlottant, présent sur toutes les pages)
// depuis n'importe quel bouton, sans quitter la page.
// La source est reprise dans le mail reçu (bloc « Origine de la demande »).

export type OuvertureContact = {
  /** Où le visiteur a cliqué, ex. « Simulateur d'impôt 2027 (encart freelance) » */
  source: string;
  /** Message prérempli, modifiable par le visiteur */
  message?: string;
};

export const EVENEMENT_OUVRIR_CONTACT = "jsa:ouvrir-contact";

export function ouvrirContact(ouverture: OuvertureContact) {
  window.dispatchEvent(new CustomEvent<OuvertureContact>(EVENEMENT_OUVRIR_CONTACT, { detail: ouverture }));
  (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "cta_click", {
    event_category: "contact",
    event_label: ouverture.source,
  });
}
