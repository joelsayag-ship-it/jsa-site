import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Expert-comptable spécialisé pour freelances à Paris | JSA Expertise",
  description:
    "JSA Expertise, votre expert-comptable dédié aux freelances et indépendants à Paris. Comptabilité, fiscalité, création SASU/EURL. Devis gratuit en 24h.",
  alternates: {
    canonical: "https://jsaexpertise.com/expert-comptable-freelance-paris",
  },
  openGraph: {
    title: "Expert-comptable spécialisé pour freelances à Paris | JSA Expertise",
    description:
      "Confiez votre comptabilité à un expert qui comprend le monde du freelance. Accompagnement personnalisé, tarifs transparents, 100% digital.",
    type: "website",
  },
};

/* ─── DATA ─────────────────────────────────────────── */

const avatars = [
  { initials: "SC", bg: "bg-[#004d60]" },
  { initials: "TL", bg: "bg-[#006480]" },
  { initials: "AK", bg: "bg-[#0081A5]" },
  { initials: "RE", bg: "bg-[#009ec0]" },
  { initials: "MP", bg: "bg-[#00B6DE]" },
];


const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Comptabilité complète",
    description: "Tenue de comptes, bilan annuel, liasse fiscale. On gère tout pendant que vous facturez.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: "Déclarations fiscales",
    description: "TVA, IS, IR, cotisations. Zéro retard, zéro pénalité, zéro stress.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Création d'entreprise",
    description: "SASU, EURL, micro-entreprise. Choix du statut, formalités et immatriculation.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Conseil & optimisation",
    description: "Rémunération optimisée, protection du patrimoine, stratégie fiscale sur mesure.",
  },
];

const reasons = [
  { number: "01", title: "Expertise freelance", description: "Nous travaillons exclusivement avec des indépendants. Nous connaissons parfaitement vos enjeux spécifiques." },
  { number: "02", title: "Tarifs transparents", description: "Un forfait mensuel clair, sans frais cachés. Vous savez exactement ce que vous payez dès le départ." },
  { number: "03", title: "Disponibilité 24h", description: "Un interlocuteur dédié, réponse garantie sous 24h. Pas de standard, pas de bot, un vrai expert." },
  { number: "04", title: "100% digital", description: "Espace client en ligne, signature électronique, transmission dématérialisée. Gérez tout depuis votre canapé." },
];

