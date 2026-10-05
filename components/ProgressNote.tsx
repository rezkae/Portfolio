import type { ProjectStatus } from "@/lib/data";

/**
 * One-line status note for a project. While a project is in progress the
 * note lists what is left; once shipped it states the outcome.
 */
export default function ProgressNote({
  note,
  status = "shipped",
  className = "",
}: {
  note: string;
  status?: ProjectStatus;
  className?: string;
}) {
  const inProgress = status === "in-progress";

  return (
    <div
      className={`border-l-2 px-4 py-3 ${
        inProgress ? "border-violet bg-violet/5" : "border-scan/60 bg-scan/5"
      } ${className}`}
    >
      <span
        className={`eyebrow block ${inProgress ? "text-violet-glow" : "text-scan"}`}
      >
        {inProgress ? "What's Left" : "Outcome"}
      </span>
      <p className="mt-1 font-body text-sm leading-relaxed text-muted">
        {note}
      </p>
    </div>
  );
}
