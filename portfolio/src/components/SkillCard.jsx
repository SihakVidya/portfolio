import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiDigitalocean,
  SiNginx,
  SiCanva,
  SiAdobeillustrator,
  SiWix,
  SiVercel,
  SiCloudflare,
} from "react-icons/si";
import "../styles/SkillCard.css";

const icons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Javascript: <FaJs />,
  "Tailwind CSS": <SiTailwindcss />,
  React: <FaReact />,
  Vue: <FaVuejs />,
  Bootstrap: <FaBootstrap />,
  Wix: <SiWix />, // New logo for Wix
  Node: <FaNodeJs />,
  Vite: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-vite"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
      <path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
    </svg>
  ),
  PostgreSQL: <SiPostgresql />,
  Prisma: <SiPrisma />,
  Docker: <FaDocker />,
  Git: <FaGitAlt />,
  Linux: <FaLinux />,
  Digitalocean: <SiDigitalocean />,
  Nginx: <SiNginx />,
  Vercel: <SiVercel />, // New logo for Vercel
  Cloudflare: <SiCloudflare />, // New logo for Cloudflare
  Figma: <FaFigma />,
  Canva: <SiCanva />,
  "Adobe AI": <SiAdobeillustrator />,
  Github: <FaGithub />, // New logo for GitHub
};

const SkillCard = ({ title, technologies }) => {
  return (
    <div className="card-container shadow-2xl">
      <div className="card-content">
        <div className="tech-icons">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`tech-icon-placeholder hover-shadow ${tech.toLowerCase()}`}
            >
              {icons[tech]} {/* Only render the icon */}
            </div>
          ))}
        </div>
        <div className="label-box">{title}</div>
      </div>
    </div>
  );
};

export default SkillCard;
