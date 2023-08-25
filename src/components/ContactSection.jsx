import React, {useState} from "react";
import "./contactSection.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";
import "./contactSection.css";
import AnimatedComponent from "./AnimatedComponent";

const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleComposeEmail = () => {
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      );
      const mailtoLink = `mailto:contact@reelsnreels.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
    };
  return (
    <AnimatedComponent>
      <div className="contact-section">
        <div className="contact-image-container">
          <h1>Contact us</h1>
          <div className="contact-info">
            <a href="mailto:contact@reelsnreels.com">contact@reelsnreels.com</a>
            <h3>+91-98564-07809</h3>
          </div>
          <div className="contact-description">
            We would love to hear from you. Please don't hesitate to get in
            touch with us if you have any questions or would like to discuss a
            potential collaboration.
          </div>
          <div className="contact-call-to-action">
            <p>Want to meet us virtually!</p>
            <div
              className="call-to-action"
              onClick={() => {
                window.location.href = "mailto:contact@reelsnreels.com";
              }}
            >
              <p>Schedule Meet</p>
              <HiOutlineArrowLongRight
                color="#fff"
                size={30}
                className="contact-arrow"
              />
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter Your Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="contact-form-button" onClick={handleComposeEmail}>
            Send
            <span>
              <TbSend size={18} />
            </span>
          </button>
          <p>We will contact you back via email.</p>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default ContactSection;
