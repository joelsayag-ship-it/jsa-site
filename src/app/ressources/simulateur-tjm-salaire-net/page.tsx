import type { Metadata } from "next";
import Link from "next/link";
import Engine from "publicodes";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import SimulateurTjm from "./SimulateurTjm";
import modeleAS from "@/lib/urssaf/modele-as.json";
import modeleTI from "@/lib/urssaf/modele-ti.json";
import { OPTIONS_MOTEUR } from "@/lib/urssaf/comparateur";
import {
  MICRO_PLAFOND_SERVICES,
  SAISIE_TJM_PAR_DEFAUT,
  calculerTjm,
  tjmPourNet,
  type Moteurs,
  type ResultatTjm,
} from "@/lib/tjm/calculs";

const URL_PAGE = "https://www.jsaexpertise.com/ressources/simulateur-tjm-salaire-net";

export const metadata: Metadata = {
  title: "Simulateur TJM en salaire net 2026 : micro, EURL ou SASU | JSA Expertise",
  description:
    "Convertissez votre TJM en salaire net (ou trouvez le TJM pour un net visé) en micro-entreprise, EURL et SASU. Calcul avec le moteur officiel de l'Urssaf, impôt compris.",
  alternates: { canonical: URL_PAGE },
  openGraph: {
    title: "Simulateur TJM en salaire net 2026 : micro, EURL ou SASU",
    description:
      "Combien reste-t-il de votre TJM ? Revenu net avant et après impôt en micro-entreprise, EURL et SASU, et TJM nécessaire pour un net visé.",
    url: URL_PAGE,
    siteName: "JSA Expertise",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const fmt = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} €`;

/* ── Calculs au build, avec le même moteur que le simulateur ── */

const TJMS = [400, 500, 600, 800];
const NETS_VISES = [3000, 4000, 5000, 6000];

type Calculs = {
  defaut: ResultatTjm | null;
  exemples: { tjm: number; r: ResultatTjm }[];
  inverses: { net: number; micro: number | null; eurl: number | null; sasu: number | null }[];
};

function calculerAuBuild(): Calculs {
  try {
    const moteurs: Moteurs = {
      sasu: new Engine(modeleAS as never, OPTIONS_MOTEUR),
      eurl: new Engine(modeleTI as never, OPTIONS_MOTEUR),
    };
    const base = SAISIE_TJM_PAR_DEFAUT;
    const sansTjm = {
      jours: base.jours,
      frais: base.frais,
      situationFamiliale: base.situationFamiliale,
      enfants: base.enfants,
    };
    return {
      defaut: calculerTjm(moteurs, base),
      exemples: TJMS.map((tjm) => ({ tjm, r: calculerTjm(moteurs, { ...base, tjm }) })),
      inverses: NETS_VISES.map((net) => ({
        net,
        micro: tjmPourNet(moteurs, net, sansTjm, "micro"),
        eurl: tjmPourNet(moteurs, net, sansTjm, "eurl"),
        sasu: tjmPourNet(moteurs, net, sansTjm, "sasu"),
      })),
    };
  } catch {
    return { defaut: null, exemples: [], inverses: [] };
  }
}

/* ── FAQ ── */

const FAQS = [
  {
    q: "Comment convertir un TJM en salaire net ?",
    a: "Multipliez votre TJM par le nombre de jours réellement facturés dans l'année pour obtenir votre chiffre d'affaires. Retirez vos frais professionnels, puis les cotisations sociales, qui dépendent du statut (micro-entreprise, EURL ou SASU), et enfin l'impôt sur le revenu. Divisez par 12 pour obtenir un équivalent mensuel. Le simulateur fait ce calcul avec le moteur officiel de l'Urssaf.",
  },
  {
    q: "Combien de jours facturer par an en freelance ?",
    a: "Une année compte environ 250 jours ouvrés. Après 5 semaines de congés, il reste environ 225 jours, dont il faut encore retirer l'intercontrat, la prospection, la formation et les jours d'absence. Un consultant en mission longue facture souvent entre 180 et 210 jours par an. Mieux vaut simuler avec une hypothèse prudente.",
  },
  {
    q: "Pourquoi le revenu est-il plus faible en SASU qu'en EURL ?",
    a: "Le président de SASU est assimilé salarié : il paie des cotisations proches de celles d'un cadre (sans assurance chômage), plus élevées que celles du gérant d'EURL, travailleur indépendant. En contrepartie, sa protection sociale est plus large. En SASU, le recours aux dividendes, sans cotisations sociales mais soumis à la flat tax de 31,4 %, change souvent le résultat : le simulateur ne le prend pas en compte.",
  },
  {
    q: "La micro-entreprise est-elle possible avec mon TJM ?",
    a: `En activité libérale, la micro-entreprise est limitée à ${MICRO_PLAFOND_SERVICES.toLocaleString("fr-FR")} € de chiffre d'affaires par an en 2026. À 500 € par jour, il est dépassé dès 168 jours facturés. Au-delà, on sort du régime après deux années de dépassement. La micro-entreprise ne permet pas non plus de déduire ses frais réels : ils restent à votre charge.`,
  },
  {
    q: "Le TJM est-il hors taxes ?",
    a: "Oui, le TJM s'entend hors taxes. Si vous facturez la TVA, vous la reversez à l'État : elle ne fait pas partie de votre revenu. Le simulateur raisonne sur le chiffre d'affaires hors taxes.",
  },
  {
    q: "Le simulateur tient-il compte de l'ACRE et des dividendes ?",
    a: "Non. Il calcule une année complète, sans ACRE (qui réduit les cotisations la première année) et sans dividendes : en EURL et en SASU, tout le bénéfice est versé en rémunération. Pour ces cas, consultez notre guide « Devenir freelance » ou demandez une simulation personnalisée.",
  },
];

