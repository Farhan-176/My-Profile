import React from "react";
import { motion } from "framer-motion";
import "./SkillsSection.css";

const SkillTile = ({ skill, index }) => {
  return (
    <motion.div
      className={`skill-card-master skill-${index} interactive`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="skill-card-top-master">
        <div className="tile-icon-master">{skill.icon}</div>
        <div className="skill-level-master">{skill.level}%</div>
      </div>

      <div className="tile-content-master">
        <h3 className="tile-title-master">{skill.name}</h3>
        <p className="tile-desc-master">{skill.desc}</p>
        <div className="skill-tags-master">
          {skill.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="tile-bar-master">
          <motion.div
            className="bar-fill-master"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const skills = [
    {
      name: "Interface Engineering",
      level: 96,
      icon: "UI",
      desc: "React components, layout systems, and design tokens for production-grade interfaces.",
      tags: ["React", "Components", "CSS variables"]
    },
    {
      name: "Performance Engineering",
      level: 90,
      icon: "PFT",
      desc: "Rendering strategy, asset discipline, and code splitting that keep interfaces quick and reliable.",
      tags: ["Lighthouse", "Lazy loading", "Bundling"]
    },
    {
      name: "TypeScript Workflow",
      level: 92,
      icon: "TS",
       desc: "Typed logic across frontend and backend that keeps state, APIs, and feature growth predictable.",
      tags: ["Type safety", "Patterns", "Maintainability"]
    },
    {
      name: "Accessibility",
      level: 88,
      icon: "A11Y",
      desc: "Semantic markup, readable contrast, keyboard-friendly interactions, and clear focus states.",
      tags: ["WCAG", "Keyboard", "Semantics"]
    },
    {
      name: "Motion Design",
      level: 95,
      icon: "FX",
      desc: "Intentional motion that supports hierarchy, feedback, and polish without overwhelming the page.",
      tags: ["Framer Motion", "Micro-interactions", "Timing"]
    },
    {
      name: "Responsive Systems",
      level: 87,
      icon: "RSP",
      desc: "Layouts that adapt smoothly from mobile to desktop with predictable spacing and rhythm.",
      tags: ["Mobile-first", "Grid", "Flexible layout"]
    },
    {
      name: "Cross-browser Quality",
      level: 87,
      icon: "BRW",
      desc: "Patterns that stay consistent across browsers, devices, and long-lived codebases.",
      tags: ["Testing", "Stability", "Compatibility"]
     },
     {
       name: "Backend Development",
       level: 90,
       icon: "API",
       desc: "Node.js and Express for building scalable, maintainable server-side applications and REST APIs.",
       tags: ["Node.js", "Express", "RESTful APIs"]
     },
     {
       name: "Database Design",
       level: 88,
       icon: "DB",
       desc: "SQL and NoSQL databases, schema design, queries, and optimization for production workloads.",
       tags: ["SQL", "MongoDB", "Data modeling"]
     },
     {
       name: "System Architecture",
       level: 86,
       icon: "SYS",
       desc: "End-to-end system design connecting databases, APIs, and frontend interfaces.",
       tags: ["Architecture", "Full-stack", "Scalability"]
     }
  ];

  return (
    <section className="skills-master" id="skills">
      <div className="skills-header-master">
        <div className="section-rule" />
        <p className="section-kicker">Skills</p>
         <h2 className="skills-heading-master">Full-stack development across the entire stack.</h2>
        <p>
           Frontend excellence, backend reliability, and the full-stack thinking to connect them seamlessly.
        </p>
      </div>

      <div className="skills-grid-master">
        {skills.map((skill, index) => (
          <SkillTile key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
