import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AboutSection.css";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [activeRole, setActiveRole] = useState("both");
  const roleContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click outside handler to reset to "both"
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleContainerRef.current && !roleContainerRef.current.contains(event.target)) {
        setActiveRole("both");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const contentFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  // Role-specific content
  const roleContent = {
    both: {
      title: "Full Stack Developer",
      paragraphs: [
        "I'm a passionate Full Stack Developer who loves building scalable web applications and contributing to open-source projects. I believe in writing clean, maintainable code and constantly learning new technologies to solve real-world problems.",
        "Currently working on full-stack web applications, I'm always learning and exploring new technologies. I'm open to collaborating on interesting open-source projects and tackling challenging problems that make a real impact.",
        "With expertise across the entire development stack—from React and Next.js on the frontend to Node.js, Express, and MongoDB on the backend—I deliver end-to-end solutions that are robust, scalable, and user-friendly."
      ]
    },
    social: {
      title: "Backend Development",
      paragraphs: [
        "I specialize in <span class='highlight'>building robust server-side applications</span> using Node.js and Express. My backend solutions are scalable, secure, and optimized for performance.",
        "My expertise includes <strong>RESTful APIs</strong>, <strong>database design</strong>, <strong>authentication & authorization</strong>, and <strong>server optimization</strong>. I work with MongoDB and PostgreSQL to create efficient data solutions.",
        "I focus on creating <span class='highlight'>clean architecture</span> and <span class='highlight'>maintainable code</span> that can scale as your application grows. Security and performance are always top priorities in my backend development.",
        "From microservices to monolithic applications, I build server solutions that are reliable, fast, and ready for production deployment."
      ]
    },
    frontend: {
      title: "Frontend Development",
      paragraphs: [
        "I build <span class='highlight'>modern, responsive web applications</span> that combine beautiful design with flawless functionality. My code is clean, maintainable, and optimized for performance.",
        "My tech stack includes <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>JavaScript (ES6+)</strong>, <strong>HTML5 & CSS3</strong>, and <strong>Tailwind CSS</strong>. I stay updated with the latest web technologies and best practices.",
        "Every project I deliver is <span class='highlight'>mobile-first</span>, <span class='highlight'>accessible</span>, and <span class='highlight'>performance-optimized</span>. I focus on creating seamless user experiences that work perfectly across all devices and browsers.",
        "From single-page applications to complex dashboards, I turn design mockups into production-ready code that exceeds expectations and delights users."
      ]
    }
  };

  return (
  <section className="about-section" id="about">
    {isMobile ? (
      /* MOBILE VIEW - Single About Me text */
      <div className="mobile-about-content">
        <motion.h1
          className="mobile-about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="mobile-bio-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a passionate <span className="highlight">Full Stack Developer</span> who loves building scalable web applications and contributing to open-source projects. I believe in writing clean, maintainable code and constantly learning new technologies to solve real-world problems.
          </p>
          <p>
            My expertise spans the entire development stack—<strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> on the frontend, and <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong> on the backend. I stay updated with the latest web technologies and best practices to deliver cutting-edge solutions.
          </p>
          <p>
            Currently working on full-stack web applications, I'm always exploring new technologies and open to collaborating on interesting open-source projects. Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    ) : (
      /* DESKTOP VIEW - Single About Me text */
      <div className="about-container">
        <motion.div 
          className="vertical-heading"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>ABOUT ME</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="combined-bio"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bio-content">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I'm a passionate <span className="highlight">Full Stack Developer</span> who loves building scalable web applications and contributing to open-source projects. I believe in writing clean, maintainable code and constantly learning new technologies to solve real-world problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                My expertise spans the entire development stack—<strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> on the frontend, and <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong> on the backend. I stay updated with the latest web technologies and best practices to deliver cutting-edge solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Currently working on full-stack web applications, I'm always exploring new technologies and open to collaborating on interesting open-source projects. Let's build something amazing together!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    )}
  </section>
);
}
