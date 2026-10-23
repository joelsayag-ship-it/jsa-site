import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import SimulateurIK from "./SimulateurIK";
import { VOITURE, MOTO, CYCLO, montantIK } from "@/lib/bareme-ik";
import type { Tranche } from "@/lib/bareme-ik";

export const metadata: Metadata = {
  title: "Simulateur d'indemnités kilométriques 2026 | JSA Expertise",
  description:
    "Calculez vos indemnités kilométriques 2026 selon le barème officiel de l'administration fiscale. Voiture, moto, cyclomoteur, électrique. Outil gratuit par JSA Expertise, expert-comptable des freelances.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/ressources/simulateur-indemnites-kilometriques",
  },
  openGraph: {
    title: "Simulateur d'indemnités kilométriques 2026 | JSA Expertise",
    description:
      "Calculez vos indemnités kilométriques 2026 selon le barème officiel. Voiture, moto, cyclomoteur, électrique. Outil gratuit.",
    url: "https://www.jsaexpertise.com/ressources/simulateur-indemnites-kilometriques",
    siteName: "JSA Expertise",
    locale: "fr_FR",
    type: "website",
  },
};

const euros = (n: number) =>
  `${Math.round(n).toLocaleString("fr-FR")} €`;

/** Exemples calculés à partir du barème réellement utilisé par le simulateur. */
const voiture = (cv: string) => VOITURE.find((b) => b.cv === cv)!.tranches;
const EXEMPLES = [
  {
    titre: "Voiture 4 CV, 8 000 km dans l'année",
    calcul: "(8 000 × 0,340) + 1 330 €",
    montant: montantIK(voiture("4 CV"), 8000),
  },
  {
    titre: "Voiture 5 CV, 3 000 km dans l'année",
    calcul: "3 000 × 0,636",
    montant: montantIK(voiture("5 CV"), 3000),
  },
  {
    titre: "Voiture électrique 6 CV, 12 000 km dans l'année",
    calcul: "[(12 000 × 0,374) + 1 457 €] × 1,20",
    montant: montantIK(voiture("6 CV"), 12000) * 1.2,
  },
];

const FAQS = [
  {
    q: "Comment calculer ses indemnités kilométriques ?",
    a: "On applique le barème fiscal correspondant à la puissance administrative du véhicule (en chevaux fiscaux, indiquée sur la carte grise) et à la distance parcourue à titre professionnel dans l'année. Chaque tranche de distance a sa propre formule. Le simulateur ci-dessus fait le calcul automatiquement.",
  },
  {
    q: "Le barème est-il différent pour une voiture électrique ?",
    a: "Le barème est le même, mais le montant obtenu est majoré de 20 % pour les véhicules 100 % électriques.",
  },
  {
    q: "Que faire si ma voiture fait plus de 7 CV ?",
    a: "Le barème des voitures est plafonné : au-delà de 7 CV, on applique la ligne « 7 CV et plus ».",
  },
  {
    q: "Les péages et le stationnement sont-ils compris dans le barème ?",
    a: "Non. Le barème couvre la dépréciation du véhicule, l'entretien, les pneumatiques, le carburant et l'assurance. Les péages, les frais de stationnement et les intérêts d'emprunt liés à l'achat du véhicule s'ajoutent, sur justificatifs.",
  },
  {
    q: "Un dirigeant de SASU ou d'EURL peut-il percevoir des indemnités kilométriques ?",
    a: "Oui, s'il utilise son véhicule personnel pour des déplacements professionnels. La société lui rembourse les trajets sur la base du barème, avec un relevé précis (date, trajet, motif, distance). Le remboursement est une charge déductible pour la société. Un expert-comptable vérifie que la méthode est cohérente avec votre situation.",
  },
];

