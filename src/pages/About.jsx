import React from "react";
import "./about.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import aboutHeader from "./../assets/images/anurag-chand-RdxidNXDGz4-unsplash.jpg";
import AboutSection from "../components/AboutSection";
import Team from "../components/Team";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <Navbar className="navbar" />
      <Header
        headerImage={aboutHeader}
        headerText="#AboutUs"
        className="header"
      />
      <AboutSection />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
