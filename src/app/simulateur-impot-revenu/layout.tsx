import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Simulateur d'impôt sur le revenu 2026 — JSA Expertise",
  description:
    "Estimez votre impôt sur les revenus 2025 en quelques minutes : barème 2026, parts fiscales, abattements micro-entreprise, crédits d'impôt. Outil gratuit JSA Expertise.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/simulateur-impot-revenu",
  },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
