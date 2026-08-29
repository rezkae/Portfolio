"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Max translate distance in px (default 10). */
  strength?: number;
  /** Cursor proximity radius in px (default 72). */
  radius?: number;
};

/**
 * Magnetic cursor-follow wrapper: nudges the element a few pixels toward
 * the cursor while it is within `radius` of the element's center, springing
 * back to rest otherwise. No-ops on touch devices (no fine pointer) and
 * under prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  className = "",
  strength = 10,
  radius = 72,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const enabled = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.3 });

  useEffect(() => {
    enabled.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!enabled.current || !el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > 0 && dist < radius) {
      const pull = 1 - dist / radius;
      x.set((dx / dist) * strength * pull);
      y.set((dy / dist) * strength * pull);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.span>
  );
}
