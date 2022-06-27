import React from 'react';
import ButtonDiv from './buttonDiv';
// import Myself from "../../assets/myself.jpg";
import HeaderSocial from "./headerSocial";
import Pic from "../../assets/vignesh-pic.png"
import "./header.css"

const header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola I'm</h5>
        <h2>Vignesh Babu</h2>
        <h5 className="text-light">Full-Stack Developer</h5>
        <ButtonDiv />
          <div className="myself">
          <img src={Pic} alt="myself"></img>
        </div>
        <HeaderSocial />
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header