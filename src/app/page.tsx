import Image from "next/image";
import Header from "./components/Header";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";

/* ─── reusable badge ─────────────────────────────────────── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

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
      <Header />
      <main>

        {/* ── 1. HERO ──────────────────────────────────────── */}
        <section
          id="offre"
          className="min-h-screen bg-[#F1F8EA] pt-16 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center w-full">
            {/* Left */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-2">
                <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Cabinet spécialisé freelances</Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Votre expert-comptable{" "}
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
                  href="#offre"
                  className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold text-lg px-8 py-4 rounded-full transition-colors"
                >
                  Découvrir l&apos;offre
                </a>
              </div>

              <div className="flex items-stretch gap-0 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden w-fit">
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
                    <p className="text-xs text-gray-500 mt-0.5">30 avis Google</p>
                  </div>
                </div>

                <div className="w-px bg-gray-100 my-3" />

                {/* Ordre */}
                <div className="flex items-center px-5 py-3.5">
                  <Image
                    src="/images/ordre.png"
                    alt="Inscrit à l'Ordre des Experts-Comptables"
                    width={110}
                    height={32}
                    className="h-7 w-auto object-contain"
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
          <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

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

              <p className="text-lg text-gray-600 leading-relaxed">
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

        {/* ── 3. POURQUOI CHOISIR ──────────────────────────── */}
        <section className="bg-[#F1F8EA]">
          <div className="max-w-7xl mx-auto px-8 py-24">

            {/* En-tête */}
            <div className="mb-14">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Nos engagements</Badge>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mt-4">
                Pourquoi choisir<br />
                <span className="text-turquoise-500">JSA Expertise&nbsp;?</span>
              </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Réactivité garantie",
                  desc: "Réponse sous 24h ouvrées, sans délai d'attente absurde. Un interlocuteur direct, joignable par email, téléphone ou visio.",
                  points: ["Réponse sous 24h", "Interlocuteur dédié", "Joignable par visio"],
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                    </svg>
                  ),
                  title: "100% Digital avec Tiime",
                  desc: "Zéro papier, zéro déplacement. Tiime centralise vos documents et vous donne une vision claire de votre trésorerie en temps réel.",
                  points: ["Zéro papier", "Accès 24h/24"],
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-turquoise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Sérénité totale",
                  desc: "Déclarations, liasses fiscales, bilan — tout est géré dans les délais. Vous restez informé à chaque étape, sans avoir à demander.",
                  points: ["Délais respectés", "Suivi proactif", "Zéro surprise"],
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-turquoise-50 rounded-2xl flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">{card.desc}</p>
                  <ul className="space-y-2.5">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <span className="w-5 h-5 rounded-full border-2 border-turquoise-500 flex items-center justify-center flex-shrink-0">
                          <Check small />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl px-8 py-6 shadow-sm">
              <div>
                <p className="text-xl font-extrabold text-gray-900">Prêt à déléguer votre comptabilité&nbsp;?</p>
                <p className="text-gray-500 mt-1">Premier échange gratuit · Sans engagement · Réponse sous 24h</p>
              </div>
              <a
                href="#contact"
                className="flex-shrink-0 bg-gradient-to-r from-turquoise-500 to-turquoise-700 hover:from-turquoise-700 hover:to-turquoise-900 text-white font-bold text-lg px-8 py-4 rounded-full transition-all whitespace-nowrap shadow-lg shadow-turquoise-500/30"
              >
                Prendre RDV gratuitement →
              </a>
            </div>

          </div>
        </section>

        {/* ── 4. NOS SERVICES ──────────────────────────────── */}
        <section id="outils" className="bg-white py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-turquoise-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Ce qu&apos;on fait
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos services</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Un accompagnement sur-mesure, adapté à votre statut et vos ambitions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  emoji: "💼",
                  title: "Comptabilité freelances",
                  desc: "Tenue comptable, déclarations TVA, liasse fiscale et bilan annuel pour micro-entrepreneurs, SASU et EURL.",
                  tags: ["Bilan annuel", "TVA", "Liasse fiscale"],
                },
                {
                  emoji: "🚀",
                  title: "Création d'entreprise",
                  desc: "Choix du statut juridique, rédaction des statuts, immatriculation et mise en place des outils dès le premier jour.",
                  tags: ["Statuts", "Immatriculation", "Conseil"],
                },
                {
                  emoji: "🎯",
                  title: "Optimisation fiscale",
                  desc: "Analyse de votre situation, arbitrages IS/IR, rémunération optimale et stratégies d'économies fiscales légales.",
                  tags: ["IS / IR", "Dividendes", "Rémunération"],
                },
                {
                  emoji: "🏢",
                  title: "Accompagnement agences",
                  desc: "Comptabilité multi-projets, gestion de la trésorerie, refacturation inter-sociétés et accompagnement croissance.",
                  tags: ["Multi-projets", "Trésorerie", "Croissance"],
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="group border border-gray-200 rounded-2xl p-7 hover:border-turquoise-500 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{s.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. TARIFS ────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-turquoise-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Nos formules
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tarification transparente</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Chaque situation est unique. Demandez un devis gratuit adapté à votre activité.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Création d'entreprise",
                  popular: false,
                  desc: "Lancez votre activité sur des bases solides.",
                  features: [
                    "Choix du statut juridique",
                    "Rédaction des statuts",
                    "Immatriculation complète",
                    "Ouverture de compte conseillé",
                    "Mise en place Tiime",
                    "Accompagnement 1 mois inclus",
                  ],
                },
                {
                  name: "Offre Freelance",
                  popular: true,
                  desc: "Idéal pour les indépendants et consultants.",
                  features: [
                    "Tenue comptable mensuelle",
                    "Déclarations TVA",
                    "Liasse fiscale & bilan annuel",
                    "Bulletins de paie dirigeant",
                    "Accès Tiime Premium",
                    "Conseils fiscaux illimités",
                  ],
                },
                {
                  name: "À la carte",
                  popular: false,
                  desc: "Pour les besoins ponctuels ou spécifiques.",
                  features: [
                    "Audit comptable",
                    "Optimisation fiscale ponctuelle",
                    "Accompagnement levée de fonds",
                    "Refacturation inter-sociétés",
                    "Déclarations spécifiques",
                    "Conseil juridique ponctuel",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                    plan.popular
                      ? "ring-2 ring-turquoise-500 shadow-xl scale-105"
                      : "border border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-turquoise-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                        ⭐ Le plus populaire
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm">{plan.desc}</p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                      plan.popular
                        ? "bg-turquoise-500 hover:bg-turquoise-700 text-white"
                        : "border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50"
                    }`}
                  >
                    Demander un devis
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ───────────────────────────────────────── */}
        <section className="bg-white py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-turquoise-500 font-semibold text-sm uppercase tracking-widest mb-3">
                Questions fréquentes
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQ</h2>
              <p className="text-gray-500 mt-3">
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

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-xl font-bold text-turquoise-500">JSA</span>
                <span className="text-xl font-bold text-white"> Expertise</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs mb-4">
                Cabinet comptable 100% digital pour les freelances, consultants et agences.
                Basé à Paris, accessible partout en France.
              </p>
              <a
                href="mailto:contact@jsaexpertise.com"
                className="text-turquoise-400 hover:text-turquoise-300 text-sm font-medium transition-colors"
              >
                contact@jsaexpertise.com
              </a>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
              <ul className="space-y-2.5 text-sm">
                {["Offre", "Outils", "Tarifs", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="hover:text-turquoise-400 transition-colors"
                    >
                      {l}
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
                  width={160}
                  height={48}
                  className="opacity-80 hover:opacity-100 transition-opacity rounded"
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

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} JSA Expertise. Tous droits réservés.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-turquoise-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-turquoise-400 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
