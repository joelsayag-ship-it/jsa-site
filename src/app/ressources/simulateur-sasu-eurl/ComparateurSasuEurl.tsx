"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type Engine from "publicodes";
import {
  OPTIONS_MOTEUR,
  SAISIE_PAR_DEFAUT,
  calculerEURL,
  calculerSASU,
  type ResultatComparaison,
  type SaisieComparateur,
} from "@/lib/urssaf/comparateur";

type Moteurs = { sasu: Engine; eurl: Engine };
type Periode = "mois" | "an";

const fmt = (n: number) =>
  `${Math.round(n).toLocaleString("fr-FR")} €`;

async function chargerMoteurs(): Promise<Moteurs> {
  const [{ default: EngineClass }, as, ti] = await Promise.all([
    import("publicodes"),
    import("@/lib/urssaf/modele-as.json"),
    import("@/lib/urssaf/modele-ti.json"),
  ]);
  return {
    sasu: new EngineClass(as.default as never, OPTIONS_MOTEUR),
    eurl: new EngineClass(ti.default as never, OPTIONS_MOTEUR),
  };
}

function Choix<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-gray-800 mb-2">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              value === o.value
                ? "bg-[#0081A5] border-[#0081A5] text-white"
                : "bg-white border-gray-300 text-gray-700 hover:border-[#00B6DE]"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function ChampMontant({
  id,
  label,
  aide,
  value,
  onChange,
}: {
  id: string;
  label: string;
  aide?: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      {aide && <p className="text-xs text-gray-500 mb-2">{aide}</p>}
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          step={1000}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-16 text-lg font-bold text-gray-900 focus:border-[#00B6DE] focus:outline-none focus:ring-2 focus:ring-[#00B6DE]/30"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">€ / an</span>
      </div>
    </div>
  );
}

/**
 * resultatInitial : résultat de la simulation par défaut, calculé au build côté serveur.
 * Il est affiché immédiatement (et présent dans le HTML lu par Google) en attendant
 * le chargement du moteur dans le navigateur.
 */
export default function ComparateurSasuEurl({ resultatInitial }: { resultatInitial?: ResultatComparaison | null }) {
  const [saisie, setSaisie] = useState<SaisieComparateur>(SAISIE_PAR_DEFAUT);
  const [periode, setPeriode] = useState<Periode>("mois");
  const [modeTJM, setModeTJM] = useState(false);
  const [tjm, setTjm] = useState(500);
  const [jours, setJours] = useState(200);
  const [resultat, setResultat] = useState<ResultatComparaison | null>(resultatInitial ?? null);
  const [erreur, setErreur] = useState(false);
  const moteurs = useRef<Moteurs | null>(null);

  const maj = <K extends keyof SaisieComparateur>(cle: K, valeur: SaisieComparateur[K]) =>
    setSaisie((s) => ({ ...s, [cle]: valeur }));

  const saisieEffective = useMemo<SaisieComparateur>(
    () => (modeTJM ? { ...saisie, chiffreAffaires: Math.round(tjm * jours) } : saisie),
    [modeTJM, tjm, jours, saisie],
  );

  useEffect(() => {
    let annule = false;
    const t = setTimeout(async () => {
      try {
        if (!moteurs.current) moteurs.current = await chargerMoteurs();
        if (annule) return;
        const { sasu, eurl } = moteurs.current;
        setResultat({ sasu: calculerSASU(sasu, saisieEffective), eurl: calculerEURL(eurl, saisieEffective) });
        setErreur(false);
      } catch {
        if (!annule) setErreur(true);
      }
    }, 200);
    return () => {
      annule = true;
      clearTimeout(t);
    };
  }, [saisieEffective]);

  const div = periode === "mois" ? 12 : 1;
  const benefice = saisieEffective.chiffreAffaires - saisieEffective.charges;
  const ecart = resultat ? resultat.eurl.netApresImpot - resultat.sasu.netApresImpot : 0;
  const gagnant = !resultat || benefice <= 0 || Math.abs(ecart) < 1 ? null : ecart > 0 ? "eurl" : "sasu";

  const lignes: { cle: keyof ResultatComparaison["sasu"]; label: string; fort?: boolean }[] = [
    { cle: "remuneration", label: "Bénéfice versé au dirigeant" },
    { cle: "cotisations", label: "Cotisations et contributions sociales" },
    { cle: "netAvantImpot", label: "Revenu net avant impôt" },
    { cle: "impot", label: "Impôt sur le revenu" },
    { cle: "netApresImpot", label: "Revenu net après impôt", fort: true },
  ];

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* ── Saisie ───────────────────────────────── */}
        <div className="bg-[#F1F8EA] p-6 md:p-8 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-800">Votre chiffre d&apos;affaires</span>
              <button
                type="button"
                onClick={() => setModeTJM((m) => !m)}
                className="text-xs font-semibold text-[#0081A5] underline underline-offset-2"
              >
                {modeTJM ? "Saisir un chiffre d'affaires" : "Calculer avec mon TJM"}
              </button>
            </div>
            {modeTJM ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="tjm" className="block text-xs text-gray-600 mb-1">TJM (€ HT)</label>
                  <input
                    id="tjm"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    step={10}
                    value={tjm}
                    onChange={(e) => setTjm(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-lg font-bold text-gray-900 focus:border-[#00B6DE] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="jours" className="block text-xs text-gray-600 mb-1">Jours facturés / an</label>
                  <input
                    id="jours"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={366}
                    value={jours}
                    onChange={(e) => setJours(Math.min(366, Math.max(0, Number(e.target.value) || 0)))}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-lg font-bold text-gray-900 focus:border-[#00B6DE] focus:outline-none"
                  />
                </div>
                <p className="col-span-2 text-sm text-gray-700">
                  Chiffre d&apos;affaires : <strong>{fmt(saisieEffective.chiffreAffaires)} HT / an</strong>
                </p>
              </div>
            ) : (
              <ChampMontant
                id="ca"
                label="Chiffre d'affaires annuel HT"
                value={saisie.chiffreAffaires}
                onChange={(v) => maj("chiffreAffaires", v)}
              />
            )}
          </div>

          <ChampMontant
            id="charges"
            label="Charges annuelles de l'entreprise"
            aide="Logiciels, matériel, déplacements, expert-comptable… hors votre rémunération."
            value={saisie.charges}
            onChange={(v) => maj("charges", v)}
          />

          <Choix
            label="Nature de votre activité"
            value={saisie.activite}
            onChange={(v) => maj("activite", v)}
            options={[
              { value: "libérale", label: "Libérale (conseil, développement, design…)" },
              { value: "commerciale", label: "Commerciale ou artisanale" },
            ]}
          />

          <Choix
            label="Imposition des bénéfices de l'EURL"
            value={saisie.impositionEURL}
            onChange={(v) => maj("impositionEURL", v)}
            options={[
              { value: "IS", label: "Impôt sur les sociétés" },
              { value: "IR", label: "Impôt sur le revenu" },
            ]}
          />

          <div>
            <Choix
              label="Bénéficiez-vous de l'ACRE ?"
              value={saisie.acre ? "oui" : "non"}
              onChange={(v) => maj("acre", v === "oui")}
              options={[
                { value: "non", label: "Non" },
                { value: "oui", label: "Oui" },
              ]}
            />
            <p className="text-xs text-gray-500 mt-2">
              Réduction de cotisations au démarrage. Elle diminue quand la rémunération augmente et
              disparaît au-delà d&apos;un certain niveau.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="famille" className="block text-sm font-semibold text-gray-800 mb-2">Situation familiale</label>
              <select
                id="famille"
                value={saisie.situationFamiliale}
                onChange={(e) => maj("situationFamiliale", e.target.value as SaisieComparateur["situationFamiliale"])}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900"
              >
                <option value="célibataire">Célibataire</option>
                <option value="couple">Marié(e) ou pacsé(e)</option>
              </select>
            </div>
            <div>
              <label htmlFor="enfants" className="block text-sm font-semibold text-gray-800 mb-2">Enfants à charge</label>
              <select
                id="enfants"
                value={saisie.enfants}
                onChange={(e) => maj("enfants", Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900"
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── Résultats ────────────────────────────── */}
        <div className="p-6 md:p-8" aria-live="polite">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-extrabold text-gray-900">Résultat 2026</h2>
            <div className="flex gap-1 bg-gray-100 p-1 rounded-full" role="group" aria-label="Période">
              {(["mois", "an"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriode(p)}
                  aria-pressed={periode === p}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                    periode === p ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                  }`}
                >
                  par {p}
                </button>
              ))}
            </div>
          </div>

          {erreur && (
            <p className="rounded-xl bg-red-50 text-red-700 text-sm p-4">
              Le calcul n&apos;a pas pu être effectué. Rechargez la page ou vérifiez les montants saisis.
            </p>
          )}

          {!resultat && !erreur && (
            <p className="text-sm text-gray-500 py-12 text-center">Chargement du moteur de calcul…</p>
          )}

          {resultat && benefice <= 0 && (
            <p className="rounded-xl bg-amber-50 text-amber-800 text-sm p-4">
              Vos charges sont supérieures ou égales à votre chiffre d&apos;affaires : il n&apos;y a pas de bénéfice à verser.
            </p>
          )}

          {resultat && benefice > 0 && (
            <>
              <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-3 sm:gap-x-6 text-sm">
                <div />
                <div className={`text-center font-extrabold text-base pb-3 px-2 ${gagnant === "sasu" ? "text-[#0081A5]" : "text-gray-900"}`}>
                  SASU
                </div>
                <div className={`text-center font-extrabold text-base pb-3 px-2 ${gagnant === "eurl" ? "text-[#0081A5]" : "text-gray-900"}`}>
                  EURL
                </div>
                {lignes.map((l) => (
                  <div key={l.cle} className="contents">
                    <div className={`py-3 border-t border-gray-100 ${l.fort ? "font-extrabold text-gray-900" : "text-gray-700"}`}>
                      {l.label}
                    </div>
                    {(["sasu", "eurl"] as const).map((st) => (
                      <div
                        key={st}
                        className={`py-3 border-t border-gray-100 text-right tabular-nums whitespace-nowrap px-2 ${
                          l.fort
                            ? `text-base font-extrabold ${gagnant === st ? "text-[#0081A5] bg-[#00B6DE]/10 rounded-lg" : "text-gray-900"}`
                            : "text-gray-900 font-semibold"
                        }`}
                      >
                        {fmt(resultat[st][l.cle] / div)}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="py-3 border-t border-gray-100 text-gray-700">Trimestres de retraite validés</div>
                <div className="py-3 border-t border-gray-100 text-right px-2 font-semibold text-gray-900">{resultat.sasu.trimestres} / 4</div>
                <div className="py-3 border-t border-gray-100 text-right px-2 font-semibold text-gray-900">{resultat.eurl.trimestres} / 4</div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F1F8EA] p-5">
                {gagnant ? (
                  <p className="text-gray-900">
                    Avec ces hypothèses, l&apos;<strong>{gagnant === "eurl" ? "EURL" : "SASU"}</strong> vous laisse{" "}
                    <strong className="text-[#0081A5]">{fmt(Math.abs(ecart) / div)} de plus par {periode}</strong> après impôt.
                  </p>
                ) : (
                  <p className="text-gray-900">Avec ces hypothèses, les deux statuts donnent un revenu équivalent.</p>
                )}
                <p className="text-xs text-gray-600 mt-2">
                  Tout le bénéfice est versé en rémunération, sans dividendes. La SASU cotise davantage mais offre une
                  protection sociale plus large (régime général). Le meilleur choix dépend aussi des dividendes, de la
                  retraite et de votre situation : c&apos;est ce que nous chiffrons lors du premier rendez-vous.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
