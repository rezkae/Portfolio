import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow">04 · Contact</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s put something
          <br />
          into production.
        </h2>
        <p className="mt-6 max-w-md font-body text-base text-muted">
          Open to remote software development and AI/ML roles, and
          conversations about full-stack or applied-ML projects.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="reticle inline-flex w-fit items-center border border-line px-6 py-4 font-mono text-sm text-paper transition-colors hover:border-scan hover:text-scan"
          >
            {profile.email}
          </a>

          <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
