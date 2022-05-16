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

const Home = () => {
  return (
    <section className="home bg-image">
      <div className="home-text">
        <h2 className="title">eda bilgili</h2>
        <p className="title-info">architecture-design studio</p>
      </div>
    </section>
  );
};

export default Home;
