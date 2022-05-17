import React, { Component } from "react";
import "./projects.css";
import projectsList from "./data";
const Projects = () => {
  return (
    <section className="projects">
      <div className="title-content">
        <h2 className="title">Projeler</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-content">
        <ul className="projects-items">
          {projectsList.map((item) => {
            return (
              <li className="projects-item" key={item.id}>
                <img src={item.image} alt={item.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
