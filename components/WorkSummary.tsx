"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FactStrip from "@/components/FactStrip";
import DecodeText from "@/components/DecodeText";
import { projects } from "@/lib/data";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  defaultViewport,
} from "@/components/motion";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-4 sm:w-4">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function WorkSummary() {
  return (
    <section id="work" className="border-t border-line text-paper">
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
            <span className="eyebrow block text-muted">
              <DecodeText text="Section" />
            </span>
            <span className="mt-2 block font-display text-5xl font-bold tracking-tighter text-paper sm:text-6xl md:text-7xl">
              01
            </span>
          </motion.div>

          {/* RIGHT: HEADLINE + LINK */}
          <motion.div
            className="flex flex-col justify-between gap-4 p-4 sm:p-6 md:col-span-10 md:flex-row md:items-end md:p-8 lg:p-16 md:gap-6"
            variants={fadeInUp}
          >
            <div>
              <DecodeText
                text="Selected Work"
                className="eyebrow-accent mb-2 block sm:mb-4"
              />
              <h2 className="font-display text-3xl font-bold uppercase leading-[0.9] tracking-tighter text-paper sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <DecodeText text="Project" />
                <DecodeText text="Archive" className="ml-2 text-muted/40 sm:ml-4" />
              </h2>
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 whitespace-nowrap border-b border-paper pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:border-scan hover:text-scan"
            >
              View All
              <ArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* PROJECT ROWS — first 3 pinned projects */}
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={`/projects#${project.id}`}
            className="group block border-b border-line transition-colors hover:bg-surface/60"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
              {/* INDEX */}
              <div className="hidden items-center justify-center border-r border-line p-6 lg:col-span-1 lg:flex">
                <span className="font-mono text-[10px] text-muted/60">
                  0{index + 1}
                </span>
              </div>

              {/* IMAGE */}
              <div className="border-b border-line sm:col-span-1 sm:border-b-0 sm:border-r lg:col-span-4">
                <div className="relative aspect-video overflow-hidden bg-surface sm:aspect-4/3 lg:aspect-4/3">
                  {project.images[0] ? (
                    <>
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {/* Glass hover accent — small corner chip, never a full overlay */}
                      <span className="glass pointer-events-none absolute bottom-3 right-3 flex translate-y-1 items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Project
                        <ArrowUpRight />
                      </span>
                    </>
                  ) : (
                    <ImagePlaceholder
                      label="Project image"
                      ratio="aspect-[4/3]"
                      className="absolute inset-0 border-0"
                    />
                  )}
                </div>
              </div>

              {/* INFO */}
              <div className="flex flex-col justify-center border-b border-line p-4 sm:col-span-1 sm:border-b-0 sm:p-6 md:p-8 lg:col-span-5 lg:border-r lg:p-12">
                <span className="eyebrow block text-muted">{project.category}</span>
                <h3 className="mt-2 flex items-center gap-2 font-display text-xl font-bold tracking-tight text-paper sm:text-2xl md:mt-3 lg:text-4xl">
                  {project.title}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 -translate-x-2 text-muted/40 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:h-6 sm:w-6">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </h3>
                <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-muted md:mt-4 md:text-base">
                  {project.summary}
                </p>
              </div>

              {/* YEAR / META */}
              <div className="flex flex-col justify-center p-4 sm:col-span-2 sm:p-6 md:p-8 lg:col-span-2 lg:p-12">
                <DecodeText text="Year" className="eyebrow block text-muted" />
                <span className="mt-1 font-display text-lg font-bold text-paper md:text-xl">
                  {project.year}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {/* MOST IMPORTANT INFO STRIP */}
      <FactStrip
        items={[
          { label: "Projects", value: `${projects.length} shipped end-to-end` },
          { label: "Flagship", value: "MELAScan, from thesis to production" },
          { label: "Approach", value: "Solo developer, model to interface" },
        ]}
      />

      {/* FOOTER CTA */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
      >
        <div className="hidden border-r border-line md:col-span-2 md:block lg:col-span-1" />
        <div className="flex flex-col justify-between gap-4 p-4 sm:p-6 md:col-span-10 md:flex-row md:items-center md:p-8 md:gap-6 lg:col-span-11 lg:p-16">
          <p className="max-w-md font-body text-base text-muted sm:text-lg">
            Interested in working together? I&apos;m always open to discussing
            new projects and creative ideas.
          </p>
          <Link
            href="/contact"
            className="group flex items-center justify-between whitespace-nowrap bg-paper px-4 py-3 text-ink transition-colors hover:bg-violet sm:px-6 sm:py-4"
          >
            <span className="mr-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] sm:mr-6">
              Start a Project
            </span>
            <ArrowUpRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
