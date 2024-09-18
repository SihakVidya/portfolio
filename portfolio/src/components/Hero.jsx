import React from "react";
import profile from "../assets/profile.jpg";
import "../styles/Navbar.css";

const Hero = () => {
  return (
    <section>
      <div class="hero min-h-[60vh] mt-0 bg-secondary py-8">
        <div class="hero-content flex-col lg:flex-row-reverse px-60 gap-x-60">
          <img
            src={profile}
            class="max-w-sm shadow-2xl border-2 border-gray-800"
          />
          <div>
            <h1 class="text-6xl text-black mb-3">Hello, I'm</h1>
            <h1 class="font-display text-6xl text-primary whitespace-nowrap mb-4">
              Sam Sihak Vityea
            </h1>
            <h1 class="text-3xl text-black mb-9">
              web developer & tech educator
            </h1>
            <button class="bg-black text-white font-semibold py-2 px-6 border border-black hover:border-transparent mr-3">
              Contact Me
            </button>
            <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent">
              Download CV
              <i class="bi bi-file-earmark-arrow-down ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
