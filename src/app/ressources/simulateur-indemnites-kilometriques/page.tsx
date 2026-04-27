import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import SimulateurIK from "./SimulateurIK";

export const metadata: Metadata = {
  title: "Simulateur d'indemnités kilométriques 2026 | JSA Expertise",
  description:
    "Calculez vos indemnités kilométriques 2026 selon le barème officiel de l'administration fiscale. Voiture, moto, cyclomoteur, électrique. Outil gratuit par JSA Expertise, expert-comptable des freelances.",
  alternates: {
    canonical: "https://jsaexpertise.com/ressources/simulateur-indemnites-kilometriques",
  },
  openGraph: {
    title: "Simulateur d'indemnités kilométriques 2026 | JSA Expertise",
    description:
      "Calculez vos indemnités kilométriques 2026 selon le barème officiel. Voiture, moto, cyclomoteur, électrique. Outil gratuit.",
    url: "https://jsaexpertise.com/ressources/simulateur-indemnites-kilometriques",
    siteName: "JSA Expertise",
    locale: "fr_FR",
    type: "website",
  },
};

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
              de l&apos;administration fiscale — voiture, moto, cyclomoteur et véhicule électrique.
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
              — Barème inchangé depuis 2023
            </p>
          </div>
        </section>

        {/* Simulateur + blocs */}
        <section className="pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <SimulateurIK />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
