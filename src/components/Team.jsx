import React from "react";
import "./team.css";
import teamImage1 from "./../assets/images/team (1).jpg";
import teamImage2 from "./../assets/images/coo.jpg";
import teamImage3 from "./../assets/images/cto.jpg";
import teamImage4 from "./../assets/images/cfo.jpg";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Team = () => {
  const navigate = useNavigate();

  
  const handleNavigate = () => {
    navigate("/career/");
  };

  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="team-members">
        <div className="team-member">
          <div className="team-member-container">
            <div className="team-member-icons">
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/sthitapattnaik/";
                }}
              >
                <FaInstagram color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href =
                    "https://www.facebook.com/sthita.pattnaik/";
                }}
              >
                <FaFacebookF color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://twitter.com/SthitaPattnaik";
                }}
              >
                <FaTwitter color="#750000" />
              </div>
            </div>
            <img src={teamImage1} alt="Team1" />
          </div>
          <h1>Sthita Pattnaik</h1>
          <p>Founder & Chief Executive Officer</p>
        </div>
        <div className="team-member">
          <div className="team-member-container">
            <div className="team-member-icons">
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaInstagram color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaFacebookF color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaTwitter color="#750000" />
              </div>
            </div>
            <img src={teamImage2} alt="Team2" />
          </div>
          <h1>Debasish Prusty</h1>
          <p>Chief Operating Officer</p>
        </div>
        <div className="team-member">
          <div className="team-member-container">
            <div className="team-member-icons">
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaInstagram color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaFacebookF color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaTwitter color="#750000" />
              </div>
            </div>
            <img src={teamImage3} alt="Team3" />
          </div>
          <h1>Subrata Ku. Swain</h1>
          <p>Chief Technology Officer</p>
        </div>
        <div className="team-member">
          <div className="team-member-container">
            <div className="team-member-icons">
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaInstagram color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaFacebookF color="#750000" />
              </div>
              <div
                className="social-icon"
                onClick={() => {
                  window.location.href = "https://example.com";
                }}
              >
                <FaTwitter color="#750000" />
              </div>
            </div>
            <img src={teamImage4} alt="Team4" />
          </div>
          <h1>Abhinab Choudhury</h1>
          <p>Chief Financial Officer</p>
        </div>
      </div>
      <div className="team-quote">
        “We work together to create masterpiece.”
      </div>
      <div className="team-join">
        <div className="team-join-text">
          <p>Want to be part of our awesome Team</p>
          <h2>
            If you share our passion for cinema and music, we invite you to join
            us on this exciting journey. Whether you are an aspiring artist,
            musician, technician, or a creative enthusiast, we welcome your
            talent and ideas.
          </h2>
        </div>
        <button onClick={handleNavigate}>Join us</button>
      </div>
    </div>
  );
};

export default Team;
