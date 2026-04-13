"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function SimulateurCharges() {
  const [onglet, setOnglet] = useState<"sasu" | "eurl">("sasu");
  const sasuRef = useRef<HTMLDivElement>(null);
  const eurlRef = useRef<HTMLDivElement>(null);

  const injectScript = useCallback((container: HTMLDivElement, module: string) => {
    container.innerHTML = "";
    const script = document.createElement("script");
    script.setAttribute("data-module", module);
    script.setAttribute("data-couleur", "#00B6DE");
    script.src = "https://mon-entreprise.urssaf.fr/simulateur-iframe-integration.js";
    container.appendChild(script);
  }, []);

  useEffect(() => {
    if (onglet === "sasu" && sasuRef.current) {
      injectScript(sasuRef.current, "simulateur-assimilesalarie");
    }
    if (onglet === "eurl" && eurlRef.current) {
      injectScript(eurlRef.current, "simulateur-eurl");
    }
  }, [onglet, injectScript]);

  return (
    <>
      <main>

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
              Simulateur URSSAF<br />
              <span className="text-turquoise-500">SASU &amp; EURL</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Estimez vos cotisations sociales en temps réel grâce aux simulateurs
              officiels de l&apos;URSSAF.
            </p>
          </div>
        </section>

        {/* ── ONGLETS + SIMULATEURS ───────────────────────── */}
        <section className="bg-white py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">

            {/* Onglets */}
            <div className="flex gap-2 mb-8 bg-gray-100 p-1.5 rounded-xl w-fit mx-auto">
              {([
                { key: "sasu", label: "SASU" },
                { key: "eurl", label: "EURL" },
              ] as const).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setOnglet(key)}
                  className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    onglet === key
                      ? "bg-turquoise-500 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Simulateur SASU — widget script URSSAF */}
            <div
              className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${onglet === "sasu" ? "block" : "hidden"}`}
            >
              <div ref={sasuRef} />
            </div>

            {/* Simulateur EURL — widget script URSSAF */}
            <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${onglet === "eurl" ? "block" : "hidden"}`}>
              <div ref={eurlRef} />
            </div>

          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Besoin d&apos;aide pour interpréter vos résultats ?
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Un expert&#8209;comptable peut vous aider à optimiser votre rémunération
              en fonction de votre situation réelle.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Prendre RDV gratuitement
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
