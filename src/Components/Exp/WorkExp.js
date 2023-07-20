import React from "react"
import './WorkExp.css'

function WorkExpBlock({title, company, during, summary, skills, styles}) {
    return (
        <div className="expBlock" style={{...styles}}>
            <div className="bottom" />
            <div className="top">
                <p className="titleLine">{title} @ <span className="companyName">{company}</span></p>
                <p>{during}</p>
                {summary.map((line) => <p>{line}</p>)}
                <div className="skills">
                    {skills.map((skill) => <div className="workSkill">{skill}</div>)}
                </div>
                </div>
        </div>
    )
}

function WorkExp() {
    const items = [
        {
            title: "ML Intern",
            company: "Georgia Tech",
            during: "May '23 - Aug '23",
            summary: [
                "I worked at Georgia Tech's Center for Quality Growth and Development as a ML/SDE intern at their research lab.",
                "I helped build a ML model on geospatial data to better inform decisions around freight-related development.",
                "I also worked on eliminating the need for expertise in GIS tools (such as ArcGIS) by building a web-based online tool that could be used for visualizing and manipulating geospatial data on maps."
            ],
            skills: [
                "ReactJS", "Python", "Scikit-learn", "Pandas",
            ],
            styles: {
                "flex": "1 1 20%"
            }
        },
        {
            title: "DevOps / SDE",
            company: "Honeywell",
            during: "Aug '20 - Aug '22",
            summary: [
                "I joined Honeywell as a SDE and subsequently became the Principal DevOps/SRE focal for Honeywell Forge's Identity and Access system.",
                "I primarily worked on improving the reliability, scalability and efficiency of the system and aided in deploying it across several geographic regions.",
                "I also worked on internal tooling to aid the product's maintenance and upkeep, such as standardising terraform templates and building customized customer onboarding platforms."
            ],
            skills: [
                "Docker", "Kubernetes", "Prometheus", "Grafana", "Azure", "Terraform"
            ],
            styles: {
                "flex": "2 1 20%"
            }
        },
        {
            title: "SDE Intern",
            company: "GreyOrange Robotics",
            during: "May '19 - July '19",
            summary: [
                "I was part of the core software team behind GreyOrange's flagship Butler robot, tasked with improving its path calculation algorithm.",
                "I programmed a custom min-heap routine onto their original algorithm and brought down the computation time from hours to a couple minutes (from linear to log!).",
                "I also implemented a subroutine to visualize both the real-time and the predicted paths of the robots."
            ],
            skills: [
                "C++", "Python", "Erlang"
            ],
            styles: {
                "flex": "1 1 20%"
            }
        }
    ]

    return (
        <div className="expSection">
            {items.map((exp) => WorkExpBlock(exp))}
        </div>
    )
}

export default WorkExp;