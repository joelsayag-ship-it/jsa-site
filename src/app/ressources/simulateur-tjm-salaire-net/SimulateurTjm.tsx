"use client";

import { useEffect, useRef, useState } from "react";
import { OPTIONS_MOTEUR, type SituationFamiliale } from "@/lib/urssaf/comparateur";
import {
  MICRO_PLAFOND_SERVICES,
  SAISIE_TJM_PAR_DEFAUT,
  calculerTjm,
  tjmPourNet,
  type Moteurs,
  type ResultatTjm,
  type SaisieTjm,
  type Statut,
} from "@/lib/tjm/calculs";

type Mode = "net" | "tjm";
type Periode = "mois" | "an";
type ResultatInverse = Record<Statut, number | null>;

const fmt = (n: number) => `${Math.round(n).toLocaleString("fr-FR")} €`;

const STATUTS: { cle: Statut; label: string }[] = [
  { cle: "micro", label: "Micro" },
  { cle: "eurl", label: "EURL" },
  { cle: "sasu", label: "SASU" },
];

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

function Champ({
  id,
  label,
  aide,
  unite,
  value,
  step = 10,
  max,
  onChange,
}: {
  id: string;
  label: string;
  aide?: string;
  unite: string;
  value: number;
  step?: number;
  max?: number;
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
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => {
            const v = Math.max(0, Number(e.target.value) || 0);
            onChange(max ? Math.min(max, v) : v);
          }}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-20 text-lg font-bold text-gray-900 focus:border-[#00B6DE] focus:outline-none focus:ring-2 focus:ring-[#00B6DE]/30"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">{unite}</span>
      </div>
    </div>
  );
}

/**
 * resultatInitial : simulation par défaut calculée au build (présente dans le HTML),
 * affichée en attendant le chargement du moteur dans le navigateur.
 */
