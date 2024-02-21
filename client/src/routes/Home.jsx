import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work"
import Footer from '../components/Footer';
import TextSphere from "../components/textsphere/TextSphere";


function Home() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <TextSphere />
      <Work /> 
      <Footer /> 
    </div>
  )
}

export default Home