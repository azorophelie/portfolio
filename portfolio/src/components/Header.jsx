import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';



 // Assure-toi que le chemin est correct

 const Header = () => {
    const [showName, setShowName] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setShowName(prev => !prev);
      }, 5000); // Change toutes les 5 secondes, ajuste si nécessaire
  
      return () => clearInterval(interval);
    }, []);
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
        <div className='name-logo'>
      <div className={`name ${showName ? 'show-name' : 'hide-name'}`}>
          {getAnimatedLetters('Ophélie Azor')}
          
        </div>
       
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/presentation" className={({ isActive }) => (isActive ? 'active' : '')}>
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences" className={({ isActive }) => (isActive ? 'active' : '')}>
              Mes Compétences
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" className={({ isActive }) => (isActive ? 'active' : '')}>
              Mes Projets
            </NavLink>
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
