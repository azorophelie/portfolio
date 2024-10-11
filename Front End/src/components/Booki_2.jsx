import React from "react";
// Importation de l'image et de la vidéo associées au projet 'Booki'
import BookiImage from "../images/Booki_Projet_2.webp";
import BookiVideo from "../Video/Booki_vid.mp4";
import ProjectCard from "./Project";

// Création d'un objet 'images' qui associe les titres des projets à leurs images respectives
const images = {
  Booki: BookiImage, // Association du projet 'Booki' à son image
};

const Booki = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects
          .filter((project) => project.title === "Booki")
          .map((project, index) => (
            <ProjectCard
              key={index}
              project={{ ...project, video: BookiVideo }}
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

export default Booki;
