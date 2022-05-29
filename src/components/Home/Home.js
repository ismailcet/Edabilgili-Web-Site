import React, { useState, useEffect } from "react";

import "./home.css";
let visible = {
  visible: true,
};

const Home = () => {
  return (
    <section className="home bg-image" id="home">
      <div className="home-text">
        <h2 className="title">eda bilgili</h2>
        <p className="title-info">architecture-design studio</p>
      </div>
    </section>
  );
};

export default Home;
