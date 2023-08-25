import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logoSlider.css";
import company1 from "../assets/images/Sambad_logo-removebg-preview 3.png";
import company2 from "../assets/images/TARANG_CINE_PRODUCTION_LOGO-removebg-preview 3.png";
import company3 from "../assets/images/Amara_Muzik_Logo 3.png";
import company4 from "../assets/images/Alankar 3.png";
import company5 from "../assets/images/Zee_Sarthak_yashprasad 3.png";
import AnimatedComponent from "./AnimatedComponent";

const LogoSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
  };
  return (
    <AnimatedComponent>
      <div className="logo-slider">
        <Slider {...settings}>
          <img src={company1} alt="company1" className="logo-image" />
          <img src={company2} alt="company2" className="logo-image" />
          <img src={company3} alt="company3" className="logo-image" />
          <img src={company4} alt="company4" className="logo-image" />
          <img src={company5} alt="company5" className="logo-image" />
        </Slider>
      </div>
    </AnimatedComponent>
  );
};

export default LogoSlider;
