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
        <div style={{display: "flex", flexFlow: "row wrap",justifyContent: "space-evenly", alignItems: "center"}}>
            <div style={{width: "30vw", minWidth: "300px" ,animation: "1s anim-lineUp 200ms ease-out forwards", marginTop: "-5%"}}>
                <Logos setCurrskill={setCurrskill}/>  
            </div>
            <div style={{width: "30vw", minWidth: "300px" ,animation: "1s anim-lineUp 200ms ease-out forwards", display: "flex", justifyItems: "center", alignItems: "center"}}>
                <SkillCard skillInfo={currskill}/>
            </div>
        </div>
    )
}

export default SkillSection;