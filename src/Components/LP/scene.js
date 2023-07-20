import React from "react";
import { Html, Text, Line, RoundedBox } from "@react-three/drei";
import { Euler, Vector3 } from "three";

export const Wall = () => {
  return (
    <>
      <mesh position={[0, 6, -3]} castShadow receiveShadow>
        <boxGeometry args={[16, 12, 1]} />
        <meshLambertMaterial color={"pink"} />
      </mesh>
      <mesh
        position={[-8, 6, 5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[16, 12, 1]} />
        <meshLambertMaterial color={"pink"} />
      </mesh>
    </>
  );
};

export const Box = () => {
  return (
    <mesh position={[0, 5, 0]} castShadow receiveShadow rotation={new Euler(0,0,0,"XYZ")}>
      <RoundedBox args={[15,10,0.2]} radius={0.2}/>
      <meshLambertMaterial color="red"/>
      <Text position={new Vector3(0,3,0.15)} color={"black"} rotation={new Euler(0, 0, 0, "XYZ")}>hi</Text>
    </mesh>
  );
};

export const SmallBox = () => {
  return (
    <mesh position={[6, 1, -1.5]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"green"} />
    </mesh>
  );
};

export const Ball = () => {
  return (
    <mesh position={[1, 6, -1]} castShadow receiveShadow>
      <sphereGeometry args={[1, 128, 128]} />
      <meshLambertMaterial color={"yellow"} />
    </mesh>
  );
};

export const Ground = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color={"#ddddff"} />
    </mesh>
  );
};
