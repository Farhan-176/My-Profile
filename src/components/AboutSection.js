import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutSection.css";

const GlowingText = ({ children, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glowing-text-chunk"
    >
      {children}
    </motion.span>
  );
};

const DigitalCore = () => {
  return (
    <div className="digital-core-container">
      <motion.div
        className="core-ring outer"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="core-ring middle"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="core-ring inner"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="core-nucleus" />
      </motion.div>

      {/* Decorative HUD lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`hud-line line-${i}`}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateSlight = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const systemSpecs = [
    { label: "EXPERIENCE", value: "18+ Projects" },
    { label: "SPECIALIZATION", value: "Full Stack Dev" },
    { label: "EXPERTISE", value: "React, Node.js" },
    { label: "FOCUS", value: "Performance & UX" },
    { label: "STATUS", value: "Available Now" }
  ];

  return (
    <section className="about-master" id="about" ref={containerRef}>
      {/* Background Kinetic Text (Parallax) */}
      <motion.div className="about-bg-text" style={{ y: bgY, rotate: rotateSlight }}>
        <span>IDENTITY IDENTITY IDENTITY</span>
        <span>CURIOSITY PASSION CODE</span>
      </motion.div>

      <div className="about-container-master">
        <div className="about-grid-master">
          <motion.div
            className="about-visual-master"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hud-frame interactive">
              <DigitalCore />
              <div className="hud-data-tag">SYSTEM_CORE_ENGAGED</div>
            </div>
          </motion.div>

          <div className="about-content-master">
            <motion.div
              className="system-header"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="system-tag">IDENTITY_PROFILE_SYS</div>
              <h2 className="about-heading-master">
                Architecting <span>Digital Flux</span>
              </h2>
            </motion.div>

            <div className="about-text-master">
              <p>
                <GlowingText delay={0.1}>
                  I'm a creative problem solver who transforms ideas into beautiful, scalable web applications. With a passion for <span>clean code</span> and cutting-edge technologies, I build solutions that don't just work—they delight users.
                </GlowingText>
              </p>
              <p>
                <GlowingText delay={0.2}>
                  Starting with raw curiosity, I've mastered <span>full-stack development</span> and built 18+ production-ready projects. Operating at the intersection of <span>modern frontend</span> and <span>cloud logic</span>, with a commitment to performance and open-source contribution.
                </GlowingText>
              </p>
            </div>

            <div className="system-specs-grid">
              {systemSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  className="spec-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
