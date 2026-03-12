"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "회사 소개",
    href: "/about/ceo",
    children: [
      { label: "CEO 인사", href: "/about/ceo" },
      { label: "회사연혁", href: "/about/history" },
      { label: "MOA·MOU", href: "/about/moa-mou" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
  {
    label: "항공유학",
    href: "/aviation/easa",
    children: [
      { label: "EASA 자격증", href: "/aviation/easa" },
      { label: "항공정비 유학", href: "/aviation/maintenance" },
      { label: "승무원 유학", href: "/aviation/cabin-crew" },
      { label: "조종사 유학", href: "/aviation/pilot" },
    ],
  },
  {
    label: "항공정비 인턴",
    href: "/intern/singapore",
    children: [
      { label: "싱가폴항공 SLAEP", href: "/intern/singapore" },
      { label: "루프트한자", href: "/intern/lufthansa" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-navy-950"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-sky-accent/10 border border-sky-accent/30 flex items-center justify-center group-hover:bg-sky-accent/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-accent">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            <div>
              <div className="text-text-primary font-bold text-sm leading-tight">
                인사이트엣지
              </div>
              <div className="text-text-muted text-xs leading-tight">
                항공유학 전문
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-navy-800/50">
                  {item.label}
                  <svg
                    className="w-3 h-3 opacity-60 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-44">
                    <div className="bg-navy-800 border border-border-navy rounded-xl shadow-xl shadow-black/30 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-navy-700 hover:text-sky-accent ${
                            pathname === child.href
                              ? "text-sky-accent bg-navy-700/50"
                              : "text-text-secondary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:025683111"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-sky-accent/10 hover:bg-sky-accent/20 border border-sky-accent/30 text-sky-accent text-sm rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              무료 상담
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-border-navy">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-navy-800 transition-colors"
                >
                  <span className="font-medium">{item.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm rounded-lg transition-colors ${
                          pathname === child.href
                            ? "text-sky-accent bg-navy-700/50"
                            : "text-text-muted hover:text-text-primary hover:bg-navy-800"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border-navy flex flex-col gap-2">
              <a
                href="tel:025683111"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-accent/10 border border-sky-accent/30 text-sky-accent text-sm rounded-xl"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-568-3111 전화상담
              </a>
              <a
                href="https://open.kakao.com/o/hh6900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm rounded-xl"
              >
                카카오톡 상담 @hh6900
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
