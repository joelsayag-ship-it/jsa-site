import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Charenton-le-Pont (94) — JSA Expertise",
  description:
    "JSA Expertise, cabinet comptable basé à Charenton-le-Pont, spécialisé freelances et indépendants. Création SASU, comptabilité, optimisation fiscale. RDV gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-charenton-le-pont",
  },
};

const FAQS = [
  {
    q: "Où est situé le cabinet JSA Expertise à Charenton-le-Pont ?",
    a: "Le cabinet JSA Expertise est situé au 10 rue du Président Kennedy à Charenton-le-Pont (94220), à deux pas du métro ligne 8 (Charenton-Écoles) et du RER A. Vous pouvez nous rendre visite sur rendez-vous du lundi au vendredi.",
  },
  {
    q: "Puis-je venir vous rencontrer physiquement à Charenton ?",
    a: "Absolument. Même si JSA Expertise fonctionne en 100% digital pour votre confort, nous organisons des rendez-vous physiques dans notre cabinet de Charenton-le-Pont pour tous ceux qui préfèrent un échange en face à face. Le premier rendez-vous est toujours gratuit et sans engagement.",
  },
  {
    q: "Accompagnez-vous les freelances du Val-de-Marne ?",
    a: "Oui, c'est même notre cœur de cible. Basé à Charenton-le-Pont en plein Val-de-Marne, JSA Expertise accompagne des centaines de freelances, consultants et indépendants dans tout le 94 : Vincennes, Saint-Mandé, Saint-Maurice, Maisons-Alfort, Alfortville et bien d'autres communes du département.",
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

export default function CharentonPage() {
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
                Cabinet basé à Charenton-le-Pont
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Votre expert-comptable est{" "}
              <span className="text-turquoise-500">dans votre ville</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              JSA Expertise est installé à Charenton-le-Pont. Pas à Paris, pas dans une autre région — littéralement dans votre ville. Pour les freelances et indépendants du 94, c'est un avantage rare : un expert-comptable spécialisé, réactif, et accessible à pied si besoin.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Charenton occupe une position unique : à la frontière du Paris 12e et du Val-de-Marne, la ville attire depuis quelques années un profil particulier de professionnel — le cadre reconverti en freelance. Consultant IT, manager de transition, designer, chef de projet indépendant : ils choisissent Charenton pour la qualité de vie, les loyers encore raisonnables et l'accès immédiat à Paris. JSA Expertise est né pour les servir.
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
                Voir notre offre comptable
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-500">
              {["Cabinet physique à Charenton", "Premier RDV gratuit", "Réponse sous 24h"].map((item) => (
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

        {/* ── LE TISSU FREELANCE DE CHARENTON ──────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Charenton, ville de freelances
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Pourquoi Charenton-le-Pont concentre autant d'indépendants
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Charenton-le-Pont n'est pas une ville comme les autres. Coincée entre le bois de Vincennes, la Seine et le périphérique, elle bénéficie d'une accessibilité exceptionnelle tout en conservant un cadre de vie résidentiel. Résultat : une forte concentration de cadres supérieurs qui ont franchi le pas de l'indépendance ces dernières années.
              </p>
              <p>
                Les profils que nous accompagnons le plus souvent à Charenton : des consultants en management ou en transformation digitale qui ont quitté les grands cabinets, des développeurs fullstack qui préfèrent la liberté du freelance, des directeurs marketing ou commerciaux devenus indépendants après 15 ans de salariat. Ces professionnels partagent un point commun : ils ont besoin d'un expert-comptable qui comprend leur réalité, pas d'un généraliste qui les traite comme un artisan ou un commerçant.
              </p>
              <p>
                La proximité avec Paris 12e facilite aussi les déplacements chez les clients — beaucoup de nos clients Charennais travaillent dans des grands groupes ou des ESN situés à Bercy, dans le quartier de la Bastille ou autour de la Gare de Lyon. Cette géographie crée un profil de freelance particulier, souvent avec des revenus élevés et des enjeux fiscaux importants : optimisation de la rémunération, arbitrage salaire/dividendes, choix entre SASU et EURL.
              </p>
            </div>
          </div>
        </section>

        {/* ── POURQUOI CRÉER SA SASU À CHARENTON ───────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Création d'entreprise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Pourquoi créer sa SASU à Charenton-le-Pont ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">Une adresse valorisante</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Charenton-le-Pont (94220) est une adresse professionnelle sérieuse, à deux pas de Paris, sans les coûts exorbitants du 75. Pour vos clients, votre adresse de siège social dans le Val-de-Marne n'est pas un frein — beaucoup de grandes entreprises sont elles-mêmes implantées en banlieue proche.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">Un accompagnement de proximité</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Créer sa SASU sans se tromper dès le départ demande une expertise pointue : choix du régime fiscal, rédaction des statuts, ouverture du compte bancaire professionnel, dépôt au greffe. Avec JSA Expertise au coin de la rue, vous ne le faites pas seul.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">Optimisation fiscale immédiate</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  La SASU permet de combiner salaire et dividendes pour maximiser votre revenu net. À Charenton comme partout, ce choix peut faire une différence de plusieurs milliers d'euros par an sur votre imposition réelle. On calcule ça pour vous dès le premier RDV.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">Continuité du suivi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L'avantage d'un cabinet local, c'est la relation dans la durée. JSA Expertise vous accompagne de la création jusqu'à la cession éventuelle de votre société, avec un interlocuteur unique qui connaît votre dossier par cœur.
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Vous hésitez entre SASU et EURL ?{" "}
              <Link href="/comptabilite-freelance" className="text-turquoise-500 hover:underline font-semibold">
                Consultez notre guide complet sur la comptabilité freelance →
              </Link>
            </p>
          </div>
        </section>

        {/* ── CE QU'ON FAIT POUR VOUS ───────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Nos missions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-8">
              Ce que JSA Expertise fait pour les freelances de Charenton
            </h2>
            <ul className="space-y-4 mb-8">
              <CheckItem>
                <strong>Tenue comptable complète</strong> — saisie, lettrage, rapprochement bancaire via Tiime. Vous n'ouvrez plus jamais un tableur Excel pour votre compta.
              </CheckItem>
              <CheckItem>
                <strong>Déclarations de TVA</strong> mensuelle ou trimestrielle selon votre régime. Envoi automatique, zéro retard, zéro pénalité.
              </CheckItem>
              <CheckItem>
                <strong>Bilan et liasse fiscale</strong> chaque année, avec dépôt des comptes au greffe du tribunal de commerce. Votre dossier est carré et à jour.
              </CheckItem>
              <CheckItem>
                <strong>Optimisation de rémunération</strong> — le bon mix salaire / dividendes pour maximiser votre revenu net en toute légalité. C'est souvent là que se joue plusieurs milliers d'euros.
              </CheckItem>
              <CheckItem>
                <strong>Conseil illimité</strong> par mail ou téléphone. Vous avez une question sur une note de frais, un contrat client, une TVA intracommunautaire ? On répond sous 24h, toujours.
              </CheckItem>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/comptabilite-freelance" className="text-turquoise-500 hover:underline font-semibold text-sm">
                → Tout sur la comptabilité freelance
              </Link>
              <Link href="/simulateur-charges" className="text-turquoise-500 hover:underline font-semibold text-sm">
                → Simuler mes charges URSSAF
              </Link>
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
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Questions fréquentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                FAQ — Expert-comptable à Charenton
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
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Aller plus loin</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Comptabilité freelance", href: "/comptabilite-freelance" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
                { label: "Retour accueil", href: "/" },
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
