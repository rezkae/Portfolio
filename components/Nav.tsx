"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { profile } from "@/lib/data";
import Magnetic from "@/components/Magnetic";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 12;

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = (resolvedTheme ?? "dark") === "dark";

  // Track scroll (passive, rAF-debounced) to toggle the frosted treatment.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[border-color,background-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-line bg-ink/90 backdrop-blur"
            : "border-transparent bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="flex items-stretch justify-between">
          {/* LOGO */}
          <Magnetic className="h-14">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-full items-center gap-2 border-r border-line px-4 transition-colors hover:bg-surface sm:px-6"
            >
              <span className="font-display text-base font-bold uppercase tracking-tighter text-paper sm:text-lg">
                {profile.firstName.toUpperCase()}
              </span>
            </Link>
          </Magnetic>

          {/* NAV LINKS — DESKTOP */}
          <div className="hidden flex-1 items-stretch md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Magnetic key={link.href} className="h-14">
                  <Link
                    href={link.href}
                    className={`flex h-full items-center px-6 border-r border-line text-[10px] uppercase tracking-[0.2em] transition-colors lg:px-8 ${
                      active
                        ? "bg-surface text-paper"
                        : "text-muted hover:bg-surface hover:text-paper"
                    }`}
                  >
                    {link.label}
                  </Link>
                </Magnetic>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-stretch">
            <Magnetic className="h-14">
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-full items-center border-l border-line px-6 text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:bg-surface hover:text-paper lg:flex"
              >
                Resume
              </a>
            </Magnetic>

            <div className="hidden h-14 items-center gap-2 border-l border-line px-6 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scan opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-scan" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-scan">
                Available
              </span>
            </div>

            {/* THEME TOGGLE */}
            <Magnetic className="h-14">
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="flex h-full items-center border-l border-line px-4 transition-colors hover:bg-surface sm:px-5"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-paper">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-paper">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            </Magnetic>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-14 items-center border-l border-line px-4 transition-colors hover:bg-surface md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-paper">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-paper">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-40 border-b border-line bg-ink md:hidden">
          <div className="flex w-full flex-col">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-line px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    active
                      ? "bg-surface text-paper"
                      : "text-muted hover:bg-surface hover:text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-line px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:bg-surface hover:text-paper"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex items-center gap-3 border-b border-line px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:bg-surface hover:text-paper"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-paper">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-paper">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <div className="flex items-center gap-2 px-6 py-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scan opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-scan" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-scan">
                Available
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
