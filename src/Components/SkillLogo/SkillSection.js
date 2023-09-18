import React, { useState } from "react";
import Logos from "./Logos";
import SkillCard from "./SkillCard";

const defaultSkill = {
    name: "Tech Name", 
    type: "Tech Type",
    yoe: "Years of Experience",
    summ:"Pick a skill on the left/above to view it!",
    img_loc: "CS.png"
  }


const SkillSection = () => {
    const [currskill, setCurrskill] = useState(defaultSkill);

    return (
        <div className="pageOne" style={{justifyContent: "space-evenly"}}>
            <div style={{width: "30vw", minWidth: "300px" ,animation: "1s anim-lineUp 200ms ease-out forwards"}}>
                <Logos setCurrskill={setCurrskill}/>  
            </div>
            <div style={{marginTop: "5vh"}}>
                <SkillCard skillInfo={currskill}/>
            </div>
        </div>
    )
}

export default SkillSection;