import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

const GITHUB_USERNAME = "Farhan-176";

const staticProjects = [
  {
    title: "Linkedin to ATS Resume Writer",
    description: "LinkedIn to ATS Resume Writer - Convert your LinkedIn profile into an ATS-optimized resume.",
    tech: ["TypeScript", "React", "Next.js"],
    demoUrl: "https://linkedin-to-ats-resume-writer.vercel.app",
    repoUrl: "https://github.com/Farhan-176/Linkedin-to-ATS-Resume-Writer",
  },
  {
    title: "Skin Allergy App (FYP)",
    description: "Final year project - Skin allergy detection and management application.",
    tech: ["JavaScript", "React", "Mobile"],
    demoUrl: "https://github.com/Farhan-176/Skin-Allergy-App-FYP",
    repoUrl: "https://github.com/Farhan-176/Skin-Allergy-App-FYP",
  },
  {
    title: "GitHub Search App",
    description: "GitHub Search App with analytics, activity feed, and insights.",
    tech: ["JavaScript", "React", "API"],
    demoUrl: "https://github.com/Farhan-176/Github-Search-App",
    repoUrl: "https://github.com/Farhan-176/Github-Search-App",
  },
  {
    title: "Markdown Editor with Live Preview",
    description: "Lightning-fast Markdown editor with live HTML preview and ready-made snippets.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://markdown-editor-with-live-preview.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/Markdown-Editor-with-Live-Preview",
  },
  {
    title: "QR Code Generator",
    description: "A sleek, modern QR code generator built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies - just clean, efficient code.",
    tech: ["CSS", "HTML", "JavaScript"],
    demoUrl: "https://github.com/Farhan-176/QR-Code-Generator",
    repoUrl: "https://github.com/Farhan-176/QR-Code-Generator",
  },
  {
    title: "Memory Card Game",
    description: "🎮 Memory Card Game with 3D flip animations and particle effects - Built with vanilla JavaScript, CSS animations, and HTML5 Canvas.",
    tech: ["CSS", "JavaScript", "HTML5"],
    demoUrl: "https://memory-card-game-176.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/Memory-Card-Game",
  },
  {
    title: "Random Quote Generator",
    description: "Random quote generator with beautiful UI and inspirational quotes.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://randomqoutegenerator176.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/Random-Quote-Generator",
  },
  {
    title: "My Portfolio",
    description: "My Portfolio with React - Personal portfolio showcasing projects and skills.",
    tech: ["JavaScript", "React", "Framer Motion"],
    demoUrl: "https://my-portfolio-xi-lilac-49.vercel.app",
    repoUrl: "https://github.com/Farhan-176/My-Portfolio",
  },
  {
    title: "Little Lemon App",
    description: "Completed Little Lemon food ordering app with onboarding, menu filtering, and profile management.",
    tech: ["TypeScript", "React Native", "Mobile"],
    demoUrl: "https://github.com/Farhan-176/little-lemon-app",
    repoUrl: "https://github.com/Farhan-176/little-lemon-app",
  },
  {
    title: "Little Lemon Web",
    description: "Littlelemon Responsive Web - Restaurant website with online booking and menu showcase.",
    tech: ["JavaScript", "React", "CSS"],
    demoUrl: "https://littlelemonweb.vercel.app",
    repoUrl: "https://github.com/Farhan-176/Littlelemonweb",
  },
  {
    title: "Calculator",
    description: "Calculator Using HTML, CSS & Javascript with a clean, modern interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://github.com/Farhan-176/Calculator",
    repoUrl: "https://github.com/Farhan-176/Calculator",
  },
  {
    title: "Business Name Generator",
    description: "Responsive Business Name Generator with JS - Generate creative business names instantly.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://github.com/Farhan-176/Business-Name-Generator",
    repoUrl: "https://github.com/Farhan-176/Business-Name-Generator",
  },
  {
    title: "Quiz App",
    description: "Fully Functional Quiz App with scoring, timer, and multiple categories.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://github.com/Farhan-176/Quiz-App",
    repoUrl: "https://github.com/Farhan-176/Quiz-App",
  },
  {
    title: "Weather App",
    description: "Real-time weather application fetching data from weather APIs.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://github.com/Farhan-176/Weather-App",
    repoUrl: "https://github.com/Farhan-176/Weather-App",
  },
  {
    title: "TODO TASK",
    description: "TODO TASK management app with add, delete, and mark complete features.",
    tech: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://github.com/Farhan-176/TODO-TASK",
    repoUrl: "https://github.com/Farhan-176/TODO-TASK",
  },
  {
    title: "My Web Portfolio",
    description: "A Non-responsive Portfolio built with HTML/CSS showcasing early work.",
    tech: ["CSS", "HTML"],
    demoUrl: "https://myweb176.netlify.app/",
    repoUrl: "https://github.com/Farhan-176/My-Web-Portfolio",
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState(staticProjects);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        const data = await res.json();
        if (!Array.isArray(data)) return;

        // Build a lookup of static projects by repo name (lowercase)
        const staticByName = {};
        staticProjects.forEach((sp) => {
          if (!sp.repoUrl) return;
          try {
            const pathname = new URL(sp.repoUrl).pathname; // /user/repo
            const parts = pathname.split("/").filter(Boolean);
            const name = parts.length ? parts[parts.length - 1] : null;
            if (name) staticByName[name.toLowerCase()] = sp;
          } catch (e) {
            // ignore invalid urls
          }
        });

        const merged = [];

        // Map fetched repos, but only include those that match our static project names
        const allowedNames = new Set(Object.values(staticByName).map((s) => {
          try {
            const parts = new URL(s.repoUrl).pathname.split("/").filter(Boolean);
            return parts.length ? parts[parts.length - 1].toLowerCase() : null;
          } catch (e) {
            return null;
          }
        }).filter(Boolean));

        data.forEach((r) => {
          const lname = (r.name || "").toLowerCase();
          if (!allowedNames.has(lname)) return; // skip repos we don't want to show

          const sp = staticByName[lname];
          if (sp) {
            merged.push({
              ...sp,
              repoUrl: r.html_url,
              demoUrl: sp.demoUrl || r.homepage || r.html_url,
              title: sp.title || r.name,
              description: sp.description || r.description || "No description provided",
            });
          }
        });

        // Build final list: prefer merged (from GitHub) but fall back to staticProjects.
        let finalList = merged.length ? merged.slice() : [...staticProjects];

        // Ensure any static project that wasn't present in the merged list is added (fallback)
        staticProjects.forEach((sp) => {
          const exists = finalList.some((f) => (f.title || "").toLowerCase() === (sp.title || "").toLowerCase());
          if (!exists) finalList.push(sp);
        });

        // Ensure priority ordering: Quiz, Weather, Kanban should be at the beginning
        const priority = ["Quiz App", "Weather App", "Kanban Tracker"];
        finalList.sort((a, b) => {
          const ia = priority.indexOf(a.title);
          const ib = priority.indexOf(b.title);
          if (ia === -1 && ib === -1) return 0;
          if (ia === -1) return 1;
          if (ib === -1) return -1;
          return ia - ib;
        });

        if (finalList.length) setProjects(finalList);
      } catch (e) {
        // keep staticProjects as-is on error
      }
    }
    fetchRepos();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const card = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <section className={`projects-section ${isMobile ? "mobile" : ""}`} id="projects">
      {isMobile ? (
        <div className="projects-mobile-content">
          <motion.h1
            className="projects-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h1>

          <motion.div className="projects-grid" variants={container} initial="hidden" animate="visible">
            {projects.map((p, idx) => (
              <motion.div key={idx} className={`project-card`} variants={card}>
                <div className="project-header">
                  <h3 className="project-title">{p.title}</h3>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="links">
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="link primary">Live Demo</a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer" className="link">GitHub</a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="projects-container">
          <motion.div
            className="vertical-heading"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>PROJECTS</h2>
          </motion.div>

          <div className="projects-content">
            <motion.div className="projects-grid" variants={container} initial="hidden" animate="visible">
              {projects.map((p, idx) => (
                <motion.div
                    key={idx}
                    className={`project-card`}
                    variants={card}
                    whileHover={{ y: -6, boxShadow: "0 10px 40px rgba(91, 140, 255, 0.25)" }}
                  >
                    <div className="project-header">
                      <h3 className="project-title">{p.title}</h3>
                    </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="links">
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" rel="noreferrer" className="link primary">Live Demo</a>
                    )}
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" rel="noreferrer" className="link">GitHub</a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
