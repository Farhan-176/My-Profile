import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-master">
      <div className="footer-container-master">
        <div className="footer-top-master">
          <motion.div
            className="footer-logo-master"
            whileHover={{ scale: 1.05 }}
          >
            ◈ <span>Farhan</span>
          </motion.div>
          <div className="footer-tagline-master">
            Architecting elite digital experiences with precision and passion.
          </div>
        </div>

        <div className="footer-divider-master" />

        <div className="footer-bottom-master">
          <div className="footer-copy-master">
            © {new Date().getFullYear()} Farhan Afridi. Curating Excellence.
          </div>
          <div className="footer-credits-master">
            Built with <span>Vision</span> & <span>Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
