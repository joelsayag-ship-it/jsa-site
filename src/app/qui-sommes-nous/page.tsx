import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Qui sommes-nous — JSA Expertise, expert-comptable freelances Paris",
  description:
    "Découvrez Joël Sayag, expert-comptable spécialisé freelances et agences. 10 ans d'expérience, 150+ clients accompagnés, basé à Charenton-le-Pont.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

export default function QuiSommesNous() {
  return (
    <>
      <main>

        {/* ── JOËL SAYAG ──────────────────────────────────── */}
        <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">

            {/* Left — texte */}
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <div className="mb-4">
                  <Badge>
                    <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                    Qui suis-je ?
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                  Joël Sayag
                </h1>
                <p className="text-xl text-turquoise-500 font-semibold mt-3">
                  Expert&#8209;comptable · 10 ans d&apos;expérience
                </p>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Chez JSA Expertise, chaque dossier est suivi avec rigueur et réactivité.
                L&apos;objectif est simple : optimiser vos charges, sécuriser vos obligations fiscales
                et vous permettre de vous rémunérer à votre juste valeur. Un cabinet qui comprend
                votre réalité d&apos;indépendant et s&apos;adapte à votre activité.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Comptabilité freelance",
                  "Création d'entreprise",
                  "Optimisation fiscale",
                  "Optimisation rémunération",
                ].map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/jo%C3%ABl-sayag-expert-comptable-912795106/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-turquoise-500 text-gray-700 hover:text-turquoise-500 font-bold text-lg px-7 py-3.5 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <Link
                  href="/#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-lg px-8 py-3.5 rounded-full transition-colors"
                >
                  Prendre RDV
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F1F8EA] rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable"
                  width={420}
                  height={500}
                  className="relative rounded-3xl object-cover shadow-xl"
                />
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

        {/* ── TÉMOIGNAGES ─────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">

            <div className="mb-14 text-center flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Avis clients
              </Badge>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                Ils nous font confiance
              </h2>
              <p className="text-xl text-gray-500 mt-4">
                Plus de 150 freelances et indépendants accompagnés
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  text: "Enfin un cabinet qui répond le jour même. En 3 ans, pas une seule échéance manquée et des conseils vraiment adaptés à mon activité de consultant.",
                  name: "Thomas M.",
                  role: "Consultant IT indépendant",
                  initiale: "T",
                },
                {
                  text: "JSA Expertise m'a accompagné dans la création de ma SASU et le suivi comptable depuis. Tout est clair, digital, et je n'ai plus à me soucier de rien.",
                  name: "Sarah K.",
                  role: "Designer freelance",
                  initiale: "S",
                },
                {
                  text: "Le passage de micro-entreprise à SASU s'est fait sans stress. L'optimisation fiscale a été immédiate et significative.",
                  name: "Romain D.",
                  role: "Développeur freelance",
                  initiale: "R",
                },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-turquoise-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.initiale}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { chiffre: "150+", label: "clients accompagnés" },
                { chiffre: "10 ans", label: "d'expérience" },
                { chiffre: "24h", label: "délai de réponse garanti" },
              ].map((s) => (
                <div key={s.label} className="text-center py-8 border-b sm:border-b-0 sm:border-r border-gray-200 last:border-0">
                  <p className="text-5xl md:text-6xl font-extrabold text-turquoise-500 leading-none">{s.chiffre}</p>
                  <p className="text-gray-500 text-base mt-3">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────── */}
        <ContactSection />

      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <Image
            src="/images/logo.png.png"
            alt="JSA Expertise"
            width={999}
            height={129}
            className="h-7 w-auto object-contain"
          />
          <p>© {new Date().getFullYear()} JSA Expertise. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-turquoise-400 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-turquoise-400 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
