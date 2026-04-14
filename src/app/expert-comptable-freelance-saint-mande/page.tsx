import type { Metadata } from "next";
import Link from "next/link";
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
};

const FAQS = [
  {
    q: "Travaillez-vous avec des freelances de Saint-Mandé ?",
    a: "Oui, nous accompagnons régulièrement des freelances et indépendants basés à Saint-Mandé. Notre cabinet est situé à Charenton-le-Pont, à 10 minutes en voiture et facilement accessible en transports. Mais dans la majorité des cas, tout se fait en ligne — vous n'avez pas besoin de vous déplacer.",
  },
  {
    q: "Comment optimiser ma rémunération en SASU depuis Saint-Mandé ?",
    a: "L'optimisation de rémunération en SASU repose sur le bon dosage entre salaire et dividendes. Le salaire génère des charges sociales mais ouvre des droits (retraite, arrêts maladie). Les dividendes sont soumis à la flat tax (30%) ou au barème IR selon votre situation. On calcule votre scénario optimal lors d'un premier rendez-vous gratuit, en tenant compte de votre chiffre d'affaires, de vos charges personnelles et de vos objectifs patrimoniaux.",
  },
  {
    q: "Puis-je tout faire en ligne depuis Saint-Mandé ?",
    a: "Absolument. JSA Expertise est un cabinet 100% digital. Transmission des documents via Tiime, échanges par mail et téléphone, signature électronique des bilans. Pour les freelances de Saint-Mandé qui ont une vie bien remplie, c'est la solution idéale : zéro déplacement, zéro papier, zéro perte de temps.",
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Expert-comptable proche de Saint-Mandé
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Saint-Mandé, ville de freelances{" "}
              <span className="text-turquoise-500">discrets qui ont besoin d'un comptable réactif</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Saint-Mandé est une ville à part. Calme, résidentielle, coincée entre Vincennes et le Paris 12e, elle abrite une population de professionnels qui travaillent souvent dans l'ombre — consultants, professions libérales, indépendants de tous secteurs qui ont choisi la qualité de vie plutôt que l'agitation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              JSA Expertise, basé à 10 minutes à Charenton-le-Pont, est le cabinet comptable spécialisé freelances qui leur correspond : efficace, disponible, sans bureaucratie inutile.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
              >
                Prendre RDV gratuitement
              </Link>
              <Link
                href="/comptabilite-freelance"
                className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold text-lg px-8 py-4 rounded-full transition-colors"
              >
                Notre offre comptable
              </Link>
            </div>
          </div>
        </section>

        {/* ── LE FREELANCE À SAINT-MANDÉ ────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Votre profil
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Le profil type du freelance à Saint-Mandé
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saint-Mandé (94160) concentre une population atypique dans le paysage du Val-de-Marne. Les habitants sont souvent des professionnels bien établis qui ont choisi cette ville pour sa tranquillité, ses espaces verts et sa proximité immédiate avec Paris sans les inconvénients de la capitale. Parmi eux, une part croissante d'indépendants et de professions libérales.
              </p>
              <p>
                On y croise des consultants en stratégie ou en organisation qui travaillent pour des grands groupes, des coaches certifiés qui accompagnent des dirigeants, des avocats ayant quitté les structures pour s'installer à leur compte, des experts-métiers dans la santé, la finance ou les ressources humaines. Tous ont en commun un niveau d'expertise élevé, une clientèle exigeante, et le besoin d'une comptabilité irréprochable.
              </p>
              <p>
                Ces freelances ne cherchent pas un comptable qui répond en 3 jours et leur envoie des bilans incompréhensibles. Ils veulent un expert disponible, qui parle clairement, et qui les aide réellement à optimiser leur situation. C'est la promesse de JSA Expertise.
              </p>
            </div>
          </div>
        </section>

        {/* ── OPTIMISATION FISCALE À SAINT-MANDÉ ────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Fiscalité freelance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Optimiser sa fiscalité quand on est freelance à Saint-Mandé
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                L'optimisation fiscale d'un freelance à Saint-Mandé repose sur plusieurs leviers que beaucoup méconnaissent encore. Le premier et le plus puissant : le choix du bon statut juridique. Une micro-entreprise qui dépasse les seuils ou une structure mal adaptée peut coûter des milliers d'euros chaque année.
              </p>
              <p>
                En SASU, le dirigeant peut choisir de se verser un salaire modéré (réduisant les charges sociales) et de distribuer une partie de ses bénéfices sous forme de dividendes soumis à la flat tax à 30%. Cette stratégie, bien calibrée, peut représenter une économie substantielle par rapport à un tout-salaire ou une micro-entreprise.
              </p>
              <p>
                Viennent ensuite les charges déductibles : frais professionnels, véhicule, bureau à domicile, formations, équipements... Autant de postes que les freelances sous-estiment souvent. JSA Expertise fait le tour complet de votre situation pour s'assurer que rien n'est oublié.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Choix du statut", desc: "SASU, EURL ou micro : on choisit ce qui vous rapporte le plus net." },
                { title: "Stratégie salaire/dividendes", desc: "Le bon dosage chaque année selon vos revenus et vos projets." },
                { title: "Frais déductibles", desc: "Aucune charge déductible oubliée, audit complet de vos dépenses." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/simulateur-charges" className="text-turquoise-500 hover:underline font-semibold text-sm">
                → Simuler mes charges et cotisations →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CE QU'ON PREND EN CHARGE ──────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Nos services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-8">
              Ce qu'on prend en charge pour vous
            </h2>
            <ul className="space-y-4">
              <CheckItem>
                <strong>Comptabilité mensuelle</strong> — saisie, rapprochement, lettrage. Vous avez toujours une vision claire de votre trésorerie.
              </CheckItem>
              <CheckItem>
                <strong>TVA et déclarations fiscales</strong> — tout est envoyé à temps, sans que vous ayez à y penser.
              </CheckItem>
              <CheckItem>
                <strong>Bilan annuel certifié</strong> — obligatoire en société, préparé avec soin pour que vous compreniez vos chiffres.
              </CheckItem>
              <CheckItem>
                <strong>Simulation de rémunération</strong> chaque année pour ajuster votre mix salaire/dividendes selon l'évolution de votre activité.
              </CheckItem>
              <CheckItem>
                <strong>Conseil en temps réel</strong> — un vrai expert vous répond sous 24h, pas un assistant.
              </CheckItem>
            </ul>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Questions fréquentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                FAQ — Freelances à Saint-Mandé
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-3 text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE INTERNE ──────────────────────────── */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Nos pages locales</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Comptabilité freelance", href: "/comptabilite-freelance" },
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Prenons rendez-vous
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Premier rendez-vous gratuit et sans engagement. On analyse votre situation et on vous conseille le meilleur statut.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#00B6DE] hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                Prendre RDV gratuitement
              </Link>
              <Link
                href="tel:+33660735546"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-colors"
              >
                06 60 73 55 46
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-6">Réponse sous 24h garantie</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
