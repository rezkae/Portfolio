"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft cursor-following glow (violet radial gradient, ~512px, blurred).
 * Tracks mousemove with a spring for a smooth trailing effect. Lives inside
 * the fixed background layer, above the gradient blobs. Disabled on touch
 * devices (no mouse).
 */
export default function CursorOrb() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    setEnabled(fine.matches);
    if (!fine.matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-10 h-[32rem] w-[32rem] rounded-full"
      style={{
        x: springX,
        y: springY,
        marginLeft: "-16rem",
        marginTop: "-16rem",
        background:
          "radial-gradient(circle, rgb(var(--violet) / 0.14) 0%, transparent 60%)",
        filter: "blur(60px)",
      }}
    />
  );
}
