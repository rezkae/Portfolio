import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WorkSummary from "@/components/WorkSummary";
import TechStackStrip from "@/components/TechStackStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee text="Engineering software with precision and purpose" />
      <WorkSummary />
      <TechStackStrip />
    </main>
  );
}
