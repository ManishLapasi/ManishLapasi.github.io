import React, {useState, useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, Reflector } from "@react-three/drei";
import { Html, Text, Line, RoundedBox, Box } from "@react-three/drei";
import { Euler, Vector3, Color } from "three";
import "./Cards.css";
import { MeshReflectorMaterial } from "@react-three/drei/materials/MeshReflectorMaterial";


const myskills = [
  ["Python", "Everybody's friendly neighborhood", "programming language."],
  ["C++", "If you look deep enough, there's a","lot of C++ under most hoods."],
  ["NodeJS", "The Web2 orchestrator", ""],
  ["Rust", "StackOverflow's favourite for", "the past 8 years"],
  ["Docker", "No more 'but it works", "fine on my laptop!'"],
  ["Kubernetes", "The conductor for a", "Docker composed orchestra"],
  ["Openshift", "PaaS kubernetes", ""],
  ["Terraform", "State based infra-as-code", "management"],
  ["Ansible", "Imperative infra-as-code configuration", "management"],
  ["SQL", "RDBMS facilitator", ""],
  ["Neo4j", "Graph DB facilitator", ""],
  ["Grafana", "Dashboards, dashboards, dashboards", ""],
  ["Prometheus", "Mails data to those dashboards", ""],
  ["Pytorch", "You know, AI", ""],
  ["ReactJS", "Web2 reusability facilitator", ""],
  ["AWS", "Cloud, from Amazon", ""],
  ["Azure", "AWS if Microsoft", ""],
  ["GCP", "Azure if Google", ""],
]

const Card = () => {

    let [id, setId] = useState(0);

    let [showLines, setShowLines] = useState(false);

    let [skillName, setSkillName] = useState(myskills[0][0]);
    let [line1, setLine1] = useState("");
    let [line2, setLine2] = useState("");
    let [line3, setLine3] = useState("");
    let [i, setI] = useState(0);
    let [j, setJ] = useState(0);
    let [l, setL] = useState("");
    let s = "clear";
    let l3og = "C:/tech_I_know/>"

    useEffect(() => {
      setTimeout(() => {
        id = id+1;
        if (id==myskills.length) {id=0;}
        setId(id);
        setL("whatis "+myskills[id][0]);
      }, 7000)
    }, [id]);


    useEffect(() => {setTimeout(() => {
      if (i<=l.length) {
        setSkillName(l.slice(0,i));
        setI(i+1);
      }
      else {
        setTimeout(()=>{},100);
        setShowLines(true);
      }
    },100)}, [i])

    useEffect(() => {
      setI(0);
      setShowLines(false);
    }, [id]);

    useEffect(() => {
      if (showLines) {
        setLine1(myskills[id][1]);
        setLine2(myskills[id][2]);
        setLine3(l3og);
        setTimeout(() => setJ(0),3000);
      }
      else {
        setLine1("");
        setLine2("");
        setLine3("");
      }
    }, [showLines])

    useEffect(() => {setTimeout(() => {
        if (j<6) {
          setLine3(l3og+s.slice(0,j));
          setJ(j+1);
        }
      },100)
    }, [j])

    return (
      <mesh position={[0, 5, 0]} rotation={new Euler(0,0,0,"XYZ")}>
        <Box args={[19,10,0.2]}>
          <meshLambertMaterial color={new Color("rgb(155, 255, 255)")}/>
        </Box>
        <Text className="skillBox" position={new Vector3(-9,3,0.15)} anchorX={"left"} fontSize="1" color={"black"}>C:/tech_I_know/{'>'}{skillName}</Text>
        <Text position={new Vector3(-9,1,0.15)} anchorX={"left"} color={"black"}>{line1}</Text>
        <Text position={new Vector3(-9,0,0.15)} anchorX={"left"} color={"black"}>{line2}</Text>
        <Text position={new Vector3(-9,-2,0.15)} anchorX={"left"}  color={"black"}>{line3}</Text>
      </mesh>
    );
};

const Cards = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [10, 10, 30] }}
    >
      <pointLight position={[0, 10, 50]} color={new Color("rgb(255, 255, 255)")} />
      <pointLight position={[0, 10, -50]} color={new Color("rgb(255, 255, 255)")} />
      <pointLight position={[50, 10, 0]} color={new Color("rgb(255, 255, 255)")} />
      <pointLight position={[-50, 10, 0]} color={new Color("rgb(255, 255, 255)")} />
      <pointLight position={[0, 30, 0]} color={new Color("rgb(255, 255, 255)")} />

      <Card/>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

export default Cards;