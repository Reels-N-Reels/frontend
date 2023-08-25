import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";
import "./testimonies.css";
import AnimatedComponent from "./AnimatedComponent";

const Testimonies = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div>
        <div className="slick-dots-testimony">
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      </div>
    ),
  };
  return (
    <AnimatedComponent>
      <div className="testimonies">
        <Slider {...settings}>
          <div className="testimony">
            <div className="quote-icon">
              <FaQuoteRight color="#CC5959" size={60} />
            </div>
            <h2>
              "As a music composer, I've had the privilege of composing for
              ReelsNReels studio, and it's been an incredible experience. Their
              willingness to experiment and incorporate innovative music styles
              into their movies is truly commendable. The collaboration between
              the music and visual departments is seamless, resulting in an
              immersive cinematic experience."
            </h2>
            <h3>Somesh Satpathy</h3>
            <p>Music Composer</p>
          </div>
          <div className="testimony">
            <div className="quote-icon">
              <FaQuoteRight color="#CC5959" size={60} />
            </div>
            <h2>
              "As an actor, I've had the privilege of being a part of
              ReelsNReels's projects, and I must say it has been a transformable
              experience. The studio's ability to provide a comfortable and
              collaborative environment on set is remarkable. They understand
              the nuances of storytelling and work tirelessly to capture the
              essence of each character and scene. It's refreshing to see a
              production studio in India pushing the boundaries of cinematic
              excellence."
            </h2>
            <h3>Subhasis Sharma</h3>
            <p>Actor</p>
          </div>
          <div className="testimony">
            <div className="quote-icon">
              <FaQuoteRight color="#CC5959" size={60} />
            </div>
            <h2>
              "Working with ReelsNReels studio has been an absolute delight!
              Their creativity knows no bounds, and they have an incredible
              knack for bringing stories to life. The team's dedication to every
              aspect of production is truly commendable. From script development
              to post-production, their attention to detail and commitment to
              quality is unparalleled. I'm thrilled with the final product and
              can't wait to collaborate with them again on future projects."
            </h2>
            <h3>Satyam SS</h3>
            <p>Filmmaker</p>
          </div>
        </Slider>
      </div>
    </AnimatedComponent>
  );
};

export default Testimonies;
