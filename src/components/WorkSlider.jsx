import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./workSlider.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import posterImage1 from "./../assets/images/poster 1.png";
import posterImage2 from "./../assets/images/poster 2.png";
import posterImage3 from "./../assets/images/poster 3.png";
import posterImage4 from "./../assets/images/poster 4.png";
import posterImage5 from "./../assets/images/poster 5.png";
import posterImage6 from "./../assets/images/poster 6.png";

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

const WorkSlider = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const videoOverlayRef = useRef(null);
  
  const settings = {
    arrow: true,
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    appendDots: (dots) => (
      <div>
        <div className="slick-dots-work">
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

  const openModal = (videoId) => {
    setActiveVideo(videoId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setActiveVideo(null);
    setModalIsOpen(false);
  };
useEffect(() => {
  const handleOutsideClick = (e) => {
    if (
      videoOverlayRef.current &&
      !videoOverlayRef.current.contains(e.target)
    ) {
      closeModal();
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);
  return (
    <div className="work">
      <h2>Our works</h2>
      <div className="work-container">
        <div className="work-slider">
          <Slider {...settings}>
            <div
              className="work-slide"
              onClick={() => openModal("UOMvZgq9KGg")}
            >
              <img className="work-image" src={posterImage1} alt="poster1" />
              <div className="work-gradient"></div>
              <p>Deewaangi</p>
            </div>
            <div
              className="work-slide"
              onClick={() => openModal("-xhuwnQMRKI")}
            >
              <img className="work-image" src={posterImage2} alt="poster2" />
              <div className="work-gradient"></div>
              <p>Goolaam</p>
            </div>
            <div
              className="work-slide"
              onClick={() => openModal("jai-m7gA0CY")}
            >
              <img className="work-image" src={posterImage3} alt="poster3" />
              <div className="work-gradient"></div>
              <p>Atithi</p>
            </div>
            <div
              className="work-slide"
              onClick={() => openModal("mjQz-wk1xKE")}
            >
              <img className="work-image" src={posterImage4} alt="poster4" />
              <div className="work-gradient"></div>
              <p>Last Summer</p>
            </div>
            <div
              className="work-slide"
              onClick={() => openModal("rEBANw1cg7c")}
            >
              <img className="work-image" src={posterImage5} alt="poster5" />
              <div className="work-gradient"></div>
              <p>Gangasiyuli</p>
            </div>
            <div
              className="work-slide"
              onClick={() => openModal("cofQC-QVScA")}
            >
              <img className="work-image" src={posterImage6} alt="poster6" />
              <p>Basti Ch-1</p>
            </div>
          </Slider>
        </div>
      </div>
      {activeVideo !== null && modalIsOpen && (
        <div className="video-overlay" ref={videoOverlayRef}>
          <button className="close-button" onClick={closeModal}>
            <MdClose color="#fff" />
          </button>
          <div className="video-container">
            <iframe
              title="YouTube Video"
              src={`https://www.youtube.com/embed/${activeVideo}`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSlider;
