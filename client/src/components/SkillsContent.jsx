import React from "react";
import "./SkillsContentStyle.css"
import mongo from "../assets/mongo.png";
import css from "../assets/css.png"
import node from "../assets/node.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import Tailwind from "../assets/Tailwind.png"
import react from "../assets/react.png"
import github from "../assets/github.png"
import express from "../assets/express.png"

const SkillsContent = () => {
  return (
    <>
    <div className="skillMain">
      <div className="row1">
        <img src={mongo} alt="logo" className="imgLogo" />
        <img src={css} alt="logo" className="imgLogo" />
        <img src={node} alt="logo" className="imgLogo" />
      </div>
      <div className="row2">
        <img src={javascript} alt="logo" className="imgLogo" />
        <img src={html} alt="logo" className="imgLogo" />
        <img src={Tailwind} alt="logo" className="imgLogo" />
      </div>
      <div className="row3">
        <img src={react} alt="logo" className="imgLogo" />
        <img src={github} alt="logo" className="imgLogo" />
        <img src={express} alt="logo" className="imgLogo" />
      </div>
    </div>
    </>
  );
};

export default SkillsContent;
