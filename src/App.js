import { useEffect, useState } from "react";
import LandingPage from "./Components/LP/LandingPage";
import WorkExp from "./Components/Exp/WorkExp";
import Projects from "./Components/Projects/Project";
import CourseProjects from "./Components/CourseProjects/CourseProjects";
import Roads from "./Components/News/Road";
import Canvas from './Components/BGCanvas/Canvas';
import Navbar from "./Components/Navbar/Navbar";
import PadSkills from "./Components/IpadLayout/PadSkills";
import './App.css'


var darkcolor = "173,173,255";
var lightcolor = "173,173,255";

function App() {
  
  const [color, setColor] = useState("156,217,249");
  
  useEffect(() => {
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme) {
      if(storedTheme==='light') {setColor(lightcolor)}
      else {setColor(darkcolor)}
    }
  }, [])

  
  var supportsTouch = 'ontouchstart' in window;
  console.log("touch?", supportsTouch)

  return (
    <div>
      {!supportsTouch && <Canvas themeColor={color}/>}
      <Navbar setColor={setColor}/>
      <div className="App">
        <div className="BGSection">
          <LandingPage color={color}/>
        </div>
        <div className="heading" id="s1">Skills</div>
        <div className="BGSection">
          <PadSkills />
        </div>
        <div className="heading" id="s2">Places I've worked at</div>
        <div className="BGSection">
          <WorkExp />
        </div>
        <div className="heading" id="s3">Things I've built</div>
        <div className="BGSection">
          <Projects/>
        </div>
        <div className="heading" id="s5">Projects I've worked on</div>
        <div className="BGSection">
          <CourseProjects/>
        </div>
        <div className="heading" id="s4">The road so far</div>
        <div className="BGSection" id="timelineDiv">
          <Roads/>
        </div>
        <div className="heading" id="s5">Click <a style={{color: 'var(--text-decoration-color)'}} href="https://drive.google.com/file/d/17lWjvKNVDRuwKGCXxR1L7O2Dqv0Yxr77/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> to view all this as a PDF resume!</div>
      </div>
    </div>
  );
}

export default App;
