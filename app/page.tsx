"use client";
import EducationSection from "@/components/Education";
import IndustrialExperience from "@/components/Experience";
import HeroSection from "@/components/Hero";
import ProjectsSection from "@/components/Projects";

const page = () => {
  return (
    <main>
      <HeroSection />
      <IndustrialExperience />
      <ProjectsSection />
      <EducationSection />
    </main>
  );
};

export default page;
