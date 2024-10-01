import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
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
    <section id="projects">
      <div className="hero min-h-[60vh] py-0">
        <div className="hero-content w-[80rem] flex flex-col items-start px-[2rem] my-20">
          <div className="about-me mb-10">
            <h1 className="text-6xl font-display text-primary">Projects</h1>
          </div>
          <div className="project-intro">
            <p className="text-xl text-black">
              Here are some projects that I have worked on. I lost a few through
              the passage of time, but this is what I could recover.
            </p>
          </div>
          <div className="projects-list ml-0">
            <ProjectCard
              title="Krukit"
              description={`Krukit is an assistive classroom management toolkit
              where teachers can access tools such as team generation, spin wheel, 
              rubric generation and many more teacher's tool in one easy to use platform.
              This project was done as a part of my final year project in university and it was built with my boys Sambath and Rotnak.
              I was responsible for the admin side and the deployment & maintenance of the project.`}
              techs={`> Frontend: Vue, Vuetify, Tailwind CSS\n> Backend: Golang, Fiber, PostgreSQL\n> Deployment: Docker, Digitalocean, Nginx, Cloudflare`}
              liveLink="https://krukit.paragoniu.app"
            />
            <ProjectCard
              title="This Portfolio Site"
              description="This is the site you are currently on. I built this site for fun as a side project and a place where people can get to know me more. This site's design was heavily inspired by the Tau Empire from Warhammer 40k (yes i'm a nerd)."
              techs={`> Frontend: React, Tailwind CSS, DaisyUI\n> Deployment: Vercel`}
              liveLink="https://backend-project-live.com"
              codeLink="https://backend-project-live.com"
            />
            <ProjectCard
              title="Employee Portal Subsystem"
              description="This project was done as part of the requirements for enterprise application development course at my university. This was part of a group HRMS project and this subsystem is used for employees to login and submit their requests to the HR department."
              techs={`> Frontend: Vue, Vuetify \n> Backend: Golang, Gin, PostgreSQL`}
              codeLink="https://github.com/SihakV/enterprise_employee/"
            />
            <ProjectCard
              title="DS Education Website"
              description="This is a landing page for a small study abroad agency done as a freelance project. I was also responsible for the overall branding and design of this agency. I used Wix because it's just a static website and saves a lot of time."
              techs={`> Frontend: Wix \n> Deployment: Wix, Exabytes`}
              liveLink="https://dseducation.sg"
            />
            <ProjectCard
              title="File Storage System using Couchbase and Golang"
              description="This project was completed for distributed systems course at my university. The project was to build a file storage with CRUD operations using Couchbase as the database, Golang as the backend and Digitalocean Space Storage as the file storage."
              techs={`> Frontend: HTML, CSS, Javascript \n> Backend: Golang, Couchbase, Digitalocean Space Storage \n> Deployment: Digitalocean, Nginx`}
              codeLink="https://github.com/SihakV/distributedFinal.git"
            />
            <ProjectCard
              title="ReactJobsCambodia: Mock Job Portal website"
              description="This is a mock job portal website that I built for fun. You can view different jobs and add your own jobs as well."
              techs={`> Frontend: React, TailwindCSS \n> Backend: Mock Json Server`}
              codeLink="https://github.com/SihakVidya/ReactJobsCambodia.git"
            />
          </div>
        </div>
      </div>
      <hr className="border-third mx-10"></hr>
    </section>
  );
};

export default ProjectPage;
