import React from "react";
import Header from './components/Header';
import HeroSection from './components/HeroSection.js';
import AboutSection from "./components/AboutSection.js";
import SkillsSection from "./components/SkillsSection.js";
import ProjectsSection from "./components/ProjectsSection.js";
import ContactSection from "./components/ContactSection.js";
import Footer from "./components/Footer.js";
import BackToHomeButton from "./components/BackToHomeButton.js";
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToHomeButton />
    </>
  );
}

export default App;
