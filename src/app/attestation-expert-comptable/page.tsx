import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AttestationForm from "./AttestationForm";
import { ATTESTATIONS, DELAI, EXPRESS, EXPRESS_CONDITIONS, PRIX_APPEL, prix } from "./attestations-data";
import { Badge, BASE_PATH, CheckItem, CtaButton, Etapes, Faq, JsonLd, LiensGrid, SITE_URL } from "./ui";

const PAGE_URL = `${SITE_URL}${BASE_PATH}`;

export const metadata: Metadata = {
  title: "Obtenez votre attestation d'expert-comptable dès 150 € HT",
  description:
    "Attestation comptable signée par un expert-comptable inscrit à l'Ordre : banque, bailleur, France Travail. Dès 150 € HT, en 24-48 h ou le jour même.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Obtenez votre attestation d'expert-comptable dès 150 € HT",
    description: "Attestation comptable signée par un expert-comptable inscrit à l'Ordre : banque, bailleur, France Travail. Dès 150 € HT, en 24-48 h ou le jour même.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const FAQS = [
  {
    q: "Combien coûte une attestation d'expert-comptable ?",
    a: `Une attestation simple, sur un exercice et à partir de pièces complètes, démarre à ${PRIX_APPEL}. Le prix augmente avec le nombre de périodes, le volume de pièces à vérifier ou un formulaire spécifique à remplir : un dossier Bpifrance, comme un état récapitulatif des dépenses, démarre à 400 € HT. Le prix exact vous est communiqué avant toute intervention.`,
  },
  {
    q: "Quel est le délai pour obtenir l'attestation ?",
    a: `L'attestation est signée sous ${DELAI} après réception des pièces complètes. Si votre échéance est plus courte, indiquez-la dans le formulaire : nous vous disons tout de suite si c'est possible.`,
  },
  {
    q: "Puis-je obtenir une attestation d'expert-comptable en urgence, dans la journée ?",
    a: `Oui, avec le service express : l'attestation est signée ${EXPRESS}, ${EXPRESS_CONDITIONS}. Choisissez « Express » dans le formulaire ou appelez directement le 06 60 73 55 46.`,
  },
  {
    q: "Faut-il être client du cabinet pour obtenir une attestation ?",
    a: "Non. Nous établissons des attestations ponctuelles pour des entrepreneurs qui ne sont pas clients à l'année. Une lettre de mission simple encadre la prestation et nous vérifions votre identité, comme l'exige la réglementation de la profession.",
  },
  {
    q: "Qu'est-ce qu'une attestation comptable ?",
    a: "C'est un document qui confirme une information financière précise (revenus, chiffre d'affaires, capitaux propres, dépenses) après vérification des pièces justificatives. Pour qu'elle soit acceptée par une banque, un bailleur ou un organisme, elle doit être signée par un expert-comptable inscrit à l'Ordre, qui engage sa responsabilité professionnelle.",
  },
  {
    q: "Quelle différence entre une attestation et une certification des comptes ?",
    a: "La certification des comptes est un audit réalisé par un commissaire aux comptes. L'attestation de l'expert-comptable est un constat : il vérifie des informations précises à partir de pièces justificatives et atteste ce que ces pièces permettent d'établir. Pour une banque, un bailleur ou un organisme, c'est le plus souvent ce qui est demandé.",
  },
  {
    q: "La banque m'a donné son propre formulaire, pouvez-vous le remplir ?",
    a: "Oui, à condition qu'il ne porte que sur des informations vérifiables. Joignez-le à votre demande : nous le complétons et le signons, ou nous établissons une attestation sur papier à en-tête qui reprend les mêmes informations.",
  },
  {
    q: "Pouvez-vous attester n'importe quel montant ?",
    a: "Non. L'expert-comptable n'atteste que ce qu'il a pu vérifier, et il engage sa responsabilité professionnelle en signant. Si les pièces ne permettent pas d'établir un montant, nous vous le disons et nous cherchons avec vous ce qui peut être attesté.",
  },
];

