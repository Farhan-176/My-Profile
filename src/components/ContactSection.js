import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./ContactSection.css";

const MagneticLink = ({ children, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
      x.set(distanceX * 0.4);
      y.set(distanceY * 0.4);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="social-tag-master interactive"
    >
      {children}
    </motion.a>
  );
};

export default function ContactSection() {
  const CONTACT_EMAIL = "afridifarhan92@gmail.com";
  const CONTACT_PHONE = "03491940560";
  const LOCATION = "Pakistan";
  const DISPLAY_PHONE = "+92 349 194 0560";

  return (
    <section className="contact-master" id="contact">
      <div className="contact-bg-labels">
        <div className="label-track">
          <span>CONNECT CONNECT CONNECT CONNECT CONNECT CONNECT</span>
        </div>
        <div className="label-track reverse">
          <span>SYNCHRONIZE SYNCHRONIZE SYNCHRONIZE SYNCHRONIZE</span>
        </div>
      </div>

      <div className="contact-container-master">
        <div className="contact-grid-master">
          <motion.div
            className="contact-info-master"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="contact-heading-master">Initiate <span>Connection</span></h2>
            <p className="contact-sub-master">
              Open for elite architectural collaborations, high-performance projects, and digital strategy.
            </p>

            <div className="social-magnetic-container">
              <MagneticLink href="https://github.com/Farhan-176">GitHub</MagneticLink>
              <MagneticLink href="https://www.linkedin.com/in/farhanafrididev">LinkedIn</MagneticLink>
              <MagneticLink href={`https://wa.me/${CONTACT_PHONE}`}>WhatsApp</MagneticLink>
            </div>
          </motion.div>

          <motion.div
            className="contact-cards-master"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {[
              { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: "✉️" },
              { label: "Phone", value: DISPLAY_PHONE, href: `tel:${CONTACT_PHONE}`, icon: "📱" },
              { label: "Location", value: LOCATION, icon: "📍" }
            ].map((item, i) => (
              <div key={i} className="info-card-master interactive">
                <div className="info-icon-master">{item.icon}</div>
                <div className="info-details-master">
                  <span className="info-label-master">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="info-value-master">{item.value}</a>
                  ) : (
                    <span className="info-value-master">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
