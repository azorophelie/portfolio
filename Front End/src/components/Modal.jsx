// src/components/Modal.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

// Composant Modal qui prend trois props : isOpen (pour savoir si la modale est ouverte),
// onClose (fonction pour fermer la modale), et project (détails du projet à afficher dans la modale)
const Modal = ({ isOpen, onClose, project }) => {
  // Si la modale n'est pas ouverte ou si aucun projet n'est sélectionné, retourner null pour ne rien afficher
  if (!isOpen || !project) return null;

  return (
    // Overlay de la modale. Un clic ici fermera la modale en appelant onClose
    <div className="modal-overlay" onClick={onClose}>
      {/* Contenu de la modale. Un clic ici ne fermera pas la modale (évite la propagation de l'événement) */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Bouton de fermeture de la modale représenté par le symbole "×" */}
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>

        <h3>{project.title}</h3>
        {/* Afficher le projet qui contient une vidéo dans un lecteur vidéo */}
        {project.video && (
          <div className="modal-video-container">
            <video
              src={project.video} // Source de la vidéo du projet
              autoPlay // Lecture automatique
              loop // Boucle infinie
              muted // Désactiver le son
              playsInline // Lecture dans le navigateur
              className="modal-video"
            />
          </div>
        )}
        {/* Section avec les détails du projet, divisée en deux colonnes */}
        <div className="modal-details">
          <div className="modal-column">
            <p className="modal-description">Description:</p>
            <p className="text-modal">{project.description}</p>

            <p className="modal-description">Problématiques:</p>
            <p className="text-modal">{project.problems}</p>
          </div>
          <div className="modal-column">
            <p className="modal-description">Compétences développées:</p>
            <p className="text-modal">{project.skillsDeveloped}</p>

            <p className="modal-description">Solutions:</p>
            <p className="text-modal">{project.solutions}</p>
          </div>
        </div>
        {/* Boutons permettant de consulter le code GitHub ou la page GitHub du projet */}
         {/* Boutons avec icônes */}
         <div className="modal-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projet-btn"
          >
            {/* Icône GitHub */}
            <FontAwesomeIcon icon={faGithub} className="modal-icon" />
            <span className="text-btn">Code GitHub</span>
          </a>
          {project.githubPages ? (
            <a
              href={project.githubPages}
              target="_blank"
              rel="noopener noreferrer"
              className="projet-btn"
            >
              {/* Icône GitHub Pages */}
              <FontAwesomeIcon icon={faFileAlt}  className="modal-icon"/>
              <span className="text-btn">GitHub Pages</span>
            </a>
) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
