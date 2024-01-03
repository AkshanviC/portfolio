import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Vignesh Akshan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
