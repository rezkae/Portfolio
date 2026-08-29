const SET_SIZE = 4;

/**
 * Horizontally looping text band (marquee). One "set" of SET_SIZE copies is
 * rendered twice back to back inside a single track, and the track
 * translates -50% via a pure CSS animation. Because each half is a full set
 * (wider than any viewport), the loop is seamless with no visible gap.
 * Decorative, hence aria-hidden.
 */
export default function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-line bg-surface/40" aria-hidden="true">
      <div className="marquee-track flex w-max items-center py-2.5 sm:py-3">
        {[0, 1].map((half) => (
          <span key={half} className="flex items-center whitespace-nowrap">
            {Array.from({ length: SET_SIZE }).map((_, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                <span className="px-5 font-display text-sm font-bold uppercase tracking-tighter text-muted sm:px-8 sm:text-base">
                  {text}
                </span>
                <span className="text-scan">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
