import React, {useState} from "react";
import './PadSkills.css';
import LogoIcon from "./LogoIcon";

const myskills = [
        {
          name:"Python",
          type: "Language",
          yoe: "3+",
          summ: "Everybody's friendly neighborhood programming language",
          img_loc: "python.png"
        },
        {
          name:"C++", 
          type: "Language",
          yoe: "3+",
          summ: "If you look deep enough, there's a lot of C++ under most hoods",
          img_loc: "cpp.png"
        },
        {
          name:"Rust", 
          yoe: "<1",
          type: "Language",
          summ:"StackOverflow's favourite for the past 8 years",
          img_loc: "rust.png"
        },
        {
          name:"SQL", 
          type: "Language",
          yoe: "3+",
          summ:"RDBMS facilitator",
          img_loc: "sql.png"
        },
        {
          name:"AWS", 
          type: "Cloud",
          yoe: "2",
          summ:"On-demand cloud computing, from Amazon",
          img_loc: "aws.png"
        },
        {
          name:"Azure", 
          type: "Cloud",
          yoe: "3+",
          summ:"Microsoft's hybrid take on cloud computing",
          img_loc: "azure.png"
        },
        {
          name:"GCP", 
          type: "Cloud",
          yoe: "1",
          summ:"Google's cutting-edge answer to cloud computing",
          img_loc: "gcp.png"
        },
        {
          name:"Docker", 
          type: "PaaS",
          yoe: "1+",
          summ:"No more 'but it works fine on my laptop!'",
          img_loc: "docker.png"
        },  
        {
          name:"Openshift", 
          type: "PaaS",
          yoe: "1+",
          summ:"PaaS kubernetes",
          img_loc: "openshift.png"
        },      
        {
          name:"Grafana", 
          type: "PaaS",
          yoe: "2",
          summ:"Dashboards, dashboards, dashboards",
          img_loc: "grafana.png"
        },
        {
          name:"NodeJS", 
          type: "Framework",
          yoe: "2+",
          summ:"Event-driven, asynchronous Web2 orchestrator",
          img_loc: "nodejs.png"
        },
        {
          name:"Kubernetes", 
          type: "Framework",
          yoe: "1+",
          summ:"The conductor for a Docker composed orchestra",
          img_loc: "kubernetes.png"
        },
        {
          name:"Terraform", 
          type: "Framework",
          yoe: "2",
          summ:"State based infra-as-code management",
          img_loc: "terraform.png"
        },
        {
          name:"Ansible", 
          type: "Framework",
          yoe: "1",
          summ:"Imperative infra-as-code configuration management",
          img_loc: "ansible.png"
        },
        {
          name:"Neo4j", 
          type: "Framework",
          yoe: "1",
          summ:"Graph DB facilitator",
          img_loc: "neo4j.png"
        },
        {
          name:"Pytorch", 
          type: "Framework",
          yoe: "2+",
          summ:"You know, AI",
          img_loc: "pytorch.png"
        },
        {
          name:"Prometheus", 
          type: "Framework",
          yoe: "2",
          summ:"Scrapes data for those dashboards (and others)",
          img_loc: "prometheus.png"
        },
        {
          name:"ReactJS", 
          type: "Framework",
          yoe: "2+",
          summ:"Web2 reusability facilitator",
          img_loc: "reactjs.png"
        }
]

const PadSkills = () => {
    const [skill, setCurrskill] = useState(null)
    return (
        <div className="ipadBG">
          <div className="ipadLayout">
            {myskills.map((s,i) => LogoIcon(s, setCurrskill))}
          </div>
        </div>
    )
}

export default PadSkills;