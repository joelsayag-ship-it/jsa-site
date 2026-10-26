import type { Metadata } from "next";
import Link from "next/link";
import Engine from "publicodes";
import Footer from "../../components/Footer";
import ComparateurSasuEurl from "./ComparateurSasuEurl";
import VerificationURSSAF from "./VerificationURSSAF";
import modeleAS from "@/lib/urssaf/modele-as.json";
import modeleTI from "@/lib/urssaf/modele-ti.json";
import {
  OPTIONS_MOTEUR,
  SAISIE_PAR_DEFAUT,
  calculerEURL,
  calculerSASU,
  type ResultatComparaison,
  type ResultatStatut,
  type SaisieComparateur,
} from "@/lib/urssaf/comparateur";

const URL_PAGE = "https://www.jsaexpertise.com/ressources/simulateur-sasu-eurl";

export const metadata: Metadata = {
  title: "Simulateur SASU ou EURL 2026 : charges URSSAF et revenu net | JSA Expertise",
  description:
    "Simulateur SASU et EURL gratuit : charges URSSAF, impôt et revenu net du freelance selon votre CA ou votre TJM. Calcul identique au simulateur officiel de l'URSSAF.",
  alternates: { canonical: URL_PAGE },
  openGraph: {
    title: "Simulateur SASU ou EURL 2026 pour freelance | JSA Expertise",
    description:
      "Cotisations, impôt et revenu net en SASU et en EURL, calculés avec le moteur officiel de l'URSSAF.",
    url: URL_PAGE,
    siteName: "JSA Expertise",
    locale: "fr_FR",
    type: "website",
  },
};

/* ── Exemples calculés au build, avec le même moteur que le simulateur ── */

type Exemple = { titre: string; detail: string; saisie: SaisieComparateur };

const EXEMPLES: Exemple[] = [
  {
    titre: "Consultant qui démarre",
    detail: "60 000 € de chiffre d'affaires, 4 000 € de charges, célibataire",
    saisie: { ...SAISIE_PAR_DEFAUT, chiffreAffaires: 60000, charges: 4000 },
  },
  {
    titre: "Développeur freelance à 500 € par jour",
    detail: "200 jours facturés, soit 100 000 € de chiffre d'affaires, 6 000 € de charges, célibataire",
    saisie: { ...SAISIE_PAR_DEFAUT, chiffreAffaires: 100000, charges: 6000 },
  },
  {
    titre: "Consultant senior en famille",
    detail: "150 000 € de chiffre d'affaires, 10 000 € de charges, marié avec 2 enfants",
    saisie: {
      ...SAISIE_PAR_DEFAUT,
      chiffreAffaires: 150000,
      charges: 10000,
      situationFamiliale: "couple",
      enfants: 2,
    },
  },
];

type ResultatExemple = { exemple: Exemple; sasu: ResultatStatut; eurl: ResultatStatut };

/** Calculs faits au build : simulation par défaut du simulateur et exemples de la page. */
function calculerAuBuild(): { defaut: ResultatComparaison | null; exemples: ResultatExemple[] } {
  try {
    const sasu = new Engine(modeleAS as never, OPTIONS_MOTEUR);
    const eurl = new Engine(modeleTI as never, OPTIONS_MOTEUR);
    const exemples = EXEMPLES.map((exemple) => ({
      exemple,
      sasu: calculerSASU(sasu, exemple.saisie),
      eurl: calculerEURL(eurl, exemple.saisie),
    }));
    const defaut = { sasu: calculerSASU(sasu, SAISIE_PAR_DEFAUT), eurl: calculerEURL(eurl, SAISIE_PAR_DEFAUT) };
    return { defaut, exemples };
  } catch {
    return { defaut: null, exemples: [] };
  }
}

const pct = (part: number, total: number) => `${Math.round((part / total) * 100)} %`;

