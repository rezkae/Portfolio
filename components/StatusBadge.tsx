import type { ProjectStatus } from "@/lib/data";

const config: Record<
  ProjectStatus,
  { label: string; className: string; dot: string; pulse: boolean }
> = {
  "in-progress": {
    label: "In Progress",
    className: "border-violet/40 bg-violet/10 text-violet-glow",
    dot: "bg-violet",
    pulse: true,
  },
  shipped: {
    label: "Shipped",
    className: "border-scan/40 bg-scan/10 text-scan",
    dot: "bg-scan",
    pulse: false,
  },
};

/**
 * Small status chip for a project: a pulsing dot plus label.
 * "In Progress" reads violet, "Shipped" reads green.
 */
export default function StatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const { label, className: tone, dot, pulse } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${tone} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dot}`}
          />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
      </span>
      {label}
    </span>
  );
}
