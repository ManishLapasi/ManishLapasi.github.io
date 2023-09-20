import React, {useState} from "react";
import './SkillCard.css';

function SkillCard({skillInfo}){
    return (
      <div className="skilltiltCard">
        {[...Array(9)].map((_,i) => <div className={"skillmouse-pointer skillchild"+i.toString()} />)}
        <div className="skillpokemonCard">
          <div className="skillcardBody">
            <p className="skillskillType">{skillInfo.type}</p>
            <div className="skillnameYoe">
              <p className="skillskillName">{skillInfo.name}</p>
              <p className="skillyoe"><span>YoE </span>{skillInfo.yoe}</p>
            </div>
            <div className="skillimgContainer">
              <img className="skillskillImg" src={"./skill_imgs/"+skillInfo.img_loc} alt="Logo"></img>
            </div>
            <div className="skillskillDesc">{skillInfo.summ}</div>
          </div>
        </div>
      </div>
    )
}

export default SkillCard;