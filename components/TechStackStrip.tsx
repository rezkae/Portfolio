"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import TechIcon from "@/components/TechIcon";
import { defaultViewport } from "@/components/motion";

export default function TechStackStrip() {
  return (
    <motion.section
      className="border-t border-line"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap items-stretch">
        <div className="flex items-center border-r border-line px-4 py-3 sm:px-6">
          <span className="eyebrow-accent">Stack</span>
        </div>
        {techStack.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-2 border-r border-line px-4 py-3 font-display text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-paper sm:px-6"
          >
            <TechIcon name={tech} className="h-4 w-4 text-muted" />
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
