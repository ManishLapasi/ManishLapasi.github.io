import React, {useState, useEffect} from "react";
import "./LogoIcon.css";

const LogoIcon = (skill, setCurrskill) => {
    return (
        <div onClick={() => setCurrskill(skill)}>
            <div className="logoIcon">
                {[...Array(9)].map((_,i) => <div className={"mouse-pointer-logo child-logo"+i.toString()} />)}
                <div className="logoImg">
                    <img className="img-element" src={"./skill_imgs/"+skill.img_loc} alt="Logo"></img>
                </div>
            </div>
            <div className="skill-text">{skill.name}</div>
        </div>
    )
}

export default LogoIcon;