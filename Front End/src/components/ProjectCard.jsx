// src/components/ProjectCard.jsx
import React from "react";
import BookiImage from "../images/Booki_Projet_2.webp";
import BluelImage from "../images/Bluel_Projet_3.webp";
import GrimoireImage from "../images/Vieux_Grimoire.webp";
import KasaImage from "../images/Kasa_Projet_5.webp";

import BookiVideo from "../Video/Booki_vid.mp4";
import BluelVideo from "../Video/Bluel_vid.mp4";
import GrimoireVideo from "../Video/Grimoire_vid.mp4";
import KasaVideo from "../Video/Kasa_vid.mp4";
import ProjectList from "./ProjectList";

const media = {
  Booki: { image: BookiImage, video: BookiVideo },
  Bluel: { image: BluelImage, video: BluelVideo },
  "Mon Vieux Grimoire": { image: GrimoireImage, video: GrimoireVideo },
  Kasa: { image: KasaImage, video: KasaVideo },
};

const ProjectCard = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectList
            key={index}
            project={{ ...project, video: media[project.title]?.video }}
            onProjectClick={onProjectClick}
            image={media[project.title]?.image}
          />
        ))
      ) : (
        <p>Aucun projet disponible.</p>
      )}
    </div>
  );
};

export default ProjectCard;
