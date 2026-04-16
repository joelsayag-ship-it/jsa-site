import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur de charges SASU & EURL — JSA Expertise",
  description:
    "Calculez vos cotisations sociales SASU et EURL avec les simulateurs officiels URSSAF. Par JSA Expertise, expert-comptable freelances à Charenton-le-Pont.",
  alternates: { canonical: 'https://www.jsaexpertise.com/simulateur-charges' },
  twitter: { card: 'summary_large_image' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
