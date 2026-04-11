import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  const [introStage, setIntroStage] = useState("symbol");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.classList.add("intro-playing");
    document.body.classList.remove("intro-done");
    document.body.style.overflow = "hidden";

    const symbolTimer = setTimeout(() => {
      setIntroStage("welcome");
    }, 1800);

    const welcomeTimer = setTimeout(() => {
      setIntroStage("done");
      document.body.classList.remove("intro-playing");
      document.body.classList.add("intro-done");
      document.body.style.overflow = previousOverflow;
    }, 4300);

    return () => {
      clearTimeout(symbolTimer);
      clearTimeout(welcomeTimer);
      document.body.classList.remove("intro-playing");
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const quickStats = [
    { value: "28+", label: "public projects" },
    { value: "172+", label: "GitHub contributions" },
     { value: "Full-stack", label: "expertise" },
  ];

  const focusPoints = [
     "End-to-end architecture from database to UI",
    "Responsive layouts that hold up on every screen",
     "APIs, databases, and accessible frontends",
  ];

  const stackTags = ["React", "Node.js", "Databases", "APIs", "Full-stack"];

  const craftNotes = [
    "Design systems over one-off visuals",
    "Stability over trend-driven motion",
     "End-to-end solutions built to scale",
  ];

  return (
    <section id="home" className="hero-master">
      <AnimatePresence>
        {introStage === "symbol" && (
          <motion.div
            className="hero-intro-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          >
            <motion.div
              className="hero-intro-symbol-master"
              initial={{ opacity: 0, scale: 0.72, rotateY: -26 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 1.12, transition: { duration: 0.45 } }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="hero-intro-symbol-inner"
                animate={{ rotateY: 720 }}
                transition={{ duration: 1.35, ease: "easeInOut" }}
              >
                ◈
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {introStage === "welcome" && (
          <motion.div
            className="hero-intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }}
          >
            <motion.div
              className="hero-intro-glow"
              initial={{ scale: 0.98, opacity: 0.35 }}
              animate={{ scale: 1.08, opacity: 0.55 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.div
              className="hero-intro-content"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="hero-intro-mark"
                initial={{ rotate: -12, scale: 0.88 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                FA
              </motion.div>

              <motion.h2
                className="hero-intro-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                Curating Excellence
              </motion.h2>

              <motion.p
                className="hero-intro-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
              >
                Farhan Afridi Portfolio
              </motion.p>

              <div className="hero-intro-progress-track" aria-hidden="true">
                <motion.div
                  className="hero-intro-progress-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.05, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hero-grid-master">
        <motion.div
          className="hero-content-master"
          initial={{ opacity: 0, y: 34, x: -20 }}
          animate={introStage === "done" ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 34, x: -20 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          <p className="hero-badge">Seasoned front-end portfolio / Design systems / React</p>
          <div className="hero-copy-rule-master" />
          <h1 className="hero-title-master">
            I build calm, durable front ends that hold up under pressure.
          </h1>
          <p className="hero-desc-master">
            I’m Farhan Afridi, a seasoned front-end developer who builds responsive, accessible,
            and maintainable interfaces with the discipline of a long-running system. I care
            about the details that make a product feel fast, trustworthy, and easy to evolve.
          </p>
          <div className="hero-actions-master">
            <a href="#projects" className="btn-master primary interactive">
              View work
            </a>
            <a href="#contact" className="btn-master secondary interactive">
              Get in touch
            </a>
          </div>

          <div className="hero-stats-master">
            {quickStats.map((stat) => (
              <div key={stat.label} className="hero-stat-master">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-master"
          initial={{ opacity: 0, y: 34, x: 20, scale: 0.97 }}
          animate={introStage === "done" ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y: 34, x: 20, scale: 0.97 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        >
          <div className="visual-card-master interactive">
            <div className="profile-card-top-master">
              <div className="profile-mark-master">FA</div>
              <div>
                <div className="profile-name-master">Farhan Afridi</div>
                <div className="profile-role-master">Seasoned front-end developer</div>
              </div>
            </div>

            <div className="profile-pill-master">Available for front-end leadership and product builds</div>

            <div className="stack-chips-master">
              {stackTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="craft-band-master">
              {craftNotes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>

            <div className="focus-list-master">
              {focusPoints.map((point) => (
                <div key={point} className="focus-item-master">
                  <span className="focus-dot-master" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="visual-footer-master">
              <span>React</span>
              <span>TypeScript</span>
              <span>Design systems</span>
            </div>
          </div>

          <div className="hero-card-note-master">
            Built to feel measured, experienced, and easy to trust on any device.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
