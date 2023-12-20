import React from 'react'
import Navbar from "../components/Navbar";
import Hero2
 from '../components/Hero2';
import AboutContent from "../components/AboutContent"

function About() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT" text="I'm a Full-Stack Web Developer"/>
      <AboutContent /> 

    </div>
  )
}

export default About