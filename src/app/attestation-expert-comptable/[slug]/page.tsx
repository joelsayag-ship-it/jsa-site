import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AttestationForm from "../AttestationForm";
import { ATTESTATIONS, DELAI, getAttestation, prix, type Attestation } from "../attestations-data";
import { Badge, BASE_PATH, CheckItem, CtaButton, Etapes, Faq, JsonLd, LiensGrid, SITE_URL } from "../ui";

type Props = { params: Promise<{ slug: string }> };

// Seules les pages déclarées dans attestations-data.ts existent (404 sinon)
export const dynamicParams = false;

export function generateStaticParams() {
  return ATTESTATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAttestation(slug);
  if (!a) return {};
  const url = `${SITE_URL}${BASE_PATH}/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: { title: a.h1, description: a.description, url, type: "website" },
    twitter: { card: "summary_large_image" },
  };
}

const faqCommune = (a: Attestation) => [
  {
    q: "Combien coûte cette attestation et sous quel délai ?",
    a: `À partir de ${prix(a.prixMin)}, selon le nombre de périodes et de pièces à vérifier. Le prix exact vous est communiqué avant toute intervention. L'attestation est signée sous ${DELAI} après réception des pièces complètes.`,
  },
  {
    q: "Faut-il être client du cabinet ?",
    a: "Non. Nous établissons des attestations ponctuelles, encadrées par une lettre de mission simple, avec une vérification de votre identité comme l'exige la réglementation de la profession.",
  },
];

export default async function AttestationTypePage({ params }: Props) {
  const { slug } = await params;
  const a = getAttestation(slug);
  if (!a) notFound();

  const url = `${SITE_URL}${BASE_PATH}/${a.slug}`;
  const faqs = [...a.faqs, ...faqCommune(a)];
  const autres = ATTESTATIONS.filter((x) => x.slug !== a.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: a.h1,
          serviceType: a.label,
          description: a.description,
          url,
          areaServed: { "@type": "Country", name: "France" },
          provider: { "@type": "AccountingService", name: "JSA Expertise", url: SITE_URL, telephone: "+33660735546" },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: a.prixMin,
              priceCurrency: "EUR",
              valueAddedTaxIncluded: false,
            },
          },
        }}
      />
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Attestation d'expert-comptable", item: `${SITE_URL}${BASE_PATH}` },
            { "@type": "ListItem", position: 3, name: a.label, item: url },
          ],
        }}
      />

      <Header />
      <main className="pt-16">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-14 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Fil d'Ariane" className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-turquoise-600">Accueil</Link>
              <span className="mx-2">›</span>
              <Link href={BASE_PATH} className="hover:text-turquoise-600">Attestation d&apos;expert-comptable</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">{a.label}</span>
            </nav>
            <div className="mb-5">
              <Badge>Dès {prix(a.prixMin)} · Sous {DELAI}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
              {a.h1}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{a.intro}</p>
            <CtaButton />
          </div>
        </section>

        {/* ── À QUI ────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Badge>Dans quels cas</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-8">
              Dans quels cas en avez-vous besoin ?
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {a.destinataires.map((d) => (
                <div key={d.titre} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-lg">{d.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTENU + PIÈCES ─────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Ce que contient l&apos;attestation</h2>
              <ul className="space-y-3">
                {a.contenu.map((c) => (
                  <CheckItem key={c}>{c}</CheckItem>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Les pièces à fournir</h2>
              <ul className="space-y-3">
                {a.pieces.map((p) => (
                  <CheckItem key={p}>{p}</CheckItem>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-5 leading-relaxed">
                La liste exacte dépend de votre statut et de la demande : vous la recevez sous 24 h.
              </p>
            </div>
          </div>
        </section>

        {/* ── EXEMPLE ──────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto border-l-4 border-turquoise-500 pl-6">
            <p className="text-xs font-bold text-turquoise-600 uppercase tracking-wide mb-2">Cas concret</p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{a.exemple.titre}</h2>
            <p className="text-gray-600 leading-relaxed">{a.exemple.texte}</p>
          </div>
        </section>

        {/* ── ÉTAPES ───────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>100 % en ligne</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Comment obtenir votre attestation
              </h2>
            </div>
            <Etapes />
          </div>
        </section>

        <Faq faqs={faqs} titre={`${a.label} : vos questions`} />

        <AttestationForm defaultType={a.label} prixMin={a.prixMin} />

        <LiensGrid
          titre="Autres attestations"
          liens={[
            { label: "Toutes les attestations", href: BASE_PATH },
            ...autres.map((x) => ({ label: x.label, href: `${BASE_PATH}/${x.slug}` })),
            ...(a.liens ?? []),
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
