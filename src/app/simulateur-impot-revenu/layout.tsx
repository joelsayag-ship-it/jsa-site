import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Simulateur impôt sur le revenu 2027 (revenus 2026) et 2026 | JSA Expertise",
  description:
    "Simulez votre impôt 2027 sur les revenus 2026 avec le nouveau barème du projet de loi de finances, ou votre impôt 2026 : parts, décote, quotient familial. Gratuit.",
  alternates: {
    canonical: "https://www.jsaexpertise.com/simulateur-impot-revenu",
  },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
