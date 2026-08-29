/**
 * Horizontally looping text band (marquee). The content is duplicated
 * twice inside one track and the track translates -50% via a pure CSS
 * animation, so the loop is seamless. Decorative, hence aria-hidden.
 */
export default function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-line bg-surface/40" aria-hidden="true">
      <div className="marquee-track flex w-max items-center py-2.5 sm:py-3">
        {[0, 1].map((half) => (
          <span key={half} className="flex items-center whitespace-nowrap">
            <span className="px-5 font-display text-sm font-bold uppercase tracking-tighter text-muted sm:px-8 sm:text-base">
              {text}
            </span>
            <span className="text-scan">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
