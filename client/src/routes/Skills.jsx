import React from "react";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import SkillsContent from "../components/SkillsContent";


const Skills = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="SKILLS" text="These are my Skill Sets" />
      <SkillsContent />

    </>
  );
};

export default Skills;