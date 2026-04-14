import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Saint-Maurice (94410) — JSA Expertise",
  description:
    "Expert-comptable spécialisé freelances à Saint-Maurice (94). JSA Expertise vous accompagne : création SASU, comptabilité, optimisation. Cabinet à Charenton, RDV gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-saint-maurice",
  },
};

const FAQS = [
  {
    q: "Accompagnez-vous les professions libérales de Saint-Maurice ?",
    a: "Oui, les professions libérales font partie de nos clients réguliers. Qu'il s'agisse de consultants en santé, de psychologues, d'ostéopathes, de kinésithérapeutes ou de médecins ayant une activité libérale, nous connaissons les spécificités de leur comptabilité : recettes non commerciales (BNC), déclaration 2035, cotisations Carpimko ou CARMF selon les cas. N'hésitez pas à nous contacter.",
  },
  {
    q: "Quelle différence entre SASU et EURL pour un indépendant de Saint-Maurice ?",
    a: "La SASU et l'EURL sont toutes deux des structures unipersonnelles adaptées aux indépendants, mais elles diffèrent sur plusieurs points clés. La SASU relève du régime général de la Sécurité Sociale (meilleure protection sociale, cotisations plus élevées). L'EURL relève du régime des indépendants (TNS), avec des charges souvent moins élevées mais une couverture moins complète. Le meilleur choix dépend de votre niveau de revenus, de votre situation familiale et de vos objectifs. On fait le calcul ensemble.",
  },
  {
    q: "Comment se passe le premier rendez-vous avec JSA Expertise ?",
    a: "Le premier rendez-vous est gratuit et sans engagement. Il dure environ 45 minutes, en visioconférence ou en présentiel dans notre cabinet de Charenton-le-Pont (à 5 minutes de Saint-Maurice). On analyse votre situation actuelle, vos revenus, votre statut juridique actuel, et on vous présente des pistes concrètes pour optimiser votre comptabilité et votre fiscalité. Vous repartez avec des réponses claires, pas un devis vague.",
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

export default function SaintMauricePage() {
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
                Cabinet à 5 min de Saint-Maurice
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Les indépendants de Saint-Maurice ont des besoins comptables{" "}
              <span className="text-turquoise-500">spécifiques</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Saint-Maurice, commune tranquille du Val-de-Marne en bord de Marne, accueille un nombre important de professions libérales et d'indépendants aux besoins comptables variés. JSA Expertise, basé à Charenton-le-Pont à 5 minutes, est le cabinet spécialisé qui comprend ces spécificités.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Que vous soyez consultant, professionnel de santé libéral, coach ou freelance tech, votre comptabilité ne ressemble pas à celle d'un commerçant ou d'un artisan. Elle mérite une approche dédiée.
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

        {/* ── TISSU LOCAL ───────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Saint-Maurice et ses indépendants
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Une commune à la croisée des professions indépendantes
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saint-Maurice (94410) se distingue des autres communes du Val-de-Marne par la diversité de ses indépendants. La proximité avec l'Hôpital National de Saint-Maurice crée un écosystème particulier de professionnels de santé — médecins, psychologues, orthophonistes, rééducateurs — qui exercent en libéral ou en cabinet de groupe.
              </p>
              <p>
                À côté de ce tissu médico-social, Saint-Maurice accueille aussi des consultants spécialisés dans les secteurs de la santé numérique, de la formation professionnelle et du conseil aux structures médico-sociales. Un profil d'indépendant souvent très qualifié, avec des revenus élevés et des obligations déclaratives particulières.
              </p>
              <p>
                JSA Expertise travaille avec ces deux types de profils. Pour les professions réglementées (BNC, régime de déclaration contrôlée), comme pour les sociétés (SASU, EURL, SELARL), nous avons l'expérience et les outils nécessaires pour un accompagnement sans faille.
              </p>
            </div>
          </div>
        </section>

        {/* ── QUEL STATUT CHOISIR ───────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Statut juridique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Profession libérale ou freelance à Saint-Maurice : quel statut choisir ?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Cette question revient systématiquement lors de nos premiers rendez-vous avec des indépendants de Saint-Maurice. Et la réponse honnête est : ça dépend. Des variables comme votre secteur d'activité, vos revenus actuels et prévus, votre situation familiale, votre appétence pour la complexité administrative, et vos objectifs patrimoniaux à moyen terme font toute la différence.
              </p>
              <p>
                Pour un professionnel de santé libéral débutant, la déclaration en BNC avec un régime micro peut être suffisante. Pour un consultant senior facturant 150 000 € par an, rester en micro-entreprise serait une erreur coûteuse — la SASU ou l'EURL s'impose clairement.
              </p>
              <p>
                JSA Expertise vous propose une simulation chiffrée : on compare votre situation actuelle avec ce qu'elle serait dans chaque statut envisageable, en euros nets dans votre poche. Pas de discours théorique — des chiffres concrets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-turquoise-500">
                <h3 className="font-extrabold text-gray-900 mb-3">Professions libérales réglementées</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <CheckItem>BNC (Bénéfices Non Commerciaux)</CheckItem>
                  <CheckItem>Régime déclaration contrôlée (2035)</CheckItem>
                  <CheckItem>Caisses de retraite spécifiques (CARMF, Carpimko...)</CheckItem>
                  <CheckItem>Possibilité de créer une SEL ou SELARL</CheckItem>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-turquoise-300">
                <h3 className="font-extrabold text-gray-900 mb-3">Freelances et consultants</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <CheckItem>Micro-entreprise (jusqu'aux seuils BIC/BNC)</CheckItem>
                  <CheckItem>SASU (flexibilité maximale, IS, flat tax)</CheckItem>
                  <CheckItem>EURL (régime TNS, charges allégées)</CheckItem>
                  <CheckItem>Portage salarial (si activité ponctuelle)</CheckItem>
                </ul>
              </div>
            </div>
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
                FAQ — Indépendants à Saint-Maurice
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
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Nos pages locales</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Comptabilité freelance", href: "/comptabilite-freelance" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
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
