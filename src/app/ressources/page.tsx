import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Ressources pour freelances & indépendants | JSA Expertise",
  description:
    "Simulateurs, guides et actualités comptables pour les freelances, consultants et SASU. Outils gratuits mis à disposition par JSA Expertise.",
  alternates: {
    canonical: "https://jsaexpertise.com/ressources",
  },
};

const TOOLS = [
  {
    href: "/ressources/simulateur-indemnites-kilometriques",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Simulateur Indemnités Kilométriques",
    description:
      "Calculez vos IK 2026 selon le barème officiel. Voiture, moto, cyclomoteur, avec majoration électrique.",
    badge: "Nouveau",
  },
  {
    href: "/simulateur-charges",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Simulateur URSSAF",
    description:
      "Estimez vos cotisations sociales en tant que dirigeant de SASU ou gérant d&apos;EURL.",
    badge: null,
  },
];

export default function PageRessources() {
  return (
    <>
      <main className="min-h-screen bg-[#F1F8EA]">
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
              Ressources pour<br />
              <span className="text-turquoise-500">freelances & indépendants</span>
            </h1>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
              Simulateurs, guides et actualités comptables mis à disposition gratuitement
              par JSA Expertise.
            </p>
          </div>
        </section>

        {/* Simulateurs */}
        <section className="pb-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Simulateurs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-turquoise-200 transition-all flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 bg-turquoise-50 rounded-xl flex items-center justify-center text-turquoise-500 flex-shrink-0 group-hover:bg-turquoise-500 group-hover:text-white transition-colors">
                      {tool.icon}
                    </div>
                    {tool.badge && (
                      <span className="text-xs font-bold bg-[#F1F8EA] text-turquoise-700 px-2.5 py-1 rounded-full border border-turquoise-200">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1 group-hover:text-turquoise-700 transition-colors">
                      {tool.title}
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: tool.description }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-turquoise-500 mt-auto">
                    Accéder
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Actualités
            </h2>
            <Link
              href="/blog"
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-turquoise-200 transition-all flex items-center gap-5"
            >
              <div className="w-12 h-12 bg-turquoise-50 rounded-xl flex items-center justify-center text-turquoise-500 flex-shrink-0 group-hover:bg-turquoise-500 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-gray-900 mb-1 group-hover:text-turquoise-700 transition-colors">
                  Blog · Actualités comptables
                </h3>
                <p className="text-sm text-gray-500">
                  Conseils fiscalité, comptabilité et gestion pour les freelances et indépendants.
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-turquoise-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-turquoise-500 p-8 md:p-10 text-center">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Un outil ne remplace pas un conseil personnalisé
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto">
                JSA Expertise accompagne les freelances, consultants et indépendants en SASU
                pour optimiser leur situation fiscale.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                Prendre rendez-vous gratuitement
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
