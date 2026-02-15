import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useKineticMomentum } from "../hooks/useKineticMomentum";
import "./SkillsSection.css";

const SkillTile = ({ skill, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { rotateX, rotateY } = useKineticMomentum();

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(91, 140, 255, 0.2),
      transparent 80%
    )
  `;

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      style={{ rotateX, rotateY }}
      className={`bento-tile-master skill-${index} interactive`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="tile-glow-master"
        style={{ background }}
      />
      <div className="tile-content-master">
        <div className="tile-icon-master">{skill.icon}</div>
        <div className="tile-info-master">
          <h3 className="tile-title-master">{skill.name}</h3>
          <p className="tile-desc-master">{skill.desc}</p>
          <div className="tile-bar-master">
            <motion.div
              className="bar-fill-master"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const skills = [
    { name: "React Ecosystem", level: 95, icon: "⚛️", desc: "Expert with React, Next.js, Redux, and Framer Motion for high-performance frontends." },
    { name: "Backend Architecture", level: 90, icon: "🏛️", desc: "Node.js, Express, MongoDB, PostgreSQL - building scalable server-side systems." },
    { name: "TypeScript", level: 88, icon: "🔷", desc: "Type-safe code with strong architectural patterns and SOLID principles." },
    { name: "Full Stack Integration", level: 92, icon: "🔗", desc: "RESTful APIs, GraphQL, microservices, and cloud-native architectures." },
    { name: "Performance Optimization", level: 90, icon: "⚡", desc: "Lazy loading, code splitting, database optimization, and CDN mastery." },
    { name: "Responsive Design", level: 92, icon: "📱", desc: "Accessibility-first approach with beautiful, intuitive UX across all devices." }
  ];

  return (
    <section className="skills-master" id="skills">
      <div className="skills-header-master">
        <h2 className="skills-heading-master">The <span>Matrix</span></h2>
        <p>A cognitive mapping of core technical competencies and digital mastery.</p>
      </div>

      <div className="bento-grid-master">
        {skills.map((skill, index) => (
          <SkillTile key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
