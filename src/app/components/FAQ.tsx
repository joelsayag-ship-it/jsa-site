"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Dois-je obligatoirement avoir un expert-comptable en tant que freelance ?",
    a: "Non, ce n'est pas obligatoire légalement. Cependant, faire appel à un expert-comptable vous permet d'optimiser votre fiscalité, d'éviter les erreurs coûteuses et de vous concentrer sur votre activité. En micro-entreprise comme en SASU, un accompagnement comptable est fortement conseillé.",
  },
  {
    q: "Quelle est la différence entre micro-entreprise, EURL et SASU ?",
    a: "La micro-entreprise est le régime le plus simple, avec un plafond de CA et des charges calculées sur le chiffre d'affaires. L'EURL est une SARL à associé unique avec une comptabilité complète obligatoire. La SASU est une SAS à associé unique, très appréciée des freelances pour sa souplesse et sa protection sociale de dirigeant assimilé salarié.",
  },
  {
    q: "Comment fonctionne la plateforme Tiime ?",
    a: "Tiime est un logiciel de comptabilité 100% cloud que nous utilisons pour tous nos clients. Il centralise vos factures, notes de frais et relevés bancaires en temps réel. Vous avez accès à un tableau de bord clair à tout moment, et nous gérons la comptabilité dans les coulisses.",
  },
  {
    q: "Quels sont vos délais de réponse ?",
    a: "Nous garantissons une réponse sous 24h ouvrées à toutes vos questions. Pour les urgences (contrôle fiscal, décision importante), nous nous engageons à vous recontacter dans la journée. Notre mission est de vous éviter l'attente qui frustre souvent avec les cabinets traditionnels.",
  },
  {
    q: "Pouvez-vous m'aider à créer mon entreprise ?",
    a: "Absolument. Nous vous accompagnons de A à Z : choix du statut juridique adapté à votre situation, rédaction des statuts, immatriculation, ouverture de compte professionnel conseillé, et mise en place des outils dès le premier jour.",
  },
  {
    q: "Je suis déjà en activité, puis-je changer d'expert-comptable facilement ?",
    a: "Oui, la procédure est simple et nous la gérons pour vous. Nous prenons contact avec votre ancien expert-comptable pour récupérer tous les documents nécessaires. La transition est transparente et vous n'avez aucune démarche administrative à faire.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-sm md:text-base">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full bg-turquoise-500 text-white flex items-center justify-center text-lg font-bold transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-60" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
