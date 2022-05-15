import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Wave, Random } from "react-animated-text";
import { useSprings, a, animated, useSpring } from "@react-spring/three";
import $ from "jquery";
import "./home.css";
let visible = {
  visible: true,
};
const number = 35;
const colors = [
  "#2C061F",
  "#374045",
  "#D89216",
  "#e0feff",
  "lightpink",
  "#E1D89F",
];
const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  };
};
const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  };
});

function Content() {
  const [springs, set] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 500, tension: 50, friction: 50 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  );
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ));
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

const Home = () => {
  return (
    <section
      className="home"
      onClick={() => {
        if (visible.visible == true) {
          document.querySelector(".title").classList.remove("fadeOut");
          document.querySelector(".title").classList.add("fadeIn");
          visible.visible = false;
        } else {
          document.querySelector(".title").classList.remove("fadeIn");
          document.querySelector(".title").classList.add("fadeOut");
          visible.visible = true;
        }
      }}
    >
      <Canvas
        linear
        flat
        shadows
        camera={{ position: [0, 0, 100], fov: 100 }}
        className="boxes"
      >
        <Lights />
        <Content />
      </Canvas>
      <h2 className="title">
        eda <span>bilgili</span>
      </h2>
    </section>
  );
};

export default Home;
