import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { AVIS_CLIENTS, LIEN_AVIS_GOOGLE } from "../components/avis-clients";

const AVIS_FREELANCE = ["Remi B.", "Michael L.", "Julien B."]
  .map((nom) => AVIS_CLIENTS.find((a) => a.name === nom))
  .filter((a): a is (typeof AVIS_CLIENTS)[number] => Boolean(a));

export const metadata: Metadata = {
  title: "Expert-comptable freelance : tarifs et accompagnement | JSA Expertise",
  description:
    "Expert-comptable pour freelances en SASU, EURL ou micro-entreprise : forfait tout compris, échange direct avec votre expert-comptable, réponse sous 24h. Premier rendez-vous gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/expert-comptable-freelance",
  },
  openGraph: {
    title: "Expert-comptable freelance : tarifs et accompagnement | JSA Expertise",
    description:
      "Expert-comptable pour freelances en SASU, EURL ou micro-entreprise : forfait tout compris, échange direct avec votre expert-comptable.",
    url: "https://www.jsaexpertise.com/expert-comptable-freelance",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const FAQS = [
  {
    q: "Un freelance a-t-il l'obligation d'avoir un expert-comptable ?",
    a: "Non, aucune obligation légale n'impose à un freelance de faire appel à un expert-comptable. En pratique, c'est pourtant indispensable dès que l'activité génère un revenu significatif. Les déclarations fiscales, la tenue des comptes, l'optimisation de la rémunération en SASU ou EURL sont des sujets techniques où une erreur peut coûter plusieurs milliers d'euros.",
  },
  {
    q: "Quel est le tarif moyen d'un expert-comptable pour freelance ?",
    a: "Pour un accompagnement sérieux incluant tenue comptable, déclarations de TVA, bilan, liasse fiscale et conseil illimité, le tarif se situe généralement entre 150 et 250 euros HT par mois. Pour comparer deux offres, vérifiez toujours ce que comprend le forfait : bilan, liasse fiscale, TVA, conseil.",
  },
  {
    q: "Peut-on changer d'expert-comptable en cours d'année ?",
    a: "Oui, absolument. Il n'existe aucune obligation légale de rester avec le même cabinet. Le changement se fait à tout moment : votre nouvel expert-comptable récupère les éléments comptables auprès de l'ancien et assure la continuité du dossier. C'est souvent plus simple qu'on ne le croit.",
  },
  {
    q: "Quelle différence entre un comptable et un expert-comptable ?",
    a: "Le titre d'expert-comptable est réglementé et protégé par l'Ordre des Experts-Comptables. Il requiert un diplôme d'État (DEC) après 8 années d'études et de stage. Un comptable salarié peut tenir des livres, mais seul un expert-comptable inscrit à l'Ordre peut tenir et présenter la comptabilité d'entreprises dont il n'est pas salarié, en engageant sa responsabilité professionnelle. La certification des comptes relève, elle, d'un commissaire aux comptes.",
  },
  {
    q: "Pourquoi choisir un cabinet spécialisé freelances ?",
    a: "Un cabinet spécialisé freelances connaît les enjeux propres à cette activité : optimisation salaire/dividendes en SASU, régime TNS en EURL, sortie du portage salarial, revenus mixtes, TJM et facturation. Les bonnes questions sont posées dès le premier rendez-vous, et les réponses arrivent plus vite.",
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

export default function ExpertComptableFreelancePage() {
  return (
    <>
      <main className="pt-16">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge>
                  <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                  Cabinet spécialisé freelances
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Expert-comptable freelance :{" "}
                <span className="text-turquoise-500">un interlocuteur unique, tout compris</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Comptabilité, TVA, bilan et conseil pour les freelances en SASU, EURL ou micro-entreprise. Vous échangez directement avec votre expert-comptable, et le quotidien se gère en ligne avec l&apos;application Tiime.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
                >
                  Prendre RDV gratuitement
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-sm text-gray-500">
                {[
                  "30 avis Google 5/5",
                  "10 ans d'expérience",
                  "Réponse sous 24h",
                ].map((item) => (
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
                  alt="Joël Sayag, expert-comptable spécialisé freelances"
                  width={380}
                  height={460}
                  className="relative rounded-3xl object-cover shadow-xl"
                  priority
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-gray-100">
                  <p className="text-xs font-bold text-gray-900">Joël Sayag</p>
                  <p className="text-xs text-gray-400">Expert-comptable · 10 ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── POURQUOI ──────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Indispensable en pratique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Pourquoi un expert-comptable quand on est freelance ?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Aucune loi n'oblige un freelance à faire appel à un expert-comptable. Mais quand on gère une SASU ou une EURL, la réalité est tout autre : liasse fiscale, déclarations de TVA, bilan annuel, optimisation de rémunération... Ces obligations techniques existent bel et bien, et une erreur peut coûter cher.
              </p>
              <p>
                Au-delà de la sécurisation administrative, le bon expert-comptable est un levier financier. L'arbitrage entre salaire et dividendes, ou entre SASU et EURL, peut représenter plusieurs milliers d'euros de gain net par an. C'est ce calcul-là que vous payez, bien plus que de simples écritures comptables.
              </p>
            </div>
            <ul className="space-y-4">
              <CheckItem><strong>Sécuriser sa comptabilité et ses déclarations :</strong> TVA, IS, liasse fiscale : des déclarations préparées et déposées dans les délais.</CheckItem>
              <CheckItem><strong>Optimiser sa rémunération :</strong> le bon mix salaire/dividendes selon votre CA et votre situation personnelle. Souvent plusieurs milliers d'euros en jeu chaque année.</CheckItem>
              <CheckItem><strong>Gagner du temps :</strong> vous vous concentrez sur vos missions, votre expert-comptable gère le reste.</CheckItem>
              <CheckItem><strong>Éviter les erreurs coûteuses :</strong> TVA mal déclarée, IS sous-estimé, charges sociales mal calculées. Les erreurs fréquentes chez les freelances sans accompagnement.</CheckItem>
              <CheckItem><strong>Anticiper les décisions stratégiques :</strong> changement de statut, embauche, cession. Un bon conseil en amont évite les mauvaises surprises.</CheckItem>
            </ul>
          </div>
        </section>

        {/* ── MISSIONS ──────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Missions concrètes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Ce que fait un expert-comptable freelance au quotidien
            </h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              Un expert-comptable ne se contente pas de déposer votre bilan une fois par an. Pour un freelance en SASU ou EURL, la mission est continue, tout au long de l'exercice.
            </p>
            <ul className="space-y-4 mb-7">
              <CheckItem><strong>Tenue comptable complète :</strong> saisie, lettrage, rapprochement bancaire. Vous ne touchez plus à un tableur.</CheckItem>
              <CheckItem><strong>Déclarations de TVA :</strong> mensuelle ou trimestrielle, envoyées dans les délais, sans que vous ayez à y penser.</CheckItem>
              <CheckItem><strong>Bilan et liasse fiscale :</strong> clôture des comptes chaque année, dépôt au greffe, tout est carré.</CheckItem>
              <CheckItem><strong>Optimisation de la rémunération :</strong> salaire ou dividendes, en fonction de votre CA, vos charges perso et la conjoncture fiscale.</CheckItem>
              <CheckItem><strong>Conseil stratégique :</strong> choix du statut juridique, anticipation fiscale, changement de structure. Un regard extérieur à chaque étape.</CheckItem>
            </ul>
            <Link href="/#tarifs" className="text-turquoise-500 hover:underline font-semibold text-sm">
              Voir ce que comprend l&apos;Offre Freelance →
            </Link>
          </div>
        </section>

        {/* ── DÉROULÉ ───────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Comment ça se passe
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-8">
              Votre accompagnement, étape par étape
            </h2>
            <ol className="grid md:grid-cols-2 gap-5">
              {[
                {
                  titre: "Premier rendez-vous gratuit",
                  texte: "Au cabinet à Charenton-le-Pont ou en visio. On fait le point sur votre activité, votre statut et vos besoins, puis vous recevez un devis précis.",
                },
                {
                  titre: "Mise en place",
                  texte: "Lettre de mission, ouverture de votre espace Tiime connecté à votre banque. Si vous changez de cabinet, nous récupérons votre dossier auprès de l'ancien expert-comptable.",
                },
                {
                  titre: "Tout au long de l'année",
                  texte: "Vos justificatifs et relevés remontent dans Tiime, nous tenons la comptabilité et déposons la TVA. Vos questions reçoivent une réponse de votre expert-comptable sous 24h.",
                },
                {
                  titre: "Clôture et bilan",
                  texte: "Bilan, liasse fiscale, puis un point sur l'année : résultat, rémunération, salaire ou dividendes, et ce qu'il faut anticiper pour l'exercice suivant.",
                },
              ].map((etape, i) => (
                <li key={etape.titre} className="bg-[#F1F8EA] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-turquoise-500 text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-extrabold text-gray-900 text-lg">{etape.titre}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{etape.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA TRANSITIONNEL 1 ───────────────────────────── */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-[#F1F8EA] rounded-3xl p-8 md:p-10 text-center border border-turquoise-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Vous cherchez un expert-comptable qui comprend les freelances ?
            </h2>
            <p className="text-gray-600 mb-6">
              Premier rendez-vous gratuit et sans engagement. On regarde votre situation ensemble.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Prendre RDV gratuitement
            </Link>
          </div>
        </section>

        {/* ── CRITERES DE CHOIX ────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-12">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Critères clés
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Comment choisir le bon expert-comptable freelance
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Voici les quatre points à vérifier avant de signer une lettre de mission.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Spécialisation freelances",
                  icon: "🎯",
                  desc: "Un cabinet habitué aux freelances connaît les enjeux SASU/EURL, l'optimisation salaire/dividendes, la sortie du portage ou les revenus mixtes. Demandez combien de freelances il accompagne déjà : la réponse est souvent parlante.",
                },
                {
                  title: "Réactivité réelle",
                  icon: "⚡",
                  desc: "Une question sur un devis client ou une facture appelle souvent une réponse rapide. Demandez le délai de réponse habituel et le moyen de contact (mail, téléphone, visio) avant de vous engager. Chez JSA Expertise, la réponse arrive sous 24 h ouvrées.",
                },
                {
                  title: "Outils digitaux modernes",
                  icon: "💻",
                  desc: "Tiime, Pennylane, Dext : les outils de comptabilité en ligne suppriment la paperasse et donnent une vision en temps réel de votre trésorerie. Vérifiez que vos relevés bancaires et justificatifs remontent automatiquement : c'est autant de temps gagné chaque mois.",
                },
                {
                  title: "Interlocuteur dédié",
                  icon: "🤝",
                  desc: "Demandez qui répondra concrètement à vos messages. Un interlocuteur unique qui connaît votre dossier par cœur vous fait gagner du temps à chaque question, et le conseil gagne en précision au fil des années.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-extrabold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CABINET EN LIGNE VS TRADITIONNEL ─────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Notre façon de travailler
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-6">
              Digital et humain : le meilleur des deux
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Les outils en ligne ont simplifié la comptabilité : vos relevés bancaires remontent automatiquement, vous photographiez vos justificatifs, et vous suivez votre trésorerie en temps réel. Pour un freelance, c'est un vrai gain de temps.
              </p>
              <p>
                Mais un freelance a surtout besoin du bon conseil au bon moment : fixer sa rémunération en SASU, anticiper un changement de régime, répondre à un courrier de l'administration. Ces sujets demandent quelqu'un qui connaît votre dossier.
              </p>
              <p>
                C'est le modèle de JSA Expertise : l'application Tiime pour le quotidien, et un échange direct avec votre expert-comptable pour les décisions.
              </p>
            </div>
          </div>
        </section>

        {/* ── STATUTS JURIDIQUES ───────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Statut juridique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Quel statut juridique pour un freelance ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Le choix du statut est la première décision structurante pour un freelance. Elle conditionne vos charges sociales, votre protection, votre fiscalité et votre crédibilité vis-à-vis des clients. Voici les trois options les plus courantes.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  title: "Micro-entreprise",
                  label: "Simple mais limitée",
                  desc: "Idéale pour démarrer ou tester une activité. Pas de comptabilité complexe, charges calculées sur le CA. Mais plafonds de CA, impossibilité de déduire les charges réelles, protection sociale minimale. Souvent insuffisante passé 40 à 50k euros de CA.",
                },
                {
                  title: "SASU",
                  label: "Souple et protectrice",
                  desc: "Régime général de la Sécurité Sociale pour le dirigeant. Flexibilité totale sur la rémunération. Charges sociales élevées sur le salaire, mais les dividendes permettent d'optimiser. Idéale pour les freelances à fort CA souhaitant une bonne protection.",
                },
                {
                  title: "EURL",
                  label: "Charges allégées",
                  desc: "Régime TNS : charges sociales moins élevées qu'en SASU, ce qui optimise la trésorerie mensuelle. Cadre plus encadré, mais très intéressant pour les profils qui privilégient le revenu net immédiat. Souvent sous-estimée par les freelances.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                  <span className="text-xs font-bold text-turquoise-600 uppercase tracking-wide mb-2">{item.label}</span>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-5">
              <Link href="/ressources/simulateur-sasu-eurl" className="text-turquoise-500 hover:underline font-semibold text-sm">
                Comparer SASU et EURL avec le simulateur →
              </Link>
              <Link href="/blog/sasu-ou-eurl-quel-statut-choisir-2026" className="text-turquoise-500 hover:underline font-semibold text-sm">
                SASU ou EURL : comparatif complet →
              </Link>
            </div>
          </div>
        </section>

        {/* ── TARIFS ────────────────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Combien ça coûte ?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Combien coûte un expert-comptable freelance ?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Pour un freelance en société, un accompagnement complet (tenue comptable, déclarations de TVA, bilan annuel, liasse fiscale et conseil) se situe généralement entre <strong className="text-gray-900">150 et 250 euros HT par mois</strong>. Le prix dépend du volume de pièces, du régime de TVA et du niveau de conseil attendu.
              </p>
              <p>
                Pour comparer deux devis, regardez ce que comprend le forfait : le bilan et la liasse sont-ils inclus, combien de questions pouvez-vous poser, qui vous répond ?
              </p>
            </div>
            <div className="bg-[#F1F8EA] rounded-3xl p-7 md:p-9 border border-turquoise-100 mb-7">
              <p className="text-sm font-bold text-turquoise-700 uppercase tracking-wide mb-2">Chez JSA Expertise</p>
              <p className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
                Un forfait mensuel tout compris, bilan inclus
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  "Tenue comptable complète",
                  "Déclarations de TVA",
                  "Bilan et liasse fiscale",
                  "Conseil illimité, réponse sous 24h",
                  "Application Tiime incluse",
                  "Optimisation de votre rémunération",
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed">
                Le devis est établi après le premier rendez-vous, selon votre situation. Vous créez votre société ? Une offre de lancement est possible les premiers mois.
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link href="/#contact" className="text-turquoise-500 hover:underline font-semibold text-sm">
                Demander un devis gratuit →
              </Link>
              <Link href="/blog/combien-coute-expert-comptable-freelance" className="text-turquoise-500 hover:underline font-semibold text-sm">
                Article complet sur les tarifs →
              </Link>
            </div>
          </div>
        </section>

        {/* ── AVIS CLIENTS ──────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Avis clients
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4">
                Ce qu&apos;en disent nos clients
              </h2>
              <p className="text-gray-600 mt-3">30 avis Google, tous à 5 étoiles</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {AVIS_FREELANCE.map((avis) => (
                <figure key={avis.name} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3">
                  <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <svg key={n} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">{avis.text}</blockquote>
                  <figcaption className="text-sm font-bold text-gray-900">{avis.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="text-center">
              <a
                href={LIEN_AVIS_GOOGLE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquoise-500 hover:underline font-semibold text-sm"
              >
                Voir tous nos avis Google →
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA TRANSITIONNEL 2 ───────────────────────────── */}
        <section className="bg-white py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-[#F1F8EA] rounded-3xl p-8 md:p-10 text-center border border-turquoise-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Simulez vos charges en SASU ou EURL
            </h2>
            <p className="text-gray-600 mb-6">
              Gratuit, sans inscription, résultat immédiat. Comparez les deux statuts selon votre chiffre d'affaires.
            </p>
            <Link
              href="/ressources/simulateur-sasu-eurl"
              className="inline-block bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Accéder au simulateur →
            </Link>
          </div>
        </section>

        {/* ── LOCAL VAL-DE-MARNE ────────────────────────────── */}
        <section className="bg-white py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
              Val-de-Marne et Paris
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-4 mb-5">
              Expert-comptable freelance dans le Val-de-Marne
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                JSA Expertise est basé à Charenton-le-Pont, à la frontière du Paris 12e et du Val-de-Marne. Notre cabinet accompagne des freelances dans tout le 94 : consultants, développeurs, managers de transition, directeurs de mission. Freelance de l'informatique ? Voyez notre page dédiée aux <Link href="/expert-comptable-consultant-informatique" className="text-turquoise-500 hover:underline font-semibold">consultants IT et développeurs</Link>.
              </p>
              <p>
                Nous fonctionnons en 100% digital, ce qui signifie que vous pouvez travailler avec nous depuis n'importe où. Et si vous préférez un rendez-vous physique, notre cabinet de Charenton est accessible en quelques minutes depuis tout le Val-de-Marne.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Charenton-le-Pont", href: "/expert-comptable-freelance-charenton-le-pont" },
                { label: "Vincennes", href: "/expert-comptable-freelance-vincennes" },
                { label: "Saint-Mandé", href: "/expert-comptable-freelance-saint-mande" },
                { label: "Saint-Maurice", href: "/expert-comptable-freelance-saint-maurice" },
                { label: "Joinville-le-Pont", href: "/expert-comptable-freelance-joinville-le-pont" },
                { label: "Ivry-sur-Seine", href: "/expert-comptable-freelance-ivry-sur-seine" },
                { label: "Alfortville", href: "/expert-comptable-freelance-alfortville" },
                { label: "Paris 12e", href: "/expert-comptable-freelance-paris-12" },
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

        {/* ── FAQ ───────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <section className="bg-[#F1F8EA] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 flex flex-col items-center">
              <Badge>
                <span className="w-2 h-2 rounded-full bg-turquoise-500 inline-block flex-shrink-0" />
                Questions fréquentes
              </Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-4">
                FAQ expert-comptable freelance
              </h2>
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

        {/* ── MAILLAGE INTERNE ──────────────────────────────── */}
        <section className="bg-white py-10 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Ressources utiles</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Charges déductibles", href: "/blog/charges-deductibles-societe-freelance" },
                { label: "Créer sa société", href: "/blog/comment-creer-sa-societe-2026" },
                { label: "Simulateur impôt 2027", href: "/simulateur-impot-revenu" },
                { label: "Simulateur SASU ou EURL", href: "/ressources/simulateur-sasu-eurl" },
                { label: "SASU ou EURL 2026", href: "/blog/sasu-ou-eurl-quel-statut-choisir-2026" },
                { label: "Optimiser sa rémunération", href: "/blog/optimiser-remuneration-sasu-salaire-dividendes" },
                { label: "Passer salarié à freelance", href: "/devenir-freelance" },
                { label: "Coût expert-comptable", href: "/blog/combien-coute-expert-comptable-freelance" },
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

        {/* ── CTA FINAL ─────────────────────────────────────── */}
        <section className="bg-[#00B6DE] py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Parlons de votre activité
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Premier rendez-vous gratuit et sans engagement. On analyse votre situation et on vous conseille.
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
            <p className="text-white/60 text-sm mt-5">Réponse sous 24 h ouvrées</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
