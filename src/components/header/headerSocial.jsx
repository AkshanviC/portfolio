import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from "react-icons/fa";
import "./header.css"

const headerSocial = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/vignesh-akshan-ba0292185/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/AkshanviC" target="_blank"><FaGithub /></a>
        <a href="#contact" target="_blank"></a>
    </div>
  )
}

export default headerSocial