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
    emailjs
      .sendForm(
        "service_w5a3vad",
        "template_ioq9w8h",
        {
          subject: `${form.current.user_name.value}`,
          name: `${form.current.user_name.value}`,
          email: `${form.current.user_email.value}`,
          message: `${form.current.message.value}`,
        },
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
  };
  return (
    <section className="contact">
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
        <form ref={form} className="email-send" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};
export default Contact;
