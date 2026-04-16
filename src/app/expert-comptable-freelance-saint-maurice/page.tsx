import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  twitter: { card: 'summary_large_image' },
};

const FAQS = [
  {
    q: "Accompagnez-vous les professions libérales de Saint-Maurice ?",
    a: "Oui, les professions libérales font partie de nos clients réguliers. Nous connaissons les spécificités de leur comptabilité : BNC, déclaration 2035, cotisations Carpimko ou CARMF selon les cas. Qu'il s'agisse de consultants en santé, psychologues, ostéopathes ou médecins, nous avons l'expérience pour vous accompagner.",
  },
  {
    q: "Quelle différence entre SASU et EURL pour un indépendant de Saint-Maurice ?",
    a: "La SASU relève du régime général de la Sécurité Sociale (meilleure protection, cotisations plus élevées). L'EURL relève du régime TNS, avec des charges souvent allégées mais une couverture moins complète. Le meilleur choix dépend de vos revenus, de votre situation familiale et de vos objectifs. On fait le calcul ensemble lors d'un premier rendez-vous gratuit.",
  },
  {
    q: "Comment se passe le premier rendez-vous ?",
    a: "Il dure environ 45 minutes, en visioconférence ou en présentiel à Charenton-le-Pont (5 minutes de Saint-Maurice). On analyse votre situation, vos revenus, votre statut actuel et on vous présente des pistes concrètes. Vous repartez avec des réponses claires, pas un devis vague.",
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Cabinet à 5 min de Saint-Maurice
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Un expert-comptable qui connaît les{" "}
                <span className="text-turquoise-500">besoins spécifiques des indépendants de Saint-Maurice</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Saint-Maurice, commune calme du Val-de-Marne en bord de Marne, accueille un nombre important de professions libérales et d'indépendants aux besoins comptables variés. JSA Expertise, basé à Charenton-le-Pont à 5 minutes, est l'expert-comptable spécialisé qui comprend ces spécificités.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Que vous soyez consultant, professionnel de santé libéral ou freelance tech, votre comptabilité mérite une approche dédiée. Et le choix entre SASU et EURL — souvent sous-estimé — peut changer significativement votre revenu net chaque mois.
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
                  alt="Joël Sayag, expert-comptable proche de Saint-Maurice"
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
              Saint-Maurice et ses indépendants
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Une commune à la croisée des professions indépendantes
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saint-Maurice (94410) se distingue par la diversité de ses indépendants. La proximité avec l'Hôpital National de Saint-Maurice crée un écosystème particulier de professionnels de santé qui exercent en libéral : médecins, psychologues, orthophonistes, rééducateurs.
              </p>
              <p>
                À côté de ce tissu médico-social, on trouve des consultants spécialisés dans la santé numérique, la formation professionnelle et le conseil aux structures sociales. Des profils très qualifiés, avec des revenus élevés et des obligations déclaratives spécifiques que JSA Expertise maîtrise parfaitement.
              </p>
            </div>
          </div>
        </section>

        {/* ── QUEL STATUT CHOISIR ───────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Statut juridique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Profession libérale ou freelance à Saint-Maurice : quel statut choisir ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              La réponse dépend de votre secteur, de vos revenus et de vos objectifs. Ce qu'on observe souvent : l'EURL est sous-estimée. Avec le régime TNS, les charges sont moins élevées qu'en SASU — ce qui peut être déterminant selon votre niveau de CA. La SASU a ses avantages propres (protection sociale, dividendes), mais ce n'est pas automatiquement le meilleur choix. JSA Expertise vous propose une simulation comparative chiffrée dès le premier rendez-vous.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-turquoise-500">
                <h3 className="font-extrabold text-gray-900 mb-3">Professions libérales réglementées</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <CheckItem>BNC et régime déclaration contrôlée (2035)</CheckItem>
                  <CheckItem>Caisses de retraite spécifiques (CARMF, Carpimko)</CheckItem>
                  <CheckItem>Possibilité de créer une SEL ou SELARL</CheckItem>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-turquoise-300">
                <h3 className="font-extrabold text-gray-900 mb-3">Freelances et consultants</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <CheckItem>Micro-entreprise jusqu'aux seuils BIC/BNC</CheckItem>
                  <CheckItem>SASU (flexibilité, IS, flat tax)</CheckItem>
                  <CheckItem>EURL (régime TNS, charges allégées)</CheckItem>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Saint-Maurice</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE ──────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Actualités", href: "/blog" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="bg-white border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center">{l.label}</Link>
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
