export default function About() {
  return (
    <section id="about" className="border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-eyebrow">03 · About</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              A developer who
              <br />
              traces the pipeline.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:col-span-7">
            <div className="space-y-5 font-body text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I graduated Computer Science at Tarlac State University, where
                my thesis, MELAScan, took an AI melanoma-detection pipeline
                from research paper to a system a clinic could actually run:
                patient records, scheduling, and the model, held to the same
                standard.
              </p>
              <p>
                I care about the seam between the two: whether the number a
                model reports is the number it actually produces, and whether
                the interface around it tells a clinician the truth. That
                habit of tracing code back to spec carries into every layer I
                build.
              </p>
              <p>
                I&apos;m currently looking for remote software development
                and AI/ML roles where that kind of full-stack accountability
                is the job, not an afterthought.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <p className="font-display text-3xl font-bold text-scan">
                  92.35%
                </p>
                <p className="label-tag mt-1">MELAScan eval accuracy</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-violet-glow">
                  3
                </p>
                <p className="label-tag mt-1">Full-stack systems shipped</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-paper">
                  01
                </p>
                <p className="label-tag mt-1">Developer, end to end</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
