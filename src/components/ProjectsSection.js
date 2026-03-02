import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useKineticMomentum } from "../hooks/useKineticMomentum";
import "./ProjectsSection.css";

const staticProjects = [
  {
    title: "Quiz App v2.0",
    description: "Advanced quiz application with real-time scoring, progress tracking, question randomization, and an intuitive user interface. Latest version with enhanced features.",
    tech: ["JavaScript", "React", "CSS3"],
    demoUrl: "https://quiz-app-v2-0.vercel.app/",
    repoUrl: "https://github.com/Farhan-176/Quiz-App-v2.0",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Microfinance Loan Application",
    description: "Full-stack microfinance system with loan applications, guarantor support, admin dashboard, and comprehensive loan calculations. Production-ready platform.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    demoUrl: "https://microfinance-loan-app.vercel.app/",
    repoUrl: "https://github.com/Farhan-176/Microfinance-Loan-App",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Hospital Management System",
    description: "Complete hospital management application with patient records, appointments, admin dashboard, and billing system. Currently under active development.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    demoUrl: "https://github.com/Farhan-176/Hospital-Management-App",
    repoUrl: "https://github.com/Farhan-176/Hospital-Management-App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Little Lemon Restaurant",
    description: "Full-featured restaurant table reservation system with interactive booking form, API integration, and comprehensive accessibility features. Meta Front-End Capstone Project.",
    tech: ["React", "React Router", "CSS3", "HTML5"],
    demoUrl: "https://littlelemonweb.vercel.app/",
    repoUrl: "https://github.com/Farhan-176/Littlelemonweb",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "QR Code Generator",
    description: "Sleek, modern QR code generator built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies - just clean, efficient code.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://qr-code-generator-ashy-seven.vercel.app/",
    repoUrl: "https://github.com/Farhan-176/QR-Code-Generator",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "GitHub Search & Analytics",
    description: "Search GitHub users with comprehensive analytics, activity feed, and detailed insights dashboard. Real GitHub API integration for live data.",
    tech: ["React", "GitHub API", "JavaScript"],
    demoUrl: "https://github-search-app-umber.vercel.app/",
    repoUrl: "https://github.com/Farhan-176/Github-Search-App",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "LinkedIn to ATS Resume Writer",
    description: "Convert your LinkedIn profile into an ATS-optimized resume with one click. Optimized for applicant tracking systems and recruiter workflows.",
    tech: ["TypeScript", "Next.js", "React"],
    demoUrl: "https://linkedin-to-ats-resume-writer.vercel.app/",
    repoUrl: "https://github.com/Farhan-176/Linkedin-to-ATS-Resume-Writer",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Memory Card Game",
    description: "🎮 Interactive memory card game with 3D flip animations and particle effects. Built with vanilla JavaScript, CSS animations, and HTML5 Canvas.",
    tech: ["JavaScript", "CSS3", "HTML5 Canvas"],
    demoUrl: "https://memory-card-game-176.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/Memory-Card-Game",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Markdown Editor with Live Preview",
    description: "Lightning-fast markdown editor with live HTML preview, autosave, dark mode, and ready-made snippets for quick documentation.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://markdown-editor-with-live-preview.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/Markdown-Editor-with-Live-Preview",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80"
  },
];

const ProjectCard = ({ project, index, scrollX }) => {
  const scale = useTransform(scrollX, [index * 400 - 400, index * 400, index * 400 + 400], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollX, [index * 400 - 400, index * 400, index * 400 + 400], [0.5, 1, 0.5]);
  const { rotateX, rotateY } = useKineticMomentum();
  const [imgError, setImgError] = React.useState(false);

  const fallbackGradient = `linear-gradient(135deg, rgba(91, 140, 255, 0.3), rgba(168, 85, 247, 0.3))`;

  return (
    <motion.div 
      style={{ scale, opacity, rotateX, rotateY }}
      className="exhibition-card-master"
      whileHover="hovered"
    >
      <div className="card-visual-master">
        {!imgError ? (
          <motion.img 
            src={project.image} 
            alt={project.title}
            onError={() => setImgError(true)}
            variants={{
              hovered: { filter: "url(#liquid-distort)" }
            }}
            loading="lazy"
          />
        ) : (
          <div 
            style={{ background: fallbackGradient, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ fontSize: '3rem' }}>🎨</div>
          </div>
        )}
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
