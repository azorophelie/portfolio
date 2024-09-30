import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

 const Header = () => {
    const [showName, setShowName] = useState(true); // État pour afficher ou masquer le nom
    const [darkMode, setDarkMode] = useState(false); // État pour gèrer le mode sombre
  
    // Utilisation de useEffect pour alterner l'affichage du nom toutes les 5 secondes
    useEffect(() => {
      const interval = setInterval(() => {
        setShowName(prev => !prev);
      }, 5000); 
  
      return () => clearInterval(interval);
    }, []);

     // Fonction pour basculer entre le mode sombre et le mode clair
     const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    };
    
   // Fonction pour créer des spans avec une animation pour chaque lettre
   const getAnimatedLetters = (text) => {
    return text.split('').map((letter, index) => (
      letter === ' ' ? (
        <span key={index} className="space">&nbsp;</span>
      ) : (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.1}s` }} // Ajusté pour 0.1s de délai
        >
          {letter}
        </span>
      )
    ));
  };

  return (
    <header className="header">
        
      <nav className="navbar">
        <div className='name-mode'>
      <div className={`name ${showName ? 'show-name' : 'hide-name'}`}>
          {getAnimatedLetters('Ophélie Azor')}
          
        </div>
          {/* Bouton pour basculer vers le mode sombre ou clair */}
          <button onClick={toggleDarkMode} className={`dark-mode-toggle ${darkMode ? 'dark-mode-toggle' : 'light-mode-toggle'}`}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <ul className="navLinks">
       
                <li>
                    <a href="#presentation" className="lien-header">Présentation</a>
                </li>
                <li>
                    <a href="#competences" className="lien-header">Mes Compétences</a>
                </li>
            
                <li>
                    <a href="#projects" className="lien-header">Mes Projets</a>
                </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>

      </nav>
      
     
    </header>
  );
};

export default Header;
