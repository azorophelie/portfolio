import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";

import BookiImage from "../images/Booki_Projet_2.webp";
import BluelImage from "../images/Bluel_Projet_3.webp";
import GrimoireImage from "../images/Vieux_Grimoire.webp";
import KasaImage from "../images/Kasa_Projet_5.webp";
import CarducciImage from "../images/Nina-Carducci.webp";
import MeteoImage from "../images/meteo.webp";
import Imgencours from "../images/encours.webp";

import BookiVideo from "../Video/Booki_vid.mp4";
import BluelVideo from "../Video/Bluel_vid.mp4";
import GrimoireVideo from "../Video/Grimoire_vid.mp4";
import KasaVideo from "../Video/Kasa_vid.mp4";
import CarducciVideo from"../Video/Nina_vid.mp4";
import MeteoVideo from "../Video/meteo_video.mp4";
import EnCours from "../Video/projet-avenir.mp4"

const media = {
  Booki: { image: BookiImage, video: BookiVideo },
  "Sophie Bluel": { image: BluelImage, video: BluelVideo },
  "Mon Vieux Grimoire": { image: GrimoireImage, video: GrimoireVideo },
  Kasa: { image: KasaImage, video: KasaVideo },
  "Nina Carducci": {image: CarducciImage, video: CarducciVideo},
  "Application Météo": {image: MeteoImage, video: MeteoVideo},
  "Mon Nouveau Projet": {image: Imgencours, video: EnCours}
};

const ProjectCard = ({ projects, onProjectClick }) => {
  const [activeTab, setActiveTab] = useState("front-End");

  

const filteredProjects =
  activeTab === "all"
    ? projects
    : projects.filter(project =>
        project.category && project.category.includes(activeTab)
      );


  return (
    <div>
      {/* Boutons de filtre */}
      <div className="tab-buttons">
  {["all", "front-End", "back-End", "API", "SEO", "en cours"].map((tab) => (
    <button
      key={tab}
      className={activeTab === tab ? "active" : ""}
      onClick={() => setActiveTab(tab)}
    >
      {tab === "all" ? "Tous" : tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ))}
</div>

      {/* Conteneur des projets */}
      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectList
                project={{ ...project, video: media[project.title]?.video }}
                onProjectClick={onProjectClick}
                image={media[project.title]?.image}
                
              />
              <h3 className="project-card-title">{project.title}</h3>
            </motion.div>
          ))
        ) : (
          <p>Aucun projet disponible.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
