import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;

      setIsScrolled(scrolled > 50);
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header-master ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container-master">
        <motion.a
          href="#home"
          className="logo-master interactive"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-mark-master">FA</span>
          <span className="logo-copy-master">
            <strong>Farhan Afridi</strong>
            <small>Seasoned front-end portfolio</small>
          </span>
        </motion.a>

        <nav className="nav-master">
          <ul className="nav-list-master">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="nav-link-master interactive">
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-toggle-master interactive"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="header-progress-track" aria-hidden="true">
        <motion.div
          className="header-progress-fill"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 140, damping: 26, mass: 0.5 }}
        />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay-master"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-nav-list-master">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mobile-cta-master" onClick={() => setMenuOpen(false)}>
              Let’s talk about your project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
