import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./HeroSection.css";

const codeFiles = [
  [
    "// Farhan - Full Stack Developer",
    "import { React, Node } from 'arsenal';",
    "const buildSolutions = () => {",
    "  return { scalable: true, fast: true };",
    "};",
  ],
  [
    "// 18+ Production Projects",
    "export const expertise = {",
    "  frontend: 'React + Next.js',",
    "  backend: 'Node.js + Express'",
    "};"
  ],
];

export default function HeroSection() {
  const [typedCode, setTypedCode] = useState([]);
  const [introStage, setIntroStage] = useState("symbol");

  // Magnetic Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-10, 10]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const symbolTimer = setTimeout(() => setIntroStage("welcome"), 1800);
    const welcomeTimer = setTimeout(() => setIntroStage("done"), 3500);
    return () => {
      clearTimeout(symbolTimer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  useEffect(() => {
    let file = 0, line = 0, ch = 0;
    function type() {
      if (!codeFiles[file] || !codeFiles[file][line]) return;
      if (ch <= codeFiles[file][line].length) {
        setTypedCode(prev => {
          const n = [...prev];
          n[line] = codeFiles[file][line].slice(0, ch);
          return n;
        });
        ch++;
        setTimeout(type, 100);
      } else {
        ch = 0; line++;
        if (line >= codeFiles[file].length) {
          line = 0; file = (file + 1) % codeFiles.length;
          setTypedCode([]);
        }
        setTimeout(type, 500);
      }
    }
    type();
  }, []);

  return (
    <section id="home" className="hero-master" onMouseMove={handleMouseMove}>
      <AnimatePresence>
        {introStage === "symbol" && (
          <motion.div
            className="intro-overlay-master"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, scale: 20 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
          >
            <motion.div
              className="intro-symbol-master"
              animate={{ rotateY: 720 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            >
              ◈
            </motion.div>
          </motion.div>
        )}

        {introStage === "welcome" && (
          <motion.div
            className="intro-overlay-master"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="welcome-text-master">Curating Excellence</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {introStage === "done" && (
        <div className="hero-grid-master">
          {/* Background Decorative Element (Asymmetric) */}
          <div className="hero-bg-accent" />

          <motion.div
            className="hero-content-master"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hero-badge">🎯 Available for Elite Opportunities</div>
            <h1 className="hero-title-master">
              Full Stack <br />
              <span>Developer</span>
            </h1>
            <p className="hero-desc-master">
              Building amazing web experiences with React, Node.js, and modern architecture. Transform ideas into scalable, high-performance digital solutions.
            </p>
            <div className="hero-actions-master">
              <a href="#projects" className="btn-master primary interactive">The Exhibition</a>
              <a href="#contact" className="btn-master secondary interactive">Connect</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual-master"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="visual-card-master interactive">
              <div className="card-header-master">
                <div className="dots-master">
                  <span /> <span /> <span />
                </div>
                <div className="tab-master">flux_engine.tsx</div>
              </div>
              <div className="card-body-master">
                {typedCode.map((line, i) => (
                  <div key={i} className="code-line-master">{line}</div>
                ))}
                <div className="cursor-master" />
              </div>

              {/* Overlapping floating tech cards */}
              <motion.div
                className="floating-tech-chip chip-1"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                React
              </motion.div>
              <motion.div
                className="floating-tech-chip chip-2"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Architecture
              </motion.div>
            </div>
          </motion.div>

          <div className="hero-signature">Farhan Afridi</div>
        </div>
      )}
    </section>
  );
}
