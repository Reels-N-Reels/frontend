import React from "react";
import "./services.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import servicesHeader from ".././assets/images/moreno-matkovic-OkUtPxS4UnU-unsplash.jpg";
import ServiceContainer from "../components/ServiceContainer";
import Features from "../components/Features";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="services">
      <Navbar />
      <Header
        headerImage={servicesHeader}
        headerText="#Services"
        className="header"
      />
      <ServiceContainer />
      <Features />
      <Project />
      <Footer />
    </div>
  );
};

export default Services;
