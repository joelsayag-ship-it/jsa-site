import type { Metadata } from "next";
import Image from "next/image";
import FAQ from "./components/FAQ";
import { FAQS } from "./components/faq-data";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Paris & Val-de-Marne — JSA Expertise",
  description: "JSA Expertise, cabinet d'expertise comptable 100% digital spécialisé pour les freelances et agences. Basé à Charenton-le-Pont, on accompagne les indépendants à Paris, Vincennes, Saint-Mandé et partout en France.",
};

/* ─── reusable badge ─────────────────────────────────────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

/* ─── review data ───────────────────────────────────────── */
const REVIEWS_CAROUSEL = [
  { name: "Mickael F.", text: "Excellent expert-comptable de qualité ! Réactif, disponible et de bons conseils ! Je recommande !" },
  { name: "Remi B.", text: "Je recommande JSA Expertise. J'ai été accompagné de façon très professionnelle et nos échanges sont toujours très fluides. Valeur ajoutée remarquable sur les sujets fiscaux." },
  { name: "Michael L.", text: "Excellent cabinet comptable ! JSA Expertise m'accompagne depuis 2025 et j'en suis ravi. La gestion est moderne et fluide, et ils sont toujours disponibles." },
  { name: "Charlotte M.", text: "Cliente du cabinet, je recommande vivement l'accompagnement, l'expertise et la réactivité de Joël Sayag. Nous avons beaucoup de chance de pouvoir compter sur lui." },
  { name: "Lucie S.", text: "Joël est un expert-comptable réactif, à l'écoute. Je suis très satisfaite de son accompagnement ainsi que des outils qu'il propose (Tiime, super application)." },
  { name: "Benjamin T.", text: "Merci beaucoup pour l'accompagnement dans la gestion de ma première déclaration LMNP. Et pour les précieux conseils." },
  { name: "Julien B.", text: "Cabinet très réactif et efficace qui m'a aidé dans la création de mon entreprise. Merci à Joël." },
  { name: "Thomas D.", text: "Compétence, réactivité et disponibilité, je recommande vivement JSA Expertise." },
  { name: "Hannah-léa F.", text: "JSA Expertise est d'excellent conseil, humain et fiable." },
  { name: "Julien G.", text: "Je suis accompagné par Joël Sayag en tant qu'expert-comptable depuis quelques mois et je suis très satisfait de notre collaboration." },
];

