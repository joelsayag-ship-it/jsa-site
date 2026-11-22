import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import { AVIS_CLIENTS, LIEN_AVIS_GOOGLE } from "./avis-clients";

/**
 * Gabarit commun des pages d'offre (reprise de dossier, création de société, professions de santé).
 * Les textes sont passés en données. Dans un texte, la syntaxe [libellé](/chemin) crée un lien interne.
 */

export const SITE_URL = "https://www.jsaexpertise.com";

type Carte = { titre: string; texte: string };
type Item = { fort: string; texte: string };

export type Bloc =
  | { type: "cartes"; badge: string; titre: string; intro?: string; cartes: Carte[] }
  | { type: "liste"; badge: string; titre: string; intro?: string; items: Item[] }
  | { type: "etapes"; badge: string; titre: string; intro?: string; etapes: Carte[] }
  | { type: "texte"; badge: string; titre: string; paragraphes: string[] }
  | { type: "cta"; titre: string; texte: string }
  | { type: "avis"; badge: string; titre: string; noms: string[] };

export type OffrePageProps = {
  chemin: string;
  fil: string;
  badge: string;
  h1Debut: string;
  h1Fin: string;
  intro: string[];
  lienSecondaire?: { label: string; href: string };
  service: { nom: string; public: string };
  /** Zone desservie pour les données structurées (par défaut : la France). */
  zone?: { type: "City" | "Country" | "State"; nom: string };
  blocs: Bloc[];
  faqTitre: string;
  faqs: { q: string; a: string }[];
  liens: { label: string; href: string }[];
  contact: { titre: string; formulaire: string };
};

/** Transforme « texte [libellé](/chemin) suite » en texte avec liens internes. */
function Riche({ texte }: { texte: string }) {
  const morceaux: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let dernier = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(texte)) !== null) {
    if (m.index > dernier) morceaux.push(texte.slice(dernier, m.index));
    morceaux.push(
      <Link
        key={m.index}
        href={m[2]}
        className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500"
      >
        {m[1]}
      </Link>
    );
    dernier = m.index + m[0].length;
  }
  if (dernier < texte.length) morceaux.push(texte.slice(dernier));
  return <>{morceaux}</>;
}

/** Texte brut (liens retirés), pour les données structurées. */
const brut = (texte: string) => texte.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-700 text-sm leading-relaxed">{children}</span>
    </li>
  );
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Entete({ badge, titre, intro, centre }: { badge: string; titre: string; intro?: string; centre?: boolean }) {
  return (
    <div className={centre ? "text-center flex flex-col items-center mb-10" : "mb-8"}>
      <Badge>{badge}</Badge>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">{titre}</h2>
      {intro && (
        <p className={`text-gray-600 leading-relaxed mt-4 ${centre ? "max-w-2xl" : ""}`}>
          <Riche texte={intro} />
        </p>
      )}
    </div>
  );
}

