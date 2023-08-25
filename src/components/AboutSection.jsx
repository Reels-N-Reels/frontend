/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import AboutContainer from "./AboutContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEye, FaTrophy, FaCheck } from "react-icons/fa";
import { MdRocketLaunch, MdDesignServices, MdClose } from "react-icons/md";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import "./aboutSection.css";
import aboutImage1 from "./../assets/images/im (1).jpg";
import aboutImage2 from "./../assets/images/im (2).jpg";
import aboutImage3 from "./../assets/images/im (3).jpg";
import aboutImage4 from "./../assets/images/im (4).jpg";
import aboutImage5 from "./../assets/images/im (5).jpg";
import aboutImage6 from "./../assets/images/im (6).jpg";
import aboutImage7 from "./../assets/images/im (7).jpg";
import aboutImage8 from "./../assets/images/im (8).jpg";
import aboutImage9 from "./../assets/images/im (9).jpg";
import aboutImage10 from "./../assets/images/im (10).jpg";
import aboutImage11 from "./../assets/images/im (11).jpg";
import aboutImage12 from "./../assets/images/im (12).jpg";

const AboutSection = () => {
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
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <div className="slick-dots-about">
          <ul style={{ margin: "0px" }}>{dots}</ul>
        </div>
      </div>
    ),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 850, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const icon1 = <FaEye color="#750000" />;
  const icon2 = <MdRocketLaunch color="#750000" />;
  const icon3 = <MdDesignServices color="#750000" />;
  const icon4 = <FaCheck color="#750000" />;
  const icon5 = <FaTrophy color="#750000" />;

  const images = [
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4,
    aboutImage5,
    aboutImage6,
    aboutImage7,
    aboutImage8,
    aboutImage9,
    aboutImage10,
    aboutImage11,
    aboutImage12,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <div className="about-section">
      <div className="about-section-text">
        <h1>Who We Are ?</h1>
        <div className="about-section-content">
          <h1>
            Welcome to ReelsNReels, we are a movie and music production studio
            based in the beautiful city of Bhubaneswar, Odisha, India.
          </h1>
          <p>
            We are a creative team of passionate individuals who are dedicated
            to bringing the magic of cinema and music to life. With years of
            experience in the industry, we strive to create exceptional and
            meaningful content that resonates with audiences worldwide.
          </p>
        </div>
      </div>
      <div className="about-section-containers">
        <AboutContainer
          aboutHeading="Our Vision"
          aboutDescription="Our vision is to be a leading production company in the Indian film and music industry, known for our innovative and compelling content that captivates audiences across genres and languages."
          aboutIcon={icon1}
          className="about-section-container"
        />
        <AboutContainer
          aboutHeading="Our Mission"
          aboutDescription="Our mission is to produce engaging and impactful movies and music that entertain, inspire, and leave a lasting impression on our audiences."
          aboutIcon={icon2}
          className="about-section-container"
        />
        <AboutContainer
          aboutHeading="Our Expertise"
          aboutDescription="We are equipped with cutting-edge tech and state-of-the-art infrastructure. Our team is experienced in filmmaking and music production."
          aboutIcon={icon3}
          className="about-section-container"
        />
        <AboutContainer
          aboutHeading="Our Values"
          aboutDescription=" We are dedicated to ethical and responsible practices in all our productions, aiming to make a positive impact on the communities we serve."
          aboutIcon={icon4}
          className="about-section-container"
        />
        <AboutContainer
          aboutHeading="Our Achievements"
          aboutDescription="Over the years, we have garnered recognition and accolades for our work in the film and music industry. We are proud of our achievements and are motivated to continue raising the bar in our pursuit of excellence."
          aboutIcon={icon5}
          className="about-section-container"
        />
      </div>
      <div className="about-section-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="about-slider-image"
              onClick={() => openModal(index)}
            >
              <img src={image} alt={`Image ${index}`} className="about-image" />
            </div>
          ))}
        </Slider>
        {(selectedImageIndex !== null && modalIsOpen) && (
          <div className="overlay" onClick={closeModal}>
            <div className="modal">
              <button className="close-button" onClick={closeModal}>
                <MdClose color="#fff" />
              </button>
              <div className="about-image-container">
                <img
                  src={images[selectedImageIndex]}
                  alt={`Image ${selectedImageIndex}`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
