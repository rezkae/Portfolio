"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
} from "framer-motion";
import { profile, stats, quickStats, techStack } from "@/lib/data";
import TechIcon from "@/components/TechIcon";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "@/components/motion";

/** Counts from 0 to `target` when scrolled into view, e.g. "2" -> "2+". */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(latest)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, count]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

/** Renders a quick-stat number: count-up for numeric values, pulse for symbols. */
function StatNumber({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return (
      <motion.span
        className="inline-block"
        animate={{ scale: [1, 1.12, 1], opacity: [1, 0.55, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {value}
      </motion.span>
    );
  }
  return <CountUp target={parseInt(match[1], 10)} suffix={match[2]} />;
}

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex min-h-dvh flex-col bg-ink text-paper"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* MAIN HERO CONTENT */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
        {/* LEFT: SECTION NUMBER */}
        <motion.div
          className="hidden flex-col justify-between border-r border-line p-6 lg:flex lg:col-span-1"
          variants={fadeInLeft}
        >
          <span className="eyebrow-wide">00</span>
          <div className="flex flex-col items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce text-muted">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            <span className="eyebrow [writing-mode:vertical-lr] rotate-180 text-muted">
              Scroll
            </span>
          </div>
        </motion.div>

        {/* CENTER: HEADLINE + IMAGE */}
        <div className="flex flex-col border-b border-line lg:col-span-8 lg:border-b-0 lg:border-r">
          {/* HEADLINE */}
          <div className="flex flex-1 flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-16">
            <motion.h1
              className="font-display text-4xl font-bold uppercase leading-[0.85] tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
              variants={staggerContainer}
            >
              <motion.span className="block" variants={fadeInUp}>
                {profile.firstName}
              </motion.span>
              <motion.span className="block text-muted/40" variants={fadeInUp}>
                {profile.lastName}
              </motion.span>
            </motion.h1>
            <motion.div
              className="mt-4 flex items-center gap-3 sm:mt-6 sm:gap-6"
              variants={fadeInUp}
            >
              <div className="h-px w-8 bg-line sm:w-16" />
              <p className="eyebrow max-w-xs normal-case tracking-[0.2em] text-muted">
                {profile.tagline}
              </p>
            </motion.div>
          </div>

          {/* IMAGE ROW */}
          <motion.div className="border-t border-line" variants={scaleIn}>
            {/* 3-column strip at every width; fixed short height on phones,
                square panels from sm up (compact single row, like Drei's). */}
            <div className="grid grid-cols-3">
              <div className="relative aspect-square h-32 overflow-hidden bg-surface sm:h-auto">
                <Image
                  src="/HomePhoto.png"
                  alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                  fill
                  priority
                  className="object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
              <div className="flex aspect-square h-32 items-center justify-center bg-paper sm:h-auto">
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1 text-center font-display text-lg font-bold uppercase tracking-tighter text-ink transition-colors hover:text-violet sm:px-2 sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  {profile.githubHandle}
                </Link>
              </div>
              {/* OPEN-TO-WORK CALLOUT */}
              <Link
                href="/contact"
                className="group flex aspect-square h-32 flex-col items-center justify-center gap-1.5 overflow-hidden bg-surface p-2 text-center transition-colors hover:bg-violet sm:h-auto sm:gap-2 sm:p-6"
              >
                <span className="eyebrow text-muted transition-colors group-hover:text-ink/70">
                  Open to Work
                </span>
                <span className="font-display text-[11px] font-bold uppercase leading-snug tracking-tight text-paper transition-colors group-hover:text-ink sm:text-xs lg:text-sm">
                  New and creative ideas? Let&apos;s work together.
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink sm:h-4 sm:w-4">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: INFO PANEL */}
        <motion.div className="flex flex-col lg:col-span-3" variants={fadeInRight}>
          {/* INTRO */}
          <div className="flex flex-1 flex-col justify-center border-b border-line p-4 sm:p-6 md:p-8 lg:p-10">
            <span className="eyebrow-wide mb-2 block text-muted sm:mb-4">
              Introduction
            </span>
            <p className="font-body text-sm font-light leading-relaxed text-paper sm:text-base lg:text-lg">
              {profile.intro}
            </p>
          </div>

          {/* TECH STACK */}
          <div className="border-b border-line p-4 sm:p-6 md:p-8 lg:p-10">
            <span className="eyebrow-wide mb-2 block text-muted sm:mb-4">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 8).map((tech, index) => (
                <motion.span
                  key={tech}
                  className="flex items-center gap-1.5 border border-line bg-surface px-2.5 py-1.5 text-xs font-medium text-paper"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <TechIcon name={tech} className="h-3.5 w-3.5 text-muted" />
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group flex items-center justify-between p-4 transition-colors hover:bg-paper hover:text-ink sm:p-6 md:p-8 lg:p-10"
          >
            <div>
              <span className="eyebrow block text-muted group-hover:text-ink/60 sm:mb-2">
                Get in Touch
              </span>
              <span className="font-display text-base font-bold tracking-tight sm:text-lg lg:text-xl">
                Start a Project
              </span>
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-6 sm:w-6">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM INFO BAR (driven by config) */}
      <motion.div className="border-t border-line" variants={fadeInUp}>
        <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-line p-3 sm:p-4 md:p-6 ${
                index % 2 === 0 ? "border-r" : ""
              } ${
                index < 2 ? "border-b lg:border-b-0" : ""
              } lg:border-r lg:last:border-r-0`}
            >
              <span className="eyebrow block text-muted">{stat.label}</span>
              <div className="mt-1 flex items-center gap-2">
                {stat.label === "Status" && (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scan opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-scan" />
                  </span>
                )}
                <p className="text-xs font-medium text-paper sm:text-sm">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* QUICK STATS */}
      <motion.div className="border-t border-line" variants={fadeInUp}>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {quickStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-line p-4 sm:p-6 md:p-8 ${
                index === 0 ? "border-b border-r sm:border-b-0" : ""
              }`}
            >
              <span className="font-display text-4xl font-bold tracking-tighter text-paper sm:text-5xl md:text-6xl">
                <StatNumber value={stat.number} />
              </span>
              <p className="eyebrow mt-1 block text-muted sm:mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
