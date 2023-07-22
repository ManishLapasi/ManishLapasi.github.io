import React from "react"
import './Project.css'

function ProjectCard({title, description, skills, bg, url}, fb) {
    return (
        <a className="projectCard" href={url} target="_blank" style={{backgroundImage: "url("+bg+")", backgroundPositionX: "50%", backgroundPositionY: "120%", flexBasis: fb.toString()+"%"}} 
        onMouseMove={(e) => {
            console.log(e);
            const {x,y} = e.target.getBoundingClientRect();
            const cx = (e.clientX-x).toString()+"px";
            const cy = (e.clientY-y).toString()+"px";
            e.target.parentElement.style.setProperty("--cx",cx);
            e.target.parentElement.style.setProperty("--cy",cy);
        }}
        
        onMouseLeave={(e) => {
            e.target.parentElement.style.setProperty("--cx",0);
            e.target.parentElement.style.setProperty("--cy",0);
        }}

        >
            <div className="projectInfo">
                    <div className="projectTitle">{title}</div>
                    <div className="projectDesc">{description}</div>
                    <div style={{display: "flex", flexFlow: "row wrap", gap: "10%", justifyItems:"center"}}>{skills.map((s) => <p className="projectSkill">{s}</p>)}</div>
            </div>
        </a>
    )
}

function Projects() {
    const projects = [
        {
            title: "Music Recommendation App",
            description: "A spotify web-app that suggests similar songs based on user preferences such as tempo, loudness, danceability.",
            skills: ["Scikit-learn", "ReactJS", "Rust", "AWS"],
            bg: "./proj_imgs/proj1.png",
            url: "https://manishlapasi.github.io/react-spotify"
        }
    ]

    const fb =  90/projects.length;

    return (
        <div className="projects">
            {projects.map((p) => ProjectCard(p, fb))}
        </div>
    )
}

export default Projects;