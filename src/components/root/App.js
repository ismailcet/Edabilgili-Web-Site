import React, { Component } from "react";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import "./app.css";
function App() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="main">
        <Home></Home>
        <About></About>
      </section>
    </main>
  );
}

export default App;
