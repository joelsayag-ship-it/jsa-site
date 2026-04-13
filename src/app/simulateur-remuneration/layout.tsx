import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur rémunération SASU vs EURL — JSA Expertise",
  description:
    "Calculez votre net en poche en SASU ou EURL. Saisissez votre CA et vos charges, comparez en temps réel. Par JSA Expertise, expert-comptable freelances à Charenton-le-Pont.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
