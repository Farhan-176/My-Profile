import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collection", href: "#projects" },
    { name: "Identity", href: "#about" },
    { name: "Matrix", href: "#skills" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <header className={`header-master ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container-master">
        <motion.div
          className="logo-master interactive"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ◈ <span>Farhan</span>
        </motion.div>

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

        <div className="menu-toggle-master interactive" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
