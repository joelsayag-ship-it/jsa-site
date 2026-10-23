import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable Paris 12 pour freelances et indépendants | JSA Expertise",
  description:
    "Expert-comptable aux portes du Paris 12 (Bercy, Nation, Gare de Lyon, Daumesnil) : cabinet spécialisé freelances et indépendants à Charenton. Premier RDV offert.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-paris-12",
  },
  twitter: { card: 'summary_large_image' },
};

const FAQS = [
  {
    q: "Êtes-vous proche du Paris 12e ?",
    a: "Oui, notre cabinet JSA Expertise est situé à Charenton-le-Pont, commune immédiatement limitrophe du 12e arrondissement. Nous sommes à 5 à 10 minutes en voiture ou en métro ligne 8 (Charenton-Écoles). La grande majorité de notre collaboration se fait à distance, mais nous recevons sur rendez-vous.",
  },
  {
    q: "Accompagnez-vous les startups et freelances de Bercy ?",
    a: "Absolument. Le quartier Bercy Village et ses alentours concentrent une densité remarquable de freelances tech, startups en amorçage et indépendants du numérique. Nous accompagnons aussi bien les solo-entrepreneurs qui démarrent que des structures plus établies avec quelques salariés.",
  },
  {
    q: "Faut-il choisir un expert-comptable installé dans le 12e ?",
    a: "Ce n'est pas obligatoire : toute la comptabilité se fait en ligne avec l'application Tiime, et les échanges réguliers peuvent se faire en visio. La proximité reste un plus pour un premier rendez-vous ou un point annuel au cabinet : depuis le 12e, Charenton-le-Pont est à quelques stations sur la ligne 8.",
  },
  {
    q: "Combien coûte un expert-comptable pour un freelance du 12e ?",
    a: "Le prix dépend du statut (SASU, EURL, micro-entreprise), du volume de pièces et du niveau de conseil attendu. Pour un freelance en société, il faut généralement prévoir entre 150 et 250 € HT par mois. JSA Expertise vous remet un devis précis après un premier échange gratuit.",
  },
  {
    q: "Comment passer de micro-entreprise à SASU dans le 12e ?",
    a: "Le passage suit plusieurs étapes : décision de fermeture de la micro, création de la SASU (statuts, dépôt du capital, immatriculation), transfert éventuel des contrats clients, mise en place de la nouvelle comptabilité. Votre expert-comptable JSA gère l'intégralité du processus en quelques semaines, sans interruption d'activité.",
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Cabinet limitrophe Paris 12e
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Expert-comptable Paris 12 :{" "}
                <span className="text-turquoise-500">le cabinet des freelances, à deux pas</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Bercy, Nation, Gare de Lyon, Bastille — le 12e arrondissement est l'un des plus dynamiques de Paris pour les travailleurs indépendants. JSA Expertise est littéralement à la porte du 12e, à Charenton-le-Pont, avec la spécialisation que les grands cabinets généralistes n'ont pas.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Même bassin de vie, même clientèle, même culture du travail indépendant. Un service premium à un tarif raisonnable.
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
                {["Limitrophe Paris 12e", "Métro ligne 8", "100% digital"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-turquoise-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable proche du Paris 12e"
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

        {/* ── LE 12E ET SES FREELANCES ──────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              L'écosystème du 12e
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Paris 12e : un arrondissement taillé pour les indépendants
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le 12e arrondissement concentre une densité remarquable de professionnels à haute valeur ajoutée. Bercy Village accueille une nouvelle génération d'entrepreneurs numériques. Les coworking spaces autour de la Gare de Lyon sont pleins de consultants, designers et développeurs. La proximité avec la Gare de Lyon facilite aussi les déplacements vers Lyon, Marseille ou Bruxelles pour les consultants itinérants.
              </p>
              <p>
                Un freelance consultant du 12e facturant 10 000 à 20 000 € par mois a tout intérêt à être bien entouré sur le plan comptable et fiscal. JSA Expertise est l'expert-comptable naturel pour ces profils.
              </p>
              <p>
                Vous cherchez d'abord à comprendre ce qu'un cabinet doit vous apporter ? Notre guide{" "}
                <Link href="/expert-comptable-freelance" className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500">
                  expert-comptable freelance : pourquoi et comment bien le choisir
                </Link>{" "}
                répond aux questions les plus fréquentes.
              </p>
            </div>
          </div>
        </section>

        {/* ── QUARTIERS & ACCÈS ─────────────────────────── */}
        <section className="bg-white pb-16 md:pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-5">
              Votre expert-comptable dans tous les quartiers du 12e
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Que votre activité soit domiciliée chez vous, dans un coworking ou dans un bureau partagé, nous accompagnons les indépendants de tout l&apos;arrondissement :
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Bercy", "Gare de Lyon", "Nation", "Daumesnil", "Bel-Air", "Picpus", "Aligre", "Porte Dorée", "Reuilly", "Vallée de Fécamp"].map((q) => (
                <span key={q} className="bg-[#F1F8EA] border border-turquoise-100 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700">{q}</span>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#F1F8EA] rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-2">Accès depuis le 12e</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le cabinet est situé 10 rue du Président Kennedy, à Charenton-le-Pont. La ligne 8 du métro relie directement le 12e (Reuilly-Diderot, Daumesnil, Michel Bizot, Porte Dorée, Porte de Charenton) à la station Charenton-Écoles.
                </p>
              </div>
              <div className="bg-[#F1F8EA] rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-900 mb-2">Au cabinet ou en visio</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Premier rendez-vous gratuit, au cabinet ou en visio. Ensuite, tout se gère en ligne : pièces, factures et banque sont centralisées dans Tiime, et vous avez un interlocuteur unique qui répond sous 24h.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SASU OU MICRO ─────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Statut juridique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Freelance dans le 12e : SASU ou micro-entreprise ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              La micro-entreprise est pertinente si vous démarrez et restez sous les seuils légaux. Dès que votre activité décolle, une société s'impose — mais laquelle ? L'EURL est souvent plus avantageuse qu'on ne le pense : le régime TNS génère des charges sociales moins élevées qu'en SASU, ce qui laisse plus de trésorerie disponible. La SASU prend l'avantage quand les revenus sont élevés et qu'on veut combiner salaire et dividendes avec flat tax. Pour un consultant du 12e, la différence entre les deux structures peut représenter plusieurs milliers d'euros nets par an.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">μ</span>
                  <h3 className="font-extrabold text-gray-900">Micro-entreprise</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Simple et rapide à créer</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Plafond de chiffre d'affaires</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Pas d'optimisation fiscale possible</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-turquoise-100 flex items-center justify-center text-sm font-bold text-turquoise-600">E</span>
                  <h3 className="font-extrabold text-gray-900">EURL</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Charges sociales allégées (TNS)</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Plus de trésorerie chaque mois</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Souvent le meilleur choix au démarrage</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm ring-2 ring-turquoise-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-turquoise-100 flex items-center justify-center text-sm font-bold text-turquoise-600">S</span>
                  <h3 className="font-extrabold text-gray-900">SASU</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Optimisation salaire/dividendes</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Meilleure protection sociale</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Pertinente sur revenus élevés</li>
                </ul>
              </div>
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
              Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-7">
              L'accompagnement complet de votre expert-comptable
            </h2>
            <ul className="space-y-4">
              <CheckItem><strong>Création de société :</strong> SASU ou EURL, on s'occupe de tout, statuts, dépôt du capital, immatriculation, Kbis.</CheckItem>
              <CheckItem><strong>Comptabilité mensuelle</strong> via Tiime, saisie automatisée, tableau de bord en temps réel.</CheckItem>
              <CheckItem><strong>TVA et déclarations fiscales :</strong> aucun délai manqué, gestion des crédits de TVA.</CheckItem>
              <CheckItem><strong>Bilan annuel et liasse fiscale,</strong> présentés et expliqués, comptes déposés au greffe dans les délais.</CheckItem>
              <CheckItem><strong>Optimisation fiscale annuelle :</strong> arbitrage salaire/dividendes, PER, frais déductibles.</CheckItem>
              <CheckItem><strong>Conseil réactif :</strong> votre expert-comptable répond personnellement sous 24h.</CheckItem>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-7">
              Combien prévoir pour ce suivi ? Nous détaillons les fourchettes de prix et ce qu&apos;elles comprennent dans notre article{" "}
              <Link href="/blog/combien-coute-expert-comptable-freelance" className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500">
                combien coûte un expert-comptable pour freelance
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Paris 12e</h2>
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
                { label: "Guide expert-comptable freelance", href: "/expert-comptable-freelance" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Simulateur indemnités km", href: "/ressources/simulateur-indemnites-kilometriques" },
                { label: "Tarifs expert-comptable", href: "/blog/combien-coute-expert-comptable-freelance" },
                { label: "Actualités", href: "/blog" },
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
