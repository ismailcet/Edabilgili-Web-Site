import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="container">
        <img
          src={require("../images/EdaBilgiliLogo.png")}
          alt="Eda Bilgili Logo"
          className="logo"
        />
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">About</a>
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
