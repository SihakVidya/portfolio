import React from "react";
import logo from "../assets/logo3.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="p-3">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-40 h-20" />
        <div className="cool-underline">
          <ul className="flex space-x-4 text-[#000000] mt-2 text-xl">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-black" />
    </nav>
  );
};

export default Navbar;
