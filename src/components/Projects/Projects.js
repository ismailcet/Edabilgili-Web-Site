import React, { useState } from "react";
import "./projects.css";
import projectsList from "./data";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Projects = () => {
  const hoverItem = (item) => {
    let projectItem = document.getElementById(item.id);
    projectItem.children[1].classList.add("active");
  };
  const cancelHover = (item) => {
    let projectItem = document.getElementById(item.id);
    projectItem.children[1].classList.remove("active");
  };
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
              <Popup
                trigger={
                  <li
                    id={item.id}
                    className="projects-item"
                    onMouseEnter={() => hoverItem(item)}
                    onMouseLeave={() => cancelHover(item)}
                    onClick={() => <Popup modal nested></Popup>}
                  >
                    <img src={item.image} alt={item.name} />
                    <div className="project-overlay">
                      <h3 className="project-title">{item.name}</h3>
                    </div>
                  </li>
                }
                key={item.id}
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="popup-image"
                    />
                    <div className="actions">
                      <button
                        className="button"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        close modal
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Projects;
