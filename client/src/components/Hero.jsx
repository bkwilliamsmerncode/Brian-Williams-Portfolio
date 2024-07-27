import "./HeroStyle.css";
import hacker from "../assets/hacker2.png";
import { Link } from "react-router-dom";
import Vid from "../assets/herovid.mp4"

import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
      <div className="App">
      <div className="video-background">
      <video autoPlay loop muted>
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        </div>
      </div>
      <div className="content">
        <p>HI, I'M BRIAN WILLIAMS</p>
        <h1>FULL STACK WEB DEVELOPER</h1>
        <div>
            <Link to="/Projects" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
