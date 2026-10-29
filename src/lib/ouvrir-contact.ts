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

// ── Formulaire en bas de page (ContactSection) ─────────────────────────────

export type PreremplissageContact = {
  /** id de la section ContactSection visée (par défaut « contact ») */
  cible?: string;
  /** Où le visiteur a cliqué, repris dans le mail */
  source: string;
  /** Message prérempli, modifiable par le visiteur */
  message?: string;
};

export const EVENEMENT_PREREMPLIR_CONTACT = "jsa:preremplir-contact";

/** Fait défiler jusqu'au formulaire de bas de page et le préremplit. */
export function allerAuFormulaire({ cible = "contact", source, message }: PreremplissageContact) {
  window.dispatchEvent(
    new CustomEvent<PreremplissageContact>(EVENEMENT_PREREMPLIR_CONTACT, { detail: { cible, source, message } })
  );
  const section = document.getElementById(cible);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // Place le curseur dans le champ Nom une fois le défilement terminé
    window.setTimeout(() => {
      section.querySelector<HTMLInputElement>('input[name="nom"]')?.focus({ preventScroll: true });
    }, 700);
  }
  (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "cta_click", {
    event_category: "contact",
    event_label: source,
  });
}
