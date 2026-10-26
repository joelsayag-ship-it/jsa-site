"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Simulateurs officiels de l'URSSAF (mon-entreprise.urssaf.fr), chargés
 * uniquement à la demande pour ne pas alourdir la page.
 */
export default function VerificationURSSAF() {
  const [ouvert, setOuvert] = useState(false);
  const [onglet, setOnglet] = useState<"sasu" | "eurl">("sasu");
  const sasuRef = useRef<HTMLDivElement>(null);
  const eurlRef = useRef<HTMLDivElement>(null);
  const charges = useRef<{ sasu: boolean; eurl: boolean }>({ sasu: false, eurl: false });

  const injecter = useCallback((container: HTMLDivElement, module: string) => {
    container.innerHTML = "";
    const script = document.createElement("script");
    script.setAttribute("data-module", module);
    script.setAttribute("data-couleur", "#00B6DE");
    script.src = "https://mon-entreprise.urssaf.fr/simulateur-iframe-integration.js";
    container.appendChild(script);
  }, []);

  useEffect(() => {
    if (!ouvert) return;
    if (onglet === "sasu" && sasuRef.current && !charges.current.sasu) {
      injecter(sasuRef.current, "simulateur-assimilesalarie");
      charges.current.sasu = true;
    }
    if (onglet === "eurl" && eurlRef.current && !charges.current.eurl) {
      injecter(eurlRef.current, "simulateur-eurl");
      charges.current.eurl = true;
    }
  }, [ouvert, onglet, injecter]);

  if (!ouvert) {
    return (
      <button
        type="button"
        onClick={() => setOuvert(true)}
        className="inline-flex items-center gap-2 border-2 border-[#00B6DE] text-[#0081A5] hover:bg-[#00B6DE]/10 font-bold px-6 py-3 rounded-full transition-colors"
      >
        Ouvrir les simulateurs officiels de l&apos;URSSAF
      </button>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-6 bg-gray-100 p-1.5 rounded-xl w-fit">
        {([
          { key: "sasu", label: "SASU" },
          { key: "eurl", label: "EURL" },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setOnglet(key)}
            className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${
              onglet === key ? "bg-[#00B6DE] text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${onglet === "sasu" ? "block" : "hidden"}`}>
        <div ref={sasuRef} />
      </div>
      <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${onglet === "eurl" ? "block" : "hidden"}`}>
        <div ref={eurlRef} />
      </div>
    </div>
  );
}
