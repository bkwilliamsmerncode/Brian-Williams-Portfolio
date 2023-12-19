import "./HeroStyle.css";
import hacker from "../assets/hacker2.png";
import { Link } from "react-router-dom";

import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img src={hacker} alt="a pic of a hero" className="hero-img" />
      </div>
      <div className="content">
        <p>HI, I'M BRIAN WILLIAMS</p>
        <h1>MERN DEVELOPER</h1>
        <div>
            <Link to="/Projects" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
