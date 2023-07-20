import React, { useEffect, useRef, useState } from 'react'
import { Vector3, Euler, Quaternion } from 'three'
import { Canvas, } from '@react-three/fiber'
import { Html, OrbitControls, TrackballControls } from '@react-three/drei'
import './Elements.css';

let animDuration = 2000;
let sphereRadius = 35;
let sphereCenterPos = new Vector3(0,0,0);
let cameraPos = new Vector3(0,0,20);
let cameraUp = new Vector3(0,1,0);
let cameraRotQ = new Quaternion().setFromEuler(new Euler(1,1,1,'XYZ'));
let dProgress = 0.01;
let dRot = 0.01;

const table = [
  {id:"Python", value: 10},
  {id:"C++", value: 4},
  {id:"NodeJS", value: 8},
  {id:"Rust", value: 6},
  {id:"SQL", value: 8},
  {id:"Docker", value: 8},
  {id:"Terraform", value: 10},
  {id:"Kubernetes", value: 8},
  {id:"Grafana", value: 10},
  {id:"Ansible", value: 6},
  {id:"Prometheus", value: 10},
  {id:"Tensorflow", value: 6},
  {id:"Flask", value: 8},
  {id:"ReactJS", value: 6},
  {id:"D3", value: 8},
  {id:"Neo4j", value: 8},
  {id: "Azure", value: 8},
  {id: "AWS", value: 4},
  {id: "GCP", value: 6},
  {id: "Openshift", value: 6}
]

const theta = Math.sqrt( table.length * Math.PI );

let targets = { 
  sphere: table.map((word, i) => {
        const phi = Math.acos( - 1 + ( 2 * i ) / table.length );
        return new Vector3().setFromSphericalCoords(sphereRadius, phi, theta*phi).sub(sphereCenterPos);
      }
    ), 
  tabular: table.map((word, i) => new Vector3(15*(i%5)-35, 10*(Math.floor(i/5)-1), 30) ),
  helix: [], 
  grid: [] 
};

function handleClick(controlsRef) {
  const initialPosition = controlsRef.current.object.position.clone();
  const initialUp = controlsRef.current.object.up.clone();
  const initialRotQ = new Quaternion().setFromEuler(controlsRef.current.object.rotation);
  const initialZoom = controlsRef.current.object.zoom;
  controlsRef.current.enabled = false;
  
  const startTime = Date.now();
  console.log("controls cam",controlsRef.current.object);
  console.log(controlsRef.current);
  console.log(initialPosition);

  const updateCameraPosition = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / animDuration, 1);

    const newPosition = initialPosition.clone().lerp(cameraPos, progress);
    const newUp = initialUp.clone().lerp(cameraUp, progress);
    const newRotQ = new Euler().setFromQuaternion(initialRotQ.clone().slerp(cameraRotQ, progress))
    controlsRef.current.object.position.copy(newPosition);
    controlsRef.current.object.up.copy(newUp)
    controlsRef.current.object.rotation.copy(newRotQ);
    controlsRef.current.update();

    if (progress < 1) {
      requestAnimationFrame(updateCameraPosition);
    }
  };
  requestAnimationFrame(updateCameraPosition);
  controlsRef.current.enabled = true;
  controlsRef.current.target0.copy(sphereCenterPos);
  //controlsRef.current.targetVector.copy(sphereCenterPos);
};

function setIniPos(controlsRef, rotating, setRotating) {
  setTimeout( () => {
    console.log(controlsRef);
      if (controlsRef && controlsRef.current && controlsRef.current.object){
        controlsRef.current.maxDistance = 100;
        handleClick(controlsRef);
        //controlsRef.current.minPolarAngle = Math.PI/2;
        //controlsRef.current.maxPolarAngle = Math.PI/2;
      }
      else {
        setIniPos(controlsRef);
      }
    }, 1000);
}

function tweenObjects(objects, setObjects, targetPos, progress) {
  if (progress<1){
      console.log(objects, progress, targetPos);
      let newTargs = objects.map((currPos,i) => currPos.clone().lerp(targetPos[i], progress))
      setObjects(newTargs);
      requestAnimationFrame(() => tweenObjects(objects, setObjects, targetPos, progress+dProgress));
  }
}

function MyCanvas() {

  const [objects, setObjects] = useState(targets.sphere);
  const controlsRef = useRef();

  useEffect(() => setIniPos(controlsRef), []);

  return (
    <div className='outerdiv1'>
      <div className='canvasDiv'>
        <Canvas>
          <OrbitControls ref={controlsRef} target={sphereCenterPos} autoRotateSpeed={3}/>
          {objects.map((position, i) => <Html wrapperClass='element' className='symbol' position={position}>{table[i].id}</Html>)}
        </Canvas>
      </div>
      <button onClick={() => handleClick(controlsRef)}>Reset Cam</button>
      <button onClick={() => {controlsRef.current.autoRotate = false;tweenObjects(objects, setObjects, targets.tabular, 0); handleClick(controlsRef)}}>Table</button>
      <button onClick={() => {controlsRef.current.autoRotate = true;tweenObjects(objects, setObjects, targets.sphere, 0); handleClick(controlsRef)}}>Sphere</button>
    </div>
  );
}

export default MyCanvas;