import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Saint-Mandé (94160) — JSA Expertise",
  description:
    "JSA Expertise, expert-comptable proche de Saint-Mandé. Spécialisé freelances et agences. Comptabilité, création SASU, optimisation fiscale. Premier RDV gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-saint-mande",
  },
  twitter: { card: 'summary_large_image' },
};

const FAQS = [
  {
    q: "Travaillez-vous avec des freelances de Saint-Mandé ?",
    a: "Oui, nous accompagnons régulièrement des freelances et indépendants basés à Saint-Mandé. Notre cabinet est à Charenton-le-Pont, à 10 minutes. Mais dans la majorité des cas, tout se fait en ligne — vous n'avez pas besoin de vous déplacer.",
  },
  {
    q: "Comment optimiser ma rémunération en SASU depuis Saint-Mandé ?",
    a: "L'optimisation repose sur le bon dosage entre salaire et dividendes. Le salaire génère des charges sociales mais ouvre des droits. Les dividendes sont soumis à la flat tax (30%). On calcule votre scénario optimal lors d'un premier rendez-vous gratuit, en tenant compte de votre CA, de vos charges personnelles et de vos objectifs.",
  },
  {
    q: "Puis-je tout faire en ligne depuis Saint-Mandé ?",
    a: "Absolument. JSA Expertise est 100% digital. Transmission des documents via Tiime, échanges par mail et téléphone, signature électronique des bilans. Zéro déplacement, zéro papier.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-turquoise-50 text-turquoise-700 text-sm font-semibold px-4 py-2 rounded-full border border-turquoise-200">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-turquoise-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-700 text-sm leading-relaxed">{children}</span>
    </li>
  );
}

export default function SaintMandePage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Expert-comptable proche de Saint-Mandé
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Saint-Mandé : des freelances discrets qui ont besoin d'un{" "}
                <span className="text-turquoise-500">expert-comptable réactif</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Saint-Mandé est calme, résidentielle, coincée entre Vincennes et Paris. Elle abrite une population de consultants, professions libérales et indépendants qui ont choisi la qualité de vie. Ils ont en commun un niveau d'expertise élevé et le besoin d'un expert-comptable qui répond, pas d'un cabinet qui prend trois jours.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                JSA Expertise, basé à 10 minutes à Charenton-le-Pont, est spécialisé exactement pour ces profils.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
                  Prendre RDV gratuitement
                </Link>
                <Link href="/#tarifs" className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold px-7 py-3.5 rounded-full transition-colors">
                  Notre offre
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable proche de Saint-Mandé"
                  width={380}
                  height={460}
                  className="relative rounded-3xl object-cover shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-900">Joël Sayag</p>
                  <p className="text-xs text-gray-400">Expert-comptable · 10 ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROFIL ────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Votre profil
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Le profil type du freelance à Saint-Mandé
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saint-Mandé (94160) concentre une population atypique : des professionnels bien établis qui ont choisi cette ville pour sa tranquillité et sa proximité immédiate avec Paris. Consultants en stratégie, coachs certifiés, avocats installés à leur compte, experts-métiers en santé ou en finance.
              </p>
              <p>
                Ces freelances ne cherchent pas un expert-comptable qui leur envoie des bilans incompréhensibles. Ils veulent un expert disponible, qui parle clairement, et qui les aide à optimiser leur situation concrètement. C'est exactement la promesse de JSA Expertise.
              </p>
            </div>
          </div>
        </section>

        {/* ── OPTIMISATION FISCALE ──────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Fiscalité freelance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Optimiser sa fiscalité quand on est freelance à Saint-Mandé
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              L'optimisation fiscale d'un freelance repose sur plusieurs leviers : le choix du statut juridique (SASU ou EURL selon votre situation), la stratégie de rémunération, et les charges déductibles souvent sous-estimées. L'EURL offre des charges sociales moins lourdes via le régime TNS — un avantage concret quand on démarre ou qu'on préfère maximiser sa trésorerie mensuelle. La SASU est plus adaptée quand les revenus sont élevés et qu'on veut combiner salaire et dividendes.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "Choix du statut", desc: "SASU, EURL ou micro : on choisit ce qui vous rapporte le plus net." },
                { title: "Salaire/dividendes", desc: "Le bon dosage chaque année selon vos revenus et vos projets." },
                { title: "Frais déductibles", desc: "Audit complet de vos dépenses, rien d'oublié." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/simulateur-charges" className="text-turquoise-500 hover:underline font-semibold text-sm">
              Simuler mes charges URSSAF →
            </Link>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Nos services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-7">
              Ce que votre expert-comptable prend en charge
            </h2>
            <ul className="space-y-4">
              <CheckItem><strong>Comptabilité mensuelle :</strong> saisie, rapprochement, lettrage. Vision claire de votre trésorerie en temps réel.</CheckItem>
              <CheckItem><strong>TVA et déclarations fiscales :</strong> tout est envoyé à temps. Aucune pénalité de retard.</CheckItem>
              <CheckItem><strong>Bilan annuel certifié,</strong> présenté clairement pour que vous compreniez vos chiffres.</CheckItem>
              <CheckItem><strong>Simulation de rémunération</strong> chaque année pour ajuster votre stratégie SASU ou EURL selon l'évolution de votre activité.</CheckItem>
              <CheckItem><strong>Conseil en temps réel :</strong> un vrai expert-comptable vous répond sous 24h, pas un assistant.</CheckItem>
            </ul>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Saint-Mandé</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE ──────────────────────────────────── */}
        <section className="bg-white py-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Actualités", href: "/blog" },
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center">{l.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Prenons rendez-vous</h2>
            <p className="text-white/80 text-lg mb-8">Premier rendez-vous gratuit et sans engagement. On analyse votre situation et on vous conseille le meilleur statut.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="bg-white text-[#00B6DE] hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">Prendre RDV gratuitement</Link>
              <Link href="tel:+33660735546" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-colors">06 60 73 55 46</Link>
            </div>
            <p className="text-white/60 text-sm mt-5">Réponse sous 24h garantie</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
