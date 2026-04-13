"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Offre",
    children: [
      { label: "Comptabilité freelance", href: "/comptabilite-freelance", desc: "Externalise ta compta sereinement" },
      { label: "Création d'entreprise", href: "/creation-entreprise", desc: "Lance ta structure au bon statut" },
      { label: "Optimisation fiscale", href: "/optimisation-fiscale", desc: "Réduis tes impôts légalement" },
      { label: "Accompagnement agences", href: "/agences", desc: "Offre expertise-comptable à tes clients" },
    ],
  },
  {
    label: "Outils",
    children: [
      { label: "Application Tiime", href: "/tiime", desc: "Gestion compta en temps réel" },
      { label: "Simulateur de charges", href: "/simulateur-charges", desc: "Calcule tes cotisations" },
      { label: "Comparateur de statuts", href: "/comparateur-statuts", desc: "SASU, EI, EURL… lequel choisir ?" },
    ],
  },
  {
    label: "Ressources",
    children: [
      { label: "Blog", href: "/blog", desc: "Articles pour freelances" },
      { label: "FAQ", href: "/faq", desc: "Tes questions, nos réponses" },
      { label: "Guide du freelance", href: "/guide-freelance", desc: "Tout ce qu'il faut savoir" },
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  { label: "Contact", href: "/#contact" },
] as const;

type NavItem = (typeof NAV_ITEMS)[number];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png.png"
            alt="JSA Expertise"
            width={140}
            height={40}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map((item) => {
            const hasChildren = "children" in item;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && openMenu(item.label)}
                onMouseLeave={() => hasChildren && scheduleClose()}
              >
                {hasChildren ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeMenu === item.label
                        ? "text-[#00B6DE] bg-[#00B6DE]/8"
                        : "text-gray-600 hover:text-[#00B6DE] hover:bg-gray-50"
                    }`}
                    aria-expanded={activeMenu === item.label}
                    aria-haspopup="true"
                    onFocus={() => openMenu(item.label)}
                    onBlur={scheduleClose}
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenu === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={(item as { label: string; href: string }).href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#00B6DE] hover:bg-gray-50 rounded-lg transition-colors block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown panel */}
                {hasChildren && (
                  <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top ${
                      activeMenu === item.label
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {(item as NavItem & { children: readonly { label: string; href: string; desc: string }[] }).children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex flex-col px-4 py-3 mx-2 rounded-xl hover:bg-[#00B6DE]/6 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-[#00B6DE] transition-colors">
                          {child.label}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center bg-[#00B6DE] hover:bg-[#0081A5] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors flex-shrink-0"
        >
          Prendre RDV
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) setMobileExpanded(null);
          }}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] pb-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pt-3 gap-0.5">
          {NAV_ITEMS.map((item) => {
            const hasChildren = "children" in item;
            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-gray-700 hover:text-[#00B6DE] rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isExpanded ? "max-h-80" : "max-h-0"
                      }`}
                    >
                      <div className="ml-3 pl-3 border-l-2 border-[#00B6DE]/30 flex flex-col gap-0.5 py-1">
                        {(item as NavItem & { children: readonly { label: string; href: string; desc: string }[] }).children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                            className="px-3 py-2.5 text-sm text-gray-600 hover:text-[#00B6DE] rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={(item as { label: string; href: string }).href}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileExpanded(null);
                    }}
                    className="block px-3 py-3 text-sm font-semibold text-gray-700 hover:text-[#00B6DE] rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}

          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 text-center bg-[#00B6DE] hover:bg-[#0081A5] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
          >
            Prendre RDV
          </Link>
        </nav>
      </div>
    </header>
  );
}
