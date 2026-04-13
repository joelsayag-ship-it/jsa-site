import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ContactFlottant from "./components/ContactFlottant";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSA Expertise — Expert-comptable pour freelances & agences",
  description:
    "JSA Expertise, cabinet d'expertise comptable 100% digital spécialisé pour les freelances, indépendants et agences. Réactivité garantie, outils modernes, sérénité totale.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SPXNG4LWZC"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SPXNG4LWZC');
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            "name": "JSA Expertise",
            "url": "https://www.jsaexpertise.com",
            "telephone": "+33660735546",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 rue du Président Kennedy",
              "addressLocality": "Charenton-le-Pont",
              "postalCode": "94220",
              "addressCountry": "FR"
            },
            "areaServed": ["Paris", "Charenton-le-Pont", "Vincennes", "Saint-Mandé", "Saint-Maurice"],
            "priceRange": "££"
          })}}
        />
      </head>
      <body className="font-sans antialiased">
          <Header />
          {children}
          <ContactFlottant />
        </body>
    </html>
  );
}
