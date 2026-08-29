import Link from "next/link";
import FactStrip from "@/components/FactStrip";
import PortraitSwap from "@/components/PortraitSwap";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import DecodeText from "@/components/DecodeText";
import {
  certificates,
  currentlyExploring,
  education,
  experience,
  journey,
  profile,
  quickStats,
  services,
  techStack,
} from "@/lib/data";

export const metadata = {
  title: "About | Andreas Keazer Canlas",
};

export default function AboutPage() {
  return (
    <main>
      {/* HEADER */}
      <Reveal>
        <div className="grid grid-cols-1 border-b border-line md:grid-cols-12">
          <div className="border-b border-line p-4 sm:p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8">
            <DecodeText text="Section" className="eyebrow block text-muted" />
            <span className="mt-2 block font-display text-5xl font-bold tracking-tighter text-paper sm:text-6xl md:text-7xl">
              02
            </span>
          </div>

          <div className="flex flex-col justify-end p-4 sm:p-6 md:col-span-10 md:p-8 lg:p-16">
            <DecodeText
              text="About"
              className="eyebrow-accent mb-2 block sm:mb-4"
            />
            <h1 className="font-display text-3xl font-bold uppercase leading-[0.85] tracking-tighter text-paper sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              <DecodeText text={profile.firstName} />
              <br />
              <DecodeText text={profile.lastName} className="text-muted/40" />
            </h1>
          </div>
        </div>
      </Reveal>

      {/* PORTRAIT + INTRO */}
      <Reveal delay={0.05}>
        <div className="grid grid-cols-1 border-b border-line md:grid-cols-12">
          <div className="p-4 sm:p-6 md:col-span-5 md:border-r md:p-8 lg:p-12">
            <PortraitSwap alt={`Portrait of ${profile.firstName} ${profile.lastName}`} />
            <p className="eyebrow mt-3 block text-muted">
              Portrait · {profile.location}
            </p>
          </div>
          <div className="flex flex-col justify-center border-t border-line p-4 sm:p-6 md:col-span-7 md:border-t-0 md:p-8 lg:p-12">
            <p className="max-w-2xl font-body text-2xl leading-relaxed text-muted sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
              <DecodeText text="A developer who builds software with purpose, turning ideas into thoughtful digital experiences." />
            </p>
          </div>
        </div>
      </Reveal>

      {/* MOST IMPORTANT INFO STRIP */}
      <Reveal delay={0.1}>
        <FactStrip
          items={[
            { label: "Experience", value: quickStats[0].number + " years building" },
            { label: "Focus", value: profile.focus },
            { label: "Status", value: profile.status },
            { label: "Based in", value: profile.location },
          ]}
        />
      </Reveal>

      {/* PHILOSOPHY + NUMBERS */}
      <Reveal delay={0.15}>
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-12">
          <div className="p-4 sm:p-6 md:col-span-7 md:border-r md:p-8 lg:p-16">
            <DecodeText
              text="Philosophy"
              className="eyebrow-accent mb-4 block sm:mb-6"
            />
            <div className="max-w-2xl space-y-4 font-body text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Correctness is a habit, not a feature. I trace every number
                back to its source: a model&apos;s accuracy to the test that
                produced it, a feature&apos;s behavior to the spec that
                asked for it.
              </p>
              <p>Clean layers keep the next change cheap.</p>
            </div>
          </div>

          <div className="border-t border-line p-4 sm:p-6 md:col-span-5 md:border-t-0 md:p-8 lg:p-16">
            <DecodeText text="Numbers" className="eyebrow-accent" />
            <div className="mt-4 flex flex-col sm:mt-6">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-5 sm:py-6 ${
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

      {/* EXPERIENCE */}
      <Reveal delay={0.2}>
        <div className="border-t border-line">
          <div className="flex items-baseline justify-between border-b border-line p-4 sm:p-6 md:p-8">
            <DecodeText text="Experience" className="eyebrow-accent" />
            <span className="hidden font-mono text-[10px] text-muted/60 md:block">
              {experience.length} positions
            </span>
          </div>
          {experience.map((job) => (
            <div
              key={job.org}
              className="grid grid-cols-1 gap-4 border-b border-line py-8 sm:grid-cols-12 sm:px-6 md:px-8"
            >
              <div className="sm:col-span-4">
                <h3 className="font-display text-lg font-bold text-paper">
                  {job.role}
                </h3>
                <p className="mt-1 font-body text-sm text-muted">{job.org}</p>
                <p className="eyebrow mt-2 block text-muted">{job.period}</p>
                <p className="eyebrow mt-1 block text-muted">{job.location}</p>
              </div>
              <ul className="space-y-2 sm:col-span-8">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 font-body text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-scan" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* EXPERTISE + TECH STACK + SERVICES */}
      <Reveal delay={0.25}>
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-12">
          {/* LEFT: SECTION MARKER */}
          <div className="border-b border-line p-4 sm:p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8">
            <DecodeText text="Section" className="eyebrow block text-muted" />
            <span className="mt-2 block font-display text-5xl font-bold tracking-tighter text-paper sm:text-6xl md:text-7xl">
              03
            </span>
            <DecodeText
              text="Expertise"
              className="eyebrow-accent mt-4 block"
            />
          </div>

          {/* MIDDLE: TECH STACK + CURRENTLY EXPLORING */}
          <div className="border-b border-line p-4 sm:p-6 md:col-span-5 md:border-b-0 md:border-r md:p-8 lg:p-10">
            <DecodeText text="Tech Stack" className="eyebrow block text-muted" />
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="clickable-ring flex items-center gap-1.5 border border-line bg-surface px-2.5 py-1.5 text-xs font-medium text-paper"
                >
                  <TechIcon name={tech} className="h-3.5 w-3.5 text-muted" />
                  {tech}
                </span>
              ))}
            </div>

            <DecodeText
              text="Currently Exploring"
              className="eyebrow mt-8 block text-muted"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {currentlyExploring.map((topic) => (
                <span
                  key={topic}
                  className="border border-dashed border-line px-2.5 py-1.5 text-xs font-medium text-muted"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: SERVICES */}
          <div className="p-4 sm:p-6 md:col-span-5 md:p-8 lg:p-10">
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
        </div>
      </Reveal>

      {/* JOURNEY / TIMELINE */}
      <Reveal delay={0.3}>
        <div className="border-t border-line">
          <div className="flex items-baseline justify-between border-b border-line p-4 sm:p-6 md:p-8">
            <DecodeText text="Journey" className="eyebrow-accent" />
            <span className="hidden font-mono text-[10px] text-muted/60 md:block">
              {journey.length} milestones
            </span>
          </div>
          {journey.map((milestone) => (
            <div
              key={milestone.year}
              className="grid grid-cols-1 gap-2 border-b border-line py-6 last:border-b-0 sm:grid-cols-12 sm:gap-6 sm:px-6 sm:py-8 md:px-8"
            >
              <div className="sm:col-span-3">
                <span className="font-display text-xl font-bold tracking-tighter text-scan sm:text-2xl">
                  {milestone.year}
                </span>
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-display text-base font-bold text-paper sm:text-lg">
                  {milestone.title}
                </h3>
                {milestone.desc && (
                  <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                    {milestone.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* EDUCATION + CERTIFICATES */}
      <Reveal delay={0.35}>
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-2">
          <div className="border-b border-line p-4 sm:p-6 md:border-b-0 md:border-r md:p-8 lg:p-12">
            <DecodeText text="Education" className="eyebrow-accent" />
            <h3 className="mt-4 font-display text-xl font-bold text-paper">
              {education.degree}
            </h3>
            <p className="mt-1 font-body text-sm text-muted">
              {education.school}, {education.location}
            </p>
            <p className="eyebrow mt-2 block text-muted">{education.period}</p>
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <DecodeText text="Certificates" className="eyebrow-accent" />
            <ul className="mt-4 space-y-3">
              {certificates.map((cert) => (
                <li
                  key={cert}
                  className="flex gap-3 font-body text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-scan" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* CTAs */}
      <Reveal delay={0.4}>
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-2">
          <div className="border-b border-line p-4 sm:p-6 md:border-b-0 md:border-r md:p-8 lg:p-12">
            <p className="max-w-md font-body text-base text-muted sm:text-lg">
              Access my resume here to explore my professional background and
              skills.
            </p>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-ring reticle mt-6 inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-colors hover:border-scan hover:text-scan"
            >
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
              </svg>
            </a>
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <p className="max-w-md font-body text-base text-muted sm:text-lg">
              Interested in a collaboration? Let&apos;s discuss your next
              project.
            </p>
            <Link
              href="/contact"
              className="clickable-ring reticle mt-6 inline-flex items-center gap-2 bg-paper px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-violet"
            >
              Let&apos;s Connect
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
