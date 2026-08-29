"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import DecodeText from "@/components/DecodeText";
import { profile, quickStats, services } from "@/lib/data";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  defaultViewport,
} from "@/components/motion";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

/**
 * Homepage "about summary" (Section 02): a compact two-row editorial block
 * after WorkSummary. Header follows WorkSummary's "Project Archive" pattern;
 * the top row pairs an About intro with the quick stats; the bottom row
 * pairs the Services list with a status + Start-a-Project CTA.
 */
export default function AboutSummary() {
  return (
    <section className="border-t border-line text-paper">
      {/* SECTION HEADER */}
      <motion.div
        className="border-b border-line"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* LEFT: SECTION NUMBER */}
          <motion.div
            className="border-b border-line p-4 sm:p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8"
            variants={fadeInLeft}
          >
            <DecodeText text="Section" className="eyebrow block text-muted" />
            <span className="mt-2 block font-display text-5xl font-bold tracking-tighter text-paper sm:text-6xl md:text-7xl">
              02
            </span>
          </motion.div>

          {/* RIGHT: HEADLINE */}
          <motion.div
            className="flex flex-col justify-center p-4 sm:p-6 md:col-span-10 md:p-8 lg:p-16"
            variants={fadeInUp}
          >
            <DecodeText
              text="More Than Just Code"
              className="eyebrow-accent mb-2 block sm:mb-4"
            />
            <h2 className="font-display text-3xl font-bold uppercase leading-[0.9] tracking-tighter text-paper sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <DecodeText text="Beyond" />
              <DecodeText text="Code" className="ml-2 text-muted/40 sm:ml-4" />
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* TOP ROW: ABOUT + QUICK STATS */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="border-b border-line p-4 sm:p-6 md:col-span-7 md:border-b-0 md:border-r md:p-8 lg:p-16">
            <DecodeText
              text="About"
              className="eyebrow-accent mb-4 block sm:mb-6"
            />
            <p className="max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg">
              I build software with purpose, from clinical AI platforms to
              small-business tools. Based in {profile.location}, and open to
              remote work.
            </p>
          </div>

          <div className="p-4 sm:p-6 md:col-span-5 md:p-8 lg:p-16">
            <DecodeText text="Numbers" className="eyebrow block text-muted" />
            <div className="mt-4 flex flex-col sm:mt-6">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-4 sm:py-5 ${
                    index > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <span className="font-display text-4xl font-bold tracking-tighter text-paper sm:text-5xl md:text-6xl">
                    {stat.number}
                  </span>
                  <p className="eyebrow mt-1 block text-muted sm:mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* BOTTOM ROW: SERVICES + STATUS */}
      <Reveal delay={0.05}>
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-12">
          <div className="border-b border-line p-4 sm:p-6 md:col-span-7 md:border-b-0 md:border-r md:p-8 lg:p-16">
            <DecodeText text="Services" className="eyebrow block text-muted" />
            <ul className="mt-4 flex flex-col">
              {services.map((service) => (
                <li
                  key={service.index}
                  className="flex items-baseline gap-4 border-b border-line py-3 last:border-b-0"
                >
                  <span className="font-mono text-[10px] text-muted/60">
                    {service.index}
                  </span>
                  <span className="font-display text-base font-bold text-paper">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between p-4 sm:p-6 md:col-span-5 md:p-8 lg:p-16">
            <div>
              <DecodeText text="Status" className="eyebrow block text-muted" />
              <div className="mt-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-scan" />
                </span>
                <p className="font-display text-base font-bold text-paper sm:text-lg">
                  {profile.available ? "Available" : "Busy"}
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group mt-6 flex items-center justify-between whitespace-nowrap bg-paper px-5 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-violet sm:mt-8"
            >
              <span className="mr-6">Start a Project</span>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
