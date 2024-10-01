import React from "react";
import SkillCard from "./SkillCard";
import "../styles/AboutMe.css";

const SkillPage = () => {
  const frontendTech = [
    "HTML",
    "CSS",
    "Javascript",
    "Tailwind CSS",
    "React",
    "Vue",
    "Bootstrap",
    "Wix", // Added Wix for Frontend
  ];

  const backendTech = ["Node", "Vite", "PostgreSQL", "Prisma"];

  const deploymentTech = [
    "Docker",
    "Git",
    "Linux",
    "Digitalocean",
    "Nginx",
    "Vercel", // Added Vercel for Deployment
    "Cloudflare", // Added Cloudflare for Deployment
  ];

  const otherTech = ["Figma", "Canva", "Adobe AI", "Github"]; // Added GitHub for Others

  return (
    <section id="skills">
      <div className="hero min-h-[60vh]  py-0">
        <div className="hero-content w-[80rem] flex flex-col items-start px-[2rem] my-20">
          <div className="about-me mb-10">
            <h1 className="text-6xl font-display text-primary">Skills</h1>
          </div>
          <div className="skills-list">
            <SkillCard title="Front-End" technologies={frontendTech} />
            <SkillCard title="Back-End" technologies={backendTech} />
            <SkillCard title="Deployment" technologies={deploymentTech} />
            <SkillCard title="Others" technologies={otherTech} />
          </div>
        </div>
      </div>
      <hr className="border-third mx-10"></hr>
    </section>
  );
};

export default SkillPage;