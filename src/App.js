import { useState } from "react";
import WorkExp from "./Components/Exp/WorkExp";
import Cards from "./Components/LP/PokeCards";
import Projects from "./Components/Projects/Project";
import Roads from "./Components/News/Road";
import Canvas from './Components/BGCanvas/Canvas';
import Navbar from "./Components/Navbar/Navbar";
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
        <div className="pageOne" style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-around", rowGap: "10vh"}}>
          <div style={{flexBasis: "40%", flexGrow: 0, display: "flex", flexFlow: "column", justifyContent: "space-around",  rowGap: "10vh"}}>
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
            <div class="socIcons">
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
          <div style={{flexBasis: "50%", flexGrow: 0, alignItems: "center", animation: "1s anim-lineUp 200ms ease-out forwards"}}>
            <Cards/>  
          </div>  
        </div>
        <div className="heading" id="s1">Places I've worked at</div>
        <div style={{marginBottom: "10vh"}}>
          <WorkExp />
        </div>
        <div className="heading" id="s2">Things I've built</div>
        <div style={{marginBottom: "10vh"}}>
          <Projects/>
        </div>
        <div className="heading" id="s3">The road so far</div>
        <div style={{marginBottom: "10vh"}} id="timelineDiv">
          <Roads/>
        </div>
        <div className="heading" id="s4">Click <a href="https://drive.google.com/file/d/1CN0BS5TtZ3xLGfCIiYqnOUOJfpqROP_W/view?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a> to view all this as a PDF resume!</div>
      </div>
    </div>
  );
}

export default App;
