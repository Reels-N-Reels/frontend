import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Navbar from "../components/Navbar";
import videoFile1 from "./../assets/videos/atithi-edit.mp4";
import videoFile2 from "./../assets/videos/basti-edit.mp4";
import videoFile3 from "./../assets/videos/goolam-edit.mp4";
import WorkSlider from "../components/WorkSlider";
import Testimonies from "../components/Testimonies";
import LogoSlider from "../components/LogoSlider";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import ServiceContainer from "../components/ServiceContainer";
import Project from "../components/Project";
import ContactSection from "../components/ContactSection";
import Features from "../components/Features";

const Home = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <div className="slick-dots-container">
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-video home-slider">
          <Slider {...settings} className="video-carousel">
            <div className="home-video-container">
              <video
                src={videoFile1}
                autoPlay
                muted
                loop
                className="bg-video"
                controls={false}
              ></video>
            </div>
            <div className="home-video-container">
              <video
                src={videoFile2}
                autoPlay
                muted
                loop
                className="bg-video"
                controls={false}
              ></video>
            </div>
            <div className="home-video-container">
              <video
                src={videoFile3}
                autoPlay
                muted
                loop
                className="bg-video"
                controls={false}
              ></video>
            </div>
          </Slider>
        </div>
        <h1>Bringing Dreams to Life through Music and Film.</h1>
        <p>
          Experience the magic of Indian cinema and music with ReelsNReels, a
          cutting-edge production company based in India, where storytelling
          meets soul-stirring melodies.
        </p>
      </div>
      <Navbar className="nav" />
      <WorkSlider />
      <AboutSection />
      <ServiceContainer />
      <Features />
      <Project />
      <Testimonies />
      <LogoSlider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
