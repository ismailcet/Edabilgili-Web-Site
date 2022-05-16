import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCompassDrafting,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import "./about.css";
const About = () => {
  return (
    <section className="about">
      <h2 className="title">Hakkımda</h2>
      <div className="container">
        <div className="info">
          <h3 className="info-title">Ne Yapıyorum?</h3>
          <div className="content">
            <h4 className="content-title">
              Yılların tecrübesi, profesyonel ekip ve sıradışı tasarımlarımız
              ile en iyisini yapmaya çalışıyoruz...
            </h4>
            <p className="item">
              <FontAwesomeIcon icon={faCompassDrafting} className="item-icon" />
              Tamamen size özel çizimlerle ...
            </p>
            <p className="item">
              <FontAwesomeIcon icon={faBrush} className="item-icon" />
              Tamamen sizin istekleriniz doğrultusunda...
            </p>
            <p className="item">
              <FontAwesomeIcon icon={faBuilding} className="item-icon" />
              Hayal ettiğiniz ve mutluluk duydunuz alanlar inşa ediyoruz.
            </p>
          </div>
        </div>
        <div className="img-content">
          <img
            src={require("../images/EdaBilgiliLogo.png")}
            alt="Logo"
            className="about-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
