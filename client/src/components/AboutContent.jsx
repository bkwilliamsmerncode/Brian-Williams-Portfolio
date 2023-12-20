import React from 'react'
import "./AboutContentStyle.css"
import { Link } from 'react-router-dom'
import MongoDB from "../assets/mongodb2.png"
import reactjs2 from "../assets/reactjs2.png"

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
<h1>Who am I?</h1>
<p>I am a MERN Full Stack Web Developer. I create responsive secure front-end and back-end websites and web applications for my clients.</p>
<Link to="/contact">
  <button className="btn">Contact</button>
</Link>
      </div>

      <div className="right">
<div className="img-container">
  <div className="img-stack top">
    <img src={reactjs2} alt="react" className="img" />
  </div>
  <div className="img-stack bottom">
    <img src={MongoDB} alt="mongodb" className="img" />
  </div>
</div>
      </div>
    </div>
  )
}

export default AboutContent