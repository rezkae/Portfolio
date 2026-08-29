type PlaceholderProps = {
  label?: string;
  ratio?: string; // tailwind aspect-ratio class, e.g. "aspect-[4/5]"
  className?: string;
};

export default function ImagePlaceholder({
  label = "Project image",
  ratio = "aspect-[4/3]",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`reticle group relative flex ${ratio} w-full items-center justify-center overflow-hidden border border-dashed border-line bg-surface ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-muted"
        >
          <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M4 17.5L9 12.5L12.5 16L16.5 11.5L20.5 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="label-tag">{label}</span>
      </div>
    </div>
  );
}
