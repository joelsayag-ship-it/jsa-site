"use client";

import { useEffect } from "react";
import { suivre } from "@/lib/suivi";

// Présent sur toutes les pages (layout) : envoie `click_tel` ou `click_email` à Google Analytics
// dès qu'un visiteur clique sur un lien tel: ou mailto:, où qu'il soit sur le site.
export default function SuiviClics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const lien = (e.target as Element | null)?.closest?.("a[href]");
      if (!lien) return;
      const href = lien.getAttribute("href") || "";
      const type = href.startsWith("tel:") ? "click_tel" : href.startsWith("mailto:") ? "click_email" : null;
      if (!type) return;
      suivre(type, {
        page_path: window.location.pathname,
        link_text: ((lien as HTMLElement).innerText || lien.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
