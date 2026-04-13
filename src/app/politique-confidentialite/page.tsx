import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité — JSA Expertise",
  description: "Politique de confidentialité et traitement des données personnelles de JSA Expertise.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Mini header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-[#00B6DE] hover:text-[#0081A5] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <Link href="/">
            <Image
              src="/images/logo.png.png"
              alt="JSA Expertise"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-12 pb-6 border-b border-gray-100">
          Politique de Confidentialité
        </h1>

        <div className="space-y-12 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Introduction
            </h2>
            <p className="text-sm leading-7 pl-11">
              La protection de vos données est une priorité pour JSA Expertise. Cette politique vous explique comment nous traitons vos données personnelles lorsque vous utilisez notre site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              Données collectées
            </h2>
            <p className="text-sm leading-7 pl-11 mb-3">
              Nous collectons uniquement les données que vous nous transmettez directement, notamment via notre formulaire de contact :
            </p>
            <ul className="pl-11 space-y-2 text-sm">
              {["Nom et Prénom", "Adresse email", "Numéro de téléphone", "Contenu de votre message"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B6DE] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Utilisation de vos données
            </h2>
            <p className="text-sm leading-7 pl-11 mb-3">
              Vos données ne sont utilisées que pour :
            </p>
            <ul className="pl-11 space-y-2 text-sm mb-5">
              {[
                "Répondre à vos demandes de renseignements.",
                "Établir des devis.",
                "Assurer le suivi de nos échanges professionnels.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B6DE] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pl-11">
              <p className="text-sm leading-7 bg-[#00B6DE]/6 border-l-4 border-[#00B6DE] rounded-r-xl px-4 py-3">
                <span className="font-semibold text-[#1a1a2e]">Note :</span> Nous ne vendons, ne louons et ne partageons jamais vos données à des fins commerciales avec des tiers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Conservation des données
            </h2>
            <p className="text-sm leading-7 pl-11">
              Nous conservons vos données pendant la durée nécessaire au traitement de votre demande, ou pour la durée légale imposée par l&apos;Ordre des Experts-Comptables si vous devenez client du cabinet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Vos droits (RGPD)
            </h2>
            <p className="text-sm leading-7 pl-11 mb-3">
              Conformément à la réglementation européenne, vous disposez des droits suivants :
            </p>
            <ul className="pl-11 space-y-2 text-sm mb-5">
              {[
                { label: "Droit d'accès", desc: "savoir quelles données nous avons sur vous." },
                { label: "Droit de rectification", desc: "corriger une erreur." },
                { label: "Droit à l'effacement", desc: "demander la suppression de vos données." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B6DE] flex-shrink-0 mt-1.5" />
                  <span><span className="font-semibold text-[#1a1a2e]">{item.label} :</span> {item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-7 pl-11">
              Pour exercer ces droits, contactez Joël Sayag à l&apos;adresse :{" "}
              <a href="mailto:joel.sayag@jsaexpertise.com" className="text-[#00B6DE] hover:underline">
                joel.sayag@jsaexpertise.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Cookies
            </h2>
            <p className="text-sm leading-7 pl-11">
              Ce site peut utiliser des cookies pour améliorer votre navigation (mesure d&apos;audience).
            </p>
          </section>

        </div>
      </main>

      {/* Mini footer */}
      <footer className="border-t border-gray-100 px-6 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} JSA Expertise. Tous droits réservés.
      </footer>
    </div>
  );
}