function BaremeTable({ titre, lignes }: { titre: string; lignes: { label: string; tranches: Tranche[] }[] }) {
  const headers = lignes[0].tranches.map((t) => t.rangeLabel);
  return (
    <div className="mb-8">
      <h3 className="font-extrabold text-gray-900 mb-3">{titre}</h3>
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#F1F8EA] text-gray-900">
            <tr>
              <th className="px-4 py-3 font-bold">Puissance</th>
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 font-bold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lignes.map((l) => (
              <tr key={l.label} className="border-t border-gray-100">
                <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{l.label}</td>
                {l.tranches.map((t) => (
                  <td key={t.rangeLabel} className="px-4 py-3 text-gray-700 whitespace-nowrap">{t.formulaLabel}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PageSimulateurIK() {
  return (
    <>
      <main className="min-h-screen bg-[#F1F8EA]">
        {/* Hero */}
        <section className="pt-32 pb-10 md:pt-40 md:pb-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/ressources"
              className="inline-flex items-center gap-1.5 text-sm text-turquoise-700 hover:text-turquoise-500 font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux ressources
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0081A5] leading-[1.1] tracking-tight mb-4">
              Simulateur d&apos;indemnités<br />kilométriques 2026
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
              Estimez le montant de vos indemnités kilométriques selon le barème officiel
              de l&apos;administration fiscale : voiture, moto, cyclomoteur et véhicule électrique.
            </p>
            <p className="text-xs text-gray-500">
              Source :{" "}
              <a
                href="https://www.service-public.gouv.fr/particuliers/actualites/A14686"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-turquoise-700 transition-colors"
              >
                service-public.gouv.fr
              </a>{" "}
              · Barème inchangé depuis 2023
            </p>
          </div>
        </section>

        {/* Simulateur + blocs */}
        <section className="pb-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <SimulateurIK />
          </div>
        </section>

        {/* Barème complet */}
        <section className="pb-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              Barème kilométrique 2026 : le tableau complet
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              « d » représente la distance parcourue à titre professionnel dans l&apos;année.
              Pour un véhicule 100 % électrique, le montant obtenu est majoré de 20 %.
            </p>
            <BaremeTable titre="Voitures" lignes={VOITURE.map((b) => ({ label: b.cv, tranches: b.tranches }))} />
            <BaremeTable titre="Motos (plus de 50 cm³)" lignes={MOTO.map((b) => ({ label: b.cv, tranches: b.tranches }))} />
            <BaremeTable titre="Cyclomoteurs (50 cm³ et moins)" lignes={[{ label: "Tous", tranches: CYCLO }]} />
          </div>
        </section>

        {/* Exemples */}
        <section className="pb-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Exemples de calcul</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {EXEMPLES.map((e) => (
                <div key={e.titre} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                  <p className="font-bold text-gray-900 text-sm mb-2">{e.titre}</p>
                  <p className="text-xs text-gray-500 mb-3">{e.calcul}</p>
                  <p className="text-2xl font-extrabold text-[#0081A5]">{euros(e.montant)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Freelances & dirigeants */}
        <section className="pb-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-turquoise-500 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              Freelance ou dirigeant de société : bien utiliser les indemnités kilométriques
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>En SASU ou en EURL</strong>, si vous utilisez votre véhicule personnel pour vos rendez-vous clients,
                votre société peut vous rembourser vos trajets sur la base du barème. C&apos;est une charge déductible pour
                la société, à condition de tenir un relevé précis de chaque déplacement.
              </p>
              <p>
                <strong>En profession libérale (BNC)</strong>, le barème peut être utilisé pour un véhicule non inscrit à l&apos;actif,
                à la place des frais réels de carburant et d&apos;entretien.
              </p>
              <p>
                Le bon choix dépend de votre statut, de votre kilométrage et de la propriété du véhicule. C&apos;est
                typiquement le genre de sujet que nous calibrons avec nos clients, comme{" "}
                <Link href="/expert-comptable-freelance" className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500">
                  expert-comptable des freelances
                </Link>
                .
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-2 bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Faire le point sur mes frais (RDV gratuit)
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <section className="pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Questions fréquentes sur les indemnités kilométriques</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link href="/simulateur-charges" className="bg-white border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 font-semibold text-gray-700">Simulateur de charges SASU / EURL</Link>
              <Link href="/simulateur-impot-revenu" className="bg-white border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 font-semibold text-gray-700">Simulateur d&apos;impôt sur le revenu</Link>
              <Link href="/blog/charges-deductibles-societe-freelance" className="bg-white border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 font-semibold text-gray-700">Charges déductibles en société</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
