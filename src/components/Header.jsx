import React from "react";
import "./header.css";

const Header = ({ headerImage, headerText }) => {
    // const style = {
    //   backgroundImage: `url(${headerImage})`,
    // };
  return (
    <div className="header">
      <img src={headerImage} alt="header" className="header-image" />
      <h1>{headerText}</h1>
    </div>
  );
};

export default Header;
