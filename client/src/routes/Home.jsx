import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work"
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Work /> 
      <Footer /> 
    </div>
  )
}

export default Home