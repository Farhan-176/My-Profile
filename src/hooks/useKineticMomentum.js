import { useMotionValue, useVelocity, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useKineticMomentum() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xVelocity = useVelocity(x);
    const yVelocity = useVelocity(y);

    const rotateX = useSpring(useTransform(yVelocity, [-2000, 2000], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(xVelocity, [-2000, 2000], [-15, 15]), { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return { rotateX, rotateY };
}
