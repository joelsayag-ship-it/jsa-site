import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Expert-comptable freelance Vincennes (94300) | JSA Expertise",
  description:
    "Cabinet JSA Expertise à 5 minutes de Vincennes. Expert-comptable spécialisé freelances créatifs, consultants, cadres reconvertis. Création SASU/EURL, fiscalité, optimisation. RDV gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance-vincennes",
  },
  twitter: { card: 'summary_large_image' },
};

const FAQS = [
  {
    q: "Comment se déroule concrètement l'accompagnement quand on est freelance à Vincennes ?",
    a: "Tout se fait en ligne au quotidien : partage de documents via Tiime, échanges par mail ou téléphone, visioconférences si nécessaire. Pour les rendez-vous physiques ponctuels, notre cabinet de Charenton-le-Pont est à cinq minutes en voiture par la Porte de Vincennes, ou accessible par le métro ligne 1 puis correspondance ligne 8 à Bastille.",
  },
  {
    q: "Vous accompagnez beaucoup de freelances créatifs à Vincennes ?",
    a: "Oui, c'est l'une de nos spécificités vincennoises. La ville attire historiquement les métiers de l'image, du design et de la communication, du fait de la proximité avec les studios de Joinville-le-Pont et les agences de l'Est parisien. Nous accompagnons des designers UX, des directeurs artistiques en SASU, des photographes indépendants, des consultants en stratégie de marque, à côté des consultants IT et management qui forment l'autre grosse partie de notre clientèle locale.",
  },
  {
    q: "Quel statut juridique privilégier pour un cadre supérieur reconverti à Vincennes ?",
    a: "Cela dépend de plusieurs facteurs : montant attendu du chiffre d'affaires, situation familiale, projets de prévoyance, futurs investissements immobiliers. Le profil typique vincennois (cadre supérieur avec un CA entre 8 000 et 15 000 euros mensuels) trouve souvent son intérêt en SASU, qui permet une optimisation salaire/dividendes et une protection sociale alignée sur le régime général. L'EURL reste pertinente pour ceux qui privilégient le revenu net immédiat. Une simulation chiffrée tranche en quinze minutes.",
  },
  {
    q: "Faut-il habiter Vincennes pour être accompagné par JSA Expertise ?",
    a: "Non, aucune contrainte de domiciliation. Nos clients vincennois nous choisissent autant pour notre spécialisation freelances que pour la proximité géographique. Mais nous accompagnons aussi des indépendants partout en France, en 100% digital, du moment qu'ils correspondent à notre cible : freelances en SASU ou EURL.",
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Expert-comptable freelance à{" "}
                <span className="text-turquoise-500">Vincennes</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Cabinet JSA Expertise à Charenton-le-Pont, à cinq minutes de Vincennes. Nous accompagnons des freelances créatifs, des consultants et des cadres reconvertis avec une expertise dédiée aux SASU et EURL, en 100% digital ou en présentiel selon votre préférence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
                  Prendre RDV gratuitement
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-gray-500">
                {["5 min en voiture", "100% digital possible", "Réponse sous 24h"].map((item) => (
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

        {/* ── INTRO LOCAL ───────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Vincennes, capitale freelance de l'Est parisien
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Une ville bourgeoise où se concentrent les indépendants à fort revenu
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vincennes (94300) occupe une place singulière dans la géographie économique de l'Est parisien. Avec ses cinquante mille habitants, une densité parmi les plus élevées de France, et sa proximité directe avec le bois de Vincennes et Paris, la ville cumule un cadre de vie premium et une accessibilité parfaite. Le métro ligne 1 et le RER A rejoignent le centre de Paris en moins de quinze minutes, ce qui en fait une adresse idéale pour qui travaille avec des clients parisiens sans vouloir y résider.
              </p>
              <p>
                Cette combinaison attire un profil particulier : cadres supérieurs, professionnels libéraux, freelances créatifs, consultants en management. Les revenus médians comptent parmi les plus élevés du Val-de-Marne, et la concentration d'indépendants y est nettement supérieure à la moyenne départementale. Le marché de la Mairie, les commerces du centre, l'animation autour du Château et de l'avenue de Paris, tout l'écosystème reflète cette population aisée et active.
              </p>
              <p>
                Les freelances que nous accompagnons à Vincennes viennent majoritairement de deux mondes. D'un côté, les consultants en stratégie, transformation digitale ou IT qui facturent des prestations à forte valeur ajoutée. De l'autre, les créatifs : designers, directeurs artistiques, professionnels de l'audiovisuel, attirés par la proximité avec les studios de Joinville et les agences de l'Est parisien. Dans les deux cas, les enjeux sont les mêmes : structurer son activité, optimiser sa rémunération, sécuriser sa fiscalité.
              </p>
            </div>
          </div>
        </section>

        {/* ── POURQUOI CHOISIR JSA À VINCENNES ──────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Pourquoi nous choisir
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Pourquoi choisir JSA Expertise à Vincennes
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  title: "À 5 minutes en voiture, 15 en métro",
                  desc: "Notre cabinet de Charenton-le-Pont est accessible par la Porte de Vincennes en voiture, ou par la ligne 1 puis correspondance à Bastille en métro. La majorité de nos clients vincennois choisit toutefois la visio pour le confort.",
                },
                {
                  title: "Spécialistes des profils vincennois",
                  desc: "Nous accompagnons depuis des années des consultants en stratégie, des créatifs et des cadres reconvertis. Le profil type vincennois (CA entre 8 000 et 15 000 euros mensuels, enjeux d'optimisation) est exactement notre cœur de métier.",
                },
                {
                  title: "Connaissance des métiers créatifs",
                  desc: "Designers, directeurs artistiques, photographes, audiovisuel : les enjeux fiscaux (droits d'auteur, BNC vs BIC, charges déductibles spécifiques) ne sont pas les mêmes qu'un consultant classique. Nous traitons ces sujets au quotidien.",
                },
                {
                  title: "Présentiel possible quand nécessaire",
                  desc: "Pour un point stratégique ou un bilan annuel, certains clients préfèrent un rendez-vous au cabinet. Nous bloquons un créneau le matin ou en fin de journée, c'est cinq minutes de trajet depuis Vincennes.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-2 text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREELANCES À VINCENNES ────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Freelances et quartiers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Freelances et indépendants à Vincennes
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-7">
              <p>
                Vincennes affiche l'une des plus fortes proportions de cadres et professions intellectuelles supérieures du Val-de-Marne. C'est aussi l'une des villes du département où les professions libérales et les indépendants sont les plus représentés en pourcentage de la population active. Cette densité crée un écosystème particulier, avec des freelances qui se croisent au marché ou aux terrasses du centre.
              </p>
              <p>
                Les activités prédominantes que nous accompagnons : conseil en management, stratégie et transformation digitale, design (UX, UI, direction artistique), métiers de l'image et de l'audiovisuel, communication d'entreprise, consulting tech (data, produit, architecture). Une part non négligeable de nos clientes et clients sont des consultants seniors avec une dizaine d'années d'expérience en grande structure.
              </p>
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Quartiers et lieux emblématiques</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Centre-ville (Mairie)", desc: "Commerces, marché couvert" },
                { label: "Château de Vincennes", desc: "Quartier historique, ligne 1" },
                { label: "Plateau", desc: "Résidentiel, calme" },
                { label: "Domaine du Bois", desc: "Bordure du bois de Vincennes" },
                { label: "Diderot / Cours Marigny", desc: "Animation, écoles" },
                { label: "Avenue de Paris", desc: "Axe commercial principal" },
              ].map((q) => (
                <div key={q.label} className="bg-[#F1F8EA] border border-turquoise-100 rounded-xl px-4 py-3">
                  <p className="text-sm font-bold text-gray-900">{q.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE LOCAL ──────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-turquoise-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-5">
                "On a optimisé la rémunération de mon EURL en deux échanges. Joël a fait les calculs, comparé les scénarios, et m'a fait gagner plusieurs milliers d'euros de revenu net annuel. Et tout s'est fait à distance, ce qui me convient parfaitement avec mon emploi du temps."
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">Camille L.</p>
                <p className="text-gray-500 text-xs">Directrice artistique freelance, Vincennes</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA MILIEU ────────────────────────────────── */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-[#F1F8EA] rounded-3xl p-8 md:p-10 text-center border border-turquoise-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Un premier échange pour faire le point ?
            </h2>
            <p className="text-gray-600 mb-6">
              Trente minutes en visio ou au cabinet de Charenton, sans engagement. On regarde votre situation et on vous oriente.
            </p>
            <Link href="/#contact" className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors">
              Prendre RDV gratuitement
            </Link>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge><span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />Questions fréquentes</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">FAQ Vincennes</h2>
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
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Autres villes accompagnées</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
                { label: "Saint-Maurice", href: "/expert-comptable-freelance-saint-maurice" },
                { label: "Joinville-le-Pont", href: "/expert-comptable-freelance-joinville-le-pont" },
                { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
                { label: "Simulateur charges", href: "/simulateur-charges" },
                { label: "Actualités", href: "/blog" },
                { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="bg-[#F1F8EA] border border-turquoise-100 hover:border-turquoise-400 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:text-turquoise-600 transition-all text-center">{l.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FIN ───────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Parlons de votre activité</h2>
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
