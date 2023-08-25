import React from "react";
import "./aboutContainer.css";

const AboutContainer = ({aboutHeading, aboutDescription, aboutIcon}) => {
  return (
    <div className="about-container">
      <div className="about-container-icon">
        {aboutIcon}
      </div>
      <h1>{aboutHeading}</h1>
      <p>{aboutDescription}</p>
    </div>
  );
};

export default AboutContainer;
