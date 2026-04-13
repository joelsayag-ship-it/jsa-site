import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur URSSAF SASU & EURL — JSA Expertise",
  description:
    "Calculez vos cotisations sociales SASU et EURL avec les simulateurs officiels URSSAF. Cabinet JSA Expertise, expert-comptable spécialisé freelances à Charenton-le-Pont.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
