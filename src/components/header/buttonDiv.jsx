import React from "react";
import CV from "../../assets/CV.pdf";
import "./header.css"

const buttonDiv = () => {
  return (
    <div>
      <div className="buttonDiv">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contat" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  );
};

export default buttonDiv;
