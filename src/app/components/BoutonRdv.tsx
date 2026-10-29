"use client";

import { ouvrirContact } from "@/lib/ouvrir-contact";

/** Bouton qui ouvre le formulaire « Rendez-vous offert » sur place (utilisable dans une page serveur). */
export default function BoutonRdv({
  source,
  message,
  className,
  children,
}: {
  source: string;
  message?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => ouvrirContact({ source, message })} className={className}>
      {children}
    </button>
  );
}