const fmt = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} €`;

/* ── FAQ ── */

const FAQS = [
  {
    q: "Ce simulateur donne-t-il les mêmes résultats que l'URSSAF ?",
    a: "Oui. Les calculs utilisent le même moteur (publicodes) et les mêmes règles que les simulateurs de mon-entreprise.urssaf.fr : le modèle « assimilé salarié » pour la SASU et le modèle « travailleur indépendant » pour l'EURL, avec les paramètres en vigueur au 1er juillet 2026. Vous pouvez le vérifier avec les simulateurs officiels proposés plus bas sur cette page.",
  },
  {
    q: "Pourquoi la SASU coûte-t-elle plus cher en cotisations que l'EURL ?",
    a: "Le président de SASU est assimilé salarié : il relève du régime général et paie des cotisations salariales et patronales proches de celles d'un salarié, sans assurance chômage. Le gérant majoritaire d'EURL est travailleur indépendant (TNS) : ses cotisations sont calculées sur sa rémunération et sont généralement plus faibles, avec une protection sociale plus réduite.",
  },
  {
    q: "Le simulateur tient-il compte des dividendes ?",
    a: "Non. Comme le comparateur de statuts de l'URSSAF, il considère que tout le bénéfice est versé en rémunération. Or le mix rémunération et dividendes est souvent le principal levier en SASU, et en EURL une partie des dividendes est soumise aux cotisations sociales. Ce point se chiffre au cas par cas.",
  },
  {
    q: "EURL à l'impôt sur les sociétés ou à l'impôt sur le revenu : que choisir ?",
    a: "À l'impôt sur le revenu, tout le bénéfice de l'EURL est imposé au nom du gérant, qu'il soit versé ou non. À l'impôt sur les sociétés, seule la rémunération versée est imposée à l'impôt sur le revenu, et le bénéfice laissé dans la société supporte l'IS. Le simulateur permet de comparer les deux options pour l'EURL.",
  },
  {
    q: "Comment utiliser le simulateur avec mon TJM ?",
    a: "Cliquez sur « Calculer avec mon TJM », puis saisissez votre taux journalier hors taxes et le nombre de jours facturés dans l'année. Le simulateur en déduit votre chiffre d'affaires annuel et compare immédiatement la SASU et l'EURL. Pensez à compter les congés, les périodes d'intercontrat et les jours non facturés.",
  },
  {
    q: "Le simulateur prend-il en compte la première année d'activité ?",
    a: "Il simule une année complète d'activité. Il n'intègre pas les cotisations provisionnelles et les régularisations propres aux premières années d'un travailleur indépendant. L'ACRE, qui réduit les cotisations au démarrage, peut être activée dans les paramètres.",
  },
];

export default function PageSimulateurSasuEurl() {
  const { defaut, exemples } = calculerAuBuild();
  const ref = exemples.at(1);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#F1F8EA] pt-32 pb-10 md:pt-40 md:pb-14 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/ressources"
              className="inline-flex items-center gap-1.5 text-sm text-turquoise-700 hover:text-turquoise-500 font-medium mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux ressources
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0081A5] leading-[1.1] tracking-tight mb-4">
              Simulateur SASU ou EURL 2026<br />pour freelance
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mb-3">
              Saisissez votre chiffre d&apos;affaires (ou votre TJM) et vos charges : le simulateur compare vos
              cotisations sociales, votre impôt sur le revenu et votre revenu net en SASU et en EURL.
            </p>
            <p className="text-xs text-gray-500">
              Calculs réalisés avec le moteur officiel de l&apos;URSSAF (
              <a
                href="https://mon-entreprise.urssaf.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-turquoise-700"
              >
                mon-entreprise.urssaf.fr
              </a>
              ) · règles en vigueur au 1er juillet 2026
            </p>
          </div>
        </section>

        {/* Simulateur */}
        <section className="bg-[#F1F8EA] pb-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <ComparateurSasuEurl resultatInitial={defaut} />
          </div>
        </section>

        {/* Comment lire */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">Comment lire les résultats</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Bénéfice versé au dirigeant</strong> : c&apos;est votre chiffre d&apos;affaires moins vos charges,
                entièrement consacré à votre rémunération. En SASU, il correspond au coût total de votre salaire pour la
                société, cotisations patronales comprises. En EURL, il correspond à la rémunération brute du gérant.
              </p>
              <p>
                <strong>Cotisations et contributions sociales</strong> : retraite, maladie, allocations familiales,
                CSG-CRDS et formation professionnelle. C&apos;est la principale différence entre les deux statuts.
              </p>
              <p>
                <strong>Revenu net après impôt</strong> : ce qu&apos;il vous reste réellement, une fois les cotisations et
                l&apos;impôt sur le revenu payés, selon la composition de votre foyer.
              </p>
            </div>
          </div>
        </section>

        {/* Simulateur SASU / Simulateur EURL */}
        <section className="pb-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
                Simulateur SASU : charges et salaire net du président
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                <p>
                  En SASU, le président est rémunéré comme un salarié : la société paie des cotisations patronales en plus
                  du salaire brut, et des cotisations salariales sont retenues sur ce brut. Le simulateur part du budget
                  total que la société consacre à votre rémunération et en déduit le salaire net, puis le net après impôt.
                </p>
                {ref && (
                  <p>
                    Dans notre exemple à {fmt(ref.exemple.saisie.chiffreAffaires)} de chiffre d&apos;affaires, les
                    cotisations représentent <strong>{pct(ref.sasu.cotisations, ref.sasu.remuneration)}</strong> de la
                    rémunération totale du président.
                  </p>
                )}
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
                Simulateur EURL : cotisations du gérant majoritaire
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                <p>
                  En EURL, le gérant associé unique est travailleur non salarié (TNS). Ses cotisations sont calculées sur
                  sa rémunération, selon les règles de la Sécurité sociale des indépendants, avec la CSG-CRDS. Le
                  simulateur calcule l&apos;EURL à l&apos;impôt sur les sociétés ou, sur option, à l&apos;impôt sur le
                  revenu.
                </p>
                {ref && (
                  <p>
                    Avec le même chiffre d&apos;affaires, les cotisations du gérant représentent{" "}
                    <strong>{pct(ref.eurl.cotisations, ref.eurl.remuneration)}</strong> de sa rémunération brute.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SASU ou EURL */}
        <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              SASU ou EURL : ce qui change pour un freelance
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 mb-3">SASU : président assimilé salarié</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Régime général de la Sécurité sociale, sans assurance chômage</li>
                  <li>Cotisations plus élevées sur la rémunération</li>
                  <li>Retraite de base et complémentaire Agirc-Arrco</li>
                  <li>Possibilité de se verser peu de salaire et des dividendes</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 mb-3">EURL : gérant travailleur indépendant</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Sécurité sociale des indépendants</li>
                  <li>Cotisations généralement plus faibles</li>
                  <li>Protection sociale plus réduite</li>
                  <li>Une partie des dividendes soumise aux cotisations</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Le simulateur répond à la question du revenu net. Le choix final dépend aussi de votre stratégie de
              rémunération, de votre besoin de protection sociale et de vos droits éventuels au chômage. Notre article{" "}
              <Link
                href="/blog/sasu-ou-eurl-quel-statut-choisir-2026"
                className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500"
              >
                SASU ou EURL : quel statut choisir
              </Link>{" "}
              détaille ces critères, et notre guide{" "}
              <Link
                href="/expert-comptable-freelance"
                className="text-turquoise-700 font-semibold underline underline-offset-2 hover:text-turquoise-500"
              >
                expert-comptable freelance
              </Link>{" "}
              explique comment nous accompagnons ce choix.
            </p>
          </div>
        </section>

        {/* Exemples */}
        {exemples.length > 0 && (
          <section className="py-14 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Exemples de calcul 2026</h2>
              <p className="text-sm text-gray-500 mb-6">
                Activité libérale, EURL à l&apos;impôt sur les sociétés, sans ACRE, tout le bénéfice versé en
                rémunération. Montants annuels.
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {exemples.map(({ exemple, sasu, eurl }) => (
                  <div key={exemple.titre} className="rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h3 className="font-extrabold text-gray-900 mb-1">{exemple.titre}</h3>
                    <p className="text-xs text-gray-500 mb-4">{exemple.detail}</p>
                    <dl className="text-sm space-y-2">
                      <div className="flex justify-between gap-3">
                        <dt className="text-gray-600">Cotisations SASU</dt>
                        <dd className="font-semibold tabular-nums">{fmt(sasu.cotisations)}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-gray-600">Cotisations EURL</dt>
                        <dd className="font-semibold tabular-nums">{fmt(eurl.cotisations)}</dd>
                      </div>
                      <div className="flex justify-between gap-3 pt-2 border-t border-gray-100">
                        <dt className="text-gray-900 font-semibold">Net après impôt SASU</dt>
                        <dd className="font-extrabold tabular-nums">{fmt(sasu.netApresImpot)}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-gray-900 font-semibold">Net après impôt EURL</dt>
                        <dd className="font-extrabold tabular-nums">{fmt(eurl.netApresImpot)}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Vérification URSSAF */}
        <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Vérifier avec les simulateurs officiels de l&apos;URSSAF
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Pour aller dans le détail (ligne par ligne des cotisations, dividendes, cas particuliers), les simulateurs
              de l&apos;URSSAF sont disponibles ci-dessous. Pour la SASU, saisissez comme « rémunération totale » votre
              chiffre d&apos;affaires moins vos charges.
            </p>
            <VerificationURSSAF />
          </div>
        </section>

        {/* Données structurées : outil en ligne et fil d'Ariane */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Simulateur SASU ou EURL 2026",
                url: URL_PAGE,
                description:
                  "Comparateur gratuit des cotisations sociales, de l'impôt sur le revenu et du revenu net d'un freelance en SASU et en EURL, calculé avec le moteur officiel de l'URSSAF.",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
                inLanguage: "fr-FR",
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                provider: {
                  "@type": "AccountingService",
                  name: "JSA Expertise",
                  url: "https://www.jsaexpertise.com",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.jsaexpertise.com" },
                  { "@type": "ListItem", position: 2, name: "Ressources", item: "https://www.jsaexpertise.com/ressources" },
                  { "@type": "ListItem", position: 3, name: "Simulateur SASU ou EURL", item: URL_PAGE },
                ],
              },
            ]),
          }}
        />

        {/* FAQ */}
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
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#00B6DE] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Faites chiffrer votre situation réelle</h2>
            <p className="text-white/85 text-lg mb-8">
              Rémunération, dividendes, protection sociale : nous comparons les scénarios avec vous avant la création ou
              le changement de statut. Premier rendez-vous gratuit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-white text-[#0081A5] hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                Prendre RDV gratuitement
              </Link>
              <a
                href="tel:+33660735546"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-colors"
              >
                06 60 73 55 46
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
