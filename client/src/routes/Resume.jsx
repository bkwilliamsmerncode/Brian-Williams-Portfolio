import React from 'react'
import Navbar from "../components/Navbar"
import ResumeContent from '../components/Resume/ResumeContent'
import Footer from "../components/Footer"
import Hero2 from '../components/Hero2';

const Resume = () => {
  return (
   <>
   <Navbar /> 
   <Hero2 heading="Resume" text="Brian K. Williams"/> 
   <ResumeContent /> 
   <Footer /> 
   </>
  )
}

export default Resume
