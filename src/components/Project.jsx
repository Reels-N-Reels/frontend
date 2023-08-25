import React from "react";
import "./project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectImage1 from "./../assets/images/up (1).jpg";
import projectImage2 from "./../assets/images/up (2).jpg";
import projectImage3 from "./../assets/images/up (3).jpg";
import projectImage4 from "./../assets/images/up (4).jpg";
import projectImage5 from "./../assets/images/up (5).jpg";
import projectImage6 from "./../assets/images/up (6).jpg";
import AnimatedComponent from "./AnimatedComponent";

const Project = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <AnimatedComponent>
      <div className="project">
        <h1>Our Upcoming Projects</h1>
        <div className="project-slider">
          <Slider {...settings}>
            <div className="project-image">
              <img src={projectImage1} alt="project1" />
            </div>
            <div className="project-image">
              <img src={projectImage2} alt="project2" />
            </div>
            <div className="project-image">
              <img src={projectImage3} alt="project3" />
            </div>
            <div className="project-image">
              <img src={projectImage4} alt="project4" />
            </div>
            <div className="project-image">
              <img src={projectImage5} alt="project5" />
            </div>
            <div className="project-image">
              <img src={projectImage6} alt="project6" />
            </div>
          </Slider>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default Project;
