import ProjectList from "@/components/ProjectList";
import Reveal from "@/components/Reveal";
import DecodeText from "@/components/DecodeText";

export const metadata = {
  title: "Projects | Andreas Keazer Canlas",
};

export default function ProjectsPage() {
  return (
    <main>
      <Reveal>
        <div className="grid grid-cols-1 border-b border-line md:grid-cols-12">
        <div className="border-b border-line p-4 sm:p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8">
          <DecodeText text="Section" className="eyebrow block text-muted" />
          <span className="mt-2 block font-display text-5xl font-bold tracking-tighter text-paper sm:text-6xl md:text-7xl">
            01
          </span>
        </div>

        <div className="flex flex-col justify-end gap-6 p-4 sm:p-6 md:col-span-10 md:p-8 lg:p-16">
          <div>
            <DecodeText
              text="Projects"
              className="eyebrow-accent mb-2 block sm:mb-4"
            />
            <h1 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-tighter text-paper sm:text-5xl md:text-6xl xl:text-7xl">
              <DecodeText text="Project" />
              <DecodeText text="Archive" className="ml-2 text-muted/40 sm:ml-4" />
            </h1>
          </div>
          <p className="max-w-lg font-body text-sm text-muted sm:text-base">
            Everything I&apos;ve shipped, start to finish: a solo clinical
            thesis, a team fitness platform, and a small admin system built
            in Visual Basic.
          </p>
        </div>
        </div>
      </Reveal>

      <div className="px-4 pb-24 pt-4 sm:px-6 md:px-8 lg:px-16">
        <ProjectList />
      </div>
    </main>
  );
}
