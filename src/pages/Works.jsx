import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./works.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import workHeader from "./../assets/images/kal-visuals-x-NVXznLZAU-unsplash.jpg";
import WorkSlider from "../components/WorkSlider";
import Footer from "../components/Footer";

const Works = () => {
  return (
    <div className="works">
      <Navbar className="navbar" />
      <Header
        headerImage={workHeader}
        headerText="#OurWorks"
        className="header"
      />
      <WorkSlider />
      <Footer />
    </div>
  );
};

export default Works;
