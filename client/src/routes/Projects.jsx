import React from "react";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Work from "../components/Work";
import PricingCard from "../components/PricingCard";



function Projects() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my recent work"/> 
      <Work />
      <PricingCard /> 
    </div>
  );
}

export default Projects;