const testimonials = [
  {
    name: "Thomas M.",
    role: "Développeur freelance",
    since: "Client depuis 2022",
    quote: "JSA Expertise a transformé ma relation avec la comptabilité. Tout est géré, les bilans sont clairs et mon expert répond toujours rapidement.",
    stars: 5,
  },
  {
    name: "Camille R.",
    role: "UX Designer indépendante",
    since: "Cliente depuis 2021",
    quote: "Ils m'ont aidée à passer de micro-entrepreneuse à SASU au bon moment. Le gain fiscal a été immédiat. Je recommande à tous mes amis freelances.",
    stars: 5,
  },
  {
    name: "Julien B.",
    role: "Consultant IT",
    since: "Client depuis 2023",
    quote: "Enfin un cabinet qui parle le langage des freelances ! Pas de jargon, des conseils concrets et un tarif qui correspond à mes besoins réels.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────── */

export default function ExpertComptableFreelanceParis() {
  return (
    <div className="min-h-screen bg-[#F1F8EA] text-gray-900 font-sans">

      {/* ══ HEADER ══════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-[#F1F8EA] border-b border-[#d6ecc4]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo image */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png.png"
              alt="JSA Expertise"
              width={200}
              height={200}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <Link href="#services" className="hover:text-[#0081A5] transition-colors">Services</Link>
            <Link href="#pourquoi" className="hover:text-[#0081A5] transition-colors">Pourquoi nous</Link>
            <Link href="#temoignages" className="hover:text-[#0081A5] transition-colors">Avis clients</Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center bg-[#00B6DE] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#0081A5] transition-colors"
          >
            Devis gratuit
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ══ HERO ════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#c8e6b0] rounded-full px-4 py-1.5 text-sm text-gray-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00B6DE] inline-block" />
              Cabinet spécialisé freelances
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-2">
              <span className="whitespace-nowrap">L&apos;expert-comptable</span><br />
              des <span className="text-[#00B6DE]">freelances</span>
            </h1>
            {/* Underline accent */}
            <div className="w-48 h-1 rounded-full bg-[#00B6DE] mb-8" />

            {/* Pitch */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Le cabinet d&apos;expertise comptable dédié aux freelances et aux agences. Bénéficiez d&apos;un accompagnement personnalisé, d&apos;outils digitaux performants et d&apos;une réactivité sans faille pour développer sereinement votre activité.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center bg-[#00B6DE] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0081A5] transition-colors shadow-lg shadow-[#00B6DE]/25"
                >
                  Obtenir un devis gratuit
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center bg-white border border-gray-300 text-gray-700 font-semibold px-7 py-3.5 rounded-full hover:border-[#0081A5] hover:text-[#0081A5] transition-colors"
                >
                  Découvrir nos services
                </Link>
              </div>
              <div className="pl-[122px]">
                <Image
                  src="/images/ordre.png"
                  alt="Ordre des Experts-Comptables"
                  width={600}
                  height={100}
                  className="h-8 w-auto opacity-80"
                />
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {avatars.map((a) => (
                  <div
                    key={a.initials}
                    className={`${a.bg} w-9 h-9 rounded-full border-2 border-[#F1F8EA] flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <Stars count={5} />
                  <span className="text-sm font-bold text-gray-800">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">+200 freelances nous font confiance</p>
              </div>
            </div>
          </div>

          {/* ── Right : dashboard screenshot ── */}
          <div className="hidden md:flex items-center justify-center">
            <div className="animate-float">
              <Image
                src="/images/tiime-dashboard.png"
                alt="Dashboard Tiime — suivi comptabilité en temps réel"
                width={1200}
                height={750}
                className="w-full h-auto rounded-2xl shadow-2xl shadow-[#00B6DE]/20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ VOTRE EXPERT DÉDIÉ ══════════════════════════ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* ── Left : texte ── */}
            <div>
              {/* Badge pill */}
              <div className="inline-flex items-center gap-2 bg-[#F1F8EA] border border-[#c8e6b0] rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00B6DE] inline-block" />
                Votre expert-comptable dédié
              </div>

              {/* Nom */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-2">
                Joël <span className="text-[#00B6DE]">Sayag</span>
              </h2>

              {/* Sous-titre */}
              <p className="text-[#00B6DE] font-semibold text-xl mb-6">
                Expert-comptable · 10 ans d&apos;expérience
              </p>

              {/* Textes */}
              <div className="space-y-3 text-gray-600 text-lg leading-relaxed mb-8">
                <p>Spécialisé dans l&apos;accompagnement des freelances et professions libérales.</p>
                <p>
                  <span className="font-semibold text-gray-800">Ma conviction :</span> Optimiser vos charges pour vous rémunérer à votre juste valeur.
                </p>
              </div>

              {/* Badges 2×2 */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  {
                    label: "Comptabilité freelances & TPE",
                    icon: (
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Création d'entreprise",
                    icon: (
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Optimisation rémunération",
                    icon: (
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: "10 ans d'expérience",
                    icon: (
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-[#00B6DE]/70 rounded-xl px-4 py-2.5 text-sm font-medium text-white"
                  >
                    {icon}
                    {label}
                  </div>
                ))}
              </div>

              {/* Bouton LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/jo%C3%ABl-sayag-expert-comptable-912795106/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#0A66C2] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#004182] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Link>
            </div>

            {/* ── Right : photo + bouton ── */}
            <div className="flex flex-col items-center gap-6 pl-8">
              <div className="rounded-3xl overflow-hidden bg-[#F1F8EA] border border-[#d6ecc4] shadow-lg w-[384px] md:w-[460px]">
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable"
                  width={600}
                  height={720}
                  className="w-full h-auto"
                />
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#00B6DE] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#0081A5] transition-colors shadow-lg shadow-[#00B6DE]/25"
              >
                Prendre RDV →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ POURQUOI JSA ════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-[#F1F8EA]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header centré */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white border border-[#c8e6b0] rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00B6DE] inline-block" />
              Nos engagements
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Pourquoi choisir{" "}
              <span className="bg-gradient-to-r from-[#00B6DE] to-[#0081A5] bg-clip-text text-transparent">
                JSA Expertise
              </span>{" "}
              ?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Nous avons créé un cabinet pensé pour les freelances et les agences.<br />Une expertise comptable moderne qui comprend vos enjeux et s&apos;adapte à votre profil !
            </p>
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-md shadow-gray-200/50 border border-[#e8f4e0] flex flex-col gap-6">
              <div className="w-14 h-14 bg-[#e0f7fd] text-[#00B6DE] rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Réactivité garantie</h3>
                <p className="text-gray-500 leading-relaxed">
                  Un lien direct avec votre expert-comptable dédié. Échangez en visio, par téléphone ou par mail, et obtenez une réponse en moins de 24h. Fini l&apos;attente interminable !
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-md shadow-gray-200/50 border border-[#e8f4e0] flex flex-col gap-6">
              <div className="w-14 h-14 bg-[#e0f7fd] text-[#00B6DE] rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Digital</h3>
                <p className="text-gray-500 leading-relaxed">
                  Oubliez la paperasse. Avec l&apos;application Tiime incluse, créez vos factures, suivez vos paiements, prenez en photo vos justificatifs de dépense en temps réel. Tout cela depuis votre smartphone, où que vous soyez.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-10 shadow-md shadow-gray-200/50 border border-[#e8f4e0] flex flex-col gap-6">
              <div className="w-14 h-14 bg-[#e0f7fd] text-[#00B6DE] rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sérénité totale</h3>
                <p className="text-gray-500 leading-relaxed">
                  Votre expert-comptable prend tout en charge : tenue des comptes, déclarations de TVA, bilan, liasse fiscale, optimisation des charges et de votre rémunération. Concentrez-vous sur votre métier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 100% DIGITAL ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="text-[#0081A5] font-semibold text-sm uppercase tracking-wider">100% Digital</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
              Pilotez votre activité en temps réel
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl">
              L&apos;application Tiime incluse dans votre offre. Factures, dépenses, trésorerie depuis votre téléphone.
            </p>
          </div>

          {/* Images side by side */}
          <div className="grid md:grid-cols-5 gap-8 items-end">
            {/* Dashboard — large, left, 3 cols */}
            <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100">
              <Image
                src="/images/tiime-dashboard.png"
                alt="Dashboard Tiime — suivi comptabilité freelance"
                width={900}
                height={560}
                className="w-full h-auto"
              />
            </div>
            {/* Mobile — right, 2 cols */}
            <div className="md:col-span-2 flex items-end justify-center pb-0">
              <Image
                src="/images/tiime-mobile.png"
                alt="Application mobile Tiime"
                width={560}
                height={440}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-28 bg-[#F1F8EA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#0081A5] font-semibold text-sm uppercase tracking-wider">Nos services</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Tout ce dont un freelance a besoin</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">Une offre complète pensée pour les indépendants, du lancement à l&apos;optimisation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-white rounded-2xl p-6 border border-[#d6ecc4] hover:shadow-xl hover:border-[#00B6DE]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F1F8EA] text-[#00B6DE] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00B6DE] group-hover:text-white transition-colors shadow-sm">
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POURQUOI NOUS ═══════════════════════════════ */}
      <section id="pourquoi" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#0081A5] font-semibold text-sm uppercase tracking-wider">Pourquoi nous choisir</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Un cabinet qui parle vraiment le langage des freelances
              </h2>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Nous ne sommes pas un cabinet généraliste. Depuis notre création, nous accompagnons exclusivement les travailleurs indépendants.
              </p>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#00B6DE] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#0081A5] transition-colors shadow-lg shadow-[#00B6DE]/25"
              >
                Parler à un expert →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.number} className="bg-[#F1F8EA] rounded-2xl p-6 border border-[#d6ecc4] shadow-sm">
                  <span className="text-3xl font-black text-[#b3ecf9]">{r.number}</span>
                  <h3 className="mt-2 font-bold text-gray-900">{r.title}</h3>
                  <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ═════════════════════════════════ */}
      <section id="temoignages" className="py-20 md:py-28 bg-[#F1F8EA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#0081A5] font-semibold text-sm uppercase tracking-wider">Avis clients</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Ce que disent nos clients freelances</h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto">Plus de 200 indépendants nous font confiance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-[#d6ecc4] flex flex-col gap-4">
                <Stars count={t.stars} />
                <blockquote className="text-gray-600 leading-relaxed flex-1 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-[#d6ecc4]">
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-[#0081A5] font-medium">{t.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.since}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-12 text-center">
            {[
              { value: "200+", label: "clients accompagnés" },
              { value: "8 ans", label: "d'expérience" },
              { value: "98%", label: "de satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-[#00B6DE]">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ═══════════════════════════════════ */}
      <section id="contact" className="py-20 md:py-28 bg-[#00B6DE]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Devis gratuit &amp; sans engagement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Commencez dès aujourd&apos;hui.<br />On s&apos;occupe du reste.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            30 minutes suffisent pour évaluer vos besoins et vous proposer une solution adaptée à votre activité et votre budget.
          </p>
          <div className="bg-white rounded-3xl p-8 md:p-10 text-left shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-gray-900 font-bold text-xl mb-6">Obtenir mon devis gratuit</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════ */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              {/* Logo image footer */}
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logo.png.png"
                  alt="JSA Expertise"
                  width={200}
                  height={200}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-5">
                Cabinet d&apos;expertise comptable spécialisé dans l&apos;accompagnement des freelances et travailleurs indépendants.
              </p>
              {/* Badge Ordre footer */}
              <Image
                src="/images/ordre.png"
                alt="Ordre des Experts-Comptables"
                width={600}
                height={100}
                className="h-7 w-auto opacity-60 brightness-0 invert"
              />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#00B6DE] transition-colors">Comptabilité</Link></li>
                <li><Link href="#" className="hover:text-[#00B6DE] transition-colors">Déclarations fiscales</Link></li>
                <li><Link href="#" className="hover:text-[#00B6DE] transition-colors">Création d&apos;entreprise</Link></li>
                <li><Link href="#" className="hover:text-[#00B6DE] transition-colors">Conseil juridique</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>contact@jsaexpertise.com</li>
                <li>01 23 45 67 89</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} JSA Expertise. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#00B6DE] transition-colors">Mentions légales</Link>
              <Link href="#" className="hover:text-[#00B6DE] transition-colors">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
