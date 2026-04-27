import Image from "next/image";
import Link from "next/link";

const VILLES = [
  { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
  { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
  { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
  { label: "Saint-Maurice", href: "/expert-comptable-freelance-saint-maurice" },
  { label: "Joinville-le-Pont", href: "/expert-comptable-freelance-joinville-le-pont" },
  { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
];

const RESSOURCES = [
  { label: "Expert-comptable freelance", href: "/expert-comptable-freelance" },
  { label: "Blog", href: "/blog" },
  { label: "Simulateur URSSAF", href: "/simulateur-charges" },
  { label: "Simulateur IK 2026", href: "/ressources/simulateur-indemnites-kilometriques" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <Image
                src="/images/logo.png.png"
                alt="JSA Expertise"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-4">
              Cabinet comptable 100% digital pour les freelances, consultants et agences.
              Basé à Charenton-le-Pont (94), aux portes de Paris.
            </p>
            <a
              href="mailto:joel.sayag@jsaexpertise.com"
              className="text-turquoise-400 hover:text-turquoise-300 text-sm font-medium transition-colors"
            >
              joel.sayag@jsaexpertise.com
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Offre", href: "/#offre" },
                { label: "Outils", href: "/#outils" },
                { label: "Ressources", href: "/ressources" },
                { label: "Tarifs", href: "/#tarifs" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-turquoise-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Badge + LinkedIn */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Certifications</h4>
              <Image
                src="/images/ordre.png"
                alt="Ordre des Experts-Comptables"
                width={999}
                height={129}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/jo%C3%ABl-sayag-expert-comptable-912795106/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-turquoise-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Joël Sayag sur LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 pb-6 grid sm:grid-cols-2 gap-6 text-xs">
          <div>
            <p className="text-gray-500 font-semibold uppercase tracking-wide mb-3">Nos villes</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {VILLES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-turquoise-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-500 font-semibold uppercase tracking-wide mb-3">Ressources</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {RESSOURCES.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-turquoise-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} JSA Expertise. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="/mentions-legales" className="hover:text-turquoise-400 transition-colors">Mentions légales</a>
            <a href="/politique-confidentialite" className="hover:text-turquoise-400 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
