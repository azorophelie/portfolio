import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import presentationData from "../data/details.json";

const Formations = () => {
  // États pour gérer l'ouverture/fermeture des accordéons
  const [openFormationIndex, setOpenFormationIndex] = useState(null);
  const [openExperienceIndex, setOpenExperienceIndex] = useState(null);

  // Fonction pour basculer l'état de l'accordéon des formations
  const toggleFormationAccordion = (index) => {
    setOpenFormationIndex(openFormationIndex === index ? null : index);
  };

  // Fonction pour basculer l'état de l'accordéon des expériences
  const toggleExperienceAccordion = (index) => {
    setOpenExperienceIndex(openExperienceIndex === index ? null : index);
  };

  // Fonction pour vérifier si un accordéon est ouvert
  const isFormationOpen = (index) => openFormationIndex === index;
  const isExperienceOpen = (index) => openExperienceIndex === index;

  return (
    <div className="accordions-container">
      <div className="accordions-columns">
        {/* Section des Formations */}
        <div className="accordion">
          <h3>Formations</h3>
          {presentationData.formations.map((formation, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleFormationAccordion(index)}
              >
                <h4>{formation.title}</h4>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`arrow ${isFormationOpen(index) ? "open" : ""}`}
                />
              </div>
              <div
                className={`accordion-content ${isFormationOpen(index) ? "open" : ""}`}
              >
                <p>{formation.year}</p>
                <p>{formation.description}</p>
                <p>{formation.location}</p>
                <p>Durée : {formation.duration}</p>
                <button
                  onClick={() => window.open(formation.link, "_blank")}
                  className="formation-btn"
                >
                  Voir les détails de la formation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="accordion">
          <h3>Expériences</h3>
          {presentationData.experiences.map((experience, index) => (
            <div key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleExperienceAccordion(index)}
              >
                <h4>{experience.title}</h4>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`arrow ${isExperienceOpen(index) ? "open" : ""}`}
                />
              </div>
              <div
                className={`accordion-content ${isExperienceOpen(index) ? "open" : ""}`}
              >
                <p>{experience.year}</p>
                <p>{experience.description}</p>
                <p>{experience.location}</p>
                <p>Durée : {experience.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formations;
