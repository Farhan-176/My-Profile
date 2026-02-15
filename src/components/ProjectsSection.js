import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useKineticMomentum } from "../hooks/useKineticMomentum";
import "./ProjectsSection.css";

const staticProjects = [
  {
    title: "Linkedin Resume Writer",
    description: "Convert your LinkedIn profile into an ATS-optimized resume.",
    tech: ["TypeScript", "Next.js"],
    demoUrl: "https://linkedin-to-ats-resume-writer.vercel.app",
    repoUrl: "https://github.com/Farhan-176/Linkedin-to-ATS-Resume-Writer",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Skin Allergy FYP",
    description: "Final year project - Skin allergy detection and management.",
    tech: ["React Native", "AI"],
    demoUrl: "https://github.com/Farhan-176/Skin-Allergy-App-FYP",
    repoUrl: "https://github.com/Farhan-176/Skin-Allergy-App-FYP",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "GitHub Analytics",
    description: "GitHub Search App with analytics, activity feed, and insights.",
    tech: ["React", "GitHub API"],
    demoUrl: "https://github.com/Farhan-176/Github-Search-App",
    repoUrl: "https://github.com/Farhan-176/Github-Search-App",
    image: "https://images.unsplash.com/photo-1618401471353-b98aadebc25b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Markdown Live",
    description: "Lightning-fast Markdown editor with live HTML preview.",
    tech: ["JavaScript", "HTML"],
    demoUrl: "https://markdown-editor-with-live-preview.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/Markdown-Editor-with-Live-Preview",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
  },
];

const ProjectCard = ({ project, index, scrollX }) => {
  const scale = useTransform(scrollX, [index * 400 - 400, index * 400, index * 400 + 400], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollX, [index * 400 - 400, index * 400, index * 400 + 400], [0.5, 1, 0.5]);
  const { rotateX, rotateY } = useKineticMomentum();

  return (
    <motion.div 
      style={{ scale, opacity, rotateX, rotateY }}
      className="exhibition-card-master"
      whileHover="hovered"
    >
      <div className="card-visual-master">
        <motion.img 
          src={project.image} 
          alt={project.title}
          variants={{
            hovered: { filter: "url(#liquid-distort)" }
          }}
        />
        <div className="card-overlay-master" />
      </div>
      <div className="card-info-master">
        <h3 className="card-title-master">{project.title}</h3>
        <p className="card-desc-master">{project.description}</p>
        <div className="card-tags-master">
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="card-actions-master">
          <a href={project.demoUrl} className="btn-card-master primary interactive">Launch</a>
          <a href={project.repoUrl} className="btn-card-master secondary interactive">Source</a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scrollX = useTransform(scrollXProgress, [0, 1], [0, staticProjects.length * 400]);

  return (
    <section className="projects-master" id="projects">
      {/* Liquid Shader Filter Definition */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="liquid-distort">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" dur="10s" values="0.01 0.01;0.05 0.05;0.01 0.01" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
        </filter>
      </svg>

      <div className="projects-header-master">
        <h2 className="projects-heading-master">Experience <span>Exhibition</span></h2>
        <p>A curated selection of digital architectures and technical experiments.</p>
      </div>

      <div className="horizontal-container-master" ref={containerRef}>
        <div className="exhibition-track-master">
          {staticProjects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} scrollX={scrollX} />
          ))}
        </div>
      </div>
    </section>
  );
}
