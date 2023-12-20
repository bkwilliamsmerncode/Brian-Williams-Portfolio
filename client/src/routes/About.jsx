import React from 'react'
import Navbar from "../components/Navbar";
import Hero2
 from '../components/Hero2';
import AboutContent from "../components/AboutContent"
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT" text="I'm a Full-Stack Web Developer"/>
      <AboutContent /> 
      <Footer />
    </div>
  )
}

export default About