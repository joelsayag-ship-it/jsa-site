import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mentions Légales — JSA Expertise",
  description: "Mentions légales du site JSA Expertise, cabinet d'expertise comptable pour freelances et agences.",
};

export default function MentionsLegales() {
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-12 pb-6 border-b border-gray-100">
          Mentions Légales
        </h1>

        <div className="space-y-12 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Présentation du site
            </h2>
            <p className="text-sm leading-7 pl-11">
              En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="mt-4 pl-11 space-y-2 text-sm">
              <li><span className="font-semibold text-[#1a1a2e]">Propriétaire :</span> SASU JSA Expertise</li>
              <li><span className="font-semibold text-[#1a1a2e]">Siège social :</span> 10 rue du Président Kennedy, 94220 Charenton-le-Pont</li>
              <li><span className="font-semibold text-[#1a1a2e]">SIRET :</span> 93393291500012</li>
              <li>
                <span className="font-semibold text-[#1a1a2e]">Responsable de la publication :</span>{" "}
                Joël Sayag –{" "}
                <a href="mailto:joel.sayag@jsaexpertise.com" className="text-[#00B6DE] hover:underline">
                  joel.sayag@jsaexpertise.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              Hébergement
            </h2>
            <p className="text-sm leading-7 pl-11">
              L&apos;hébergement du site est assuré par la société HOSTINGER INTERNATIONAL LTD.<br />
              Siège social : 61 Lordou Vironos Street, 6023 Larnaca, Chypre.<br />
              Contact :{" "}
              <a
                href="https://www.hostinger.fr/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B6DE] hover:underline"
              >
                https://www.hostinger.fr/contact
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Profession réglementée
            </h2>
            <p className="text-sm leading-7 pl-11">
              La société JSA Expertise est une société d&apos;expertise comptable inscrite au tableau de l&apos;Ordre des Experts-Comptables de la région Paris Île-de-France. Elle est soumise au Code de déontologie des experts-comptables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Propriété intellectuelle et contrefaçons
            </h2>
            <p className="text-sm leading-7 pl-11">
              JSA Expertise est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de JSA Expertise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Limitation de responsabilité
            </h2>
            <p className="text-sm leading-7 pl-11">
              JSA Expertise ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site. JSA Expertise s&apos;efforce de fournir des informations aussi précises que possible, mais ne pourra être tenue responsable des oublis ou des lacunes dans la mise à jour, qu&apos;ils soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00B6DE]/10 text-[#00B6DE] text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Gestion des données personnelles
            </h2>
            <p className="text-sm leading-7 pl-11">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition aux données personnelles vous concernant. Pour l&apos;exercer, contactez-nous par mail à :{" "}
              <a href="mailto:joel.sayag@jsaexpertise.com" className="text-[#00B6DE] hover:underline">
                joel.sayag@jsaexpertise.com
              </a>.
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
