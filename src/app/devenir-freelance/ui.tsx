import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import {
  CHAPITRES,
  DATE_MAJ_ISO,
  DATE_VERIFICATION,
  SECTION_NOM,
  SECTION_PATH,
  SECTION_URL,
  SITE_URL,
  chapitre,
  urlChapitre,
} from "./chapitres";
import { SOURCES, type CleSource } from "./sources";

export type Faq = { q: string; a: string };

/* ── Utilitaires ─────────────────────────────────────────────────────────── */

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** 12345.6 → « 12 346 € » (espaces insécables fines, comme le reste du site) */
export function euros(n: number, decimales = 0): string {
  return (
    new Intl.NumberFormat("fr-FR", { minimumFractionDigits: decimales, maximumFractionDigits: decimales }).format(n) +
    " €"
  );
}

export function pourcent(n: number, decimales = 1): string {
  return new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: decimales }).format(n * 100) + " %";
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

/* ── Blocs de contenu ────────────────────────────────────────────────────── */

export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mt-14 mb-5">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mt-8 mb-3">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
}

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-5 marker:text-turquoise-500">{children}</ul>;
}

export function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed mb-5 marker:font-bold marker:text-turquoise-600">{children}</ol>;
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const externe = href.startsWith("http");
  if (externe) {
    return (
      <a href={href} target="_blank" rel="noopener" className="text-turquoise-700 font-semibold underline decoration-turquoise-300 underline-offset-2 hover:text-turquoise-600">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="text-turquoise-700 font-semibold underline decoration-turquoise-300 underline-offset-2 hover:text-turquoise-600">
      {children}
    </Link>
  );
}

const STYLES_ENCART = {
  retenir: { cadre: "bg-turquoise-50 border-turquoise-200", titre: "text-turquoise-800", defaut: "À retenir" },
  attention: { cadre: "bg-orange-50 border-orange-200", titre: "text-orange-800", defaut: "Attention" },
  nouveau: { cadre: "bg-amber-50 border-amber-200", titre: "text-amber-800", defaut: "Nouveau en 2026" },
  exemple: { cadre: "bg-white border-gray-200 shadow-sm", titre: "text-gray-900", defaut: "Exemple chiffré" },
} as const;

export function Encart({
  type = "retenir",
  titre,
  children,
}: {
  type?: keyof typeof STYLES_ENCART;
  titre?: string;
  children: React.ReactNode;
}) {
  const s = STYLES_ENCART[type];
  return (
    <aside className={`rounded-2xl border p-5 md:p-6 my-7 ${s.cadre}`}>
      <p className={`font-extrabold mb-2 ${s.titre}`}>{titre ?? s.defaut}</p>
      <div className="text-gray-700 text-[15px] leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </aside>
  );
}