/* ─── check icon ─────────────────────────────────────────── */
function Check({ small }: { small?: boolean }) {
  return (
    <svg className={`${small ? "w-2.5 h-2.5" : "w-4 h-4"} text-turquoise-500 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <main>

        {/* ── 1. HERO ──────────────────────────────────────── */}
        <section
          className="min-h-screen bg-[#F1F8EA] pt-16 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center w-full">
            {/* Left */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Cabinet spécialisé freelances</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Votre expert&#8209;comptable{" "}
                <span className="text-turquoise-500">spécialisé</span>{" "}
                pour les{" "}
                <span className="relative inline-block">
                  freelances
                  <svg
                    viewBox="0 0 200 12"
                    className="absolute -bottom-2 left-0 w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 C50 2, 100 11, 150 5 C170 2, 185 8, 198 6"
                      stroke="#00B6DE"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                JSA Expertise est un cabinet comptable 100% digital conçu pour
                les freelances et agences. On gère vos chiffres, vous gérez
                votre croissance.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
                >
                  Prendre RDV gratuitement
                </a>
                <a
                  href="#tarifs"
                  className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold text-lg px-8 py-4 rounded-full transition-colors"
                >
                  Découvrir l&apos;offre
                </a>
              </div>

              <div className="flex flex-wrap items-stretch gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden w-fit max-w-full">
                {/* Stat 1 */}
                <div className="flex items-center gap-3 px-5 py-3.5">
                  <div className="w-8 h-8 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">150+</p>
                    <p className="text-xs text-gray-500 mt-0.5">entrepreneurs accompagnés</p>
                  </div>
                </div>

                <div className="w-px bg-gray-100 my-3" />

                {/* Google reviews */}
                <div className="flex items-center gap-3 px-5 py-3.5">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <div className="flex items-center gap-1.5 leading-none">
                      <span className="text-sm font-bold text-gray-900">5,0</span>
                      <div className="flex">
                        {[1,2,3,4,5].map((i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">28 avis Google</p>
                  </div>
                </div>

                <div className="w-px bg-gray-100 my-3" />

                {/* Ordre */}
                <div className="flex items-center px-5 py-3.5">
                  <Image
                    src="/images/ordre.png"
                    alt="Inscrit à l'Ordre des Experts-Comptables"
                    width={999}
                    height={129}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right — dashboard with bounce */}
            <div className="flex justify-center md:justify-end">
              <div className="animate-bounce-soft relative w-full">
                <div className="absolute -inset-6 bg-turquoise-500/10 rounded-3xl blur-2xl" />
                <Image
                  src="/images/tiime-dashboard.png"
                  alt="Tableau de bord Tiime"
                  width={700}
                  height={490}
                  priority
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. JOËL SAYAG ────────────────────────────────── */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div className="order-2 md:order-1 space-y-8">

              <div>
                <div className="mb-4">
                  <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Qui suis-je ?</Badge>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                  Joël Sayag
                </h2>
                <p className="text-xl text-turquoise-500 font-semibold mt-3">
                  Expert-comptable · 10 ans d&apos;expérience
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
                <a
                  href="#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-lg px-8 py-3.5 rounded-full transition-colors"
                >
                  Prendre RDV
                </a>
              </div>
            </div>

            {/* Right — photo */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                {/* fond décoratif */}
                <div className="absolute inset-0 bg-[#F1F8EA] rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable"
                  width={420}
                  height={500}
                  className="relative rounded-3xl object-cover shadow-xl"
                />
                {/* badge flottant */}
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

        {/* ── 3. TÉMOIGNAGES ───────────────────────────────── */}
        <section className="bg-[#F1F8EA]">
          <style>{`
            @keyframes marquee-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-left { animation: marquee-left 50s linear infinite; }
            .marquee-row:hover .marquee-left { animation-play-state: paused; }
          `}</style>

          {/* En-tête */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 mb-12 text-center flex flex-col items-center">
            <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Avis clients</Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-500 mt-4">
              Plus de 150 freelances et indépendants accompagnés
            </p>
          </div>

          {/* Carousel — 1 rangée */}
          <div className="mb-14">
            <div className="marquee-row overflow-hidden">
              <div className="marquee-left flex gap-4 pl-4" style={{ width: "max-content" }}>
                {[...REVIEWS_CAROUSEL, ...REVIEWS_CAROUSEL].map((r, i) => (
                  <div key={i} className="w-72 flex-shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex flex-col gap-3">
                    {/* Header : logo Google + étoiles */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">{r.text}</p>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{r.name}</p>
                      <p className="text-xs text-gray-400">Client JSA Expertise</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chiffres clés + CTA */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { chiffre: "150+", label: "clients accompagnés" },
                { chiffre: "10 ans", label: "d'expérience" },
                { chiffre: "24h", label: "délai de réponse" },
              ].map((s) => (
                <div key={s.label} className="text-center py-8 border-b sm:border-b-0 sm:border-r border-gray-200 last:border-0">
                  <p className="text-5xl md:text-6xl font-extrabold text-turquoise-500 leading-none">{s.chiffre}</p>
                  <p className="text-gray-500 text-base mt-3">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://g.page/r/CTc5TfiZ6UlwEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-turquoise-500 text-gray-700 hover:text-turquoise-500 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Voir tous nos avis Google →
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. TIIME ─────────────────────────────────────── */}
        <section id="outils" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

            {/* En-tête */}
            <div className="mb-14 text-center flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Nos outils</Badge>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                L&apos;application Tiime,<br />
                <span className="text-turquoise-500">la référence des entrepreneurs</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mt-6 max-w-2xl">
                Gérez votre société en toute simplicité depuis votre smartphone.
                Tiime est l&apos;application plébiscitée par les freelances pour sa simplicité
                et son efficacité. Synchronisation bancaire, facturation en quelques clics,
                notes de frais... tout est centralisé.
              </p>
            </div>

            {/* 4 features en encadrés */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 max-w-3xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  label: "Facturation illimitée",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ),
                  label: "Synchronisation bancaire",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                    </svg>
                  ),
                  label: "Notes de frais",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  label: "Tableaux de bord",
                },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 bg-[#F1F8EA] border border-turquoise-200 rounded-lg px-3 py-2.5 shadow-sm">
                  <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                    {f.icon}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm leading-tight">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Image centrée grande */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="absolute -inset-8 bg-turquoise-500/10 rounded-3xl blur-3xl" />
                <Image
                  src="/images/tiime-mobile.png"
                  alt="Application Tiime sur mobile"
                  width={900}
                  height={600}
                  className="relative w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. TARIFS ────────────────────────────────────── */}
        <div id="offres" />
        <span id="offre" className="block h-0" />
        <section id="tarifs" className="bg-[#F1F8EA]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

            {/* En-tête */}
            <div className="mb-14 text-center flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Nos formules</Badge>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                Nos formules
              </h2>
              <p className="text-xl text-gray-500 mt-4 max-w-xl">
                Chaque situation est unique. Demandez un devis gratuit adapté à votre activité.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 items-stretch">

              {/* Création d'entreprise */}
              <div className="relative bg-white rounded-2xl p-8 flex flex-col border border-gray-200 shadow-sm overflow-hidden">
                {/* Bandeau coin haut droite */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute bg-amber-400 text-white text-xs font-extrabold text-center leading-tight"
                    style={{
                      width: "160px",
                      top: "28px",
                      right: "-36px",
                      transform: "rotate(45deg)",
                      padding: "6px 0",
                    }}
                  >
                    Offre lancement
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">Création d&apos;entreprise</h3>
                  <p className="text-gray-500 text-sm">Lancez votre activité sur des bases solides.</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Choix de la structure juridique",
                    "Rédaction des statuts",
                    "Documents juridiques",
                    "Dépôt auprès du Greffe et suivi",
                    "Réception du Kbis",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full border-2 border-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check small />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="block text-center font-bold py-3.5 rounded-xl border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 transition-colors">
                  Demander un devis
                </a>
              </div>

              {/* Offre Freelance — mise en avant */}
              <div className="relative bg-white rounded-2xl p-8 flex flex-col ring-2 ring-turquoise-500 shadow-xl md:scale-105 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-turquoise-500 text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    ⭐ Le plus populaire
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">Offre Freelance</h3>
                  <p className="text-gray-500 text-sm">Idéal pour les indépendants et consultants.</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Tenue comptable complète",
                    "Déclarations de TVA",
                    "Bilan & Liasse fiscale",
                    "Conseil illimité",
                    "Accès application Tiime inclus",
                    "Optimisation fiscale",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="block text-center font-bold text-lg py-3.5 rounded-xl bg-turquoise-500 hover:bg-turquoise-700 text-white transition-colors shadow-lg shadow-turquoise-500/30">
                  Demander un devis
                </a>
              </div>

              {/* À la carte */}
              <div className="relative bg-white rounded-2xl p-8 flex flex-col border border-gray-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">À la carte</h3>
                  <p className="text-gray-500 text-sm">Pour les besoins ponctuels ou spécifiques.</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    "Juridique annuel",
                    "Bulletins de paie",
                    "Transfert de siège",
                    "Prévisionnel d'activité",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full border-2 border-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check small />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="block text-center font-bold py-3.5 rounded-xl border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 transition-colors">
                  Demander un devis
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── Schema.org Person — Joël Sayag ───────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joël Sayag",
              "jobTitle": "Expert-comptable",
              "worksFor": {
                "@type": "AccountingService",
                "name": "JSA Expertise",
              },
              "url": "https://www.jsaexpertise.com/qui-sommes-nous",
              "sameAs": "https://www.linkedin.com/in/joël-sayag-expert-comptable-912795106/",
              "image": "https://www.jsaexpertise.com/images/joel.png",
              "description": "Expert-comptable spécialisé freelances et indépendants, 10 ans d'expérience, basé à Charenton-le-Pont (94).",
            }),
          }}
        />

        {/* ── 6. FAQ ───────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 text-center flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">FAQ</h2>
              <p className="text-xl text-gray-500 mt-4">
                Tout ce que vous voulez savoir sur la comptabilité freelance.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQ />
              <div className="text-center mt-10">
                <p className="text-gray-500 text-sm mb-4">
                  Vous ne trouvez pas la réponse ?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-turquoise-500 hover:bg-turquoise-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Posez votre question →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CONTACT ───────────────────────────────────── */}
        <ContactSection />

      </main>

      <Footer />
    </>
  );
}
