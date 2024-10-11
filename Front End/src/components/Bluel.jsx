// src/components/Bluel.jsx
import React from "react";
import Bluelimage from "../images/Bluel_Projet_3.webp";
import BluelVideo from "../Video/Bluel_vid.mp4";
import ProjectCard from "./Project";

const images = {
  Bluel: Bluelimage,
};

const Bluel = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects
          .filter((project) => project.title === "Bluel")
          .map((project, index) => (
            <ProjectCard
              key={index}
              project={{ ...project, video: BluelVideo }}
              onProjectClick={onProjectClick}
              image={images[project.title]}
            />
          ))
      ) : (
        <p>Aucun projet disponible.</p>
      )}
    </div>
  );
};

export default Bluel;
