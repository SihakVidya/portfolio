import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import "../styles/ContactMe.css"; // Import the CSS file for styling

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="hero min-h-[40vh] py-0">
        <div className="hero-content flex flex-col items-start px-[2rem] my-10">
          <div className="about-me mb-10">
            <h1 className="text-6xl font-display text-primary ">Contact Me</h1>
          </div>
          <div className="contact-details mb-8">
            <div className="contact-item flex items-center mb-4">
              <FaPhoneAlt className="contact-icon mr-3" />
              <span className="text-lg">(+855) 70 88 94 71</span>
            </div>
            <div className="contact-item flex items-center mb-4">
              <FaEnvelope className="contact-icon mr-3" />
              <span className="text-lg">samsihakvityea@gmail.com</span>
            </div>
            <div className="contact-item flex items-center">
              <IoMdPin className="contact-icon mr-3" />
              <span className="text-lg">Phnom Penh, Cambodia</span>
            </div>
          </div>
          <div className="social-icons flex space-x-6">
            <a
              href="https://web.facebook.com/sihak.vidya/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/sihakvidya/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/sihak-vityea-sam-5590a4236"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/SihakVityea_Sam"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTelegram />
            </a>
            <a
              href="https://github.com/SihakVidya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-third mx-10" />
    </section>
  );
};

export default ContactMe;
