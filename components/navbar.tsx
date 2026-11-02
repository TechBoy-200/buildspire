"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Academy", href: "#academy" },
  { label: "Ecosystem", href: "#community" },
  { label: "Work", href: "#work" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a
          href="/"
          className="brand"
          aria-label="Buildspire homepage"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">B</span>
          <span className="brand-word">
            BUILD<span>spire</span>
          </span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta desktop-nav-cta">
          Let's build together
          <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Let's build together <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}