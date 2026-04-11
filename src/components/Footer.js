import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-master">
      <div className="footer-container-master">
        <div className="section-rule" />
        <div className="footer-top-master">
          <motion.div
            className="footer-logo-master"
            whileHover={{ scale: 1.05 }}
          >
            <span className="footer-mark-master">FA</span>
            <span>Farhan Afridi</span>
          </motion.div>
          <div className="footer-tagline-master">
            Seasoned front-end portfolio designed to feel clear, modern, and easy to navigate.
          </div>
        </div>

        <div className="footer-divider-master" />

        <div className="footer-bottom-master">
          <div className="footer-copy-master">
            © {new Date().getFullYear()} Farhan Afridi.
          </div>
          <div className="footer-credits-master">
            Built with <span>React</span> & <span>CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
