import React from "react";
import { motion } from "framer-motion";
import Header from './components/Header';
import HeroSection from './components/HeroSection.js';
import AboutSection from "./components/AboutSection.js";
import SkillsSection from "./components/SkillsSection.js";
import ProjectsSection from "./components/ProjectsSection.js";
import ContactSection from "./components/ContactSection.js";
import Footer from "./components/Footer.js";
import CustomCursor from "./components/CustomCursor";

const revealProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

function App() {
  return (
    <main className="app-shell">
      <CustomCursor />
      <Header />

      <motion.div {...revealProps} transition={{ ...revealProps.transition, duration: 0.7 }}>
        <HeroSection />
      </motion.div>

      <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.05 }}>
        <AboutSection />
      </motion.div>

      <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.08 }}>
        <SkillsSection />
      </motion.div>

      <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.1 }}>
        <ProjectsSection />
      </motion.div>

      <motion.div {...revealProps} transition={{ ...revealProps.transition, delay: 0.12 }}>
        <ContactSection />
      </motion.div>

      <motion.div {...revealProps} transition={{ ...revealProps.transition, duration: 0.65 }}>
        <Footer />
      </motion.div>
    </main>
  );
}

export default App;
