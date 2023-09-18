import { useState } from "react";
import WorkExp from "./Components/Exp/WorkExp";
import Projects from "./Components/Projects/Project";
import Roads from "./Components/News/Road";
import Canvas from './Components/BGCanvas/Canvas';
import Navbar from "./Components/Navbar/Navbar";
import SkillSection from "./Components/SkillLogo/SkillSection";
import './App.css'

function App() {
  const summaryText = "A software engineer who loves building things for the web, and ensuring they are reliably and scalably performant."
  const abstractText = "I'm currently pursuing my Master's in Computer Science at Georgia Tech, where I'm majoring in ML / AI and Computing Systems."

  const [color, setColor] = useState("156,217,249");

  var supportsTouch = 'ontouchstart' in window;
  console.log("touch?", supportsTouch)

  return (
    <div>
      {!supportsTouch && <Canvas themeColor={color}/>}
      <Navbar setColor={setColor}/>
      <div className="App">
        <div className="pageOne" style={{display: "flex", flexFlow: "row wrap", alignSelf: "center", justifyContent: "space-evenly", rowGap: "10vh", columnGap: "8vw"}}>
          <div style={{flexBasis: "40%", flexGrow: 0, display: "flex", flexFlow: "column",rowGap: "10vh"}}>
            <div className='introBox'>
                Hello there, I'm
                <div className="coloredText">
                  <div>
                    {[..."Lapasi."].map((x) => <div className='nameDiv'>{x}</div>)}
                  </div>
                  <div>
                    {[..."I write Code."].map((x) => <div className='nameDiv'>{x}</div>)}
                  </div>
                </div>
            </div>
            <div className='summary'>{summaryText}</div>
            <div className='summary'>{abstractText}</div>
          </div>
          <div class="techbars boxed">
              <p>Backend</p>
              <div class="skillbar" id="back-end">
                <div class="skills back-end"></div>
              </div>

              <p>Frontend</p>
              <div class="skillbar" id="front-end">
                <div class="skills front-end"></div>
              </div>

              <p>Reliability</p>
              <div class="skillbar" id="sre">
                <div class="skills sre"></div>
              </div>

              <p>DevOps</p>
              <div class="skillbar" id="devops">
                <div class="skills devops"></div>
              </div>
              <div class="socIcons" style={{marginTop: "10%"}}>
              <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background" id="linkedin-circle"></i>
                  <a href="http://linkedin.com/in/manikandanlp"  target="_blank" rel="noopener noreferrer" class="fa fa-linkedin fa-stack-1x" aria-hidden="true"> </a>
              </span>
              <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background" id="github-circle"></i>
                  <a href="http://github.com/manishlapasi"  target="_blank" rel="noopener noreferrer" class="fa fa-github fa-stack-1x" aria-hidden> </a>
              </span>
            </div>
          </div>
        </div>
        <div className="heading" id="s1">Skills</div>
        <SkillSection />
        <div className="heading" id="s2">Places I've worked at</div>
        <div style={{marginBottom: "10vh"}}>
          <WorkExp />
        </div>
        <div className="heading" id="s3">Things I've built</div>
        <div style={{marginBottom: "10vh"}}>
          <Projects/>
        </div>
        <div className="heading" id="s4">The road so far</div>
        <div style={{marginBottom: "10vh"}} id="timelineDiv">
          <Roads/>
        </div>
        <div className="heading" id="s5">Click <a href="https://drive.google.com/file/d/17lWjvKNVDRuwKGCXxR1L7O2Dqv0Yxr77/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a> to view all this as a PDF resume!</div>
      </div>
    </div>
  );
}

export default App;
