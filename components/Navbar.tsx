"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/lib/urls";

const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#candidates", label: "For candidates" },
  { href: "#recruiters", label: "For recruiters" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      setMenuOpen(false);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    },
    []
  );

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={`container ${styles.navInner}`}>
        <a
          href="#top"
          className={styles.brand}
          onClick={(e) => handleNavClick(e, "#top")}
          aria-label="Chatfolio home"
        >
          <Image
            src="/Logo.svg"
            alt="Chatfolio"
            width={140}
            height={70}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={SIGN_IN_URL} className={styles.signIn}>
            Sign in
          </a>
          <a href={SIGN_UP_URL} className="btn btn-primary">
            Get started
          </a>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ""}`}>
        <nav className={styles.mobileLinks} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href={SIGN_IN_URL} className={styles.signIn}>
            Sign in
          </a>
          <a href={SIGN_UP_URL} className="btn btn-primary">
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
