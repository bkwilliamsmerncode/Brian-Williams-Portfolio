import React from "react";
import "./Global.css"
import Home from "./routes/Home";
import Projects from "./routes/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={ <Home />}/> 
  <Route path="/Projects" element={ <Projects />}/> 
</Routes>
</>
  );
}

export default App;
