import React from "react";
import Header from './components/Header';
import HeroSection from './components/HeroSection.js';
import AboutSection from "./components/AboutSection.js";
import SkillsSection from "./components/SkillsSection.js";
import ProjectsSection from "./components/ProjectsSection.js";
import ContactSection from "./components/ContactSection.js";
import Footer from "./components/Footer.js";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