function RenduBloc({ bloc, fond }: { bloc: Bloc; fond: string }) {
  if (bloc.type === "cta") {
    return (
      <section className={`${fond} py-12 px-4 md:px-8`}>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-10 text-center border border-turquoise-100 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{bloc.titre}</h2>
          <p className="text-gray-600 mb-6">{bloc.texte}</p>
          <a
            href="#contact"
            className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
          >
            Prendre RDV gratuitement
          </a>
        </div>
      </section>
    );
  }
  const carteFond = fond === "bg-white" ? "bg-[#F1F8EA]" : "bg-white";
  if (bloc.type === "avis") {
    const avis = bloc.noms
      .map((nom) => AVIS_CLIENTS.find((a) => a.name === nom))
      .filter((a): a is (typeof AVIS_CLIENTS)[number] => Boolean(a));
    return (
      <section className={`${fond} py-16 md:py-20 px-4 md:px-8`}>
        <div className="max-w-5xl mx-auto">
          <Entete badge={bloc.badge} titre={bloc.titre} centre />
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {avis.map((a) => (
              <figure key={a.name} className={`${carteFond} rounded-2xl p-6 flex flex-col gap-3`}>
                <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg key={n} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">{a.text}</blockquote>
                <figcaption className="text-sm font-bold text-gray-900">{a.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center">
            <a
              href={LIEN_AVIS_GOOGLE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-turquoise-500 hover:underline font-semibold text-sm"
            >
              Voir tous nos avis Google →
            </a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={`${fond} py-16 md:py-20 px-4 md:px-8`}>
      {bloc.type === "cartes" && (
        <div className="max-w-5xl mx-auto">
          <Entete badge={bloc.badge} titre={bloc.titre} intro={bloc.intro} centre />
          <div className={`grid gap-5 ${bloc.cartes.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {bloc.cartes.map((c) => (
              <div key={c.titre} className={`${carteFond} rounded-2xl p-6`}>
                <h3 className="font-extrabold text-gray-900 mb-2 text-lg">{c.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <Riche texte={c.texte} />
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {bloc.type === "liste" && (
        <div className="max-w-4xl mx-auto">
          <Entete badge={bloc.badge} titre={bloc.titre} intro={bloc.intro} />
          <ul className="space-y-4">
            {bloc.items.map((i) => (
              <CheckItem key={i.fort}>
                <strong>{i.fort} :</strong> <Riche texte={i.texte} />
              </CheckItem>
            ))}
          </ul>
        </div>
      )}
      {bloc.type === "etapes" && (
        <div className="max-w-5xl mx-auto">
          <Entete badge={bloc.badge} titre={bloc.titre} intro={bloc.intro} centre />
          <ol className={`grid gap-5 sm:grid-cols-2 ${bloc.etapes.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {bloc.etapes.map((e, i) => (
              <li key={e.titre} className={`${carteFond} rounded-2xl p-6`}>
                <span className="w-9 h-9 rounded-full bg-turquoise-500 text-white font-extrabold flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <h3 className="font-extrabold text-gray-900 mb-2">{e.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <Riche texte={e.texte} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
      {bloc.type === "texte" && (
        <div className="max-w-3xl mx-auto">
          <Entete badge={bloc.badge} titre={bloc.titre} />
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {bloc.paragraphes.map((p) => (
              <p key={p.slice(0, 40)}>
                <Riche texte={p} />
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function OffrePage(props: OffrePageProps) {
  const url = `${SITE_URL}${props.chemin}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: props.service.nom,
          serviceType: "Expertise comptable",
          url,
          areaServed: { "@type": props.zone?.type ?? "Country", name: props.zone?.nom ?? "France" },
          audience: { "@type": "Audience", audienceType: props.service.public },
          provider: { "@type": "AccountingService", name: "JSA Expertise", url: SITE_URL, telephone: "+33660735546" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: props.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: brut(f.a) },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: props.fil, item: url },
          ],
        }}
      />

      <main className="pt-16">
        {/* ── HERO ── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-turquoise-600">
                  Accueil
                </Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700">{props.fil}</span>
              </nav>
              <div className="mb-5">
                <Badge>{props.badge}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                {props.h1Debut} <span className="text-turquoise-500">{props.h1Fin}</span>
              </h1>
              {props.intro.map((p, i) => (
                <p key={i} className={`text-gray-600 leading-relaxed ${i === 0 ? "text-lg" : "text-base"} ${i === props.intro.length - 1 ? "mb-8" : "mb-4"}`}>
                  <Riche texte={p} />
                </p>
              ))}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
                >
                  Prendre RDV gratuitement
                </a>
                {props.lienSecondaire && (
                  <Link
                    href={props.lienSecondaire.href}
                    className="border-2 border-turquoise-500 text-turquoise-700 hover:bg-turquoise-50 font-bold px-7 py-3 rounded-full transition-colors"
                  >
                    {props.lienSecondaire.label}
                  </Link>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-5">Premier rendez-vous gratuit · Réponse sous 24 h</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt={`Joël Sayag, expert-comptable : ${props.fil.toLowerCase()}`}
                  width={340}
                  height={410}
                  className="relative rounded-3xl object-cover shadow-xl"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-900">Joël Sayag</p>
                  <p className="text-xs text-gray-400">Expert-comptable inscrit à l&apos;Ordre</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {props.blocs.map((bloc, i) => (
          <RenduBloc key={i} bloc={bloc} fond={i % 2 === 0 ? "bg-white" : "bg-[#F1F8EA]"} />
        ))}

        {/* ── FAQ ── */}
        <section className={`${props.blocs.length % 2 === 0 ? "bg-white" : "bg-[#F1F8EA]"} py-16 md:py-20 px-4 md:px-8`}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge>Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">{props.faqTitre}</h2>
            </div>
            <div className="space-y-4">
              {props.faqs.map((f) => (
                <div
                  key={f.q}
                  className={`${props.blocs.length % 2 === 0 ? "bg-[#F1F8EA]" : "bg-white shadow-sm"} rounded-2xl p-6`}
                >
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <Riche texte={f.a} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POUR ALLER PLUS LOIN ── */}
        <section className="bg-white py-10 px-4 md:px-8 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Pour aller plus loin</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {props.liens.map((l) => (
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

        <ContactSection titre={props.contact.titre} formulaire={props.contact.formulaire} />
      </main>
      <Footer />
    </>
  );
}
