import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog — Comptabilité freelance & conseils fiscaux | JSA Expertise",
  description:
    "Conseils pratiques pour freelances et indépendants : comptabilité, fiscalité, choix du statut juridique, optimisation de rémunération. Par JSA Expertise.",
};

// Liste des articles — à enrichir au fil du temps
const ARTICLES: {
  slug: string;
  titre: string;
  description: string;
  date: string;
  categorie: string;
  temps: string;
}[] = [
  // Les articles seront ajoutés ici
];

const CATEGORIES = ["Tous", "Fiscalité", "Statuts juridiques", "Comptabilité", "Rémunération"];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

export default function Blog() {
  return (
    <>
      <main>

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Ressources freelances
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Le blog JSA Expertise
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Conseils pratiques sur la comptabilité, la fiscalité et la gestion
                pour les freelances et indépendants. Rédigé par Joël Sayag,
                expert&#8209;comptable.
              </p>
            </div>
          </div>
        </section>

        {/* ── ARTICLES ────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Filtres catégories */}
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
                    cat === "Tous"
                      ? "bg-turquoise-500 text-white border-turquoise-500"
                      : "bg-white text-gray-600 border-gray-200 hover:border-turquoise-400 hover:text-turquoise-500"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {ARTICLES.length === 0 ? (
              /* État vide — premier article à venir */
              <div className="text-center py-24 flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-[#F1F8EA] rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-turquoise-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-2">Les articles arrivent bientôt</p>
                  <p className="text-gray-500 max-w-md">
                    On prépare des guides pratiques sur la comptabilité freelance,
                    l&apos;optimisation fiscale et le choix du statut juridique.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-turquoise-500 hover:bg-turquoise-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Être notifié à la publication
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-turquoise-200 transition-all"
                  >
                    <div className="bg-[#F1F8EA] h-48 flex items-center justify-center">
                      <svg className="w-12 h-12 text-turquoise-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-turquoise-500 bg-turquoise-50 px-3 py-1 rounded-full">
                          {article.categorie}
                        </span>
                        <span className="text-xs text-gray-400">{article.temps}</span>
                      </div>
                      <h2 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-turquoise-500 transition-colors leading-snug">
                        {article.titre}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-4">{article.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Une question sur votre situation ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Pas besoin d&apos;attendre le prochain article. On répond sous 24h.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Prendre RDV gratuitement
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
