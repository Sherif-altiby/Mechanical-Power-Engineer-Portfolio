import EducationSection from "@/components/Education";
import IndustrialExperience from "@/components/Experience";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Nav";
import ProjectsSection from "@/components/Projects";

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <IndustrialExperience />
      <EducationSection/>
    </main>
  );
};

export default page;
