import React from "react";
// Importation de l'image et de la vidéo associées au projet 'Kasa'
import Kasaimage from "../images/Kasa_Projet_5.webp";
import KasaVideo from "../Video/Kasa_vid.mp4";
import ProjectCard from "./Project";
// Création d'un objet 'images' qui associe les titres des projets à leurs images respectives
const images = {
  Kasa: Kasaimage, // Association du projet 'Kasa' à son image
};
const Kasa = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects
          .filter((project) => project.title === "Kasa")
          .map((project, index) => (
            <ProjectCard
              key={index}
              project={{ ...project, video: KasaVideo }}
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
export default Kasa;
