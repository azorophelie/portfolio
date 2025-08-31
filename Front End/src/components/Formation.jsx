import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import presentationData from "../data/details.json";

const Formations = () => {
  const [openFormationIndex, setOpenFormationIndex] = useState(null);
  const [openExperienceIndex, setOpenExperienceIndex] = useState(null);

  return (
 <div className="accordions-container">
  <div className="accordions-columns">
    <AccordionSection
      title={<h3 className="formation-title">Formations</h3>}
      items={presentationData.formations}
      openIndex={openFormationIndex}
      toggleAccordion={(i) =>
        setOpenFormationIndex(openFormationIndex === i ? null : i)
      }
      isOpen={(i) => openFormationIndex === i}
    />

    <AccordionSection
      title={<h3 className="experience-title">Expériences</h3>}
      items={presentationData.experiences}
      openIndex={openExperienceIndex}
      toggleAccordion={(i) =>
        setOpenExperienceIndex(openExperienceIndex === i ? null : i)
      }
      isOpen={(i) => openExperienceIndex === i}
    />
  </div>
</div>

  );
};

      const AccordionSection = ({ title, items, openIndex, toggleAccordion, isOpen }) => (
  <div className="accordion">
    <h3>{title}</h3>
    {items.map((item, index) => (
      <div key={index} className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => toggleAccordion(index)}
        >
          <h4>{item.title}</h4>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`arrow ${isOpen(index) ? "open" : ""}`}
          />
        </div>
        <div className={`accordion-content ${isOpen(index) ? "open" : ""}`}>
          <p>{item.year}</p>
          <p>{item.description}</p>
          <p className="location">{item.location}</p>
          <p>Durée : {item.duration}</p>
          {item.link && (
            <button
              onClick={() => window.open(item.link, "_blank")}
              className="formation-btn"
            >
              Voir les détails
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);


export default Formations;
