import React from "react";
// Importation de l'image et de la vidéo associées au projet 'Mon Vieux Grimoire'
import Grimoireimage from "../images/Vieux_Grimoire.webp";
import GrimoireVideo from "../Video/Grimoire_vid.mp4";
import ProjectCard from "./Project";
// Création d'un objet 'images' qui associe les titres des projets à leurs images respectives
const images = {
  "Mon Vieux Grimoire": Grimoireimage, // Association du projet 'Vieux Grimoire' à son image
};
// Composant fonctionnel Booki qui reçoit deux props :
// 'projects' (la liste des projets) et 'onProjectClick' (fonction pour gérer le clic sur un projet)
const Grimoire = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects
          .filter((project) => project.title === "Mon Vieux Grimoire")
          .map((project, index) => (
            <ProjectCard
              key={index}
              project={{ ...project, video: GrimoireVideo }}
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

export default Grimoire;
