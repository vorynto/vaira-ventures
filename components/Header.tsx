"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/outlets", label: "Our Outlets" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isContactPage = pathname.startsWith("/contact");
  const ctaHref = isContactPage ? "tel:+910000000000" : "/contact";
  const ctaLabel = isContactPage ? "Call Now" : "Visit Us";

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-wrap">
          <Link href="/" className="brand">
            <img src="/assets/logo.png" alt="Vaira Ventures logo" />
            <span>
              Vaira Ventures
              <small>Jockey &amp; First Cry Outlet</small>
            </span>
          </Link>

          <nav className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={isActive(link.href) ? "active" : ""}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href={ctaHref} className="btn btn-primary">
              {ctaLabel}
            </Link>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`overlay${menuOpen ? " show" : ""}`} onClick={() => setMenuOpen(false)} />

      <nav className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href={ctaHref} className="btn btn-primary btn-block" onClick={() => setMenuOpen(false)}>
          {ctaLabel}
        </Link>
      </nav>
    </>
  );
}
