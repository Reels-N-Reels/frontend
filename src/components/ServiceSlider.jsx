import React from "react";
import "./serviceSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import serviceImage1 from "../assets/images/omkar-sahoo-YgVBHFMS3vY-unsplash.jpg";
import serviceImage2 from "../assets/images/anirudh-pranesh-7Qr-BjYLZf8-unsplash.jpg";
import serviceImage3 from "../assets/images/pexels-sujata-guna-14106728.jpg";
import serviceImage4 from "../assets/images/subhadeep-dishant-49o4b3Yqs1I-unsplash.jpg";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-prev-arrow" onClick={onClick}>
      <FiArrowLeft size={20} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-next-arrow" onClick={onClick}>
      <FiArrowRight size={20} />
    </button>
  );
};
const ServiceSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <div className="slick-dots-service">
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      </div>
    ),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="service-slider">
      <div className="service-image">
        <img src={serviceImage4} alt="Back" />
      </div>
      <div className="service-normal"></div>
      <div className="service-slider-slides">
        <Slider {...settings}>
          <div className="service-slider-image">
            <img src={serviceImage1} alt="service1" />
          </div>
          <div className="service-slider-image">
            <img src={serviceImage2} alt="service2" />
          </div>
          <div className="service-slider-image">
            <img src={serviceImage3} alt="service3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ServiceSlider;
