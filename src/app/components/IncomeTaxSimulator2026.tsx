"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  calculateNetTax,
  type Situation,
  type TaxInputs,
} from "../../lib/tax2026";

// ─────────────────────────────────────────────────────────────────────────────
// Types & valeurs initiales
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_INPUTS: TaxInputs = {
  situation: "celibataire",
  nbEnfants: 0,
  parentIsole: false,

  salairesDeclarant: 0,
  salairesConjoint: 0,
  salairesPreAbatus: false,

  remDirigeantAssimile: 0,
  remDirigeantAssimilePreAbatus: false,

  remDirigeantTNS: 0,
  bncProfessionnel: 0,
  bicProfessionnel: 0,

  microBNC: 0,
  microBICServices: 0,
  microBICVentes: 0,
  versementLiberatoire: false,

  revenusFonciers: 0,
  resultatLMNP: 0,
  pensionsRetraites: 0,
  autresRevenus: 0,

  pensionAlimentaire: 0,
  versementsPER: 0,
  csgDeductible: 0,
  autresCharges: 0,

  emploiADomicile: 0,
  fraisGardeEnfants: 0,
  donsAssociations: 0,
  donsAideEnDifficulte: false,
  autresReductions: 0,

  appliquerDecote: true,
};

interface Props {
  contactHref?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers de formatage
// ─────────────────────────────────────────────────────────────────────────────

const eurosFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("fr-FR", {
  style: "percent",
  maximumFractionDigits: 1,
});

const formatEuros = (n: number) => eurosFormatter.format(Math.round(n));
const formatPercent = (n: number) => percentFormatter.format(n);

// ─────────────────────────────────────────────────────────────────────────────
// Sous-composants UI
// ─────────────────────────────────────────────────────────────────────────────

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 shadow-sm">
      <header className="mb-5">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Tooltip({ text }: { text: string }) {
  return (
    <span className="relative inline-block group ml-1 align-middle">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold cursor-help select-none"
      >
        ?
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 max-w-[80vw] bg-gray-900 text-white text-xs leading-snug rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10 shadow-lg"
      >
        {text}
      </span>
    </span>
  );
}

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (n: number) => void;
  hint?: string;
  tooltip?: string;
  suffix?: string;
  min?: number;
  step?: number;
}

function NumberField({
  label,
  value,
  onChange,
  hint,
  tooltip,
  suffix = "€",
  min = 0,
  step = 100,
}: NumberFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </label>
      <div className="mt-1 relative">
        <input
          type="number"
          inputMode="numeric"
          min={min}
          step={step}
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(e) => {
            const v = e.target.value;
            onChange(v === "" ? 0 : Math.max(min, Number(v)));
          }}
          className="w-full rounded-lg border border-gray-300 bg-white pl-3 pr-10 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-turquoise-500 transition"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          {suffix}
        </span>
      </div>
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}

