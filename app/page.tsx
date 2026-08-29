import Hero from "@/components/Hero";
import AboutSummary from "@/components/AboutSummary";
import WorkSummary from "@/components/WorkSummary";
import TechStackStrip from "@/components/TechStackStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSummary />
      <WorkSummary />
      <TechStackStrip />
    </main>
  );
}
