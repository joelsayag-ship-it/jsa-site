import type { Metadata } from "next";
import Link from "next/link";
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
    a: "Oui, nous accompagnons régulièrement des entrepreneurs et freelances de Joinville-le-Pont. Notre cabinet est à Charenton-le-Pont, à environ 10 minutes de Joinville. Mais la majorité de nos échanges se font à distance — par mail, téléphone ou visioconférence — ce qui convient parfaitement aux entrepreneurs actifs qui n'ont pas le temps de se déplacer.",
  },
  {
    q: "Comment créer ma SASU depuis Joinville-le-Pont ?",
    a: "Créer une SASU depuis Joinville-le-Pont se fait intégralement en ligne avec JSA Expertise. On commence par un rendez-vous de diagnostic (gratuit), puis on rédige vos statuts, on ouvre votre compte bancaire professionnel, on dépose votre dossier au greffe et on vous accompagne jusqu'à réception de votre Kbis. Toutes les formalités sont gérées par notre équipe. Vous, vous vous concentrez sur votre activité.",
  },
  {
    q: "Quels sont vos délais de réponse ?",
    a: "Nous garantissons une réponse sous 24h ouvrées pour toutes les demandes de nos clients actifs. Pour les premières prises de contact, nous répondons en général dans la journée. Pas de standard, pas de boîte mail générique — vous avez accès directement à votre expert-comptable.",
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Cabinet digital à 10 min de Joinville
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Joinville-le-Pont,{" "}
              <span className="text-turquoise-500">ville d'entrepreneurs qui ont besoin d'un comptable digital</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Joinville-le-Pont vit une transformation silencieuse. Longtemps connue pour ses bords de Marne et ses guinguettes, la ville attire depuis quelques années une nouvelle génération d'entrepreneurs — des créatifs, des consultants, des fondateurs de petites structures qui cherchent un cadre de vie agréable tout en gardant un pied dans l'économie numérique.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              JSA Expertise, basé à Charenton-le-Pont à 10 minutes, est exactement le cabinet qu'ils cherchent : digital, réactif, spécialisé freelances, sans rigidité d'un grand cabinet traditionnel.
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

        {/* ── JOINVILLE ET SES ENTREPRENEURS ───────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Le tissu entrepreneurial local
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Pourquoi de plus en plus d'entrepreneurs s'installent à Joinville
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Joinville-le-Pont (94340) bénéficie d'une situation géographique idéale en bord de Marne, avec un accès direct au RER A pour rejoindre Paris en moins de 20 minutes. Ce mix entre qualité de vie et accessibilité professionnelle attire une population active de plus en plus diversifiée.
              </p>
              <p>
                Les entrepreneurs qu'on accompagne à Joinville sont souvent des profils créatifs ou techniques : développeurs web et mobiles qui travaillent en remote pour des clients parisiens ou internationaux, designers graphiques et UX, photographes et vidéastes professionnels, mais aussi des consultants en communication, en marketing digital ou en formation. Tous ont en commun un modèle économique basé sur la prestation intellectuelle et des revenus parfois très variables d'un mois à l'autre.
              </p>
              <p>
                C'est précisément pour ces profils que JSA Expertise a développé une offre adaptée : une comptabilité mensuelle légère, un pilotage en temps réel de la trésorerie via Tiime, et un conseil fiscal qui tient compte des variations de revenus.
              </p>
            </div>
          </div>
        </section>

        {/* ── CRÉER SON ENTREPRISE À JOINVILLE ─────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Création d'entreprise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Créer son entreprise à Joinville-le-Pont : les étapes clés
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Lancer son activité à Joinville-le-Pont commence souvent par une question simple : micro-entreprise ou société ? Pour beaucoup d'entrepreneurs joinvillais qui débutent avec quelques clients, la micro-entreprise est un excellent point de départ. Simple, peu coûteuse, elle permet de tester son activité sans risque.
              </p>
              <p>
                Mais dès que les revenus dépassent 30 à 40 000 € nets annuels, ou que le développement de l'activité nécessite une image plus professionnelle, le passage en société devient pertinent. C'est là que JSA Expertise intervient : on analyse votre situation actuelle, on projette vos revenus sur 2 à 3 ans, et on choisit ensemble la structure la plus adaptée.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { step: "01", title: "Diagnostic", desc: "Analyse de votre situation, de vos revenus et de vos objectifs. Simulation comparative des différents statuts." },
                { step: "02", title: "Choix du statut", desc: "SASU, EURL, micro ou association : on valide ensemble la meilleure option avec des chiffres à l'appui." },
                { step: "03", title: "Création", desc: "Rédaction des statuts, dépôt du capital, immatriculation au greffe et obtention du Kbis." },
                { step: "04", title: "Suivi mensuel", desc: "Mise en place de la comptabilité, accès à Tiime, et accompagnement dans la durée." },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                  <span className="text-3xl font-black text-turquoise-200 leading-none">{s.step}</span>
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/comptabilite-freelance" className="text-turquoise-500 hover:underline font-semibold text-sm">
              → Tout savoir sur la comptabilité freelance
            </Link>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Ce qu'on fait pour vous
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-8">
              L'accompagnement complet pour les freelances de Joinville
            </h2>
            <ul className="space-y-4">
              <CheckItem>
                <strong>Tenue comptable mensuelle</strong> synchronisée avec votre compte bancaire via Tiime. Vous voyez vos chiffres en temps réel.
              </CheckItem>
              <CheckItem>
                <strong>Déclarations de TVA</strong> traitées chaque mois ou trimestre selon votre régime. Aucune pénalité de retard.
              </CheckItem>
              <CheckItem>
                <strong>Bilan et liasse fiscale</strong> annuels, présentés clairement pour que vous compreniez réellement votre situation financière.
              </CheckItem>
              <CheckItem>
                <strong>Optimisation fiscale</strong> — stratégie salaire/dividendes, frais déductibles, épargne retraite : on maximise votre revenu net.
              </CheckItem>
              <CheckItem>
                <strong>Accompagnement juridique</strong> — modifications de statuts, augmentation de capital, embauche du premier salarié : on est là.
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
                FAQ — Entrepreneurs à Joinville-le-Pont
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
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Saint-Maurice", href: "/expert-comptable-freelance-saint-maurice" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
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
