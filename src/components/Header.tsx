"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-copper flex items-center justify-center text-cream font-bold text-lg sm:text-xl transition-transform group-hover:scale-105">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-cream font-bold text-base sm:text-lg tracking-wide leading-tight">
                Elgin Public House
              </span>
              <span className="text-copper text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                Est. Downtown Elgin
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`copper-underline text-sm tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-copper"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8474688810"
              className="bg-copper hover:bg-copper-light text-cream px-5 py-2.5 rounded text-sm font-semibold tracking-wide transition-colors"
            >
              Call Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-cream/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 rounded text-sm tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-copper bg-cream/5"
                    : "text-cream/80 hover:text-cream hover:bg-cream/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8474688810"
              className="mt-2 bg-copper hover:bg-copper-light text-cream px-4 py-2.5 rounded text-sm font-semibold tracking-wide text-center transition-colors"
            >
              (847) 468-8810
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
