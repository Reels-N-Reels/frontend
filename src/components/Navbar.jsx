import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/reelsnreels-logo.svg";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li
            className={`navbar-link ${activeItem === "home" ? "active" : ""}`}
          >
            <Link to="/" onClick={() => handleItemClick("home")}>
              Home
            </Link>
          </li>
          <li
            className={`navbar-link ${activeItem === "about" ? "active" : ""}`}
          >
            <Link to="/about" onClick={() => handleItemClick("about")}>
              About
            </Link>
          </li>
          <li
            className={`navbar-link ${activeItem === "works" ? "active" : ""}`}
          >
            <Link to="/works" onClick={() => handleItemClick("works")}>
              Our Work
            </Link>
          </li>
          <li
            className={`navbar-link ${
              activeItem === "services" ? "active" : ""
            }`}
          >
            <Link to="/services" onClick={() => handleItemClick("services")}>
              Services
            </Link>
          </li>
          <li
            className={`navbar-link ${
              activeItem === "artists" ? "active" : ""
            }`}
          >
            <Link to="/artists" onClick={() => handleItemClick("artists")}>
              Artists
            </Link>
          </li>
          <li
            className={`navbar-link ${activeItem === "blogs" ? "active" : ""}`}
          >
            <Link to="/blogs" onClick={() => handleItemClick("blogs")}>
              Blogs
            </Link>
          </li>
          <li
            className={`navbar-link ${
              activeItem === "contact" ? "active" : ""
            }`}
          >
            <Link to="/contact" onClick={() => handleItemClick("contact")}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-icons">
          <li className="navbar-icon">
            <FaFacebookF
              className="icon"
              onClick={() => {
                window.location.href =
                  "https://www.facebook.com/people/Reels-N-Reels/pfbid0pbiBrwGP7kucY8EpCaCJZLvy9pwTq7gv8pfBQK3jV6qThEVDXCY3dQuGTQUUcN9Ml/?mibextid=LQQJ4d";
              }}
            />
          </li>
          <li className="navbar-icon">
            <FaWhatsapp
              className="icon"
              onClick={() => {
                window.location.href = "https://wa.me/7008945350";
              }}
            />
          </li>
          <li className="navbar-icon">
            <FaTwitter
              className="icon"
              onClick={() => {
                window.location.href = "https://twitter.com/reelsnreels";
              }}
            />
          </li>
          <li className="navbar-icon">
            <FaInstagram
              className="icon"
              onClick={() => {
                window.location.href = "https://instagram.com/reelsnreels.in";
              }}
            />
          </li>
          <li className="navbar-icon">
            <FaYoutube
              className="icon"
              onClick={() => {
                window.location.href = "https://youtube.com/@ReelsNReelsMusic";
              }}
            />
          </li>
        </ul>
      </div>
      <button
        className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="toggle-icon"></span>
        <span className="toggle-icon"></span>
        <span className="toggle-icon"></span>
      </button>
    </div>
  );
};

export default Navbar;