export default function AttestationExpertComptablePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Attestation d'expert-comptable en ligne",
          serviceType: "Attestation d'expert-comptable",
          url: PAGE_URL,
          areaServed: { "@type": "Country", name: "France" },
          provider: {
            "@type": "AccountingService",
            name: "JSA Expertise",
            url: SITE_URL,
            telephone: "+33660735546",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10 rue du Président Kennedy",
              postalCode: "94220",
              addressLocality: "Charenton-le-Pont",
              addressCountry: "FR",
            },
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: 150,
              priceCurrency: "EUR",
              valueAddedTaxIncluded: false,
            },
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Attestations d'expert-comptable",
            itemListElement: ATTESTATIONS.map((a) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: a.label, url: `${PAGE_URL}/${a.slug}` },
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
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
            { "@type": "ListItem", position: 2, name: "Attestation d'expert-comptable", item: PAGE_URL },
          ],
        }}
      />

      <Header />
      <main className="pt-16">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>100 % en ligne, partout en France</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Attestation d&apos;expert-comptable en ligne,{" "}
                <span className="text-turquoise-500">à partir de {PRIX_APPEL}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Votre banque, votre bailleur, France Travail ou Bpifrance vous demande une attestation comptable
                signée par un expert-comptable ? Envoyez votre demande, recevez la liste des pièces sous 24 h et votre
                attestation sous {DELAI}.
              </p>
              <CtaButton />
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-gray-500">
                {[`Dès ${PRIX_APPEL}`, `Sous ${DELAI}`, `Express ${EXPRESS}`, "Prix confirmé avant intervention"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-turquoise-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable inscrit à l'Ordre, qui signe les attestations"
                  width={340}
                  height={410}
                  className="relative rounded-3xl object-cover shadow-xl"
                  priority
                />
                {/* badge flottant Ordre, identique à l'accueil */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/logo ordre carré.png"
                      alt="Ordre des Experts-Comptables"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">Inscrit à l&apos;Ordre</p>
                    <p className="text-xs text-gray-400 mt-0.5">Experts-Comptables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TYPES D'ATTESTATIONS ─────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>Nos attestations</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Quelle attestation vous faut-il ?
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Chaque attestation est établie sur pièces et adaptée à ce que demande le destinataire.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ATTESTATIONS.map((a) => (
                <Link
                  key={a.slug}
                  href={`${BASE_PATH}/${a.slug}`}
                  className="group bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-2xl p-6 transition-all flex flex-col"
                >
                  <h3 className="font-extrabold text-gray-900 text-lg mb-2 group-hover:text-turquoise-600">{a.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{a.resume}</p>
                  <p className="text-sm font-semibold text-turquoise-600 mt-4">
                    Dès {prix(a.prixMin)} · En savoir plus →
                  </p>
                </Link>
              ))}
              <a
                href="#demande"
                className="bg-white border-2 border-dashed border-turquoise-200 hover:border-turquoise-400 rounded-2xl p-6 transition-all flex flex-col"
              >
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">Autre attestation</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Assurance, franchiseur, organisme, formulaire spécifique : décrivez la demande, nous vous
                  disons ce qui peut être attesté.
                </p>
                <p className="text-sm font-semibold text-turquoise-600 mt-4">Dès {PRIX_APPEL} · Décrire mon besoin →</p>
              </a>
            </div>
          </div>
        </section>

        {/* ── PRIX ─────────────────────────────────────────── */}
        <section className="bg-white pb-16 md:pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-[#F1F8EA] rounded-3xl p-6 md:p-10 border border-turquoise-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Combien coûte votre attestation ?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le prix dépend du travail de vérification, pas d&apos;un barème unique. Vous le connaissez avant toute
              intervention.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
                <caption className="sr-only">Prix de départ par type d&apos;attestation</caption>
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="px-4 py-3 font-semibold">Attestation</th>
                    <th className="px-4 py-3 font-semibold text-right">À partir de</th>
                  </tr>
                </thead>
                <tbody>
                  {ATTESTATIONS.map((a) => (
                    <tr key={a.slug} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-gray-800">{a.label}</td>
                      <td className="px-4 py-3 text-right font-bold text-gray-900 whitespace-nowrap">{prix(a.prixMin)}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3 text-gray-800">Autre attestation</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900 whitespace-nowrap">{PRIX_APPEL}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <h3 className="font-extrabold text-gray-900 mb-3">Ce qui fait varier le prix</h3>
                <ul className="space-y-3">
                  <CheckItem>Le nombre d&apos;exercices ou de périodes à attester</CheckItem>
                  <CheckItem>Une comptabilité déjà tenue, ou des pièces à reprendre une par une</CheckItem>
                  <CheckItem>Un formulaire spécifique de la banque ou de l&apos;organisme à compléter</CheckItem>
                  <CheckItem>Le service express, pour une attestation {EXPRESS}</CheckItem>
                </ul>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  Repère : une attestation simple sur un exercice démarre à {PRIX_APPEL} ; une autre attestation
                  (assurance, franchiseur, organisme) également, sur devis selon le travail de vérification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE EXPRESS ──────────────────────────────── */}
        <section className="bg-white pb-16 md:pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl p-6 md:p-10 bg-gray-900 text-white">
            <p className="text-xs font-bold uppercase tracking-wide text-turquoise-300 mb-2">Service express</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Besoin de votre attestation aujourd&apos;hui ?
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Votre banque attend le document demain matin, le dossier France Travail ou le bail se signe dans
              la journée ? Pour une attestation d&apos;expert-comptable urgente, le service express vous permet
              de la recevoir {EXPRESS}, signée, au lieu de {DELAI}.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Conditions : {EXPRESS_CONDITIONS}. Si les pièces ne permettent pas de tenir ce délai, je vous le
              dis tout de suite, avant de facturer quoi que ce soit.
            </p>
            <a
              href="#demande"
              className="inline-block bg-turquoise-500 hover:bg-turquoise-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Demander une attestation express
            </a>
          </div>
        </section>

        {/* ── COMMENT ÇA MARCHE ────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>Comment ça marche</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Votre attestation en 4 étapes, sans vous déplacer
              </h2>
            </div>
            <Etapes />
            <div className="text-center mt-10">
              <CtaButton />
            </div>
          </div>
        </section>

        {/* ── CE QU'EST UNE ATTESTATION ────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>Le cadre</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Qu&apos;est-ce qu&apos;une attestation d&apos;expert-comptable ?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                C&apos;est un document signé par un expert-comptable inscrit à l&apos;Ordre, qui confirme une
                information précise (des revenus, un chiffre d&apos;affaires, des capitaux propres, des dépenses)
                après l&apos;avoir vérifiée sur des pièces justificatives. L&apos;expert-comptable engage sa
                responsabilité professionnelle : c&apos;est ce qui donne sa valeur au document pour la banque ou
                l&apos;organisme qui le reçoit.
              </p>
              <p>
                Ce n&apos;est pas une certification des comptes, qui relève d&apos;un commissaire aux comptes.
                Ce n&apos;est pas non plus une simple déclaration : rien n&apos;est attesté sans avoir été
                vérifié.
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
              Attestation comptable ou attestation d&apos;expert-comptable : quelle différence ?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Aucune, dans la pratique. Quand une banque ou un bailleur vous réclame une « attestation
              comptable », il attend un document signé par un expert-comptable inscrit à l&apos;Ordre. Une
              attestation établie par un comptable salarié, un logiciel ou par vous-même n&apos;a pas la même
              valeur : seul l&apos;expert-comptable engage sa responsabilité professionnelle sur ce qu&apos;il atteste.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#F1F8EA] rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-4">Ce que nous attestons</h3>
                <ul className="space-y-3">
                  <CheckItem>Des montants issus de comptes annuels ou d&apos;une comptabilité tenue</CheckItem>
                  <CheckItem>Des revenus, rémunérations ou dividendes justifiés par des pièces</CheckItem>
                  <CheckItem>Des dépenses rapprochées des factures et des paiements</CheckItem>
                  <CheckItem>L&apos;absence de rémunération sur une période vérifiable</CheckItem>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-4">Ce que nous n&apos;attestons pas</h3>
                <ul className="space-y-3 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                  <li>Un montant que les pièces ne permettent pas d&apos;établir</li>
                  <li>Des prévisions présentées comme des résultats réels</li>
                  <li>La régularité de vos comptes dans leur ensemble (c&apos;est un audit)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── POURQUOI JSA ─────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>Pourquoi JSA Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Un expert-comptable joignable, un prix annoncé à l&apos;avance
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  t: "Signée par un expert-comptable",
                  d: "Joël Sayag, inscrit à l'Ordre des experts-comptables de Paris Île-de-France, examine vos pièces et signe lui-même l'attestation.",
                },
                {
                  t: "Rapide et 100 % en ligne",
                  d: `Réponse sous 24 h, attestation sous ${DELAI} après réception des pièces. Aucun déplacement, où que vous soyez en France.`,
                },
                {
                  t: "Prix clair",
                  d: `À partir de ${PRIX_APPEL} pour une attestation simple. Le prix exact vous est donné avant toute intervention : pas de surprise sur la facture.`,
                },
              ].map((c) => (
                <div key={c.t} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-lg">{c.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUSINESS PLAN ────────────────────────────────── */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-[#F1F8EA] rounded-3xl p-8 md:p-10 text-center border border-turquoise-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Besoin aussi d&apos;un business plan ou d&apos;un prévisionnel ?
            </h2>
            <p className="text-gray-600 mb-6">
              Pour une banque ou Bpifrance, nous préparons le prévisionnel financier sur trois ans : compte de
              résultat, plan de financement, trésorerie. Précisez-le dans votre demande.
            </p>
            <CtaButton>Demander un devis</CtaButton>
          </div>
        </section>

        <Faq faqs={FAQS} titre="Attestation d'expert-comptable : vos questions" />

        <AttestationForm />

        <LiensGrid
          titre="Pour aller plus loin"
          liens={[
            { label: "À quoi sert une attestation ?", href: "/blog/attestation-expert-comptable-a-quoi-ca-sert" },
            { label: "Expert-comptable freelance", href: "/expert-comptable-freelance" },
            { label: "Combien coûte un expert-comptable", href: "/blog/combien-coute-expert-comptable-freelance" },
            { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
