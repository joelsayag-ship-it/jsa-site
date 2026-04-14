import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Paris 12e — JSA Expertise",
  description:
    "Expert-comptable spécialisé freelances dans le 12e arrondissement de Paris. JSA Expertise, cabinet basé à Charenton, limitrophe Paris 12. Création SASU, compta, fiscalité.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-paris-12",
  },
};

const FAQS = [
  {
    q: "Êtes-vous proche du Paris 12e ?",
    a: "Oui, notre cabinet JSA Expertise est situé à Charenton-le-Pont, commune immédiatement limitrophe du 12e arrondissement de Paris. Nous sommes littéralement de l'autre côté du périphérique, à 5 à 10 minutes en voiture ou en métro (ligne 8, station Charenton-Écoles). Les freelances du 12e viennent parfois nous rendre visite, mais la grande majorité de notre collaboration se fait à distance.",
  },
  {
    q: "Accompagnez-vous les startups et freelances de Bercy ?",
    a: "Absolument. Le quartier Bercy Village et ses alentours concentrent une densité remarquable de freelances tech, de startups en amorçage et d'indépendants du numérique. Nous accompagnons aussi bien les solo-entrepreneurs qui démarrent que des structures plus établies avec quelques salariés. Notre connaissance du tissu économique du 12e nous permet de vous conseiller avec précision sur votre stratégie de développement.",
  },
  {
    q: "Comment passer de micro-entreprise à SASU dans le 12e ?",
    a: "Le passage de micro-entreprise à SASU suit plusieurs étapes : décision de fermeture de la micro, création de la SASU (rédaction des statuts, dépôt du capital, immatriculation), transfert éventuel des contrats clients, et mise en place de la nouvelle comptabilité. JSA Expertise gère l'intégralité du processus. La transition peut se faire en quelques semaines, sans interruption de votre activité.",
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

export default function Paris12Page() {
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
                Cabinet limitrophe Paris 12e
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Les freelances du 12e ont un expert-comptable spécialisé{" "}
              <span className="text-turquoise-500">à deux pas</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Bercy, Nation, Gare de Lyon, Bastille — le 12e arrondissement est l'un des plus dynamiques de Paris pour les travailleurs indépendants. Cabinet d'avocats, startups, consultants, freelances tech : la densité de professionnels à haute valeur ajoutée y est exceptionnelle. Et JSA Expertise est littéralement à la porte du 12e, à Charenton-le-Pont.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Même bassin de vie, même clientèle, même culture du travail indépendant — mais une adresse légèrement moins coûteuse qui nous permet de vous offrir un service premium à un tarif raisonnable.
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
              {["Limitrophe Paris 12e", "Accès métro ligne 8", "100% digital"].map((item) => (
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

        {/* ── LE 12e ET SES FREELANCES ──────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              L'écosystème du 12e
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Paris 12e : un arrondissement taillé pour les indépendants
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le 12e arrondissement de Paris jouit d'une réputation un peu paradoxale : moins médiatisé que le Marais ou Saint-Germain, il concentre pourtant une densité remarquable de professionnels à haute valeur ajoutée. Bercy est depuis longtemps le quartier des grandes institutions financières (Ministère des Finances, grands groupes bancaires), mais c'est aussi un vivier de freelances et de consultants qui gravitent dans cet écosystème.
              </p>
              <p>
                Bercy Village accueille une nouvelle génération d'entrepreneurs numériques. Les coworking spaces autour de la Gare de Lyon et de Nation sont pleins de consultants, designers et développeurs qui facturent leurs clients depuis leurs laptops. La proximité avec la Gare de Lyon facilite aussi les déplacements vers Lyon, Marseille ou Bruxelles pour les consultants itinérants.
              </p>
              <p>
                Ces profils ont en commun un niveau de revenus souvent significatif et une exposition aux enjeux fiscaux importants. Un freelance consultant facturant 10 000 à 20 000 € par mois a tout intérêt à être bien entouré sur le plan comptable. JSA Expertise est l'interlocuteur naturel pour ces profils du 12e et de sa banlieue proche.
              </p>
            </div>
          </div>
        </section>

        {/* ── SASU OU MICRO DANS LE 12E ─────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Statut juridique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Freelance dans le 12e : SASU ou micro-entreprise ?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                C'est la question que nous posent le plus souvent les freelances du 12e qui démarrent ou qui cherchent à optimiser leur situation. La réponse tient en quelques critères simples mais déterminants.
              </p>
              <p>
                La <strong className="text-gray-800">micro-entreprise</strong> est pertinente si vous démarrez, si votre chiffre d'affaires reste sous les seuils légaux (72 500 € pour les services en 2025), et si vous ne souhaitez pas de complexité administrative. C'est un excellent tremplin, mais avec des limites réelles : pas d'optimisation possible, plafond de CA, pas de déduction des charges réelles.
              </p>
              <p>
                La <strong className="text-gray-800">SASU</strong> s'impose dès que votre activité décolle. Elle permet de déduire toutes vos charges professionnelles, d'optimiser votre rémunération entre salaire et dividendes, et de bénéficier d'une meilleure protection sociale. Pour un consultant du 12e facturant 100 000 € ou plus, la différence nette dans la poche peut dépasser 15 000 € par an par rapport à une micro-entreprise.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">μ</span>
                  <h3 className="font-extrabold text-gray-900">Micro-entreprise</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Simple et rapide à créer</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Pas de comptabilité complexe</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Plafond de chiffre d'affaires</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Pas d'optimisation fiscale</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-2 ring-turquoise-400">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-turquoise-100 flex items-center justify-center text-sm font-bold text-turquoise-600">S</span>
                  <h3 className="font-extrabold text-gray-900">SASU</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Pas de plafond de revenus</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Optimisation salaire/dividendes</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Déduction de toutes les charges</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Image professionnelle renforcée</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Simulez votre situation avec notre outil :{" "}
              <Link href="/simulateur-charges" className="text-turquoise-500 hover:underline font-semibold">
                Calculateur de charges URSSAF →
              </Link>
            </p>
          </div>
        </section>

        {/* ── NOS SERVICES ──────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-8">
              L'accompagnement complet pour les freelances du 12e
            </h2>
            <ul className="space-y-4 mb-8">
              <CheckItem>
                <strong>Création de société</strong> — SASU ou EURL, on s'occupe de tout : statuts, dépôt du capital, immatriculation, Kbis.
              </CheckItem>
              <CheckItem>
                <strong>Comptabilité mensuelle</strong> via Tiime — saisie automatisée, rapprochement bancaire, tableau de bord en temps réel.
              </CheckItem>
              <CheckItem>
                <strong>TVA et déclarations fiscales</strong> — aucun délai manqué, envoi automatique, gestion des remboursements de crédit de TVA.
              </CheckItem>
              <CheckItem>
                <strong>Bilan annuel certifié</strong> — présenté et expliqué clairement, déposé au greffe dans les délais.
              </CheckItem>
              <CheckItem>
                <strong>Optimisation fiscale annuelle</strong> — arbitrage salaire/dividendes, PER, épargne salariale, frais déductibles.
              </CheckItem>
              <CheckItem>
                <strong>Conseil réactif sous 24h</strong> — votre expert répond personnellement, pas un centre d'appel.
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
                FAQ — Freelances dans le Paris 12e
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
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
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
