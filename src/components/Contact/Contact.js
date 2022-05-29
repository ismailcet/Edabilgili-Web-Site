import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(`${form.current.user_name.value}`);
    emailjs
      .sendForm(
        "service_w5a3vad",
        "template_ioq9w8h",
        form.current,
        "-qZF-DCDp7zTH8ZLD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="title-contact">
        <h2 className="title">Contact</h2>
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
      <div className="email-form">
        <h3 className="form-title">Send Email</h3>
        <div className="underline"></div>
        <form ref={form} className="email-send" onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="form-item"
            id="user_name"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="form-item"
            id="user_email"
            placeholder="Email"
          />
          <input
            type="number"
            name="user_number"
            className="form-item"
            id="user_number"
            placeholder="Number"
          />
          <textarea
            name="message"
            className="form-item"
            id="message"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="btn-email" />
        </form>
      </div>
    </section>
  );
};
export default Contact;
