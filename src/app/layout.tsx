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
  metadataBase: new URL('https://www.jsaexpertise.com'),
  title: "JSA Expertise — Expert-comptable pour freelances & agences",
  description:
    "JSA Expertise, cabinet d'expertise comptable 100% digital spécialisé pour les freelances, indépendants et agences. Réactivité garantie, outils modernes, sérénité totale.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.jsaexpertise.com',
    siteName: 'JSA Expertise',
    title: 'JSA Expertise — Expert-comptable pour freelances & agences',
    description: "Cabinet d'expertise comptable 100% digital spécialisé pour les freelances et agences. Basé à Charenton-le-Pont, on accompagne les indépendants à Paris et en Val-de-Marne.",
    images: [
      {
        url: '/images/joel.png',
        width: 1200,
        height: 630,
        alt: 'Joël Sayag — Expert-comptable JSA Expertise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSA Expertise — Expert-comptable pour freelances & agences',
    description: 'Cabinet comptable 100% digital spécialisé freelances. Basé à Charenton-le-Pont.',
    images: ['/images/joel.png'],
  },
  alternates: {
    canonical: 'https://www.jsaexpertise.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
            "@type": ["AccountingService", "LocalBusiness"],
            "name": "JSA Expertise",
            "url": "https://www.jsaexpertise.com",
            "logo": "https://www.jsaexpertise.com/images/logo.png.png",
            "image": "https://www.jsaexpertise.com/images/joel.png",
            "description": "Cabinet d'expertise comptable 100% digital spécialisé pour les freelances, consultants et agences. Basé à Charenton-le-Pont (94).",
            "telephone": "+33660735546",
            "email": "joel.sayag@jsaexpertise.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 rue du Président Kennedy",
              "addressLocality": "Charenton-le-Pont",
              "postalCode": "94220",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.8194,
              "longitude": 2.4147
            },
            "areaServed": [
              "Charenton-le-Pont",
              "Vincennes",
              "Saint-Mandé",
              "Saint-Maurice",
              "Joinville-le-Pont",
              "Paris 12e",
              "Val-de-Marne",
              "Paris",
              "France"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.linkedin.com/in/joël-sayag-expert-comptable-912795106/",
              "https://annuaire.experts-comptables.org/expert-comptable/36207-jsa-expertise-charenton-le-pont-94220"
            ],
            "priceRange": "££",
            "founder": {
              "@type": "Person",
              "name": "Joël Sayag",
              "jobTitle": "Expert-comptable",
              "url": "https://www.jsaexpertise.com/qui-sommes-nous"
            }
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
