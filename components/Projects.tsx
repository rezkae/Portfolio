import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-eyebrow">01 · Selected Work</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Projects, run through
              <br />
              full detection.
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-muted">
            Each entry below shipped end to end: architecture, interface,
            and the model or logic running behind it.
          </p>
        </div>

        <div className="mt-16 flex flex-col divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <article
              key={project.id}
              className="reticle group grid grid-cols-1 gap-6 py-10 transition-colors hover:bg-surface/60 sm:grid-cols-12 sm:gap-8 sm:px-6"
            >
              <div className="sm:col-span-1">
                <span className="label-tag text-muted group-hover:text-scan">
                  {project.index}
                </span>
              </div>

              <div className="sm:col-span-6">
                <h3 className="font-display text-2xl font-bold text-paper">
                  {project.title}
                </h3>
                <p className="label-tag mt-1 normal-case tracking-normal text-violet-glow">
                  {project.category}
                </p>
                <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-muted">
                  {project.detail}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between sm:col-span-5 sm:items-end sm:text-right">
                <div className="flex items-center gap-4 sm:justify-end">
                  {project.metrics && project.metrics[0] && (
                    <div className="rounded-sm border border-scan/40 bg-scan/5 px-3 py-1.5">
                      <p className="label-tag text-scan">
                        {project.metrics[0].label}
                      </p>
                      <p className="font-mono text-sm font-medium text-scan">
                        {project.metrics[0].value}
                      </p>
                    </div>
                  )}
                  <span className="label-tag">{project.year}</span>
                </div>

                <div className="mt-6 flex gap-4 sm:mt-0">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs uppercase tracking-[0.15em] text-paper underline decoration-line underline-offset-4 transition-colors hover:text-scan hover:decoration-scan"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
