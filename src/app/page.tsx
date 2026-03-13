import Intro from "@/components/Intro";
import TopSkills from "@/components/TopSkills";
import FeaturedProjects from "@/components/FeaturedProjects";
import HireMeCTA from "@/components/HireMeCTA";

export default function Home() {
  return (
    <>
      <Intro />
      <FeaturedProjects />
      <TopSkills />
      <HireMeCTA />
    </>
  );
}
