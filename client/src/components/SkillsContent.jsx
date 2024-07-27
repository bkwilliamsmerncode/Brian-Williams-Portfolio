import React from "react";
import "./SkillsContentStyle.css";
import mongo from "../assets/mongo.png";
import css from "../assets/css.png";
import node from "../assets/node.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import Tailwind from "../assets/Tailwind.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import express from "../assets/express.png";
import jquery from "../assets/jquery.jpg";
import es6 from "../assets/es6.jpg";
import materialui from "../assets/materialui.png";

const skills = [
  { src: mongo, alt: "MongoDB" },
  { src: css, alt: "CSS" },
  { src: node, alt: "Node.js" },
  { src: javascript, alt: "JavaScript" },
  { src: html, alt: "HTML" },
  { src: Tailwind, alt: "Tailwind CSS" },
  { src: react, alt: "React" },
  { src: github, alt: "GitHub" },
  { src: express, alt: "Express" },
  { src: es6, alt: "ES6" },
  { src: jquery, alt: "jQuery" },
  { src: materialui, alt: "Material-UI" }
];

const SkillsContent = () => {
  return (
    <div className="skills-section">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.src} alt={skill.alt} className="imgLogo" />
          <p>{skill.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;