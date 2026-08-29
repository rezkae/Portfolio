import Hero from "@/components/Hero";
import WorkSummary from "@/components/WorkSummary";
import AboutSummary from "@/components/AboutSummary";
import TechStackStrip from "@/components/TechStackStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSummary />
      <AboutSummary />
      <TechStackStrip />
    </main>
  );
}
