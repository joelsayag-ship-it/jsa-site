import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    a: "Tout se fait en ligne : partage de documents via Tiime, échanges par mail ou téléphone, visioconférences si besoin. Pour ceux qui préfèrent un rendez-vous physique, notre cabinet de Charenton-le-Pont est à 5 minutes de Vincennes en voiture ou en métro ligne 1.",
  },
  {
    q: "Quels sont les freelances que vous accompagnez à Vincennes ?",
    a: "Consultants IT et en management, développeurs, designers, directeurs de projet indépendants, coachs et formateurs. Le profil type à Vincennes est un cadre supérieur reconverti en indépendant, avec des revenus significatifs et des enjeux d'optimisation fiscale importants.",
  },
  {
    q: "SASU ou EURL pour un consultant basé à Vincennes ?",
    a: "La SASU est préférée pour sa flexibilité sur la rémunération (salaire + dividendes) et sa protection sociale. L'EURL convient mieux à certains profils cherchant des charges allégées. On fait le point ensemble lors d'un premier rendez-vous gratuit avec une simulation chiffrée.",
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  À 5 minutes de Vincennes
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Les freelances vincennois méritent un expert-comptable qui{" "}
                <span className="text-turquoise-500">comprend leur activité</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Vincennes est l'une des villes les plus prisées des cadres supérieurs et consultants indépendants de l'Est parisien. Notre cabinet JSA Expertise, basé à Charenton-le-Pont à 5 minutes, est spécialisé exclusivement dans l'accompagnement des freelances.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                100% digital, zéro déplacement obligatoire. On gère votre comptabilité, vos déclarations et votre optimisation fiscale avec la réactivité que les grands cabinets ne peuvent pas offrir.
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
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-turquoise-100 rounded-3xl scale-105 -rotate-2" />
                <Image
                  src="/images/joel.png"
                  alt="Joël Sayag, expert-comptable proche de Vincennes"
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

        {/* ── PROFIL FREELANCE VINCENNOIS ───────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Le freelance vincennois
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Vincennes : la ville des consultants qui ont choisi leur qualité de vie
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Avec le Bois de Vincennes aux portes, des commerces de qualité et le métro ligne 1 pour rejoindre Paris en quelques minutes, Vincennes offre ce que beaucoup de cadres supérieurs recherchent : un cadre de vie agréable sans sacrifier l'accès aux opportunités professionnelles.
              </p>
              <p>
                Les freelances que nous accompagnons à Vincennes facturent souvent entre 8 000 et 15 000 € par mois. Selon leur niveau de revenus et leur situation personnelle, certains sont mieux en EURL (charges allégées, gestion simple), d'autres en SASU (protection sociale, dividendes). L'économie annuelle du bon choix peut dépasser plusieurs milliers d'euros.
              </p>
            </div>
          </div>
        </section>

        {/* ── CRÉER SA SASU ─────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Création d'entreprise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              SASU ou EURL à Vincennes : ce qu'il faut savoir
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contrairement à ce qu'on lit souvent, l'EURL n'est pas le "petit frère" de la SASU. Pour beaucoup de freelances vincennois, c'est même le meilleur choix : le régime TNS génère des charges sociales moins élevées, ce qui laisse plus d'argent disponible chaque mois. La SASU devient plus pertinente quand les revenus sont élevés et qu'on veut optimiser la répartition salaire/dividendes. Dans tous les cas, votre expert-comptable simule les deux avant de trancher.
            </p>
            <ul className="space-y-3 mb-6">
              <CheckItem>Simulation personnalisée SASU vs EURL vs micro-entreprise</CheckItem>
              <CheckItem>Rédaction des statuts adaptés à votre activité</CheckItem>
              <CheckItem>Dépôt du capital et immatriculation au greffe</CheckItem>
              <CheckItem>Mise en place de la comptabilité dès le premier mois</CheckItem>
            </ul>
            <Link href="/simulateur-charges" className="text-turquoise-500 hover:underline font-semibold text-sm">
              Simulateur URSSAF SASU / EURL →
            </Link>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Vincennes</h2>
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
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
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
