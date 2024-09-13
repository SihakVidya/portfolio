import React from "react";
import logo from "../assets/logo3.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-secondary p-3">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-40 h-20" />
        <div>
          <ul className="flex space-x-4 text-[#373A40] mt-2 text-xl">
            <li>
              <a href="#projects">Home</a>
            </li>
            <li>
              <a href="#projects">About Me</a>
            </li>
            <li>
              <a href="#contact">Experience</a>
            </li>
            <li>
              <a href="#contact">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
