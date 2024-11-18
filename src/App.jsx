import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Bubble from "./components/Bubble";
import Aos from "aos";
import GoToTop from "./components/GoToTop";
import MusicButton from "./components/MusicButton";
// import AnimatedCursor from "react-animated-cursor";
import "aos/dist/aos.css"

const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      {/* <AnimatedCursor/> */}
      <MusicButton />
      <Bubble />
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <GoToTop />  
        
      </div>
    </>
  );
};

export default App;
