import { services, techStack } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow">02 · What I Build</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Practical engineering, from interface to inference.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.index}
              className="reticle glass rounded-none border-none p-8"
            >
              <span className="label-tag text-violet-glow">
                {service.index}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-paper">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <p className="label-tag">Stack</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-display text-sm font-medium text-muted transition-colors hover:text-paper"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
