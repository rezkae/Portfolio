"use client";

import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/components/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Scroll-reveal wrapper for server-rendered sections: fades/slides content
 * in as it enters the viewport, with optional stagger delay.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
