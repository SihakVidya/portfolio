import React from "react";
import "../styles/ProjectCard.css"; // Your updated CSS

const ProjectCard = ({
  title,
  technologies,
  description,
  techs,
  codeLink,
  liveLink,
}) => {
  return (
    <div className="project-card-container">
      <div className="project-card-content">
        <div className="image-container">
          <div className="project-title text-center text-xl text-white">
            {title}
          </div>
          <div className="project-description text-black text-justify mt-2 text-xs mb-2 font-semibold">
            <p>{description}</p>
          </div>
          <div className="project-technologies text-white text-start text-xs">
            {techs}
          </div>
        </div>
        <div className="project-buttons">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <button className="project-label-box">Code</button>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="project-label-box">Live</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
