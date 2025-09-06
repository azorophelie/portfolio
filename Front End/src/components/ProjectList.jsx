// src/components/ProjectList.jsx

import React from "react";

const ProjectList = ({ project, onProjectClick, image }) => {
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

      {/* Overlay uniquement pour les projets "en cours" */}
        {project.category?.includes("en cours") && (
          <div className="image-overlay">
            <span className="overlay-text">En cours</span>
            </div>
        )}
    </div>
  );
};

export default ProjectList;