const SOURCES = [
  {
    label: "Service-public : cotisations sociales du micro-entrepreneur (F36232, vérifiée le 1er janvier 2026)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F36232",
  },
  {
    label: "Service-public : régime fiscal de la micro-entreprise, seuils et abattement (F23267, vérifiée le 13 mai 2026)",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F23267",
  },
  {
    label: "Modèles de calcul de l'Urssaf (mon-entreprise.urssaf.fr), règles au 1er juillet 2026",
    url: "https://github.com/betagouv/mon-entreprise",
  },
];

export default function PageSimulateurTjm() {
  const { defaut, exemples, inverses } = calculerAuBuild();
  const ex500 = exemples.find((e) => e.tjm === 500);

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
              Simulateur TJM en salaire net 2026
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mb-3">
              Combien vous reste-t-il de votre taux journalier ? Saisissez votre TJM et vos jours facturés : le
              simulateur calcule votre revenu net avant et après impôt en <strong>micro-entreprise</strong>, en{" "}
              <strong>EURL</strong> et en <strong>SASU</strong>. Ou faites l&apos;inverse : indiquez le revenu net que vous
              visez, il vous donne le TJM à facturer.
            </p>
            <p className="text-sm text-gray-500">
              Cotisations et impôt calculés avec le moteur officiel de l&apos;Urssaf · Règles vérifiées le 12 novembre 2026
            </p>
          </div>
        </section>

        {/* Simulateur */}
        <section className="bg-[#F1F8EA] pb-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <SimulateurTjm resultatInitial={defaut} />
          </div>
        </section>

        {/* Exemples TJM -> net */}
        {exemples.length > 0 && (
          <section className="py-14 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Combien rapporte un TJM de 400, 500, 600 ou 800 € ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                Revenu net mensuel après impôt, pour 200 jours facturés par an, 3 000 € de frais professionnels, un
                célibataire sans enfant et une activité libérale. Calcul réalisé avec le même moteur que le simulateur.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-sm min-w-[560px]">
                  <thead>
                    <tr className="bg-[#F1F8EA] text-left">
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900">TJM</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900">Chiffre d&apos;affaires annuel</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900 text-right">Micro-entreprise</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900 text-right">EURL</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900 text-right">SASU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exemples.map(({ tjm, r }) => (
                      <tr key={tjm} className="border-t border-gray-100">
                        <th scope="row" className="px-4 py-3 font-bold text-gray-900 text-left">{fmt(tjm)} / jour</th>
                        <td className="px-4 py-3 text-gray-700 tabular-nums">{fmt(r.chiffreAffaires)}</td>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {r.micro.plafondDepasse ? (
                            <span className="text-gray-400">Plafond dépassé</span>
                          ) : (
                            <strong>{fmt(r.micro.netApresImpot / 12)}</strong>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums"><strong>{fmt(r.eurl.netApresImpot / 12)}</strong></td>
                        <td className="px-4 py-3 text-right tabular-nums"><strong>{fmt(r.sasu.netApresImpot / 12)}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Net par mois, après cotisations, frais et impôt sur le revenu. Micro-entreprise : plafond de{" "}
                {fmt(MICRO_PLAFOND_SERVICES)}{" "}de chiffre d&apos;affaires en 2026. EURL à l&apos;impôt sur les sociétés et
                SASU : tout le bénéfice versé en rémunération.
              </p>
              {ex500 && (
                <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
                  Autrement dit, à 500 € par jour, il vous reste environ{" "}
                  <strong>{Math.round((ex500.r.eurl.netApresImpot / ex500.r.chiffreAffaires) * 100)} %</strong>{" "}de votre
                  chiffre d&apos;affaires en EURL et{" "}
                  <strong>{Math.round((ex500.r.sasu.netApresImpot / ex500.r.chiffreAffaires) * 100)} %</strong>{" "}en SASU,
                  une fois les frais, les cotisations et l&apos;impôt payés.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Exemples net -> TJM */}
        {inverses.length > 0 && (
          <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Quel TJM pour gagner 3 000, 4 000, 5 000 ou 6 000 € net par mois ?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                TJM minimum pour atteindre un revenu net mensuel après impôt, avec les mêmes hypothèses : 200 jours
                facturés, 3 000 € de frais, célibataire sans enfant.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
                <table className="w-full text-sm min-w-[520px]">
                  <thead>
                    <tr className="text-left">
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900">Net visé par mois</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900 text-right">Micro-entreprise</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900 text-right">EURL</th>
                      <th scope="col" className="px-4 py-3 font-extrabold text-gray-900 text-right">SASU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inverses.map((l) => (
                      <tr key={l.net} className="border-t border-gray-100">
                        <th scope="row" className="px-4 py-3 font-bold text-gray-900 text-left">{fmt(l.net)}</th>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {l.micro === null || l.micro * 200 > MICRO_PLAFOND_SERVICES ? (
                            <span className="text-gray-400">Hors plafond</span>
                          ) : (
                            <strong>{fmt(l.micro)} / jour</strong>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {l.eurl === null ? "-" : <strong>{fmt(l.eurl)} / jour</strong>}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {l.sasu === null ? "-" : <strong>{fmt(l.sasu)} / jour</strong>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Méthode */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
              Du TJM au salaire net : les 4 étapes du calcul
            </h2>
            <ol className="list-decimal pl-6 space-y-3 marker:font-bold marker:text-[#0081A5]">
              <li>
                <strong>Chiffre d&apos;affaires</strong>{" "}: TJM × jours facturés. C&apos;est la base de tout, et le nombre
                de jours est l&apos;hypothèse la plus importante. Comptez vos congés, l&apos;intercontrat et le temps passé
                à trouver des missions.
              </li>
              <li>
                <strong>Frais professionnels</strong> : en EURL et en SASU, la société les paie avant de vous rémunérer.
                En micro-entreprise, ils ne sont pas déductibles : ils sortent de votre poche.
              </li>
              <li>
                <strong>Cotisations sociales</strong>{" "}: 25,6 % du chiffre d&apos;affaires en micro-entreprise libérale
                (plus 0,2 % de formation professionnelle), calcul sur la rémunération en EURL (travailleur indépendant)
                et en SASU (assimilé salarié, cotisations les plus élevées).
              </li>
              <li>
                <strong>Impôt sur le revenu</strong>{" "}: barème progressif, selon votre situation familiale. En
                micro-entreprise, il porte sur le chiffre d&apos;affaires après un abattement forfaitaire de 34 %.
              </li>
            </ol>
            <p className="mt-6">
              Pour fixer votre prix (et pas seulement le convertir), suivez notre méthode pas à pas dans l&apos;article{" "}
              <Link href="/blog/fixer-son-tjm-freelance-methode-calcul" className="text-[#0081A5] font-semibold underline underline-offset-2">
                Fixer son TJM de freelance
              </Link>
              . Pour comparer la SASU et l&apos;EURL à partir d&apos;un chiffre d&apos;affaires, avec l&apos;option
              impôt sur le revenu et l&apos;ACRE, utilisez le{" "}
              <Link href="/ressources/simulateur-sasu-eurl" className="text-[#0081A5] font-semibold underline underline-offset-2">
                simulateur SASU ou EURL
              </Link>
              .
            </p>
            <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-5">
              <p className="font-extrabold text-red-700 mb-1">Vous quittez un emploi salarié ?</p>
              <p className="text-sm text-gray-700">
                Chômage, ARE ou ARCE, ACRE, salaire et dividendes : notre{" "}
                <Link href="/devenir-freelance" className="text-red-700 font-semibold underline underline-offset-2">
                  guide pour devenir freelance en 2026
                </Link>{" "}
                détaille ce qui change selon le statut, avec des exemples chiffrés.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F1F8EA] py-14 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl bg-white shadow-sm p-6">
                  <h3 className="font-extrabold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-10 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">Sources officielles</h2>
            <ul className="space-y-2 text-sm">
              {SOURCES.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener" className="text-[#0081A5] underline underline-offset-2">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Simulation indicative pour une année complète d&apos;activité, hors ACRE, dividendes, versement libératoire
              et revenus du conjoint. Votre situation réelle peut différer : faites-la vérifier avant de décider.
            </p>
          </div>
        </section>

        {/* Données structurées */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "Simulateur TJM en salaire net 2026",
                url: URL_PAGE,
                description:
                  "Simulateur gratuit qui convertit le TJM d'un freelance en revenu net avant et après impôt en micro-entreprise, EURL et SASU, et calcule le TJM nécessaire pour un revenu net visé.",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
                inLanguage: "fr-FR",
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                provider: { "@type": "AccountingService", name: "JSA Expertise", url: "https://www.jsaexpertise.com" },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.jsaexpertise.com" },
                  { "@type": "ListItem", position: 2, name: "Ressources", item: "https://www.jsaexpertise.com/ressources" },
                  { "@type": "ListItem", position: 3, name: "Simulateur TJM en salaire net", item: URL_PAGE },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ]),
          }}
        />

        <ContactSection
          titre="Votre TJM, chiffré avec votre vraie situation"
          formulaire="Formulaire du simulateur TJM (bas de page)"
          intro={
            <>
              Statut, rémunération, dividendes, chômage : on calcule avec vous ce qui vous restera vraiment, avant de
              vous lancer. Le premier rendez-vous est gratuit, en visio ou par téléphone.
            </>
          }
        />
      </main>

      <Footer />
    </>
  );
}
