import React, {useState} from "react"
import './CourseProjects.css'

let courseProjects = [
  {
    "title": "ASL notes app",
    "content": "A note taking app that recognizes ASL hand gestures and executes mapped note functions, such as adding a character, opening a new note, or downloading a note. Trained a mediapipe model to recognize 26 alphabets and 7 gestures (for keywords like space, delete etc.). The motivation is to demonstrate that Vision algorithms have advanced to a point where everyday integration into apps can be explored. Interestingly, the Apple Vision Pro launched when we were halfway through this project, and it incorporates gesture recognition too!",
    "skills": ["Python", "PyTorch", "ReactJS"],
    "url": "https://github.com/ManishLapasi/cs6456-proj",
    "iconType": "github-color",
  },
  {
    "title": "Image Generation via Denoising Diffusion",
    "content": "Implemented a variant of Diffusion-based image generation algorithms (utilizing a UNet architecture with multiple upsampling and downsampling blocks) with a denoising step. In particular, experimented with different noise schedulers (linear, cosine, exponential) to judge their impact on the quality of the generated image (using FID score as a measure).",
    "skills": ["Python", "PyTorch"],
    "url": "https://colab.research.google.com/drive/1dz7bxshHhTYniWu9pCcOheGOpaCTC6jB?usp=sharing",
    "iconType": "googlecolab-color",
 },
]

function CourseProjects() {
  
  const [activeStates, setActiveStates] = useState(Array.from({length: courseProjects.length}, (_) => false));

  const handleActive = (i_changed) => {
    setActiveStates(activeStates.map((boolVal, i) => i==i_changed ? !boolVal : boolVal));
  } 

  return (
    <div className="courseProjects">
      {
        courseProjects.map((proj, i) =>
            <div className="projElement">
              <button type="button" className="projButton" onClick = {() => handleActive(i)}>
                <div style={{"display": "flex", "flex-direction":"row", "transform":"translate(0px, 5px)"}}>
                  <a href={proj.url} target="_blank" rel="noopener noreferrer"><img height="32" width="32" className="cpIcon" src={`./${proj.iconType}.svg`} /></a>
                  <div style={{"white-space": "pre-wrap"}}>{"  "}</div>
                  <div style={{"text-align": "left"}}>{`${proj.title}`}</div>
                </div>
                <div className="courseProjSkills">
                 {proj.skills.map((skill) => <div className="courseProjSkill">{skill}</div>)}
                </div>
              </button>
              <div className={`projContent ${activeStates[i] ? "active": ""}`}>{proj.content}</div>
            </div>
        )
      }
    </div>
  )
}

export default CourseProjects;


