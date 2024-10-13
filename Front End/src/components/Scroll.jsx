import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 

const ScrollButton = () => {
    // État pour contrôler la visibilité du bouton de retour en haut
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler la page en douceur vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
   // Fonction qui contrôle la visibilité du bouton
  const toggleVisibility = () => {
     // Si la position de défilement verticale est supérieure à 300px, le bouton devient visible
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
        // Sinon, il reste caché
      setIsVisible(false);
    }
  };
   // Utilisation du hook useEffect pour ajouter et supprimer un événement de scroll
  useEffect(() => {
    // Ajoute un écouteur d'événements pour détecter le défilement de la page
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
        {/* Si isVisible est true, afficher le bouton */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll"
          aria-label="Scroll" // Attribut d'accessibilité pour le bouton
        >
          <FontAwesomeIcon icon={faArrowUp}  /> 
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
