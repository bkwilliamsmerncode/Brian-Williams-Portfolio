import React from 'react'
import Navbar from "../components/Navbar";
import Hero2 from '../components/Hero2';
import Form from "../components/Form";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT" text="Lets have a chat"/> 
      <Form /> 
      <Footer />
    </div>
  )
}

export default Contact
