"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Gallery from "@/components/Gallery";
import TechIcon from "@/components/TechIcon";
import { projects } from "@/lib/data";
import { defaultViewport } from "@/components/motion";

export default function ProjectList() {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        const [mainImage] = project.images;

        return (
          <motion.article
            key={project.id}
            id={project.id}
            className="clickable-ring grid scroll-mt-24 grid-cols-1 border-b border-line py-12 last:border-b-0 sm:py-16 md:grid-cols-12 lg:grid-cols-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {/* IMAGE */}
            <div className="border-b border-line pb-8 md:col-span-5 md:border-b-0 md:border-r md:pb-0 md:pr-10 lg:col-span-5 lg:border-r lg:pb-0 lg:pr-12">
              {mainImage ? (
                <Gallery images={project.images} className="aspect-[4/3]" />
              ) : (
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-surface">
                  <ImagePlaceholder
                    label="Project image"
                    ratio="aspect-[4/3]"
                    className="absolute inset-0 border-0"
                  />
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="md:col-span-7 md:pl-10 lg:col-span-7 lg:pl-12">
              <div className="mt-8 flex items-baseline justify-between gap-4 md:mt-0">
                <span className="eyebrow block text-muted">
                  {project.index} · {project.year}
                </span>
                <span className="hidden font-mono text-[10px] text-muted/60 md:block">
                  {project.category}
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-[0.9] tracking-tighter text-paper sm:text-3xl lg:text-4xl">
                {project.title}
              </h2>
              <p className="eyebrow mt-2 block text-violet-glow md:hidden">
                {project.category}
              </p>

              <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-muted sm:text-base">
                {project.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="clickable-ring flex items-center gap-1.5 border border-line bg-surface px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                  >
                    <TechIcon name={tech} className="h-3 w-3 text-muted" />
                    {tech}
                  </span>
                ))}
              </div>

              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-scan/40 bg-scan/5 px-3 py-1.5"
                    >
                      <p className="eyebrow text-scan">{metric.label}</p>
                      <p className="mt-1 font-mono text-sm font-medium text-scan">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="reticle mt-6 inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-colors hover:border-scan hover:text-scan"
                >
                  View Source
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
