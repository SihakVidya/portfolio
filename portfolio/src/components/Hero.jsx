import React from "react";
import profile from "../assets/profile.jpg";
import "../styles/Navbar.css";
import "../styles/FadeIn.css";
import "../styles/Hero.css";
import cv from "../assets/CV.pdf";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section id="hero">
      <div class="hero min-h-[60vh] mt-0 py-8">
        <div class="hero-content lg:flex-row-reverse gap-x-40">
          <img
            src={profile}
            class="profile max-w-sm shadow-2xl border-2 border-gray-800 fade-in-animation"
          />
          <div className="cool-underline2">
            <h1 class=" text-intro-1 text-black mb-3">Hello, I'm</h1>
            <div>
              {" "}
              {/* Adjust this width to your content's length */}
              <h1 className=" text-intro-2 font-display text-primary whitespace-nowrap mb-4">
                <ReactTyped strings={["Sam Sihak Vityea"]} typeSpeed={100} />
              </h1>
            </div>
            <h1 class="text-intro-3 text-black mb-9 ">
              web developer & tech educator
            </h1>
            <button class="bg-black text-white font-semibold py-2 px-6 border border-black hover:border-transparent mr-3">
              <a href="#contact">Contact Me</a>
            </button>
            <button>
              <a
                href={cv}
                download="SihakVityeaSam-CV (2).pdf"
                className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent inline-flex items-center"
              >
                Download CV
                <i class="bi bi-file-earmark-arrow-down ml-2"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-third mx-10"></hr>
    </section>
  );
};

export default Hero;
