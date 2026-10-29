"use client";

import { allerAuFormulaire } from "@/lib/ouvrir-contact";

/** Bouton qui fait défiler jusqu'au formulaire de bas de page et le préremplit (utilisable dans une page serveur). */
export default function BoutonRdv({
  source,
  message,
  cible,
  className,
  children,
}: {
  source: string;
  message?: string;
  /** id de la section ContactSection visée (par défaut « contact ») */
  cible?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => allerAuFormulaire({ cible, source, message })} className={className}>
      {children}
    </button>
  );
}
