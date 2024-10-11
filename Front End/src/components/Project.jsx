// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project, onProjectClick, image }) => {
  return (
    <div
      className="project-card"
      onClick={() => onProjectClick(project)}
    >
      <img
        src={image || "chemin/vers/image/par_defaut.webp"}
        alt={project.title}
        className="project-image"
      />
    </div>
  );
};

export default ProjectCard;
