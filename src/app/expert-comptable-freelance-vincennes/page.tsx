import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Vincennes (94300) — JSA Expertise",
  description:
    "Cabinet JSA Expertise à 5 min de Vincennes. Expert-comptable spécialisé freelances, consultants et indépendants. Création SASU/EURL, compta, fiscalité. RDV gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-vincennes",
  },
};

const FAQS = [
  {
    q: "Comment un freelance de Vincennes peut-il travailler avec JSA Expertise ?",
    a: "Tout se fait en ligne : partage de documents via notre espace client Tiime, échanges par mail ou téléphone, visioconférences quand nécessaire. Pour les clients qui préfèrent un rendez-vous physique, notre cabinet de Charenton-le-Pont est à 5 minutes de Vincennes en voiture ou en métro (ligne 1). Zéro contrainte, 100% flexible.",
  },
  {
    q: "Quels sont les freelances que vous accompagnez à Vincennes ?",
    a: "Nous travaillons avec un grand nombre de freelances vincennois : consultants IT et en management, développeurs, designers, directeurs de projet indépendants, coachs et formateurs, mais aussi des professions libérales comme les avocats, architectes ou consultants RH. Le profil type à Vincennes est un cadre supérieur reconverti en indépendant, avec des revenus significatifs et des enjeux d'optimisation fiscale importants.",
  },
  {
    q: "SASU ou EURL pour un consultant basé à Vincennes ?",
    a: "Le choix dépend de votre situation personnelle, de vos revenus, et de vos objectifs patrimoniaux. En général, la SASU est préférée pour sa flexibilité sur la rémunération (salaire + dividendes) et sa protection sociale, tandis que l'EURL convient mieux à certains profils cherchant une gestion simplifiée. On fait le point ensemble lors d'un premier rendez-vous gratuit et on vous présente une simulation chiffrée.",
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

export default function VincennesPage() {
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
                À 5 minutes de Vincennes
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Les freelances vincennois méritent un comptable qui{" "}
              <span className="text-turquoise-500">comprend leur activité</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Vincennes est l'une des villes les plus prisées des cadres supérieurs et consultants indépendants de l'Est parisien. Notre cabinet JSA Expertise, basé à Charenton-le-Pont à 5 minutes, est spécialisé dans l'accompagnement des freelances — précisément pour des profils comme les vôtres.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              100% digital, zéro déplacement obligatoire. On gère votre comptabilité, vos déclarations et votre optimisation fiscale depuis votre domicile vincennois, avec une réactivité que les grands cabinets ne peuvent pas offrir.
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
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-500">
              {["5 min de Vincennes", "100% digital", "Réponse sous 24h"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-turquoise-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROFIL FREELANCE VINCENNOIS ───────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Le freelance vincennois
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Vincennes : la ville des consultants qui ont choisi leur qualité de vie
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vincennes attire un profil très particulier d'indépendant. Avec le Bois de Vincennes aux portes, des commerces de qualité, et le métro ligne 1 pour rejoindre Paris en quelques minutes, la ville offre ce que beaucoup de cadres supérieurs recherchent après des années de stress parisien : un cadre de vie agréable sans sacrifier l'accès aux opportunités professionnelles.
              </p>
              <p>
                Les consultants IT, managers de transition, experts en stratégie ou en RH qui ont fait le choix de l'indépendance s'installent à Vincennes avec une ambition claire : exercer leur activité en toute liberté tout en optimisant leur situation financière. C'est exactement là qu'intervient JSA Expertise — pour faire en sorte que leur structure juridique et leur comptabilité soient à la hauteur de leurs revenus.
              </p>
              <p>
                Un freelance consultant à Vincennes facturant 8 000 à 15 000 € par mois peut, avec la bonne structure et la bonne stratégie de rémunération, économiser plusieurs milliers d'euros d'impôts et de charges par an. Ce n'est pas de l'optimisation agressive — c'est simplement utiliser correctement ce que la loi permet.
              </p>
            </div>
          </div>
        </section>

        {/* ── CRÉER SA SASU À VINCENNES ─────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Création d'entreprise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Créer sa SASU à Vincennes : ce qu'il faut savoir
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                La SASU (Société par Actions Simplifiée Unipersonnelle) est le statut de prédilection des freelances vincennois à revenus élevés. Pourquoi ? Parce qu'elle permet de dissocier salaire et dividendes, d'optimiser les cotisations sociales, et de se protéger avec le régime général de la Sécurité Sociale.
              </p>
              <p>
                Créer sa SASU à Vincennes ne présente aucune complexité particulière sur le plan administratif — l'adresse de siège social peut être votre domicile vincennois ou une adresse de domiciliation. En revanche, les décisions à prendre lors de la création (choix de l'IS vs IR, niveau de capital, rédaction des statuts) auront des conséquences concrètes sur votre fiscalité pendant des années.
              </p>
              <p>
                JSA Expertise vous accompagne de A à Z : simulation chiffrée SASU vs micro-entreprise, rédaction des statuts, immatriculation, ouverture du compte bancaire et premier bilan prévisionnel. Tout est fait dans les règles, sans mauvaises surprises.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <CheckItem>Simulation personnalisée SASU vs EURL vs micro-entreprise</CheckItem>
              <CheckItem>Rédaction des statuts adaptés à votre activité</CheckItem>
              <CheckItem>Dépôt du capital et immatriculation au greffe</CheckItem>
              <CheckItem>Accompagnement pour l'ouverture du compte pro</CheckItem>
              <CheckItem>Mise en place de la comptabilité dès le premier mois</CheckItem>
            </ul>
            <Link href="/comptabilite-freelance" className="text-turquoise-500 hover:underline font-semibold text-sm">
              → Guide complet : comptabilité pour freelances
            </Link>
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
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Questions fréquentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                FAQ — Freelances à Vincennes
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <h3 className="font-extrabold text-gray-900 mb-3 text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE INTERNE ──────────────────────────── */}
        <section className="bg-[#F1F8EA] py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Aller plus loin</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Comptabilité freelance", href: "/comptabilite-freelance" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Cabinet à Charenton", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Retour accueil", href: "/" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="bg-white border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center"
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
