import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Charenton-le-Pont (94) — JSA Expertise",
  description:
    "JSA Expertise, cabinet d'expertise comptable basé à Charenton-le-Pont, spécialisé freelances et indépendants. Création SASU, comptabilité, optimisation fiscale. RDV gratuit.",
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
    a: "Absolument. Même si JSA Expertise fonctionne en 100% digital pour votre confort, nous organisons des rendez-vous physiques dans notre cabinet de Charenton-le-Pont. Le premier rendez-vous est toujours gratuit et sans engagement.",
  },
  {
    q: "Accompagnez-vous les freelances du Val-de-Marne ?",
    a: "Oui, c'est notre cœur de cible. Basé à Charenton-le-Pont en plein Val-de-Marne, JSA Expertise accompagne des centaines de freelances dans tout le 94 : Vincennes, Saint-Mandé, Saint-Maurice, Maisons-Alfort, Alfortville et bien d'autres communes.",
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Cabinet basé à Charenton-le-Pont
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Votre expert-comptable est{" "}
                <span className="text-turquoise-500">dans votre ville</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                JSA Expertise est installé à Charenton-le-Pont, à la frontière du Paris 12e et du Val-de-Marne. Pour les freelances et indépendants du 94, c'est un avantage rare : un expert-comptable spécialisé, réactif, accessible physiquement si besoin.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Charenton attire depuis quelques années un profil très particulier : cadres reconvertis en freelance, consultants IT, managers de transition. Nous avons construit notre offre exactement pour eux.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
                  Prendre RDV gratuitement
                </Link>
                <Link href="/#tarifs" className="border-2 border-turquoise-500 text-turquoise-500 hover:bg-turquoise-50 font-bold px-7 py-3.5 rounded-full transition-colors">
                  Notre offre
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-gray-500">
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
            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable à Charenton-le-Pont"
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
              Charenton, ville de freelances
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Pourquoi Charenton concentre autant d'indépendants
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Coincée entre le bois de Vincennes, la Seine et le périphérique, Charenton-le-Pont bénéficie d'une accessibilité exceptionnelle avec un cadre de vie résidentiel. Résultat : une forte concentration de cadres supérieurs qui ont franchi le pas de l'indépendance.
              </p>
              <p>
                Les profils que nous accompagnons le plus souvent : consultants en management ou transformation digitale, développeurs fullstack, directeurs marketing devenus indépendants. Ces professionnels ont besoin d'un expert-comptable qui comprend leur réalité, pas d'un généraliste qui les traite comme un artisan.
              </p>
              <p>
                La proximité avec Paris 12e crée aussi des enjeux fiscaux importants : optimisation de la rémunération, arbitrage salaire/dividendes, choix entre SASU et EURL. C'est notre spécialité.
              </p>
            </div>
          </div>
        </section>

        {/* ── POURQUOI CRÉER SA SASU ────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Création d'entreprise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Pourquoi créer sa SASU à Charenton-le-Pont ?
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                { title: "Une adresse valorisante", desc: "Charenton (94220) est sérieux, proche de Paris, sans les coûts du 75. Pour vos clients, c'est une adresse professionnelle crédible." },
                { title: "Accompagnement de proximité", desc: "Rédaction des statuts, ouverture du compte bancaire, dépôt au greffe : avec un expert-comptable au coin de la rue, vous ne le faites pas seul." },
                { title: "Optimisation fiscale immédiate", desc: "La SASU permet de combiner salaire et dividendes. Ce choix peut faire une différence de plusieurs milliers d'euros par an sur votre imposition réelle." },
                { title: "Suivi dans la durée", desc: "Un interlocuteur unique qui connaît votre dossier par cœur, de la création jusqu'à la cession éventuelle de votre société." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/#tarifs" className="text-turquoise-500 hover:underline font-semibold text-sm">
              Guide complet sur la comptabilité freelance →
            </Link>
          </div>
        </section>

        {/* ── NOS MISSIONS ──────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Nos missions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-7">
              Ce que votre expert-comptable fait pour vous
            </h2>
            <ul className="space-y-4">
              <CheckItem><strong>Tenue comptable complète :</strong> saisie, lettrage, rapprochement bancaire via Tiime. Vous n'ouvrez plus jamais un tableur.</CheckItem>
              <CheckItem><strong>Déclarations de TVA</strong> mensuelle ou trimestrielle, envoyées à temps, sans que vous ayez à y penser.</CheckItem>
              <CheckItem><strong>Bilan et liasse fiscale</strong> chaque année, avec dépôt des comptes au greffe. Votre dossier est carré.</CheckItem>
              <CheckItem><strong>Optimisation de rémunération :</strong> le bon mix salaire/dividendes pour maximiser votre revenu net. Souvent plusieurs milliers d'euros en jeu.</CheckItem>
              <CheckItem><strong>Conseil illimité</strong> par mail ou téléphone. Réponse sous 24h, toujours.</CheckItem>
            </ul>
            <div className="flex flex-wrap gap-5 mt-6">
              <Link href="/#tarifs" className="text-turquoise-500 hover:underline font-semibold text-sm">Comptabilité freelance →</Link>
              <Link href="/simulateur-charges" className="text-turquoise-500 hover:underline font-semibold text-sm">Simuler mes charges URSSAF →</Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Charenton-le-Pont</h2>
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
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
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
