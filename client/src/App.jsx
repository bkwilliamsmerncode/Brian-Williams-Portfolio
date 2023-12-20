import React from "react";
import "./Global.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Skills from "./routes/Skills"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={ <Home />}/> 
  <Route path="/About" element={ <About />}/> 
  <Route path="/Projects" element={ <Projects />}/> 
  <Route path="/Skills" element={ <Skills />}/> 
</Routes>
</>
  );
}

export default App;
