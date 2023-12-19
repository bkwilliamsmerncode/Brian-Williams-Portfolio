import React from 'react';
import { Link } from "react-router-dom";
import "./NavbarStyle.css";



const Navbar = () => {



  return (
    <div className="header">
    <Link to="/">
<h1>Portfolio</h1>
    </Link>
    <ul className="nav-menu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Projects">Projects</Link>
        </li>
        <li>
            <Link to="/Skills">Skills</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
    </ul>
   
        
        
        
    
    </div>
  )
}

export default Navbar