function ToggleField({
  label,
  checked,
  onChange,
  hint,
}: {
  label: string;
  checked: boolean;
  onChange: (b: boolean) => void;
  hint?: string;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer select-none">
      <span className="relative inline-flex items-center mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span className="w-10 h-6 rounded-full bg-gray-300 peer-checked:bg-turquoise-500 transition-colors" />
        <span className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
      </span>
      <span>
        <span className="block text-sm font-medium text-gray-800">{label}</span>
        {hint && <span className="block text-xs text-gray-500">{hint}</span>}
      </span>
    </label>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-turquoise-50 text-turquoise-700 border border-turquoise-100">
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────────────────────────────────────

export default function IncomeTaxSimulator2026({
  contactHref = "/#contact",
}: Props) {
  const [inputs, setInputs] = useState<TaxInputs>(INITIAL_INPUTS);
  const [detailOpen, setDetailOpen] = useState(false);

  const result = useMemo(() => calculateNetTax(inputs), [inputs]);

  const update = <K extends keyof TaxInputs>(key: K, value: TaxInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => setInputs(INITIAL_INPUTS);

  const isMarried = inputs.situation === "marie_pacse";
  const microSaisi =
    inputs.microBNC > 0 ||
    inputs.microBICServices > 0 ||
    inputs.microBICVentes > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* ── Colonne saisie ──────────────────────────────────────────────── */}
      <div className="lg:col-span-2 space-y-6">
        {/* 1. Situation familiale */}
        <Card
          title="Situation familiale"
          subtitle="Sert à déterminer le nombre de parts fiscales du foyer."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Situation
              </label>
              <select
                value={inputs.situation}
                onChange={(e) =>
                  update("situation", e.target.value as Situation)
                }
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-turquoise-500"
              >
                <option value="celibataire">Célibataire</option>
                <option value="marie_pacse">Marié(e) / PACSÉ(e)</option>
                <option value="veuf">Veuf / Veuve</option>
                <option value="divorce_separe">Divorcé(e) / Séparé(e)</option>
              </select>
            </div>

            <NumberField
              label="Nombre d'enfants à charge"
              value={inputs.nbEnfants}
              onChange={(n) => update("nbEnfants", Math.floor(n))}
              suffix=""
              step={1}
              tooltip="Enfants mineurs ou majeurs rattachés. La garde alternée détaillée n'est pas gérée dans cette version."
            />
          </div>

          {(inputs.situation === "celibataire" ||
            inputs.situation === "divorce_separe") &&
            inputs.nbEnfants > 0 && (
              <div className="pt-2">
                <ToggleField
                  label="Parent isolé (case T)"
                  checked={inputs.parentIsole}
                  onChange={(b) => update("parentIsole", b)}
                  hint="Vous élevez seul(e) vos enfants, sans concubin ni partenaire."
                />
                {inputs.parentIsole && (
                  <p className="mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
                    Majoration parent isolé appliquée de manière simplifiée.
                    Certains cas particuliers (enfants alternés, situation
                    intervenue en cours d'année) ne sont pas couverts.
                  </p>
                )}
              </div>
            )}

          <div className="flex flex-wrap gap-2 pt-1">
            <Pill>{result.parts.toLocaleString("fr-FR")} part(s) fiscales</Pill>
          </div>
        </Card>

        {/* 2. Revenus du foyer */}
        <Card
          title="Revenus du foyer"
          subtitle="Saisissez les montants annuels en euros."
        >
          {/* Salaires */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="Salaires nets imposables — déclarant"
              value={inputs.salairesDeclarant}
              onChange={(n) => update("salairesDeclarant", n)}
              tooltip="Net imposable annuel figurant sur votre fiche de paie de décembre ou cumul annuel."
            />
            {isMarried && (
              <NumberField
                label="Salaires nets imposables — conjoint"
                value={inputs.salairesConjoint}
                onChange={(n) => update("salairesConjoint", n)}
              />
            )}
          </div>

          <ToggleField
            label="Je saisis déjà un montant après abattement de 10 %"
            checked={inputs.salairesPreAbatus}
            onChange={(b) => update("salairesPreAbatus", b)}
            hint="Par défaut, l'abattement forfaitaire de 10 % est appliqué automatiquement aux salaires."
          />

          <hr className="border-gray-100" />

          {/* Dirigeants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="Rémunération dirigeant assimilé salarié (SASU, SAS)"
              value={inputs.remDirigeantAssimile}
              onChange={(n) => update("remDirigeantAssimile", n)}
              tooltip="Net imposable du président de SASU/SAS. Traité comme un salaire pour l'IR."
            />
            <NumberField
              label="Rémunération gérant majoritaire / TNS (EURL, SARL)"
              value={inputs.remDirigeantTNS}
              onChange={(n) => update("remDirigeantTNS", n)}
              tooltip="Montant net imposable, après cotisations sociales et CSG déductible (saisi tel qu'apparaissant sur l'avis fiscal)."
            />
          </div>

          {inputs.remDirigeantAssimile > 0 && (
            <ToggleField
              label="Je saisis déjà ma rémunération SASU après abattement de 10 %"
              checked={inputs.remDirigeantAssimilePreAbatus}
              onChange={(b) => update("remDirigeantAssimilePreAbatus", b)}
            />
          )}

          <hr className="border-gray-100" />

          {/* BNC / BIC professionnels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="BNC professionnel (régime réel)"
              value={inputs.bncProfessionnel}
              onChange={(n) => update("bncProfessionnel", n)}
              tooltip="Bénéfice net imposable d'une activité libérale au régime réel (déclaration contrôlée)."
            />
            <NumberField
              label="BIC professionnel (régime réel)"
              value={inputs.bicProfessionnel}
              onChange={(n) => update("bicProfessionnel", n)}
              tooltip="Bénéfice net imposable d'une activité commerciale ou artisanale au réel."
            />
          </div>

          <hr className="border-gray-100" />

          {/* Micro */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Micro-entreprise
              <Tooltip text="En micro-entreprise, l'impôt est calculé sur le chiffre d'affaires après abattement forfaitaire fiscal, et non sur le bénéfice réel." />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <NumberField
                label="CA Micro-BNC"
                value={inputs.microBNC}
                onChange={(n) => update("microBNC", n)}
                hint="Abattement 34 %"
                tooltip="Activités libérales en micro-BNC. Abattement forfaitaire de 34 % avec un minimum de 305 €."
              />
              <NumberField
                label="CA Micro-BIC services"
                value={inputs.microBICServices}
                onChange={(n) => update("microBICServices", n)}
                hint="Abattement 50 %"
                tooltip="Prestations de services BIC en micro-entreprise. Abattement forfaitaire de 50 %."
              />
              <NumberField
                label="CA Micro-BIC ventes"
                value={inputs.microBICVentes}
                onChange={(n) => update("microBICVentes", n)}
                hint="Abattement 71 %"
                tooltip="Ventes de marchandises et fourniture de logement. Abattement forfaitaire de 71 %."
              />
            </div>
            {microSaisi && (
              <div className="mt-3">
                <ToggleField
                  label="Versement libératoire de l'IR déjà payé sur ce CA"
                  checked={inputs.versementLiberatoire}
                  onChange={(b) => update("versementLiberatoire", b)}
                />
                {inputs.versementLiberatoire && (
                  <p className="mt-2 text-xs text-blue-800 bg-blue-50 border border-blue-200 rounded-md px-3 py-2">
                    Les revenus soumis au versement libératoire sont traités à
                    part. Le simulateur ne recalcule pas le montant déjà payé.
                  </p>
                )}
                {!inputs.versementLiberatoire && result.microImposable > 0 && (
                  <p className="mt-2 text-xs text-gray-600">
                    Revenu micro imposable calculé :{" "}
                    <strong>{formatEuros(result.microImposable)}</strong>
                  </p>
                )}
              </div>
            )}
          </div>

          <hr className="border-gray-100" />

          {/* Autres revenus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="Revenus fonciers nets imposables"
              value={inputs.revenusFonciers}
              onChange={(n) => update("revenusFonciers", n)}
              tooltip="Loyers nets après charges déductibles (régime réel) ou après abattement micro-foncier 30 %."
            />
            <NumberField
              label="Résultat LMNP imposable"
              value={inputs.resultatLMNP}
              onChange={(n) => update("resultatLMNP", n)}
              tooltip="Bénéfice LMNP imposable, après amortissements et charges en réel, ou après abattement 50 % en micro-BIC LMNP."
            />
            <NumberField
              label="Pensions / retraites"
              value={inputs.pensionsRetraites}
              onChange={(n) => update("pensionsRetraites", n)}
              tooltip="Montant annuel imposable. Saisissez le net imposable indiqué sur votre relevé."
            />
            <NumberField
              label="Autres revenus imposables"
              value={inputs.autresRevenus}
              onChange={(n) => update("autresRevenus", n)}
              tooltip="Revenus divers à intégrer au barème progressif (hors capitaux mobiliers / PFU)."
            />
          </div>
        </Card>

        {/* 3. Charges déductibles */}
        <Card
          title="Charges déductibles"
          subtitle="Diminuent le revenu net global imposable."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="Pension alimentaire versée"
              value={inputs.pensionAlimentaire}
              onChange={(n) => update("pensionAlimentaire", n)}
              tooltip="Pension alimentaire effectivement versée à un enfant majeur, parent ou ex-conjoint, dans la limite légale."
            />
            <NumberField
              label="Versements PER déductibles"
              value={inputs.versementsPER}
              onChange={(n) => update("versementsPER", n)}
              tooltip="Versements volontaires sur un Plan Épargne Retraite, dans la limite du plafond annuel."
            />
            <NumberField
              label="CSG déductible"
              value={inputs.csgDeductible}
              onChange={(n) => update("csgDeductible", n)}
              tooltip="Part déductible de la CSG sur revenus du patrimoine et de placement (6,8 %)."
            />
            <NumberField
              label="Autres charges déductibles"
              value={inputs.autresCharges}
              onChange={(n) => update("autresCharges", n)}
            />
          </div>
        </Card>

        {/* 4. Réductions / crédits d'impôt */}
        <Card
          title="Réductions et crédits d'impôt"
          subtitle="Viennent en déduction de l'impôt brut."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              label="Emploi à domicile (dépenses)"
              value={inputs.emploiADomicile}
              onChange={(n) => update("emploiADomicile", n)}
              hint="Crédit d'impôt 50 %"
              tooltip="Sommes versées pour un salarié à domicile, garde d'enfant à domicile, soutien scolaire, ménage, etc."
            />
            <NumberField
              label="Frais de garde hors domicile"
              value={inputs.fraisGardeEnfants}
              onChange={(n) => update("fraisGardeEnfants", n)}
              hint="Crédit d'impôt 50 %"
              tooltip="Crèche, assistante maternelle agréée, garderie pour enfants de moins de 6 ans."
            />
            <NumberField
              label="Dons aux associations"
              value={inputs.donsAssociations}
              onChange={(n) => update("donsAssociations", n)}
              hint={
                inputs.donsAideEnDifficulte
                  ? "Réduction 75 %"
                  : "Réduction 66 %"
              }
            />
            <NumberField
              label="Autres réductions / crédits d'impôt"
              value={inputs.autresReductions}
              onChange={(n) => update("autresReductions", n)}
              tooltip="Saisissez ici un montant déjà calculé (Pinel, FCPI, dispositifs spécifiques…)."
            />
          </div>

          {inputs.donsAssociations > 0 && (
            <ToggleField
              label="Dons à un organisme d'aide aux personnes en difficulté (Restos du Cœur, Croix-Rouge…)"
              checked={inputs.donsAideEnDifficulte}
              onChange={(b) => update("donsAideEnDifficulte", b)}
              hint="Taux porté à 75 % au lieu de 66 %."
            />
          )}

          <p className="text-xs text-gray-500">
            Les plafonds spécifiques (frais de garde, plafond global des niches
            fiscales 10 000 €, plafonds dons) ne sont pas gérés dans cette
            première version.
          </p>
        </Card>

        {/* Options de calcul */}
        <Card title="Options de calcul">
          <ToggleField
            label="Appliquer la décote sur les faibles impositions"
            checked={inputs.appliquerDecote}
            onChange={(b) => update("appliquerDecote", b)}
            hint="Décote estimée de manière simplifiée (valeurs 2025 reconduites en attendant la LF 2026 définitive)."
          />
          <button
            type="button"
            onClick={reset}
            className="mt-2 inline-flex items-center text-sm font-medium text-turquoise-700 hover:text-turquoise-900 underline underline-offset-4"
          >
            Réinitialiser tous les champs
          </button>
        </Card>
      </div>

      {/* ── Colonne résultat (sticky) ───────────────────────────────────── */}
      <aside className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 space-y-4">
          <div className="bg-gradient-to-br from-turquoise-500 to-turquoise-700 text-white rounded-2xl p-6 shadow-lg">
            <p className="text-sm uppercase tracking-wide opacity-90">
              Impôt net estimé 2026
            </p>
            <p className="text-4xl md:text-5xl font-extrabold mt-2 leading-none">
              {formatEuros(result.impotNet)}
            </p>
            <p className="text-xs opacity-90 mt-2">
              sur les revenus 2025
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">TMI</dt>
                <dd className="font-bold text-lg">
                  {formatPercent(result.tauxMarginal)}
                </dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">Taux moyen</dt>
                <dd className="font-bold text-lg">
                  {formatPercent(result.tauxMoyen)}
                </dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">Revenu imposable</dt>
                <dd className="font-bold text-base">
                  {formatEuros(result.revenuNetImposable)}
                </dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <dt className="text-xs opacity-80">Parts</dt>
                <dd className="font-bold text-base">
                  {result.parts.toLocaleString("fr-FR")}
                </dd>
              </div>
            </dl>
          </div>

          {/* Détail du calcul pliable */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setDetailOpen((v) => !v)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
              aria-expanded={detailOpen}
            >
              <span>Détail du calcul</span>
              <span
                className={`transform transition-transform ${
                  detailOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            {detailOpen && (
              <dl className="px-5 pb-5 text-sm space-y-2">
                <Row
                  label="Revenu brut total"
                  value={formatEuros(result.revenuBrutTotal)}
                />
                <Row
                  label="Abattements salaires (10 %)"
                  value={`- ${formatEuros(result.abattementsTotal)}`}
                />
                {result.microImposable > 0 && (
                  <Row
                    label="Revenu micro imposable après abattement"
                    value={formatEuros(result.microImposable)}
                  />
                )}
                <Row
                  label="Charges déductibles"
                  value={`- ${formatEuros(result.chargesDeductiblesTotal)}`}
                />
                <Row
                  label="Revenu net imposable"
                  value={formatEuros(result.revenuNetImposable)}
                  emphasis
                />
                <Row
                  label="Quotient familial"
                  value={formatEuros(result.quotientFamilial)}
                />
                <Row
                  label="Impôt brut (parts réelles)"
                  value={formatEuros(result.impotAvantPlafond)}
                />
                {result.effetPlafonnement > 0 && (
                  <Row
                    label="Effet plafonnement QF"
                    value={`+ ${formatEuros(result.effetPlafonnement)}`}
                  />
                )}
                <Row
                  label="Impôt après plafonnement QF"
                  value={formatEuros(result.impotApresPlafond)}
                />
                {result.decote > 0 && (
                  <Row
                    label="Décote"
                    value={`- ${formatEuros(result.decote)}`}
                  />
                )}
                <Row
                  label="Réductions / crédits d'impôt"
                  value={`- ${formatEuros(result.reductionsCreditsTotal)}`}
                />
                <Row
                  label="Impôt net estimé"
                  value={formatEuros(result.impotNet)}
                  emphasis
                />
                {result.effetPlafonnement > 0 && (
                  <p className="text-xs text-gray-500 pt-2">
                    Plafonnement du quotient familial appliqué de manière
                    simplifiée.
                  </p>
                )}
              </dl>
            )}
          </div>

          {/* CTA */}
          <div className="bg-[#F1F8EA] rounded-2xl p-5 border border-green-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              Vous êtes <strong>freelance, dirigeant de SASU/EURL,
              micro-entrepreneur ou LMNP</strong> ? JSA Expertise peut vous
              aider à optimiser votre rémunération, vos charges et votre
              fiscalité.
            </p>
            <Link
              href={contactHref}
              className="mt-4 inline-flex items-center justify-center w-full bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-5 py-3 rounded-full transition-colors text-sm"
            >
              Être accompagné par JSA Expertise
            </Link>
          </div>

          {/* Mentions */}
          <div className="text-[11px] leading-relaxed text-gray-500 space-y-2 px-1">
            <p>
              Ce simulateur fournit une <strong>estimation indicative</strong>{" "}
              de l'impôt sur le revenu 2026, calculée sur la base du barème
              applicable aux revenus 2025. Il ne remplace pas une étude
              personnalisée réalisée par un professionnel. Certains cas
              particuliers ne sont pas pris en compte.
            </p>
            <p>Les montants doivent être saisis en euros annuels.</p>
            <p>
              Pour les micro-entrepreneurs, le simulateur applique les
              abattements fiscaux forfaitaires selon la nature de l'activité.
              Il ne calcule pas les cotisations sociales ni le versement
              libératoire déjà payé.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Row({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center gap-4 ${
        emphasis
          ? "pt-2 border-t border-gray-200 font-semibold text-gray-900"
          : "text-gray-700"
      }`}
    >
      <dt>{label}</dt>
      <dd className="tabular-nums whitespace-nowrap">{value}</dd>
    </div>
  );
}
