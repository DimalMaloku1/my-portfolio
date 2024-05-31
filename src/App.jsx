// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './scrollbar.css'
function App() {
  return (
    <div className="dark:bg-slate-950">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><AboutMe /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
