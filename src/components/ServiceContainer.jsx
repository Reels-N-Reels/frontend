import React from "react";
import "./serviceContainer.css";
import {
  MdMusicNote,
  MdContentCut,
  MdArticle,
  MdMovie,
  MdEventAvailable,
  MdGroups,
  MdDraw,
  MdGraphicEq,
  MdColorLens,
  MdSocialDistance,
  MdVideoLibrary,
} from "react-icons/md";
import ServiceSlider from "./ServiceSlider";
import AnimatedComponent from "./AnimatedComponent";

const ServiceContainer = () => {
  return (
    <AnimatedComponent>
      <div className="service-container">
        <h1>What We Do?</h1>
        <p>
          We offer a wide range of services to cater to the entertainment
          industry, including:
        </p>
        <div className="service-container-wrapper">
          <div className="service-container-items">
            <div className="service-item">
              <div className="service-item-icon">
                <MdMusicNote color="#750000" />
              </div>
              <h2>Music Production</h2>
            </div>
            <div className="service-item alter">
              <div className="service-item-icon">
                <MdDraw color="#750000" />
              </div>
              <h2>Publicity Design</h2>
            </div>
            <div className="service-item">
              <div className="service-item-icon">
                <MdContentCut color="#750000" />
              </div>
              <h2>Audio & Video Editing</h2>
            </div>
            <div className="service-item alter">
              <div className="service-item-icon">
                <MdMovie color="#750000" />
              </div>
              <h2>Movie & Web Series Production</h2>
            </div>
            <div className="service-item">
              <div className="service-item-icon">
                <MdEventAvailable color="#750000" />
              </div>
              <h2>Event Management</h2>
            </div>
            <div className="service-item alter">
              <div className="service-item-icon">
                <MdSocialDistance color="#750000" />
              </div>
              <h2>Social Media Management</h2>
            </div>
            <div className="service-item">
              <div className="service-item-icon">
                <MdGraphicEq color="#750000" />
              </div>
              <h2>Visual Effects (VFX)</h2>
            </div>
            <div className="service-item alter">
              <div className="service-item-icon">
                <MdGroups color="#750000" />
              </div>
              <h2>Talent Management</h2>
            </div>
            <div className="service-item">
              <div className="service-item-icon">
                <MdColorLens color="#750000" />
              </div>
              <h2>Color Grading</h2>
            </div>
            <div className="service-item alter">
              <div className="service-item-icon">
                <MdVideoLibrary color="#750000" />
              </div>
              <h2>Visual Storytelling</h2>
            </div>
            <div className="service-item">
              <div className="service-item-icon">
                <MdArticle color="#750000" />
              </div>
              <h2>Content Creation</h2>
            </div>
          </div>
          <ServiceSlider className="service-container-slider" />
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default ServiceContainer;
