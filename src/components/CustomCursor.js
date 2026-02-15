import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from "framer-motion";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const xVelocity = useVelocity(cursorX);
  const yVelocity = useVelocity(cursorY);

  // Velocity-based stretching logic
  const stretch = useTransform(
    [xVelocity, yVelocity],
    ([vx, vy]) => Math.min(Math.sqrt(vx * vx + vy * vy) / 800, 1.5)
  );

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Velocity driven noise intensity (reactive grain)
  const noiseIntensity = useTransform(
    [xVelocity, yVelocity],
    ([vx, vy]) => 0.03 + Math.min(Math.sqrt(vx * vx + vy * vy) / 10000, 0.05)
  );

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Update global CSS variable for noise intensity
    const unsubscribe = noiseIntensity.on("change", (latest) => {
      document.documentElement.style.setProperty("--noise-opacity", latest);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      unsubscribe();
    };
  }, [cursorX, cursorY, noiseIntensity]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        className={`cursor-ring ${isHovered ? "hovered" : ""}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scaleX: useTransform(stretch, (s) => 1 + s),
          rotate: useTransform([xVelocity, yVelocity], ([vx, vy]) => Math.atan2(vy, vx) * (180 / Math.PI))
        }}
        animate={{
          scaleY: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