/** Tableau responsive : défile horizontalement dans son cadre sur mobile, jamais la page. */
export function Tableau({
  entetes,
  lignes,
  legende,
  premiereColonneLarge = false,
}: {
  entetes: React.ReactNode[];
  lignes: React.ReactNode[][];
  legende?: React.ReactNode;
  premiereColonneLarge?: boolean;
}) {
  return (
    <figure className="my-7">
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-[#F1F8EA]">
              {entetes.map((e, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`text-left font-extrabold text-gray-900 px-4 py-3 align-bottom ${i === 0 && premiereColonneLarge ? "min-w-[180px]" : ""}`}
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i} className="border-t border-gray-100">
                {l.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="text-left font-semibold text-gray-900 px-4 py-3 align-top">
                      {c}
                    </th>
                  ) : (
                    <td key={j} className="px-4 py-3 text-gray-700 align-top">
                      {c}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {legende && <figcaption className="text-xs text-gray-500 mt-2 leading-relaxed">{legende}</figcaption>}
    </figure>
  );
}

/** Pastilles du tableau de compatibilité */
export function Pastille({ v, children }: { v: "oui" | "non" | "sous"; children?: React.ReactNode }) {
  const style =
    v === "oui"
      ? "bg-green-100 text-green-800"
      : v === "non"
        ? "bg-red-100 text-red-800"
        : "bg-amber-100 text-amber-800";
  const mot = v === "oui" ? "Oui" : v === "non" ? "Non" : "Sous conditions";
  return (
    <span className="block">
      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${style}`}>{mot}</span>
      {children && <span className="block text-xs text-gray-600 mt-1.5 leading-snug">{children}</span>}
    </span>
  );
}

export function CtaEncart({
  titre,
  texte,
  bouton = "Prendre RDV gratuitement",
}: {
  titre: string;
  texte: string;
  bouton?: string;
}) {
  return (
    <aside className="my-10 rounded-3xl bg-turquoise-500 text-white p-7 md:p-8">
      <p className="text-xl md:text-2xl font-extrabold mb-2">{titre}</p>
      <p className="text-turquoise-50 leading-relaxed mb-5">{texte}</p>
      <a
        href="#contact"
        className="inline-block bg-white text-turquoise-700 hover:bg-turquoise-50 font-bold px-6 py-3 rounded-full transition-colors"
      >
        {bouton}
      </a>
    </aside>
  );
}

/* ── Gabarit d'un chapitre ───────────────────────────────────────────────── */

export type Intertitre = { id: string; label: string };

export function GabaritChapitre({
  slug,
  chapo,
  plan,
  faqs,
  sources,
  children,
  titreContact,
}: {
  slug: string;
  chapo: React.ReactNode;
  plan: Intertitre[];
  faqs: Faq[];
  sources: CleSource[];
  children: React.ReactNode;
  titreContact: string;
}) {
  const c = chapitre(slug);
  const index = CHAPITRES.findIndex((x) => x.slug === slug);
  const precedent = index > 0 ? CHAPITRES[index - 1] : null;
  const suivant = index < CHAPITRES.length - 1 ? CHAPITRES[index + 1] : null;
  const url = `${SITE_URL}${urlChapitre(slug)}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.titre,
          description: c.resume,
          url,
          mainEntityOfPage: url,
          inLanguage: "fr-FR",
          dateModified: DATE_MAJ_ISO,
          isPartOf: { "@type": "WebPage", name: SECTION_NOM, url: SECTION_URL },
          author: {
            "@type": "Person",
            name: "Joël Sayag",
            jobTitle: "Expert-comptable inscrit à l'Ordre",
            url: `${SITE_URL}/qui-sommes-nous`,
          },
          publisher: { "@type": "AccountingService", name: "JSA Expertise", url: SITE_URL },
          citation: sources.map((k) => SOURCES[k].url),
        }}
      />
      {faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: SECTION_NOM, item: SECTION_URL },
            { "@type": "ListItem", position: 3, name: c.court, item: url },
          ],
        }}
      />

      <Header />
      <main className="pt-16">
        {/* ── EN-TÊTE ───────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] pt-12 pb-12 md:pt-16 md:pb-14 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-turquoise-600">Accueil</Link>
              <span className="mx-2">›</span>
              <Link href={SECTION_PATH} className="hover:text-turquoise-600">{SECTION_NOM}</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">{c.court}</span>
            </nav>
            <div className="mb-5">
              <Badge>
                Guide devenir freelance · Chapitre {index + 1} sur {CHAPITRES.length}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-[1.12] tracking-tight mb-5 max-w-4xl">
              {c.titre}
            </h1>
            <div className="text-lg text-gray-600 leading-relaxed max-w-3xl">{chapo}</div>
            <p className="text-sm text-gray-500 mt-6">
              Par Joël Sayag, expert-comptable inscrit à l&apos;Ordre · Règles et chiffres vérifiés le{" "}
              {DATE_VERIFICATION} sur les sources officielles (liste en bas de page)
            </p>
          </div>
        </section>

        {/* ── CORPS ─────────────────────────────────────────── */}
        <div className="bg-white px-4 md:px-8">
          <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 py-10 md:py-14">
            <article className="min-w-0 max-w-3xl">
              {plan.length > 2 && (
                <nav aria-label="Sommaire de la page" className="lg:hidden bg-[#F1F8EA] rounded-2xl p-5 mb-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Dans cette page</p>
                  <ol className="space-y-1.5 text-sm">
                    {plan.map((p) => (
                      <li key={p.id}>
                        <a href={`#${p.id}`} className="text-gray-700 hover:text-turquoise-600">
                          {p.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {children}

              {faqs.length > 0 && (
                <section aria-labelledby="faq">
                  <H2 id="faq">Questions fréquentes</H2>
                  <div className="space-y-4">
                    {faqs.map((f) => (
                      <div key={f.q} className="bg-[#F1F8EA] rounded-2xl p-5 md:p-6">
                        <h3 className="font-extrabold text-gray-900 mb-2">{f.q}</h3>
                        <p className="text-gray-700 text-[15px] leading-relaxed">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section aria-labelledby="sources" className="mt-14 border-t border-gray-100 pt-8">
                <h2 id="sources" className="text-lg font-extrabold text-gray-900 mb-3">
                  Sources officielles
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Règles vérifiées le {DATE_VERIFICATION}. Les montants (PASS, barèmes, allocations) changent chaque
                  année : cette page est mise à jour à chaque changement.
                </p>
                <ul className="space-y-2 text-sm">
                  {sources.map((k) => (
                    <li key={k}>
                      <a
                        href={SOURCES[k].url}
                        target="_blank"
                        rel="noopener"
                        className="text-turquoise-700 hover:text-turquoise-600 underline decoration-turquoise-200 underline-offset-2"
                      >
                        {SOURCES[k].label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                  Cette page donne une information générale. Votre situation (date de fin de contrat, droits restants,
                  statut, autres revenus du foyer) peut changer la réponse : faites-la vérifier avant toute décision.
                </p>
              </section>

              {/* Navigation entre chapitres */}
              <nav aria-label="Chapitres du guide" className="grid sm:grid-cols-2 gap-4 mt-12">
                {precedent ? (
                  <Link
                    href={urlChapitre(precedent.slug)}
                    className="group border border-gray-200 hover:border-turquoise-400 rounded-2xl p-5 transition-colors"
                  >
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">← Chapitre précédent</span>
                    <span className="block font-extrabold text-gray-900 group-hover:text-turquoise-600 mt-1">{precedent.court}</span>
                  </Link>
                ) : (
                  <Link
                    href={SECTION_PATH}
                    className="group border border-gray-200 hover:border-turquoise-400 rounded-2xl p-5 transition-colors"
                  >
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">← Sommaire</span>
                    <span className="block font-extrabold text-gray-900 group-hover:text-turquoise-600 mt-1">Devenir freelance : le parcours</span>
                  </Link>
                )}
                {suivant ? (
                  <Link
                    href={urlChapitre(suivant.slug)}
                    className="group border border-gray-200 hover:border-turquoise-400 rounded-2xl p-5 transition-colors sm:text-right"
                  >
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Chapitre suivant →</span>
                    <span className="block font-extrabold text-gray-900 group-hover:text-turquoise-600 mt-1">{suivant.court}</span>
                  </Link>
                ) : (
                  <Link
                    href={SECTION_PATH}
                    className="group border border-gray-200 hover:border-turquoise-400 rounded-2xl p-5 transition-colors sm:text-right"
                  >
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Retour au sommaire →</span>
                    <span className="block font-extrabold text-gray-900 group-hover:text-turquoise-600 mt-1">Devenir freelance : le parcours</span>
                  </Link>
                )}
              </nav>
            </article>

            {/* Colonne latérale (ordinateur) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {plan.length > 2 && (
                  <nav aria-label="Sommaire de la page">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Dans cette page</p>
                    <ol className="space-y-2 text-sm border-l-2 border-turquoise-100 pl-4">
                      {plan.map((p) => (
                        <li key={p.id}>
                          <a href={`#${p.id}`} className="text-gray-600 hover:text-turquoise-600 leading-snug block">
                            {p.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <nav aria-label="Chapitres du guide" className="bg-[#F1F8EA] rounded-2xl p-5">
                  <Link href={SECTION_PATH} className="text-xs font-bold text-gray-500 uppercase tracking-wide hover:text-turquoise-600">
                    Guide devenir freelance
                  </Link>
                  <ol className="mt-3 space-y-2 text-sm">
                    {CHAPITRES.map((ch, i) => (
                      <li key={ch.slug}>
                        {ch.slug === slug ? (
                          <span className="font-extrabold text-turquoise-700" aria-current="page">
                            {i + 1}. {ch.court}
                          </span>
                        ) : (
                          <Link href={urlChapitre(ch.slug)} className="text-gray-700 hover:text-turquoise-600">
                            {i + 1}. {ch.court}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="rounded-2xl border border-turquoise-200 p-5">
                  <p className="font-extrabold text-gray-900 mb-2 text-sm">Un doute sur votre cas ?</p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    On chiffre votre situation avec vos vrais montants. Premier rendez-vous gratuit.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
                  >
                    Prendre RDV
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <ContactSection titre={titreContact} formulaire={`Formulaire du guide devenir freelance (${c.court})`} />
      </main>
      <Footer />
    </>
  );
}
