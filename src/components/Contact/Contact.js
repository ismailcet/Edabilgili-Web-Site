import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="title-contact">
        <h2 className="title">Iletişim</h2>
        <div className="underline"></div>
      </div>
      <div className="contact-info">
        <div className="phone">
          <FontAwesomeIcon icon={faMobileScreen} className="item-icon" />
          <p className="phone-number">+90-000-000-00-00</p>
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} className="item-icon" />
          <p className="address">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nam
          </p>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="item-icon" />
          <p className="email-address">lorem@lorem.com</p>
        </div>
      </div>
      <div className="email-send"></div>
    </section>
  );
};
export default Contact;
