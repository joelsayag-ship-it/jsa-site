import Link from "next/link";

export const SITE_URL = "https://www.jsaexpertise.com";
export const BASE_PATH = "/attestation-expert-comptable";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-700 text-sm leading-relaxed">{children}</span>
    </li>
  );
}

export function CtaButton({ children = "Demander mon attestation" }: { children?: React.ReactNode }) {
  return (
    <a
      href="#demande"
      className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
    >
      {children}
    </a>
  );
}

export const ETAPES = [
  {
    titre: "Vous décrivez votre besoin",
    texte: "Un formulaire de deux minutes : type d'attestation, destinataire, échéance.",
  },
  {
    titre: "Je vous réponds sous 24 h",
    texte: "Avec la liste précise des pièces à fournir et le prix de l'attestation, confirmé avant toute intervention.",
  },
  {
    titre: "Vous envoyez vos pièces",
    texte: "Par e-mail ou par lien de dépôt sécurisé. Je vérifie les éléments et vous pose les questions utiles.",
  },
  {
    titre: "Vous recevez l'attestation",
    texte: "Signée, sur papier à en-tête du cabinet, en PDF, sous 48 à 72 h ouvrées après réception des pièces complètes.",
  },
];

export function Etapes() {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {ETAPES.map((e, i) => (
        <li key={e.titre} className="bg-white rounded-2xl p-6 shadow-sm">
          <span className="w-9 h-9 rounded-full bg-turquoise-500 text-white font-extrabold flex items-center justify-center mb-4">
            {i + 1}
          </span>
          <h3 className="font-extrabold text-gray-900 mb-2">{e.titre}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{e.texte}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ faqs, titre }: { faqs: { q: string; a: string }[]; titre: string }) {
  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 flex flex-col items-center">
          <Badge>Questions fréquentes</Badge>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-4">{titre}</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-[#F1F8EA] rounded-2xl p-6">
              <h3 className="font-extrabold text-gray-900 mb-2 text-base">{f.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LiensGrid({ titre, liens }: { titre: string; liens: { label: string; href: string }[] }) {
  return (
    <section className="bg-white py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">{titre}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {liens.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
