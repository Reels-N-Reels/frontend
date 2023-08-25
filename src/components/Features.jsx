import React from "react";
import "./features.css";
import { FaCheck } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AnimatedComponent from "./AnimatedComponent";

const Features = () => {
  return (
    <AnimatedComponent>
      <div className="features">
        <h1>Why choose us?</h1>
        <div className="features-content">
          <div className="features-quote">
            "Crafting Stories That Captivate"
          </div>
          <div className="features-items">
            <div className="features-item differ">
              <div className="features-item-icon">
                <FaCheck color="#fff" />
              </div>
              <h2>Experienced crew</h2>
            </div>
            <div className="features-item">
              <div className="features-item-icon">
                <FaCheck color="#fff" />
              </div>
              <h2>Collaborative Approach</h2>
            </div>
            <div className="features-item differ">
              <div className="features-item-icon">
                <FaCheck color="#fff" />
              </div>
              <h2>Cutting-edge Technology</h2>
            </div>
            <div className="features-item">
              <div className="features-item-icon">
                <FaCheck color="#fff" />
              </div>
              <h2>Professionalism</h2>
            </div>
          </div>
        </div>
        <div className="features-action">
          <p>Choose Us for Unforgettable Movie Experiences</p>
          <div
            className="features-action-button"
            onClick={() => {
              window.location.href = "mailto:contact@reelsnreels.com";
            }}
          >
            <p>Lets Work Together</p>
            <HiOutlineArrowLongRight
              color="#CC5959"
              size={30}
              className="features-arrow"
            />
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default Features;
