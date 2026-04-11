import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";

export default function AboutSection() {
  const highlights = [
    {
      title: "Design systems",
      text: "I structure interfaces so they scale cleanly across pages, teams, and future features."
    },
    {
      title: "Engineering discipline",
      text: "I focus on clarity first: strong hierarchy, predictable interactions, and a direct path to action."
    },
    {
      title: "Delivery discipline",
      text: "I prefer incremental changes, stable code, and systems that are easy to maintain after launch."
    }
  ];

  const profileFacts = [
     { label: "Role", value: "Full-stack developer" },
     { label: "Focus", value: "React, Node.js, databases, APIs" },
     { label: "Work style", value: "End-to-end solutions, clear architecture, pragmatic" },
     { label: "Impact", value: "Complete products that scale from backend to UI" }
  ];

  return (
    <section className="about-master" id="about">
      <div className="about-container-master">
        <div className="section-rule" />
        <motion.div
          className="about-section-header-master"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker">About</p>
          <h2 className="about-heading-master">
             A full-stack developer who builds complete, scalable products.
          </h2>
          <p className="about-lead-master">
             I build complete solutions across the entire stack: crafting intuitive interfaces, designing robust APIs,
             and architecting databases that scale. From frontend polish to backend reliability, I bring
             both design sensibility and engineering discipline to every layer.
          </p>
        </motion.div>

        <div className="about-grid-master">
          <motion.div
            className="about-visual-master"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="about-profile-card interactive">
              <div className="about-profile-label">Profile snapshot</div>
              <div className="about-profile-name">Farhan Afridi</div>
              <p className="about-profile-copy">
                I build interfaces with a clean visual system, strong responsiveness, and a focus
                on developer-friendly structure.
              </p>

              <div className="about-profile-list">
                {profileFacts.map((fact) => (
                  <div key={fact.label} className="about-profile-item">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="about-content-master">
            <motion.div
              className="about-copy-master"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                I design UI that feels deliberate from the first impression to the final click. The
                work I enjoy most is the kind that combines visual clarity with implementation that
                is easy to revisit later.
              </p>
              <p>
                My usual approach is to build the layout system first, tune the spacing and
                hierarchy second, and then add motion only where it supports the content instead of
                distracting from it.
              </p>
            </motion.div>

            <div className="about-highlights-grid">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="about-highlight-card"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <span className="about-highlight-index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="system-specs-grid">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="spec-item">
                  <span className="spec-label">{fact.label}</span>
                  <span className="spec-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