export default function SimulateurTjm({ resultatInitial }: { resultatInitial?: ResultatTjm | null }) {
  const [mode, setMode] = useState<Mode>("net");
  const [saisie, setSaisie] = useState<SaisieTjm>(SAISIE_TJM_PAR_DEFAUT);
  const [netVise, setNetVise] = useState(4000);
  const [periode, setPeriode] = useState<Periode>("mois");
  const [resultat, setResultat] = useState<ResultatTjm | null>(resultatInitial ?? null);
  const [inverse, setInverse] = useState<ResultatInverse | null>(null);
  const [calcul, setCalcul] = useState(false);
  const [erreur, setErreur] = useState(false);
  const moteurs = useRef<Moteurs | null>(null);

  const maj = <K extends keyof SaisieTjm>(cle: K, valeur: SaisieTjm[K]) => setSaisie((s) => ({ ...s, [cle]: valeur }));

  useEffect(() => {
    let annule = false;
    setCalcul(true);
    const t = setTimeout(async () => {
      try {
        if (!moteurs.current) moteurs.current = await chargerMoteurs();
        if (annule) return;
        if (mode === "net") {
          setResultat(calculerTjm(moteurs.current, saisie));
        } else {
          const base = {
            jours: saisie.jours,
            frais: saisie.frais,
            situationFamiliale: saisie.situationFamiliale,
            enfants: saisie.enfants,
          };
          const r: ResultatInverse = { micro: null, eurl: null, sasu: null };
          for (const { cle } of STATUTS) r[cle] = tjmPourNet(moteurs.current, netVise, base, cle);
          if (!annule) setInverse(r);
        }
        if (!annule) setErreur(false);
      } catch {
        if (!annule) setErreur(true);
      } finally {
        if (!annule) setCalcul(false);
      }
    }, 250);
    return () => {
      annule = true;
      clearTimeout(t);
    };
  }, [mode, saisie, netVise]);

  const div = periode === "mois" ? 12 : 1;
  const ca = saisie.tjm * saisie.jours;

  const lignes: { cle: "remuneration" | "cotisations" | "netAvantImpot" | "impot" | "netApresImpot"; label: string; fort?: boolean }[] = [
    { cle: "cotisations", label: "Cotisations sociales" },
    { cle: "netAvantImpot", label: "Revenu net avant impôt" },
    { cle: "impot", label: "Impôt sur le revenu" },
    { cle: "netApresImpot", label: "Revenu net après impôt", fort: true },
  ];

  return (
    <div className="rounded-3xl bg-white shadow-xl border border-gray-100 overflow-hidden">
      {/* Choix du mode */}
      <div className="flex flex-col sm:flex-row gap-2 p-3 bg-gray-50 border-b border-gray-100" role="group" aria-label="Type de calcul">
        {(
          [
            { v: "net", l: "J'ai un TJM : quel revenu net ?" },
            { v: "tjm", l: "Je vise un revenu net : quel TJM ?" },
          ] as const
        ).map((o) => (
          <button
            key={o.v}
            type="button"
            onClick={() => setMode(o.v)}
            aria-pressed={mode === o.v}
            className={`flex-1 px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors ${
              mode === o.v ? "bg-[#0081A5] text-white shadow-sm" : "text-gray-600 hover:bg-white"
            }`}
          >
            {o.l}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* ── Saisie ───────────────────────────────── */}
        <div className="bg-[#F1F8EA] p-6 md:p-8 space-y-6">
          {mode === "net" ? (
            <Champ
              id="tjm"
              label="Votre TJM (taux journalier hors taxes)"
              unite="€ / jour"
              value={saisie.tjm}
              onChange={(v) => maj("tjm", v)}
            />
          ) : (
            <Champ
              id="net-vise"
              label="Revenu net visé, après impôt"
              aide="Ce qui arrive sur votre compte personnel chaque mois, impôt déduit."
              unite="€ / mois"
              step={100}
              value={netVise}
              onChange={setNetVise}
            />
          )}

          <Champ
            id="jours"
            label="Jours facturés dans l'année"
            aide="Environ 250 jours ouvrés, moins vos congés (25 jours), l'intercontrat, la prospection et la formation : 180 à 210 jours est un ordre de grandeur courant."
            unite="jours"
            step={5}
            max={366}
            value={saisie.jours}
            onChange={(v) => maj("jours", v)}
          />

          <Champ
            id="frais"
            label="Frais professionnels annuels"
            aide="Logiciels, matériel, déplacements, assurance, expert-comptable…"
            unite="€ / an"
            step={500}
            value={saisie.frais}
            onChange={(v) => maj("frais", v)}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="famille" className="block text-sm font-semibold text-gray-800 mb-2">
                Situation familiale
              </label>
              <select
                id="famille"
                value={saisie.situationFamiliale}
                onChange={(e) => maj("situationFamiliale", e.target.value as SituationFamiliale)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900"
              >
                <option value="célibataire">Célibataire</option>
                <option value="couple">Marié(e) ou pacsé(e)</option>
              </select>
            </div>
            <div>
              <label htmlFor="enfants" className="block text-sm font-semibold text-gray-800 mb-2">
                Enfants à charge
              </label>
              <select
                id="enfants"
                value={saisie.enfants}
                onChange={(e) => maj("enfants", Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900"
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Activité libérale (conseil, développement, design…), année complète, sans ACRE. Le revenu du conjoint
            n&apos;est pas pris en compte.
          </p>
        </div>

        {/* ── Résultats ────────────────────────────── */}
        <div className="p-6 md:p-8" aria-live="polite">
          {erreur && (
            <p className="rounded-xl bg-red-50 text-red-700 text-sm p-4">
              Le calcul n&apos;a pas pu être effectué. Rechargez la page ou vérifiez les montants saisis.
            </p>
          )}

          {mode === "net" && (
            <>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h2 className="text-xl font-extrabold text-gray-900">Votre revenu net en 2026</h2>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-full" role="group" aria-label="Période">
                  {(["mois", "an"] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeriode(p)}
                      aria-pressed={periode === p}
                      className={`px-3 sm:px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                        periode === p ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                      }`}
                    >
                      par {p}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-5">
                Chiffre d&apos;affaires : <strong className="text-gray-900">{fmt(ca)} HT par an</strong> ({fmt(saisie.tjm)} ×{" "}
                {saisie.jours} jours)
              </p>

              {!resultat && !erreur && (
                <p className="text-sm text-gray-500 py-12 text-center">Chargement du moteur de calcul…</p>
              )}

              {resultat && ca > 0 && (
                <>
                  <div className="grid grid-cols-[minmax(0,1fr)_repeat(3,auto)] gap-x-2 sm:gap-x-4 text-xs sm:text-sm">
                    <div />
                    {STATUTS.map((s) => (
                      <div key={s.cle} className="text-right font-extrabold text-sm sm:text-base pb-3 px-1 sm:px-2 text-gray-900">
                        {s.label}
                      </div>
                    ))}
                    {lignes.map((l) => (
                      <div key={l.cle} className="contents">
                        <div className={`py-3 border-t border-gray-100 ${l.fort ? "font-extrabold text-gray-900" : "text-gray-700"}`}>
                          {l.label}
                        </div>
                        {STATUTS.map((s) => (
                          <div
                            key={s.cle}
                            className={`py-3 border-t border-gray-100 text-right tabular-nums whitespace-nowrap px-1 sm:px-2 ${
                              l.fort ? "text-sm sm:text-base font-extrabold text-[#0081A5]" : "text-gray-900 font-semibold"
                            } ${s.cle === "micro" && resultat.micro.plafondDepasse ? "opacity-50" : ""}`}
                          >
                            {fmt(resultat[s.cle][l.cle] / div)}
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className="py-3 border-t border-gray-100 text-gray-700">Frais professionnels</div>
                    <div className="py-3 border-t border-gray-100 text-right px-1 sm:px-2 font-semibold text-gray-900 whitespace-nowrap">
                      {fmt(resultat.micro.frais / div)}
                    </div>
                    <div className="py-3 border-t border-gray-100 text-right px-1 sm:px-2 text-gray-500 col-span-2">
                      payés par la société
                    </div>
                  </div>

                  {resultat.micro.plafondDepasse && (
                    <p className="mt-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm p-4">
                      Avec {fmt(ca)}{" "}de chiffre d&apos;affaires, vous dépassez le plafond de la micro-entreprise (
                      {fmt(MICRO_PLAFOND_SERVICES)}{" "}par an en 2026) : le régime n&apos;est plus possible après deux années de
                      dépassement. Le résultat micro est donné à titre indicatif.
                    </p>
                  )}

                  <div className="mt-6 rounded-2xl bg-[#F1F8EA] p-5 text-sm text-gray-700 space-y-2">
                    <p>
                      <strong className="text-gray-900">Micro-entreprise</strong>{" "}: cotisations de 25,8 % du chiffre
                      d&apos;affaires (25,6 % plus 0,2 % de formation professionnelle) ; vos frais ne sont pas déductibles,
                      ils restent à votre charge.
                    </p>
                    <p>
                      <strong className="text-gray-900">EURL et SASU</strong>{" "}: tout le bénéfice (chiffre d&apos;affaires
                      moins frais) est versé en rémunération, sans dividendes, calcul identique au moteur de l&apos;Urssaf.
                    </p>
                  </div>
                </>
              )}
            </>
          )}

          {mode === "tjm" && (
            <>
              <h2 className="text-xl font-extrabold text-gray-900 mb-2">Le TJM à facturer</h2>
              <p className="text-sm text-gray-600 mb-6">
                Pour gagner <strong className="text-gray-900">{fmt(netVise)} net par mois après impôt</strong>, en
                facturant {saisie.jours} jours par an :
              </p>
              {!inverse && !erreur && (
                <p className="text-sm text-gray-500 py-12 text-center">Calcul en cours…</p>
              )}
              {inverse && (
                <div className={`grid sm:grid-cols-3 gap-3 ${calcul ? "opacity-60" : ""}`}>
                  {STATUTS.map((s) => {
                    const t = inverse[s.cle];
                    const caNecessaire = t !== null ? t * saisie.jours : 0;
                    const horsMicro = s.cle === "micro" && t !== null && caNecessaire > MICRO_PLAFOND_SERVICES;
                    return (
                      <div key={s.cle} className="rounded-2xl border border-gray-200 p-5 text-center">
                        <p className="font-extrabold text-gray-900 mb-2">{s.label === "Micro" ? "Micro-entreprise" : s.label}</p>
                        {t === null ? (
                          <p className="text-sm text-gray-500">Objectif hors de portée</p>
                        ) : (
                          <>
                            <p className={`text-3xl font-extrabold tabular-nums ${horsMicro ? "text-gray-400" : "text-[#0081A5]"}`}>
                              {fmt(t)}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">par jour HT</p>
                            <p className="text-xs text-gray-600 mt-3">soit {fmt(caNecessaire)} HT par an</p>
                            {horsMicro && (
                              <p className="text-xs text-amber-800 mt-2">
                                Au-dessus du plafond micro de {fmt(MICRO_PLAFOND_SERVICES)}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-6">
                Le calcul cherche le plus petit TJM (arrondi à 5 € près) qui atteint votre objectif, avec les mêmes
                règles que le mode « quel revenu net ». En EURL et en SASU, tout le bénéfice est versé en rémunération.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
