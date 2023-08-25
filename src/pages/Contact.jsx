import React from "react";
import "./contact.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import contactHeader from "../assets/images/danny-lines-UgPW494v_Rg-unsplash.jpg";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <Header
        headerImage={contactHeader}
        headerText="#ContactUs"
        className="header"
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
