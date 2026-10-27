
"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/95 backdrop-blur">
      <nav className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          NABIN<span className="text-blue-400">.</span>
        </a>

        <button
          type="button"
          className="rounded-lg border border-white/15 px-4 py-2 text-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "Close ✕" : "Menu ☰"}
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col border-b border-white/10 bg-[#0b1120] p-5 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md py-2 text-sm text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
