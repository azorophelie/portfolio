import React from "react";
import presentationData from "../data/details.json"; // Importation des données de présentation à partir d'un fichier JSON
import myselfPhoto from "../images/me.webp";
import cvPDF from "../images/cv_ophelie_azor.pdf";

// Fonction pour gérer les clics sur les boutons et ouvrir un lien dans un nouvel onglet
const handleButtonClick = (url) => {
  window.open(url, "_blank"); // Ouvre l'URL spécifiée dans un nouvel onglet
};

const Presentation = () => {
  return (
  <div className="intro-container">
      <div className="introduction">
        <h1>{presentationData.presentation.intro}</h1>
        <div className="intro-btn">
          {/* Bouton pour envoyer un e-mail */}
          <button
            onClick={() => handleButtonClick("mailto:azor.ophelie@gmail.com")}
          >
            <i className="fas fa-envelope"></i> Me contacter
          </button>

          <button
            onClick={() => handleButtonClick("https://www.linkedin.com/in/ophelieazor/")}
          >
            <i className="fab fa-github"></i> Linkedin
          </button>
          {/* Bouton pour ouvrir le CV au format PDF */}
          <button onClick={() => handleButtonClick(cvPDF)}>
            <i className="fas fa-file-pdf"></i> Mon CV
          </button>
          {/* Bouton pour accéder au profil GitHub */}
          <button
            onClick={() => handleButtonClick("https://github.com/azorophelie")}
          >
            <i className="fab fa-github"></i> GitHub
          </button>
        </div>
      </div>
      <section className="presentation">
        <h2>Présentation</h2>
        {/* Ajout de l'image ronde avant le nom */}
        <div className="photo-name">
          <img
            src={myselfPhoto} // Utilisation de l'image importée
            alt="Votre Nom"
            className="profile-photo"
          />
          {/* Section pour la présentation personnelle avec des détails provenant du fichier JSON */}
          <p>{presentationData.presentation.name}</p>
          <p>{presentationData.presentation.age}</p>
          <p>{presentationData.presentation.background}</p>
          <p>{presentationData.presentation.mission}</p>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
