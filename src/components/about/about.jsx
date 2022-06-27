import React from "react";
import Pic from "../../assets/myself.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Pic} alt=""></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ clients</small>
            </article>  
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>  
          <p>
              Full stack developer with 3+ years Experience
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>        
        </div>
      </div>
    </section>
  );
};

export default about;
