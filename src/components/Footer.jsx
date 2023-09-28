import React, { useState } from "react";
import footerLogo from "../assets/images/reelsnreels-logo.svg";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    const apiKey = "AIzaSyC0BRpMCY58YY2Ckxf9T6Ii2Fmtsdhbyc0";
    const spreadsheetId = "1rON7urgcitSz42cpr9lC328MV1iq3ur9hF4KNmfUe3A";

    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [[email]],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      console.log("Email submitted:", email);
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };
  return (
    <div className="footer">
      <div className="footer-newsletter">
        <h1>Subscribe for updates </h1>
        <div className="newsletter-form">
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Subscribe</button>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-logo">
          <img src={footerLogo} alt="footerLogo" />
        </div>
        <div className="footer-menu">
          <h2>Studio</h2>
          <ul className="footer-links">
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-link">
              <Link to="/works">Our Work</Link>
            </li>
            <li className="footer-link">
              <Link to="/services">Services</Link>
            </li>
            <li className="footer-link">
              <Link to="/artists">Artists</Link>
            </li>
            <li className="footer-link">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="footer-link">
              <Link to="/career">Career</Link>
            </li>
            <li className="footer-link">
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Help & Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Information</h2>
          <ul className="contact-links">
            <li className="contact-link">
              Phone:
              <span> +91-70089-45350</span>
            </li>
            <li className="contact-link">
              Email:
              <span>
                {" "}
                sthitapattnaik@reelsnreels.com, contact@reelsnreels.com,
                debasishprusty@reelsnreels.com
              </span>
            </li>
            <li className="contact-link">
              Address:
              <a href="https://maps.app.goo.gl/z1Vokc1WruxTzqXX7">
                {" "}
                SCR-14, beside BDA Office, Unit 3, Kharvela Nagar, Bhubaneswar,
                Odisha 751001
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-end">
        <div className="footer-copyright">
          © 2023 ReelsNReels Studio. All rights reserved.
        </div>
        <ul className="footer-socials">
          <li className="footer-social">
            <FaFacebookF
              className="footer-icon"
              color="#fff"
              size={20}
              onClick={() => {
                window.location.href =
                  "https://www.facebook.com/people/Reels-N-Reels/pfbid0pbiBrwGP7kucY8EpCaCJZLvy9pwTq7gv8pfBQK3jV6qThEVDXCY3dQuGTQUUcN9Ml/?mibextid=LQQJ4d";
              }}
            />
          </li>
          <li className="footer-social">
            <FaWhatsapp
              className="footer-icon"
              color="#fff"
              size={20}
              onClick={() => {
                window.location.href = "https://wa.me/7008945350";
              }}
            />
          </li>
          <li className="footer-social">
            <FaTwitter
              className="footer-icon"
              color="#fff"
              size={20}
              onClick={() => {
                window.location.href = "https://twitter.com/reelsnreels";
              }}
            />
          </li>
          <li className="footer-social">
            <FaInstagram
              className="footer-icon"
              color="#fff"
              size={20}
              onClick={() => {
                window.location.href = "https://instagram.com/reelsnreels.in";
              }}
            />
          </li>
          <li className="footer-social">
            <FaYoutube
              className="footer-icon"
              color="#fff"
              size={20}
              onClick={() => {
                window.location.href = "https://youtube.com/@ReelsNReelsMusic";
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
