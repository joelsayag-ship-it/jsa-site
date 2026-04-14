import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Joinville-le-Pont (94340) — JSA Expertise",
  description:
    "JSA Expertise accompagne les freelances de Joinville-le-Pont. Création SASU/EURL, comptabilité, optimisation fiscale. Cabinet basé à Charenton. RDV gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-joinville-le-pont",
  },
};

const FAQS = [
  {
    q: "Travaillez-vous avec des entrepreneurs de Joinville-le-Pont ?",
    a: "Oui, nous accompagnons régulièrement des freelances et entrepreneurs de Joinville-le-Pont. Notre cabinet est à Charenton-le-Pont, à 10 minutes environ. La majorité des échanges se font à distance par mail, téléphone ou visioconférence.",
  },
  {
    q: "Comment créer ma SASU depuis Joinville-le-Pont ?",
    a: "Tout se fait en ligne avec JSA Expertise. Premier rendez-vous de diagnostic (gratuit), puis rédaction des statuts, ouverture du compte bancaire professionnel, dépôt au greffe et suivi jusqu'au Kbis. Toutes les formalités sont gérées par votre expert-comptable.",
  },
  {
    q: "Quels sont vos délais de réponse ?",
    a: "Nous garantissons une réponse sous 24h ouvrées pour tous nos clients. Pas de standard, pas de boîte mail générique : vous avez accès directement à votre expert-comptable.",
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

export default function JoinvillePage() {
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
                  Expert-comptable à 10 min de Joinville
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Joinville-le-Pont : une ville d'entrepreneurs qui méritent un{" "}
                <span className="text-turquoise-500">expert-comptable digital</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Joinville-le-Pont attire une nouvelle génération d'entrepreneurs : des créatifs, des consultants, des fondateurs qui cherchent un cadre de vie agréable tout en gardant un pied dans l'économie numérique. JSA Expertise, basé à Charenton à 10 minutes, est exactement le cabinet qu'ils cherchent.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Digital, réactif, spécialisé freelances. Sans la rigidité d'un grand cabinet traditionnel.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
                  Prendre RDV gratuitement
                </Link>
                <Link href="/comptabilite-freelance" className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold px-7 py-3.5 rounded-full transition-colors">
                  Notre offre
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable proche de Joinville-le-Pont"
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

        {/* ── TISSU LOCAL ───────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Le tissu entrepreneurial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Pourquoi de plus en plus d'entrepreneurs s'installent à Joinville
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Joinville-le-Pont (94340) bénéficie d'un accès direct au RER A pour rejoindre Paris en moins de 20 minutes. Ce mix entre qualité de vie et accessibilité professionnelle attire des profils variés : développeurs web, designers, photographes professionnels, consultants en marketing digital.
              </p>
              <p>
                Ces freelances ont souvent des revenus variables d'un mois à l'autre. C'est précisément pour eux que JSA Expertise a développé une offre adaptée : comptabilité mensuelle légère, pilotage de trésorerie en temps réel via Tiime, et conseil fiscal qui tient compte des variations d'activité.
              </p>
            </div>
          </div>
        </section>

        {/* ── ÉTAPES CRÉATION ───────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Création d'entreprise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Créer son entreprise à Joinville-le-Pont : les étapes clés
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              Micro-entreprise ou société ? Pour un entrepreneur joinvillais qui démarre, la micro est un excellent tremplin. Dès que les revenus dépassent 30 à 40 000 € nets annuels, le passage en SASU devient pertinent. Votre expert-comptable projette votre situation sur 2 à 3 ans et choisit avec vous la structure la plus adaptée.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { step: "01", title: "Diagnostic", desc: "Analyse de votre situation et simulation comparative des statuts." },
                { step: "02", title: "Choix du statut", desc: "SASU, EURL ou micro : décision chiffrée, pas théorique." },
                { step: "03", title: "Création", desc: "Statuts, dépôt du capital, immatriculation, Kbis." },
                { step: "04", title: "Suivi mensuel", desc: "Comptabilité, Tiime, conseil dans la durée." },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                  <span className="text-3xl font-black text-turquoise-200 leading-none flex-shrink-0">{s.step}</span>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/comptabilite-freelance" className="text-turquoise-500 hover:underline font-semibold text-sm">
              Tout savoir sur la comptabilité freelance →
            </Link>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Ce qu'on fait pour vous
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-7">
              L'accompagnement complet de votre expert-comptable
            </h2>
            <ul className="space-y-4">
              <CheckItem><strong>Tenue comptable mensuelle</strong> synchronisée avec votre compte bancaire via Tiime. Chiffres en temps réel.</CheckItem>
              <CheckItem><strong>Déclarations de TVA</strong> traitées chaque mois ou trimestre. Aucune pénalité de retard.</CheckItem>
              <CheckItem><strong>Bilan et liasse fiscale</strong> annuels, présentés clairement pour que vous compreniez vos résultats.</CheckItem>
              <CheckItem><strong>Optimisation fiscale :</strong> stratégie salaire/dividendes, frais déductibles, épargne retraite.</CheckItem>
              <CheckItem><strong>Conseil illimité :</strong> votre expert-comptable répond sous 24h, en direct.</CheckItem>
            </ul>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Joinville-le-Pont</h2>
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
                { label: "Comptabilité freelance", href: "/comptabilite-freelance" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Saint-Maurice", href: "/expert-comptable-freelance-saint-maurice" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
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
