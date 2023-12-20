import React from "react";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Work from "../components/Work";



function Projects() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my recent work"/> 
      <Work />
    </div>
  );
}

export default Projects;
