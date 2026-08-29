import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import DecodeText from "@/components/DecodeText";

export const metadata = {
  title: "Contact | Andreas Keazer Canlas",
};

const channels = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    external: false,
  },
  {
    label: "Phone",
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    value: profile.phone,
    external: false,
  },
  {
    label: "GitHub",
    href: profile.github,
    value: `github.com/${profile.githubHandle}`,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "View profile",
    external: true,
  },
];

const meta = [
  { label: "Role", value: profile.fullRole },
  { label: "Based in", value: profile.location },
  { label: "Status", value: profile.available ? "Available" : "Busy" },
];

export default function ContactPage() {
  return (
    <main>
      {/* HEADER */}
      <Reveal>
        <div className="grid grid-cols-1 border-b border-line md:grid-cols-12">
          <div className="border-b border-line p-4 sm:p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8">
            <DecodeText text="Section" className="eyebrow block text-muted" />
            <span className="mt-2 block font-display text-5xl font-bold tracking-tighter text-paper sm:text-6xl md:text-7xl">
              03
            </span>
          </div>

          <div className="flex flex-col justify-end p-4 sm:p-6 md:col-span-10 md:p-8 lg:p-16">
            <div>
              <DecodeText
                text="Contact"
                className="eyebrow-accent mb-2 block sm:mb-4"
              />
              <h1 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tighter text-paper sm:text-5xl md:text-6xl xl:text-7xl">
                Let&apos;s Work
                <span className="ml-2 text-muted/40 sm:ml-4">Together.</span>
              </h1>
            </div>
            <p className="mt-6 max-w-md font-body text-base text-muted sm:text-lg">
              Open to remote software development and AI/ML roles, and always
              up for a conversation about a full-stack or applied ML project.
            </p>
          </div>
        </div>
      </Reveal>

      {/* CONTACT CHANNELS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel, index) => (
          <Reveal key={channel.label} delay={index * 0.05} className="h-full">
            <a
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className={`clickable-ring group glass flex h-full min-h-40 flex-col justify-between border-line p-4 transition-colors hover:bg-paper hover:text-ink sm:p-6 md:p-8 lg:min-h-56 lg:p-10 ${
                index < channels.length - 1 ? "border-b" : ""
              } ${index % 2 === 0 ? "sm:border-r" : ""} ${
                index >= 2 ? "sm:border-b-0" : ""
              } lg:border-b-0 ${index < channels.length - 1 ? "lg:border-r" : ""}`}
            >
              <DecodeText
                text={channel.label}
                className="eyebrow block text-muted group-hover:text-ink/60"
              />
              <div className="flex min-w-0 items-end justify-between gap-3">
                <span className="min-w-0 break-words font-display text-lg font-bold tracking-tight text-paper group-hover:text-ink sm:text-xl lg:text-2xl">
                  {channel.value}
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 flex-shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink sm:h-5 sm:w-5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* KEY FACTS */}
      <Reveal delay={0.15}>
        <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((item, index) => (
            <div
              key={item.label}
              className={`flex min-h-28 flex-col justify-between border-line p-4 sm:p-6 md:p-8 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index < meta.length - 1 ? "border-b" : ""} ${
                index >= 2 ? "sm:border-b-0" : ""
              } lg:border-b-0 ${index < meta.length - 1 ? "lg:border-r" : ""}`}
            >
              <DecodeText
                text={item.label}
                className="eyebrow block text-muted"
              />
              <div className="mt-2 flex items-center gap-2">
                {item.label === "Status" && (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scan opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-scan" />
                  </span>
                )}
                <p className="font-display text-base font-bold text-paper sm:text-lg">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* RESUME CARD */}
      <Reveal delay={0.2}>
        <div className="flex flex-col justify-between gap-6 border-t border-line p-4 sm:p-6 md:flex-row md:items-center md:p-8 lg:p-12">
          <p className="max-w-lg font-body text-base text-muted sm:text-lg">
            Please review my attached resume for a detailed account of my
            professional history, competencies, and key achievements.
          </p>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="clickable-ring reticle inline-flex w-fit shrink-0 items-center gap-2 border border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper transition-colors hover:border-scan hover:text-scan"
          >
            Download Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
          </a>
        </div>
      </Reveal>

      {/* CREDITS */}
      <Reveal delay={0.25}>
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-12">
          <div className="border-b border-line p-4 sm:p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8">
            <DecodeText text="Credits" className="eyebrow block text-muted" />
          </div>
          <div className="flex flex-col justify-center border-b border-line p-4 sm:p-6 md:col-span-8 md:border-b-0 md:border-r md:p-8 lg:p-10">
            <DecodeText
              text="Designed & Built by"
              className="eyebrow block text-muted"
            />
            <p className="mt-1 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl lg:text-4xl">
              {profile.firstName}
            </p>
          </div>
          <div className="flex items-center justify-end p-4 sm:p-6 md:col-span-2 md:p-8">
            <span className="font-display text-5xl font-bold tracking-tighter text-muted/40 sm:text-6xl md:text-7xl">
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
        <div className="border-t border-line p-4 sm:px-6 md:px-8">
          <p className="font-body text-sm text-muted">
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </Reveal>
    </main>
  );
}
