"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const homeLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = resolvedTheme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/60 dark:border-gray-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Sudhaman<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {isHome && homeLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/pm-exercises"
              className={`text-sm font-medium transition-colors ${
                pathname === "/pm-exercises" ? "text-accent" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              PM Exercises
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          <a
            href="https://drive.google.com/file/d/15Fjrj6F87cPBFv1g4NGTXpydXg50DDF8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white hover:bg-indigo-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-6 pb-4"
          >
            {isHome && homeLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-light transition-colors">
                {l.label}
              </a>
            ))}
            <Link href="/pm-exercises" onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-accent">
              PM Exercises
            </Link>
            <a
              href="https://drive.google.com/file/d/15Fjrj6F87cPBFv1g4NGTXpydXg50DDF8/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
