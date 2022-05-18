import React, { useState, useEffect } from "react";
import "./navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const controlNav = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNav);

      return () => {
        window.removeEventListener("scroll", controlNav);
      };
    }
  });
  return (
    <nav className={`navbar ${show && "nav-display"}`}>
      <section className="container">
        <img
          src={require("../images/EdaBilgiliLogo.png")}
          alt="Eda Bilgili Logo"
          className="logo"
        />
        <ul className="nav-items">
          <li className="nav-item">
            <a href="about">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </section>
    </nav>
  );
};
export default Navbar;
